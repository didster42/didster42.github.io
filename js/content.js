const CONTENT = {

  intro: {
    banner: [
      "    ____  __  ______  __  ___    _____ ",
      "   / __ \\/ / / / __ \\/ / / / |  / /   |",
      "  / / / / /_/ / /_/ / / / /| | / / /| |",
      " / /_/ / __  / _, _/ /_/ / | |/ / ___ |",
      "/_____/_/ /_/_/ |_|\\____/  |___/_/  |_|",
    ],
    hash: '9d4a1f0e',
    name: 'Dhruva Raja',
    email: 'dhruvraja24@gmail.com',
    location: 'Delhi, India',
    bio: [
      'Software Engineer & Game Developer. B.E. Electronics & Comm.',
      '+ M.Sc. Mathematics, BITS Pilani, Goa Campus. Into music,',
      'football, movies. Always building, always learning.',
    ],
  },

  blog: [
    {
      slug: 'bean-wars-showdown',
      hash: 'c4f8b1a2',
      title: 'Bean Wars Showdown',
      subtitle: 'designing the next big game mechanic',
      date: '2022-10-20',
      tags: ['Game Design', 'Unity'],
      body: [
        { type: 'p', text: "When you make games, you always have an image in your mind of how that game would turn out — even before you start designing the components or writing a line of code. When my favourite YouTuber Dani started releasing videos documenting his development on Karlson, I knew I had to start an ambitious project of my own. That was the start of Bean Wars Showdown." },
        { type: 'p', text: "I sat down and boiled it down to simple things. I wanted a fast-paced first-person shooter. Last summer, me and a lot of friends would play Krunker together — a browser-based FPS. One of my gaming-deprived Mac user friends loved it so much he'd play constantly. It shows you don't need the best graphics for a game to be loved. I wanted something like that: no RTX-only graphics, no huge PC download. Just something everyone could play." },
        { type: 'h2', text: 'Just another FPS' },
        { type: 'blockquote', text: "I think that first-person shooter is a stable genre that's going to be here forever, just like there are going to be driving games forever. There's something just intrinsically rewarding about turning around a corner and shooting at something. — John Carmack" },
        { type: 'p', text: "I totally agree. Beating my friends at video games is one of the great pleasures of life. So here I was, building just another FPS — but with goofy bean characters from Dani's videos shooting at each other in fall-guys style. That was the idea." },
        { type: 'h2', text: 'Movement is a cool thing' },
        { type: 'p', text: "I eventually became really good at Krunker — so good my friends couldn't keep up. The game is a test of how well you master its movement. There's a key combination that lets you move at insane speeds, and I mastered it. My friends found it really hard to shoot me. That mechanic made the game way more fun than it looked. I wanted to incorporate fast-paced movement with wall running into Bean Wars Showdown." },
        { type: 'h2', text: 'Making multiplayer would be fun' },
        { type: 'p', text: "The above statement is probably a lie. Nevertheless, I had never built a multiplayer game before, so making one would be interesting. Friends would create rooms and join together — similar to how Among Us multiplayer works." },
        { type: 'h2', text: 'EndGame?' },
        { type: 'p', text: "My game would be a success the night me and my friends sit down and play Bean Wars Showdown together — talking on Discord, laughing about who sucks, the loser blaming their ping. The day that happens, I'll be really happy. I've been working on it for a while. As I make progress, I'll keep posting." },
        { type: 'p', text: "That's all for now!" },
      ],
    },
    {
      slug: 'stanley-parable',
      hash: 'e7d3920f',
      title: 'The Stanley Parable',
      subtitle: 'a deep dive into narrative design',
      date: '2021-07-29',
      tags: ['Narrative Design', 'Game Design'],
      body: [
        { type: 'p', text: "There exist numerous games that rose from Half-Life 2 mods — Counter Strike, Black Mesa, Garry's Mod. Recently I played The Stanley Parable, a game from almost a decade back, itself originally a Half-Life mod." },
        { type: 'h2', text: "What's it about?" },
        { type: 'p', text: "The game starts with a narrator telling the story of Stanley, an employee at a huge corporation living the same monotonous routine every day. The player is introduced through the narrator's words:" },
        { type: 'blockquote', text: "This is the story of a man named Stanley. Stanley worked for a company in a big building where he was Employee #427. Employee #427's job was simple: he sat at his desk in Room 427 and he pushed buttons on a keyboard. Orders came to him through a monitor telling him what buttons to push, how long to push them, and in what order. This is what Employee #427 did every day of every month of every year, and although others may have considered it soul rending, Stanley relished every moment the orders came in, as though he had been made exactly for this job. And Stanley was happy." },
        { type: 'blockquote', text: "And then one day, something very peculiar happened. He had been at his desk for nearly an hour when he realized not one single order had arrived. No one had shown up. Never in all his years had this happened — this complete isolation. Stanley got up from his desk and stepped out of his office." },
        { type: 'p', text: "The game starts like that and immediately makes you think: what the hell is going on? You move around the empty office, curious, while the narrator keeps narrating." },
        { type: 'p', text: 'Eventually you find yourself standing in front of two open doors. The narrator states: "Stanley took the door to his left." Now you have a choice. Do you follow the narrator? What if this voice is leading you wrong? What if disobeying is the point?' },
        { type: 'h2', text: 'The Narrator vs. You' },
        { type: 'p', text: "Following the path lets the narrator finish his story for you. But you can make your own path — and disobey. The narrator doesn't like that. He desperately tries to get you back on course. When you defy him long enough, he finally loses it and transports you to another game entirely: \"You don't like this game? Let's go to another!\" He drops you into Minecraft and Portal. I had never seen that kind of humour in a game before." },
        { type: 'h2', text: 'Finishing the game' },
        { type: 'p', text: "There are a huge number of endings. I couldn't explore them all — one path literally requires pressing a button for four hours. The experience was unlike anything I'd played: fourth-wall breaking, the narrator at war with the player, endings that question the nature of games themselves. The game came out in 2013. I'm late to the party — but better late than never." },
        { type: 'p', text: "That's all for now!" },
      ],
    },
  ],

  projects: [
    {
      name: 'bachat',
      desc: 'UPI payment auto-tracker, users loved it.',
      tags: ['Flutter', 'Firebase', 'Dart'],
    },
    {
      name: 'square-ninja',
      desc: 'Square vs. infinite triangle army. First published mobile game.',
      tags: ['Unity', 'C#', 'Game Design'],
    },
    {
      name: 'tunnel',
      desc: 'Trippy, colourful, infinite. Second published mobile game.',
      tags: ['Unity', 'C#', 'Game Design'],
    },
  ],

  timeline: [
    {
      hash: 'a1c9f2e3',
      title: '1 year at Amazon',
      date: '2025-11',
      body: [
        'Software Development Engineer. Learnt a lot, overall a great year.',
        'Flew to the UAE to launch 2-hour deliveries.',
      ],
    },
    {
      hash: '7fbb0012',
      title: 'Amazon',
      date: '2024-11',
      body: [
        'Software Development Engineer. Joined the last-mile team,',
        'building scalable systems.',
      ],
    },
    {
      hash: '2cd44aa9',
      title: 'INDMoney',
      date: '2024-09',
      body: [
        'Software Engineer. Joined the profile and KYC team.',
        'First full-time job, not counting revoked offers :p',
      ],
    },
    {
      hash: '0091abef',
      title: 'Graduation, BITS Goa',
      date: '2024-08',
      body: [
        'Electronics and Math. Owe so much to this place.',
        "Can't imagine having gone anywhere else.",
      ],
    },
  ],

};
