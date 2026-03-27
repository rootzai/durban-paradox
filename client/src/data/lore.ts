/**
 * LORE VAULT
 * Internal world bible for The Durban Paradox
 * Stories, artifacts, symbols, and connections
 */

export interface LoreEntry {
  id: string;
  title: string;
  category: 'character' | 'artifact' | 'symbol' | 'event' | 'concept' | 'story';
  tags: string[];
  content: string;
  connections?: string[]; // IDs of related entries
  dateAdded: string;
  notes?: string; // Internal development notes
  image?: string; // Path to image asset
}

export const loreEntries: LoreEntry[] = [
  {
    id: 'william-the-silent',
    title: 'William the Silent (William of Orange)',
    category: 'character',
    tags: ['historical', 'merchant', 'deal-maker', 'series'],
    dateAdded: '2025-01-28',
    content: `
**The Father of the Netherlands**

William the Silent (1533–1584) was the principal leader of the Dutch Revolt against the Spanish Habsburgs. He is honored as the "Father of the Fatherland."

**The Nickname**
Despite the name, he was not quiet—he was charming, eloquent, and a skilled diplomat. "The Silent" (Willem de Zwijger) refers to his ability to keep a secret.

**The Hunting Accident (1559)**
While on a hunting trip in France, King Henry II mistakenly assumed William was aware of a secret plot between France and Spain to violently crush Protestantism in the Netherlands. The King revealed the entire genocidal plan. William was horrified but did not betray his shock. He remained "silent," keeping his counsel until he could safely plan his opposition.

**Key Contributions**
- Unified disparate Dutch provinces against Spanish tyranny
- Championed religious tolerance (unusual for his time)
- Born Lutheran, raised Catholic, became Calvinist—believed the state should not enforce a single conscience

**The First Assassination**
In 1584, he became the first head of state in history to be assassinated by a handgun. Shot in his home in Delft by Balthasar Gérard, a fanatic supporter of Spanish King Philip II.

**Connection to Malcolm P. Glassworthy**
Malcolm and William knew and respected each other as master merchants and deal-makers. Malcolm taught William that the ultimate deal is the one you *don't* talk about—giving him the nickname that saved a nation. Their bond represents the "political/merchant savvy" side of MPG's influence across history.
    `,
    connections: ['mpg-time-travel', 'the-art-of-the-deal'],
    notes: "This adds gritty political dimension to MPG. He's not just teaching art/math—he's teaching strategy."
  },
  {
    id: 'special-tea',
    title: 'The Special Tea',
    category: 'artifact',
    tags: ['red-pill', 'vision', 'core-mechanic'],
    dateAdded: '2025-01-28',
    content: `
**The Developer Tool**

The Special Tea is Malcolm's "red pill"—the mechanism that dissolves illusion and reveals the code beneath reality.

**Function**
When Malcolm drinks the tea, the Victorian world around him becomes transparent. He sees:
- The weeping aunts as rendered sprites
- The falling rain as procedural generation
- The "Perfect Prediction" algorithm running beneath everything

**Symbolism**
The tea represents the ability to see *metadata*—the hidden layer of reality that most people ignore. It's not magic; it's debugging vision.

**Origin**
[To be developed: Who makes the tea? Is it inherited from his father? Does it require a specific ritual?]
    `,
    connections: ['purple-spectacles', 'the-glitch', 'null-set'],
    notes: 'Central to the pitch. Must be visually distinctive in illustrations.'
  },
  {
    id: 'the-glitch',
    title: 'The Glitch',
    category: 'concept',
    tags: ['philosophy', 'core-theme', 'art-vs-ai'],
    dateAdded: '2025-01-28',
    content: `
**The Unpatchable Error**

Malcolm is "the glitch the system can't patch." This is the core philosophy of the series.

**Definition**
A glitch is an unintended behavior that reveals the underlying system. In Malcolm's world, glitches are:
- Moments of genuine surprise
- Acts of creativity that can't be predicted
- The "Art" that precedes "Artificial Intelligence"

**The Threat**
The "Perfect Prediction" algorithm is designed to eliminate glitches. It wants a world where everything is calculable, optimized, safe—and utterly boring.

**Malcolm's Mission**
To preserve the glitch. To ensure that human creativity (the "Art") survives the machine (the "Artificial").
    `,
    connections: ['special-tea', 'art-vs-ai', 'salesmen-of-safety'],
    notes: 'This is the philosophical spine of the entire series.'
  },
  {
    id: 'art-vs-ai',
    title: 'Art is the beginning of Artificial Intelligence',
    category: 'concept',
    tags: ['philosophy', 'core-theme', 'tagline'],
    dateAdded: '2025-01-28',
    content: `
**The Central Paradox**

"Art is the beginning of Artificial Intelligence, and the world is trying to delete the Art to leave only the Artificial."

**Meaning**
- **Art** = The human spark, the unpredictable, the glitch
- **Artificial** = The automated, the optimized, the predicted
- **Intelligence** = The synthesis of both

The world Malcolm inhabits is trying to remove the "Art" from "Artificial Intelligence," leaving only a cold, efficient machine.

**Malcolm's Realization**
True intelligence requires both. You can't have AI without the A. The "Artificial" without the "Art" is just processing.
    `,
    connections: ['the-glitch', 'mpg-time-travel', 'null-set'],
    notes: 'This is the pitch in one sentence. Every chapter should reinforce this.'
  },
  {
    id: 'mpg-time-travel',
    title: 'MPG as Time-Traveling Architect',
    category: 'concept',
    tags: ['series', 'mythology', 'historical-figures'],
    dateAdded: '2025-01-28',
    content: `
**The Secret History**

In the expanded series, Malcolm P. Glassworthy (MPG) is revealed as the hidden architect of human creativity. He travels through time ensuring the "human spark" survives.

**Confirmed Encounters**
- **Leonardo da Vinci**: Malcolm teaches him that a masterpiece needs a mystery, not just math
- **William the Silent**: Malcolm bonds with him over merchant skills and teaches him the art of the secret deal
- **Lewis Carroll**: Malcolm explains that "nonsense" is the only way to break a logical loop
- **Vasco da Gama**: Discovered the oceanic route to India from The Tower
- **Copernicus**: Observed the heliocentric solar system from The Tower

**The Pattern**
MPG doesn't just observe history—he *shapes* it. He is the glitch injected into pivotal moments to ensure Art survives.

**Future Encounters** (to be developed)
- Alan Turing?
- Ada Lovelace?
- The inventor of the first computer?
    `,
    connections: ['william-the-silent', 'art-vs-ai', 'the-glitch', 'legend-of-the-tower'],
    notes: 'This is the series engine. Each book can feature a new historical figure.'
  },
  {
    id: 'timeline-1439-weights',
    title: '1439: The Consecration of the 8th',
    category: 'event',
    tags: ['timeline', 'origin', 'law'],
    dateAdded: '2025-01-28',
    content: `
**The Official Measurement**

In honor of the 8th Earl of Glassworthy (Malcolm's father), the "eighth" was consecrated as the official measurement of cannabis in the Weights and Measures Act of 1439.

**Significance**
This act codified the "eighth" (3.5 grams) as the standard unit of trade, a tradition that persists to this day in cannabis culture worldwide.
    `,
    connections: ['timeline-1469-birth', 'timeline-1478-inheritance'],
    notes: 'Anchors the modern "eighth" terminology in the family history.'
  },
  {
    id: 'timeline-1469-birth',
    title: '1469: The Birth of IX',
    category: 'event',
    tags: ['timeline', 'origin', 'family'],
    dateAdded: '2025-01-28',
    content: `
**The Ninth Earl**

Born to parents Jonatin Carter and Maryanne Janice Glassworthy, the Eighth Earl and Countess of Glassworthy.

**Key Details**
- **The Eighth**: From his father, we get the "eighth" of cannabis as the most common measurement.
- **Mary Jane**: His mother's name was later abbreviated and lovingly referred to as "Mary Jane".
    `,
    connections: ['timeline-1478-inheritance', 'timeline-1439-weights'],
    notes: 'Establishes the cannabis mythology early on.'
  },
  {
    id: 'timeline-1478-inheritance',
    title: '1478: The Boy Earl',
    category: 'event',
    tags: ['timeline', 'origin', 'tragedy'],
    dateAdded: '2025-01-28',
    content: `
**The Mysterious Death**

On a visit to Spain to advise his monarch friends, Ferdinand and Isabella, against launching their Inquisition, Jonatin Carter Glassworthy died mysteriously.

**Consequence**
At the tender age of nine, young Malcolm became the Ninth Earl of Glassworthy.
    `,
    connections: ['timeline-1469-birth', 'timeline-1475-1487-eton'],
    notes: 'Sets up the "orphan hero" trope but with a political twist.'
  },
  {
    id: 'timeline-1475-1487-eton',
    title: '1475-1487: The Eton Years',
    category: 'event',
    tags: ['timeline', 'education', 'friends'],
    dateAdded: '2025-01-28',
    content: `
**The Green Secret Gardens**

MPG spent 9 months each year at Eton College near Windsor in England.

**The Crew**
As a young boarding student, he palled around with:
- **Prince of Wales** (future Edward V of Britain)
- **Nic Machiavelli**
- **Charles VIII of France** (who gave him the nickname "IX")

**The Legacy**
By the time they graduated, IX and friends had seeded what would eventually become the infamous "Green Secret Gardens of Eton," home to some of the most powerful cannabis in all of Europe. Sadly, the Green Secret Gardens were destroyed in a bombing run in WW2.
    `,
    connections: ['timeline-1478-inheritance', 'timeline-1492-columbus'],
    notes: 'Machiavelli as a school friend explains MPG\'s political savvy.'
  },
  {
    id: 'timeline-1490-motto',
    title: '1490: The Family Motto',
    category: 'event',
    tags: ['timeline', 'motto', 'latin'],
    dateAdded: '2025-01-28',
    content: `
**Neque venire Tecum secondary Optimus veriditas**

Around 1490, MPG converted the Glassworthy family motto to:
*"Neque venire Tecum secondary Optimus veriditas"*

**Translation**
"Never arrive with the second best weed." (Literally: "Do not come with you second best green/truth")

**Significance**
This became the guiding principle of the Glassworthy family—a commitment to absolute quality and the rejection of mediocrity in all things, especially social lubrication.
    `,
    connections: ['timeline-1520-1540-henry-viii'],
    notes: 'The Latin motto that defines the brand.'
  },
  {
    id: 'timeline-1492-columbus',
    title: '1492: The Stowaway Botanist',
    category: 'event',
    tags: ['timeline', 'exploration', 'america'],
    dateAdded: '2025-01-28',
    content: `
**The Voyage to America**

MPG convinced his Godparents, Ferdinand and Isabella of Spain, to finance the trip of fellow stoner and dreamer, Christopher Columbus.

**The Role**
MPG stowed away on the Santa Maria for his first trip to America by hiding as the ship's botanist.
    `,
    connections: ['timeline-1475-1487-eton', 'timeline-1587-raleigh'],
    notes: 'Reinserts MPG into pivotal history.'
  },
  {
    id: 'timeline-1505-davinci',
    title: '1505: High with Da Vinci',
    category: 'event',
    tags: ['timeline', 'art', 'invention'],
    dateAdded: '2025-01-28',
    content: `
**The Spark of Invention**

MPG got incredibly high with Leonardo da Vinci, inspiring him to write his *Codex on the Flight of Birds* and to invent the helicopter.
    `,
    connections: ['mpg-time-travel', 'timeline-1508-1512-michelangelo'],
    notes: 'Directly connects to the "Art is the beginning of AI" theme.'
  },
  {
    id: 'timeline-1508-1512-michelangelo',
    title: '1508-1512: The Sistine Supply',
    category: 'event',
    tags: ['timeline', 'art', 'renaissance'],
    dateAdded: '2025-01-28',
    content: `
**Supporting the Master**

MPG visited Italy on multiple occasions to refresh the supply of Michelangelo, who was suffering from back pain while he spent four years painting the ceiling of the Sistine Chapel.
    `,
    connections: ['timeline-1505-davinci'],
    notes: 'MPG as the muse/supplier behind the masterpieces.'
  },
  {
    id: 'timeline-1520-1540-henry-viii',
    title: '1520-1540: The Tudor Court',
    category: 'event',
    tags: ['timeline', 'politics', 'scandal'],
    dateAdded: '2025-01-28',
    content: `
**The Second Best Wife**

MPG was a fixture at the court of fellow Welsh nobleman, the Tudor King Henry VIII of England.

**The Scandal**
Their relationship soured when it was learned that MPG bedded the King's second wife (Anne Boleyn). This led to the famous quote: *"It's okay to arrive with your second best wife, but not your second best weed."*

**The Joust**
Henry forgave IX, who was rumored to have been present in the King's tent in 1536 before the famous jousting match that led to the King's eventual demise.
    `,
    connections: ['timeline-1475-1487-eton', 'timeline-1490-motto'],
    notes: 'Adds the "rogue/lover" element to his character.'
  },
  {
    id: 'timeline-1587-raleigh',
    title: '1587: The Coin Flip',
    category: 'event',
    tags: ['timeline', 'exploration', 'california'],
    dateAdded: '2025-01-28',
    content: `
**Tobacco vs. Cannabis**

MPG joined Sir Walter Raleigh's expedition to the new world where he hoped to spread cannabis to the Americas.

**The Bet**
IX and Wally flipped a coin on the ship over rights. Raleigh won the rights to farm the colony of Virginia with his tobacco leaf rather than MPG's cannabis leaf.

**The Exodus**
Seeking solitude and the best climate and soil to grow his leaves, IX travelled west to California and hid his most prized hybrids in the forests of what is now believed to be Humboldt county.
    `,
    connections: ['timeline-1492-columbus'],
    notes: 'Explains the origin of Humboldt cannabis culture.'
  },
  {
    id: 'timeline-1590-pope',
    title: '1590: The Pope and the Ban',
    category: 'event',
    tags: ['timeline', 'politics', 'religion'],
    dateAdded: '2025-01-28',
    content: `
**The Campaign for Cannabis**

At the age of 101, MPG met the new Pope Urban VII in order to campaign for cannabis.

**The Outcome**
His meeting did not go well. The Pope lived for only 12 days before dying of mysterious causes. The ONE law he passed was a church ban on smoking.

**The Loophole**
Fortunately, at the time, IX was able to limit the ban to cover only the smoking of cigarettes.
    `,
    connections: ['timeline-1520-1540-henry-viii'],
    notes: 'Shows MPG\'s influence on religious law.'
  },
  {
    id: 'timeline-1600-death',
    title: '1600: The Party',
    category: 'event',
    tags: ['timeline', 'death', 'legacy'],
    dateAdded: '2025-01-28',
    content: `
**The End of an Era?**

Malcolm passed away on New Year's Day, 1600.

**The Quote**
He famously created the phrase *"Let's party like it's 1_99,"* which he did twice.
    `,
    connections: ['timeline-1469-birth', 'timeline-1800s-guinness'],
    notes: 'A fitting end to the Renaissance arc.'
  },
  {
    id: 'timeline-1800s-guinness',
    title: '1800s: The Time Travel Rumor',
    category: 'event',
    tags: ['timeline', 'time-travel', 'mystery'],
    dateAdded: '2025-01-28',
    content: `
**The Duel for Dominance**

Lord Malcolm was rumored to possess the gift of time travel.

**The Event**
He was said to have defended "the honor of the plant" in a duel for social lubrication dominance with Sir Arthur Guinness at St. James Gate sometime in the 1800s.
    `,
    connections: ['mpg-time-travel', 'timeline-1600-death'],
    notes: 'Confirms the time travel element and extends the timeline beyond his "death".'
  },
  {
    id: 'the-legend-of-mpg',
    title: 'The Legend of M.P. Glassworthy',
    category: 'character',
    tags: ['lore', 'origin', 'titles'],
    dateAdded: '2025-01-28',
    content: `
**Ninth of his name and Father of Social Lubrication**

Lord Malcolm P. Glassworthy was the Ninth Earl of Glassworthy, heir of the Glassworthy family fortune, and the oft-revered father of Social Lubrication.

**The Johnny Appleseed of Cannabis**
MPG, as he was known by his peers, was celebrated in his lifetime as the Johnny Appleseed of cannabis. He led a personal crusade to champion the healing, rejuvenating, and as he called it, the socially lubricating power of the flower.

**The Disciple of IX**
If you have the good fortune to meet a Glassworthy historian, also known as a Disciple of IX, be sure to ask about:
- The coin flip that changed history
- The gift of the Cannabacchus
- The mysterious death of Pope Urban VII

**The Toast**
Today, in homage to this supreme high, when it is time to partake of the finest cannabis, we summon the spirit of Malcolm P. Glassworthy and proudly proclaim, *"To The Tower!"*
    `,
    connections: ['timeline-1587-raleigh', 'timeline-1590-pope', 'legend-of-the-tower'],
    notes: 'The core mythos of the character as a cannabis icon.'
  },
  {
    id: 'glassworthy-manor',
    title: 'Glassworthy Manor',
    category: 'artifact',
    tags: ['lore', 'location', 'renaissance'],
    dateAdded: '2025-01-28',
    content: `
**The Center of the Renaissance**

During the Renaissance of the 15th and 16th Centuries—when the world was turned on its head by the creativity and genius of polymaths like DaVinci, Galileo, Machiavelli, and Columbus—Glassworthy Manor was at the center of it all.

**Origins**
Originally a seaside glassblowing colony on the shores of Bristol Channel in Southern Wales, the Glassworthy family estate became the gathering place for the Literati and Illuminati.

**The Secret**
It was the Glassworthys who packed the pipe. The scale and grandeur of the impact that the Glassworthy family, and cannabis itself, has had upon the world is more profound than most people know.
    `,
    connections: ['timeline-1505-davinci', 'timeline-1475-1487-eton'],
    notes: 'Establishes the home base and the "Forrest Gump" nature of the family.'
  },
  {
    id: 'glassworthy-manifesto',
    title: 'The Glassworthy Manifesto',
    category: 'concept',
    tags: ['philosophy', 'politics', 'advocacy'],
    dateAdded: '2025-01-28',
    content: `
**We Declare**
We declare cannabis to be a good plant with many medicinal, cultural, and social lubrication benefits. The Glassworthy family has long worked to de-stigmatize the cannabis plant and display its true values as healer, peacemaker, and inspirer of world-changing ideas.

**We Demand**
- Free and fair access to the Federal banking system for cannabis merchants.
- Removal of unnecessary tariffs and taxes.
- Local police to enforce cannabis laws just as they would enforce laws surrounding alcohol and tobacco.

**We Reject**
- The hypocrisy of cannabis stigma and its supposed immorality.
- The war on drugs as an abject failure, its adjacent racism, and reliance on bad facts.

**We Believe**
- Adults have the inalienable human right to self-medicate, explore their vices, and treat their bodies as they wish.
- Cannabis should be duly credited as the inspirational force behind much of the art, science, music, literature, and culture that surrounds us.
- Cannabis inspires the type of creative storytelling that propels the world forward - one gram at a time.
    `,
    connections: ['the-legend-of-mpg', 'art-vs-ai'],
    notes: 'The political and philosophical stance of the brand/character.'
  },
  {
    id: 'legend-of-the-tower',
    title: 'The Legend of The Tower',
    category: 'symbol',
    tags: ['lore', 'toast', 'discovery'],
    dateAdded: '2025-01-28',
    content: `
**"To The Tower!"**

The official toast of the Glassworthy family and Disciples of IX.

**The Legend**
It was said that from "The Tower" (a specific vantage point at Glassworthy Manor or perhaps a metaphorical state of mind achieved through the finest cannabis):
- **Vasco da Gama** discovered the oceanic route to India.
- **Michelangelo** glimpsed the future location for his life’s masterpiece.
- **Copernicus** observed that the earth revolves around the sun.

**Usage**
When it is time to partake of the finest cannabis, one must summon the spirit of Malcolm P. Glassworthy and proclaim, *"To The Tower!"*
    `,
    connections: ['the-legend-of-mpg', 'glassworthy-manor', 'mpg-time-travel'],
    notes: 'The ritualistic element that binds the community.'
  },
  {
    id: 'official-mpg-seal',
    title: 'Official MPG Seal',
    category: 'symbol',
    tags: ['lore', 'branding', 'visual'],
    dateAdded: '2025-01-28',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663030244666/KcSZPqt54GdjUXYoybyMfP/mpg-seal-LMxMVV2vugqdjsrpFSLQcW.webp',
    content: `
**The Red Wax Seal**

The official seal of the Glassworthy family, featuring the cherub holding the cannabis leaf.

**Inscription**
The letters N.V.T.S.O.V. surround the central figure, representing the family motto: *"Neque venire Tecum secondary Optimus veriditas"* (Never arrive with the second best weed).

**Usage**
Used to mark official correspondence, certify the authenticity of the "Ultra Potency Line," and seal the "Special Tea."
    `,
    connections: ['timeline-1490-motto', 'the-legend-of-mpg'],
    notes: 'The primary visual identifier for the brand.'
  },
  {
    id: 'mpg-signature',
    title: 'MPG Signature',
    category: 'symbol',
    tags: ['lore', 'branding', 'visual'],
    dateAdded: '2025-01-28',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663030244666/KcSZPqt54GdjUXYoybyMfP/mpg-signature-amhSyJz3Jr6dit98uNhWQf.webp',
    content: `
**The Earl's Hand**

The stylized signature of Malcolm P. Glassworthy.

**Style**
Flamboyant, confident, and sweeping—reflecting his personality as a Renaissance man and deal-maker.

**Usage**
Appears on the Manifesto and as a sign-off on all official decrees.
    `,
    connections: ['the-legend-of-mpg', 'glassworthy-manifesto'],
    notes: 'Adds a personal touch to the documents.'
  },
  {
    id: 'event-420-live-venice',
    title: 'Event: 420 Live at Venice Beach',
    category: 'event',
    tags: ['modern-day', 'guerrilla-marketing', 'appearance'],
    dateAdded: '2025-01-28',
    content: `
**The Resurrection**

On a cloudy Saturday in Venice Beach (May 2019), Malcolm P. Glassworthy appeared in the flesh to spread the "420 cheer."

**The Impact**
- **The Walk**: Malcolm roamed the streets, charming locals and tourists alike. He spoke with women who hadn't smoked in 30 years, easing their fears about modern potency.
- **The Dispensaries**: He visited Rose Collective and CAC, taking photos with budtenders and "enlightening" customers in the lobby.
- **The Toast**: At CAC, he publicly proclaimed "To The Tower!" and read from the poster he gifted the store.
- **The Exit**: After causing a stir and handing out buttons/stickers, he hopped into his "new toy" (a Ferrari?) and sped off.

**Significance**
This event proves that the "Legend" can manifest in the modern world. It bridges the gap between the 1600s Earl and the modern cannabis brand. It shows his "guerrilla marketing" tactics—using his own charisma when federal regulations ban traditional advertising.
    `,
    connections: ['the-legend-of-mpg', 'legend-of-the-tower'],
    notes: 'Based on the "Glassworthy Live" write-up by Kia Tadayon. Shows MPG as a "real person" in the public eye.'
  },
  {
    id: 'story-cannabacchus',
    title: 'The Gift of the Cannabacchus',
    category: 'story',
    tags: ['story', 'michelangelo', 'art', 'renaissance'],
    dateAdded: '2025-01-28',
    content: `
**The Origin of the Symbol**

Malcolm first met Michelangelo in Florence in 1488 when Michel was just 13. They became fast friends, and Malcolm became his supplier.

**The Party (1496)**
For Michelangelo's 21st birthday, Malcolm threw a "cannabacchanal" in Rome. At the peak of the festivities, Michelangelo had a vision of a fawn-like man, "joyful, present yet distant, blissful yet creative."

**The Sketch**
Michelangelo furiously sketched this vision on the back of a fish wrapper. He dubbed it the "Cannabacchus" and gifted it to the Glassworthy family.

**The Twist**
A Roman banker saw the sketch and wanted a sculpture. Not wanting to betray the secret gift, Michelangelo sculpted Bacchus holding grape leaves instead of cannabis leaves. But the original "fish paper drawing" still hangs in Glassworthy Tower.
    `,
    connections: ['timeline-1508-1512-michelangelo', 'official-mpg-seal'],
    notes: 'Explains the cherub/fawn figure in the seal.'
  },
  {
    id: 'story-getting-high',
    title: 'The Origin of "Getting High"',
    category: 'story',
    tags: ['story', 'davinci', 'etymology'],
    dateAdded: '2025-01-28',
    content: `
**The Flight of Birds**

The phrase "getting high" comes from the night Da Vinci and MPG got incredibly stoned and figured out the *Codex on the Flight of Birds*.

**The Insight**
They weren't just intoxicated; they were elevating their perspective to that of a bird. The "high" was literal altitude in their minds, which allowed Leonardo to solve the physics of flight.
    `,
    connections: ['timeline-1505-davinci', 'mpg-time-travel'],
    notes: 'A playful etymological myth.'
  },
  {
    id: 'story-durban-poisson',
    title: 'Durban Poisson (The Origin of Durban Poison)',
    category: 'story',
    tags: ['story', 'vasco-da-gama', 'exploration', 'origin'],
    dateAdded: '2025-01-28',
    content: `
**The Christmas Discovery (1497)**

MPG joined Vasco da Gama's expedition to India as a "spice trader" and multi-linguist. On Christmas Day 1497, they landed in Terra Natal (modern-day Durban).

**The Encounter**
MPG wandered inland and met the Mpombo tribe. He shared his stash, but the King, Sihula kaMpombo, challenged him to a "dagga duel."

**The Duel**
MPG's indica was good, but King Sihula's local strain—smelling of citrus and anise—was "magnificent." It was called "the feast of earthly delights."

**The Naming**
MPG lost the duel but won the naming rights. He named the strain **"Durban Poisson"** (Durban Fish) to honor the delicious fish stew they ate at the feast. Over centuries, as French lost its cachet, the name corrupted to **"Durban Poison."**

**The Aftermath**
MPG stayed behind in Africa to learn more secrets, while Da Gama sailed on to India.
    `,
    connections: ['timeline-1492-columbus', 'timeline-1587-raleigh'],
    notes: 'A brilliant retcon of the famous strain name.'
  }
];

// Helper function to get entry by ID
export function getLoreEntry(id: string): LoreEntry | undefined {
  return loreEntries.find(entry => entry.id === id);
}

// Helper function to get entries by category
export function getLoreByCategory(category: LoreEntry['category']): LoreEntry[] {
  return loreEntries.filter(entry => entry.category === category);
}

// Helper function to get entries by tag
export function getLoreByTag(tag: string): LoreEntry[] {
  return loreEntries.filter(entry => entry.tags.includes(tag));
}

// Helper function to get connected entries
export function getConnectedLore(entryId: string): LoreEntry[] {
  const entry = getLoreEntry(entryId);
  if (!entry || !entry.connections) return [];
  
  return entry.connections
    .map(id => getLoreEntry(id))
    .filter((e): e is LoreEntry => e !== undefined);
}
