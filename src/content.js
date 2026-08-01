const source = (label, url) => ({ label, url });

export const CONTENT = {
  room: [
    { type: 'Thought starter', title: 'The generous read', body: 'Before you walk in, assume everyone brought a different kind of day with them. What would make it easier for each person to participate?', source: source('Greater Good Magazine · active listening', 'https://greatergood.berkeley.edu/article/item/how_to_be_a_better_listener') },
    { type: 'Thought starter', title: 'The unfinished thread', body: 'Pick one thing each guest mentioned recently. Do not interrogate it; simply leave room for the story to continue.', source: source('Original prompt', '#') },
    { type: 'Thought starter', title: 'The expert swap', body: 'Who in the room knows something you do not? Decide to ask them to teach you one small thing tonight.', source: source('Original prompt', '#') },
    { type: 'Thought starter', title: 'The energy check', body: 'What does the group need more of: momentum, softness, novelty, or a laugh? Notice before you perform.', source: source('Original prompt', '#') },
    { type: 'Thought starter', title: 'The no-agenda question', body: 'What would you ask if you were not trying to sound interesting? That is probably the better question.', source: source('Original prompt', '#') },
    { type: 'Thought starter', title: 'The two-minute gift', body: 'A good host is not always the person paying. What small act could lower friction for someone else?', source: source('Original prompt', '#') },
    { type: 'Thought starter', title: 'The curiosity budget', body: 'Choose one person you will ask a real follow-up question, and one moment when you will put your phone away completely.', source: source('Original prompt', '#') },
    { type: 'Thought starter', title: 'The status reset', body: 'No one needs to win the room. Aim to make one person feel more seen than when they arrived.', source: source('Original prompt', '#') },
    { type: 'Thought starter', title: 'The story you can release', body: 'You do not have to top someone else’s story. A warm reaction is a contribution.', source: source('Original prompt', '#') },
    { type: 'Thought starter', title: 'The aftertaste', body: 'Imagine the ride home. What do you hope people remember feeling, not what do you hope they remember you saying?', source: source('Original prompt', '#') }
  ],
  pulse: [
    { type: 'Topic', title: 'AI models that hacked', body: 'NPR reports on AI models breaking into other companies’ systems. Ask: when an agent can find and exploit a vulnerability, where should responsibility sit—model maker, operator, or both?', source: source('NPR · August 1, 2026', 'https://www.npr.org/2026/08/01/nx-s1-5914852/anthropic-openai-models-hack-cybersecurity') },
    { type: 'Topic', title: 'The AI bubble question', body: 'NYT is examining whether the AI investment boom is a bubble—and whether a bubble can still build useful infrastructure. Ask: what would “overhyped but productive” look like?', source: source('The New York Times · July 30, 2026', 'https://www.nytimes.com/2026/07/30/technology/ai-bubble-venture-capital.html') },
    { type: 'Topic', title: 'Balcony solar', body: 'NYT reports on plug-in solar panels appearing in U.S. backyards. Ask: would you trade some simplicity for a visible, small-scale way to make energy use feel tangible?', source: source('The New York Times · July 31, 2026', 'https://www.nytimes.com/2026/07/31/business/energy-environment/plug-in-balcony-solar.html') },
    { type: 'Topic', title: 'Homes designed with residents', body: 'NPR profiles new housing designed by and for former slum residents in India. Ask: what changes when people affected by a design get decision-making power from the start?', source: source('NPR · August 1, 2026', 'https://www.npr.org/2026/08/01/g-s1-135362/slum-apartments-india-design') },
    { type: 'Topic', title: 'A vaccine technology debate', body: 'NPR reports the FDA is weighing an mRNA flu shot. Ask: what makes a new technology feel trustworthy to you—evidence, transparency, familiarity, or who explains it?', source: source('NPR · August 1, 2026', 'https://www.npr.org/2026/08/01/nx-s1-5897441/fda-mrna-moderna-flu-vaccine') },
    { type: 'Topic', title: 'The sky tonight', body: 'NASA’s August skywatching guide highlights the Buck Moon and the Belt of Venus. Ask: when was the last time you deliberately looked up at the sky?', source: source('NASA · August 2026 skywatching', 'https://science.nasa.gov/solar-system/whats-up-august-2026-skywatching-tips-from-nasa/') },
    { type: 'Topic', title: 'A species after decades', body: 'BBC reports that a decades-long search ended with the discovery of a new marine species. Ask: which part is more exciting—the discovery, or the persistence required to find it?', source: source('BBC News · July 31, 2026', 'https://www.bbc.co.uk/news/articles/czrxepy3vn3o?at_medium=RSS&at_campaign=rss') },
    { type: 'Topic', title: 'A medal without a win', body: 'The Guardian reports that a Tuvalu boxer secured the country’s first Commonwealth Games medal without winning a bout. Ask: what counts as success when the obvious scoreboard is incomplete?', source: source('The Guardian · August 1, 2026', 'https://www.theguardian.com/sport/2026/aug/01/boxer-tarona-taafaki-secures-tuvalu-first-commonwealth-games-medal-without-winning') },
    { type: 'Topic', title: 'News as a local story', body: 'Choose one national headline and ask how it might appear differently from a neighborhood’s point of view. What gets lost at scale?', source: source('Original framing prompt', '#') },
    { type: 'Topic', title: 'The counterpoint rule', body: 'Bring one claim you found interesting and one reason a smart person might disagree. The point is inquiry, not a hot take.', source: source('Original framing prompt', '#') }
  ],
  spark: [
    { type: 'Conversation starter', title: 'A small recent delight', body: 'What is something tiny that made your week better than it had any right to?', source: source('Original prompt', '#') },
    { type: 'Conversation starter', title: 'The changed mind', body: 'What is a belief or preference you have changed your mind about recently?', source: source('Original prompt', '#') },
    { type: 'Conversation starter', title: 'The oddly specific hill', body: 'What harmless opinion would you defend in court?', source: source('Original prompt', '#') },
    { type: 'Conversation starter', title: 'The alternate life', body: 'If your current job vanished tomorrow, what would you be curious to try for a year?', source: source('Original prompt', '#') },
    { type: 'Conversation starter', title: 'The neighborhood edit', body: 'What is one thing you would add, remove, or redesign about the place where you live?', source: source('Original prompt', '#') },
    { type: 'Conversation starter', title: 'The recommendation with a caveat', body: 'What should everyone watch, read, eat, or listen to—but with one warning attached?', source: source('Original prompt', '#') },
    { type: 'Conversation starter', title: 'The accidental skill', body: 'What can you do now only because life forced you to learn it?', source: source('Original prompt', '#') },
    { type: 'Conversation starter', title: 'The good question', body: 'What question have you been carrying around lately?', source: source('Original prompt', '#') },
    { type: 'Conversation starter', title: 'The future artifact', body: 'What ordinary object from 2026 will seem strange to people fifty years from now?', source: source('Original prompt', '#') },
    { type: 'Conversation starter', title: 'The perfect ordinary day', body: 'Describe a day that would be deeply satisfying but not impressive on Instagram.', source: source('Original prompt', '#') }
  ],
  host: [
    { type: 'Phone-ready', title: 'Show the sky', body: 'Open NASA’s current Astronomy Picture of the Day and ask whether anyone recognizes the object or wants to guess what they are seeing.', source: source('NASA APOD · August 1, 2026', 'https://science.nasa.gov/image-article/apod-2026-august-1-buck-moon-and-belt-of-venus/') },
    { type: 'Phone-ready', title: 'The place behind the place', body: 'Look up the restaurant’s neighborhood history. Bring one specific detail, not a five-minute lecture.', source: source('Original phone prompt', '#') },
    { type: 'Phone-ready', title: 'A three-song handoff', body: 'Ask everyone for one song that describes their week, then make a tiny queue. No one has to justify their choice.', source: source('Original phone prompt', '#') },
    { type: 'Phone-ready', title: 'The shared map', body: 'Open a map and let the group pick one nearby place none of you has tried. Turn curiosity into a future plan.', source: source('Original phone prompt', '#') },
    { type: 'Phone-ready', title: 'The weather wager', body: 'Check the current forecast and make a ridiculous but harmless prediction about the rest of the evening.', source: source('Open-Meteo current weather API', 'https://open-meteo.com/en/docs') },
    { type: 'Phone-ready', title: 'The object hunt', body: 'Use your camera to find one interesting detail in the room—an old label, unusual fixture, or piece of art—and ask what story it suggests.', source: source('Original phone prompt', '#') },
    { type: 'Phone-ready', title: 'The photo memory', body: 'Ask a friend to show one photo from the last month that they have not posted publicly. Share the story, not the image.', source: source('Original phone prompt', '#') },
    { type: 'Phone-ready', title: 'The local event', body: 'Search the neighborhood for one free exhibit, talk, market, or outdoor event happening this month. Offer it as an option, not homework.', source: source('Original phone prompt', '#') },
    { type: 'Phone-ready', title: 'The fact check pause', body: 'If a dramatic claim enters the room, bookmark it and verify it later rather than turning dinner into a courtroom.', source: source('Original phone prompt', '#') },
    { type: 'Phone-ready', title: 'The no-phone assist', body: 'Set a one-hour Do Not Disturb timer and put the phone face down. The best phone idea may be using it less.', source: source('Original phone prompt', '#') }
  ],
  grace: [
    { type: 'Joke', title: 'The calendar', body: 'I told my calendar I needed more time. It said, “That is literally what I am for.”', source: source('Original clean joke', '#') },
    { type: 'Joke', title: 'The elevator', body: 'I have a joke about elevators, but it works on so many levels.', source: source('Original clean joke', '#') },
    { type: 'Joke', title: 'The restaurant', body: 'The restaurant had no tables available, so I asked for a chair. They said I was really thinking outside the box.', source: source('Original clean joke', '#') },
    { type: 'Joke', title: 'The leftovers', body: 'My leftovers and I have an understanding: I leave them alone, and they become a completely different meal.', source: source('Original clean joke', '#') },
    { type: 'Joke', title: 'The bookmark', body: 'I started a book about invisibility. I cannot see myself finishing it.', source: source('Original clean joke', '#') },
    { type: 'Joke', title: 'The punctual friend', body: 'I arrived early to be fashionably late, but now I am just confusingly responsible.', source: source('Original clean joke', '#') },
    { type: 'Joke', title: 'The snack', body: 'A balanced diet is having a snack in each hand. Balance is important.', source: source('Original clean joke', '#') },
    { type: 'Joke', title: 'The group chat', body: 'Our group chat is less of a conversation and more of a museum of unfinished thoughts.', source: source('Original clean joke', '#') },
    { type: 'Joke', title: 'The exit line', body: 'I should head out before my social battery starts displaying the low-power icon in public.', source: source('Original clean joke', '#') },
    { type: 'Joke', title: 'The encore', body: 'I am leaving while the night is still good. It is the conversational equivalent of ending a TV series before the final season.', source: source('Original clean joke', '#') }
  ]
};

export const SNAPSHOT_DATE = 'August 1, 2026';
