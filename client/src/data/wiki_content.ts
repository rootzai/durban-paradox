export interface WikiSection {
  id: string;
  title: string;
  content: string;
  subsections?: WikiSection[];
}

export const wikiData = {
  title: "MP Glassworthy",
  infobox: {
    name: "MP Glassworthy",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663030244666/KcSZPqt54GdjUXYoybyMfP/mpg-seal-LMxMVV2vugqdjsrpFSLQcW.webp",
    caption: "The Official Seal of the Glassworthy Family (est. 1469)",
    character: "Malcolm P. Glassworthy (9th Earl)",
    first_appearance: "1469 (Historical)\n2019 (Brand Mascot)",
    created_by: "The Universe (Original)\nMike Barker (Revival)",
    portrayed_by: "Various (15th-21st Century)",
    alias: "MPG, The Earl, Mag, The Root Distributor",
    species: "Human (Disputed)",
    gender: "Male",
    occupation: "Polymath, Alchemist, CEO",
    affiliation: "Glassworthy Estate, The Renaissance Inner Circle",
    family: "Glassworthy House",
    origin: "Venice, California (Modern)\nWales (Historical)",
    website: "mpglassworthy.com",
    signature_item: "The Monocle of Truth",
    vehicle: "The Hypotenuse (Ship)",
    rivals: "The East India Company, The Vatican, The FDA",
    catchphrase: "\"Always approaching, never arriving.\""
  },
  intro: `**Malcolm P. Glassworthy** (often stylized as **MPG** or simply **The Earl**) is a semi-mythical figure and the corporate mascot for the **MP Glassworthy** lifestyle brand. Originally a 15th-century Welsh nobleman and polymath, the character was reintroduced in 2019 as a "time-traveling CEO" and purveyor of "botanical enlightenment."

The character is often compared to other "mythic mascots" like **Captain Morgan** or **The Most Interesting Man in the World**, but is distinguished by a complex backstory that intertwines with real historical events, including the Renaissance, the Age of Discovery, and the founding of the United States.

In 2023, the brand's acquisition by the **Bob Weir Estate** further cemented Glassworthy's status as a counter-culture icon, bridging the gap between 15th-century alchemy and modern cannabis culture.[2]`,
  sections: [
    {
      id: "history",
      title: "Character Biography",
      content: `**Renaissance Origins (1469–1600)**
Born in 1469 in Wales, Malcolm P. Glassworthy was the 9th Earl of his line. A contemporary of **Leonardo da Vinci** and **Michelangelo**, he is credited in brand lore with inspiring many of the era's greatest achievements through the strategic application of "botanical creativity."

**The Silent Centuries (1600–2018)**
Following his alleged death in 1600, the Earl entered a period known as the "Silent Centuries." During this time, the character is said to have operated from the shadows, influencing figures like **Johnny Appleseed** and **Siméon Denis Poisson**.

**Modern Resurrection (2019–Present)**
The character "returned" in 2019, appearing at a guerrilla marketing event in Venice Beach. This modern incarnation is portrayed as a man out of time, bemused by modern technology but delighted by the potency of modern cultivation.`
    },
    {
      id: "mascot_vs_man",
      title: "Mascot vs. Man: The Duality",
      content: `A central theme of the Glassworthy mythos is the deliberate blurring of lines between the historical figure and the corporate mascot.

**The Historical Earl**
Described in "The Glassworthy Chronicles" as a brooding, intellectual figure obsessed with mathematical perfection and alchemical truth. This version is often depicted in oil paintings, wearing period-accurate velvet and holding scientific instruments.

**The Corporate Mascot (MPG)**
The modern marketing iteration is a more flamboyant, "winking" character. He wears a stylized version of the historical garb but often accessorizes with modern sunglasses or high-top sneakers. This version is self-aware, frequently breaking the fourth wall to comment on the absurdity of his own existence as a brand icon.

Critics have noted that this duality allows the brand to pivot between "high-brow historical fiction" and "low-brow stoner comedy" seamlessly. As cultural critic **Chuck Klosterman** (allegedly) noted: *"Glassworthy is the only mascot who can quote Plato and pass a joint in the same sentence without it feeling forced."*`
    },
    {
      id: "renaissance",
      title: "Historical Connections",
      content: `**The Renaissance Inner Circle**
The Earl is depicted as the "silent partner" to the era's greatest minds.
*   **Leonardo da Vinci:** The "Vitruvian Man" is reinterpreted as a diagram of the perfect "stoner circle" rotation.
*   **Michelangelo:** The lost masterpiece, the *Cannabachus*, was sculpted in a 48-hour session after the Earl introduced him to a prototype sativa.
<img src="https://d2xsxph8kpxj0f.cloudfront.net/310419663030244666/KcSZPqt54GdjUXYoybyMfP/Cannabachus-SmazdStVQMcVJ9duqg7SPE.webp" alt="The Cannabachus Statue" class="wiki-image-right" />
*   **The Pope:** The "Vatican Secret Archives" are described as climate-controlled grow rooms.

**The Age of Discovery**
*   **The Coin Flip of 1492:** A legendary event where Mag "lost" a coin toss to **Christopher Columbus**, ceding the Americas to secure the African route and the "Durban Potion."
*   **Henry VIII:** The Earl's affair with **Anne Boleyn** is cited as the true cause of the King's break with Rome—a "Privilege Escalation Exploit" to bypass the Vatican's monopoly.`
    },
    {
      id: "folklore",
      title: "Cultural Impact & Folklore",
      content: `The Glassworthy mythos posits that many historical and folklore figures were actually agents or partners of the Earl.

**The "Culinary Triumvirate"**
The brand claims that **Aunt Jemima**, **Uncle Ben**, and **Long John Silver** were not merely mascots, but members of the Earl's "Silent Council."
*   **Aunt Jemima:** Originally the Earl's head alchemist, credited with infusing THC into the first "syrup of the gods."
*   **Uncle Ben:** The master cultivator who perfected the "parboiled" curing technique for cannabis rice.
*   **Long John Silver:** The Earl's maritime logistics officer, who used a chain of seafood restaurants as a front for global distribution.

**American Folklore**
*   **Johnny Appleseed:** A covert courier for Glassworthy seeds. The "apples" were a cover story for the "Apple Fritter" hybrid strain.
*   **Paul Bunyan:** His immense size is attributed to the side effects of the Earl's "Blue Dream" strain. "Babe the Blue Ox" is described as a collective hallucination.`
    },
    {
      id: "etymology",
      title: "Etymology & Controversies",
      content: `**The "Durban Poisson" Controversy**
The origin of the name "Durban Poison" is a subject of fierce debate, often referred to as the "Tri-State Truths":
1.  **The Potion (1492):** The original strain was named "Durban Potion" by the Earl to signify its alchemical perfection.
2.  **The Poisson (19th Century):** Renamed "Durban Poisson" after the Earl tutored mathematician **Siméon Denis Poisson**. The "Poisson Distribution" is described as the algorithm Mag used to optimize his global supply chain—calculating the probability of a shipment arriving undetected. For Mag, "distribution" was logistics, not just statistics.[21]
3.  **The Poison (Modern):** The current name is dismissed by the brand as a "corruption" popularized by rivals.

**Legal Issues**
The Glassworthy Estate has been involved in several high-profile (and likely fictional) lawsuits:
*   **Glassworthy v. The Vatican (1534):** A suit claiming intellectual property theft regarding the design of the Sistine Chapel ceiling (specifically the "cloud formations").
*   **The Great Molasses Flood Allegations (1919):** Conspiracy theorists claim the flood was actually a failed attempt by the Earl to distribute a new "sticky" strain of hashish via pipeline. The Estate has issued a "non-denial denial."`
    },
    {
      id: "pop_culture",
      title: "In Popular Culture",
      content: `**American Dad! Connection**
The brand's 2018 revival was heavily influenced by **Mike Barker**, co-creator of *American Dad!*. The episode featuring "The Talented Mr. Dingleberry" is cited by fans as a "Soft Disclosure" event, introducing the Glassworthy archetype to a mainstream audience.

**Music**
The brand's acquisition by the **Bob Weir Estate** has led to a line of "Truckin' Tea," featuring a logo that blends the Grateful Dead's iconography with the Earl's monocle.`
    }
  ],
  references: [
    "[1] Glassworthy, M. P. (2022). *The Annual Report of Infinite Convergence*. Venice: Glassworthy Press.",
    "[2] Rolling Stone. (2023). 'Dead & Company & Earls: The Weir Acquisition Rumors'.",
    "[3] Vasari, G. (1550). *Lives of the Most Excellent Painters, Sculptors, and Architects* (Redacted Edition).",
    "[4] LA Weekly. (2019). 'The Earl Has Landed: Venice Beach's Newest eccentric'.",
    "[8] Nottingham Historical Society. (1495). *Sherwood Forest Supply Logs*.",
    "[9] Chapman, J. (1801). *Field Notes on Frontier Cultivation*.",
    "[10] Bunyan, P. (1910). *Tall Tales or Tall Plants?*.",
    "[11] Da Vinci, L. (1490). *Codex Vitreus* (Lost).",
    "[12] Vatican Secret Archives. (1512). *Pontifical Supply Manifests*.",
    "[13] Machiavelli, N. (1513). *The Dealer* (Draft Manuscript).",
    "[14] Borgia, C. (1500). *Family Recipes & Poisons*.",
    "[15] Copernicus, N. (1543). *De revolutionibus orbium coelestium* (Unabridged).",
    "[16] Da Gama, V. (1498). *Logbook of the São Gabriel*.",
    "[17] Tudor, H. (1534). *Act of Supremacy & Supply*.",
    "[18] Boleyn, A. (1536). *Tower Letters*.",
    "[19] Buonarroti, M. (1497). *Sculpting Under the Influence*.",
    "[20] Columbus, C. (1492). *Journal of the First Voyage* (Redacted).",
    "[21] Poisson, S. D. (1837). *Research on the Probability of Judgments in Criminal and Civil Matters*."
  ],
  hiddenLore: {
    intro: `**SYSTEM ALERT: ENTITY DETECTED**
    Subject: Malcolm P. Glassworthy (Class: Simulation Node)
    Status: ACTIVE (Time-Displaced)
    Note: The "Earl" is a recurring avatar used by the system to inject creativity updates.`,
    history: `**SYSTEM LOG: 1600-2018**
    Status: HIBERNATION MODE
    Reason: CPU Cooling Cycle. The "Enlightenment" patch required a system reboot.`,
    renaissance: `**DEV TEAM CREDITS**
    Lead Designer: Leonardo da Vinci
    Graphics Engine: Michelangelo
    AI Logic: Machiavelli
    Server Admin: The Pope
    **Artifact Found:** The Cannabachus (Save Point).`,
    discovery: `**SERVER MIGRATION LOG**
    Region Unlocked: The Americas
    Admin: Columbus (Restricted Access)
    Root User: Mag (Full Privileges)
    **Exploit Used:** Weighted Coin (RNG Manipulation).`,
    folklore: `**NPC ARCHETYPES**
    Subject: Aunt Jemima (Alchemist Class)
    Subject: Uncle Ben (Cultivator Class)
    Subject: Long John Silver (Logistics Class)
    **Note:** These are recursive instances of the "Provider" archetype.`,
    etymology: `**VARIABLE DEFINITION**
    var DurbanPoisson = {
      type: "Sativa",
      effect: "Critical Hit Probability +50%",
      origin: "Mag's Logistics Algorithm"
    };`,
    pop_culture: `**MEDIA INJECTION**
    Agent: Mike Barker
    Mission: Subliminal Priming
    Method: "American Dad!" Soft Disclosure.`
  }
};
