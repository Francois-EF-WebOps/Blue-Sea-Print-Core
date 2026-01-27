import { SectionId, ManualSection } from './types';

export const MANUAL_CONTENT: Record<SectionId, ManualSection> = {
  [SectionId.OATH]: {
    id: SectionId.OATH,
    title: "CORE.md — The Oath",
    description: "The irreducible core definition.",
    blocks: [
      {
        content: [
          "This repository is the irreducible core of Blue Sea Print.",
          "It exists so that food knowledge does not depend on systems, autonomy does not depend on permission, and survival knowledge does not drift into abstraction."
        ]
      },
      {
        title: "The Oath",
        content: ["I acknowledge that:"],
        list: [
          "This core is intentionally small.",
          "This core is intentionally incomplete.",
          "This core is intentionally boring."
        ]
      },
      {
        content: ["Its value is not in growth, but in reliability."]
      },
      {
        title: "What the Core Must Always Do",
        content: ["The core must allow a single person, near the sea, to:"],
        list: [
          "Obtain food",
          "Preserve food",
          "Repeat the process",
          "Learn from failure"
        ]
      },
      {
        title: "The Freeze",
        content: [
          "Once the core satisfies its purpose, it is frozen.",
          "From that point on: clarity may improve, errors may be corrected, size may shrink, but scope may not expand."
        ],
        warning: "If this repository is ever deleted, forgotten, or abandoned, the knowledge it contains should still be reconstructible from memory, practice, and the sea itself."
      }
    ]
  },
  [SectionId.DOCTRINE]: {
    id: SectionId.DOCTRINE,
    title: "V0 — Foundation",
    description: "Principles of distributed maritime nutritional resilience.",
    blocks: [
      {
        title: "First Principle",
        content: [
          "If you are near the sea, you should be able to obtain food with simple tools, using knowledge you can understand, without waiting for institutions to function."
        ]
      },
      {
        title: "Who This Is For",
        content: ["The framework is intentionally designed for:"],
        list: [
          "Individuals",
          "Families",
          "Small crews or groups (2–12)"
        ]
      },
      {
        title: "What This Is Not",
        content: ["Blue Sea Print is not:"],
        list: [
          "A political ideology",
          "A startup or funding vehicle",
          "A community hierarchy",
          "A replacement for society"
        ]
      },
      {
        title: "Legal Posture",
        content: [
          "This framework assumes lawful, subsistence-scale activity. It makes no exclusive claims, causes no ecological exhaustion, and assumes no dependency on constant oversight.",
          "It is designed to fit under many legal systems, not fight them."
        ]
      }
    ]
  },
  [SectionId.NUTRITION]: {
    id: SectionId.NUTRITION,
    title: "Nutrition Stack",
    description: "Complete nutritional viability, not yield maximization.",
    blocks: [
      {
        content: [
          "If you cannot preserve food, you are not food-secure.",
          "Scarcity is usually a tooling and knowledge problem, not a resource problem."
        ]
      },
      {
        title: "A. Protein",
        content: ["Sources of essential amino acids and structure."],
        list: [
          "Fish (Near-shore and pelagic)",
          "Mollusks (Shellfish, octopus, squid)",
          "Crustaceans (Crabs, lobster, shrimp)"
        ]
      },
      {
        title: "B. Calories",
        content: ["Energy required for labor and thermoregulation."],
        list: [
          "Seaweeds (Kelp, sea lettuce)",
          "Preserved marine biomass (Fish oil, dried stocks)",
          "Stored catches"
        ]
      },
      {
        title: "C. Micronutrients",
        content: ["Preventing deficiency diseases."],
        list: [
          "Organs (Liver, eyes, roe)",
          "Algae",
          "Fermented marine foods"
        ]
      }
    ]
  },
  [SectionId.TOOLS]: {
    id: SectionId.TOOLS,
    title: "Tool Primitives",
    description: "Knowledge-first, hardware-second.",
    blocks: [
      {
        title: "Tool-Building Rules",
        content: ["All tools should follow these rules:"],
        list: [
          "Buildable or repairable locally",
          "Understandable without manuals",
          "Replaceable without supply chains",
          "Non-specialized",
          "Failure-tolerant"
        ]
      },
      {
        title: "Core Primitives",
        content: ["Do not rely on complex supply chains. Focus on simple physics:"],
        list: [
          "Lines & Hooks (Passive fishing)",
          "Traps (Passive harvesting)",
          "Spears (Active harvesting)",
          "Nets (Volume harvesting - requires maintenance)"
        ]
      },
      {
        content: [],
        warning: "Complexity must earn its place. Start with the simplest method."
      }
    ]
  },
  [SectionId.PRESERVATION]: {
    id: SectionId.PRESERVATION,
    title: "Preservation",
    description: "Methods that do not require electricity.",
    blocks: [
      {
        content: [
          "The sea provides the vectors for preservation: Salt, Wind, and Sun."
        ]
      },
      {
        title: "Drying",
        content: ["Removing moisture to prevent bacterial growth."],
        list: [
          "Solar drying (Direct sun)",
          "Wind drying (Airflow in shade)",
          "Smoke drying (Heat + chemical preservation)"
        ]
      },
      {
        title: "Salting",
        content: ["Using hypertonic environments to cure flesh."],
        list: [
          "Dry salting (Direct contact)",
          "Brining (Salt water solution)"
        ]
      },
      {
        title: "Fermentation",
        content: ["Controlled decay for long-term storage and gut health."],
        list: [
          "Fish sauces",
          "Fermented pastes"
        ]
      }
    ]
  },
  [SectionId.LEARNING]: {
    id: SectionId.LEARNING,
    title: "Learning Loop",
    description: "How people progress without masters.",
    blocks: [
      {
        title: "The Cycle",
        content: ["Blue Sea Print assumes this loop:"],
        list: [
          "1. Observe your environment",
          "2. Start with the simplest method",
          "3. Eat what you produce",
          "4. Identify the weakest point",
          "5. Improve one element only",
          "6. Repeat"
        ]
      },
      {
        content: ["No optimization without survival first."],
        warning: "Progress is measured in meals, not milestones."
      }
    ]
  }
};