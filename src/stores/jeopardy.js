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
            points: 200,
            isdone: false
          },
          {
            level: 2,
            question: " New York, 2012",
            clues: ["one of them is contained in loki's scepter", "loki is the last holder of the other one before Thanos"],
            answer: "Where and when the tesseract and the mind stone were hidden",
            points: 400,
            isdone: false
          },
          {
            level: 3,
            question: "Sokovia Accords ",
            clues: ["site of a major battle in Avengers: Age of Ultron", "Country of origin of Wanda Maximoff"],
            answer: "What is the name of the treaty that divides the Avengers into opposing factions?",
            points: 600,
            isdone: false
          },
          {
            level: 4,
            question: " Who the hell is Bucky?",
            clues: ["Winter soldier", "brainwashing"],
            answer: "What does the Winter Soldier say after Steve first recognizes him?",
            points: 800,
            isdone: false
          },
          {
            level: 5,
            question: "Gamora",
            clues: ["he wants to eliminate half of the universe", "one of the six infinity stones"],
            answer: " Who does the Mad Titan sacrifice to acquire the Soul Stone",
            points: 1000,
            isdone: false
          }
        ]
      },
      {
        name: "Politique",
        questions: [
          {
            "level": 1,
            "question": "2020",
            "clues": ["First major global event caused by a coronavirus"],
            "answer": "When did the World Health Organization declare COVID-19 a pandemic?",
            "points": 200,
            "isdone": false
          },
          {
            "level": 2,
            "question": "Paris, 2015",
            "clues": ["International agreement on climate change", "Aims to keep global warming below 2°C"],
            "answer": "What is the name of the treaty aimed at fighting global warming?",
            "points": 400,
            "isdone": false
          },
          {
            "level": 3,
            "question": "Brexit",
            "clues": ["A referendum in 2016", "The United Kingdom's decision"],
            "answer": "What is the process called where the UK decided to leave the European Union?",
            "points": 600,
            "isdone": false
          },
          {
            "level": 4,
            "question": "The Nobel Peace Prize, 2019",
            "clues": ["Ethiopian Prime Minister", "For achieving peace with Eritrea"],
            "answer": "Who won the Nobel Peace Prize in 2019 for his efforts to achieve peace and international cooperation?",
            "points": 800,
            
            "isdone": false
          },
          {
            "level": 5,
            "question": "United Nations Climate Change Conference",
            "clues": ["Held annually", "Discussion on global climate policy"],
            "answer": "What is the official name of the conference where world leaders discuss climate change policies?",
            "points": 1000,
            "isdone": false
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
                "points":200,
                isdone: false
              },
              {
                level: 2,
                "answer": "In computer jargon, what color is often associated with a frozen screen or system crash, often referred to as the \"blue screen of death\"?",
                "clues": ["Screen", "Error"],
                "question": "Blue",
                "points":400,
                isdone: false
              },
              {
                level: 3,
                "answer": "What color dominates the Chinese Wall, especially in the Beijing area, symbolizing power and historical protection?",
                "clues": ["Beijing", "Wall"],
                "question": "Red",
                "points":600,
                isdone: false
              },
              {
                level: 4,
                "answer": "What color was voted color of the year in 2023 by Pantone?",
                "clues": ["Year 2023", "Pantone"],
                "question": "Magenta",
                "points":800,
                isdone: false
              },
              {
                level: 5,
                "answer": "What color is traditionally associated with the Dutch royal family?",
                "clues": ["Netherlands", "Royal House"],
                "question": "Orange",
                "points":1000,
                isdone: false
              }
        ]
      },
      {
        name: "Cinema",
        questions: [
          {
            "level": 1,
            "question": "Oscar for Best Picture, 2020",
            "clues": ["South Korean film", "Deals with class disparity"],
            "answer": "Which movie won the Oscar for Best Picture in 2020?",
            "points": 200,
            "isdone": false
          },
          {
            "level": 2,
            "question": "Stranger Things",
            "clues": ["Set in the 1980s", "A group of kids in Hawkins, Indiana"],
            "answer": "What is the name of the series involving children and supernatural events in a small town?",
            "points": 400,
            "isdone": false
          },
          {
            "level": 3,
            "question": "Joaquin Phoenix",
            "clues": ["Played a DC Comics villain in 2019", "Won an Oscar for Best Actor"],
            "answer": "Who played the lead role in the movie 'Joker'?",
            "points": 600,
            "isdone": false
          },
          {
            "level": 4,
            "question": "Mandalorian",
            "clues": ["Star Wars universe", "Bounty hunter and Baby Yoda"],
            "answer": "What is the title of the series set in the Star Wars universe that follows a bounty hunter?",
            "points": 800,
            "isdone": false
          },
          {
            "level": 5,
            "question": "Avengers: Endgame",
            "clues": ["Highest-grossing film of all time as of 2019", "Culmination of a decade-long movie saga"],
            "answer": "What movie became the highest-grossing film of all time in 2019?",
            "points": 1000,
            "isdone": false
          }
        ]
      },
      {
        name: 'Sport', 
        questions: [
          {
            "level": 1,
            "question":  "Tokyo 2020",
            "clues":  ["First Olympics to be postponed", "Held without international spectators"],
            "points":200,
            "answer" :  "What is the name of the Olympic Games that were held in 2021 due to a global pandemic?"
          },
          {
            "level": 2,
            "question":  "Cristiano Ronaldo",
            "clues":  ["Portuguese football star", "First person to reach 200 million followers on Instagram"],
            "points":400,
            "answer" :  "Who is the footballer known for playing at Manchester United, Real Madrid, and Juventus, and for being one of the greatest of all time?"
          },
          {
            "level": 3,
            "question":  "Super Bowl LIV",
            "clues":   ["Kansas City Chiefs vs San Francisco 49ers", "Held in 2020 in Miami"],
            "points":600,
            "answer" : "What is the event where the Kansas City Chiefs won their first NFL championship in 50 years?"
          },
          {
            "level": 4,
            "question":  "Serena Williams",
            "clues":  ["23 Grand Slam singles titles", "Sister of Venus Williams"],
            "points":800,
            "answer" :"Who is the American tennis player considered one of the greatest athletes in the sport?"
          },
          {
            "level": 5,
            "question":  "Tour de France",
            "clues": ["Yellow Jersey", "World's most famous cycling race"],
            "points":1000,
            "answer" : "What is the annual men's multiple stage bicycle race primarily held in France?",
          }
        ]
      },
      {
        name: "Internet",
        questions: [
          {
            "level": 1,
            "question":  "Meme Culture",
            "clues":  ["Doge", "Pepe the Frog"],
            "points":200,
            "answer" : "What term describes the phenomenon of viral jokes and images shared online?",
          },
          {
            "level": 2,
            "question":  "YouTube",
            "clues":["PewDiePie vs T-Series", "The platform's first video was 'Me at the zoo'"],
            "points":400,
            "answer" : "What is the name of the video-sharing platform that has become the second largest search engine in the world?",
          },
          {
            "level": 3,
            "question":  "Bitcoin",
            "clues": ["Satoshi Nakamoto", "Cryptocurrency"],
            "points":600,
            "answer" :  "What is the first decentralized digital currency, introduced in 2009",
          },
          {
            "level": 4,
            "question":  "Social Media Challenge",
            "clues": ["Ice Bucket", "TikTok dances"],
            "points":800,
            "answer" : "What term is used to describe viral activities that users replicate and share across social media platforms?",
          },
          {
            "level": 5,
            "question":  "Elon Musk",
            "clues": ["CEO of Tesla and SpaceX", "Popular Twitter personality"],
            "points":1000,
            "answer" : "Who is the entrepreneur known for his ambitious projects in electric cars and space travel, as well as his presence on social media",
          }
        ]
      },
      {
        name: "Culture generale",
        questions: [
          {
            "level": 1,
            "question":  "The Mona Lisa",
            "clues": ["Painted by Leonardo da Vinci", "Famous for her enigmatic smile"],
            "points":200,
            "answer" : "What is the name of the world-renowned portrait displayed in the Louvre Museum?"
          },
          {
            "level": 2,
            "question":  "Eiffet Tower",
            "clues": ["Located in Paris", "Constructed for the 1889 World's Fair"],
            "points":400,
            "answer" :"What is the name of the iron lattice tower that is one of the most recognizable structures in the world?"
          },
          {
            "level": 3,
            "question": "Shakespeare",
            "clues": ["English playwright", "Romeo and Juliet"],
            "points":600,
            "answer" :"Who is the author known as The Bard, famous for his plays and sonnets?"
          },
          {
            "level": 4,
            "question": "The Great Wall of China",
            "clues":  ["Can be seen from space", "Built to protect against invasions"],
            "points":800,
            "answer" :"What is the name of the series of fortifications made of stone, brick, tamped earth, wood, and other materials, generally built along an east-to-west line across the historical northern borders of China?"
          },
          {
            "level": 5,
            "question": "The Pyramids of Giza",
            "clues": ["One of the Seven Wonders of the Ancient World", "Located in Egypt"],
            "points":1000,
            "answer" :"What is the archaeological site on the Giza Plateau, including three pyramid complexes, known as the Great Pyramids?"
          }
        ]
      },
      {
        name: "Gastronomie",
        questions: [
          {
            "level": 1,
            "question":  "Sushi",
            "clues":  ["Originated in Japan", "Rice and raw fish"],
            "points":200,
            "answer" : "What is the name of the dish that consists of small rolls or balls of vinegar-flavored cold cooked rice served with a garnish of raw fish, vegetables, or egg?",
          },
          {
            "level": 2,
            "question": "Michelin Stars",
            "clues": ["Guide Rouge", "A symbol of fine dining quality"],
            "points":400,
            "answer": "What is the name of the rating system used by the red Michelin Guide to grade restaurants on their quality?"
          },
          {
            "level": 3,
            "question":  "Pizza Margherita",
            "clues": ["Originated in Naples", "Tomatoes, mozzarella, and basil"],
            "points":600,
            "answer": "What is the name of the pizza that represents the colors of the Italian flag and is named after a queen?"
          },
          {
            "level": 4,
            "question": "Sommelier",
            "clues":  ["Wine steward", "Expert in wine tasting and pairing"],
            "points":800,
            "answer":  "What is the term for a trained and knowledgeable wine professional, typically working in fine restaurants, who specializes in all aspects of wine service?"
          },
          {
            "level": 5,
            "question": "French Cuisine",
            "clues": ["Escargot", "Julia Child popularized this cuisine in America"],
            "points":1000,
            "answer":  "What is the term for a trained and knowledgeable wine professional, typically working in fine restaurants, who specializes in all aspects of wine service?"
          },
        ]
      }
    ]
  }),
  actions: {
   
  }
});