// Finnish Ministers Data
export const ministersData = {
    "persons": [
      {
        "id": "person_SandraBergqvist",
        "label": "H.E. Sandra Bergqvist",
        "type": "Person",
        "metadata": {
          "shortBio": "Finland's inaugural Minister of Youth, Sport and Physical Activity, focused on enhancing youth welfare and promoting sports as a tool for well-being.",
          "keyPoints": [
            "Oversees youth policy and student aid to energise Finland's young population.",
            "Hails from the Swedish-speaking archipelago with an entrepreneurial background in agriculture.",
            "Emphasises inclusion and physical fitness for all; values outdoor pursuits and running."
          ],
          "keyThematicTags": [
            {
              "theme": "Youth Empowerment & Sports Leadership",
              "supportingEvidence": [
                "Strategically focused on enhancing youth welfare and promoting sports as a tool for well-being.",
                "Oversees youth policy and student aid to energise Finland's famously healthy and educated young population.",
                "Highlights Finland's success in youth fitness and sports, offering leverage for bilateral discussions with the UAE."
              ]
            },
            {
              "theme": "Inclusive Active Lifestyle & Wellness Advocacy",
              "supportingEvidence": [
                "Her approach emphasises inclusion and physical fitness for all.",
                "Values outdoor pursuits and running in her personal life.",
                "Emphasises a healthy, active lifestyle that resonates with the UAE's focus on youth fitness."
              ]
            },
            {
              "theme": "Rural Entrepreneurship & Diplomatic Leverage",
              "supportingEvidence": [
                "Hails from a Swedish-speaking archipelago with an entrepreneurial background in agriculture.",
                "Balances rural entrepreneurship with national policy-making.",
                "Provides a portfolio that offers diplomatic leverage in discussions on youth empowerment and sports cooperation."
              ]
            }
          ],
          "originalProse": [
            {
              "title": "Role & Focus",
              "content": "As Finland's inaugural Minister of Youth, Sport and Physical Activity, Sandra Bergqvist is strategically focused on enhancing youth welfare and promoting sports as a tool for well-being. She oversees youth policy and student aid, aiming to energise Finland's famously healthy and educated young population."
            },
            {
              "title": "Background & Personal Life",
              "content": "Bergqvist hails from the Swedish-speaking archipelago, with an entrepreneurial background in agriculture. Her approach emphasises inclusion and physical fitness for all. She has noted the importance of outdoor pursuits and running in her personal life, reflecting her active lifestyle."
            },
            {
              "title": "Diplomatic Relevance",
              "content": "Diplomatically, her portfolio offers leverage in discussing youth empowerment, sports cooperation, and Finland's expertise in education and youth engagement. Emirati counterparts may find shared interest in her balanced approach to rural entrepreneurship and national policy, making her a key figure for bilateral cooperation."
            }
          ],
          "affiliations": [
            {
              "entity": "Ministry of Education and Culture, Finland (OKM)",
              "relationship": "Sandra Bergqvist serves as Finland's inaugural Minister of Youth, Sport and Physical Activity under this ministry."
            }
          ]
        }
      },
      {
        "id": "person_AnnaKaisaIkonen",
        "label": "H.E. Anna-Kaisa Ikonen",
        "type": "Person",
        "metadata": {
          "shortBio": "Minister of Local & Regional Government, former Mayor of Tampere, renowned for innovative urban development and public-sector reforms.",
          "keyPoints": [
            "Oversees municipal affairs, new wellbeing counties, digitalisation, and urban development in Finland.",
            "Served twice as Mayor of Tampere, earning a reputation for innovative city management.",
            "Holds a doctorate in social sciences and has led initiatives in healthcare and social welfare reform."
          ],
          "keyThematicTags": [
            {
              "theme": "Innovative Urban Governance",
              "supportingEvidence": [
                "Earned a reputation for innovative city management and smart urban development as Mayor of Tampere.",
                "Spearheads local and regional governance reforms, emphasising urban development.",
                "Has published research on municipal leadership and led initiatives in healthcare and social welfare reform."
              ]
            },
            {
              "theme": "Smart Municipality & Digital Public Services",
              "supportingEvidence": [
                "Responsible for municipal affairs, new wellbeing counties, public-sector digitalisation, and urban development.",
                "Her strategic positioning involves driving smart city projects relevant to the UAE's ambitions for world-class cities and e-government.",
                "Active in smart city forums and fluent in multiple languages."
              ]
            },
            {
              "theme": "Cultural & Natural Integration",
              "supportingEvidence": [
                "Enjoys travel, literature, and theatre, which adds a cultural dimension to her profile.",
                "Practices skiing, jogging, and open-water swimming, reflecting a love of nature.",
                "Combines a focus on urban innovation with personal interests in cultural and natural pursuits."
              ]
            }
          ],
          "originalProse": [
            {
              "title": "Role & Responsibilities",
              "content": "As Minister of Local & Regional Government, Anna-Kaisa Ikonen is responsible for municipal affairs, new wellbeing counties, public-sector digitalisation, and urban development. She spearheads Finland's local and regional governance reforms."
            },
            {
              "title": "Experience & Innovation",
              "content": "Having served twice as Mayor of Tampere, Finland's second-largest city, Ikonen earned a reputation for innovative city management and smart urban development. With a doctorate in social sciences, she has published research on municipal leadership and led initiatives in healthcare and social welfare reform."
            },
            {
              "title": "Diplomatic & Cultural Insights",
              "content": "Her strategic positioning aligns with the UAE's ambitions for smart cities and digital public services. Additionally, her passion for travel, literature, theatre, and nature—evidenced by her enjoyment of skiing, jogging, and open-water swimming—adds a well-rounded dimension to her profile."
            }
          ],
          "affiliations": [
            {
              "entity": "Ministry of Economic Affairs and Employment",
              "relationship": "Anna-Kaisa Ikonen serves as the Minister of Local & Regional Government under this ministry."
            },
            {
              "entity": "City of Tampere",
              "relationship": "She has served twice as Mayor of Tampere, earning a reputation for innovative city management."
            },
            {
              "entity": "Åland Islands",
              "relationship": "She has oversight of the autonomous Åland Islands' affairs, demonstrating her appreciation for unique governance models."
            }
          ]
        }
      }
    ]
  };
  
  // Minister image placeholders
import sandraBergqvistImage from '../assets/images/sandra-bergqvist.jpg';
import annaKaisaIkonenImage from '../assets/images/anna-kaisa-ikonen.jpg';

// Minister image references using imports
export const ministerImages = {
  person_SandraBergqvist: sandraBergqvistImage,
  person_AnnaKaisaIkonen: annaKaisaIkonenImage
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






