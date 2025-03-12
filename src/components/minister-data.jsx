





// // Finnish Ministers Data
// export const ministersData = {
//     "persons": [
//       {
//         "id": "person_SandraBergqvist",
//         "label": "H.E. Sandra Bergqvist",
//         "type": "Person",
//         "metadata": {
//           "shortBio": "Finland's inaugural Minister of Youth, Sport and Physical Activity, focused on enhancing youth welfare and promoting sports as a tool for well-being.",
//           "keyPoints": [
//             "Oversees youth policy and student aid to energise Finland's young population.",
//             "Hails from the Swedish-speaking archipelago with an entrepreneurial background in agriculture.",
//             "Emphasises inclusion and physical fitness for all; values outdoor pursuits and running."
//           ],
//           "keyThematicTags": [
//             {
//               "theme": "Youth Empowerment & Sports Leadership",
//               "supportingEvidence": [
//                 "Strategically focused on enhancing youth welfare and promoting sports as a tool for well-being.",
//                 "Oversees youth policy and student aid to energise Finland's famously healthy and educated young population.",
//                 "Highlights Finland's success in youth fitness and sports, offering leverage for bilateral discussions with the UAE."
//               ]
//             },
//             {
//               "theme": "Inclusive Active Lifestyle & Wellness Advocacy",
//               "supportingEvidence": [
//                 "Her approach emphasises inclusion and physical fitness for all.",
//                 "Values outdoor pursuits and running in her personal life.",
//                 "Emphasises a healthy, active lifestyle that resonates with the UAE's focus on youth fitness."
//               ]
//             },
//             {
//               "theme": "Rural Entrepreneurship & Diplomatic Leverage",
//               "supportingEvidence": [
//                 "Hails from a Swedish-speaking archipelago with an entrepreneurial background in agriculture.",
//                 "Balances rural entrepreneurship with national policy-making.",
//                 "Provides a portfolio that offers diplomatic leverage in discussions on youth empowerment and sports cooperation."
//               ]
//             }
//           ],
//           "originalProse": [
//             {
//               "title": "Role & Focus",
//               "content": "As Finland's inaugural Minister of Youth, Sport and Physical Activity, Sandra Bergqvist is strategically focused on enhancing youth welfare and promoting sports as a tool for well-being. She oversees youth policy and student aid, aiming to energise Finland's famously healthy and educated young population."
//             },
//             {
//               "title": "Background & Personal Life",
//               "content": "Bergqvist hails from the Swedish-speaking archipelago, with an entrepreneurial background in agriculture. Her approach emphasises inclusion and physical fitness for all. She has noted the importance of outdoor pursuits and running in her personal life, reflecting her active lifestyle."
//             },
//             {
//               "title": "Diplomatic Relevance",
//               "content": "Diplomatically, her portfolio offers leverage in discussing youth empowerment, sports cooperation, and Finland's expertise in education and youth engagement. Emirati counterparts may find shared interest in her balanced approach to rural entrepreneurship and national policy, making her a key figure for bilateral cooperation."
//             }
//           ],
//           "affiliations": [
//             {
//               "entity": "Ministry of Education and Culture, Finland (OKM)",
//               "relationship": "Sandra Bergqvist serves as Finland's inaugural Minister of Youth, Sport and Physical Activity under this ministry."
//             }
//           ]
//         }
//       },
//       {
//         "id": "person_AnnaKaisaIkonen",
//         "label": "H.E. Anna-Kaisa Ikonen",
//         "type": "Person",
//         "metadata": {
//           "shortBio": "Minister of Local & Regional Government, former Mayor of Tampere, renowned for innovative urban development and public-sector reforms.",
//           "keyPoints": [
//             "Oversees municipal affairs, new wellbeing counties, digitalisation, and urban development in Finland.",
//             "Served twice as Mayor of Tampere, earning a reputation for innovative city management.",
//             "Holds a doctorate in social sciences and has led initiatives in healthcare and social welfare reform."
//           ],
//           "keyThematicTags": [
//             {
//               "theme": "Innovative Urban Governance",
//               "supportingEvidence": [
//                 "Earned a reputation for innovative city management and smart urban development as Mayor of Tampere.",
//                 "Spearheads local and regional governance reforms, emphasising urban development.",
//                 "Has published research on municipal leadership and led initiatives in healthcare and social welfare reform."
//               ]
//             },
//             {
//               "theme": "Smart Municipality & Digital Public Services",
//               "supportingEvidence": [
//                 "Responsible for municipal affairs, new wellbeing counties, public-sector digitalisation, and urban development.",
//                 "Her strategic positioning involves driving smart city projects relevant to the UAE's ambitions for world-class cities and e-government.",
//                 "Active in smart city forums and fluent in multiple languages."
//               ]
//             },
//             {
//               "theme": "Cultural & Natural Integration",
//               "supportingEvidence": [
//                 "Enjoys travel, literature, and theatre, which adds a cultural dimension to her profile.",
//                 "Practices skiing, jogging, and open-water swimming, reflecting a love of nature.",
//                 "Combines a focus on urban innovation with personal interests in cultural and natural pursuits."
//               ]
//             }
//           ],
//           "originalProse": [
//             {
//               "title": "Role & Responsibilities",
//               "content": "As Minister of Local & Regional Government, Anna-Kaisa Ikonen is responsible for municipal affairs, new wellbeing counties, public-sector digitalisation, and urban development. She spearheads Finland's local and regional governance reforms."
//             },
//             {
//               "title": "Experience & Innovation",
//               "content": "Having served twice as Mayor of Tampere, Finland's second-largest city, Ikonen earned a reputation for innovative city management and smart urban development. With a doctorate in social sciences, she has published research on municipal leadership and led initiatives in healthcare and social welfare reform."
//             },
//             {
//               "title": "Diplomatic & Cultural Insights",
//               "content": "Her strategic positioning aligns with the UAE's ambitions for smart cities and digital public services. Additionally, her passion for travel, literature, theatre, and nature—evidenced by her enjoyment of skiing, jogging, and open-water swimming—adds a well-rounded dimension to her profile."
//             }
//           ],
//           "affiliations": [
//             {
//               "entity": "Ministry of Economic Affairs and Employment",
//               "relationship": "Anna-Kaisa Ikonen serves as the Minister of Local & Regional Government under this ministry."
//             },
//             {
//               "entity": "City of Tampere",
//               "relationship": "She has served twice as Mayor of Tampere, earning a reputation for innovative city management."
//             },
//             {
//               "entity": "Åland Islands",
//               "relationship": "She has oversight of the autonomous Åland Islands' affairs, demonstrating her appreciation for unique governance models."
//             }
//           ]
//         }
//       }
//     ]
//   };
  
//   // Minister image placeholders
// import sandraBergqvistImage from '../assets/images/sandra-bergqvist.jpg';
// import annaKaisaIkonenImage from '../assets/images/anna-kaisa-ikonen.jpg';

// // Minister image references using imports
// export const ministerImages = {
//   person_SandraBergqvist: sandraBergqvistImage,
//   person_AnnaKaisaIkonen: annaKaisaIkonenImage
// };
  
