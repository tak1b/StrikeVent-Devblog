// ===== STRIKEVENT DEVBLOG — POST DATA =====
// Add new posts to the top of this array.
// Available tags: UPDATE, ANNOUNCEMENT, PATCH, DEVLOG, BEHIND_THE_SCENES
// Images: set to null for a gradient placeholder, or use a URL string.

const posts = [
  
  
  //Devblog-01
  {
    id: "devlog-001",
    slug: "devlog-1-initial design concepts",
    date: "2025-10-21",
    tag: "BEHIND_THE_SCENES",
    title: "Devlog #1 — Initial Design Concepts, Sketches and Getting Approved",
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
