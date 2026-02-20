// ===== STRIKEVENT DEVBLOG — POST DATA =====
// Add new posts to the top of this array.
// Available tags: UPDATE, ANNOUNCEMENT, PATCH, DEVLOG, BEHIND_THE_SCENES
// Images: set to null for a gradient placeholder, or use a URL string.

const posts = [

  {
    id: "devlog-006",
    slug: "devlog-6-rollback-netcode-is-live",
    date: "2026-02-19",
    tag: "UPDATE",
    title: "Devlog #06 - Rollback Netcode Is Live",
    summary:
      "GGPO rollback netcode running over EOS peer-to-peer relay. Cross-network online matches are working. Here's how we pulled it off.",
    body: `This is it. The big one. GGPO rollback netcode is fully integrated and running over Epic Online Services peer-to-peer relay.
     Two players on completely different networks can fight each other with responsive, low-latency controls and the game corrects any mispredictions automatically through rollback.
      This is what we've been working towards since the start of the project and it's finally done.

## The Problem We Had to Solve

GGPO is the industry standard for fighting game netcode. It was made by Tony Cannon back in 2009 and it's what powers games like Skullgirls, Guilty Gear Strive, and Street Fighter. 
The problem is GGPO was designed for raw UDP sockets with direct IP connections. It literally calls bind() and sendto() on a real socket. 
But we're using EOS for our multiplayer which is relay based, meaning there's no raw socket and no direct IP. 
EOS handles all the NAT traversal and relay stuff through their servers behind the scenes. 
Godot also has zero built in GGPO support. So we had to figure out how to make these two things talk to each other.

## The Loopback Bridge

This is the solution we came up with and honestly it's the part of the project we're most proud of. 
GGPO binds a UDP socket on localhost port 17777 and sends its sync packets to localhost port 17778. 
These are real UDP packets but they never leave the machine because it's all on the loopback interface. 
We created a Godot PacketPeerUDP socket that binds to port 17778 and catches every packet GGPO sends out. 
Then every frame we drain that socket and forward the raw bytes to the other player through an unreliable RPC call over the EOS connection.

When packets come back from the other player through EOS, we inject them into port 17777 where GGPO is listening. 
The critical detail that took us ages to figure out is that we reuse the same socket for capture and injection. 
The capture socket is bound to port 17778, so when it sends a packet the source address is 127.0.0.1:17778 which is exactly what GGPO expects. 
If the source port was wrong GGPO would silently drop everything. One line of code makes it all work: \`inject_socket = capture_socket\`.

GGPO has absolutely no idea its packets are going across the internet through EOS relay servers. It thinks it's talking to a local UDP peer on the same machine. 
And we didn't modify a single line of GGPO's source code to make this happen.

## The C++ GDExtension

Since GGPO is a C library and Godot uses GDScript, we needed a bridge between the two. 
We wrote a C++ GDExtension module called StrikeVentNet that wraps GGPO's session management, input synchronisation, and callback system. 
GGPO uses C function pointer callbacks internally, so we use a singleton pattern where the static callback accesses the instance and emits a Godot signal. 
When GGPO calls on_save_game_state for example, our C++ code emits a signal and GDScript picks it up and handles the serialisation.

Building this involved compiling GGPO from source with CMake (which needed a compatibility flag because the CMakeLists is from 2009), 
setting up godot-cpp bindings, writing the wrapper code, and compiling it all with SCons. The output is a DLL that Godot loads as a GDExtension at runtime.

## State Serialisation and Determinism

For rollback to work, GGPO needs to be able to save and restore the entire game state instantly. 
Every frame it saves a snapshot, and when it detects a misprediction it restores a previous snapshot and replays frames with the correct input. 
All of this has to be deterministic, meaning both machines produce identical results from identical inputs.

We serialise every gameplay-affecting variable for both fighters: positions, velocities, health, FSM state, state timer, facing direction, alive flag, and attack hit flag. 
Positions and velocities are multiplied by 100 and stored as integers to avoid floating point non-determinism. 
The game constants like MOVE_SPEED, JUMP_VELOCITY, and GRAVITY are all integers too. We use Godot's var_to_bytes and bytes_to_var for the serialisation which keeps it simple.

There's still a known issue with Godot's move_and_slide() which uses floats internally for collision resolution. 
This can cause minor position desyncs over long sessions. The full fix would be a custom fixed point physics system which we've identified as future work.

## Testing

We tested same-machine first by running two instances on one PC, one from the editor and one from an exported build. 
The host uses ports 17777/17778 and the joiner uses 17779/17780 to avoid collisions. 
Then we tested cross-network with two separate PCs on different networks, one on a home connection and one on a mobile hotspot. 
EOS relay handled the different NAT environments and GGPO packets flowed through the bridge at 12 to 33 bytes each. 
Controls were responsive and rollback corrections were barely noticeable.

## What Changed Since Last Devlog

Since Devlog #3 where we had local combat working, here's what we added:

- Full EOS integration with anonymous device-based authentication
- EOSGMultiplayerPeer for host/join connection flow
- The StrikeVentNet C++ GDExtension module wrapping GGPO
- The loopback UDP bridge for tunnelling GGPO through EOS
- GGPO rollback game loop with save/load/replay
- Complete state serialisation with integer math for determinism
- Input delay fallback mode when GGPO is unavailable
- Dynamic port assignment for same-machine testing
- Timesync handling to keep both players in step
- Disconnect detection with 3 second timeout

## What's Next

The core game is feature complete for the thesis demo. 
Future work includes replacing move_and_slide with fixed point physics for full determinism, adding a lobby system so players don't have to manually share PUIDs, 
spectator mode (which GGPO supports natively), and automated desync detection using checksums on state snapshots.

This has been an insane project to work on. Going from "what if we made a fighting game" to actually having rollback netcode running over a relay service without modifying 
GGPO at all was a journey. The loopback bridge is probably four lines of actual socket code but figuring out those four lines took a lot of trial and error.

Thank you for reading!`,
    image: "",
  },

  //Deblog-05
  {
    id: "devlog-005",
    slug: "devlog-5-test-gameplay-combat-and-knockback",
    date: "2026-02-1",
    tag: "UPDATE",
    title: "Devlog #05 — Test Gameplay: Combat and Knockback",
    summary:
      "First look at real gameplay footage. Movement, attacks, knockback, and the HUD all running in-engine.",
    body: `We've got actual gameplay running. This is the first time everything is working together in a real match scenario, and it's a huge step up from where we were at in the last devlog.

## What's Working

The core gameplay loop is fully functional now. Both fighters load in, the round timer counts down, and you can move, jump, attack, and take hits. The big one for us this update is **knockback**. When you land a hit, the opponent actually gets pushed back. It sounds basic but getting that to feel right took a lot of tuning. The knockback force, hitstun duration, and recovery frames all had to line up so that hits feel impactful without being unfair.

## The Fighter System

Each character runs on a finite state machine that handles transitions between idle, running, jumping, attacking, defending, getting hit, and death. We've got three different attack types right now, each with their own startup frames, active frames, and recovery frames. The frame data matters because it determines what's punishable and what's safe on block.

Movement uses integer math under the hood to keep things deterministic. This is important for when we get the online netcode synced up properly. No floating point means no desync between two machines. Positions, velocities, knockback forces, all stored as integers.

## HUD and Match Flow

The health bars, player names, and round timer are all hooked up and working. Timer counts down from 90 seconds, and if it hits zero, whoever has more health wins. Health bars drain when you take damage and blocking reduces incoming damage by 75%.

## What's Next

The netcode is connected and the two instances can find each other, but we're still working on getting the input sync fully dialed in so both players can control their fighters online. That's the next big milestone. Once that clicks, we'll have real online matches running with rollback netcode.

We're also looking at adding more visual feedback for hits. Right now you can see the knockback and the hurt animation, but we want to add things like hitstop (that brief freeze frame when a hit connects) and maybe some particle effects down the line.

More updates soon.`,
    image: "/images/devlog-05/strikevent.gif",
  },

  //Devlog-04
  {
    id: "devlog-04",
    slug: "networking",
    date: "2026-01-25",
    tag: "DEVLOG",
    title: "Devlog #04 — StrikeVent NET Alpha Complete",
    summary:
      "StikeVent NET alpha development completed",
    body: `Hello guys, we are proud to announce that StrikeVent NET alpha is now complete. Once our project is completed we will release it to the public.
    It's been a very long process in the making. Sorry that we can't release right now but just one more month and it will be ready for the public.
    
  Thats all for now folks, take care.`,
    image: "/images/devblog-03/happy-cat.jpg",
  },

  //Devlog-03
  {
    id: "devlog-03",
    slug: "approved",
    date: "2025-10-28",
    tag: "UPDATE",
    title: "Devlog #03 — APPROVED TO GO AHEAD!!",
    summary:
      "APPROVED FOR DEVELOPMENT.",
    body: `Good news everyone, our project proposal was approved! We know we already said our project was approved by our supervisor but this approval is from a board of professors
    that we had to pitc our idea to. StrikeVent is now offically under development!`,
    image: "/images/devblog-03/happy-cat.jpg",
  },
  
  //Devlog-02
  {
    id: "devlog-02",
    slug: "early-design-concept-sketches",
    date: "2025-10-26",
    tag: "BEHIND_THE_SCENES",
    title: "Devlog #02 — Early Design Sketches and Concepts",
    summary:
      "Collection of early sketches that were made such as character select screen and early character sprites.",
    body: `This a quick devblog that we want to post to show the very minimal early sketches that we have done so far. We don't have much artwise right now due to studying for exams, but everything that
    needs to be done is still on track.
    
  ## Main Menu Concept
  ![Character Select Concept](/images/devblog-02/menu.png)
    
  This is the menu style that we have settled on. It's inspired by a lot of other fighting games such as Persona 5 Arena and 2XKO. 
  The idea is that both players' characters are displayed facing each other in a VS screen format, which is pretty standard for the genre but we wanted to give it our own flair.

  The character select icons sit in the middle with P1 and P2 indicators, and we've got a back button in the top left for navigation. 
  The VS graphic up top is something we want to make feel punchy and animated in the final version. 
  The splatter textures in the background are there to give it a raw, aggressive energy that fits the tone of the game.

  It's still early days for the art so everything here is placeholder, but the layout and flow of the screen is what we're going for. 
  We'll keep iterating on the visuals as the character designs get more fleshed out.

  ## A New Challenger Approaches
  ![Ai Design Concept](/images/devblog-02/ai_mini.png)
  This is one of our earliest character concepts, Ai. She's a melee based fighter who we want to have a moderate learning curve.
  We're still figuring out the art style but we wanted to get something down to start building the character select screen around. 
  The design is intentionally simple for now since we're more focused on getting the gameplay and netcode working first.

  Once we've locked in the core mechanics we'll circle back and start refining the character art properly. 
  For now though, it's nice to have something visual to work with instead of just coloured rectangles.
    `,
    image: "/images/devblog-02/anime-sketching.gif",
  },
  

  //Devlog-01
  {
    id: "devlog-01",
    slug: "initial-idea-proposal",
    date: "2025-10-21",
    tag: "BEHIND_THE_SCENES",
    title: "Devlog #01 — Initial Design Concepts, Sketches and Getting Approved",
    summary:
      "How we came up with our inital idea and getting approval from our project supervisor.",
    body: `
 ## Initial Idea   
StrikeVent started as a question: what if we built a 2D fighting game from the ground up? Not the engine itself, but everything that makes a fighting game actually feel alive.

We're using an existing game engine as our foundation, but the core stuff is all us. Player behaviour, netcode, character interactions, hitboxes, all built from scratch. If there's one thing we're putting the most work into, it's the netcode. Getting online multiplayer to feel tight and responsive is genuinely the hardest part of the whole project, and we want to get it right. Everything else flows from there. If the connection feels good, the game feels good.

There's also a deeper reason we went with a fighting game specifically. They're one of the purest tests of how people actually think under pressure. Every match is basically a conversation. You're reading your opponent, picking up on patterns, adapting your strategy in real time. It's not just about reflexes. It's about prediction, mental stack management, and knowing when to switch things up.

That got us thinking. If someone develops real skill in a fighting game, what does that say about how they problem solve in the real world? That's the idea we're building around, and it's what makes this more than just another game project.

## The Problem
Since this was a project for our course, we first had to find a project supervisor and get it approved. One of the main problems we had was finding a supervisor that would be onboard with our idea.
After searching through our universities professor directory, we found someone who specialises in Games, VR and AI, who we felt was the perfect fit.  We shot him a quick email that pretty much had our initial idea, and we asked if we could have a meeting. He said he is interested and to pop by to his office for a quick meeting.

We sat down with him and laid out what we had so far. The first thing he flagged was whether our base idea was technical enough on its own. The short answer was not quite. He told us we needed to push the focus more towards the netcode itself during the presentation, since that's where the real engineering challenge is. The examiners might not have any background in game networking, so we'd have to explain things clearly without assuming too much.

He also pointed out that game development looks deceptively simple from the outside. It's actually incredibly time consuming, and we'd need to describe the scope properly and with confidence. On top of that, he said we should be ready to talk in detail about the programming languages and tools we're planning to use, because those are easy things for examiners to dig into.

We talked about backup plans too. What if something doesn't work out? What if the netcode falls through? His advice was to always have the game itself to fall back on. And if we wanted to take things further, the natural next step would be enhanced rollback netcode. Since we hadn't really explained how that would be implemented yet, that needed more work. He also suggested we could look into leveraging deep learning and AI with available datasets, which fits nicely with our background in data processing and analytics. A prediction engine paired with the networking layer felt like a strong extension.

Then he warned us to expect the business questions. Things like "what's the practical benefit?" and "who is your audience?" Tough for us given how niche fighting games are, but we'd still need answers. Game studios, indie developers, things like that. Monetisation wasn't really our focus but having something ready mattered. Risk assessment came up as well, mainly on the technical side. What could realistically go wrong? And stuff like GDPR compliance that we'd at least need to acknowledge.

His main advice was to focus on the presentation, be specific about everything, and look into Figma for interactive mockups since the game was still just a shell. From there, the next step was putting together a detailed planning document covering the backend and how we'd actually implement things. After that, we'd only really need meetings for progress updates or if we ran into problems.

And if we got a question we couldn't answer? Just own it. "Great question, we haven't thought about that yet but we'll look into it." No panic. Run it like an evaluation and keep moving.

By the end of the meeting he said he'd be happy to take us on as our project supervisor, which was a massive relief. We had our idea, we had our direction, and now we had someone in our corner to keep us on track.
`,


image: "/images/devblog-01/first-ever-sketch.png",
  },

  // Devlog-00
  {
    id: "welcome",
    slug: "welcome-to-strikevent-devblog",
    date: "2025-10-15",
    tag: "ANNOUNCEMENT",
    title: "Welcome to the StrikeVent Devlog",
    summary:
      "Follow along as we build StrikeVent from the ground up.",
    body: `Welcome! This is where we'll be posting development updates, behind-the-scenes looks, and patch notes for StrikeVent.

Stay tuned for more.`,
    image: "/images/devblog-00/cat-peek.gif",
  },
];

export default posts;

// ===== TAG CONFIG =====
// Controls tag pill colors across the app.
export const TAG_CONFIG = {
  UPDATE:            { bg: "#ff4d4d", text: "#fff" },
  ANNOUNCEMENT:      { bg: "#ffd700", text: "#0a0a0a" },
  PATCH:             { bg: "#00e5ff", text: "#0a0a0a" },
  DEVLOG:            { bg: "#b388ff", text: "#0a0a0a" },
  BEHIND_THE_SCENES: { bg: "#69f0ae", text: "#0a0a0a" },
};

// ===== SITE CONFIG =====
export const SITE_CONFIG = {
  title: "StrikeVent",
  subtitle: "Devblog",
  description:
    "Follow the development of StrikeVent. New posts on gameplay, tech, art, and everything in between.",
  socials: {
    twitter: "#",  
    discord: "#",
    youtube: "#",
  },
  navLinks: [
    { label: "Blog", path: "/" },
    { label: "Changelog", path: "/changelog" },
    { label: "About", path: "/about" },
  ],
};