//   // Hexagon path helper function
//   export const hexagonPath = (size) => {
//     const points = [];
//     for (let i = 0; i < 6; i++) {
//       const angle = (i * Math.PI / 3) - (Math.PI / 6);
//       points.push([size * Math.cos(angle), size * Math.sin(angle)]);
//     }
//     return `M${points.map(p => p.join(',')).join('L')}Z`;
//   };

















// Finnish Ministers Data
export const ministersData = 

{
  "persons": [
    {
      "id": "sandraBergqvist",
      "label": "H.E. Sandra Bergqvist",
      "metadata": {
        "shortBio": "Minister of Youth, Sport and Physical Activity",
        "keyPoints": [
          "Became Minister in June 2023.",
          "Has a background in municipal politics and academia.",
          "Prioritises youth engagement and community well-being."
        ],
        "keyThematicTags": [
          {
            "theme": "Youth and Sports Development",
            "supportingEvidence": [
              "Focuses on engaging youth in sports.",
              "Promotes physical activity as a pathway to well-being.",
              "Advocates community health through sport initiatives."
            ]
          },
          {
            "theme": "Public Service and Governance",
            "supportingEvidence": [
              "Brings experience from municipal politics.",
              "Combines academic insight with policy-making.",
              "Committed to enhancing public welfare."
            ]
          }
        ],
        "originalProse": [
          {
            "title": "<PROSE_TITLE_1>",
            "content": "<PROSE_CONTENT_1>"
          },
          {
            "title": "<PROSE_TITLE_2>",
            "content": "<PROSE_CONTENT_2>"
          },
          {
            "title": "<PROSE_TITLE_3>",
            "content": "<PROSE_CONTENT_3>"
          },
          {
            "title": "<PROSE_TITLE_4>",
            "content": "<PROSE_CONTENT_4>"
          },
          {
            "title": "<PROSE_TITLE_5>",
            "content": "<PROSE_CONTENT_5>"
          },
          {
            "title": "<PROSE_TITLE_6>",
            "content": "<PROSE_CONTENT_6>"
          }
        ],
        "affiliations": [
          {
            "entity": "Ministry of Youth, Sport and Physical Activity",
            "relationship": "Government Office"
          },
          {
            "entity": "Finnish Sports Federation",
            "relationship": "Advisory Role"
          }
        ]
      }
    },
    {
      "id": "annaKaisaIkonen",
      "label": "H.E. Anna-Kaisa Ikonen",
      "metadata": {
        "shortBio": "Minister of Local and Regional Government",
        "keyPoints": [
          "Serves as Minister since June 2023.",
          "Former mayor of Tampere.",
          "Brings deep governance experience."
        ],
        "keyThematicTags": [
          {
            "theme": "Local Governance and Administration",
            "supportingEvidence": [
              "Leverages experience as a former mayor.",
              "Expert in public administration.",
              "Oversees local government initiatives."
            ]
          },
          {
            "theme": "Regional Development",
            "supportingEvidence": [
              "Focuses on sustainable urban policies.",
              "Promotes community development.",
              "Fosters regional growth strategies."
            ]
          }
        ],
        "originalProse": [
          {
            "title": "<PROSE_TITLE_1>",
            "content": "<PROSE_CONTENT_1>"
          },
          {
            "title": "<PROSE_TITLE_2>",
            "content": "<PROSE_CONTENT_2>"
          },
          {
            "title": "<PROSE_TITLE_3>",
            "content": "<PROSE_CONTENT_3>"
          },
          {
            "title": "<PROSE_TITLE_4>",
            "content": "<PROSE_CONTENT_4>"
          },
          {
            "title": "<PROSE_TITLE_5>",
            "content": "<PROSE_CONTENT_5>"
          },
          {
            "title": "<PROSE_TITLE_6>",
            "content": "<PROSE_CONTENT_6>"
          }
        ],
        "affiliations": [
          {
            "entity": "Local Government Office",
            "relationship": "Ministerial Office"
          },
          {
            "entity": "City of Tampere",
            "relationship": "Former Administration"
          }
        ]
      }
    },
    {
      "id": "alexanderStubb",
      "label": "H.E. Alexander Stubb",
      "metadata": {
        "shortBio": "President of the Republic of Finland",
        "keyPoints": [
          "Became President in March 2024.",
          "Holds extensive experience in national and international politics.",
          "Advocates proactive global engagement."
        ],
        "keyThematicTags": [
          {
            "theme": "National Leadership",
            "supportingEvidence": [
              "Leads the nation with a clear vision.",
              "Experienced in both domestic and international policy.",
              "Champions economic and foreign policy reforms."
            ]
          },
          {
            "theme": "Global Engagement",
            "supportingEvidence": [
              "Promotes collaboration beyond traditional partners.",
              "Focuses on proactive international relations.",
              "Encourages economic diplomacy on a global scale."
            ]
          }
        ],
        "originalProse": [
          {
            "title": "<PROSE_TITLE_1>",
            "content": "<PROSE_CONTENT_1>"
          },
          {
            "title": "<PROSE_TITLE_2>",
            "content": "<PROSE_CONTENT_2>"
          },
          {
            "title": "<PROSE_TITLE_3>",
            "content": "<PROSE_CONTENT_3>"
          },
          {
            "title": "<PROSE_TITLE_4>",
            "content": "<PROSE_CONTENT_4>"
          },
          {
            "title": "<PROSE_TITLE_5>",
            "content": "<PROSE_CONTENT_5>"
          },
          {
            "title": "<PROSE_TITLE_6>",
            "content": "<PROSE_CONTENT_6>"
          }
        ],
        "affiliations": [
          {
            "entity": "Republic Office",
            "relationship": "Presidential Office"
          },
          {
            "entity": "National Political Council",
            "relationship": "Advisory"
          }
        ]
      }
    },
    {
      "id": "tuulaYrjola",
      "label": "H.E. Tuula Yrjola",
      "metadata": {
        "shortBio": "Ambassador of Finland to the UAE",
        "keyPoints": [
          "Assumed ambassadorship in October 2023.",
          "Brings over 30 years of diplomatic experience.",
          "Expert in Eastern Europe, Central Asia, and the Middle East."
        ],
        "keyThematicTags": [
          {
            "theme": "Diplomatic Experience",
            "supportingEvidence": [
              "Over three decades of service in diplomacy.",
              "Skilled in managing complex international relations.",
              "Experienced in diverse geopolitical regions."
            ]
          },
          {
            "theme": "Finland-UAE Relations",
            "supportingEvidence": [
              "Focuses on strengthening bilateral ties.",
              "Promotes economic and cultural exchanges.",
              "Advocates for strategic partnerships between nations."
            ]
          }
        ],
        "originalProse": [
          {
            "title": "<PROSE_TITLE_1>",
            "content": "<PROSE_CONTENT_1>"
          },
          {
            "title": "<PROSE_TITLE_2>",
            "content": "<PROSE_CONTENT_2>"
          },
          {
            "title": "<PROSE_TITLE_3>",
            "content": "<PROSE_CONTENT_3>"
          },
          {
            "title": "<PROSE_TITLE_4>",
            "content": "<PROSE_CONTENT_4>"
          },
          {
            "title": "<PROSE_TITLE_5>",
            "content": "<PROSE_CONTENT_5>"
          },
          {
            "title": "<PROSE_TITLE_6>",
            "content": "<PROSE_CONTENT_6>"
          }
        ],
        "affiliations": [
          {
            "entity": "Finnish Embassy, UAE",
            "relationship": "Lead Diplomatic Representative"
          },
          {
            "entity": "Ministry for Foreign Affairs",
            "relationship": "Government Liaison"
          }
        ]
      }
    },
    {
      "id": "annaMariWongHamalainen",
      "label": "H.E. Anna-Mari Wong Hamalainen",
      "metadata": {
        "shortBio": "Director of Foreign and Security Policy",
        "keyPoints": [
          "Directs foreign and security policy initiatives.",
          "Possesses a background in NATO and EU foreign policy.",
          "Advises the President’s Cabinet on security strategies."
        ],
        "keyThematicTags": [
          {
            "theme": "Security and Defence",
            "supportingEvidence": [
              "Expert in NATO and EU policies.",
              "Guides national security strategies.",
              "Influences international defence dialogues."
            ]
          },
          {
            "theme": "Diplomatic Strategy",
            "supportingEvidence": [
              "Shapes Finland’s foreign policy frameworks.",
              "Leads strategic diplomatic initiatives.",
              "Facilitates high-level security discussions."
            ]
          }
        ],
        "originalProse": [
          {
            "title": "<PROSE_TITLE_1>",
            "content": "<PROSE_CONTENT_1>"
          },
          {
            "title": "<PROSE_TITLE_2>",
            "content": "<PROSE_CONTENT_2>"
          },
          {
            "title": "<PROSE_TITLE_3>",
            "content": "<PROSE_CONTENT_3>"
          },
          {
            "title": "<PROSE_TITLE_4>",
            "content": "<PROSE_CONTENT_4>"
          },
          {
            "title": "<PROSE_TITLE_5>",
            "content": "<PROSE_CONTENT_5>"
          },
          {
            "title": "<PROSE_TITLE_6>",
            "content": "<PROSE_CONTENT_6>"
          }
        ],
        "affiliations": [
          {
            "entity": "Ministry for Foreign Affairs",
            "relationship": "Policy Director"
          },
          {
            "entity": "European Security Council",
            "relationship": "Advisor"
          }
        ]
      }
    },
    {
      "id": "villeBrumme",
      "label": "H.E. Ville Brumme",
      "metadata": {
        "shortBio": "Director of Peace Mediation",
        "keyPoints": [
          "Appointed in 2024 to lead peace mediation.",
          "Formerly managed conflict resolution projects at CMI.",
          "Expert in mediation across Africa, the Middle East and Eurasia."
        ],
        "keyThematicTags": [
          {
            "theme": "Conflict Resolution",
            "supportingEvidence": [
              "Leverages deep expertise in mediation.",
              "Oversees high-level peace initiatives.",
              "Experienced in international conflict resolution."
            ]
          },
          {
            "theme": "Diplomatic Engagement",
            "supportingEvidence": [
              "Works closely with government leaders.",
              "Promotes dialogue in conflict zones.",
              "Advocates for peaceful diplomatic solutions."
            ]
          }
        ],
        "originalProse": [
          {
            "title": "<PROSE_TITLE_1>",
            "content": "<PROSE_CONTENT_1>"
          },
          {
            "title": "<PROSE_TITLE_2>",
            "content": "<PROSE_CONTENT_2>"
          },
          {
            "title": "<PROSE_TITLE_3>",
            "content": "<PROSE_CONTENT_3>"
          },
          {
            "title": "<PROSE_TITLE_4>",
            "content": "<PROSE_CONTENT_4>"
          },
          {
            "title": "<PROSE_TITLE_5>",
            "content": "<PROSE_CONTENT_5>"
          },
          {
            "title": "<PROSE_TITLE_6>",
            "content": "<PROSE_CONTENT_6>"
          }
        ],
        "affiliations": [
          {
            "entity": "Office of Peace Mediation",
            "relationship": "Director"
          },
          {
            "entity": "International Mediation Institute",
            "relationship": "Adviser"
          }
        ]
      }
    },
    {
      "id": "elinaValtonen",
      "label": "H.E. Elina Valtonen",
      "metadata": {
        "shortBio": "Minister of Foreign Affairs",
        "keyPoints": [
          "Shapes Finland’s foreign policy during NATO accession.",
          "Has a background in investment banking and economics.",
          "Advocates pragmatic, globally oriented diplomacy."
        ],
        "keyThematicTags": [
          {
            "theme": "Foreign Policy Leadership",
            "supportingEvidence": [
              "Plays a pivotal role in shaping national diplomacy.",
              "Guides key international initiatives.",
              "Influences strategic foreign policy decisions."
            ]
          },
          {
            "theme": "Economic Diplomacy",
            "supportingEvidence": [
              "Utilises expertise in economics and banking.",
              "Balances financial insight with diplomatic strategy.",
              "Supports international economic cooperation."
            ]
          }
        ],
        "originalProse": [
          {
            "title": "<PROSE_TITLE_1>",
            "content": "<PROSE_CONTENT_1>"
          },
          {
            "title": "<PROSE_TITLE_2>",
            "content": "<PROSE_CONTENT_2>"
          },
          {
            "title": "<PROSE_TITLE_3>",
            "content": "<PROSE_CONTENT_3>"
          },
          {
            "title": "<PROSE_TITLE_4>",
            "content": "<PROSE_CONTENT_4>"
          },
          {
            "title": "<PROSE_TITLE_5>",
            "content": "<PROSE_CONTENT_5>"
          },
          {
            "title": "<PROSE_TITLE_6>",
            "content": "<PROSE_CONTENT_6>"
          }
        ],
        "affiliations": [
          {
            "entity": "Ministry of Foreign Affairs",
            "relationship": "Government Minister"
          },
          {
            "entity": "National Security Council",
            "relationship": "Policy Advisor"
          }
        ]
      }
    },
    {
      "id": "lailaClyne",
      "label": "H.E. Laila Clyne",
      "metadata": {
        "shortBio": "Diplomatic Advisor to the Minister",
        "keyPoints": [
          "Advises the Minister for Foreign Affairs.",
          "Former Second Secretary at Finland’s Permanent Mission in Geneva.",
          "Has experience as an Adviser at the UN Mission in New York."
        ],
        "keyThematicTags": [
          {
            "theme": "Diplomatic Advisory",
            "supportingEvidence": [
              "Provides strategic counsel on international relations.",
              "Supports key foreign policy initiatives.",
              "Brings extensive diplomatic experience."
            ]
          },
          {
            "theme": "International Relations",
            "supportingEvidence": [
              "Offers global diplomatic insights.",
              "Formerly served in multilateral institutions.",
              "Advises on bilateral engagements."
            ]
          }
        ],
        "originalProse": [
          {
            "title": "<PROSE_TITLE_1>",
            "content": "<PROSE_CONTENT_1>"
          },
          {
            "title": "<PROSE_TITLE_2>",
            "content": "<PROSE_CONTENT_2>"
          },
          {
            "title": "<PROSE_TITLE_3>",
            "content": "<PROSE_CONTENT_3>"
          },
          {
            "title": "<PROSE_TITLE_4>",
            "content": "<PROSE_CONTENT_4>"
          },
          {
            "title": "<PROSE_TITLE_5>",
            "content": "<PROSE_CONTENT_5>"
          },
          {
            "title": "<PROSE_TITLE_6>",
            "content": "<PROSE_CONTENT_6>"
          }
        ],
        "affiliations": [
          {
            "entity": "Ministry of Foreign Affairs",
            "relationship": "Advisor"
          },
          {
            "entity": "Finnish Permanent Mission",
            "relationship": "Former Diplomat"
          }
        ]
      }
    },
    {
      "id": "annaKaisaHeikkinen",
      "label": "H.E. Anna-Kaisa Heikkinen",
      "metadata": {
        "shortBio": "Director General, Department for Africa, the Middle East and Latin America",
        "keyPoints": [
          "Directs Finnish diplomatic engagements in diverse regions.",
          "Has served in multiple ambassadorial roles.",
          "Focuses on Africa, the Middle East and Latin America."
        ],
        "keyThematicTags": [
          {
            "theme": "Multiregional Diplomacy",
            "supportingEvidence": [
              "Oversees international engagements across continents.",
              "Experienced in ambassadorial positions.",
              "Promotes cross-regional cooperation."
            ]
          },
          {
            "theme": "Strategic Leadership",
            "supportingEvidence": [
              "Leads high-level diplomatic operations.",
              "Guides comprehensive policy frameworks.",
              "Enhances Finland’s global presence."
            ]
          }
        ],
        "originalProse": [
          {
            "title": "<PROSE_TITLE_1>",
            "content": "<PROSE_CONTENT_1>"
          },
          {
            "title": "<PROSE_TITLE_2>",
            "content": "<PROSE_CONTENT_2>"
          },
          {
            "title": "<PROSE_TITLE_3>",
            "content": "<PROSE_CONTENT_3>"
          },
          {
            "title": "<PROSE_TITLE_4>",
            "content": "<PROSE_CONTENT_4>"
          },
          {
            "title": "<PROSE_TITLE_5>",
            "content": "<PROSE_CONTENT_5>"
          },
          {
            "title": "<PROSE_TITLE_6>",
            "content": "<PROSE_CONTENT_6>"
          }
        ],
        "affiliations": [
          {
            "entity": "Ministry for Foreign Affairs",
            "relationship": "Director General"
          },
          {
            "entity": "International Diplomatic Forum",
            "relationship": "Advisor"
          }
        ]
      }
    },
    {
      "id": "anneMRabet",
      "label": "H.E. Anne MRabet",
      "metadata": {
        "shortBio": "Desk Officer for Persian Gulf, UAE, Bahrain, GCC and OIC",
        "keyPoints": [
          "Manages bilateral relations with the Gulf region.",
          "Operates within the Middle East and Gulf Unit at the MFA.",
          "Facilitates day-to-day diplomatic engagements."
        ],
        "keyThematicTags": [
          {
            "theme": "Gulf Diplomacy",
            "supportingEvidence": [
              "Specialises in Persian Gulf affairs.",
              "Coordinates diplomatic initiatives in the region.",
              "Ensures consistent bilateral relations."
            ]
          },
          {
            "theme": "Operational Diplomacy",
            "supportingEvidence": [
              "Handles daily diplomatic tasks efficiently.",
              "Bridges policy with operational needs.",
              "Supports inter-ministerial coordination."
            ]
          }
        ],
        "originalProse": [
          {
            "title": "<PROSE_TITLE_1>",
            "content": "<PROSE_CONTENT_1>"
          },
          {
            "title": "<PROSE_TITLE_2>",
            "content": "<PROSE_CONTENT_2>"
          },
          {
            "title": "<PROSE_TITLE_3>",
            "content": "<PROSE_CONTENT_3>"
          },
          {
            "title": "<PROSE_TITLE_4>",
            "content": "<PROSE_CONTENT_4>"
          },
          {
            "title": "<PROSE_TITLE_5>",
            "content": "<PROSE_CONTENT_5>"
          },
          {
            "title": "<PROSE_TITLE_6>",
            "content": "<PROSE_CONTENT_6>"
          }
        ],
        "affiliations": [
          {
            "entity": "Ministry for Foreign Affairs",
            "relationship": "Desk Officer"
          },
          {
            "entity": "Middle East and Gulf Unit",
            "relationship": "Team Member"
          }
        ]
      }
    },
    {
      "id": "justinHotard",
      "label": "H.E. Justin Hotard",
      "metadata": {
        "shortBio": "Incoming CEO of Nokia",
        "keyPoints": [
          "Set to assume the role of CEO in 2024.",
          "Formerly led AI-driven infrastructure at HPE.",
          "Focuses on next-generation networking and cloud solutions."
        ],
        "keyThematicTags": [
          {
            "theme": "Corporate Leadership",
            "supportingEvidence": [
              "Poised to lead Nokia at a pivotal time.",
              "Brings extensive technology management experience.",
              "Drives digital transformation initiatives."
            ]
          },
          {
            "theme": "Technological Innovation",
            "supportingEvidence": [
              "Emphasises AI and cloud-based solutions.",
              "Advocates next-gen networking technologies.",
              "Fosters innovative approaches in telecom."
            ]
          }
        ],
        "originalProse": [
          {
            "title": "<PROSE_TITLE_1>",
            "content": "<PROSE_CONTENT_1>"
          },
          {
            "title": "<PROSE_TITLE_2>",
            "content": "<PROSE_CONTENT_2>"
          },
          {
            "title": "<PROSE_TITLE_3>",
            "content": "<PROSE_CONTENT_3>"
          },
          {
            "title": "<PROSE_TITLE_4>",
            "content": "<PROSE_CONTENT_4>"
          },
          {
            "title": "<PROSE_TITLE_5>",
            "content": "<PROSE_CONTENT_5>"
          },
          {
            "title": "<PROSE_TITLE_6>",
            "content": "<PROSE_CONTENT_6>"
          }
        ],
        "affiliations": [
          {
            "entity": "Nokia",
            "relationship": "Incoming CEO"
          },
          {
            "entity": "HPE",
            "relationship": "Former Executive"
          }
        ]
      }
    },
    {
      "id": "pekkaLundmark",
      "label": "H.E. Pekka Lundmark",
      "metadata": {
        "shortBio": "Outgoing CEO of Nokia",
        "keyPoints": [
          "Led Nokia from 2020 to 2024.",
          "Steered a critical transformation in telecom.",
          "Focused on 5G, AI-powered automation and green solutions."
        ],
        "keyThematicTags": [
          {
            "theme": "Telecom Innovation",
            "supportingEvidence": [
              "Pioneered 5G and AI initiatives.",
              "Steered transformative changes at Nokia.",
              "Emphasised sustainable and green telecom solutions."
            ]
          },
          {
            "theme": "Corporate Transformation",
            "supportingEvidence": [
              "Managed major organisational changes.",
              "Balanced technological advancement with sustainability.",
              "Set the stage for future leadership transitions."
            ]
          }
        ],
        "originalProse": [
          {
            "title": "<PROSE_TITLE_1>",
            "content": "<PROSE_CONTENT_1>"
          },
          {
            "title": "<PROSE_TITLE_2>",
            "content": "<PROSE_CONTENT_2>"
          },
          {
            "title": "<PROSE_TITLE_3>",
            "content": "<PROSE_CONTENT_3>"
          },
          {
            "title": "<PROSE_TITLE_4>",
            "content": "<PROSE_CONTENT_4>"
          },
          {
            "title": "<PROSE_TITLE_5>",
            "content": "<PROSE_CONTENT_5>"
          },
          {
            "title": "<PROSE_TITLE_6>",
            "content": "<PROSE_CONTENT_6>"
          }
        ],
        "affiliations": [
          {
            "entity": "Nokia",
            "relationship": "Former CEO"
          },
          {
            "entity": "Telecom Transformation Forum",
            "relationship": "Speaker"
          }
        ]
      }
    },
    {
      "id": "sariBaldauf",
      "label": "H.E. Sari Baldauf",
      "metadata": {
        "shortBio": "Chairman of Nokia",
        "keyPoints": [
          "Holds a senior leadership role at Nokia.",
          "Former head of Nokia’s Networks business.",
          "Focuses on international market expansion."
        ],
        "keyThematicTags": [
          {
            "theme": "Corporate Governance",
            "supportingEvidence": [
              "Oversees strategic board-level decisions.",
              "Guides corporate governance initiatives.",
              "Plays a key role in setting company direction."
            ]
          },
          {
            "theme": "Global Market Expansion",
            "supportingEvidence": [
              "Leads international growth efforts.",
              "Utilises extensive experience in networks.",
              "Advocates for global expansion strategies."
            ]
          }
        ],
        "originalProse": [
          {
            "title": "<PROSE_TITLE_1>",
            "content": "<PROSE_CONTENT_1>"
          },
          {
            "title": "<PROSE_TITLE_2>",
            "content": "<PROSE_CONTENT_2>"
          },
          {
            "title": "<PROSE_TITLE_3>",
            "content": "<PROSE_CONTENT_3>"
          },
          {
            "title": "<PROSE_TITLE_4>",
            "content": "<PROSE_CONTENT_4>"
          },
          {
            "title": "<PROSE_TITLE_5>",
            "content": "<PROSE_CONTENT_5>"
          },
          {
            "title": "<PROSE_TITLE_6>",
            "content": "<PROSE_CONTENT_6>"
          }
        ],
        "affiliations": [
          {
            "entity": "Nokia",
            "relationship": "Chairman"
          },
          {
            "entity": "International Business Council",
            "relationship": "Board Member"
          }
        ]
      }
    },
    {
      "id": "hakanAgnevall",
      "label": "H.E. Håkan Agnevall",
      "metadata": {
        "shortBio": "CEO of Wärtsilä",
        "keyPoints": [
          "CEO of Wärtsilä since 2021.",
          "Expert in electrification and power systems.",
          "Background with Volvo, Bombardier and ABB."
        ],
        "keyThematicTags": [
          {
            "theme": "Industrial Leadership",
            "supportingEvidence": [
              "Leads Wärtsilä’s global operations.",
              "Drives innovation in energy solutions.",
              "Possesses extensive industrial expertise."
            ]
          },
          {
            "theme": "Technological Expertise",
            "supportingEvidence": [
              "Specialises in electrification technologies.",
              "Has a strong background with major industry players.",
              "Focuses on advancing power systems innovation."
            ]
          }
        ],
        "originalProse": [
          {
            "title": "<PROSE_TITLE_1>",
            "content": "<PROSE_CONTENT_1>"
          },
          {
            "title": "<PROSE_TITLE_2>",
            "content": "<PROSE_CONTENT_2>"
          },
          {
            "title": "<PROSE_TITLE_3>",
            "content": "<PROSE_CONTENT_3>"
          },
          {
            "title": "<PROSE_TITLE_4>",
            "content": "<PROSE_CONTENT_4>"
          },
          {
            "title": "<PROSE_TITLE_5>",
            "content": "<PROSE_CONTENT_5>"
          },
          {
            "title": "<PROSE_TITLE_6>",
            "content": "<PROSE_CONTENT_6>"
          }
        ],
        "affiliations": [
          {
            "entity": "Wärtsilä",
            "relationship": "CEO"
          },
          {
            "entity": "Global Energy Forum",
            "relationship": "Keynote Speaker"
          }
        ]
      }
    },
    {
      "id": "ehrnoothFamily",
      "label": "H.E. Representative of Ehrnooth family",
      "metadata": {
        "shortBio": "Family representative",
        "keyPoints": [
          "Represents a prominent Finnish noble business dynasty.",
          "Invested in sectors such as banking, manufacturing and forestry.",
          "Known for long-term, stable stewardship."
        ],
        "keyThematicTags": [
          {
            "theme": "Business Dynasty",
            "supportingEvidence": [
              "Part of a historically influential family.",
              "Active in multiple industrial sectors.",
              "Exemplifies enduring stewardship."
            ]
          },
          {
            "theme": "Strategic Investments",
            "supportingEvidence": [
              "Invests across diverse sectors.",
              "Focuses on sustainable business growth.",
              "Leverages long-term strategic planning."
            ]
          }
        ],
        "originalProse": [
          {
            "title": "<PROSE_TITLE_1>",
            "content": "<PROSE_CONTENT_1>"
          },
          {
            "title": "<PROSE_TITLE_2>",
            "content": "<PROSE_CONTENT_2>"
          },
          {
            "title": "<PROSE_TITLE_3>",
            "content": "<PROSE_CONTENT_3>"
          },
          {
            "title": "<PROSE_TITLE_4>",
            "content": "<PROSE_CONTENT_4>"
          },
          {
            "title": "<PROSE_TITLE_5>",
            "content": "<PROSE_CONTENT_5>"
          },
          {
            "title": "<PROSE_TITLE_6>",
            "content": "<PROSE_CONTENT_6>"
          }
        ],
        "affiliations": [
          {
            "entity": "Ehrnooth Family Holdings",
            "relationship": "Family Representative"
          },
          {
            "entity": "Finnish Business Consortium",
            "relationship": "Investor"
          }
        ]
      }
    },
    {
      "id": "robinLangenskiold",
      "label": "H.E. Robin Langenskiöld",
      "metadata": {
        "shortBio": "Representative from the Erkko family",
        "keyPoints": [
          "Part of the influential Erkko family.",
          "Major shareholder in Sanoma Corporation.",
          "Former board member with extensive media experience."
        ],
        "keyThematicTags": [
          {
            "theme": "Media Influence",
            "supportingEvidence": [
              "Family historically dominated Finland’s media landscape.",
              "Significantly influences public discourse.",
              "Major stakeholder in leading media outlets."
            ]
          },
          {
            "theme": "Corporate Governance",
            "supportingEvidence": [
              "Experienced in board-level decision making.",
              "Shapes strategic corporate policies.",
              "Advocates innovative approaches in media management."
            ]
          }
        ],
        "originalProse": [
          {
            "title": "<PROSE_TITLE_1>",
            "content": "<PROSE_CONTENT_1>"
          },
          {
            "title": "<PROSE_TITLE_2>",
            "content": "<PROSE_CONTENT_2>"
          },
          {
            "title": "<PROSE_TITLE_3>",
            "content": "<PROSE_CONTENT_3>"
          },
          {
            "title": "<PROSE_TITLE_4>",
            "content": "<PROSE_CONTENT_4>"
          },
          {
            "title": "<PROSE_TITLE_5>",
            "content": "<PROSE_CONTENT_5>"
          },
          {
            "title": "<PROSE_TITLE_6>",
            "content": "<PROSE_CONTENT_6>"
          }
        ],
        "affiliations": [
          {
            "entity": "Sanoma Corporation",
            "relationship": "Board Member"
          },
          {
            "entity": "Erkko Family Trust",
            "relationship": "Representative"
          }
        ]
      }
    },
    {
      "id": "rafaelaSeppala",
      "label": "H.E. Rafaela Seppälä",
      "metadata": {
        "shortBio": "Representative from the Erkko family",
        "keyPoints": [
          "Erkko family member with major influence in media.",
          "Major shareholder in Sanoma.",
          "Has held board roles across cultural foundations."
        ],
        "keyThematicTags": [
          {
            "theme": "Cultural Influence",
            "supportingEvidence": [
              "Active in media and cultural initiatives.",
              "Influences Finnish arts and journalism.",
              "Supports cultural heritage projects."
            ]
          },
          {
            "theme": "Media Leadership",
            "supportingEvidence": [
              "Holds significant shares in leading media companies.",
              "Experienced in board roles.",
              "Promotes innovative media strategies."
            ]
          }
        ],
        "originalProse": [
          {
            "title": "<PROSE_TITLE_1>",
            "content": "<PROSE_CONTENT_1>"
          },
          {
            "title": "<PROSE_TITLE_2>",
            "content": "<PROSE_CONTENT_2>"
          },
          {
            "title": "<PROSE_TITLE_3>",
            "content": "<PROSE_CONTENT_3>"
          },
          {
            "title": "<PROSE_TITLE_4>",
            "content": "<PROSE_CONTENT_4>"
          },
          {
            "title": "<PROSE_TITLE_5>",
            "content": "<PROSE_CONTENT_5>"
          },
          {
            "title": "<PROSE_TITLE_6>",
            "content": "<PROSE_CONTENT_6>"
          }
        ],
        "affiliations": [
          {
            "entity": "Sanoma Corporation",
            "relationship": "Board Member"
          },
          {
            "entity": "Erkko Family Foundation",
            "relationship": "Representative"
          }
        ]
      }
    },
    {
      "id": "bjornWahlroos",
      "label": "H.E. Björn Wahlroos",
      "metadata": {
        "shortBio": "Banker, investor and former Chairman of several major Finnish companies",
        "keyPoints": [
          "Renowned banker and investor.",
          "Former Chairman of Sampo Group, Nordea Bank and UPM-Kymmene.",
          "Advocates free-market principles."
        ],
        "keyThematicTags": [
          {
            "theme": "Financial Leadership",
            "supportingEvidence": [
              "Drives strategic financial investments.",
              "Experienced in corporate governance.",
              "Shapes major M&A deals."
            ]
          },
          {
            "theme": "Market Philosophy",
            "supportingEvidence": [
              "Advocates free-market strategies.",
              "Influences financial policy debates.",
              "Supports cross-border investment initiatives."
            ]
          }
        ],
        "originalProse": [
          {
            "title": "<PROSE_TITLE_1>",
            "content": "<PROSE_CONTENT_1>"
          },
          {
            "title": "<PROSE_TITLE_2>",
            "content": "<PROSE_CONTENT_2>"
          },
          {
            "title": "<PROSE_TITLE_3>",
            "content": "<PROSE_CONTENT_3>"
          },
          {
            "title": "<PROSE_TITLE_4>",
            "content": "<PROSE_CONTENT_4>"
          },
          {
            "title": "<PROSE_TITLE_5>",
            "content": "<PROSE_CONTENT_5>"
          },
          {
            "title": "<PROSE_TITLE_6>",
            "content": "<PROSE_CONTENT_6>"
          }
        ],
        "affiliations": [
          {
            "entity": "Sampo Group",
            "relationship": "Former Chairman"
          },
          {
            "entity": "Nordea Bank",
            "relationship": "Board Member"
          }
        ]
      }
    },
    {
      "id": "jyriHakemies",
      "label": "H.E. Jyri Häkämies",
      "metadata": {
        "shortBio": "Director General of the Finnish Confederation of Industries",
        "keyPoints": [
          "Leads Finland’s largest business advocacy group.",
          "Former Minister of Defence and Economic Affairs.",
          "Promotes Finnish industries on the global stage."
        ],
        "keyThematicTags": [
          {
            "theme": "Industrial Advocacy",
            "supportingEvidence": [
              "Champions the interests of Finnish businesses.",
              "Leads a major industrial advocacy organisation.",
              "Influences economic policy and trade."
            ]
          },
          {
            "theme": "Policy Expertise",
            "supportingEvidence": [
              "Utilises extensive government experience.",
              "Formerly served as a high-ranking minister.",
              "Drives strategic industrial reforms."
            ]
          }
        ],
        "originalProse": [
          {
            "title": "<PROSE_TITLE_1>",
            "content": "<PROSE_CONTENT_1>"
          },
          {
            "title": "<PROSE_TITLE_2>",
            "content": "<PROSE_CONTENT_2>"
          },
          {
            "title": "<PROSE_TITLE_3>",
            "content": "<PROSE_CONTENT_3>"
          },
          {
            "title": "<PROSE_TITLE_4>",
            "content": "<PROSE_CONTENT_4>"
          },
          {
            "title": "<PROSE_TITLE_5>",
            "content": "<PROSE_CONTENT_5>"
          },
          {
            "title": "<PROSE_TITLE_6>",
            "content": "<PROSE_CONTENT_6>"
          }
        ],
        "affiliations": [
          {
            "entity": "Finnish Confederation of Industries",
            "relationship": "Director General"
          },
          {
            "entity": "Government Advisory Panel",
            "relationship": "Former Minister"
          }
        ]
      }
    },
    {
      "id": "jussiHallaaho",
      "label": "H.E. Jussi Halla-aho",
      "metadata": {
        "shortBio": "Speaker of the Parliament",
        "keyPoints": [
          "Serves as Speaker of the Parliament.",
          "Former leader of a major conservative party.",
          "Influences parliamentary and foreign policy matters."
        ],
        "keyThematicTags": [
          {
            "theme": "Legislative Leadership",
            "supportingEvidence": [
              "Guides parliamentary procedures.",
              "Plays a key role in legislative oversight.",
              "Former political party leader with significant influence."
            ]
          },
          {
            "theme": "Foreign Policy Oversight",
            "supportingEvidence": [
              "Influences foreign policy debates.",
              "Supports diplomatic initiatives through legislative channels.",
              "Provides stability in parliamentary diplomacy."
            ]
          }
        ],
        "originalProse": [
          {
            "title": "<PROSE_TITLE_1>",
            "content": "<PROSE_CONTENT_1>"
          },
          {
            "title": "<PROSE_TITLE_2>",
            "content": "<PROSE_CONTENT_2>"
          },
          {
            "title": "<PROSE_TITLE_3>",
            "content": "<PROSE_CONTENT_3>"
          },
          {
            "title": "<PROSE_TITLE_4>",
            "content": "<PROSE_CONTENT_4>"
          },
          {
            "title": "<PROSE_TITLE_5>",
            "content": "<PROSE_CONTENT_5>"
          },
          {
            "title": "<PROSE_TITLE_6>",
            "content": "<PROSE_CONTENT_6>"
          }
        ],
        "affiliations": [
          {
            "entity": "Parliament of Finland",
            "relationship": "Speaker"
          },
          {
            "entity": "Conservative Party",
            "relationship": "Former Leader"
          }
        ]
      }
    },
    {
      "id": "nathaliAhlstrom",
      "label": "H.E. Nathali Ahlstrom",
      "metadata": {
        "shortBio": "CEO of Fiskars",
        "keyPoints": [
          "Leads one of Finland’s oldest companies.",
          "Focuses on premium consumer brands in homeware and lifestyle.",
          "Emphasises sustainability and global market expansion."
        ],
        "keyThematicTags": [
          {
            "theme": "Corporate Innovation",
            "supportingEvidence": [
              "Drives sustainability initiatives.",
              "Expands market presence globally.",
              "Innovates within premium consumer brands."
            ]
          },
          {
            "theme": "Brand Leadership",
            "supportingEvidence": [
              "Enhances Finnish design heritage.",
              "Strengthens brand identity in international markets.",
              "Promotes excellence in lifestyle and homeware."
            ]
          }
        ],
        "originalProse": [
          {
            "title": "<PROSE_TITLE_1>",
            "content": "<PROSE_CONTENT_1>"
          },
          {
            "title": "<PROSE_TITLE_2>",
            "content": "<PROSE_CONTENT_2>"
          },
          {
            "title": "<PROSE_TITLE_3>",
            "content": "<PROSE_CONTENT_3>"
          },
          {
            "title": "<PROSE_TITLE_4>",
            "content": "<PROSE_CONTENT_4>"
          },
          {
            "title": "<PROSE_TITLE_5>",
            "content": "<PROSE_CONTENT_5>"
          },
          {
            "title": "<PROSE_TITLE_6>",
            "content": "<PROSE_CONTENT_6>"
          }
        ],
        "affiliations": [
          {
            "entity": "Fiskars",
            "relationship": "CEO"
          },
          {
            "entity": "Global Retail Council",
            "relationship": "Industry Leader"
          }
        ]
      }
    },
    {
      "id": "seppoVikstrom",
      "label": "H.E. Seppo Vikström",
      "metadata": {
        "shortBio": "Chairman of ISKU",
        "keyPoints": [
          "Leads a major Finnish furniture brand.",
          "Focuses on design quality and eco-friendly manufacturing.",
          "Guides both domestic and export growth."
        ],
        "keyThematicTags": [
          {
            "theme": "Design and Sustainability",
            "supportingEvidence": [
              "Promotes innovative, eco-friendly manufacturing.",
              "Champions superior design quality.",
              "Strengthens brand legacy through sustainable practices."
            ]
          },
          {
            "theme": "Market Expansion",
            "supportingEvidence": [
              "Drives domestic growth and export initiatives.",
              "Expands international market presence.",
              "Leverages sustainable design as a competitive edge."
            ]
          }
        ],
        "originalProse": [
          {
            "title": "<PROSE_TITLE_1>",
            "content": "<PROSE_CONTENT_1>"
          },
          {
            "title": "<PROSE_TITLE_2>",
            "content": "<PROSE_CONTENT_2>"
          },
          {
            "title": "<PROSE_TITLE_3>",
            "content": "<PROSE_CONTENT_3>"
          },
          {
            "title": "<PROSE_TITLE_4>",
            "content": "<PROSE_CONTENT_4>"
          },
          {
            "title": "<PROSE_TITLE_5>",
            "content": "<PROSE_CONTENT_5>"
          },
          {
            "title": "<PROSE_TITLE_6>",
            "content": "<PROSE_CONTENT_6>"
          }
        ],
        "affiliations": [
          {
            "entity": "ISKU",
            "relationship": "Chairman"
          },
          {
            "entity": "Furniture Design Council",
            "relationship": "Advisor"
          }
        ]
      }
    },
    {
      "id": "lassiNoponen",
      "label": "H.E. Lassi Noponen",
      "metadata": {
        "shortBio": "CEO of Business Finland",
        "keyPoints": [
          "Assumed the role in September 2024.",
          "Leads Finland’s main trade and investment promotion agency.",
          "Focuses on forging global partnerships."
        ],
        "keyThematicTags": [
          {
            "theme": "Economic Promotion",
            "supportingEvidence": [
              "Drives Finland’s trade initiatives.",
              "Fosters global business partnerships.",
              "Supports high-potential market strategies."
            ]
          },
          {
            "theme": "Investment Facilitation",
            "supportingEvidence": [
              "Promotes foreign investment in key sectors.",
              "Leads market expansion strategies.",
              "Bridges commercial opportunities with government support."
            ]
          }
        ],
        "originalProse": [
          {
            "title": "<PROSE_TITLE_1>",
            "content": "<PROSE_CONTENT_1>"
          },
          {
            "title": "<PROSE_TITLE_2>",
            "content": "<PROSE_CONTENT_2>"
          },
          {
            "title": "<PROSE_TITLE_3>",
            "content": "<PROSE_CONTENT_3>"
          },
          {
            "title": "<PROSE_TITLE_4>",
            "content": "<PROSE_CONTENT_4>"
          },
          {
            "title": "<PROSE_TITLE_5>",
            "content": "<PROSE_CONTENT_5>"
          },
          {
            "title": "<PROSE_TITLE_6>",
            "content": "<PROSE_CONTENT_6>"
          }
        ],
        "affiliations": [
          {
            "entity": "Business Finland",
            "relationship": "CEO"
          },
          {
            "entity": "Trade Promotion Council",
            "relationship": "Advisor"
          }
        ]
      }
    },
    {
      "id": "markusRauramo",
      "label": "H.E. Markus Rauramo",
      "metadata": {
        "shortBio": "CEO of Fortum",
        "keyPoints": [
          "Leads a major Nordic energy company.",
          "Specialises in clean energy and renewable projects.",
          "Committed to CO2-free electricity generation."
        ],
        "keyThematicTags": [
          {
            "theme": "Renewable Energy Leadership",
            "supportingEvidence": [
              "Drives clean energy initiatives.",
              "Focuses on sustainable, CO2-free electricity.",
              "Leads innovative renewable projects."
            ]
          },
          {
            "theme": "Sustainable Innovation",
            "supportingEvidence": [
              "Invests in advanced energy solutions.",
              "Promotes technological innovation in renewables.",
              "Supports sustainable growth strategies."
            ]
          }
        ],
        "originalProse": [
          {
            "title": "<PROSE_TITLE_1>",
            "content": "<PROSE_CONTENT_1>"
          },
          {
            "title": "<PROSE_TITLE_2>",
            "content": "<PROSE_CONTENT_2>"
          },
          {
            "title": "<PROSE_TITLE_3>",
            "content": "<PROSE_CONTENT_3>"
          },
          {
            "title": "<PROSE_TITLE_4>",
            "content": "<PROSE_CONTENT_4>"
          },
          {
            "title": "<PROSE_TITLE_5>",
            "content": "<PROSE_CONTENT_5>"
          },
          {
            "title": "<PROSE_TITLE_6>",
            "content": "<PROSE_CONTENT_6>"
          }
        ],
        "affiliations": [
          {
            "entity": "Fortum",
            "relationship": "CEO"
          },
          {
            "entity": "Nordic Energy Forum",
            "relationship": "Member"
          }
        ]
      }
    },
    {
      "id": "juboRomakkaniemi",
      "label": "H.E. Jubo Romakkaniemi",
      "metadata": {
        "shortBio": "CEO of FCC",
        "keyPoints": [
          "Heads the Finland Chamber of Commerce.",
          "Represents around 20,000 companies.",
          "Former senior advisor in Finnish and EU politics."
        ],
        "keyThematicTags": [
          {
            "theme": "Business Advocacy",
            "supportingEvidence": [
              "Champions the interests of Finnish enterprises.",
              "Drives trade and investment initiatives.",
              "Leads sector-specific business forums."
            ]
          },
          {
            "theme": "Political Advisory",
            "supportingEvidence": [
              "Former senior advisor in politics.",
              "Bridges government and business sectors.",
              "Influences strategic policy decisions."
            ]
          }
        ],
        "originalProse": [
          {
            "title": "<PROSE_TITLE_1>",
            "content": "<PROSE_CONTENT_1>"
          },
          {
            "title": "<PROSE_TITLE_2>",
            "content": "<PROSE_CONTENT_2>"
          },
          {
            "title": "<PROSE_TITLE_3>",
            "content": "<PROSE_CONTENT_3>"
          },
          {
            "title": "<PROSE_TITLE_4>",
            "content": "<PROSE_CONTENT_4>"
          },
          {
            "title": "<PROSE_TITLE_5>",
            "content": "<PROSE_CONTENT_5>"
          },
          {
            "title": "<PROSE_TITLE_6>",
            "content": "<PROSE_CONTENT_6>"
          }
        ],
        "affiliations": [
          {
            "entity": "Finland Chamber of Commerce",
            "relationship": "CEO"
          },
          {
            "entity": "Business Advisory Council",
            "relationship": "Advisor"
          }
        ]
      }
    },
    {
      "id": "anttiHerlin",
      "label": "H.E. Antti Herlin",
      "metadata": {
        "shortBio": "Chairman of KONE",
        "keyPoints": [
          "Chairman of KONE and a leading industrialist.",
          "Transformed KONE into a global leader in elevator solutions.",
          "Influential in shaping corporate strategy."
        ],
        "keyThematicTags": [
          {
            "theme": "Industrial Transformation",
            "supportingEvidence": [
              "Led KONE’s global expansion.",
              "Pioneered innovative elevator and escalator solutions.",
              "Drives industrial leadership and growth."
            ]
          },
          {
            "theme": "Corporate Strategy",
            "supportingEvidence": [
              "Influences economic diplomacy.",
              "Shapes corporate governance policies.",
              "Supports strategic investment decisions."
            ]
          }
        ],
        "originalProse": [
          {
            "title": "<PROSE_TITLE_1>",
            "content": "<PROSE_CONTENT_1>"
          },
          {
            "title": "<PROSE_TITLE_2>",
            "content": "<PROSE_CONTENT_2>"
          },
          {
            "title": "<PROSE_TITLE_3>",
            "content": "<PROSE_CONTENT_3>"
          },
          {
            "title": "<PROSE_TITLE_4>",
            "content": "<PROSE_CONTENT_4>"
          },
          {
            "title": "<PROSE_TITLE_5>",
            "content": "<PROSE_CONTENT_5>"
          },
          {
            "title": "<PROSE_TITLE_6>",
            "content": "<PROSE_CONTENT_6>"
          }
        ],
        "affiliations": [
          {
            "entity": "KONE",
            "relationship": "Chairman"
          },
          {
            "entity": "Global Industrial Forum",
            "relationship": "Speaker"
          }
        ]
      }
    }
  ]
}


