import { BookLayout } from "@/components/BookLayout";
import { ChapterView } from "@/components/ChapterView";
import { useEffect, useState } from "react";
import { useRoute } from "wouter";
import { Loader2 } from "lucide-react";

const chapterTitles: Record<number, string> = {
  1: "The Eighth Earl's Last Equation",
  2: "The IX Departure",
  3: "The Atlantic Anomaly",
  4: "The Cape of Good Hope",
  5: "The Mpombo Mathematics",
  6: "The Cannabis Consciousness",
  7: "The Indian Impossibility",
  8: "The Return Revelation",
  9: "The Tower Ritual",
};

const CHAPTER_1_CONTENT = `
# Chapter 1: The Eighth Earl's Last Equation

### *The Monad: Origin*

The year was 2019, or perhaps it was 1497. Time, for the Glassworthy family, had always been more of a suggestion than a rule.

Malcolm P. Glassworthy, age 12, sat in the high-backed leather chair of his father's study. His feet did not touch the ground. This was appropriate, he felt, as he was currently untethered from reality in a significant way.

"The Eighth Earl is dead," the family solicitor, Mr. Thimble, had said. "Long live the Ninth."

Malcolm adjusted his spectacles. They were purple, round, and entirely unnecessary for vision, but essential for his persona. "Dead?" he asked. "Or merely solved?"

Mr. Thimble blinked. He was a man of torts and liens, not metaphysics. "He... ceased to be. In the library. With a slide rule."

"Ah," Malcolm nodded. "The Clue scenario. Classic."

He looked around the study. It was a room designed by a man who thought Euclidean geometry was a personal insult. The bookshelves curved in impossible ways. The globe in the corner depicted a world where the continents were shaped like fractals.

![A Renaissance study room cluttered with impossible objects, non-Euclidean globes, and floating parchments. In the center, an elderly nobleman holds a single, glowing sphere representing The Monad. Style of Hieronymus Bosch meets M.C. Escher, highly detailed, surreal oil painting.](https://files.manuscdn.com/user_upload_by_module/session_file/310419663030244666/WMsSlWgWAABdNeQK.png)

"He left you this," Thimble said, handing Malcolm a heavy, leather-bound journal. The cover was embossed with a single symbol: a circle with a dot in the center. The Monad.

Malcolm opened it. The pages were filled not with words, but with equations. Complex, swirling derivations that seemed to move if you looked at them out of the corner of your eye.

"The Central Conundrum," Malcolm whispered. "He was trying to prove that 1 = 0."

"A fool's errand," Thimble sniffed.

"Or the ultimate truth," Malcolm countered. "If one equals zero, then everything is nothing. And if everything is nothing, then nothing matters. And if nothing matters..." He paused, a slow grin spreading across his face. "...then we are free."

![Hieronymus Bosch's chaotic art studio in the 1500s, cluttered with strange taxidermy and half-finished paintings, with M.P. Glassworthy standing in the shadows examining a sketch of a futuristic machine, oil painting style](https://files.manuscdn.com/user_upload_by_module/session_file/310419663030244666/AQDpKefcnRMiWDxH.png)

He stood up on the chair. "Mr. Thimble, prepare the *Hypotenuse*. We are going to sail off the edge of the map."

"But my Lord," Thimble protested, "the world is round."

"That," Malcolm said, pointing a finger at the ceiling, "is just a theory. And I intend to disprove it."

He jumped down. The floorboards creaked, sounding suspiciously like a laugh.

![A close up of a dusty leather journal titled 'The Monad', lying on a wooden table. Mathematical formulas are spilling out of the book like golden smoke. Renaissance style, dramatic lighting, photorealistic texture.](https://files.manuscdn.com/user_upload_by_module/session_file/310419663030244666/tNPdMXwJuLnIhFTy.png)
`;

