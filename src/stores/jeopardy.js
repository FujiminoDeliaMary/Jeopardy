import { defineStore } from 'pinia';

export const useJeopardyStore = defineStore('jeopardy', {
  state: () => ({
    categories: [
      { 
        name: "Marvel",
        questions: [
          {
            level: 1,
            question : "2018 ",
            clues: ["he appears in several of his films"],
            answer: "when did stan lee die?",
            isdone: false
          },
          {
            level: 2,
            question: " New York, 2012",
            clues: ["one of them is contained in loki's scepter", "loki is the last holder of the other one before Thanos"],
            answer: "Where and when the tesseract and the mind stone were hidden",
            isdone: false
          },
          {
            level: 3,
            question: "Sokovia Accords ",
            clues: ["site of a major battle in Avengers: Age of Ultron", "Country of origin of Wanda Maximoff"],
            answer: "What is the name of the treaty that divides the Avengers into opposing factions?",
            isdone: false
          },
          {
            level: 4,
            question: " Who the hell is Bucky?",
            clues: ["Winter soldier", "brainwashing"],
            answer: "What does the Winter Soldier say after Steve first recognizes him?",
            isdone: false
          },
          {
            level: 5,
            question: "Gamora",
            clues: ["he wants to eliminate half of the universe", "one of the six infinity stones"],
            answer: " Who does the Mad Titan sacrifice to acquire the Soul Stone",
            isdone: false
          }
        ]
      },
      {
        name: "Pastries",
        questions: [
            {
                level: 1,
                "answer": "What event inspired the name of the French pastry \"le Paris-Brest\"?",
                "clues": ["praline cream", "cities"],
                "question": "the cycle race",
                isdone: false
              },
              {
                level: 2,
                "answer": "What is the most popular Christmas pastry?",
                "clues": ["consumption", "tradition"],
                "question": "the log",
                isdone: false
              },
              {
                level: 3,
                "answer": "what fruit is traditionally used in tarte tatin?",
                "clues": ["pie", "tradition"],
                "question": "pears",
                isdone: false
              },
              {
                level: 4,
                "answer": "What is the meaning of Tiramisu?",
                "clues": ["italy", "significant"],
                "question": "'Pull me up', 'Lift my spirits'",
                isdone: false
              },
              {
                level: 5,
                "answer": "What is a croissant?",
                "clues": ["breakfast", "Features a simulated reality"],
                "question": "Viennese pastries",
                isdone: false
              }
        ]
      },
      {
        name: "Colors",
        questions: [
            {
                level: 1,
                "answer": "What color is often used in road signs to warn drivers to slow down or exercise caution?",
                "clues": ["Signalling", "Caution"],
                "question": "Yellow",
                isdone: false
              },
              {
                level: 2,
                "answer": "In computer jargon, what color is often associated with a frozen screen or system crash, often referred to as the \"blue screen of death\"?",
                "clues": ["Screen", "Error"],
                "question": "Blue",
                isdone: false
              },
              {
                level: 3,
                "answer": "What color dominates the Chinese Wall, especially in the Beijing area, symbolizing power and historical protection?",
                "clues": ["Beijing", "Wall"],
                "question": "Red",
                isdone: false
              },
              {
                level: 4,
                "answer": "What color was voted color of the year in 2023 by Pantone?",
                "clues": ["Year 2023", "Pantone"],
                "question": "Magenta",
                isdone: false
              },
              {
                level: 5,
                "answer": "What color is traditionally associated with the Dutch royal family?",
                "clues": ["Netherlands", "Royal House"],
                "question": "Orange",
                isdone: false
              }
        ]
      },
      {
        name: "Sport",
        questions: [
            {
                level: 1,
                "answer": "When did Rafael Nadal win his first Wimbledon title?",
                "clues": ["He defeated Roger Federer in the final", "Considered among the greatest tennis players"],
                "question": "R: Wimbledon, 2008",
                isdone: false
              },
              {
                level: 2,
                "answer": "When did Cristiano Ronaldo, who played for Real Madrid, win his fifth Ballon d'Or?",
                "clues": ["He still plays today", "He played for Real Madrid"],
                "question": "2018",
                isdone: false
              },
              {
                level: 3,
                "answer": "Who is Muhammad Ali",
                "clues": ["Nicknamed 'The Greatest'", "He refused to serve in the US Army during the Vietnam War"],
                "question": "The greatest boxer of all time",
                isdone: false
              },
              {
                level: 4,
                "answer": "What annual cycling event, starting in 1903, consists of multiple stages across France?",
                "clues": ["Multiple stages across France", "The yellow Jersey"],
                "question": "1903, Henry Desgrange",
                isdone: false
              },
              {
                level: 5,
                "answer": "To which sport does the Maple Leafs team belong?",
                "clues": ["Maple", "They lost their Game on Monday"],
                "question": "Ice Hockey",
                isdone: false
              }
        ]
      }
    ]
  }),
  actions: {
    // Ici, vous pouvez ajouter des actions pour manipuler vos données,
    // comme ajouter de nouvelles catégories, questions, etc.
  }
});