// Minister image placeholders
// import sandraBergqvistImage from '../assets/images/SandraB.png';
import sandraBergqvistImage from '/src/assets/images/SandraB.png';

import annaKaisaIkonenImage from '../assets/images/AnnaKaisaI.png';
import alexanderStubbImage from '../assets/images/AlexanderS.png';
import tuulaYrjolaImage from '../assets/images/TuulaY.png';
import annaMariWongHamalainenImage from '../assets/images/AnnaMariH.png';
import villeBrummeImage from '../assets/images/VilleB.png';
import elinaValtonenImage from '../assets/images/ElinaV.png';
import lailaClyneImage from '../assets/images/LailaC.png';

import annaKaisaHeikkinenImage from '../assets/images/AnnaKaisaH.png';
import anneMRabetImage from '../assets/images/AnneM.png';
import justinHotardImage from '../assets/images/JustinH.png';
import pekkaLundmarkImage from '../assets/images/PekkaL.png';

import sariBaldaufImage from '../assets/images/SariB.png';
import hakanAgnevallImage from '../assets/images/HakanA.png';
import ehrnoothFamilyImage from '../assets/images/EhnoothFamily.png';
import robinLangenskioldImage from '../assets/images/RobinL.png';
import rafaelaSeppalaImage from '../assets/images/RafaelaS.png';
import bjornWahlroosImage from '../assets/images/RafaelaS.png';
import jyriHakemiesImage from '../assets/images/JyriH.png';
import jussiHallaahoImage from '../assets/images/JussiH.png';