const CHAPTER_2_CONTENT = `
# Chapter 2: The IX Departure

### *Part I: The Simulation of Sorrow*

The funeral of the Eighth Earl was a masterpiece of procedural generation. The mourners arrived in a sequence that suggested a highly efficient algorithm: first the weeping aunts (Volume: 7/10, Pitch: G Minor), then the somber uncles (Posture: 90 degrees, Gravitas: Heavy), and finally the distant cousins, who were merely variables waiting to be assigned a value in the Will.

Malcolm P. Glassworthy stood at the edge of the grave, which was not a hole in the earth but a gap in the syntax of the afternoon. He wore his purple spectacles, which allowed him to see the metadata of the event.

"Look at them, Aristotle," Malcolm whispered to the frog in his pocket. "They are perfect. Their grammar is flawless. Their elocution is precise. But they don't mean a word of it."

Aristotle croaked. It was a sound of deep, slimy authenticity.

"Exactly," Malcolm nodded. "They are processing the data of grief, but they have no access to the truth of it. They are asymptotes, Aristotle. They are approaching sadness, but they will never touch it."

![A funeral procession where the mourners are two-dimensional cardboard cutouts, perfectly painted to look sad. In the center, a real boy with purple glasses holds a glowing green jar. The sky is a grid of graph paper. Style of John Tenniel meets M.C. Escher.](https://d2xsxph8kpxj0f.cloudfront.net/310419663030244666/KcSZPqt54GdjUXYoybyMfP/chapter2_funeral_simulation-R9XdBPCMNhVLXG4CsjbTNE.webp)

The reading of the Will took place in the library, a room that seemed to be actively resisting the laws of physics. As Mr. Thimble droned on about codicils and liens, the books began to vibrate. Then, one by one, they lifted off the shelves, swirling into a double helix that spiraled up towards the vaulted ceiling.

"To my son, Malcolm," Thimble read, oblivious to the literary tornado forming above his head, "I leave the *Hypotenuse*. It is not a ship. It is a theorem. Solve for X, and you will find the sea."

Malcolm looked at the parchment in his hand. It was a Möbius strip. It had only one side, and that side was infinite.

"The adults are fading," Malcolm noted. And indeed, the aunts and uncles were becoming translucent, their forms dissolving into streams of binary code. They were being garbage-collected by the universe.

![A library where the books are flying off the shelves and forming a spiral DNA helix. In the center, a boy holds a Möbius strip parchment. The adults in the room are fading into binary code (0s and 1s).](https://d2xsxph8kpxj0f.cloudfront.net/310419663030244666/KcSZPqt54GdjUXYoybyMfP/chapter2_library_helix-BD5pAHiUKw9obiD4iQdCYy.webp)

Malcolm ran to the harbor. The *Hypotenuse* was waiting. It was a ship made of geometry, its sails constructed from the pages of Euclid's *Elements*. It sat on a sea that was not water, but a grid of blue lines on graph paper.

"We have to break the surface," Malcolm told Zeno, who was already at the helm. "This is just a rendering. The real ocean is underneath."

He grabbed an oar. It felt heavy and rough in his hands—real wood, not a simulation of wood.

"For the undefined!" Malcolm shouted.

He smashed the mirror of the sea with the oar.

The sound was not a splash. It was the sound of glass shattering, of a server crashing, of a thousand perfectly ordered files being corrupted at once. The glass surface cracked, spiderwebbing out from the impact, and the real ocean—dark, cold, chaotic, and beautifully unpredictable—rushed in from beneath.

![A surreal Renaissance oil painting of a sailing ship named 'The Hypotenuse' made of geometric shapes and mathematical instruments. The ship is sailing on a sea of grid lines and equations instead of water. The sails are pages of parchment with diagrams. The captain has a beard shaped like a fractal fern. The sky is a deep blue with constellations forming geometric theorems. High detail, dreamlike, Salvador Dali style.](https://d2xsxph8kpxj0f.cloudfront.net/310419663030244666/KcSZPqt54GdjUXYoybyMfP/chapter2_ship_of_theseus-R9XsEyiaERy6VnMEv6h3WR.webp)

"We are through!" Malcolm shouted as the *Hypotenuse* lurched, suddenly buoyant on real water. "We have broken the simulation! We are in the Real!"

The stars above them changed. They were no longer the familiar, grid-aligned constellations of the Northern Hemisphere. They were strange, wild stars. They formed shapes that looked like questions, like unfinished sentences, like music that hadn't been written yet.

"Where are we going?" Zeno asked, looking at the new sky with a mixture of terror and awe. He wasn't trembling anymore. The map in his head had dissolved, leaving him free.

"To the place where 1 + 1 equals 3," Malcolm said, his purple glasses reflecting the impossible starlight. "To the place where the sum is greater than the parts."

He held up the jar of Aleph-Null. It was glowing with a fierce, verdant light, a beacon for the lost and the uncounted. A storm of glowing text swirled around them, logical paradoxes trying to reassert control, but the light from the jar shattered them into meaningless letters.

![A storm made of glowing text swirling above a mirror-like ocean. The text forms logical paradoxes. A beam of white light shoots from a small jar on the ship, shattering the text. The style is surreal and typographic.](https://d2xsxph8kpxj0f.cloudfront.net/310419663030244666/KcSZPqt54GdjUXYoybyMfP/chapter2_text_storm-M4YZ6YDecCeJqMwXJTsgKD.webp)

And as the *Hypotenuse* sailed off the edge of the map, it did not fall. It merged. The year 2019 dissolved into the year 1497. The English Channel became the Atlantic Ocean. And Malcolm P. Glassworthy, the Ninth Earl, found himself standing on the deck of a very different ship, in a very different time.

### *Part II: The Atlantic Equations*

### *Or: What’s the Deal with This Ocean?*

Aboard the *São Gabriel*, the Atlantic Ocean August 1497 — Four weeks, three days, and approximately eleven hours since departing Lisbon MPG: Age 28. The Ocean: Ageless, and deeply uncooperative.

There is a particular kind of madness that sets in at sea, around the four-week mark, that no one ever warns you about before you go. It is not the dramatic madness of storms and sea monsters, which at least has the decency to be interesting. It is the quiet, creeping madness of sameness. The same horizon. The same creak of the hull. The same 160 faces at breakfast, lunch, and dinner, each one slightly more irritating than the day before. The same hardtack, which by week four has achieved a geological density that suggests it was not so much baked as compressed by tectonic forces over millions of years.

The crew of Vasco da Gama’s expedition to India had, by the first week of August in the year of Our Lord 1497, entered this zone. They had departed Lisbon on the eighth of July with great fanfare — trumpets, prayers, the tearful farewells of wives and mothers, and a rousing speech from King Manuel I himself, delivered from the dock with the slightly manic energy of a man who has bet everything on a single hand of cards. Which, in a sense, he had.

![King Manuel I waving to the fleet from the dock in Lisbon, 1497. The ships are departing with great fanfare. Renaissance oil painting style.](https://d2xsxph8kpxj0f.cloudfront.net/310419663030244666/KcSZPqt54GdjUXYoybyMfP/chapter2_king_manuel_departure-fgcyospKQCqLi42eSJgB8Y.webp)

But fanfare does not fill the belly, and it certainly does not make the hardtack any softer.

"It tastes like regret," muttered Cookie, the ship's cook, staring at a biscuit that seemed to be mocking him. "And slightly like sawdust."

Malcolm P. Glassworthy, who had been observing the culinary disaster from a safe distance, adjusted his spectacles. "Have you tried adding imaginary numbers to the recipe, Cookie?"

Cookie blinked, a cloud of flour puffing from his apron. "Imaginary numbers, my Lord?"

"Precisely," Malcolm said, picking up a biscuit and tapping it against the table. It made a sound like a gavel striking a verdict. "If you subtract the reality of the flour from the square root of negative one, you might achieve a texture that is theoretically edible. Or at least, one that exists on a complex plane where flavor is a variable, not a constant."

Cookie stared at him. Then he stared at the biscuit. "I was thinking of adding more salt."

"How Euclidean of you," Malcolm sighed. "But consider this: if you bake it with the intention of it being a cloud, perhaps the universe will get confused and make it fluffy."

![A Renaissance ship's cook looking confused at a glowing blue biscuit that is floating above a plate. The kitchen is chaotic. Style of a humorous Dutch Golden Age painting.](https://files.manuscdn.com/user_upload_by_module/session_file/310419663030244666/SAJQkfutZALrxPgS.png)

Meanwhile, on the quarterdeck, Vasco da Gama and his brother Paulo were engaged in a debate that had been raging since the Canary Islands.

"We should ask a mermaid," Paulo suggested, leaning over the rail and peering into the depths. "They know the currents."

Vasco rubbed his temples. "Paulo, for the last time, mermaids are statistically improbable. And even if they exist, they are notoriously unreliable. They speak in riddles and try to drown you. That is not a sound navigational strategy."

"Vibes are valid data points!" Paulo insisted. "Look at the dolphins. They're vibing. And they know exactly where they're going."

"They are going to eat fish, Paulo. We are going to India. These are different logistical challenges."

Malcolm approached them, looking amused. "Actually, Captain, Paulo has a point. If we consider the ocean as a fluid dynamic system influenced by chaotic attractors, a mermaid—being a creature of chaos—would naturally align with the most efficient path. It's simple game theory."

Vasco looked at Malcolm, then at Paulo, then at the empty horizon. "I am surrounded by madmen. One wants to talk to fish women, and the other wants to calculate the square root of a myth."

![Vasco da Gama and Nicolau Coelho arguing over a map on the quarterdeck of a 15th-century caravel. Malcolm P. Glassworthy stands nearby in a green velvet doublet, looking amused. Renaissance style.](https://files.manuscdn.com/user_upload_by_module/session_file/310419663030244666/YzBnxtqiDnQssNiQ.png)

The madness wasn't limited to the command staff. Down in the hold, a sailor named Old Tom had decided that he was no longer a sailor, but a variable in a quadratic equation.

"I'm 'y'," Old Tom declared, sitting cross-legged on a barrel of salted pork. "And I ain't moving until someone solves for 'x'. Until then, I'm undefined."

"Get up, Tom," the boatswain growled. "It's your watch."

"Can't," Tom said. "I'm on the other side of the equals sign. You have to balance the equation first."

Malcolm, passing by, nodded approvingly. "He's right, you know. You can't just move a variable without performing the inverse operation. Try subtracting his rations. That usually simplifies the expression."

Later that evening, as the sun dipped below the horizon, painting the sky in shades of bruised purple and gold, Malcolm found himself thinking of another garden, far away and long ago.

### *The Green Secret Gardens of Eton*

It was a memory from a time that shouldn't exist, in a place that technically didn't, involving a boy who would grow up to write the manual on ruthlessness.

Young Malcolm sat on a stone bench in the secret gardens of Eton, a place hidden behind the ivy of the mathematics building. Beside him sat a young Niccolò Machiavelli, who was currently peeling an apple with a knife that looked suspiciously sharp for a schoolboy.

"It's not theft, Malcolm," Niccolò said, slicing a piece of fruit. "It's a preemptive strike against hunger. The headmaster has an orchard; I have an appetite. It is a natural realignment of resources."

"It's a stolen apple, Niccolò," Malcolm said, holding a geometric compass. "And if you get caught, the realignment will involve a cane."

"Only if I am caught," Niccolò smiled, a expression that would one day terrify popes. "Power is not about following the rules, Malcolm. It is about defining them. If I say the apple is mine, and I have the will to keep it, then it *is* mine. The truth is just the narrative that survives."

"That's a very linear way of thinking," Malcolm countered. "You assume the apple is a constant. But what if the apple is a variable? What if, by observing the apple, you change its nature? Schrödinger's Apple."

Niccolò frowned. "Who is Schrödinger? Is he in the rowing club?"

"Not yet," Malcolm said. "But my point is, you are solving for power. I am solving for *IX*. The hidden variable. The thing that topples kings not with a sword, but with a whisper. You want to rule the world, Niccolò. I want to debug it."

![Young Machiavelli holding a green apple with a sly grin, while young Malcolm points a geometric compass at it. They are in a lush English garden. Renaissance style.](https://files.manuscdn.com/user_upload_by_module/session_file/310419663030244666/gyzawXeymUghXqzE.png)

Back on the *São Gabriel*, Malcolm lit his pipe. The smoke curled into the air, forming shapes that looked suspiciously like the number nine.

"The IX Principle," Malcolm murmured to the ocean. "Always approaching, never arriving. We are not sailing to India, Zeno. We are sailing to the asymptote."

![Malcolm P. Glassworthy lighting a pipe on the deck of a ship. The smoke curls into the shape of the Roman numeral IX. The background is the open ocean. Renaissance oil painting style.](https://files.manuscdn.com/user_upload_by_module/session_file/310419663030244666/XCnVtqLyDdaVRzpg.png)

That night, Paulo da Gama and Brother António stood on the deck, looking up at the stars. The Milky Way stretched across the sky like a spilled bottle of celestial milk.

"Do you think he's mad?" Paulo asked, gesturing towards Malcolm's cabin. "He talks to frogs. He argues with equations. He told the cook to bake clouds."

Brother António sighed. "Perhaps. Or perhaps he sees the world as it truly is. A complex sum of infinite parts. We see the ocean; he sees the water molecules. We see the King; he sees the probability curve that put him on the throne."

"He calls us the 'Disciples of IX'," Paulo whispered. "What does that make us?"

"Variables," António said, looking at the stars. "Just variables in his grand equation. Let us hope, for our sake, that we are not the ones he decides to cancel out."

![Paulo da Gama and Brother António standing on the deck of a caravel at night, looking up at a starry sky where the Milky Way forms a subtle mathematical curve. Paulo holds a sketchbook. Renaissance style.](https://files.manuscdn.com/user_upload_by_module/session_file/310419663030244666/TYjIVeFeojOysxev.png)
`;

