import { BookLayout } from "@/components/BookLayout";
import { CharacterView } from "@/components/CharacterView";
import { useRoute } from "wouter";

const charactersData = {
  mpg: {
    name: "M.P. Glassworthy",
    role: "The Mathematical Alchemist",
    content: `
**Age**: 28-30 (during the events of *The Durban Paradox*)  
**Title**: 9th Earl of Glassworthy  
**Education**: Eton College (Class of 1487), unofficial apprenticeship under the great Renaissance minds.

## Overview

Malcolm P. Glassworthy, the IX, is a figure who defies easy categorization. He is a nobleman by birth, a mathematician by trade, and a revolutionary by nature. He is the living embodiment of the bridge between the old world and the new, a man who is as comfortable in the opulent courts of Europe as he is in the dusty markets of the East. He is, in short, the ultimate Renaissance man, a prototype for a new kind of human being.

## Mathematical Prowess

MPG's genius lies in his unique ability to synthesize different mathematical traditions into a single, coherent framework. He is the architect of a new science, a new philosophy, a new way of seeing the world. His key contributions include:

*   **Asymptotic Intelligence (The IX Principle)**: The principle of always approaching, but never arriving. It is the art of getting infinitely close to the truth, without ever having to be burdened by the finality of it. This is not just a mathematical concept for MPG; it is a way of life.
*   **Game Theory**: Long before the term was ever coined, MPG was a master of game theory. He saw the world as a complex, multi-party game, and he knew how to play it to win. But for him, winning was not about defeating his opponents; it was about creating a better outcome for everyone involved.
*   **"Influence Value" & "Reputation Capital"**: MPG understood that true power lies not in wealth or military might, but in influence and reputation. He was a master of building and maintaining relationships, of creating networks of trust and mutual respect. He knew that these intangible assets were far more valuable than any amount of gold.

## The Cannabis Consciousness

MPG is a firm believer in the power of cannabis to unlock the deeper structures of reality. For him, it is not a recreational drug, but a sacred tool, a key that opens the door to a higher state of consciousness. He is a master of the cannabis consciousness traditions of the world, and he uses this knowledge to amplify his own, formidable intellectual abilities.

## Character Arc in *The Durban Paradox*

In *The Durban Paradox*, MPG is at the height of his powers. He is the driving force behind the expedition, the intellectual architect of its success. He is the teacher, the guide, the mentor who leads his companions on a journey of discovery, not just of the world, but of themselves. He is the man who solves the Durban Paradox, not with a single answer, but with a new way of seeing, a new way of being, a new, infinite game to be played.
    `
  },
  vasco: {
    name: "Vasco da Gama",
    role: "The Pragmatic Visionary",
    content: `
**Age**: 28 (during the events of *The Durban Paradox*)  
**Occupation**: Portuguese Navigator and Explorer

## Overview

Vasco da Gama is a man of action, a man of the material world. He is a brilliant navigator, a courageous leader, and a loyal servant of the Portuguese crown. He is a man who believes in the power of hard work, of discipline, of cold, hard facts. He is, in short, the perfect foil for the eccentric, esoteric genius of M.P. Glassworthy.

## Mathematical Journey

At the beginning of *The Durban Paradox*, da Gama is a man who trusts his charts, his compass, and his own, hard-won experience. He is skeptical of MPG's "magic beans" and his "asymptotic intelligence." But as the voyage progresses, he begins to see the power of the new mathematics. He sees how it can be used to solve real-world problems, to navigate treacherous waters, to forge alliances with powerful rulers. He becomes a convert, a believer, a student of the new science.

His transformation is completed during the Tower Ritual, when he has a vision of the path to the Pacific. It is a moment of profound revelation, a moment when he sees that the world is not a fixed, static thing, but a dynamic, ever-changing system of interconnected possibilities. He becomes a visionary, a man who can see the future, not as a predetermined fate, but as a landscape of opportunity.

## Relationship with MPG

Da Gama's relationship with MPG is one of the central dynamics of the book. They are two sides of the same coin, the pragmatist and the visionary, the man of action and the man of ideas. They challenge each other, they learn from each other, they push each other to become better, more complete human beings. Their friendship is a testament to the power of collaboration, of synthesis, of the fusion of different ways of thinking.

## Character Arc in *The Durban Paradox*

Da Gama's journey in *The Durban Paradox* is a journey from skepticism to belief, from pragmatism to vision. He begins as a man who trusts only what he can see and touch, and he ends as a man who can see the invisible, who can touch the intangible. He is a man who is transformed by the power of the new mathematics, and he becomes one of its most powerful and influential apostles.
    `
  },
  antonio: {
    name: "Brother António",
    role: "The Spiritual Mathematician",
    content: `
**Age**: 35 (during the events of *The Durban Paradox*)  
**Occupation**: Portuguese Franciscan Monk and Mathematician

## Overview

Brother António is a man of God and a man of numbers, a rare combination in an age where faith and reason were often seen as opposing forces. He is a man of deep spirituality, of quiet contemplation, of profound intellectual curiosity. He is the moral compass of the expedition, the man who grapples with the ethical and philosophical implications of their revolutionary discoveries.

## Mathematical and Spiritual Synthesis

For Brother António, there is no conflict between his faith and his love of mathematics. He sees the universe as a divine creation, a work of art that is governed by elegant, mathematical laws. He sees the new science not as a threat to his faith, but as a new way of understanding the mind of God.

He is particularly fascinated by the Mpombo's mathematical traditions, which he sees as a form of natural theology, a way of reading the book of nature to understand the will of the creator. He is the bridge between the two cultures, the man who can translate the abstract, mathematical concepts into a language that is rich with spiritual meaning.

## The Cannabis Consciousness and Faith

Brother António's experience with the cannabis consciousness is a profound and transformative one. It does not shake his faith, but deepens it. In the heightened state of awareness that the cannabis provides, he has a direct, mystical experience of the divine, a vision of the intricate, mathematical beauty of the universe that confirms his belief in a loving, intelligent creator.

## Character Arc in *The Durban Paradox*

Brother António's journey in *The Durban Paradox* is a journey of intellectual and spiritual integration. He begins as a man who is torn between his faith and his reason, and he ends as a man who has found a way to reconcile them. He is the man who gives the new science a soul, who ensures that it is used not just for the pursuit of knowledge, but for the betterment of humanity. He is the spiritual heart of the expedition, the man who reminds his companions that their work is not just about changing the world, but about serving God.
    `
  }
};

export default function Character() {
  const [match, params] = useRoute("/character/:id");
  const characterId = params ? params.id : "mpg";
  
  const character = charactersData[characterId as keyof typeof charactersData];
  
  if (!character) {
    return (
      <BookLayout>
        <div className="flex items-center justify-center h-full">
          <h1 className="text-2xl font-heading text-muted-foreground">Character not found</h1>
        </div>
      </BookLayout>
    );
  }

  return (
    <BookLayout>
      <CharacterView
        key={characterId}
        name={character.name}
        role={character.role}
        content={character.content}
      />
    </BookLayout>
  );
}