import nathaliAhlstromImage from '../assets/images/JussiH.png';
import seppoVikstromImage from '../assets/images/SeppoV.png';
import lassiNoponenImage from '../assets/images/LassiN.png';
import markusRauramoImage from '../assets/images/MarkusR.png';
import juboRomakkaniemiImage from '../assets/images/JuboR.png';
import anttiHerlinImage from '../assets/images/AnttiH.png';

// Minister image references using imports
export const ministerImages = {
  person_sandraBergqvist: sandraBergqvistImage,
  person_annaKaisaIkonen: annaKaisaIkonenImage,
  person_alexanderStubb: alexanderStubbImage,
  person_tuulaYrjola: tuulaYrjolaImage,
  person_annaMariWongHamalainen: annaMariWongHamalainenImage,
  person_villeBrumme: villeBrummeImage,
  person_elinaValtonen: elinaValtonenImage,
  person_lailaClyne: lailaClyneImage,
  person_annaKaisaHeikkinen: annaKaisaHeikkinenImage,
  person_anneMRabet: anneMRabetImage,
  person_justinHotard: justinHotardImage,
  person_pekkaLundmark: pekkaLundmarkImage,
  person_sariBaldauf: sariBaldaufImage,
  person_hakanAgnevall: hakanAgnevallImage,
  person_ehrnoothFamily: ehrnoothFamilyImage,
  person_robinLangenskiold: robinLangenskioldImage,
  person_rafaelaSeppala: rafaelaSeppalaImage,
  person_bjornWahlroos: bjornWahlroosImage,
  person_jyriHakemies: jyriHakemiesImage,
  person_jussiHallaaho: jussiHallaahoImage,
  person_nathaliAhlstrom: nathaliAhlstromImage,
  person_seppoVikstrom: seppoVikstromImage,
  person_lassiNoponen: lassiNoponenImage,
  person_markusRauramo: markusRauramoImage,
  person_juboRomakkaniemi: juboRomakkaniemiImage,
  person_anttiHerlin: anttiHerlinImage
};


// Hexagon path helper function
export const hexagonPath = (size) => {
  const points = [];
  for (let i = 0; i < 6; i++) {
    const angle = (i * Math.PI / 3) - (Math.PI / 6);
    points.push([size * Math.cos(angle), size * Math.sin(angle)]);
  }
  return `M${points.map(p => p.join(',')).join('L')}Z`;
};