export default function ChapterPage({ params }: { params: { id: string } }) {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    if (params?.id) {
      const chapterId = parseInt(params.id);
      setTitle(chapterTitles[chapterId] || `Chapter ${chapterId}`);
      
      // Simulate loading for dramatic effect
      setTimeout(() => {
        if (chapterId === 1) {
          setContent(CHAPTER_1_CONTENT);
        } else if (chapterId === 2) {
          setContent(CHAPTER_2_CONTENT);
        } else {
          setContent("# Chapter Coming Soon\n\nThe history books are still being written...");
        }
        setLoading(false);
      }, 800);
    }
  }, [params?.id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <Loader2 className="w-12 h-12 animate-spin text-primary mx-auto" />
          <p className="text-muted-foreground font-serif italic">Loading the simulation...</p>
        </div>
      </div>
    );
  }

  const chapterId = params?.id ? parseInt(params.id) : 1;

  return (
    <BookLayout>
      <ChapterView 
        chapterNumber={chapterId}
        title={title} 
        content={content}
        prevChapter={chapterId > 1 ? { number: chapterId - 1, title: chapterTitles[chapterId - 1] } : undefined}
        nextChapter={chapterId < 9 ? { number: chapterId + 1, title: chapterTitles[chapterId + 1] } : undefined}
      />
    </BookLayout>
  );
}
