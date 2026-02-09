// ===== STRIKEVENT DEVBLOG — POST DATA =====
// Add new posts to the top of this array.
// Available tags: UPDATE, ANNOUNCEMENT, PATCH, DEVLOG, BEHIND_THE_SCENES
// Images: set to null for a gradient placeholder, or use a URL string.

const posts = [

  //Devblog-04
  {
    id: "devblog-04",
    slug: "networking",
    date: "2026-01-25",
    tag: "DEVLOG",
    title: "Devblog #04 — StrikeVent NET Alpha Complete",
    summary:
      "StikeVent NET alpha development completed",
    body: `Hello guys, we are proud to announce that StrikeVent NET alpha is now complete. Once our project is completed we will release it to the public.
    It's been a very long process in the making. Sorry that we can't release right now but just one more month and it will be ready for the public.
    
  Thats all for now folks, take care.`,
    image: "/images/devblog-03/happy-cat.jpg",
  },

  //Devblog-03
  {
    id: "devblog-03",
    slug: "approved",
    date: "2025-10-28",
    tag: "UPDATE",
    title: "Devblog #03 — APPROVED TO GO AHEAD!!",
    summary:
      "APPROVED FOR DEVELOPMENT.",
    body: `Good news everyone, our project proposal was approved! We know we already said our project was approved by our supervisor but this approval is from a board of professors
    that we had to pitc our idea to. StrikeVent is now offically under development!`,
    image: "/images/devblog-03/happy-cat.jpg",
  },
  
  //Devblog-02
  {
    id: "devblog-02",
    slug: "early-design-concept-sketches",
    date: "2025-10-26",
    tag: "BEHIND_THE_SCENES",
    title: "Devblog #02 — Early Design Sketches and Concepts",
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
  

  //Devblog-01
  {
    id: "devblog-01",
    slug: "initial-idea-proposal",
    date: "2025-10-21",
    tag: "BEHIND_THE_SCENES",
    title: "Devblog #01 — Initial Design Concepts, Sketches and Getting Approved",
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

  // Devblog-00
  {
    id: "welcome",
    slug: "welcome-to-strikevent-devblog",
    date: "2025-10-15",
    tag: "ANNOUNCEMENT",
    title: "Welcome to the StrikeVent Devblog",
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
