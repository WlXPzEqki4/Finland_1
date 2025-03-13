// import React, { useEffect, useRef, useState } from 'react';
// import cytoscape from 'cytoscape';

// const FinnishNetworkGraph = () => {
//   const cyRef = useRef(null);
//   const cyInstanceRef = useRef(null);
//   const tooltipRef = useRef(null);
//   const [tooltipVisible, setTooltipVisible] = useState(false);
//   const [tooltipContent, setTooltipContent] = useState('');
//   const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
//   const [searchText, setSearchText] = useState('');
  
//   // Network data
//   const networkData = {
//     "nodes": [
//       {
//         "id": "1",
//         "label": "H.E. Sandra Bergqvist",
//         "title": "Minister of Youth, Sport and Physical Activity. Focuses on youth welfare, sports, inclusion and physical fitness, bridging domestic policies and international youth exchange programmes."
//       },
//       {
//         "id": "2",
//         "label": "H.E. Anna-Kaisa Ikonen",
//         "title": "Minister of Local and Regional Government. Expert in urban development, smart cities and local governance, providing insights on balanced regional development and digital public services."
//       },
//       {
//         "id": "3",
//         "label": "H.E. Alexander Stubb",
//         "title": "President of the Republic of Finland. Leading figure with a focus on global diplomacy, security, technology, clean energy and multilateral engagement."
//       },
//       {
//         "id": "4",
//         "label": "H.E. Tuula Yrjölä",
//         "title": "Ambassador of Finland to the UAE. A highly experienced diplomat enhancing Finland–UAE relations through economic partnerships, education and conflict resolution."
//       },
//       {
//         "id": "5",
//         "label": "H.E. Anna-Mari Wong Hämäläinen",
//         "title": "Director of Foreign and Security Policy in the President's Office. Strategic adviser on international security, crisis management and soft power diplomacy."
//       },
//       {
//         "id": "6",
//         "label": "Dr. Ville Brummer",
//         "title": "Director of Peace Mediation. Focuses on conflict resolution, mediation expertise and digital peacebuilding, bridging Finland's legacy of peace initiatives with global partners."
//       },
//       {
//         "id": "7",
//         "label": "H.E. Elina Valtonen",
//         "title": "Minister of Foreign Affairs. Tech-savvy and data-driven diplomat promoting economic diplomacy, free trade and strategic partnerships globally."
//       },
//       {
//         "id": "8",
//         "label": "Laila Clyne",
//         "title": "Diplomatic Advisor to the Minister of Foreign Affairs. Experienced in multilateral affairs, trade and development, ensuring well-prepared diplomatic engagements."
//       },
//       {
//         "id": "9",
//         "label": "H.E. Anna-Kaisa Heikkinen",
//         "title": "Director General, Department for Africa, the Middle East and Latin America. Oversees foreign relations with a strategic focus on the Gulf and the global south."
//       },
//       {
//         "id": "10",
//         "label": "Anne M'Rabet",
//         "title": "Desk Officer for the Persian Gulf, UAE, Bahrain, GCC and OIC. Manages day-to-day policy implementation and bridges cultural diplomacy."
//       },
//       {
//         "id": "11",
//         "label": "Antti Herlin",
//         "title": "Chairman of KONE Corporation. Influential business leader in industrial innovation with strong ties to infrastructure and urban development in the UAE."
//       },
//       {
//         "id": "12",
//         "label": "Justin Hotard",
//         "title": "Incoming CEO of Nokia (effective April 2025). American tech executive steering Nokia towards data centres, cloud services and AI, signalling a new global outlook."
//       },
//       {
//         "id": "13",
//         "label": "Pekka Lundmark",
//         "title": "Outgoing CEO of Nokia. Steered Nokia through a major turnaround, emphasising network security and future technology, leaving a legacy of stability."
//       },
//       {
//         "id": "14",
//         "label": "Sari Baldauf",
//         "title": "Chairman of Nokia Board of Directors. Trailblazing businesswoman with deep influence over Nokia's strategic direction, promoting innovation, governance and sustainability."
//       },
//       {
//         "id": "15",
//         "label": "Håkan Agnevall",
//         "title": "President & CEO of Wärtsilä Corporation. Leading figure in sustainable marine and energy solutions, emphasising decarbonisation and clean technology."
//       },
//       {
//         "id": "16",
//         "label": "Ehrnrooth Family Representative",
//         "title": "Key representative from the Finnish industrial dynasty. Embodies long-term industrial strategy, fostering international partnerships and sustainable investments."
//       },
//       {
//         "id": "17",
//         "label": "Nathalie Ahlström",
//         "title": "CEO of Fiskars Group. Dynamic leader blending heritage with innovation in design and consumer brands, with a focus on sustainability and global market expansion."
//       },
//       {
//         "id": "18",
//         "label": "Erkko Family Representative",
//         "title": "Representative from the Erkko Family (e.g., Robin Langenskiöld or Rafaela Seppälä). Influential in media, culture and philanthropy, shaping Finland's soft power and global cultural dialogue."
//       },
//       {
//         "id": "19",
//         "label": "Björn Wahlroos",
//         "title": "Banker, Investor and former Chairman. Renowned financial mind with deep experience in banking, investment and asset management, influential in Nordic finance."
//       },
//       {
//         "id": "20",
//         "label": "Jyri Häkämies",
//         "title": "Director General of the Confederation of Finnish Industries (EK). Key advocate for Finnish business interests, linking government policies with corporate strategies."
//       },
//       {
//         "id": "21",
//         "label": "Seppo Vikkström",
//         "title": "Chairman of Isku Corporation. Leads a family-owned furniture and interior solutions company with a strong international presence, particularly in the Middle East."
//       },
//       {
//         "id": "22",
//         "label": "Lassi Noponen",
//         "title": "Director General of Business Finland. Leads trade promotion, investment attraction and innovation funding, facilitating international business collaborations."
//       },
//       {
//         "id": "23",
//         "label": "Markus Rauramo",
//         "title": "President & CEO of Fortum Corporation. Energy leader focusing on clean power, renewables and digital energy solutions, pivotal in Finland's energy strategy."
//       },
//       {
//         "id": "24",
//         "label": "Juho Romakkaniemi",
//         "title": "CEO of the Finland Chamber of Commerce (FinnCham). Facilitates bilateral business relations and trade initiatives, crucial in establishing the Finland–UAE Business Council."
//       },
//       {
//         "id": "25",
//         "label": "H.E. Jussi Halla-aho",
//         "title": "Speaker of the Parliament of Finland. Oversees parliamentary procedures, ensuring democratic oversight and international legislative engagement."
//       }
//     ],
//     "edges": [
//       {
//         "from": "3",
//         "to": "1",
//         "label": "Executive Collaboration",
//         "title": "President Stubb works closely with Minister Bergqvist in shaping national youth and sports policy."
//       },
//       {
//         "from": "3",
//         "to": "2",
//         "label": "Executive Collaboration",
//         "title": "President Stubb collaborates with Minister Ikonen on domestic policy frameworks including local governance and urban development."
//       },
//       {
//         "from": "3",
//         "to": "7",
//         "label": "Executive Coordination",
//         "title": "President Stubb's agenda is supported by Minister Valtonen, who leads Finland's foreign policy."
//       },
//       {
//         "from": "3",
//         "to": "5",
//         "label": "Advisory Link",
//         "title": "The President's office is advised by Wong Hämäläinen on foreign and security policy."
//       },
//       {
//         "from": "3",
//         "to": "6",
//         "label": "Advisory Link",
//         "title": "Director of Peace Mediation Brummer supports the President's initiatives in conflict resolution and mediation."
//       },
//       {
//         "from": "3",
//         "to": "4",
//         "label": "Diplomatic Representation",
//         "title": "Ambassador Yrjölä implements the President's foreign policy in the UAE."
//       },
//       {
//         "from": "7",
//         "to": "8",
//         "label": "Advisory Relationship",
//         "title": "Laila Clyne supports Minister Valtonen with diplomatic strategy and preparation."
//       },
//       {
//         "from": "7",
//         "to": "9",
//         "label": "Ministry Collaboration",
//         "title": "Heikkinen oversees the Middle Eastern department within the Ministry of Foreign Affairs, aligned with Minister Valtonen's strategy."
//       },
//       {
//         "from": "7",
//         "to": "10",
//         "label": "Ministry Collaboration",
//         "title": "Anne M'Rabet implements policies for the Persian Gulf region, supporting Minister Valtonen's diplomatic efforts."
//       },
//       {
//         "from": "25",
//         "to": "3",
//         "label": "Parliamentary Oversight",
//         "title": "Speaker Halla-aho ensures legislative backing for President Stubb's initiatives."
//       },
//       {
//         "from": "5",
//         "to": "6",
//         "label": "Office Collaboration",
//         "title": "Wong Hämäläinen and Brummer collaborate in advising the President on security and mediation."
//       },
//       {
//         "from": "7",
//         "to": "5",
//         "label": "Policy Alignment",
//         "title": "Minister Valtonen works with senior adviser Wong Hämäläinen to coordinate Finland's international strategy."
//       },
//       {
//         "from": "9",
//         "to": "10",
//         "label": "Department Collaboration",
//         "title": "Heikkinen and Anne M'Rabet work together within the Ministry of Foreign Affairs to manage Finland's Gulf policy."
//       },
//       {
//         "from": "11",
//         "to": "12",
//         "label": "Corporate Interaction",
//         "title": "Herlin and Hotard represent strategic partnerships between KONE and Nokia in the industrial sector."
//       },
//       {
//         "from": "12",
//         "to": "13",
//         "label": "Corporate Transition",
//         "title": "The transition from Lundmark to Hotard at Nokia reflects evolving leadership in Finnish technology."
//       },
//       {
//         "from": "13",
//         "to": "14",
//         "label": "Board Oversight",
//         "title": "Chairman Baldauf guides Nokia's strategic direction through CEO transitions."
//       },
//       {
//         "from": "15",
//         "to": "20",
//         "label": "Industry Collaboration",
//         "title": "Agnevall's Wärtsilä contributes to the broader industrial network represented by EK, led by Häkämies."
//       },
//       {
//         "from": "16",
//         "to": "20",
//         "label": "Industrial Partnership",
//         "title": "The Ehrnrooth family collaborates with EK in promoting sustainable, international Finnish business practices."
//       },
//       {
//         "from": "17",
//         "to": "20",
//         "label": "Corporate Networking",
//         "title": "Fiskars Group under Ahlström engages with EK for market expansion and trade initiatives."
//       },
//       {
//         "from": "18",
//         "to": "20",
//         "label": "Media and Business Link",
//         "title": "The Erkko family's media influence supports EK's efforts in shaping Finland's corporate landscape."
//       },
//       {
//         "from": "19",
//         "to": "20",
//         "label": "Financial Leadership",
//         "title": "Wahlroos' expertise in finance connects with EK's role in promoting economic policy."
//       },
//       {
//         "from": "16",
//         "to": "17",
//         "label": "Industrial Synergy",
//         "title": "The Ehrnrooth family representative collaborates with Fiskars Group on shared sustainable business practices."
//       },
//       {
//         "from": "18",
//         "to": "17",
//         "label": "Cultural Synergy",
//         "title": "Erkko family influences enhance the global branding and sustainability focus of Fiskars Group."
//       },
//       {
//         "from": "19",
//         "to": "16",
//         "label": "Financial & Industrial Investment",
//         "title": "Wahlroos collaborates with the Ehrnrooth family on strategic investments in Finnish industries."
//       },
//       {
//         "from": "19",
//         "to": "24",
//         "label": "Financial Advisory",
//         "title": "Wahlroos' financial insights support the trade and investment strategies championed by the Finland Chamber of Commerce."
//       },
//       {
//         "from": "20",
//         "to": "22",
//         "label": "Industry-Government Liaison",
//         "title": "EK, under Häkämies, works closely with Business Finland to align business strategy with government policy."
//       },
//       {
//         "from": "21",
//         "to": "22",
//         "label": "SME & Trade Promotion",
//         "title": "Isku, represented by Vikkström, benefits from Business Finland's efforts to promote Finnish SMEs abroad."
//       },
//       {
//         "from": "24",
//         "to": "22",
//         "label": "Trade Promotion Link",
//         "title": "The Finland Chamber of Commerce and Business Finland coordinate to facilitate international trade."
//       },
//       {
//         "from": "23",
//         "to": "20",
//         "label": "Energy Sector Collaboration",
//         "title": "Fortum, led by Rauramo, is an integral part of the industrial network championed by EK."
//       },
//       {
//         "from": "23",
//         "to": "24",
//         "label": "Energy Trade Partnership",
//         "title": "Fortum's clean energy initiatives are supported by the Finland Chamber's international outreach."
//       },
//       {
//         "from": "24",
//         "to": "25",
//         "label": "Legislative-Trade Interface",
//         "title": "The Finland Chamber and the Speaker collaborate to ensure legislative support for international business."
//       },
//       {
//         "from": "3",
//         "to": "24",
//         "label": "State-Business Bridge",
//         "title": "President Stubb's office collaborates with the Finland Chamber of Commerce to promote international trade."
//       },
//       {
//         "from": "3",
//         "to": "20",
//         "label": "Government-Industry Link",
//         "title": "President Stubb's policies are implemented in partnership with EK and industry leaders."
//       },
//       {
//         "from": "7",
//         "to": "22",
//         "label": "Foreign Policy to Trade Link",
//         "title": "Minister Valtonen's international engagements are supported by Business Finland's trade initiatives."
//       },
//       {
//         "from": "25",
//         "to": "20",
//         "label": "Legislative-Business Oversight",
//         "title": "The Speaker and EK coordinate on policy and trade matters."
//       },
//       {
//         "from": "16",
//         "to": "24",
//         "label": "Family-Chamber Synergy",
//         "title": "The Ehrnrooth family representative supports the Finland Chamber's efforts in promoting strategic investments."
//       },
//       {
//         "from": "18",
//         "to": "24",
//         "label": "Media-Trade Collaboration",
//         "title": "The Erkko family's media influence aids the Finland Chamber in enhancing trade relations."
//       },
//       {
//         "from": "7",
//         "to": "4",
//         "label": "Diplomatic Implementation",
//         "title": "Minister Valtonen's foreign policy is executed by Ambassador Yrjölä in the UAE."
//       }
//     ]
//   };

//   // Function to categorize nodes
//   const getCategoryColor = (node) => {
//     const label = node.label.toLowerCase();
    
//     if (label.includes('president') || label.includes('minister') || label.includes('speaker')) {
//       return '#4285F4'; // Government - Blue
//     } else if (label.includes('ambassador') || label.includes('diplomatic') || label.includes('foreign') || 
//                label.includes('desk officer') || label.includes('director general, department')) {
//       return '#EA4335'; // Diplomatic - Red
//     } else if (label.includes('ceo') || label.includes('chairman') || label.includes('family') || 
//                label.includes('banker') || label.includes('investor')) {
//       return '#FBBC05'; // Business - Yellow
//     } else {
//       return '#34A853'; // Industry Organizations - Green
//     }
//   };

//   // Initialize Cytoscape
//   useEffect(() => {
//     // Format node data for Cytoscape
//     const cyNodes = networkData.nodes.map(node => ({
//       data: {
//         id: node.id,
//         label: node.label,
//         title: node.title,
//         color: getCategoryColor(node)
//       }
//     }));

//     // Format edge data for Cytoscape
//     const cyEdges = networkData.edges.map(edge => ({
//       data: {
//         id: `${edge.from}-${edge.to}`,
//         source: edge.from,
//         target: edge.to,
//         label: edge.label,
//         title: edge.title
//       }
//     }));

//     // Initialize Cytoscape instance
//     const cy = cytoscape({
//       container: cyRef.current,
//       elements: {
//         nodes: cyNodes,
//         edges: cyEdges
//       },
//       style: [
//         {
//           selector: 'node',
//           style: {
//             'background-color': 'data(color)',
//             'label': 'data(label)',
//             'width': 30,
//             'height': 30,
//             'font-size': 10,
//             'text-wrap': 'wrap',
//             'text-max-width': 100,
//             'text-valign': 'bottom',
//             'text-halign': 'center',
//             'text-margin-y': 5,
//             'color': '#333',
//             'text-outline-width': 2,
//             'text-outline-color': '#fff',
//             'shape': 'ellipse',
//             'border-width': 2,
//             'border-color': '#999'
//           }
//         },
//         {
//           selector: 'edge',
//           style: {
//             'width': 2,
//             'line-color': '#999',
//             'target-arrow-color': '#999',
//             'target-arrow-shape': 'triangle',
//             'curve-style': 'bezier',
//             'label': 'data(label)',
//             'font-size': 8,
//             'text-rotation': 'autorotate',
//             'text-background-color': '#fff',
//             'text-background-opacity': 0.8,
//             'text-background-padding': 2,
//             'color': '#555'
//           }
//         },
//         {
//           selector: 'node:selected',
//           style: {
//             'background-color': '#B39DDB',
//             'border-width': 3,
//             'border-color': '#673AB7',
//             'width': 40,
//             'height': 40
//           }
//         },
//         {
//           selector: 'edge:selected',
//           style: {
//             'width': 4,
//             'line-color': '#673AB7',
//             'target-arrow-color': '#673AB7'
//           }
//         },
//         {
//           selector: '.highlighted',
//           style: {
//             'background-color': '#FFC107',
//             'border-color': '#FF9800',
//             'border-width': 3,
//             'width': 40,
//             'height': 40
//           }
//         },
//         {
//           selector: '.edge-hidden',
//           style: {
//             'label': ''
//           }
//         }
//       ],
//       layout: {
//         name: 'cose',
//         idealEdgeLength: 100,
//         nodeOverlap: 20,
//         refresh: 20,
//         fit: true,
//         padding: 30,
//         randomize: false,
//         componentSpacing: 100,
//         nodeRepulsion: 400000,
//         edgeElasticity: 100,
//         nestingFactor: 5,
//         gravity: 80,
//         numIter: 1000,
//         initialTemp: 200,
//         coolingFactor: 0.95,
//         minTemp: 1.0
//       },
//       wheelSensitivity: 0.3
//     });

//     // Store the Cytoscape instance in a ref
//     cyInstanceRef.current = cy;

//     // Set up tooltip handlers
//     let tooltipTimeout;

//     // Node hover events for tooltip
//     cy.on('mouseover', 'node', (e) => {
//       const node = e.target;
//       const title = node.data('title');
//       const label = node.data('label');
      
//       clearTimeout(tooltipTimeout);
//       setTooltipContent(`<strong>${label}</strong><br>${title}`);
//       setTooltipPosition({
//         x: e.renderedPosition.x + 20,
//         y: e.renderedPosition.y + 20
//       });
//       setTooltipVisible(true);
//     });

//     // Edge hover events for tooltip
//     cy.on('mouseover', 'edge', (e) => {
//       const edge = e.target;
//       const title = edge.data('title');
//       const label = edge.data('label');
//       const source = cy.getElementById(edge.data('source')).data('label');
//       const target = cy.getElementById(edge.data('target')).data('label');
      
//       clearTimeout(tooltipTimeout);
//       setTooltipContent(`<strong>${label}</strong>: ${source} → ${target}<br>${title}`);
//       setTooltipPosition({
//         x: e.renderedPosition.x + 20,
//         y: e.renderedPosition.y + 20
//       });
//       setTooltipVisible(true);
//     });

//     // Hide tooltip on mouseout
//     cy.on('mouseout', 'node, edge', () => {
//       tooltipTimeout = setTimeout(() => {
//         setTooltipVisible(false);
//       }, 300);
//     });

//     // Update tooltip position on pan/zoom
//     cy.on('viewport', () => {
//       setTooltipVisible(false);
//     });

//     // Initial fit to view
//     cy.fit();

//     // Clean up on component unmount
//     return () => {
//       if (cyInstanceRef.current) {
//         cyInstanceRef.current.destroy();
//       }
//     };
//   }, []);

//   // Mouse event handlers for tooltip
//   const handleTooltipMouseOver = () => {
//     setTooltipVisible(true);
//   };

//   const handleTooltipMouseOut = () => {
//     setTooltipVisible(false);
//   };

//   // Button handlers
//   const handleFitToView = () => {
//     if (cyInstanceRef.current) {
//       cyInstanceRef.current.fit();
//     }
//   };

//   const handleResetLayout = () => {
//     if (cyInstanceRef.current) {
//       cyInstanceRef.current.layout({
//         name: 'cose',
//         idealEdgeLength: 100,
//         nodeOverlap: 20,
//         refresh: 20,
//         fit: true,
//         padding: 30,
//         randomize: false,
//         componentSpacing: 100,
//         nodeRepulsion: 400000,
//         edgeElasticity: 100,
//         nestingFactor: 5,
//         gravity: 80,
//         numIter: 1000,
//         initialTemp: 200,
//         coolingFactor: 0.95,
//         minTemp: 1.0
//       }).run();
//     }
//   };

//   const handleToggleLabels = () => {
//     if (cyInstanceRef.current) {
//       cyInstanceRef.current.edges().toggleClass('edge-hidden');
//     }
//   };

//   const handleSearch = () => {
//     if (!cyInstanceRef.current || !searchText) return;
    
//     // Remove previous highlights
//     cyInstanceRef.current.nodes().removeClass('highlighted');
    
//     // Find and highlight matching nodes
//     const matchingNodes = cyInstanceRef.current.nodes().filter(node => {
//       return node.data('label').toLowerCase().includes(searchText.toLowerCase()) || 
//              node.data('title').toLowerCase().includes(searchText.toLowerCase());
//     });
    
//     if (matchingNodes.length > 0) {
//       matchingNodes.addClass('highlighted');
//       cyInstanceRef.current.fit(matchingNodes, 100);
//     }
//   };

//   const handleSearchKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       handleSearch();
//     }
//   };

//   return (
//     <div className="finnish-network-container">
//       <div style={{
//         padding: '10px',
//         backgroundColor: '#f0f0f0',
//         borderBottom: '1px solid #ddd',
//         display: 'flex',
//         justifyContent: 'space-between',
//         alignItems: 'center'
//       }}>
//         <div>
//           <button 
//             onClick={handleFitToView}
//             style={{
//               backgroundColor: '#1e88e5',
//               color: 'white',
//               border: 'none',
//               padding: '8px 12px',
//               margin: '0 5px',
//               borderRadius: '4px',
//               cursor: 'pointer',
//               fontSize: '14px'
//             }}
//           >
//             Fit to View
//           </button>
//           <button 
//             onClick={handleResetLayout}
//             style={{
//               backgroundColor: '#1e88e5',
//               color: 'white',
//               border: 'none',
//               padding: '8px 12px',
//               margin: '0 5px',
//               borderRadius: '4px',
//               cursor: 'pointer',
//               fontSize: '14px'
//             }}
//           >
//             Reset Layout
//           </button>
//           <button 
//             onClick={handleToggleLabels}
//             style={{
//               backgroundColor: '#1e88e5',
//               color: 'white',
//               border: 'none',
//               padding: '8px 12px',
//               margin: '0 5px',
//               borderRadius: '4px',
//               cursor: 'pointer',
//               fontSize: '14px'
//             }}
//           >
//             Toggle Edge Labels
//           </button>
//         </div>
//         <div style={{ display: 'flex', alignItems: 'center' }}>
//           <input 
//             type="text" 
//             value={searchText}
//             onChange={(e) => setSearchText(e.target.value)}
//             onKeyPress={handleSearchKeyPress}
//             placeholder="Search nodes..."
//             style={{
//               padding: '6px 8px',
//               border: '1px solid #ccc',
//               borderRadius: '4px',
//               marginRight: '5px'
//             }}
//           />
//           <button 
//             onClick={handleSearch}
//             style={{
//               backgroundColor: '#1e88e5',
//               color: 'white',
//               border: 'none',
//               padding: '8px 12px',
//               margin: '0',
//               borderRadius: '4px',
//               cursor: 'pointer',
//               fontSize: '14px'
//             }}
//           >
//             Search
//           </button>
//         </div>
//       </div>
      
//       <div 
//         ref={cyRef} 
//         style={{
//           width: '100%',
//           height: '60vh',
//           display: 'block',
//           backgroundColor: '#fff',
//           border: '1px solid #ddd'
//         }}
//       ></div>
      
//       <div 
//         ref={tooltipRef}
//         onMouseOver={handleTooltipMouseOver}
//         onMouseOut={handleTooltipMouseOut}
//         dangerouslySetInnerHTML={{ __html: tooltipContent }}
//         style={{
//           position: 'absolute',
//           display: tooltipVisible ? 'block' : 'none',
//           left: tooltipPosition.x,
//           top: tooltipPosition.y,
//           backgroundColor: 'rgba(50, 50, 50, 0.9)',
//           color: '#fff',
//           padding: '10px',
//           borderRadius: '6px',
//           zIndex: 1000,
//           maxWidth: '300px',
//           fontSize: '14px',
//           boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)'
//         }}
//       ></div>
      
//       <div style={{
//         position: 'absolute',
//         bottom: '20px',
//         right: '20px',
//         backgroundColor: 'rgba(255, 255, 255, 0.9)',
//         padding: '10px',
//         borderRadius: '5px',
//         border: '1px solid #ddd',
//         boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
//         fontSize: '12px'
//       }}>
//         <h4 style={{ margin: '0 0 5px 0' }}>Node Categories</h4>
//         <div style={{ display: 'flex', alignItems: 'center', margin: '3px 0' }}>
//           <div style={{ 
//             width: '16px', 
//             height: '16px', 
//             marginRight: '8px', 
//             borderRadius: '3px', 
//             backgroundColor: '#4285F4',
//             border: '1px solid #ccc' 
//           }}></div>
//           <span>Government</span>
//         </div>
//         <div style={{ display: 'flex', alignItems: 'center', margin: '3px 0' }}>
//           <div style={{ 
//             width: '16px', 
//             height: '16px', 
//             marginRight: '8px', 
//             borderRadius: '3px', 
//             backgroundColor: '#EA4335',
//             border: '1px solid #ccc' 
//           }}></div>
//           <span>Diplomatic</span>
//         </div>
//         <div style={{ display: 'flex', alignItems: 'center', margin: '3px 0' }}>
//           <div style={{ 
//             width: '16px', 
//             height: '16px', 
//             marginRight: '8px', 
//             borderRadius: '3px', 
//             backgroundColor: '#FBBC05',
//             border: '1px solid #ccc' 
//           }}></div>
//           <span>Business</span>
//         </div>
//         <div style={{ display: 'flex', alignItems: 'center', margin: '3px 0' }}>
//           <div style={{ 
//             width: '16px', 
//             height: '16px', 
//             marginRight: '8px', 
//             borderRadius: '3px', 
//             backgroundColor: '#34A853',
//             border: '1px solid #ccc' 
//           }}></div>
//           <span>Industry Organisations</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FinnishNetworkGraph;






























// import React, { useEffect, useRef, useState } from 'react';
// import * as d3 from 'd3';

// const FinnishNetworkGraph = () => {
//   const svgRef = useRef(null);
//   const tooltipRef = useRef(null);
//   const [searchText, setSearchText] = useState('');
//   const [showEdgeLabels, setShowEdgeLabels] = useState(false);

//   // Network data
//   const networkData = {
//     nodes: [
//       { id: "1", label: "H.E. Sandra Bergqvist", title: "Minister of Youth, Sport and Physical Activity" },
//       { id: "2", label: "H.E. Anna-Kaisa Ikonen", title: "Minister of Local and Regional Government" },
//       { id: "3", label: "H.E. Alexander Stubb", title: "President of the Republic of Finland" },
//       { id: "4", label: "H.E. Tuula Yrjölä", title: "Ambassador of Finland to the UAE" },
//       { id: "5", label: "H.E. Anna-Mari Wong Hämäläinen", title: "Director of Foreign and Security Policy" },
//       { id: "6", label: "Dr. Ville Brummer", title: "Director of Peace Mediation" },
//       { id: "7", label: "H.E. Elina Valtonen", title: "Minister of Foreign Affairs" },
//       { id: "8", label: "Laila Clyne", title: "Diplomatic Advisor to the Minister of Foreign Affairs" },
//       { id: "9", label: "H.E. Anna-Kaisa Heikkinen", title: "Director General, Department for Africa, the Middle East and Latin America" },
//       { id: "10", label: "Anne M'Rabet", title: "Desk Officer for the Persian Gulf" },
//       { id: "11", label: "Antti Herlin", title: "Chairman of KONE Corporation" },
//       { id: "12", label: "Justin Hotard", title: "Incoming CEO of Nokia" },
//       { id: "13", label: "Pekka Lundmark", title: "Outgoing CEO of Nokia" },
//       { id: "14", label: "Sari Baldauf", title: "Chairman of Nokia Board of Directors" },
//       { id: "15", label: "Håkan Agnevall", title: "President & CEO of Wärtsilä Corporation" },
//       { id: "16", label: "Ehrnrooth Family", title: "Key industrial dynasty representative" },
//       { id: "17", label: "Nathalie Ahlström", title: "CEO of Fiskars Group" },
//       { id: "18", label: "Erkko Family", title: "Media influence representative" },
//       { id: "19", label: "Björn Wahlroos", title: "Banker and Investor" },
//       { id: "20", label: "Jyri Häkämies", title: "Director General of EK" },
//       { id: "21", label: "Seppo Vikkström", title: "Chairman of Isku Corporation" },
//       { id: "22", label: "Lassi Noponen", title: "Director General of Business Finland" },
//       { id: "23", label: "Markus Rauramo", title: "President & CEO of Fortum Corporation" },
//       { id: "24", label: "Juho Romakkaniemi", title: "CEO of Finland Chamber of Commerce" },
//       { id: "25", label: "H.E. Jussi Halla-aho", title: "Speaker of the Parliament of Finland" }
//     ],
//     links: [
//       { source: "3", target: "1", label: "Executive Collaboration" },
//       { source: "3", target: "2", label: "Executive Collaboration" },
//       { source: "3", target: "7", label: "Executive Coordination" },
//       { source: "3", target: "5", label: "Advisory Link" },
//       { source: "3", target: "6", label: "Advisory Link" },
//       { source: "3", target: "4", label: "Diplomatic Representation" },
//       { source: "7", target: "8", label: "Advisory Relationship" },
//       { source: "7", target: "9", label: "Ministry Collaboration" },
//       { source: "7", target: "10", label: "Ministry Collaboration" },
//       { source: "25", target: "3", label: "Parliamentary Oversight" },
//       { source: "5", target: "6", label: "Office Collaboration" },
//       { source: "7", target: "5", label: "Policy Alignment" },
//       { source: "9", target: "10", label: "Department Collaboration" },
//       { source: "11", target: "12", label: "Corporate Interaction" },
//       { source: "12", target: "13", label: "Corporate Transition" },
//       { source: "13", target: "14", label: "Board Oversight" },
//       { source: "15", target: "20", label: "Industry Collaboration" },
//       { source: "16", target: "20", label: "Industrial Partnership" },
//       { source: "17", target: "20", label: "Corporate Networking" },
//       { source: "18", target: "20", label: "Media and Business Link" },
//       { source: "19", target: "20", label: "Financial Leadership" },
//       { source: "16", target: "17", label: "Industrial Synergy" },
//       { source: "18", target: "17", label: "Cultural Synergy" },
//       { source: "19", target: "16", label: "Financial & Industrial Investment" },
//       { source: "19", target: "24", label: "Financial Advisory" },
//       { source: "20", target: "22", label: "Industry-Government Liaison" },
//       { source: "21", target: "22", label: "SME & Trade Promotion" },
//       { source: "24", target: "22", label: "Trade Promotion Link" },
//       { source: "23", target: "20", label: "Energy Sector Collaboration" },
//       { source: "23", target: "24", label: "Energy Trade Partnership" },
//       { source: "24", target: "25", label: "Legislative-Trade Interface" },
//       { source: "3", target: "24", label: "State-Business Bridge" },
//       { source: "3", target: "20", label: "Government-Industry Link" },
//       { source: "7", target: "22", label: "Foreign Policy to Trade Link" },
//       { source: "25", target: "20", label: "Legislative-Business Oversight" },
//       { source: "16", target: "24", label: "Family-Chamber Synergy" },
//       { source: "18", target: "24", label: "Media-Trade Collaboration" },
//       { source: "7", target: "4", label: "Diplomatic Implementation" }
//     ]
//   };

//   // Function to categorize nodes
//   const getCategoryColor = (node) => {
//     const label = node.label.toLowerCase();
    
//     if (label.includes('president') || label.includes('minister') || label.includes('speaker')) {
//       return '#4285F4'; // Government - Blue
//     } else if (label.includes('ambassador') || label.includes('diplomatic') || label.includes('foreign') || 
//                label.includes('desk officer') || label.includes('director general')) {
//       return '#EA4335'; // Diplomatic - Red
//     } else if (label.includes('ceo') || label.includes('chairman') || label.includes('family') || 
//                label.includes('banker') || label.includes('investor')) {
//       return '#FBBC05'; // Business - Yellow
//     } else {
//       return '#34A853'; // Industry Organizations - Green
//     }
//   };

//   useEffect(() => {
//     if (!svgRef.current) return;
    
//     // Clear any existing content
//     d3.select(svgRef.current).selectAll("*").remove();

//     const width = 800;
//     const height = 550;
    
//     // Create the SVG container with fixed dimensions
//     const svg = d3.select(svgRef.current)
//       .attr("viewBox", [0, 0, width, height])
//       .attr("width", "100%")
//       .attr("height", "100%");

//     // Create a tooltip div
//     const tooltip = d3.select(tooltipRef.current)
//       .style("position", "absolute")
//       .style("visibility", "hidden")
//       .style("background-color", "rgba(50, 50, 50, 0.9)")
//       .style("color", "white")
//       .style("padding", "10px")
//       .style("border-radius", "6px")
//       .style("font-size", "14px")
//       .style("max-width", "300px")
//       .style("z-index", "1000");

//     // Add colors to nodes
//     const nodes = networkData.nodes.map(node => ({
//       ...node,
//       color: getCategoryColor(node)
//     }));

//     // Create a force simulation
//     const simulation = d3.forceSimulation(nodes)
//       .force("link", d3.forceLink(networkData.links).id(d => d.id).distance(100))
//       .force("charge", d3.forceManyBody().strength(-400))
//       .force("center", d3.forceCenter(width / 2, height / 2));

//     // Create a container for all elements
//     const container = svg.append("g");

//     // Create a zoom behavior
//     const zoom = d3.zoom()
//       .scaleExtent([0.2, 2])
//       .on("zoom", (event) => {
//         container.attr("transform", event.transform);
//       });

//     svg.call(zoom);

//     // Add links
//     const link = container.append("g")
//       .selectAll("line")
//       .data(networkData.links)
//       .join("line")
//       .attr("stroke", "#999")
//       .attr("stroke-width", 1.5);

//     // Add arrowheads
//     svg.append("defs").selectAll("marker")
//       .data(["end"])
//       .join("marker")
//       .attr("id", "arrow")
//       .attr("viewBox", "0 -5 10 10")
//       .attr("refX", 20)
//       .attr("refY", 0)
//       .attr("markerWidth", 6)
//       .attr("markerHeight", 6)
//       .attr("orient", "auto")
//       .append("path")
//       .attr("fill", "#999")
//       .attr("d", "M0,-5L10,0L0,5");

//     link.attr("marker-end", "url(#arrow)");

//     // Add edge labels
//     const edgeLabels = container.append("g")
//       .selectAll("text")
//       .data(networkData.links)
//       .join("text")
//       .attr("font-size", "8px")
//       .attr("text-anchor", "middle")
//       .attr("dy", -5)
//       .attr("fill", "#666")
//       .text(d => showEdgeLabels ? d.label : "")
//       .style("pointer-events", "none");

//     // Add nodes
//     const node = container.append("g")
//       .selectAll("g")
//       .data(nodes)
//       .join("g")
//       .call(d3.drag()
//         .on("start", dragstarted)
//         .on("drag", dragged)
//         .on("end", dragended));

//     // Add circles for nodes
//     node.append("circle")
//       .attr("r", 12)
//       .attr("fill", d => d.color)
//       .attr("stroke", "#999")
//       .attr("stroke-width", 1.5);

//     // Add text labels
//     node.append("text")
//       .attr("dy", 25)
//       .attr("text-anchor", "middle")
//       .text(d => {
//         const nameParts = d.label.split(' ');
//         return nameParts[nameParts.length - 1];
//       })
//       .attr("font-size", "10px")
//       .attr("fill", "#333");

//     // Add tooltip events
//     node.on("mouseover", function(event, d) {
//       tooltip.html(`<strong>${d.label}</strong><br>${d.title}`)
//         .style("visibility", "visible")
//         .style("left", (event.pageX + 10) + "px")
//         .style("top", (event.pageY + 10) + "px");
//       d3.select(this).select("circle").attr("r", 16);
//     })
//     .on("mousemove", function(event) {
//       tooltip.style("left", (event.pageX + 10) + "px")
//         .style("top", (event.pageY + 10) + "px");
//     })
//     .on("mouseout", function() {
//       tooltip.style("visibility", "hidden");
//       d3.select(this).select("circle").attr("r", 12);
//     });

//     // Update positions on each tick
//     simulation.on("tick", () => {
//       link
//         .attr("x1", d => d.source.x)
//         .attr("y1", d => d.source.y)
//         .attr("x2", d => d.target.x)
//         .attr("y2", d => d.target.y);

//       node.attr("transform", d => `translate(${d.x},${d.y})`);
      
//       edgeLabels
//         .attr("x", d => (d.source.x + d.target.x) / 2)
//         .attr("y", d => (d.source.y + d.target.y) / 2);
//     });

//     // Drag functions
//     function dragstarted(event, d) {
//       if (!event.active) simulation.alphaTarget(0.3).restart();
//       d.fx = d.x;
//       d.fy = d.y;
//     }

//     function dragged(event, d) {
//       d.fx = event.x;
//       d.fy = event.y;
//     }

//     function dragended(event, d) {
//       if (!event.active) simulation.alphaTarget(0);
//       d.fx = null;
//       d.fy = null;
//     }

//   }, [showEdgeLabels]);

//   // Handle search
//   const handleSearch = () => {
//     if (!searchText || !svgRef.current) return;
    
//     // Reset all nodes to default size
//     d3.select(svgRef.current).selectAll("circle")
//       .attr("r", 12)
//       .attr("stroke", "#999")
//       .attr("stroke-width", 1.5);
    
//     // Find and highlight matching nodes
//     const searchLower = searchText.toLowerCase();
//     const nodes = d3.select(svgRef.current).selectAll("g > g")
//       .filter(function(d) {
//         return d.label.toLowerCase().includes(searchLower) || 
//                d.title.toLowerCase().includes(searchLower);
//       });
    
//     nodes.select("circle")
//       .attr("r", 16)
//       .attr("stroke", "#FF9800")
//       .attr("stroke-width", 3);
//   };

//   // Handle fit to view
//   const handleFitToView = () => {
//     if (!svgRef.current) return;
//     d3.select(svgRef.current).call(d3.zoom().transform, d3.zoomIdentity);
//   };

//   // Handle reset layout
//   const handleResetLayout = () => {
//     if (!svgRef.current) return;
    
//     d3.select(svgRef.current).selectAll("*").remove();
    
//     // Re-render the graph
//     useEffect(() => {}, []);
//   };

//   // Toggle edge labels
//   const handleToggleLabels = () => {
//     setShowEdgeLabels(!showEdgeLabels);
//   };

//   return (
//     <div style={{ 
//       display: 'flex', 
//       flexDirection: 'column',
//       maxWidth: '900px', 
//       margin: '0 auto',
//       border: '1px solid #ddd',
//       borderRadius: '8px',
//       overflow: 'hidden',
//       boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
//       backgroundColor: '#ffffff'
//     }}>
//       <div style={{
//         textAlign: 'center',
//         padding: '15px',
//         borderBottom: '1px solid #ddd',
//         backgroundColor: '#f8f9fa'
//       }}>
//         <h2 style={{ margin: 0, color: '#333', fontSize: '22px' }}>Finnish Leadership Network</h2>
//       </div>
      
//       <div style={{
//         padding: '10px',
//         backgroundColor: '#f0f0f0',
//         borderBottom: '1px solid #ddd',
//         display: 'flex',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         flexWrap: 'wrap'
//       }}>
//         <div>
//           <button 
//             onClick={handleFitToView}
//             style={{
//               backgroundColor: '#1e88e5',
//               color: 'white',
//               border: 'none',
//               padding: '8px 12px',
//               margin: '0 5px 5px 0',
//               borderRadius: '4px',
//               cursor: 'pointer',
//               fontSize: '14px'
//             }}
//           >
//             Fit to View
//           </button>
//           <button 
//             onClick={handleResetLayout}
//             style={{
//               backgroundColor: '#1e88e5',
//               color: 'white',
//               border: 'none',
//               padding: '8px 12px',
//               margin: '0 5px 5px 0',
//               borderRadius: '4px',
//               cursor: 'pointer',
//               fontSize: '14px'
//             }}
//           >
//             Reset Layout
//           </button>
//           <button 
//             onClick={handleToggleLabels}
//             style={{
//               backgroundColor: '#1e88e5',
//               color: 'white',
//               border: 'none',
//               padding: '8px 12px',
//               margin: '0 5px 5px 0',
//               borderRadius: '4px',
//               cursor: 'pointer',
//               fontSize: '14px'
//             }}
//           >
//             {showEdgeLabels ? "Hide Edge Labels" : "Show Edge Labels"}
//           </button>
//         </div>
//         <div style={{ display: 'flex', alignItems: 'center' }}>
//           <input 
//             type="text" 
//             value={searchText}
//             onChange={(e) => setSearchText(e.target.value)}
//             onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
//             placeholder="Search nodes..."
//             style={{
//               padding: '6px 8px',
//               border: '1px solid #ccc',
//               borderRadius: '4px',
//               marginRight: '5px'
//             }}
//           />
//           <button 
//             onClick={handleSearch}
//             style={{
//               backgroundColor: '#1e88e5',
//               color: 'white',
//               border: 'none',
//               padding: '8px 12px',
//               margin: '0',
//               borderRadius: '4px',
//               cursor: 'pointer',
//               fontSize: '14px'
//             }}
//           >
//             Search
//           </button>
//         </div>
//       </div>
      
//       <div style={{ position: 'relative', height: '550px', width: '100%' }}>
//         <svg 
//           ref={svgRef} 
//           style={{
//             width: '100%',
//             height: '100%',
//             display: 'block',
//             backgroundColor: '#fff'
//           }}
//         />
        
//         <div ref={tooltipRef}></div>
//       </div>
      
//       <div style={{
//         padding: '10px',
//         backgroundColor: '#f8f9fa',
//         borderTop: '1px solid #ddd',
//         display: 'flex',
//         justifyContent: 'center'
//       }}>
//         <div style={{
//           display: 'flex',
//           flexWrap: 'wrap',
//           justifyContent: 'center',
//           maxWidth: '600px'
//         }}>
//           <div style={{ display: 'flex', alignItems: 'center', margin: '0 15px 5px 0' }}>
//             <div style={{ 
//               width: '16px', 
//               height: '16px', 
//               marginRight: '8px', 
//               borderRadius: '3px', 
//               backgroundColor: '#4285F4',
//               border: '1px solid #ccc' 
//             }}></div>
//             <span>Government</span>
//           </div>
//           <div style={{ display: 'flex', alignItems: 'center', margin: '0 15px 5px 0' }}>
//             <div style={{ 
//               width: '16px', 
//               height: '16px', 
//               marginRight: '8px', 
//               borderRadius: '3px', 
//               backgroundColor: '#EA4335',
//               border: '1px solid #ccc' 
//             }}></div>
//             <span>Diplomatic</span>
//           </div>
//           <div style={{ display: 'flex', alignItems: 'center', margin: '0 15px 5px 0' }}>
//             <div style={{ 
//               width: '16px', 
//               height: '16px', 
//               marginRight: '8px', 
//               borderRadius: '3px', 
//               backgroundColor: '#FBBC05',
//               border: '1px solid #ccc' 
//             }}></div>
//             <span>Business</span>
//           </div>
//           <div style={{ display: 'flex', alignItems: 'center', margin: '0 15px 5px 0' }}>
//             <div style={{ 
//               width: '16px', 
//               height: '16px', 
//               marginRight: '8px', 
//               borderRadius: '3px', 
//               backgroundColor: '#34A853',
//               border: '1px solid #ccc' 
//             }}></div>
//             <span>Industry Organisations</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FinnishNetworkGraph;


  
  // // Network data
  // const networkData = {
  //   nodes: [
  //     { id: "1", label: "H.E. Sandra Bergqvist", title: "Minister of Youth, Sport and Physical Activity" },
  //     { id: "2", label: "H.E. Anna-Kaisa Ikonen", title: "Minister of Local and Regional Government" },
  //     { id: "3", label: "H.E. Alexander Stubb", title: "President of the Republic of Finland" },
  //     { id: "4", label: "H.E. Tuula Yrjölä", title: "Ambassador of Finland to the UAE" },
  //     { id: "5", label: "H.E. Anna-Mari Wong Hämäläinen", title: "Director of Foreign and Security Policy" },
  //     { id: "6", label: "Dr. Ville Brummer", title: "Director of Peace Mediation" },
  //     { id: "7", label: "H.E. Elina Valtonen", title: "Minister of Foreign Affairs" },
  //     { id: "8", label: "Laila Clyne", title: "Diplomatic Advisor to the Minister of Foreign Affairs" },
  //     { id: "9", label: "H.E. Anna-Kaisa Heikkinen", title: "Director General, Department for Africa, the Middle East and Latin America" },
  //     { id: "10", label: "Anne M'Rabet", title: "Desk Officer for the Persian Gulf" },
  //     { id: "11", label: "Antti Herlin", title: "Chairman of KONE Corporation" },
  //     { id: "12", label: "Justin Hotard", title: "Incoming CEO of Nokia" },
  //     { id: "13", label: "Pekka Lundmark", title: "Outgoing CEO of Nokia" },
  //     { id: "14", label: "Sari Baldauf", title: "Chairman of Nokia Board of Directors" },
  //     { id: "15", label: "Håkan Agnevall", title: "President & CEO of Wärtsilä Corporation" },
  //     { id: "16", label: "Ehrnrooth Family", title: "Key industrial dynasty representative" },
  //     { id: "17", label: "Nathalie Ahlström", title: "CEO of Fiskars Group" },
  //     { id: "18", label: "Erkko Family", title: "Media influence representative" },
  //     { id: "19", label: "Björn Wahlroos", title: "Banker and Investor" },
  //     { id: "20", label: "Jyri Häkämies", title: "Director General of EK" },
  //     { id: "21", label: "Seppo Vikkström", title: "Chairman of Isku Corporation" },
  //     { id: "22", label: "Lassi Noponen", title: "Director General of Business Finland" },
  //     { id: "23", label: "Markus Rauramo", title: "President & CEO of Fortum Corporation" },
  //     { id: "24", label: "Juho Romakkaniemi", title: "CEO of Finland Chamber of Commerce" },
  //     { id: "25", label: "H.E. Jussi Halla-aho", title: "Speaker of the Parliament of Finland" }
  //   ],
  //   links: [
  //     { source: "3", target: "1", label: "Executive Collaboration" },
  //     { source: "3", target: "2", label: "Executive Collaboration" },
  //     { source: "3", target: "7", label: "Executive Coordination" },
  //     { source: "3", target: "5", label: "Advisory Link" },
  //     { source: "3", target: "6", label: "Advisory Link" },
  //     { source: "3", target: "4", label: "Diplomatic Representation" },
  //     { source: "7", target: "8", label: "Advisory Relationship" },
  //     { source: "7", target: "9", label: "Ministry Collaboration" },
  //     { source: "7", target: "10", label: "Ministry Collaboration" },
  //     { source: "25", target: "3", label: "Parliamentary Oversight" },
  //     { source: "5", target: "6", label: "Office Collaboration" },
  //     { source: "7", target: "5", label: "Policy Alignment" },
  //     { source: "9", target: "10", label: "Department Collaboration" },
  //     { source: "11", target: "12", label: "Corporate Interaction" },
  //     { source: "12", target: "13", label: "Corporate Transition" },
  //     { source: "13", target: "14", label: "Board Oversight" },
  //     { source: "15", target: "20", label: "Industry Collaboration" },
  //     { source: "16", target: "20", label: "Industrial Partnership" },
  //     { source: "17", target: "20", label: "Corporate Networking" },
  //     { source: "18", target: "20", label: "Media and Business Link" },
  //     { source: "19", target: "20", label: "Financial Leadership" },
  //     { source: "16", target: "17", label: "Industrial Synergy" },
  //     { source: "18", target: "17", label: "Cultural Synergy" },
  //     { source: "19", target: "16", label: "Financial & Industrial Investment" },
  //     { source: "19", target: "24", label: "Financial Advisory" },
  //     { source: "20", target: "22", label: "Industry-Government Liaison" },
  //     { source: "21", target: "22", label: "SME & Trade Promotion" },
  //     { source: "24", target: "22", label: "Trade Promotion Link" },
  //     { source: "23", target: "20", label: "Energy Sector Collaboration" },
  //     { source: "23", target: "24", label: "Energy Trade Partnership" },
  //     { source: "24", target: "25", label: "Legislative-Trade Interface" },
  //     { source: "3", target: "24", label: "State-Business Bridge" },
  //     { source: "3", target: "20", label: "Government-Industry Link" },
  //     { source: "7", target: "22", label: "Foreign Policy to Trade Link" },
  //     { source: "25", target: "20", label: "Legislative-Business Oversight" },
  //     { source: "16", target: "24", label: "Family-Chamber Synergy" },
  //     { source: "18", target: "24", label: "Media-Trade Collaboration" },
  //     { source: "7", target: "4", label: "Diplomatic Implementation" }
  //   ]
  // };




// // Network data
// const networkData = {
//   nodes: [
//     { id: "1", label: "H.E. Sandra Bergqvist", title: "Minister of Youth, Sport and Physical Activity" },
//     { id: "2", label: "H.E. Anna-Kaisa Ikonen", title: "Minister of Local and Regional Government" },
//     { id: "3", label: "H.E. Alexander Stubb", title: "President of the Republic of Finland" },
//     { id: "4", label: "H.E. Tuula Yrjölä", title: "Ambassador of Finland to the UAE" },
//     { id: "5", label: "H.E. Anna-Mari Wong Hämäläinen", title: "Director of Foreign and Security Policy" },
//     { id: "6", label: "Dr. Ville Brummer", title: "Director of Peace Mediation" },
//     { id: "7", label: "H.E. Elina Valtonen", title: "Minister of Foreign Affairs" },
//     { id: "8", label: "Laila Clyne", title: "Diplomatic Advisor to the Minister of Foreign Affairs" },
//     { id: "9", label: "H.E. Anna-Kaisa Heikkinen", title: "Director General, Department for Africa, the Middle East and Latin America" },
//     { id: "10", label: "Anne M'Rabet", title: "Desk Officer for the Persian Gulf" },
//     { id: "11", label: "Antti Herlin", title: "Chairman of KONE Corporation" },
//     { id: "12", label: "Justin Hotard", title: "Incoming CEO of Nokia" },
//     { id: "13", label: "Pekka Lundmark", title: "Outgoing CEO of Nokia" },
//     { id: "14", label: "Sari Baldauf", title: "Chairman of Nokia Board of Directors" },
//     { id: "15", label: "Håkan Agnevall", title: "President & CEO of Wärtsilä Corporation" },
//     { id: "16", label: "Ehrnrooth Family", title: "Key industrial dynasty representative" },
//     { id: "17", label: "Nathalie Ahlström", title: "CEO of Fiskars Group" },
//     { id: "18", label: "Erkko Family", title: "Media influence representative" },
//     { id: "19", label: "Björn Wahlroos", title: "Banker and Investor" },
//     { id: "20", label: "Jyri Häkämies", title: "Director General of EK" },
//     { id: "21", label: "Seppo Vikkström", title: "Chairman of Isku Corporation" },
//     { id: "22", label: "Lassi Noponen", title: "Director General of Business Finland" },
//     { id: "23", label: "Markus Rauramo", title: "President & CEO of Fortum Corporation" },
//     { id: "24", label: "Juho Romakkaniemi", title: "CEO of Finland Chamber of Commerce" },
//     { id: "25", label: "H.E. Jussi Halla-aho", title: "Speaker of the Parliament of Finland" }
//   ],
//   links: [
//     { source: "3", target: "1", label: "Executive Collaboration" },
//     { source: "3", target: "2", label: "Executive Collaboration" },
//     { source: "3", target: "7", label: "Executive Coordination" },
//     { source: "3", target: "5", label: "Advisory Link" },
//     { source: "3", target: "6", label: "Advisory Link" },
//     { source: "3", target: "4", label: "Diplomatic Representation" },
//     { source: "7", target: "8", label: "Advisory Relationship" },
//     { source: "7", target: "9", label: "Ministry Collaboration" },
//     { source: "7", target: "10", label: "Ministry Collaboration" },
//     { source: "25", target: "3", label: "Parliamentary Oversight" },
//     { source: "5", target: "6", label: "Office Collaboration" },
//     { source: "7", target: "5", label: "Policy Alignment" },
//     { source: "9", target: "10", label: "Department Collaboration" },
//     { source: "11", target: "12", label: "Corporate Interaction" },
//     { source: "12", target: "13", label: "Corporate Transition" },
//     { source: "13", target: "14", label: "Board Oversight" },
//     { source: "15", target: "20", label: "Industry Collaboration" },
//     { source: "16", target: "20", label: "Industrial Partnership" },
//     { source: "17", target: "20", label: "Corporate Networking" },
//     { source: "18", target: "20", label: "Media and Business Link" },
//     { source: "19", target: "20", label: "Financial Leadership" },
//     { source: "16", target: "17", label: "Industrial Synergy" },
//     { source: "18", target: "17", label: "Cultural Synergy" },
//     { source: "19", target: "16", label: "Financial & Industrial Investment" },
//     { source: "19", target: "24", label: "Financial Advisory" },
//     { source: "20", target: "22", label: "Industry-Government Liaison" },
//     { source: "21", target: "22", label: "SME & Trade Promotion" },
//     { source: "24", target: "22", label: "Trade Promotion Link" },
//     { source: "23", target: "20", label: "Energy Sector Collaboration" },
//     { source: "23", target: "24", label: "Energy Trade Partnership" },
//     { source: "24", target: "25", label: "Legislative-Trade Interface" },
//     { source: "3", target: "24", label: "State-Business Bridge" },
//     { source: "3", target: "20", label: "Government-Industry Link" },
//     { source: "7", target: "22", label: "Foreign Policy to Trade Link" },
//     { source: "25", target: "20", label: "Legislative-Business Oversight" },
//     { source: "16", target: "24", label: "Family-Chamber Synergy" },
//     { source: "18", target: "24", label: "Media-Trade Collaboration" },
//     { source: "7", target: "4", label: "Diplomatic Implementation" }
//   ]
// };









































// import React, { useEffect, useRef, useState } from 'react';
// import * as d3 from 'd3';

// const FinnishNetworkGraph = () => {
//   const svgRef = useRef(null);
//   const tooltipRef = useRef(null);
//   const [searchText, setSearchText] = useState('');
//   const [showEdgeLabels, setShowEdgeLabels] = useState(false);
//   const [simulationRef] = useState({ current: null });




// // Network data
// const networkData = {
//   nodes: [
//     { id: "1", label: "H.E. Sandra Bergqvist", title: "Minister of Youth, Sport and Physical Activity", sector: "Government" },
//     { id: "2", label: "H.E. Anna-Kaisa Ikonen", title: "Minister of Local and Regional Government", sector: "Government" },
//     { id: "3", label: "H.E. Alexander Stubb", title: "President of the Republic of Finland", sector: "Government" },
//     { id: "4", label: "H.E. Tuula Yrjölä", title: "Ambassador of Finland to the UAE", sector: "Government" },
//     { id: "5", label: "H.E. Anna-Mari Wong Hämäläinen", title: "Director of Foreign and Security Policy", sector: "Government" },
//     { id: "6", label: "Dr. Ville Brummer", title: "Director of Peace Mediation", sector: "Government" },
//     { id: "7", label: "H.E. Elina Valtonen", title: "Minister of Foreign Affairs", sector: "Government" },
//     { id: "8", label: "Laila Clyne", title: "Diplomatic Advisor to the Minister of Foreign Affairs", sector: "Government" },
//     { id: "9", label: "H.E. Anna-Kaisa Heikkinen", title: "Director General, Department for Africa, the Middle East and Latin America", sector: "Government" },
//     { id: "10", label: "Anne M'Rabet", title: "Desk Officer for the Persian Gulf", sector: "Government" },
//     { id: "11", label: "Antti Herlin", title: "Chairman of KONE Corporation", sector: "Business" },
//     { id: "12", label: "Justin Hotard", title: "Incoming CEO of Nokia", sector: "Business" },
//     { id: "13", label: "Pekka Lundmark", title: "Outgoing CEO of Nokia", sector: "Business" },
//     { id: "14", label: "Sari Baldauf", title: "Chairman of Nokia Board of Directors", sector: "Business" },
//     { id: "15", label: "Håkan Agnevall", title: "President & CEO of Wärtsilä Corporation", sector: "Business" },
//     { id: "16", label: "Ehrnrooth Family", title: "Key industrial dynasty representative", sector: "Business" },
//     { id: "17", label: "Nathalie Ahlström", title: "CEO of Fiskars Group", sector: "Business" },
//     { id: "18", label: "Erkko Family", title: "Media influence representative", sector: "Business" },
//     { id: "19", label: "Björn Wahlroos", title: "Banker and Investor", sector: "Business" },
//     { id: "20", label: "Jyri Häkämies", title: "Director General of EK", sector: "Business" },
//     { id: "21", label: "Seppo Vikkström", title: "Chairman of Isku Corporation", sector: "Business" },
//     { id: "22", label: "Lassi Noponen", title: "Director General of Business Finland", sector: "Government" },
//     { id: "23", label: "Markus Rauramo", title: "President & CEO of Fortum Corporation", sector: "Business" },
//     { id: "24", label: "Juho Romakkaniemi", title: "CEO of Finland Chamber of Commerce", sector: "Business" },
//     { id: "25", label: "H.E. Jussi Halla-aho", title: "Speaker of the Parliament of Finland", sector: "Government" },
//     // Third Party nodes
//     { id: "26", label: "Finnish Parliament", sector: "Third Party" },
//     { id: "27", label: "Swedish Assembly of Finland", sector: "Third Party" },
//     { id: "28", label: "Pargas City Executive", sector: "Third Party" },
//     { id: "29", label: "Association of Finnish Municipalities", sector: "Third Party" },
//     { id: "30", label: "Ministry of Education and Culture", sector: "Third Party" },
//     { id: "31", label: "Åbo Akademi University", sector: "Third Party" },
//     { id: "32", label: "City of Tampere", sector: "Third Party" },
//     { id: "33", label: "Ministry of Finance", sector: "Third Party" },
//     { id: "34", label: "Finnish Government", sector: "Third Party" },
//     { id: "35", label: "World Happiness Council", sector: "Third Party" },
//     { id: "36", label: "Finnish Embassy in Abu Dhabi", sector: "Third Party" },
//     { id: "37", label: "Team Finland", sector: "Third Party" },
//     { id: "38", label: "Anwar Gargash Diplomatic Academy", sector: "Third Party" },
//     { id: "39", label: "Cabinet of the President of Finland", sector: "Third Party" },
//     { id: "40", label: "Ministry for Foreign Affairs", sector: "Third Party" },
//     { id: "41", label: "NATO", sector: "Third Party" },
//     { id: "42", label: "Office of the President of Finland", sector: "Third Party" },
//     { id: "43", label: "CMI – Martti Ahtisaari Peace Foundation", sector: "Third Party" },
//     { id: "44", label: "UN Group of Friends of Mediation", sector: "Third Party" },
//     { id: "45", label: "UN General Assembly", sector: "Third Party" },
//     { id: "46", label: "Finnish Permanent Mission in Geneva", sector: "Third Party" },
//     { id: "47", label: "Finnish Permanent Mission in New York", sector: "Third Party" },
//     { id: "48", label: "Dubai Electricity and Water Authority (DEWA)", sector: "Third Party" },
//     { id: "49", label: "GCC", sector: "Third Party" },
//     { id: "50", label: "OIC", sector: "Third Party" },
//     { id: "51", label: "KONE Corporation", sector: "Third Party" },
//     { id: "52", label: "Nokia", sector: "Third Party" },
//     { id: "53", label: "Hewlett Packard Enterprise", sector: "Third Party" },
//     { id: "54", label: "UAE Ministry of AI", sector: "Third Party" },
//     { id: "55", label: "Wärtsilä Corporation", sector: "Third Party" },
//     { id: "56", label: "ADIPEC", sector: "Third Party" },
//     { id: "57", label: "Fiskars", sector: "Third Party" },
//     { id: "58", label: "Pöyry/AFRY", sector: "Third Party" },
//     { id: "59", label: "Sanoma Corporation", sector: "Third Party" },
//     { id: "60", label: "Helsingin Sanomat", sector: "Third Party" },
//     { id: "61", label: "Sampo Group", sector: "Third Party" },
//     { id: "62", label: "Nordea Bank", sector: "Third Party" },
//     { id: "63", label: "UPM-Kymmene", sector: "Third Party" },
//     { id: "64", label: "Abu Dhabi Investment Authority (ADIA)", sector: "Third Party" },
//     { id: "65", label: "Saxo Bank", sector: "Third Party" },
//     { id: "66", label: "Finnish Confederation of Industries (EK)", sector: "Third Party" },
//     { id: "67", label: "Finns Party", sector: "Third Party" },
//     { id: "68", label: "Fiskars Group", sector: "Third Party" },
//     { id: "69", label: "Iittala", sector: "Third Party" },
//     { id: "70", label: "Royal Copenhagen", sector: "Third Party" },
//     { id: "71", label: "Expo 2020 Dubai", sector: "Third Party" },
//     { id: "72", label: "ISKU", sector: "Third Party" },
//     { id: "73", label: "Finnish Business Council in Dubai", sector: "Third Party" },
//     { id: "74", label: "Business Finland", sector: "Third Party" },
//     { id: "75", label: "Fortum", sector: "Third Party" },
//     { id: "76", label: "Finland Chamber of Commerce (FCC)", sector: "Third Party" },
//     { id: "77", label: "UAE-Finland Business Council", sector: "Third Party" }
//   ],
//   links: [
//     { source: "1", target: "26", label: "Executive Collaboration" },
//     { source: "1", target: "27", label: "Executive Collaboration" },
//     { source: "1", target: "28", label: "Executive Collaboration" },
//     { source: "1", target: "29", label: "Executive Collaboration" },
//     { source: "1", target: "30", label: "Executive Collaboration" },
//     { source: "1", target: "31", label: "Executive Collaboration" },
//     { source: "2", target: "32", label: "Executive Collaboration" },
//     { source: "2", target: "33", label: "Executive Collaboration" },
//     { source: "2", target: "26", label: "Executive Collaboration" },
//     { source: "3", target: "34", label: "Executive Collaboration" },
//     { source: "3", target: "35", label: "Executive Collaboration" },
//     { source: "4", target: "36", label: "Diplomatic Representation" },
//     { source: "4", target: "37", label: "Diplomatic Representation" },
//     { source: "4", target: "38", label: "Diplomatic Representation" },
//     { source: "5", target: "39", label: "Advisory Link" },
//     { source: "5", target: "40", label: "Advisory Link" },
//     { source: "5", target: "41", label: "Advisory Link" },
//     { source: "6", target: "42", label: "Advisory Link" },
//     { source: "6", target: "43", label: "Advisory Link" },
//     { source: "6", target: "44", label: "Advisory Link" },
//     { source: "7", target: "40", label: "Executive Coordination" },
//     { source: "7", target: "45", label: "Executive Coordination" },
//     { source: "8", target: "40", label: "Advisory Relationship" },
//     { source: "8", target: "46", label: "Advisory Relationship" },
//     { source: "8", target: "47", label: "Advisory Relationship" },
//     { source: "9", target: "40", label: "Ministry Collaboration" },
//     { source: "9", target: "48", label: "Ministry Collaboration" },
//     { source: "10", target: "40", label: "Ministry Collaboration" },
//     { source: "10", target: "49", label: "Ministry Collaboration" },
//     { source: "10", target: "50", label: "Ministry Collaboration" },
//     { source: "11", target: "51", label: "Corporate Interaction" },
//     { source: "12", target: "52", label: "Corporate Interaction" },
//     { source: "12", target: "53", label: "Corporate Interaction" },
//     { source: "13", target: "52", label: "Corporate Transition" },
//     { source: "14", target: "52", label: "Board Oversight" },
//     { source: "14", target: "54", label: "Board Oversight" },
//     { source: "15", target: "55", label: "Industry Collaboration" },
//     { source: "15", target: "56", label: "Industry Collaboration" },
//     { source: "16", target: "20", label: "Industrial Partnership" },
//     { source: "17", target: "20", label: "Corporate Networking" },
//     { source: "18", target: "20", label: "Media and Business Link" },
//     { source: "19", target: "20", label: "Financial Leadership" },
//     { source: "16", target: "17", label: "Industrial Synergy" },
//     { source: "18", target: "17", label: "Cultural Synergy" },
//     { source: "19", target: "16", label: "Financial & Industrial Investment" },
//     { source: "19", target: "24", label: "Financial Advisory" },
//     { source: "20", target: "22", label: "Industry-Government Liaison" },
//     { source: "21", target: "22", label: "SME & Trade Promotion" },
//     { source: "24", target: "22", label: "Trade Promotion Link" },
//     { source: "23", target: "20", label: "Energy Sector Collaboration" },
//     { source: "23", target: "24", label: "Energy Trade Partnership" },
//     { source: "24", target: "25", label: "Legislative-Trade Interface" },
//     { source: "3", target: "24", label: "State-Business Bridge" },
//     { source: "3", target: "20", label: "Government-Industry Link" },
//     { source: "7", target: "22", label: "Foreign Policy to Trade Link" },
//     { source: "25", target: "20", label: "Legislative-Business Oversight" },
//     { source: "16", target: "24", label: "Family-Chamber Synergy" },
//     { source: "18", target: "24", label: "Media-Trade Collaboration" },
//     { source: "7", target: "4", label: "Diplomatic Implementation" },
//     // Additional links for third party nodes
//     { source: "17", target: "57", label: "Corporate Branding" },
//     { source: "16", target: "58", label: "Strategic Investment" },
//     { source: "18", target: "59", label: "Media Ownership" },
//     { source: "18", target: "60", label: "Media Influence" },
//     { source: "19", target: "61", label: "Corporate Investment" },
//     { source: "19", target: "62", label: "Corporate Investment" },
//     { source: "19", target: "63", label: "Corporate Oversight" },
//     { source: "19", target: "64", label: "Financial Partnership" },
//     { source: "19", target: "65", label: "Investment Link" },
//     { source: "20", target: "66", label: "Industry Advocacy" },
//     { source: "25", target: "67", label: "Political Oversight" },
//     { source: "17", target: "68", label: "Corporate Synergy" },
//     { source: "17", target: "69", label: "Product Collaboration" },
//     { source: "17", target: "70", label: "Design Partnership" },
//     { source: "17", target: "71", label: "Market Exposure" },
//     { source: "21", target: "72", label: "Corporate Interaction" },
//     { source: "21", target: "73", label: "Trade Promotion" },
//     { source: "22", target: "74", label: "Trade Promotion" },
//     { source: "23", target: "75", label: "Energy Partnership" },
//     { source: "24", target: "76", label: "Trade Facilitation" },
//     { source: "24", target: "77", label: "Business Networking" }
//   ]
// };


//   // Function to categorize nodes
//   const getCategoryColor = (node) => {
//     const label = node.label.toLowerCase();
    
//     if (label.includes('president') || label.includes('minister') || label.includes('speaker')) {
//       return '#4285F4'; // Government - Blue
//     } else if (label.includes('ambassador') || label.includes('diplomatic') || label.includes('foreign') || 
//                label.includes('desk officer') || label.includes('director general')) {
//       return '#EA4335'; // Diplomatic - Red
//     } else if (label.includes('ceo') || label.includes('chairman') || label.includes('family') || 
//                label.includes('banker') || label.includes('investor')) {
//       return '#FBBC05'; // Business - Yellow
//     } else {
//       return '#34A853'; // Industry Organizations - Green
//     }
//   };

//   const createVisualization = () => {
//     if (!svgRef.current) return;
    
//     // Clean up previous simulation
//     if (simulationRef.current) {
//       simulationRef.current.stop();
//     }
    
//     // Clear any existing content
//     d3.select(svgRef.current).selectAll("*").remove();

//     const width = 980;
//     const height = 700;
    
//     // Create the SVG container with fixed dimensions
//     const svg = d3.select(svgRef.current)
//       .attr("viewBox", [0, 0, width, height])
//       .attr("width", "100%")
//       .attr("height", "100%");

//     // Create a tooltip div
//     const tooltip = d3.select(tooltipRef.current)
//       .style("position", "absolute")
//       .style("visibility", "hidden")
//       .style("background-color", "rgba(50, 50, 50, 0.9)")
//       .style("color", "white")
//       .style("padding", "10px")
//       .style("border-radius", "6px")
//       .style("font-size", "14px")
//       .style("max-width", "300px")
//       .style("z-index", "1000");

//     // Add colors to nodes
//     const nodes = networkData.nodes.map(node => ({
//       ...node,
//       color: getCategoryColor(node)
//     }));

//     // Process links to ensure they refer to node objects, not just IDs
//     const links = networkData.links.map(link => ({
//       ...link,
//       source: nodes.find(node => node.id === link.source) || link.source,
//       target: nodes.find(node => node.id === link.target) || link.target
//     }));
    
//     // Create a force simulation
//     const simulation = d3.forceSimulation(nodes)
//       .force("link", d3.forceLink(links).id(d => d.id).distance(120))
//       .force("charge", d3.forceManyBody().strength(-500))
//       .force("center", d3.forceCenter(width / 2, height / 2))
//       .force("collide", d3.forceCollide().radius(50));
    
//     // Store simulation reference
//     simulationRef.current = simulation;

//     // Create a container for all elements
//     const container = svg.append("g");

//     // Create a zoom behavior
//     const zoom = d3.zoom()
//       .scaleExtent([0.2, 2])
//       .on("zoom", (event) => {
//         container.attr("transform", event.transform);
//       });

//     svg.call(zoom);

//     // Add links
//     const link = container.append("g")
//       .selectAll("line")
//       .data(links)
//       .join("line")
//       .attr("stroke", "#999")
//       .attr("stroke-width", 1.5);

//     // Add arrowheads
//     svg.append("defs").selectAll("marker")
//       .data(["end"])
//       .join("marker")
//       .attr("id", "arrow")
//       .attr("viewBox", "0 -5 10 10")
//       .attr("refX", 20)
//       .attr("refY", 0)
//       .attr("markerWidth", 6)
//       .attr("markerHeight", 6)
//       .attr("orient", "auto")
//       .append("path")
//       .attr("fill", "#999")
//       .attr("d", "M0,-5L10,0L0,5");

//     link.attr("marker-end", "url(#arrow)");

//     // Add edge labels
//     const edgeLabels = container.append("g")
//       .selectAll("text")
//       .data(links)
//       .join("text")
//       .attr("font-size", "8px")
//       .attr("text-anchor", "middle")
//       .attr("dy", -5)
//       .attr("fill", "#666")
//       .text(d => showEdgeLabels ? d.label : "")
//       .style("pointer-events", "none");

//     // Add nodes
//     const node = container.append("g")
//       .selectAll("g")
//       .data(nodes)
//       .join("g")
//       .call(d3.drag()
//         .on("start", dragstarted)
//         .on("drag", dragged)
//         .on("end", dragended));

//     // Add circles for nodes
//     node.append("circle")
//       .attr("r", 12)
//       .attr("fill", d => d.color)
//       .attr("stroke", "#999")
//       .attr("stroke-width", 1.5);

//     // Add text labels
//     node.append("text")
//       .attr("dy", 25)
//       .attr("text-anchor", "middle")
//       .text(d => {
//         const nameParts = d.label.split(' ');
//         return nameParts[nameParts.length - 1];
//       })
//       .attr("font-size", "10px")
//       .attr("fill", "#333");

//     // Add tooltip events
//     node.on("mouseover", function(event, d) {
//       tooltip.html(`<strong>${d.label}</strong><br>${d.title}`)
//         .style("visibility", "visible")
//         .style("left", (event.pageX + 10) + "px")
//         .style("top", (event.pageY + 10) + "px");
//       d3.select(this).select("circle").attr("r", 16);
//     })
//     .on("mousemove", function(event) {
//       tooltip.style("left", (event.pageX + 10) + "px")
//         .style("top", (event.pageY + 10) + "px");
//     })
//     .on("mouseout", function() {
//       tooltip.style("visibility", "hidden");
//       d3.select(this).select("circle").attr("r", 12);
//     });

//     link.on("mouseover", function(event, d) {
//       const sourceNode = nodes.find(node => node.id === d.source.id);
//       const targetNode = nodes.find(node => node.id === d.target.id);
      
//       tooltip.html(`<strong>${d.label}</strong>: ${sourceNode.label} → ${targetNode.label}`)
//         .style("visibility", "visible")
//         .style("left", (event.pageX + 10) + "px")
//         .style("top", (event.pageY + 10) + "px");
//       d3.select(this).attr("stroke-width", 3);
//     })
//     .on("mousemove", function(event) {
//       tooltip.style("left", (event.pageX + 10) + "px")
//         .style("top", (event.pageY + 10) + "px");
//     })
//     .on("mouseout", function() {
//       tooltip.style("visibility", "hidden");
//       d3.select(this).attr("stroke-width", 1.5);
//     });

//     // Update positions on each tick
//     simulation.on("tick", () => {
//       // Make sure nodes stay within bounds
//       nodes.forEach(d => {
//         d.x = Math.max(30, Math.min(width - 30, d.x));
//         d.y = Math.max(30, Math.min(height - 30, d.y));
//       });
      
//       // Update link positions
//       link
//         .attr("x1", d => d.source.x)
//         .attr("y1", d => d.source.y)
//         .attr("x2", d => d.target.x)
//         .attr("y2", d => d.target.y);

//       // Update node positions
//       node.attr("transform", d => `translate(${d.x},${d.y})`);
      
//       // Update edge label positions
//       edgeLabels
//         .attr("x", d => (d.source.x + d.target.x) / 2)
//         .attr("y", d => (d.source.y + d.target.y) / 2);
//     });

//     // Initial alpha adjustment to improve layout
//     simulation.alpha(0.3).restart();

//     // Drag functions
//     function dragstarted(event, d) {
//       if (!event.active) simulation.alphaTarget(0.3).restart();
//       d.fx = d.x;
//       d.fy = d.y;
//     }

//     function dragged(event, d) {
//       // Keep nodes within bounds during drag
//       d.fx = Math.max(30, Math.min(width - 30, event.x));
//       d.fy = Math.max(30, Math.min(height - 30, event.y));
//     }

//     function dragended(event, d) {
//       if (!event.active) simulation.alphaTarget(0);
//       // Keep fixed position after drag to prevent disconnection
//       // This is a key change to prevent nodes from floating away
//       d.fx = d.x;
//       d.fy = d.y;
//     }
//   };

//   // Initialize visualization when component mounts
//   useEffect(() => {
//     createVisualization();
    
//     // Cleanup function
//     return () => {
//       if (simulationRef.current) {
//         simulationRef.current.stop();
//       }
//     };
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);
  
//   // Update edge labels when showEdgeLabels changes
//   useEffect(() => {
//     if (!svgRef.current) return;
    
//     // Find the processed links with proper references
//     const processedLinks = Array.from(d3.select(svgRef.current).selectAll("line").data());
    
//     d3.select(svgRef.current)
//       .selectAll("text")
//       .filter(function() {
//         // Filter to select only edge labels, not node labels
//         return !this.textContent.includes("H.E.") && 
//                !this.textContent.includes("Dr.") &&
//                this.parentNode.tagName === "g";
//       })
//       .data(processedLinks)
//       .text(d => showEdgeLabels ? d.label : "");
      
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [showEdgeLabels]);

//   // Handle search
//   const handleSearch = () => {
//     if (!searchText || !svgRef.current) return;
    
//     // Reset all nodes to default size
//     d3.select(svgRef.current).selectAll("circle")
//       .attr("r", 12)
//       .attr("stroke", "#999")
//       .attr("stroke-width", 1.5);
    
//     // Find and highlight matching nodes
//     const searchLower = searchText.toLowerCase();
    
//     d3.select(svgRef.current)
//       .selectAll("g > g")
//       .filter(function(d) {
//         if (!d) return false;
//         return d.label.toLowerCase().includes(searchLower) || 
//                d.title.toLowerCase().includes(searchLower);
//       })
//       .select("circle")
//       .attr("r", 16)
//       .attr("stroke", "#FF9800")
//       .attr("stroke-width", 3);
//   };

//   // Handle fit to view
//   const handleFitToView = () => {
//     if (!svgRef.current) return;
    
//     // Get SVG dimensions
//     const svg = d3.select(svgRef.current);
//     const width = parseInt(svg.style("width"));
//     const height = parseInt(svg.style("height"));
    
//     // Recenter and reset zoom
//     svg.call(
//       d3.zoom().transform, 
//       d3.zoomIdentity.translate(width/2, height/2).scale(0.8)
//     );
//   };

//   // Handle reset layout
//   const handleResetLayout = () => {
//     createVisualization();
//   };

//   // Toggle edge labels
//   const handleToggleLabels = () => {
//     setShowEdgeLabels(!showEdgeLabels);
//   };

//   return (
//     <div style={{ 
//       display: 'flex', 
//       flexDirection: 'column',
//       maxWidth: '1100px', 
//       margin: '0 auto',
//       border: '1px solid #ddd',
//       borderRadius: '8px',
//       overflow: 'hidden',
//       boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
//       backgroundColor: '#ffffff'
//     }}>
//       <div style={{
//         textAlign: 'center',
//         padding: '15px',
//         borderBottom: '1px solid #ddd',
//         backgroundColor: '#f8f9fa'
//       }}>
//         <h2 style={{ margin: 0, color: '#333', fontSize: '22px' }}>Finnish Leadership Network</h2>
//       </div>
      
//       <div style={{
//         padding: '10px',
//         backgroundColor: '#f0f0f0',
//         borderBottom: '1px solid #ddd',
//         display: 'flex',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         flexWrap: 'wrap'
//       }}>
//         <div>
//           <button 
//             onClick={handleFitToView}
//             style={{
//               backgroundColor: '#1e88e5',
//               color: 'white',
//               border: 'none',
//               padding: '8px 12px',
//               margin: '0 5px 5px 0',
//               borderRadius: '4px',
//               cursor: 'pointer',
//               fontSize: '14px'
//             }}
//           >
//             Fit to View
//           </button>
//           <button 
//             onClick={handleResetLayout}
//             style={{
//               backgroundColor: '#1e88e5',
//               color: 'white',
//               border: 'none',
//               padding: '8px 12px',
//               margin: '0 5px 5px 0',
//               borderRadius: '4px',
//               cursor: 'pointer',
//               fontSize: '14px'
//             }}
//           >
//             Reset Layout
//           </button>
//           <button 
//             onClick={handleToggleLabels}
//             style={{
//               backgroundColor: '#1e88e5',
//               color: 'white',
//               border: 'none',
//               padding: '8px 12px',
//               margin: '0 5px 5px 0',
//               borderRadius: '4px',
//               cursor: 'pointer',
//               fontSize: '14px'
//             }}
//           >
//             {showEdgeLabels ? "Hide Edge Labels" : "Show Edge Labels"}
//           </button>
//         </div>
//         <div style={{ display: 'flex', alignItems: 'center' }}>
//           <input 
//             type="text" 
//             value={searchText}
//             onChange={(e) => setSearchText(e.target.value)}
//             onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
//             placeholder="Search nodes..."
//             style={{
//               padding: '6px 8px',
//               border: '1px solid #ccc',
//               borderRadius: '4px',
//               marginRight: '5px'
//             }}
//           />
//           <button 
//             onClick={handleSearch}
//             style={{
//               backgroundColor: '#1e88e5',
//               color: 'white',
//               border: 'none',
//               padding: '8px 12px',
//               margin: '0',
//               borderRadius: '4px',
//               cursor: 'pointer',
//               fontSize: '14px'
//             }}
//           >
//             Search
//           </button>
//         </div>
//       </div>
      
//       <div style={{ position: 'relative', height: '700px', width: '100%' }}>
//         <svg 
//           ref={svgRef} 
//           style={{
//             width: '100%',
//             height: '100%',
//             display: 'block',
//             backgroundColor: '#fff'
//           }}
//         />
        
//         <div ref={tooltipRef}></div>
//       </div>
      
//       <div style={{
//         padding: '10px',
//         backgroundColor: '#f8f9fa',
//         borderTop: '1px solid #ddd',
//         display: 'flex',
//         justifyContent: 'center'
//       }}>
//         <div style={{
//           display: 'flex',
//           flexWrap: 'wrap',
//           justifyContent: 'center',
//           maxWidth: '600px'
//         }}>
//           <div style={{ display: 'flex', alignItems: 'center', margin: '0 15px 5px 0' }}>
//             <div style={{ 
//               width: '16px', 
//               height: '16px', 
//               marginRight: '8px', 
//               borderRadius: '3px', 
//               backgroundColor: '#4285F4',
//               border: '1px solid #ccc' 
//             }}></div>
//             <span>Government</span>
//           </div>
//           <div style={{ display: 'flex', alignItems: 'center', margin: '0 15px 5px 0' }}>
//             <div style={{ 
//               width: '16px', 
//               height: '16px', 
//               marginRight: '8px', 
//               borderRadius: '3px', 
//               backgroundColor: '#EA4335',
//               border: '1px solid #ccc' 
//             }}></div>
//             <span>Diplomatic</span>
//           </div>
//           <div style={{ display: 'flex', alignItems: 'center', margin: '0 15px 5px 0' }}>
//             <div style={{ 
//               width: '16px', 
//               height: '16px', 
//               marginRight: '8px', 
//               borderRadius: '3px', 
//               backgroundColor: '#FBBC05',
//               border: '1px solid #ccc' 
//             }}></div>
//             <span>Business</span>
//           </div>
//           <div style={{ display: 'flex', alignItems: 'center', margin: '0 15px 5px 0' }}>
//             <div style={{ 
//               width: '16px', 
//               height: '16px', 
//               marginRight: '8px', 
//               borderRadius: '3px', 
//               backgroundColor: '#34A853',
//               border: '1px solid #ccc' 
//             }}></div>
//             <span>Industry Organisations</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FinnishNetworkGraph;



































































// import React, { useEffect, useRef, useState } from 'react';
// import * as d3 from 'd3';
// import {
//   symbol,
//   symbolCircle,
//   symbolSquare,
//   symbolTriangle,
//   symbolDiamond,
//   symbolStar
// } from 'd3-shape';






// // Network data
// const networkData = {
//   nodes: [
//     { id: "1", label: "H.E. Sandra Bergqvist", title: "Minister of Youth, Sport and Physical Activity", sector: "Government" },
//     { id: "2", label: "H.E. Anna-Kaisa Ikonen", title: "Minister of Local and Regional Government", sector: "Government" },
//     { id: "3", label: "H.E. Alexander Stubb", title: "President of the Republic of Finland", sector: "Government" },
//     { id: "4", label: "H.E. Tuula Yrjölä", title: "Ambassador of Finland to the UAE", sector: "Government" },
//     { id: "5", label: "H.E. Anna-Mari Wong Hämäläinen", title: "Director of Foreign and Security Policy", sector: "Government" },
//     { id: "6", label: "Dr. Ville Brummer", title: "Director of Peace Mediation", sector: "Government" },
//     { id: "7", label: "H.E. Elina Valtonen", title: "Minister of Foreign Affairs", sector: "Government" },
//     { id: "8", label: "Laila Clyne", title: "Diplomatic Advisor to the Minister of Foreign Affairs", sector: "Government" },
//     { id: "9", label: "H.E. Anna-Kaisa Heikkinen", title: "Director General, Department for Africa, the Middle East and Latin America", sector: "Government" },
//     { id: "10", label: "Anne M'Rabet", title: "Desk Officer for the Persian Gulf", sector: "Government" },
//     { id: "11", label: "Antti Herlin", title: "Chairman of KONE Corporation", sector: "Business" },
//     { id: "12", label: "Justin Hotard", title: "Incoming CEO of Nokia", sector: "Business" },
//     { id: "13", label: "Pekka Lundmark", title: "Outgoing CEO of Nokia", sector: "Business" },
//     { id: "14", label: "Sari Baldauf", title: "Chairman of Nokia Board of Directors", sector: "Business" },
//     { id: "15", label: "Håkan Agnevall", title: "President & CEO of Wärtsilä Corporation", sector: "Business" },
//     { id: "16", label: "Ehrnrooth Family", title: "Key industrial dynasty representative", sector: "Business" },
//     { id: "17", label: "Nathalie Ahlström", title: "CEO of Fiskars Group", sector: "Business" },
//     { id: "18", label: "Erkko Family", title: "Media influence representative", sector: "Business" },
//     { id: "19", label: "Björn Wahlroos", title: "Banker and Investor", sector: "Business" },
//     { id: "20", label: "Jyri Häkämies", title: "Director General of EK", sector: "Business" },
//     { id: "21", label: "Seppo Vikkström", title: "Chairman of Isku Corporation", sector: "Business" },
//     { id: "22", label: "Lassi Noponen", title: "Director General of Business Finland", sector: "Government" },
//     { id: "23", label: "Markus Rauramo", title: "President & CEO of Fortum Corporation", sector: "Business" },
//     { id: "24", label: "Juho Romakkaniemi", title: "CEO of Finland Chamber of Commerce", sector: "Business" },
//     { id: "25", label: "H.E. Jussi Halla-aho", title: "Speaker of the Parliament of Finland", sector: "Government" },
//     // Third Party nodes
//     { id: "26", label: "Finnish Parliament", sector: "Third Party" },
//     { id: "27", label: "Swedish Assembly of Finland", sector: "Third Party" },
//     { id: "28", label: "Pargas City Executive", sector: "Third Party" },
//     { id: "29", label: "Association of Finnish Municipalities", sector: "Third Party" },
//     { id: "30", label: "Ministry of Education and Culture", sector: "Third Party" },
//     { id: "31", label: "Åbo Akademi University", sector: "Third Party" },
//     { id: "32", label: "City of Tampere", sector: "Third Party" },
//     { id: "33", label: "Ministry of Finance", sector: "Third Party" },
//     { id: "34", label: "Finnish Government", sector: "Third Party" },
//     { id: "35", label: "World Happiness Council", sector: "Third Party" },
//     { id: "36", label: "Finnish Embassy in Abu Dhabi", sector: "Third Party" },
//     { id: "37", label: "Team Finland", sector: "Third Party" },
//     { id: "38", label: "Anwar Gargash Diplomatic Academy", sector: "Third Party" },
//     { id: "39", label: "Cabinet of the President of Finland", sector: "Third Party" },
//     { id: "40", label: "Ministry for Foreign Affairs", sector: "Third Party" },
//     { id: "41", label: "NATO", sector: "Third Party" },
//     { id: "42", label: "Office of the President of Finland", sector: "Third Party" },
//     { id: "43", label: "CMI – Martti Ahtisaari Peace Foundation", sector: "Third Party" },
//     { id: "44", label: "UN Group of Friends of Mediation", sector: "Third Party" },
//     { id: "45", label: "UN General Assembly", sector: "Third Party" },
//     { id: "46", label: "Finnish Permanent Mission in Geneva", sector: "Third Party" },
//     { id: "47", label: "Finnish Permanent Mission in New York", sector: "Third Party" },
//     { id: "48", label: "Dubai Electricity and Water Authority (DEWA)", sector: "Third Party" },
//     { id: "49", label: "GCC", sector: "Third Party" },
//     { id: "50", label: "OIC", sector: "Third Party" },
//     { id: "51", label: "KONE Corporation", sector: "Third Party" },
//     { id: "52", label: "Nokia", sector: "Third Party" },
//     { id: "53", label: "Hewlett Packard Enterprise", sector: "Third Party" },
//     { id: "54", label: "UAE Ministry of AI", sector: "Third Party" },
//     { id: "55", label: "Wärtsilä Corporation", sector: "Third Party" },
//     { id: "56", label: "ADIPEC", sector: "Third Party" },
//     { id: "57", label: "Fiskars", sector: "Third Party" },
//     { id: "58", label: "Pöyry/AFRY", sector: "Third Party" },
//     { id: "59", label: "Sanoma Corporation", sector: "Third Party" },
//     { id: "60", label: "Helsingin Sanomat", sector: "Third Party" },
//     { id: "61", label: "Sampo Group", sector: "Third Party" },
//     { id: "62", label: "Nordea Bank", sector: "Third Party" },
//     { id: "63", label: "UPM-Kymmene", sector: "Third Party" },
//     { id: "64", label: "Abu Dhabi Investment Authority (ADIA)", sector: "Third Party" },
//     { id: "65", label: "Saxo Bank", sector: "Third Party" },
//     { id: "66", label: "Finnish Confederation of Industries (EK)", sector: "Third Party" },
//     { id: "67", label: "Finns Party", sector: "Third Party" },
//     { id: "68", label: "Fiskars Group", sector: "Third Party" },
//     { id: "69", label: "Iittala", sector: "Third Party" },
//     { id: "70", label: "Royal Copenhagen", sector: "Third Party" },
//     { id: "71", label: "Expo 2020 Dubai", sector: "Third Party" },
//     { id: "72", label: "ISKU", sector: "Third Party" },
//     { id: "73", label: "Finnish Business Council in Dubai", sector: "Third Party" },
//     { id: "74", label: "Business Finland", sector: "Third Party" },
//     { id: "75", label: "Fortum", sector: "Third Party" },
//     { id: "76", label: "Finland Chamber of Commerce (FCC)", sector: "Third Party" },
//     { id: "77", label: "UAE-Finland Business Council", sector: "Third Party" }
//   ],
//   links: [
//     { source: "1", target: "26", label: "Executive Collaboration" },
//     { source: "1", target: "27", label: "Executive Collaboration" },
//     { source: "1", target: "28", label: "Executive Collaboration" },
//     { source: "1", target: "29", label: "Executive Collaboration" },
//     { source: "1", target: "30", label: "Executive Collaboration" },
//     { source: "1", target: "31", label: "Executive Collaboration" },
//     { source: "2", target: "32", label: "Executive Collaboration" },
//     { source: "2", target: "33", label: "Executive Collaboration" },
//     { source: "2", target: "26", label: "Executive Collaboration" },
//     { source: "3", target: "34", label: "Executive Collaboration" },
//     { source: "3", target: "35", label: "Executive Collaboration" },
//     { source: "4", target: "36", label: "Diplomatic Representation" },
//     { source: "4", target: "37", label: "Diplomatic Representation" },
//     { source: "4", target: "38", label: "Diplomatic Representation" },
//     { source: "5", target: "39", label: "Advisory Link" },
//     { source: "5", target: "40", label: "Advisory Link" },
//     { source: "5", target: "41", label: "Advisory Link" },
//     { source: "6", target: "42", label: "Advisory Link" },
//     { source: "6", target: "43", label: "Advisory Link" },
//     { source: "6", target: "44", label: "Advisory Link" },
//     { source: "7", target: "40", label: "Executive Coordination" },
//     { source: "7", target: "45", label: "Executive Coordination" },
//     { source: "8", target: "40", label: "Advisory Relationship" },
//     { source: "8", target: "46", label: "Advisory Relationship" },
//     { source: "8", target: "47", label: "Advisory Relationship" },
//     { source: "9", target: "40", label: "Ministry Collaboration" },
//     { source: "9", target: "48", label: "Ministry Collaboration" },
//     { source: "10", target: "40", label: "Ministry Collaboration" },
//     { source: "10", target: "49", label: "Ministry Collaboration" },
//     { source: "10", target: "50", label: "Ministry Collaboration" },
//     { source: "11", target: "51", label: "Corporate Interaction" },
//     { source: "12", target: "52", label: "Corporate Interaction" },
//     { source: "12", target: "53", label: "Corporate Interaction" },
//     { source: "13", target: "52", label: "Corporate Transition" },
//     { source: "14", target: "52", label: "Board Oversight" },
//     { source: "14", target: "54", label: "Board Oversight" },
//     { source: "15", target: "55", label: "Industry Collaboration" },
//     { source: "15", target: "56", label: "Industry Collaboration" },
//     { source: "16", target: "20", label: "Industrial Partnership" },
//     { source: "17", target: "20", label: "Corporate Networking" },
//     { source: "18", target: "20", label: "Media and Business Link" },
//     { source: "19", target: "20", label: "Financial Leadership" },
//     { source: "16", target: "17", label: "Industrial Synergy" },
//     { source: "18", target: "17", label: "Cultural Synergy" },
//     { source: "19", target: "16", label: "Financial & Industrial Investment" },
//     { source: "19", target: "24", label: "Financial Advisory" },
//     { source: "20", target: "22", label: "Industry-Government Liaison" },
//     { source: "21", target: "22", label: "SME & Trade Promotion" },
//     { source: "24", target: "22", label: "Trade Promotion Link" },
//     { source: "23", target: "20", label: "Energy Sector Collaboration" },
//     { source: "23", target: "24", label: "Energy Trade Partnership" },
//     { source: "24", target: "25", label: "Legislative-Trade Interface" },
//     { source: "3", target: "24", label: "State-Business Bridge" },
//     { source: "3", target: "20", label: "Government-Industry Link" },
//     { source: "7", target: "22", label: "Foreign Policy to Trade Link" },
//     { source: "25", target: "20", label: "Legislative-Business Oversight" },
//     { source: "16", target: "24", label: "Family-Chamber Synergy" },
//     { source: "18", target: "24", label: "Media-Trade Collaboration" },
//     { source: "7", target: "4", label: "Diplomatic Implementation" },
//     // Additional links for third party nodes
//     { source: "17", target: "57", label: "Corporate Branding" },
//     { source: "16", target: "58", label: "Strategic Investment" },
//     { source: "18", target: "59", label: "Media Ownership" },
//     { source: "18", target: "60", label: "Media Influence" },
//     { source: "19", target: "61", label: "Corporate Investment" },
//     { source: "19", target: "62", label: "Corporate Investment" },
//     { source: "19", target: "63", label: "Corporate Oversight" },
//     { source: "19", target: "64", label: "Financial Partnership" },
//     { source: "19", target: "65", label: "Investment Link" },
//     { source: "20", target: "66", label: "Industry Advocacy" },
//     { source: "25", target: "67", label: "Political Oversight" },
//     { source: "17", target: "68", label: "Corporate Synergy" },
//     { source: "17", target: "69", label: "Product Collaboration" },
//     { source: "17", target: "70", label: "Design Partnership" },
//     { source: "17", target: "71", label: "Market Exposure" },
//     { source: "21", target: "72", label: "Corporate Interaction" },
//     { source: "21", target: "73", label: "Trade Promotion" },
//     { source: "22", target: "74", label: "Trade Promotion" },
//     { source: "23", target: "75", label: "Energy Partnership" },
//     { source: "24", target: "76", label: "Trade Facilitation" },
//     { source: "24", target: "77", label: "Business Networking" }
//   ]
// };


// const FinnishNetworkGraph = ({ networkData }) => {
//   const svgRef = useRef(null);
//   const tooltipRef = useRef(null);

//   // State variables
//   const [searchText, setSearchText] = useState('');
//   const [showEdgeLabels, setShowEdgeLabels] = useState(false);
//   const [layout, setLayout] = useState('force'); // "force" or "radial"
//   const [simulationRef] = useState({ current: null });

//   /**
//    * Colour each node by its sector.
//    * Adjust or add sectors as you see fit.
//    */
//   const getSectorColor = (sector) => {
//     switch (sector) {
//       case 'Government':
//         return '#4285F4'; // Blue
//       case 'Diplomatic':
//         return '#EA4335'; // Red
//       case 'Business':
//         return '#FBBC05'; // Yellow
//       case 'Industry Organisations':
//         return '#34A853'; // Green
//       case 'Third Party':
//         return '#9C27B0'; // Purple
//       default:
//         return '#999999'; // Fallback
//     }
//   };

//   /**
//    * Shape each node by its sector.
//    * Adjust as needed for Diplomatic or Industry if you want distinct shapes.
//    */
//   const getSectorShape = (sector) => {
//     switch (sector) {
//       case 'Government':
//         return symbolSquare;
//       case 'Business':
//         return symbolCircle;
//       case 'Third Party':
//         return symbolTriangle;
//       case 'Diplomatic':
//         return symbolDiamond;
//       case 'Industry Organisations':
//         return symbolStar; // or symbolCircle if you prefer
//       default:
//         return symbolCircle; // fallback shape
//     }
//   };

//   /**
//    * Apply a simple radial layout: place nodes evenly around a circle.
//    * (No force simulation.)
//    */
//   const applyRadialLayout = (nodes, width, height) => {
//     const radius = Math.min(width, height) / 2.5;
//     const angleStep = (2 * Math.PI) / nodes.length;
//     nodes.forEach((node, i) => {
//       const angle = i * angleStep;
//       node.x = width / 2 + radius * Math.cos(angle);
//       node.y = height / 2 + radius * Math.sin(angle);
//     });
//   };

//   /**
//    * Create or update the network visualisation.
//    */
//   const createVisualization = () => {
//     if (!svgRef.current || !networkData) return;

//     // Stop any existing simulation
//     if (simulationRef.current) {
//       simulationRef.current.stop();
//     }

//     // Clear existing content
//     d3.select(svgRef.current).selectAll('*').remove();

//     const width = 980;
//     const height = 700;

//     // Create the SVG container with fixed dimensions
//     const svg = d3
//       .select(svgRef.current)
//       .attr('viewBox', [0, 0, width, height])
//       .attr('width', '100%')
//       .attr('height', '100%');

//     // Create a tooltip div
//     const tooltip = d3
//       .select(tooltipRef.current)
//       .style('position', 'absolute')
//       .style('visibility', 'hidden')
//       .style('background-color', 'rgba(50, 50, 50, 0.9)')
//       .style('color', 'white')
//       .style('padding', '10px')
//       .style('border-radius', '6px')
//       .style('font-size', '14px')
//       .style('max-width', '300px')
//       .style('z-index', '1000');

//     // Create updated node data with colour
//     const nodes = networkData.nodes.map((node) => ({
//       ...node,
//       color: getSectorColor(node.sector)
//     }));

//     // Process links so they reference node objects
//     const links = networkData.links.map((link) => ({
//       ...link,
//       source: nodes.find((node) => node.id === link.source) || link.source,
//       target: nodes.find((node) => node.id === link.target) || link.target
//     }));

//     // Container group for everything
//     const container = svg.append('g');

//     // Zoom behaviour
//     const zoom = d3
//       .zoom()
//       .scaleExtent([0.2, 2])
//       .on('zoom', (event) => {
//         container.attr('transform', event.transform);
//       });

//     svg.call(zoom);

//     // Add arrowheads
//     svg
//       .append('defs')
//       .selectAll('marker')
//       .data(['end'])
//       .join('marker')
//       .attr('id', 'arrow')
//       .attr('viewBox', '0 -5 10 10')
//       .attr('refX', 20)
//       .attr('refY', 0)
//       .attr('markerWidth', 6)
//       .attr('markerHeight', 6)
//       .attr('orient', 'auto')
//       .append('path')
//       .attr('fill', '#999')
//       .attr('d', 'M0,-5L10,0L0,5');

//     // Add links
//     const link = container
//       .append('g')
//       .selectAll('line')
//       .data(links)
//       .join('line')
//       .attr('stroke', '#999')
//       .attr('stroke-width', 1.5)
//       .attr('marker-end', 'url(#arrow)');

//     // Add edge labels (conditionally visible)
//     const edgeLabels = container
//       .append('g')
//       .selectAll('text')
//       .data(links)
//       .join('text')
//       .attr('font-size', '8px')
//       .attr('text-anchor', 'middle')
//       .attr('dy', -5)
//       .attr('fill', '#666')
//       .text((d) => (showEdgeLabels ? d.label : ''))
//       .style('pointer-events', 'none');

//     // If using a force layout, set up the simulation
//     let simulation = null;

//     if (layout === 'force') {
//       simulation = d3
//         .forceSimulation(nodes)
//         .force('link', d3.forceLink(links).id((d) => d.id).distance(120))
//         .force('charge', d3.forceManyBody().strength(-500))
//         .force('center', d3.forceCenter(width / 2, height / 2))
//         .force('collide', d3.forceCollide().radius(50));

//       simulationRef.current = simulation;
//     } else {
//       // Radial or any other layout
//       applyRadialLayout(nodes, width, height);
//     }

//     // Create a D3 symbol generator
//     const symbolGenerator = d3.symbol().size(400);

//     // Create node groups
//     const node = container
//       .append('g')
//       .selectAll('g')
//       .data(nodes)
//       .join('g');

//     // Add shapes for nodes based on sector
//     node
//       .append('path')
//       .attr('d', (d) => {
//         symbolGenerator.type(getSectorShape(d.sector));
//         return symbolGenerator();
//       })
//       .attr('fill', (d) => d.color)
//       .attr('stroke', '#999')
//       .attr('stroke-width', 1.5);

//     // Short text labels (e.g. last name)
//     node
//       .append('text')
//       .attr('dy', 25)
//       .attr('text-anchor', 'middle')
//       .text((d) => {
//         // Return just the last word for brevity
//         const nameParts = d.label.split(' ');
//         return nameParts[nameParts.length - 1];
//       })
//       .attr('font-size', '10px')
//       .attr('fill', '#333');

//     // Handle dragging only in force layout
//     if (layout === 'force') {
//       node.call(
//         d3
//           .drag()
//           .on('start', dragstarted)
//           .on('drag', dragged)
//           .on('end', dragended)
//       );
//     }

//     // Mouse events
//     node
//       .on('mouseover', function (event, d) {
//         // Expand shape's text label to the full label
//         d3.select(this).select('text').text(d.label);

//         tooltip
//           .html(`<strong>${d.label}</strong><br>${d.title || ''}`)
//           .style('visibility', 'visible')
//           .style('left', event.pageX + 10 + 'px')
//           .style('top', event.pageY + 10 + 'px');
//       })
//       .on('mousemove', function (event) {
//         tooltip
//           .style('left', event.pageX + 10 + 'px')
//           .style('top', event.pageY + 10 + 'px');
//       })
//       .on('mouseout', function (event, d) {
//         // Revert to short label
//         const nameParts = d.label.split(' ');
//         d3.select(this).select('text').text(nameParts[nameParts.length - 1]);

//         tooltip.style('visibility', 'hidden');
//       });

//     link
//       .on('mouseover', function (event, d) {
//         const sourceNode = d.source;
//         const targetNode = d.target;
//         tooltip
//           .html(
//             `<strong>${d.label}</strong>: ${sourceNode.label} → ${targetNode.label}`
//           )
//           .style('visibility', 'visible')
//           .style('left', event.pageX + 10 + 'px')
//           .style('top', event.pageY + 10 + 'px');
//         d3.select(this).attr('stroke-width', 3);
//       })
//       .on('mousemove', function (event) {
//         tooltip
//           .style('left', event.pageX + 10 + 'px')
//           .style('top', event.pageY + 10 + 'px');
//       })
//       .on('mouseout', function () {
//         tooltip.style('visibility', 'hidden');
//         d3.select(this).attr('stroke-width', 1.5);
//       });

//     // Update positions on each tick (force layout only)
//     if (simulation) {
//       simulation.on('tick', () => {
//         // Keep nodes in bounds
//         nodes.forEach((d) => {
//           d.x = Math.max(30, Math.min(width - 30, d.x));
//           d.y = Math.max(30, Math.min(height - 30, d.y));
//         });

//         link
//           .attr('x1', (d) => d.source.x)
//           .attr('y1', (d) => d.source.y)
//           .attr('x2', (d) => d.target.x)
//           .attr('y2', (d) => d.target.y);

//         node.attr('transform', (d) => `translate(${d.x},${d.y})`);

//         edgeLabels
//           .attr('x', (d) => (d.source.x + d.target.x) / 2)
//           .attr('y', (d) => (d.source.y + d.target.y) / 2);
//       });

//       // Kickstart the layout
//       simulation.alpha(0.3).restart();
//     } else {
//       // For radial layout or others without force simulation,
//       // just set the positions once
//       link
//         .attr('x1', (d) => d.source.x)
//         .attr('y1', (d) => d.source.y)
//         .attr('x2', (d) => d.target.x)
//         .attr('y2', (d) => d.target.y);

//       node.attr('transform', (d) => `translate(${d.x},${d.y})`);

//       edgeLabels
//         .attr('x', (d) => (d.source.x + d.target.x) / 2)
//         .attr('y', (d) => (d.source.y + d.target.y) / 2);
//     }

//     // Drag callbacks
//     function dragstarted(event, d) {
//       if (!event.active && simulation) simulation.alphaTarget(0.3).restart();
//       d.fx = d.x;
//       d.fy = d.y;
//     }

//     function dragged(event, d) {
//       d.fx = Math.max(30, Math.min(width - 30, event.x));
//       d.fy = Math.max(30, Math.min(height - 30, event.y));
//     }

//     function dragended(event, d) {
//       if (!event.active && simulation) simulation.alphaTarget(0);
//       // Keep the node in place
//       d.fx = d.x;
//       d.fy = d.y;
//     }
//   };

//   // Re-render on mount or when layout / showEdgeLabels changes
//   useEffect(() => {
//     createVisualization();
//     return () => {
//       if (simulationRef.current) {
//         simulationRef.current.stop();
//       }
//     };
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [layout, showEdgeLabels]);

//   // Re-apply edge label toggling
//   useEffect(() => {
//     if (!svgRef.current) return;
//     // Re-select link texts
//     const processedLinks = Array.from(
//       d3.select(svgRef.current).selectAll('line').data()
//     );

//     d3.select(svgRef.current)
//       .selectAll('text')
//       .filter(function () {
//         // Filter to select only edge labels, not node labels
//         return this.parentNode?.tagName === 'g' && !this.__data__?.label?.includes('H.E.');
//       })
//       .data(processedLinks)
//       .text((d) => (showEdgeLabels ? d.label : ''));
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [showEdgeLabels]);

//   // Handle search
//   const handleSearch = () => {
//     if (!searchText || !svgRef.current) return;

//     // Reset all node shapes to default style
//     d3.select(svgRef.current)
//       .selectAll('path')
//       .attr('stroke', '#999')
//       .attr('stroke-width', 1.5);

//     // Highlight matching nodes
//     const searchLower = searchText.toLowerCase();
//     d3.select(svgRef.current)
//       .selectAll('g > g')
//       .filter(function (d) {
//         if (!d) return false;
//         return (
//           d.label.toLowerCase().includes(searchLower) ||
//           (d.title || '').toLowerCase().includes(searchLower)
//         );
//       })
//       .select('path')
//       .attr('stroke', '#FF9800')
//       .attr('stroke-width', 3);
//   };

//   // Fit to view
//   const handleFitToView = () => {
//     if (!svgRef.current) return;
//     const svg = d3.select(svgRef.current);
//     const width = parseInt(svg.style('width'));
//     const height = parseInt(svg.style('height'));
//     svg.call(
//       d3.zoom().transform,
//       d3.zoomIdentity.translate(width / 2, height / 2).scale(0.8)
//     );
//   };

//   // Reset layout (just re-run createVisualization)
//   const handleResetLayout = () => {
//     createVisualization();
//   };

//   // Toggle edge labels
//   const handleToggleLabels = () => {
//     setShowEdgeLabels(!showEdgeLabels);
//   };

//   // Layout dropdown
//   const handleLayoutChange = (e) => {
//     setLayout(e.target.value);
//   };

//   return (
//     <div
//       style={{
//         display: 'flex',
//         flexDirection: 'column',
//         maxWidth: '1100px',
//         margin: '0 auto',
//         border: '1px solid #ddd',
//         borderRadius: '8px',
//         overflow: 'hidden',
//         boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
//         backgroundColor: '#ffffff'
//       }}
//     >
//       <div
//         style={{
//           textAlign: 'center',
//           padding: '15px',
//           borderBottom: '1px solid #ddd',
//           backgroundColor: '#f8f9fa'
//         }}
//       >
//         <h2 style={{ margin: 0, color: '#333', fontSize: '22px' }}>
//           Finnish Leadership Network
//         </h2>
//       </div>

//       <div
//         style={{
//           padding: '10px',
//           backgroundColor: '#f0f0f0',
//           borderBottom: '1px solid #ddd',
//           display: 'flex',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//           flexWrap: 'wrap'
//         }}
//       >
//         <div>
//           <button
//             onClick={handleFitToView}
//             style={{
//               backgroundColor: '#1e88e5',
//               color: 'white',
//               border: 'none',
//               padding: '8px 12px',
//               margin: '0 5px 5px 0',
//               borderRadius: '4px',
//               cursor: 'pointer',
//               fontSize: '14px'
//             }}
//           >
//             Fit to View
//           </button>
//           <button
//             onClick={handleResetLayout}
//             style={{
//               backgroundColor: '#1e88e5',
//               color: 'white',
//               border: 'none',
//               padding: '8px 12px',
//               margin: '0 5px 5px 0',
//               borderRadius: '4px',
//               cursor: 'pointer',
//               fontSize: '14px'
//             }}
//           >
//             Reset Layout
//           </button>
//           <button
//             onClick={handleToggleLabels}
//             style={{
//               backgroundColor: '#1e88e5',
//               color: 'white',
//               border: 'none',
//               padding: '8px 12px',
//               margin: '0 5px 5px 0',
//               borderRadius: '4px',
//               cursor: 'pointer',
//               fontSize: '14px'
//             }}
//           >
//             {showEdgeLabels ? 'Hide Edge Labels' : 'Show Edge Labels'}
//           </button>
//         </div>

//         {/* Layout dropdown */}
//         <div style={{ display: 'flex', alignItems: 'center' }}>
//           <select
//             value={layout}
//             onChange={handleLayoutChange}
//             style={{
//               marginRight: '10px',
//               padding: '6px',
//               borderRadius: '4px',
//               border: '1px solid #ccc'
//             }}
//           >
//             <option value="force">Force Layout</option>
//             <option value="radial">Radial Layout</option>
//           </select>

//           <input
//             type="text"
//             value={searchText}
//             onChange={(e) => setSearchText(e.target.value)}
//             onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
//             placeholder="Search nodes..."
//             style={{
//               padding: '6px 8px',
//               border: '1px solid #ccc',
//               borderRadius: '4px',
//               marginRight: '5px'
//             }}
//           />
//           <button
//             onClick={handleSearch}
//             style={{
//               backgroundColor: '#1e88e5',
//               color: 'white',
//               border: 'none',
//               padding: '8px 12px',
//               margin: '0',
//               borderRadius: '4px',
//               cursor: 'pointer',
//               fontSize: '14px'
//             }}
//           >
//             Search
//           </button>
//         </div>
//       </div>

//       <div style={{ position: 'relative', height: '700px', width: '100%' }}>
//         <svg
//           ref={svgRef}
//           style={{
//             width: '100%',
//             height: '100%',
//             display: 'block',
//             backgroundColor: '#fff'
//           }}
//         />
//         <div ref={tooltipRef}></div>
//       </div>

//       {/* Legend (colours only) */}
//       <div
//         style={{
//           padding: '10px',
//           backgroundColor: '#f8f9fa',
//           borderTop: '1px solid #ddd',
//           display: 'flex',
//           justifyContent: 'center'
//         }}
//       >
//         <div
//           style={{
//             display: 'flex',
//             flexWrap: 'wrap',
//             justifyContent: 'center',
//             maxWidth: '700px'
//           }}
//         >
//           <LegendItem color="#4285F4" label="Government" />
//           <LegendItem color="#EA4335" label="Diplomatic" />
//           <LegendItem color="#FBBC05" label="Business" />
//           <LegendItem color="#34A853" label="Industry Organisations" />
//           <LegendItem color="#9C27B0" label="Third Party" />
//         </div>
//       </div>
//     </div>
//   );
// };

// /**
//  * Simple helper component for the legend entries.
//  */
// const LegendItem = ({ color, label }) => (
//   <div
//     style={{
//       display: 'flex',
//       alignItems: 'center',
//       margin: '0 15px 5px 0'
//     }}
//   >
//     <div
//       style={{
//         width: '16px',
//         height: '16px',
//         marginRight: '8px',
//         borderRadius: '3px',
//         backgroundColor: color,
//         border: '1px solid #ccc'
//       }}
//     ></div>
//     <span>{label}</span>
//   </div>
// );

// export default FinnishNetworkGraph;





















// import React, { useEffect, useRef, useState } from 'react';
// import * as d3 from 'd3';
// import {
//   symbol,
//   symbolCircle,
//   symbolSquare,
//   symbolTriangle,
//   symbolDiamond,
//   symbolStar
// } from 'd3-shape';

// // 1) Here is your data:

// // Network data
// const networkData = {
//   nodes: [
//     { id: "1", label: "H.E. Sandra Bergqvist", title: "Minister of Youth, Sport and Physical Activity", sector: "Government" },
//     { id: "2", label: "H.E. Anna-Kaisa Ikonen", title: "Minister of Local and Regional Government", sector: "Government" },
//     { id: "3", label: "H.E. Alexander Stubb", title: "President of the Republic of Finland", sector: "Government" },
//     { id: "4", label: "H.E. Tuula Yrjölä", title: "Ambassador of Finland to the UAE", sector: "Government" },
//     { id: "5", label: "H.E. Anna-Mari Wong Hämäläinen", title: "Director of Foreign and Security Policy", sector: "Government" },
//     { id: "6", label: "Dr. Ville Brummer", title: "Director of Peace Mediation", sector: "Government" },
//     { id: "7", label: "H.E. Elina Valtonen", title: "Minister of Foreign Affairs", sector: "Government" },
//     { id: "8", label: "Laila Clyne", title: "Diplomatic Advisor to the Minister of Foreign Affairs", sector: "Government" },
//     { id: "9", label: "H.E. Anna-Kaisa Heikkinen", title: "Director General, Department for Africa, the Middle East and Latin America", sector: "Government" },
//     { id: "10", label: "Anne M'Rabet", title: "Desk Officer for the Persian Gulf", sector: "Government" },
//     { id: "11", label: "Antti Herlin", title: "Chairman of KONE Corporation", sector: "Business" },
//     { id: "12", label: "Justin Hotard", title: "Incoming CEO of Nokia", sector: "Business" },
//     { id: "13", label: "Pekka Lundmark", title: "Outgoing CEO of Nokia", sector: "Business" },
//     { id: "14", label: "Sari Baldauf", title: "Chairman of Nokia Board of Directors", sector: "Business" },
//     { id: "15", label: "Håkan Agnevall", title: "President & CEO of Wärtsilä Corporation", sector: "Business" },
//     { id: "16", label: "Ehrnrooth Family", title: "Key industrial dynasty representative", sector: "Business" },
//     { id: "17", label: "Nathalie Ahlström", title: "CEO of Fiskars Group", sector: "Business" },
//     { id: "18", label: "Erkko Family", title: "Media influence representative", sector: "Business" },
//     { id: "19", label: "Björn Wahlroos", title: "Banker and Investor", sector: "Business" },
//     { id: "20", label: "Jyri Häkämies", title: "Director General of EK", sector: "Business" },
//     { id: "21", label: "Seppo Vikkström", title: "Chairman of Isku Corporation", sector: "Business" },
//     { id: "22", label: "Lassi Noponen", title: "Director General of Business Finland", sector: "Government" },
//     { id: "23", label: "Markus Rauramo", title: "President & CEO of Fortum Corporation", sector: "Business" },
//     { id: "24", label: "Juho Romakkaniemi", title: "CEO of Finland Chamber of Commerce", sector: "Business" },
//     { id: "25", label: "H.E. Jussi Halla-aho", title: "Speaker of the Parliament of Finland", sector: "Government" },
//     // Third Party nodes
//     { id: "26", label: "Finnish Parliament", sector: "Third Party" },
//     { id: "27", label: "Swedish Assembly of Finland", sector: "Third Party" },
//     { id: "28", label: "Pargas City Executive", sector: "Third Party" },
//     { id: "29", label: "Association of Finnish Municipalities", sector: "Third Party" },
//     { id: "30", label: "Ministry of Education and Culture", sector: "Third Party" },
//     { id: "31", label: "Åbo Akademi University", sector: "Third Party" },
//     { id: "32", label: "City of Tampere", sector: "Third Party" },
//     { id: "33", label: "Ministry of Finance", sector: "Third Party" },
//     { id: "34", label: "Finnish Government", sector: "Third Party" },
//     { id: "35", label: "World Happiness Council", sector: "Third Party" },
//     { id: "36", label: "Finnish Embassy in Abu Dhabi", sector: "Third Party" },
//     { id: "37", label: "Team Finland", sector: "Third Party" },
//     { id: "38", label: "Anwar Gargash Diplomatic Academy", sector: "Third Party" },
//     { id: "39", label: "Cabinet of the President of Finland", sector: "Third Party" },
//     { id: "40", label: "Ministry for Foreign Affairs", sector: "Third Party" },
//     { id: "41", label: "NATO", sector: "Third Party" },
//     { id: "42", label: "Office of the President of Finland", sector: "Third Party" },
//     { id: "43", label: "CMI – Martti Ahtisaari Peace Foundation", sector: "Third Party" },
//     { id: "44", label: "UN Group of Friends of Mediation", sector: "Third Party" },
//     { id: "45", label: "UN General Assembly", sector: "Third Party" },
//     { id: "46", label: "Finnish Permanent Mission in Geneva", sector: "Third Party" },
//     { id: "47", label: "Finnish Permanent Mission in New York", sector: "Third Party" },
//     { id: "48", label: "Dubai Electricity and Water Authority (DEWA)", sector: "Third Party" },
//     { id: "49", label: "GCC", sector: "Third Party" },
//     { id: "50", label: "OIC", sector: "Third Party" },
//     { id: "51", label: "KONE Corporation", sector: "Third Party" },
//     { id: "52", label: "Nokia", sector: "Third Party" },
//     { id: "53", label: "Hewlett Packard Enterprise", sector: "Third Party" },
//     { id: "54", label: "UAE Ministry of AI", sector: "Third Party" },
//     { id: "55", label: "Wärtsilä Corporation", sector: "Third Party" },
//     { id: "56", label: "ADIPEC", sector: "Third Party" },
//     { id: "57", label: "Fiskars", sector: "Third Party" },
//     { id: "58", label: "Pöyry/AFRY", sector: "Third Party" },
//     { id: "59", label: "Sanoma Corporation", sector: "Third Party" },
//     { id: "60", label: "Helsingin Sanomat", sector: "Third Party" },
//     { id: "61", label: "Sampo Group", sector: "Third Party" },
//     { id: "62", label: "Nordea Bank", sector: "Third Party" },
//     { id: "63", label: "UPM-Kymmene", sector: "Third Party" },
//     { id: "64", label: "Abu Dhabi Investment Authority (ADIA)", sector: "Third Party" },
//     { id: "65", label: "Saxo Bank", sector: "Third Party" },
//     { id: "66", label: "Finnish Confederation of Industries (EK)", sector: "Third Party" },
//     { id: "67", label: "Finns Party", sector: "Third Party" },
//     { id: "68", label: "Fiskars Group", sector: "Third Party" },
//     { id: "69", label: "Iittala", sector: "Third Party" },
//     { id: "70", label: "Royal Copenhagen", sector: "Third Party" },
//     { id: "71", label: "Expo 2020 Dubai", sector: "Third Party" },
//     { id: "72", label: "ISKU", sector: "Third Party" },
//     { id: "73", label: "Finnish Business Council in Dubai", sector: "Third Party" },
//     { id: "74", label: "Business Finland", sector: "Third Party" },
//     { id: "75", label: "Fortum", sector: "Third Party" },
//     { id: "76", label: "Finland Chamber of Commerce (FCC)", sector: "Third Party" },
//     { id: "77", label: "UAE-Finland Business Council", sector: "Third Party" }
//   ],
//   links: [
//     { source: "1", target: "26", label: "Executive Collaboration" },
//     { source: "1", target: "27", label: "Executive Collaboration" },
//     { source: "1", target: "28", label: "Executive Collaboration" },
//     { source: "1", target: "29", label: "Executive Collaboration" },
//     { source: "1", target: "30", label: "Executive Collaboration" },
//     { source: "1", target: "31", label: "Executive Collaboration" },
//     { source: "2", target: "32", label: "Executive Collaboration" },
//     { source: "2", target: "33", label: "Executive Collaboration" },
//     { source: "2", target: "26", label: "Executive Collaboration" },
//     { source: "3", target: "34", label: "Executive Collaboration" },
//     { source: "3", target: "35", label: "Executive Collaboration" },
//     { source: "4", target: "36", label: "Diplomatic Representation" },
//     { source: "4", target: "37", label: "Diplomatic Representation" },
//     { source: "4", target: "38", label: "Diplomatic Representation" },
//     { source: "5", target: "39", label: "Advisory Link" },
//     { source: "5", target: "40", label: "Advisory Link" },
//     { source: "5", target: "41", label: "Advisory Link" },
//     { source: "6", target: "42", label: "Advisory Link" },
//     { source: "6", target: "43", label: "Advisory Link" },
//     { source: "6", target: "44", label: "Advisory Link" },
//     { source: "7", target: "40", label: "Executive Coordination" },
//     { source: "7", target: "45", label: "Executive Coordination" },
//     { source: "8", target: "40", label: "Advisory Relationship" },
//     { source: "8", target: "46", label: "Advisory Relationship" },
//     { source: "8", target: "47", label: "Advisory Relationship" },
//     { source: "9", target: "40", label: "Ministry Collaboration" },
//     { source: "9", target: "48", label: "Ministry Collaboration" },
//     { source: "10", target: "40", label: "Ministry Collaboration" },
//     { source: "10", target: "49", label: "Ministry Collaboration" },
//     { source: "10", target: "50", label: "Ministry Collaboration" },
//     { source: "11", target: "51", label: "Corporate Interaction" },
//     { source: "12", target: "52", label: "Corporate Interaction" },
//     { source: "12", target: "53", label: "Corporate Interaction" },
//     { source: "13", target: "52", label: "Corporate Transition" },
//     { source: "14", target: "52", label: "Board Oversight" },
//     { source: "14", target: "54", label: "Board Oversight" },
//     { source: "15", target: "55", label: "Industry Collaboration" },
//     { source: "15", target: "56", label: "Industry Collaboration" },
//     { source: "16", target: "20", label: "Industrial Partnership" },
//     { source: "17", target: "20", label: "Corporate Networking" },
//     { source: "18", target: "20", label: "Media and Business Link" },
//     { source: "19", target: "20", label: "Financial Leadership" },
//     { source: "16", target: "17", label: "Industrial Synergy" },
//     { source: "18", target: "17", label: "Cultural Synergy" },
//     { source: "19", target: "16", label: "Financial & Industrial Investment" },
//     { source: "19", target: "24", label: "Financial Advisory" },
//     { source: "20", target: "22", label: "Industry-Government Liaison" },
//     { source: "21", target: "22", label: "SME & Trade Promotion" },
//     { source: "24", target: "22", label: "Trade Promotion Link" },
//     { source: "23", target: "20", label: "Energy Sector Collaboration" },
//     { source: "23", target: "24", label: "Energy Trade Partnership" },
//     { source: "24", target: "25", label: "Legislative-Trade Interface" },
//     { source: "3", target: "24", label: "State-Business Bridge" },
//     { source: "3", target: "20", label: "Government-Industry Link" },
//     { source: "7", target: "22", label: "Foreign Policy to Trade Link" },
//     { source: "25", target: "20", label: "Legislative-Business Oversight" },
//     { source: "16", target: "24", label: "Family-Chamber Synergy" },
//     { source: "18", target: "24", label: "Media-Trade Collaboration" },
//     { source: "7", target: "4", label: "Diplomatic Implementation" },
//     // Additional links for third party nodes
//     { source: "17", target: "57", label: "Corporate Branding" },
//     { source: "16", target: "58", label: "Strategic Investment" },
//     { source: "18", target: "59", label: "Media Ownership" },
//     { source: "18", target: "60", label: "Media Influence" },
//     { source: "19", target: "61", label: "Corporate Investment" },
//     { source: "19", target: "62", label: "Corporate Investment" },
//     { source: "19", target: "63", label: "Corporate Oversight" },
//     { source: "19", target: "64", label: "Financial Partnership" },
//     { source: "19", target: "65", label: "Investment Link" },
//     { source: "20", target: "66", label: "Industry Advocacy" },
//     { source: "25", target: "67", label: "Political Oversight" },
//     { source: "17", target: "68", label: "Corporate Synergy" },
//     { source: "17", target: "69", label: "Product Collaboration" },
//     { source: "17", target: "70", label: "Design Partnership" },
//     { source: "17", target: "71", label: "Market Exposure" },
//     { source: "21", target: "72", label: "Corporate Interaction" },
//     { source: "21", target: "73", label: "Trade Promotion" },
//     { source: "22", target: "74", label: "Trade Promotion" },
//     { source: "23", target: "75", label: "Energy Partnership" },
//     { source: "24", target: "76", label: "Trade Facilitation" },
//     { source: "24", target: "77", label: "Business Networking" }
//   ]
// };




// // 2) The same FinnishNetworkGraph component:
// function FinnishNetworkGraph({ networkData }) {
//   const svgRef = useRef(null);
//   const tooltipRef = useRef(null);

//   const [searchText, setSearchText] = useState('');
//   const [showEdgeLabels, setShowEdgeLabels] = useState(false);
//   const [layout, setLayout] = useState('force');
//   const [simulationRef] = useState({ current: null });

//   const getSectorColor = (sector) => {
//     switch (sector) {
//       case 'Government':
//         return '#4285F4';
//       case 'Diplomatic':
//         return '#EA4335';
//       case 'Business':
//         return '#FBBC05';
//       case 'Industry Organisations':
//         return '#34A853';
//       case 'Third Party':
//         return '#9C27B0';
//       default:
//         return '#999999';
//     }
//   };

//   const getSectorShape = (sector) => {
//     switch (sector) {
//       case 'Government':
//         return symbolSquare;
//       case 'Business':
//         return symbolCircle;
//       case 'Third Party':
//         return symbolTriangle;
//       case 'Diplomatic':
//         return symbolDiamond;
//       case 'Industry Organisations':
//         return symbolStar;
//       default:
//         return symbolCircle;
//     }
//   };

//   const applyRadialLayout = (nodes, width, height) => {
//     const radius = Math.min(width, height) / 2.5;
//     const angleStep = (2 * Math.PI) / nodes.length;
//     nodes.forEach((node, i) => {
//       const angle = i * angleStep;
//       node.x = width / 2 + radius * Math.cos(angle);
//       node.y = height / 2 + radius * Math.sin(angle);
//     });
//   };

//   const createVisualization = () => {
//     if (!svgRef.current || !networkData) return;

//     // Stop old sim
//     if (simulationRef.current) {
//       simulationRef.current.stop();
//     }

//     d3.select(svgRef.current).selectAll('*').remove();

//     const width = 980;
//     const height = 700;

//     const svg = d3
//       .select(svgRef.current)
//       .attr('viewBox', [0, 0, width, height])
//       .attr('width', '100%')
//       .attr('height', '100%');

//     const tooltip = d3
//       .select(tooltipRef.current)
//       .style('position', 'absolute')
//       .style('visibility', 'hidden')
//       .style('background-color', 'rgba(50, 50, 50, 0.9)')
//       .style('color', 'white')
//       .style('padding', '10px')
//       .style('border-radius', '6px')
//       .style('font-size', '14px')
//       .style('max-width', '300px')
//       .style('z-index', '1000');

//     const nodes = networkData.nodes.map((node) => ({
//       ...node,
//       color: getSectorColor(node.sector)
//     }));

//     const links = networkData.links.map((link) => ({
//       ...link,
//       source: nodes.find((n) => n.id === link.source) || link.source,
//       target: nodes.find((n) => n.id === link.target) || link.target
//     }));

//     const container = svg.append('g');

//     const zoom = d3
//       .zoom()
//       .scaleExtent([0.2, 2])
//       .on('zoom', (event) => container.attr('transform', event.transform));
//     svg.call(zoom);

//     svg
//       .append('defs')
//       .selectAll('marker')
//       .data(['end'])
//       .join('marker')
//       .attr('id', 'arrow')
//       .attr('viewBox', '0 -5 10 10')
//       .attr('refX', 20)
//       .attr('refY', 0)
//       .attr('markerWidth', 6)
//       .attr('markerHeight', 6)
//       .attr('orient', 'auto')
//       .append('path')
//       .attr('fill', '#999')
//       .attr('d', 'M0,-5L10,0L0,5');

//     const link = container
//       .append('g')
//       .selectAll('line')
//       .data(links)
//       .join('line')
//       .attr('stroke', '#999')
//       .attr('stroke-width', 1.5)
//       .attr('marker-end', 'url(#arrow)');

//     const edgeLabels = container
//       .append('g')
//       .selectAll('text')
//       .data(links)
//       .join('text')
//       .attr('font-size', '8px')
//       .attr('text-anchor', 'middle')
//       .attr('dy', -5)
//       .attr('fill', '#666')
//       .text((d) => (showEdgeLabels ? d.label : ''))
//       .style('pointer-events', 'none');

//     let simulation = null;
//     if (layout === 'force') {
//       simulation = d3
//         .forceSimulation(nodes)
//         .force('link', d3.forceLink(links).id((d) => d.id).distance(120))
//         .force('charge', d3.forceManyBody().strength(-500))
//         .force('center', d3.forceCenter(width / 2, height / 2))
//         .force('collide', d3.forceCollide().radius(50));

//       simulationRef.current = simulation;
//     } else {
//       applyRadialLayout(nodes, width, height);
//     }

//     const symbolGenerator = d3.symbol().size(400);

//     const node = container
//       .append('g')
//       .selectAll('g')
//       .data(nodes)
//       .join('g');

//     node
//       .append('path')
//       .attr('d', (d) => {
//         symbolGenerator.type(getSectorShape(d.sector));
//         return symbolGenerator();
//       })
//       .attr('fill', (d) => d.color)
//       .attr('stroke', '#999')
//       .attr('stroke-width', 1.5);

//     node
//       .append('text')
//       .attr('dy', 25)
//       .attr('text-anchor', 'middle')
//       .text((d) => {
//         const nameParts = d.label.split(' ');
//         return nameParts[nameParts.length - 1];
//       })
//       .attr('font-size', '10px')
//       .attr('fill', '#333');

//     if (layout === 'force') {
//       node.call(
//         d3
//           .drag()
//           .on('start', dragstarted)
//           .on('drag', dragged)
//           .on('end', dragended)
//       );
//     }

//     node
//       .on('mouseover', function (event, d) {
//         d3.select(this).select('text').text(d.label);
//         tooltip
//           .html(`<strong>${d.label}</strong><br>${d.title || ''}`)
//           .style('visibility', 'visible')
//           .style('left', event.pageX + 10 + 'px')
//           .style('top', event.pageY + 10 + 'px');
//       })
//       .on('mousemove', function (event) {
//         tooltip
//           .style('left', event.pageX + 10 + 'px')
//           .style('top', event.pageY + 10 + 'px');
//       })
//       .on('mouseout', function (event, d) {
//         const nameParts = d.label.split(' ');
//         d3.select(this).select('text').text(nameParts[nameParts.length - 1]);
//         tooltip.style('visibility', 'hidden');
//       });

//     link
//       .on('mouseover', function (event, d) {
//         const sourceNode = d.source;
//         const targetNode = d.target;
//         tooltip
//           .html(`<strong>${d.label}</strong>: ${sourceNode.label} → ${targetNode.label}`)
//           .style('visibility', 'visible')
//           .style('left', event.pageX + 10 + 'px')
//           .style('top', event.pageY + 10 + 'px');
//         d3.select(this).attr('stroke-width', 3);
//       })
//       .on('mousemove', function (event) {
//         tooltip
//           .style('left', event.pageX + 10 + 'px')
//           .style('top', event.pageY + 10 + 'px');
//       })
//       .on('mouseout', function () {
//         tooltip.style('visibility', 'hidden');
//         d3.select(this).attr('stroke-width', 1.5);
//       });

//     if (simulation) {
//       simulation.on('tick', () => {
//         nodes.forEach((d) => {
//           d.x = Math.max(30, Math.min(width - 30, d.x));
//           d.y = Math.max(30, Math.min(height - 30, d.y));
//         });
//         link
//           .attr('x1', (d) => d.source.x)
//           .attr('y1', (d) => d.source.y)
//           .attr('x2', (d) => d.target.x)
//           .attr('y2', (d) => d.target.y);
//         node.attr('transform', (d) => `translate(${d.x},${d.y})`);
//         edgeLabels
//           .attr('x', (d) => (d.source.x + d.target.x) / 2)
//           .attr('y', (d) => (d.source.y + d.target.y) / 2);
//       });
//       simulation.alpha(0.3).restart();
//     } else {
//       link
//         .attr('x1', (d) => d.source.x)
//         .attr('y1', (d) => d.source.y)
//         .attr('x2', (d) => d.target.x)
//         .attr('y2', (d) => d.target.y);
//       node.attr('transform', (d) => `translate(${d.x},${d.y})`);
//       edgeLabels
//         .attr('x', (d) => (d.source.x + d.target.x) / 2)
//         .attr('y', (d) => (d.source.y + d.target.y) / 2);
//     }

//     function dragstarted(event, d) {
//       if (!event.active && simulation) simulation.alphaTarget(0.3).restart();
//       d.fx = d.x;
//       d.fy = d.y;
//     }
//     function dragged(event, d) {
//       d.fx = Math.max(30, Math.min(width - 30, event.x));
//       d.fy = Math.max(30, Math.min(height - 30, event.y));
//     }
//     function dragended(event, d) {
//       if (!event.active && simulation) simulation.alphaTarget(0);
//       d.fx = d.x;
//       d.fy = d.y;
//     }
//   };

//   useEffect(() => {
//     createVisualization();
//     return () => {
//       if (simulationRef.current) {
//         simulationRef.current.stop();
//       }
//     };
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [layout, showEdgeLabels]);

//   useEffect(() => {
//     if (!svgRef.current) return;
//     const processedLinks = Array.from(
//       d3.select(svgRef.current).selectAll('line').data()
//     );
//     d3.select(svgRef.current)
//       .selectAll('text')
//       .filter(function () {
//         return this.parentNode?.tagName === 'g';
//       })
//       .data(processedLinks)
//       .text((d) => (showEdgeLabels ? d.label : ''));
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [showEdgeLabels]);

//   const handleSearch = () => {
//     if (!searchText || !svgRef.current) return;
//     d3.select(svgRef.current)
//       .selectAll('path')
//       .attr('stroke', '#999')
//       .attr('stroke-width', 1.5);

//     const searchLower = searchText.toLowerCase();
//     d3.select(svgRef.current)
//       .selectAll('g > g')
//       .filter((d) => {
//         if (!d) return false;
//         return (
//           d.label.toLowerCase().includes(searchLower) ||
//           (d.title || '').toLowerCase().includes(searchLower)
//         );
//       })
//       .select('path')
//       .attr('stroke', '#FF9800')
//       .attr('stroke-width', 3);
//   };

//   const handleFitToView = () => {
//     if (!svgRef.current) return;
//     const svg = d3.select(svgRef.current);
//     const width = parseInt(svg.style('width'));
//     const height = parseInt(svg.style('height'));
//     svg.call(
//       d3.zoom().transform,
//       d3.zoomIdentity.translate(width / 2, height / 2).scale(0.8)
//     );
//   };

//   const handleResetLayout = () => {
//     createVisualization();
//   };

//   const handleToggleLabels = () => {
//     setShowEdgeLabels(!showEdgeLabels);
//   };

//   const handleLayoutChange = (e) => {
//     setLayout(e.target.value);
//   };

//   return (
//     <div
//       style={{
//         display: 'flex',
//         flexDirection: 'column',
//         maxWidth: '1100px',
//         margin: '0 auto',
//         border: '1px solid #ddd',
//         borderRadius: '8px',
//         overflow: 'hidden',
//         boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
//         backgroundColor: '#ffffff'
//       }}
//     >
//       <div
//         style={{
//           textAlign: 'center',
//           padding: '15px',
//           borderBottom: '1px solid #ddd',
//           backgroundColor: '#f8f9fa'
//         }}
//       >
//         <h2 style={{ margin: 0, color: '#333', fontSize: '22px' }}>
//           Finnish Leadership Network
//         </h2>
//       </div>

//       <div
//         style={{
//           padding: '10px',
//           backgroundColor: '#f0f0f0',
//           borderBottom: '1px solid #ddd',
//           display: 'flex',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//           flexWrap: 'wrap'
//         }}
//       >
//         <div>
//           <button
//             onClick={handleFitToView}
//             style={{
//               backgroundColor: '#1e88e5',
//               color: 'white',
//               border: 'none',
//               padding: '8px 12px',
//               margin: '0 5px 5px 0',
//               borderRadius: '4px',
//               cursor: 'pointer',
//               fontSize: '14px'
//             }}
//           >
//             Fit to View
//           </button>
//           <button
//             onClick={handleResetLayout}
//             style={{
//               backgroundColor: '#1e88e5',
//               color: 'white',
//               border: 'none',
//               padding: '8px 12px',
//               margin: '0 5px 5px 0',
//               borderRadius: '4px',
//               cursor: 'pointer',
//               fontSize: '14px'
//             }}
//           >
//             Reset Layout
//           </button>
//           <button
//             onClick={handleToggleLabels}
//             style={{
//               backgroundColor: '#1e88e5',
//               color: 'white',
//               border: 'none',
//               padding: '8px 12px',
//               margin: '0 5px 5px 0',
//               borderRadius: '4px',
//               cursor: 'pointer',
//               fontSize: '14px'
//             }}
//           >
//             {showEdgeLabels ? 'Hide Edge Labels' : 'Show Edge Labels'}
//           </button>
//         </div>

//         <div style={{ display: 'flex', alignItems: 'center' }}>
//           <select
//             value={layout}
//             onChange={handleLayoutChange}
//             style={{
//               marginRight: '10px',
//               padding: '6px',
//               borderRadius: '4px',
//               border: '1px solid #ccc'
//             }}
//           >
//             <option value="force">Force Layout</option>
//             <option value="radial">Radial Layout</option>
//           </select>

//           <input
//             type="text"
//             value={searchText}
//             onChange={(e) => setSearchText(e.target.value)}
//             onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
//             placeholder="Search nodes..."
//             style={{
//               padding: '6px 8px',
//               border: '1px solid #ccc',
//               borderRadius: '4px',
//               marginRight: '5px'
//             }}
//           />
//           <button
//             onClick={handleSearch}
//             style={{
//               backgroundColor: '#1e88e5',
//               color: 'white',
//               border: 'none',
//               padding: '8px 12px',
//               margin: '0',
//               borderRadius: '4px',
//               cursor: 'pointer',
//               fontSize: '14px'
//             }}
//           >
//             Search
//           </button>
//         </div>
//       </div>

//       <div style={{ position: 'relative', height: '700px', width: '100%' }}>
//         <svg
//           ref={svgRef}
//           style={{
//             width: '100%',
//             height: '100%',
//             display: 'block',
//             backgroundColor: '#fff'
//           }}
//         />
//         <div ref={tooltipRef}></div>
//       </div>

//       <div
//         style={{
//           padding: '10px',
//           backgroundColor: '#f8f9fa',
//           borderTop: '1px solid #ddd',
//           display: 'flex',
//           justifyContent: 'center'
//         }}
//       >
//         <div
//           style={{
//             display: 'flex',
//             flexWrap: 'wrap',
//             justifyContent: 'center',
//             maxWidth: '700px'
//           }}
//         >
//           <LegendItem color="#4285F4" label="Government" />
//           <LegendItem color="#EA4335" label="Diplomatic" />
//           <LegendItem color="#FBBC05" label="Business" />
//           <LegendItem color="#34A853" label="Industry Organisations" />
//           <LegendItem color="#9C27B0" label="Third Party" />
//         </div>
//       </div>
//     </div>
//   );
// }

// const LegendItem = ({ color, label }) => (
//   <div
//     style={{
//       display: 'flex',
//       alignItems: 'center',
//       margin: '0 15px 5px 0'
//     }}
//   >
//     <div
//       style={{
//         width: '16px',
//         height: '16px',
//         marginRight: '8px',
//         borderRadius: '3px',
//         backgroundColor: color,
//         border: '1px solid #ccc'
//       }}
//     ></div>
//     <span>{label}</span>
//   </div>
// );

// // 3) Finally, export App so `npm start` can render it
// export default FinnishNetworkGraph;











































// // src/App.js
// import React, { useEffect, useRef, useState } from 'react';
// import * as d3 from 'd3';
// import {
//   symbol,
//   symbolCircle,
//   symbolSquare,
//   symbolTriangle,
//   symbolDiamond,
//   symbolStar
// } from 'd3-shape';

// // 1) Put your networkData here:

// // Network data
// const networkData = {
//   nodes: [
//     { id: "1", label: "H.E. Sandra Bergqvist", title: "Minister of Youth, Sport and Physical Activity", sector: "Government" },
//     { id: "2", label: "H.E. Anna-Kaisa Ikonen", title: "Minister of Local and Regional Government", sector: "Government" },
//     { id: "3", label: "H.E. Alexander Stubb", title: "President of the Republic of Finland", sector: "Government" },
//     { id: "4", label: "H.E. Tuula Yrjölä", title: "Ambassador of Finland to the UAE", sector: "Government" },
//     { id: "5", label: "H.E. Anna-Mari Wong Hämäläinen", title: "Director of Foreign and Security Policy", sector: "Government" },
//     { id: "6", label: "Dr. Ville Brummer", title: "Director of Peace Mediation", sector: "Government" },
//     { id: "7", label: "H.E. Elina Valtonen", title: "Minister of Foreign Affairs", sector: "Government" },
//     { id: "8", label: "Laila Clyne", title: "Diplomatic Advisor to the Minister of Foreign Affairs", sector: "Government" },
//     { id: "9", label: "H.E. Anna-Kaisa Heikkinen", title: "Director General, Department for Africa, the Middle East and Latin America", sector: "Government" },
//     { id: "10", label: "Anne M'Rabet", title: "Desk Officer for the Persian Gulf", sector: "Government" },
//     { id: "11", label: "Antti Herlin", title: "Chairman of KONE Corporation", sector: "Business" },
//     { id: "12", label: "Justin Hotard", title: "Incoming CEO of Nokia", sector: "Business" },
//     { id: "13", label: "Pekka Lundmark", title: "Outgoing CEO of Nokia", sector: "Business" },
//     { id: "14", label: "Sari Baldauf", title: "Chairman of Nokia Board of Directors", sector: "Business" },
//     { id: "15", label: "Håkan Agnevall", title: "President & CEO of Wärtsilä Corporation", sector: "Business" },
//     { id: "16", label: "Ehrnrooth Family", title: "Key industrial dynasty representative", sector: "Business" },
//     { id: "17", label: "Nathalie Ahlström", title: "CEO of Fiskars Group", sector: "Business" },
//     { id: "18", label: "Erkko Family", title: "Media influence representative", sector: "Business" },
//     { id: "19", label: "Björn Wahlroos", title: "Banker and Investor", sector: "Business" },
//     { id: "20", label: "Jyri Häkämies", title: "Director General of EK", sector: "Business" },
//     { id: "21", label: "Seppo Vikkström", title: "Chairman of Isku Corporation", sector: "Business" },
//     { id: "22", label: "Lassi Noponen", title: "Director General of Business Finland", sector: "Government" },
//     { id: "23", label: "Markus Rauramo", title: "President & CEO of Fortum Corporation", sector: "Business" },
//     { id: "24", label: "Juho Romakkaniemi", title: "CEO of Finland Chamber of Commerce", sector: "Business" },
//     { id: "25", label: "H.E. Jussi Halla-aho", title: "Speaker of the Parliament of Finland", sector: "Government" },
//     // Third Party nodes
//     { id: "26", label: "Finnish Parliament", sector: "Third Party" },
//     { id: "27", label: "Swedish Assembly of Finland", sector: "Third Party" },
//     { id: "28", label: "Pargas City Executive", sector: "Third Party" },
//     { id: "29", label: "Association of Finnish Municipalities", sector: "Third Party" },
//     { id: "30", label: "Ministry of Education and Culture", sector: "Third Party" },
//     { id: "31", label: "Åbo Akademi University", sector: "Third Party" },
//     { id: "32", label: "City of Tampere", sector: "Third Party" },
//     { id: "33", label: "Ministry of Finance", sector: "Third Party" },
//     { id: "34", label: "Finnish Government", sector: "Third Party" },
//     { id: "35", label: "World Happiness Council", sector: "Third Party" },
//     { id: "36", label: "Finnish Embassy in Abu Dhabi", sector: "Third Party" },
//     { id: "37", label: "Team Finland", sector: "Third Party" },
//     { id: "38", label: "Anwar Gargash Diplomatic Academy", sector: "Third Party" },
//     { id: "39", label: "Cabinet of the President of Finland", sector: "Third Party" },
//     { id: "40", label: "Ministry for Foreign Affairs", sector: "Third Party" },
//     { id: "41", label: "NATO", sector: "Third Party" },
//     { id: "42", label: "Office of the President of Finland", sector: "Third Party" },
//     { id: "43", label: "CMI – Martti Ahtisaari Peace Foundation", sector: "Third Party" },
//     { id: "44", label: "UN Group of Friends of Mediation", sector: "Third Party" },
//     { id: "45", label: "UN General Assembly", sector: "Third Party" },
//     { id: "46", label: "Finnish Permanent Mission in Geneva", sector: "Third Party" },
//     { id: "47", label: "Finnish Permanent Mission in New York", sector: "Third Party" },
//     { id: "48", label: "Dubai Electricity and Water Authority (DEWA)", sector: "Third Party" },
//     { id: "49", label: "GCC", sector: "Third Party" },
//     { id: "50", label: "OIC", sector: "Third Party" },
//     { id: "51", label: "KONE Corporation", sector: "Third Party" },
//     { id: "52", label: "Nokia", sector: "Third Party" },
//     { id: "53", label: "Hewlett Packard Enterprise", sector: "Third Party" },
//     { id: "54", label: "UAE Ministry of AI", sector: "Third Party" },
//     { id: "55", label: "Wärtsilä Corporation", sector: "Third Party" },
//     { id: "56", label: "ADIPEC", sector: "Third Party" },
//     { id: "57", label: "Fiskars", sector: "Third Party" },
//     { id: "58", label: "Pöyry/AFRY", sector: "Third Party" },
//     { id: "59", label: "Sanoma Corporation", sector: "Third Party" },
//     { id: "60", label: "Helsingin Sanomat", sector: "Third Party" },
//     { id: "61", label: "Sampo Group", sector: "Third Party" },
//     { id: "62", label: "Nordea Bank", sector: "Third Party" },
//     { id: "63", label: "UPM-Kymmene", sector: "Third Party" },
//     { id: "64", label: "Abu Dhabi Investment Authority (ADIA)", sector: "Third Party" },
//     { id: "65", label: "Saxo Bank", sector: "Third Party" },
//     { id: "66", label: "Finnish Confederation of Industries (EK)", sector: "Third Party" },
//     { id: "67", label: "Finns Party", sector: "Third Party" },
//     { id: "68", label: "Fiskars Group", sector: "Third Party" },
//     { id: "69", label: "Iittala", sector: "Third Party" },
//     { id: "70", label: "Royal Copenhagen", sector: "Third Party" },
//     { id: "71", label: "Expo 2020 Dubai", sector: "Third Party" },
//     { id: "72", label: "ISKU", sector: "Third Party" },
//     { id: "73", label: "Finnish Business Council in Dubai", sector: "Third Party" },
//     { id: "74", label: "Business Finland", sector: "Third Party" },
//     { id: "75", label: "Fortum", sector: "Third Party" },
//     { id: "76", label: "Finland Chamber of Commerce (FCC)", sector: "Third Party" },
//     { id: "77", label: "UAE-Finland Business Council", sector: "Third Party" }
//   ],
//   links: [
//     { source: "1", target: "26", label: "Executive Collaboration" },
//     { source: "1", target: "27", label: "Executive Collaboration" },
//     { source: "1", target: "28", label: "Executive Collaboration" },
//     { source: "1", target: "29", label: "Executive Collaboration" },
//     { source: "1", target: "30", label: "Executive Collaboration" },
//     { source: "1", target: "31", label: "Executive Collaboration" },
//     { source: "2", target: "32", label: "Executive Collaboration" },
//     { source: "2", target: "33", label: "Executive Collaboration" },
//     { source: "2", target: "26", label: "Executive Collaboration" },
//     { source: "3", target: "34", label: "Executive Collaboration" },
//     { source: "3", target: "35", label: "Executive Collaboration" },
//     { source: "4", target: "36", label: "Diplomatic Representation" },
//     { source: "4", target: "37", label: "Diplomatic Representation" },
//     { source: "4", target: "38", label: "Diplomatic Representation" },
//     { source: "5", target: "39", label: "Advisory Link" },
//     { source: "5", target: "40", label: "Advisory Link" },
//     { source: "5", target: "41", label: "Advisory Link" },
//     { source: "6", target: "42", label: "Advisory Link" },
//     { source: "6", target: "43", label: "Advisory Link" },
//     { source: "6", target: "44", label: "Advisory Link" },
//     { source: "7", target: "40", label: "Executive Coordination" },
//     { source: "7", target: "45", label: "Executive Coordination" },
//     { source: "8", target: "40", label: "Advisory Relationship" },
//     { source: "8", target: "46", label: "Advisory Relationship" },
//     { source: "8", target: "47", label: "Advisory Relationship" },
//     { source: "9", target: "40", label: "Ministry Collaboration" },
//     { source: "9", target: "48", label: "Ministry Collaboration" },
//     { source: "10", target: "40", label: "Ministry Collaboration" },
//     { source: "10", target: "49", label: "Ministry Collaboration" },
//     { source: "10", target: "50", label: "Ministry Collaboration" },
//     { source: "11", target: "51", label: "Corporate Interaction" },
//     { source: "12", target: "52", label: "Corporate Interaction" },
//     { source: "12", target: "53", label: "Corporate Interaction" },
//     { source: "13", target: "52", label: "Corporate Transition" },
//     { source: "14", target: "52", label: "Board Oversight" },
//     { source: "14", target: "54", label: "Board Oversight" },
//     { source: "15", target: "55", label: "Industry Collaboration" },
//     { source: "15", target: "56", label: "Industry Collaboration" },
//     { source: "16", target: "20", label: "Industrial Partnership" },
//     { source: "17", target: "20", label: "Corporate Networking" },
//     { source: "18", target: "20", label: "Media and Business Link" },
//     { source: "19", target: "20", label: "Financial Leadership" },
//     { source: "16", target: "17", label: "Industrial Synergy" },
//     { source: "18", target: "17", label: "Cultural Synergy" },
//     { source: "19", target: "16", label: "Financial & Industrial Investment" },
//     { source: "19", target: "24", label: "Financial Advisory" },
//     { source: "20", target: "22", label: "Industry-Government Liaison" },
//     { source: "21", target: "22", label: "SME & Trade Promotion" },
//     { source: "24", target: "22", label: "Trade Promotion Link" },
//     { source: "23", target: "20", label: "Energy Sector Collaboration" },
//     { source: "23", target: "24", label: "Energy Trade Partnership" },
//     { source: "24", target: "25", label: "Legislative-Trade Interface" },
//     { source: "3", target: "24", label: "State-Business Bridge" },
//     { source: "3", target: "20", label: "Government-Industry Link" },
//     { source: "7", target: "22", label: "Foreign Policy to Trade Link" },
//     { source: "25", target: "20", label: "Legislative-Business Oversight" },
//     { source: "16", target: "24", label: "Family-Chamber Synergy" },
//     { source: "18", target: "24", label: "Media-Trade Collaboration" },
//     { source: "7", target: "4", label: "Diplomatic Implementation" },
//     // Additional links for third party nodes
//     { source: "17", target: "57", label: "Corporate Branding" },
//     { source: "16", target: "58", label: "Strategic Investment" },
//     { source: "18", target: "59", label: "Media Ownership" },
//     { source: "18", target: "60", label: "Media Influence" },
//     { source: "19", target: "61", label: "Corporate Investment" },
//     { source: "19", target: "62", label: "Corporate Investment" },
//     { source: "19", target: "63", label: "Corporate Oversight" },
//     { source: "19", target: "64", label: "Financial Partnership" },
//     { source: "19", target: "65", label: "Investment Link" },
//     { source: "20", target: "66", label: "Industry Advocacy" },
//     { source: "25", target: "67", label: "Political Oversight" },
//     { source: "17", target: "68", label: "Corporate Synergy" },
//     { source: "17", target: "69", label: "Product Collaboration" },
//     { source: "17", target: "70", label: "Design Partnership" },
//     { source: "17", target: "71", label: "Market Exposure" },
//     { source: "21", target: "72", label: "Corporate Interaction" },
//     { source: "21", target: "73", label: "Trade Promotion" },
//     { source: "22", target: "74", label: "Trade Promotion" },
//     { source: "23", target: "75", label: "Energy Partnership" },
//     { source: "24", target: "76", label: "Trade Facilitation" },
//     { source: "24", target: "77", label: "Business Networking" }
//   ]
// };



// function App() {
//   // We’ll render the network here:
//   const svgRef = useRef(null);
//   const tooltipRef = useRef(null);

//   const [searchText, setSearchText] = useState('');
//   const [showEdgeLabels, setShowEdgeLabels] = useState(false);
//   const [layout, setLayout] = useState('force'); 
//   const [simulationRef] = useState({ current: null });

//   // Colour by sector
//   const getSectorColor = (sector) => {
//     switch (sector) {
//       case 'Government': return '#4285F4'; // square
//       case 'Diplomatic': return '#EA4335'; // diamond
//       case 'Business':   return '#FBBC05'; // circle
//       case 'Industry Organisations': return '#34A853'; // star
//       case 'Third Party': return '#9C27B0'; // triangle
//       default: return '#999999';
//     }
//   };

//   // Shape by sector
//   const getSectorShape = (sector) => {
//     switch (sector) {
//       case 'Government': return symbolSquare;
//       case 'Business': return symbolCircle;
//       case 'Third Party': return symbolTriangle;
//       case 'Diplomatic': return symbolDiamond;
//       case 'Industry Organisations': return symbolStar;
//       default: return symbolCircle; // fallback
//     }
//   };

//   // Radial layout (no force)
//   const applyRadialLayout = (nodes, width, height) => {
//     const radius = Math.min(width, height) / 2.5;
//     const angleStep = (2 * Math.PI) / nodes.length;
//     nodes.forEach((node, i) => {
//       const angle = i * angleStep;
//       node.x = width / 2 + radius * Math.cos(angle);
//       node.y = height / 2 + radius * Math.sin(angle);
//     });
//   };

//   const createVisualization = () => {
//     if (!svgRef.current) return;

//     // Stop any previous simulation
//     if (simulationRef.current) {
//       simulationRef.current.stop();
//     }

//     // Clear old elements
//     d3.select(svgRef.current).selectAll('*').remove();

//     const width = 980;
//     const height = 700;

//     const svg = d3.select(svgRef.current)
//       .attr('viewBox', [0, 0, width, height])
//       .attr('width', '100%')
//       .attr('height', '100%');

//     // Tooltip
//     const tooltip = d3.select(tooltipRef.current)
//       .style('position', 'absolute')
//       .style('visibility', 'hidden')
//       .style('background-color', 'rgba(50, 50, 50, 0.9)')
//       .style('color', 'white')
//       .style('padding', '10px')
//       .style('border-radius', '6px')
//       .style('font-size', '14px')
//       .style('max-width', '300px')
//       .style('z-index', '1000');

//     // Prepare data
//     const nodes = networkData.nodes.map((node) => ({
//       ...node,
//       color: getSectorColor(node.sector)
//     }));

//     const links = networkData.links.map((link) => ({
//       ...link,
//       source: nodes.find((n) => n.id === link.source) || link.source,
//       target: nodes.find((n) => n.id === link.target) || link.target
//     }));

//     // Container group
//     const container = svg.append('g');

//     // Zoom/pan
//     const zoom = d3.zoom()
//       .scaleExtent([0.2, 2])
//       .on('zoom', (event) => {
//         container.attr('transform', event.transform);
//       });
//     svg.call(zoom);

//     // Arrowheads
//     svg.append('defs')
//       .selectAll('marker')
//       .data(['end'])
//       .join('marker')
//       .attr('id', 'arrow')
//       .attr('viewBox', '0 -5 10 10')
//       .attr('refX', 20)
//       .attr('refY', 0)
//       .attr('markerWidth', 6)
//       .attr('markerHeight', 6)
//       .attr('orient', 'auto')
//       .append('path')
//       .attr('fill', '#999')
//       .attr('d', 'M0,-5L10,0L0,5');

//     // Links
//     const link = container.append('g')
//       .selectAll('line')
//       .data(links)
//       .join('line')
//       .attr('stroke', '#999')
//       .attr('stroke-width', 1.5)
//       .attr('marker-end', 'url(#arrow)');

//     // Edge labels
//     const edgeLabels = container.append('g')
//       .selectAll('text')
//       .data(links)
//       .join('text')
//       .attr('font-size', '8px')
//       .attr('text-anchor', 'middle')
//       .attr('dy', -5)
//       .attr('fill', '#666')
//       .text((d) => (showEdgeLabels ? d.label : ''))
//       .style('pointer-events', 'none');

//     // Force or radial layout
//     let simulation = null;
//     if (layout === 'force') {
//       simulation = d3.forceSimulation(nodes)
//         .force('link', d3.forceLink(links).id((d) => d.id).distance(120))
//         .force('charge', d3.forceManyBody().strength(-500))
//         .force('center', d3.forceCenter(width / 2, height / 2))
//         .force('collide', d3.forceCollide().radius(50));

//       simulationRef.current = simulation;
//     } else {
//       applyRadialLayout(nodes, width, height);
//     }

//     // Node shapes
//     const symbolGenerator = d3.symbol().size(400);

//     // Node groups
//     const node = container.append('g')
//       .selectAll('g')
//       .data(nodes)
//       .join('g');

//     node.append('path')
//       .attr('d', (d) => {
//         symbolGenerator.type(getSectorShape(d.sector));
//         return symbolGenerator();
//       })
//       .attr('fill', (d) => d.color)
//       .attr('stroke', '#999')
//       .attr('stroke-width', 1.5);

//     // Short text label (last name)
//     node.append('text')
//       .attr('dy', 25)
//       .attr('text-anchor', 'middle')
//       .text((d) => {
//         const nameParts = d.label.split(' ');
//         return nameParts[nameParts.length - 1];
//       })
//       .attr('font-size', '10px')
//       .attr('fill', '#333');

//     // Dragging only in force layout
//     if (layout === 'force') {
//       node.call(
//         d3.drag()
//           .on('start', dragstarted)
//           .on('drag', dragged)
//           .on('end', dragended)
//       );
//     }

//     // Hover on nodes
//     node
//       .on('mouseover', function (event, d) {
//         // Show full label
//         d3.select(this).select('text').text(d.label);
//         tooltip.html(`<strong>${d.label}</strong><br>${d.title || ''}`)
//           .style('visibility', 'visible')
//           .style('left', (event.pageX + 10) + 'px')
//           .style('top', (event.pageY + 10) + 'px');
//       })
//       .on('mousemove', function (event) {
//         tooltip
//           .style('left', (event.pageX + 10) + 'px')
//           .style('top', (event.pageY + 10) + 'px');
//       })
//       .on('mouseout', function (event, d) {
//         // Revert to short label
//         const nameParts = d.label.split(' ');
//         d3.select(this).select('text').text(nameParts[nameParts.length - 1]);
//         tooltip.style('visibility', 'hidden');
//       });

//     // Hover on links
//     link
//       .on('mouseover', function (event, d) {
//         const sourceNode = d.source;
//         const targetNode = d.target;
//         tooltip.html(
//           `<strong>${d.label}</strong>: ${sourceNode.label} → ${targetNode.label}`
//         )
//           .style('visibility', 'visible')
//           .style('left', (event.pageX + 10) + 'px')
//           .style('top', (event.pageY + 10) + 'px');
//         d3.select(this).attr('stroke-width', 3);
//       })
//       .on('mousemove', function (event) {
//         tooltip
//           .style('left', (event.pageX + 10) + 'px')
//           .style('top', (event.pageY + 10) + 'px');
//       })
//       .on('mouseout', function () {
//         tooltip.style('visibility', 'hidden');
//         d3.select(this).attr('stroke-width', 1.5);
//       });

//     // Ticking (force layout only)
//     if (simulation) {
//       simulation.on('tick', () => {
//         // Keep in bounds
//         nodes.forEach((d) => {
//           d.x = Math.max(30, Math.min(width - 30, d.x));
//           d.y = Math.max(30, Math.min(height - 30, d.y));
//         });
//         link
//           .attr('x1', (d) => d.source.x)
//           .attr('y1', (d) => d.source.y)
//           .attr('x2', (d) => d.target.x)
//           .attr('y2', (d) => d.target.y);
//         node.attr('transform', (d) => `translate(${d.x},${d.y})`);
//         edgeLabels
//           .attr('x', (d) => (d.source.x + d.target.x) / 2)
//           .attr('y', (d) => (d.source.y + d.target.y) / 2);
//       });
//       simulation.alpha(0.3).restart();
//     } else {
//       // Radial layout: set positions once
//       link
//         .attr('x1', (d) => d.source.x)
//         .attr('y1', (d) => d.source.y)
//         .attr('x2', (d) => d.target.x)
//         .attr('y2', (d) => d.target.y);
//       node.attr('transform', (d) => `translate(${d.x},${d.y})`);
//       edgeLabels
//         .attr('x', (d) => (d.source.x + d.target.x) / 2)
//         .attr('y', (d) => (d.source.y + d.target.y) / 2);
//     }

//     // Drag helpers
//     function dragstarted(event, d) {
//       if (!event.active && simulation) simulation.alphaTarget(0.3).restart();
//       d.fx = d.x;
//       d.fy = d.y;
//     }
//     function dragged(event, d) {
//       d.fx = Math.max(30, Math.min(width - 30, event.x));
//       d.fy = Math.max(30, Math.min(height - 30, event.y));
//     }
//     function dragended(event, d) {
//       if (!event.active && simulation) simulation.alphaTarget(0);
//       d.fx = d.x;
//       d.fy = d.y;
//     }
//   };

//   // Re-run createVisualization if layout or showEdgeLabels changes
//   useEffect(() => {
//     createVisualization();
//     return () => {
//       if (simulationRef.current) {
//         simulationRef.current.stop();
//       }
//     };
//   }, [layout, showEdgeLabels]);

//   // Toggling link labels after the graph is drawn
//   useEffect(() => {
//     if (!svgRef.current) return;
//     const processedLinks = Array.from(
//       d3.select(svgRef.current).selectAll('line').data()
//     );
//     d3.select(svgRef.current)
//       .selectAll('text')
//       .filter(function () {
//         return this.parentNode?.tagName === 'g';
//       })
//       .data(processedLinks)
//       .text((d) => (showEdgeLabels ? d.label : ''));
//   }, [showEdgeLabels]);

//   // Searching
//   const handleSearch = () => {
//     if (!searchText || !svgRef.current) return;
//     d3.select(svgRef.current)
//       .selectAll('path')
//       .attr('stroke', '#999')
//       .attr('stroke-width', 1.5);

//     const searchLower = searchText.toLowerCase();
//     d3.select(svgRef.current)
//       .selectAll('g > g')
//       .filter((d) => {
//         if (!d) return false;
//         return (
//           d.label.toLowerCase().includes(searchLower) ||
//           (d.title || '').toLowerCase().includes(searchLower)
//         );
//       })
//       .select('path')
//       .attr('stroke', '#FF9800')
//       .attr('stroke-width', 3);
//   };

//   // Fit to view
//   const handleFitToView = () => {
//     if (!svgRef.current) return;
//     const svg = d3.select(svgRef.current);
//     const width = parseInt(svg.style('width'));
//     const height = parseInt(svg.style('height'));
//     svg.call(
//       d3.zoom().transform,
//       d3.zoomIdentity.translate(width / 2, height / 2).scale(0.8)
//     );
//   };

//   // Reset layout
//   const handleResetLayout = () => {
//     createVisualization();
//   };

//   // Toggle edge labels
//   const handleToggleLabels = () => {
//     setShowEdgeLabels(!showEdgeLabels);
//   };

//   // Layout dropdown
//   const handleLayoutChange = (e) => {
//     setLayout(e.target.value);
//   };

//   // Render the UI
//   return (
//     <div
//       style={{
//         display: 'flex',
//         flexDirection: 'column',
//         maxWidth: '1100px',
//         margin: '0 auto',
//         border: '1px solid #ddd',
//         borderRadius: '8px',
//         overflow: 'hidden',
//         boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
//         backgroundColor: '#ffffff'
//       }}
//     >
//       <div
//         style={{
//           textAlign: 'center',
//           padding: '15px',
//           borderBottom: '1px solid #ddd',
//           backgroundColor: '#f8f9fa'
//         }}
//       >
//         <h2 style={{ margin: 0, color: '#333', fontSize: '22px' }}>
//           Finnish Leadership Network
//         </h2>
//       </div>

//       <div
//         style={{
//           padding: '10px',
//           backgroundColor: '#f0f0f0',
//           borderBottom: '1px solid #ddd',
//           display: 'flex',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//           flexWrap: 'wrap'
//         }}
//       >
//         <div>
//           <button
//             onClick={handleFitToView}
//             style={{
//               backgroundColor: '#1e88e5',
//               color: 'white',
//               border: 'none',
//               padding: '8px 12px',
//               margin: '0 5px 5px 0',
//               borderRadius: '4px',
//               cursor: 'pointer',
//               fontSize: '14px'
//             }}
//           >
//             Fit to View
//           </button>
//           <button
//             onClick={handleResetLayout}
//             style={{
//               backgroundColor: '#1e88e5',
//               color: 'white',
//               border: 'none',
//               padding: '8px 12px',
//               margin: '0 5px 5px 0',
//               borderRadius: '4px',
//               cursor: 'pointer',
//               fontSize: '14px'
//             }}
//           >
//             Reset Layout
//           </button>
//           <button
//             onClick={handleToggleLabels}
//             style={{
//               backgroundColor: '#1e88e5',
//               color: 'white',
//               border: 'none',
//               padding: '8px 12px',
//               margin: '0 5px 5px 0',
//               borderRadius: '4px',
//               cursor: 'pointer',
//               fontSize: '14px'
//             }}
//           >
//             {showEdgeLabels ? 'Hide Edge Labels' : 'Show Edge Labels'}
//           </button>
//         </div>

//         <div style={{ display: 'flex', alignItems: 'center' }}>
//           <select
//             value={layout}
//             onChange={handleLayoutChange}
//             style={{
//               marginRight: '10px',
//               padding: '6px',
//               borderRadius: '4px',
//               border: '1px solid #ccc'
//             }}
//           >
//             <option value="force">Force Layout</option>
//             <option value="radial">Radial Layout</option>
//           </select>

//           <input
//             type="text"
//             value={searchText}
//             onChange={(e) => setSearchText(e.target.value)}
//             onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
//             placeholder="Search nodes..."
//             style={{
//               padding: '6px 8px',
//               border: '1px solid #ccc',
//               borderRadius: '4px',
//               marginRight: '5px'
//             }}
//           />
//           <button
//             onClick={handleSearch}
//             style={{
//               backgroundColor: '#1e88e5',
//               color: 'white',
//               border: 'none',
//               padding: '8px 12px',
//               margin: '0',
//               borderRadius: '4px',
//               cursor: 'pointer',
//               fontSize: '14px'
//             }}
//           >
//             Search
//           </button>
//         </div>
//       </div>

//       <div style={{ position: 'relative', height: '700px', width: '100%' }}>
//         <svg
//           ref={svgRef}
//           style={{
//             width: '100%',
//             height: '100%',
//             display: 'block',
//             backgroundColor: '#fff'
//           }}
//         />
//         <div ref={tooltipRef}></div>
//       </div>

//       <div
//         style={{
//           padding: '10px',
//           backgroundColor: '#f8f9fa',
//           borderTop: '1px solid #ddd',
//           display: 'flex',
//           justifyContent: 'center'
//         }}
//       >
//         <div
//           style={{
//             display: 'flex',
//             flexWrap: 'wrap',
//             justifyContent: 'center',
//             maxWidth: '700px'
//           }}
//         >
//           <LegendItem color="#4285F4" label="Government" />
//           <LegendItem color="#EA4335" label="Diplomatic" />
//           <LegendItem color="#FBBC05" label="Business" />
//           <LegendItem color="#34A853" label="Industry Organisations" />
//           <LegendItem color="#9C27B0" label="Third Party" />
//         </div>
//       </div>
//     </div>
//   );
// }

// function LegendItem({ color, label }) {
//   return (
//     <div
//       style={{
//         display: 'flex',
//         alignItems: 'center',
//         margin: '0 15px 5px 0'
//       }}
//     >
//       <div
//         style={{
//           width: '16px',
//           height: '16px',
//           marginRight: '8px',
//           borderRadius: '3px',
//           backgroundColor: color,
//           border: '1px solid #ccc'
//         }}
//       ></div>
//       <span>{label}</span>
//     </div>
//   );
// }

// export default App;

























import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import {
  symbol,
  symbolCircle,
  symbolSquare,
  symbolTriangle,
  symbolDiamond,
  symbolStar
} from 'd3-shape';

// Network data
const networkData = {
  nodes: [
    { id: "1", label: "H.E. Sandra Bergqvist", title: "Minister of Youth, Sport and Physical Activity", sector: "Government" },
    { id: "2", label: "H.E. Anna-Kaisa Ikonen", title: "Minister of Local and Regional Government", sector: "Government" },
    { id: "3", label: "H.E. Alexander Stubb", title: "President of the Republic of Finland", sector: "Government" },
    { id: "4", label: "H.E. Tuula Yrjölä", title: "Ambassador of Finland to the UAE", sector: "Government" },
    { id: "5", label: "H.E. Anna-Mari Wong Hämäläinen", title: "Director of Foreign and Security Policy", sector: "Government" },
    { id: "6", label: "Dr. Ville Brummer", title: "Director of Peace Mediation", sector: "Government" },
    { id: "7", label: "H.E. Elina Valtonen", title: "Minister of Foreign Affairs", sector: "Government" },
    { id: "8", label: "Laila Clyne", title: "Diplomatic Advisor to the Minister of Foreign Affairs", sector: "Government" },
    { id: "9", label: "H.E. Anna-Kaisa Heikkinen", title: "Director General, Department for Africa, the Middle East and Latin America", sector: "Government" },
    { id: "10", label: "Anne M'Rabet", title: "Desk Officer for the Persian Gulf", sector: "Government" },
    { id: "11", label: "Antti Herlin", title: "Chairman of KONE Corporation", sector: "Business" },
    { id: "12", label: "Justin Hotard", title: "Incoming CEO of Nokia", sector: "Business" },
    { id: "13", label: "Pekka Lundmark", title: "Outgoing CEO of Nokia", sector: "Business" },
    { id: "14", label: "Sari Baldauf", title: "Chairman of Nokia Board of Directors", sector: "Business" },
    { id: "15", label: "Håkan Agnevall", title: "President & CEO of Wärtsilä Corporation", sector: "Business" },
    { id: "16", label: "Ehrnrooth Family", title: "Key industrial dynasty representative", sector: "Business" },
    { id: "17", label: "Nathalie Ahlström", title: "CEO of Fiskars Group", sector: "Business" },
    { id: "18", label: "Erkko Family", title: "Media influence representative", sector: "Business" },
    { id: "19", label: "Björn Wahlroos", title: "Banker and Investor", sector: "Business" },
    { id: "20", label: "Jyri Häkämies", title: "Director General of EK", sector: "Business" },
    { id: "21", label: "Seppo Vikkström", title: "Chairman of Isku Corporation", sector: "Business" },
    { id: "22", label: "Lassi Noponen", title: "Director General of Business Finland", sector: "Government" },
    { id: "23", label: "Markus Rauramo", title: "President & CEO of Fortum Corporation", sector: "Business" },
    { id: "24", label: "Juho Romakkaniemi", title: "CEO of Finland Chamber of Commerce", sector: "Business" },
    { id: "25", label: "H.E. Jussi Halla-aho", title: "Speaker of the Parliament of Finland", sector: "Government" },
    // Third Party nodes
    { id: "26", label: "Finnish Parliament", sector: "Third Party" },
    { id: "27", label: "Swedish Assembly of Finland", sector: "Third Party" },
    { id: "28", label: "Pargas City Executive", sector: "Third Party" },
    { id: "29", label: "Association of Finnish Municipalities", sector: "Third Party" },
    { id: "30", label: "Ministry of Education and Culture", sector: "Third Party" },
    { id: "31", label: "Åbo Akademi University", sector: "Third Party" },
    { id: "32", label: "City of Tampere", sector: "Third Party" },
    { id: "33", label: "Ministry of Finance", sector: "Third Party" },
    { id: "34", label: "Finnish Government", sector: "Third Party" },
    { id: "35", label: "World Happiness Council", sector: "Third Party" },
    { id: "36", label: "Finnish Embassy in Abu Dhabi", sector: "Third Party" },
    { id: "37", label: "Team Finland", sector: "Third Party" },
    { id: "38", label: "Anwar Gargash Diplomatic Academy", sector: "Third Party" },
    { id: "39", label: "Cabinet of the President of Finland", sector: "Third Party" },
    { id: "40", label: "Ministry for Foreign Affairs", sector: "Third Party" },
    { id: "41", label: "NATO", sector: "Third Party" },
    { id: "42", label: "Office of the President of Finland", sector: "Third Party" },
    { id: "43", label: "CMI – Martti Ahtisaari Peace Foundation", sector: "Third Party" },
    { id: "44", label: "UN Group of Friends of Mediation", sector: "Third Party" },
    { id: "45", label: "UN General Assembly", sector: "Third Party" },
    { id: "46", label: "Finnish Permanent Mission in Geneva", sector: "Third Party" },
    { id: "47", label: "Finnish Permanent Mission in New York", sector: "Third Party" },
    { id: "48", label: "Dubai Electricity and Water Authority (DEWA)", sector: "Third Party" },
    { id: "49", label: "GCC", sector: "Third Party" },
    { id: "50", label: "OIC", sector: "Third Party" },
    { id: "51", label: "KONE Corporation", sector: "Third Party" },
    { id: "52", label: "Nokia", sector: "Third Party" },
    { id: "53", label: "Hewlett Packard Enterprise", sector: "Third Party" },
    { id: "54", label: "UAE Ministry of AI", sector: "Third Party" },
    { id: "55", label: "Wärtsilä Corporation", sector: "Third Party" },
    { id: "56", label: "ADIPEC", sector: "Third Party" },
    { id: "57", label: "Fiskars", sector: "Third Party" },
    { id: "58", label: "Pöyry/AFRY", sector: "Third Party" },
    { id: "59", label: "Sanoma Corporation", sector: "Third Party" },
    { id: "60", label: "Helsingin Sanomat", sector: "Third Party" },
    { id: "61", label: "Sampo Group", sector: "Third Party" },
    { id: "62", label: "Nordea Bank", sector: "Third Party" },
    { id: "63", label: "UPM-Kymmene", sector: "Third Party" },
    { id: "64", label: "Abu Dhabi Investment Authority (ADIA)", sector: "Third Party" },
    { id: "65", label: "Saxo Bank", sector: "Third Party" },
    { id: "66", label: "Finnish Confederation of Industries (EK)", sector: "Third Party" },
    { id: "67", label: "Finns Party", sector: "Third Party" },
    { id: "68", label: "Fiskars Group", sector: "Third Party" },
    { id: "69", label: "Iittala", sector: "Third Party" },
    { id: "70", label: "Royal Copenhagen", sector: "Third Party" },
    { id: "71", label: "Expo 2020 Dubai", sector: "Third Party" },
    { id: "72", label: "ISKU", sector: "Third Party" },
    { id: "73", label: "Finnish Business Council in Dubai", sector: "Third Party" },
    { id: "74", label: "Business Finland", sector: "Third Party" },
    { id: "75", label: "Fortum", sector: "Third Party" },
    { id: "76", label: "Finland Chamber of Commerce (FCC)", sector: "Third Party" },
    { id: "77", label: "UAE-Finland Business Council", sector: "Third Party" }
  ],
  links: [
    { source: "1", target: "26", label: "Executive Collaboration" },
    { source: "1", target: "27", label: "Executive Collaboration" },
    { source: "1", target: "28", label: "Executive Collaboration" },
    { source: "1", target: "29", label: "Executive Collaboration" },
    { source: "1", target: "30", label: "Executive Collaboration" },
    { source: "1", target: "31", label: "Executive Collaboration" },
    { source: "2", target: "32", label: "Executive Collaboration" },
    { source: "2", target: "33", label: "Executive Collaboration" },
    { source: "2", target: "26", label: "Executive Collaboration" },
    { source: "3", target: "34", label: "Executive Collaboration" },
    { source: "3", target: "35", label: "Executive Collaboration" },
    { source: "4", target: "36", label: "Diplomatic Representation" },
    { source: "4", target: "37", label: "Diplomatic Representation" },
    { source: "4", target: "38", label: "Diplomatic Representation" },
    { source: "5", target: "39", label: "Advisory Link" },
    { source: "5", target: "40", label: "Advisory Link" },
    { source: "5", target: "41", label: "Advisory Link" },
    { source: "6", target: "42", label: "Advisory Link" },
    { source: "6", target: "43", label: "Advisory Link" },
    { source: "6", target: "44", label: "Advisory Link" },
    { source: "7", target: "40", label: "Executive Coordination" },
    { source: "7", target: "45", label: "Executive Coordination" },
    { source: "8", target: "40", label: "Advisory Relationship" },
    { source: "8", target: "46", label: "Advisory Relationship" },
    { source: "8", target: "47", label: "Advisory Relationship" },
    { source: "9", target: "40", label: "Ministry Collaboration" },
    { source: "9", target: "48", label: "Ministry Collaboration" },
    { source: "10", target: "40", label: "Ministry Collaboration" },
    { source: "10", target: "49", label: "Ministry Collaboration" },
    { source: "10", target: "50", label: "Ministry Collaboration" },
    { source: "11", target: "51", label: "Corporate Interaction" },
    { source: "12", target: "52", label: "Corporate Interaction" },
    { source: "12", target: "53", label: "Corporate Interaction" },
    { source: "13", target: "52", label: "Corporate Transition" },
    { source: "14", target: "52", label: "Board Oversight" },
    { source: "14", target: "54", label: "Board Oversight" },
    { source: "15", target: "55", label: "Industry Collaboration" },
    { source: "15", target: "56", label: "Industry Collaboration" },
    { source: "16", target: "20", label: "Industrial Partnership" },
    { source: "17", target: "20", label: "Corporate Networking" },
    { source: "18", target: "20", label: "Media and Business Link" },
    { source: "19", target: "20", label: "Financial Leadership" },
    { source: "16", target: "17", label: "Industrial Synergy" },
    { source: "18", target: "17", label: "Cultural Synergy" },
    { source: "19", target: "16", label: "Financial & Industrial Investment" },
    { source: "19", target: "24", label: "Financial Advisory" },
    { source: "20", target: "22", label: "Industry-Government Liaison" },
    { source: "21", target: "22", label: "SME & Trade Promotion" },
    { source: "24", target: "22", label: "Trade Promotion Link" },
    { source: "23", target: "20", label: "Energy Sector Collaboration" },
    { source: "23", target: "24", label: "Energy Trade Partnership" },
    { source: "24", target: "25", label: "Legislative-Trade Interface" },
    { source: "3", target: "24", label: "State-Business Bridge" },
    { source: "3", target: "20", label: "Government-Industry Link" },
    { source: "7", target: "22", label: "Foreign Policy to Trade Link" },
    { source: "25", target: "20", label: "Legislative-Business Oversight" },
    { source: "16", target: "24", label: "Family-Chamber Synergy" },
    { source: "18", target: "24", label: "Media-Trade Collaboration" },
    { source: "7", target: "4", label: "Diplomatic Implementation" },
    // Additional links for third party nodes
    { source: "17", target: "57", label: "Corporate Branding" },
    { source: "16", target: "58", label: "Strategic Investment" },
    { source: "18", target: "59", label: "Media Ownership" },
    { source: "18", target: "60", label: "Media Influence" },
    { source: "19", target: "61", label: "Corporate Investment" },
    { source: "19", target: "62", label: "Corporate Investment" },
    { source: "19", target: "63", label: "Corporate Oversight" },
    { source: "19", target: "64", label: "Financial Partnership" },
    { source: "19", target: "65", label: "Investment Link" },
    { source: "20", target: "66", label: "Industry Advocacy" },
    { source: "25", target: "67", label: "Political Oversight" },
    { source: "17", target: "68", label: "Corporate Synergy" },
    { source: "17", target: "69", label: "Product Collaboration" },
    { source: "17", target: "70", label: "Design Partnership" },
    { source: "17", target: "71", label: "Market Exposure" },
    { source: "21", target: "72", label: "Corporate Interaction" },
    { source: "21", target: "73", label: "Trade Promotion" },
    { source: "22", target: "74", label: "Trade Promotion" },
    { source: "23", target: "75", label: "Energy Partnership" },
    { source: "24", target: "76", label: "Trade Facilitation" },
    { source: "24", target: "77", label: "Business Networking" }
  ]
};



function App() {
  const svgRef = useRef(null);
  const tooltipRef = useRef(null);

  // UI states
  const [searchText, setSearchText] = useState('');
  const [showEdgeLabels, setShowEdgeLabels] = useState(false);
  const [layout, setLayout] = useState('force'); // We'll add more layouts
  const [simulationRef] = useState({ current: null });

  //--------------------------------------------------
  // 1. Colour & shape logic
  //--------------------------------------------------
  const getSectorColor = (sector) => {
    switch (sector) {
      case 'Government':              return '#4285F4'; // square
      case 'Diplomatic':             return '#EA4335'; // diamond
      case 'Business':               return '#FBBC05'; // circle
      case 'Industry Organisations': return '#34A853'; // star
      case 'Third Party':            return '#9C27B0'; // triangle
      default:                       return '#999999';
    }
  };

  const getSectorShape = (sector) => {
    switch (sector) {
      case 'Government':              return symbolSquare;
      case 'Diplomatic':             return symbolDiamond;
      case 'Business':               return symbolCircle;
      case 'Industry Organisations': return symbolStar;
      case 'Third Party':            return symbolTriangle;
      default:                       return symbolCircle;
    }
  };

  //--------------------------------------------------
  // 2. Additional layouts
  //--------------------------------------------------
  const applyRadialLayout = (nodes, width, height) => {
    const radius = Math.min(width, height) / 2.5;
    const angleStep = (2 * Math.PI) / nodes.length;
    nodes.forEach((node, i) => {
      const angle = i * angleStep;
      node.x = width / 2 + radius * Math.cos(angle);
      node.y = height / 2 + radius * Math.sin(angle);
    });
  };

  const applyGridLayout = (nodes, width, height) => {
    // Lay out nodes in a grid
    const columns = Math.ceil(Math.sqrt(nodes.length));
    const cellSize = Math.min(width, height) / (columns + 1);
    nodes.forEach((node, i) => {
      const col = i % columns;
      const row = Math.floor(i / columns);
      node.x = (col + 1) * cellSize;
      node.y = (row + 1) * cellSize;
    });
  };

  const applyHorizontalLayout = (nodes, width, height) => {
    // Single horizontal line
    const spacing = width / (nodes.length + 1);
    nodes.forEach((node, i) => {
      node.x = (i + 1) * spacing;
      node.y = height / 2;
    });
  };

  const applyRandomLayout = (nodes, width, height) => {
    // Random positions
    nodes.forEach((node) => {
      node.x = Math.random() * width;
      node.y = Math.random() * height;
    });
  };

  //--------------------------------------------------
  // 3. Create or update the visualization
  //--------------------------------------------------
  const createVisualization = () => {
    if (!svgRef.current) return;

    // Stop any existing simulation
    if (simulationRef.current) {
      simulationRef.current.stop();
    }

    // Clear old elements
    d3.select(svgRef.current).selectAll('*').remove();

    const width = 980;
    const height = 700;

    // Create SVG
    const svg = d3.select(svgRef.current)
      .attr('viewBox', [0, 0, width, height])
      .attr('width', '100%')
      .attr('height', '100%');

    // Tooltip
    const tooltip = d3.select(tooltipRef.current)
      .style('position', 'absolute')
      .style('visibility', 'hidden')
      .style('background-color', 'rgba(50, 50, 50, 0.9)')
      .style('color', 'white')
      .style('padding', '10px')
      .style('border-radius', '6px')
      .style('font-size', '14px')
      .style('max-width', '300px')
      .style('z-index', '1000');

    // Prepare node/link data
    const nodes = networkData.nodes.map((node) => ({
      ...node,
      color: getSectorColor(node.sector)
    }));

    const links = networkData.links.map((link) => ({
      ...link,
      source: nodes.find((n) => n.id === link.source) || link.source,
      target: nodes.find((n) => n.id === link.target) || link.target
    }));

    // Container group
    const container = svg.append('g');

    // Zoom/pan
    const zoom = d3.zoom()
      .scaleExtent([0.2, 2])
      .on('zoom', (event) => {
        container.attr('transform', event.transform);
      });
    svg.call(zoom);

    // Arrowheads
    svg.append('defs')
      .selectAll('marker')
      .data(['end'])
      .join('marker')
      .attr('id', 'arrow')
      .attr('viewBox', '0 -5 10 10')
      .attr('refX', 20)
      .attr('refY', 0)
      .attr('markerWidth', 6)
      .attr('markerHeight', 6)
      .attr('orient', 'auto')
      .append('path')
      .attr('fill', '#999')
      .attr('d', 'M0,-5L10,0L0,5');

    // Draw links
    const link = container.append('g')
      .selectAll('line')
      .data(links)
      .join('line')
      .attr('stroke', '#999')
      .attr('stroke-width', 1.5)
      .attr('marker-end', 'url(#arrow)');

    // Edge labels
    const edgeLabels = container.append('g')
      .selectAll('text')
      .data(links)
      .join('text')
      .attr('font-size', '8px')
      .attr('text-anchor', 'middle')
      .attr('dy', -5)
      .attr('fill', '#666')
      .text((d) => (showEdgeLabels ? d.label : ''))
      .style('pointer-events', 'none');

    // Decide which layout
    let simulation = null;
    if (layout === 'force') {
      // Force layout
      simulation = d3.forceSimulation(nodes)
        .force('link', d3.forceLink(links).id((d) => d.id).distance(120))
        .force('charge', d3.forceManyBody().strength(-500))
        .force('center', d3.forceCenter(width / 2, height / 2))
        .force('collide', d3.forceCollide().radius(40));

      simulationRef.current = simulation;
    } else if (layout === 'radial') {
      applyRadialLayout(nodes, width, height);
    } else if (layout === 'grid') {
      applyGridLayout(nodes, width, height);
    } else if (layout === 'horizontal') {
      applyHorizontalLayout(nodes, width, height);
    } else if (layout === 'random') {
      applyRandomLayout(nodes, width, height);
    }

    // Node shapes
    const symbolGenerator = d3.symbol().size(400);

    // Draw nodes
    const node = container.append('g')
      .selectAll('g')
      .data(nodes)
      .join('g');

    node.append('path')
      .attr('d', (d) => {
        symbolGenerator.type(getSectorShape(d.sector));
        return symbolGenerator();
      })
      .attr('fill', (d) => d.color)
      .attr('stroke', '#999')
      .attr('stroke-width', 1.5);

    // Short text label
    node.append('text')
      .attr('dy', 25)
      .attr('text-anchor', 'middle')
      .text((d) => {
        const nameParts = d.label.split(' ');
        return nameParts[nameParts.length - 1];
      })
      .attr('font-size', '10px')
      .attr('fill', '#333');

    // Dragging only in force layout
    if (layout === 'force') {
      node.call(
        d3.drag()
          .on('start', dragstarted)
          .on('drag', dragged)
          .on('end', dragended)
      );
    }

    // Hover on nodes
    node
      .on('mouseover', function (event, d) {
        // Show full label
        d3.select(this).select('text').text(d.label);
        tooltip.html(`<strong>${d.label}</strong><br>${d.title || ''}`)
          .style('visibility', 'visible')
          .style('left', (event.pageX + 10) + 'px')
          .style('top', (event.pageY + 10) + 'px');
      })
      .on('mousemove', function (event) {
        tooltip
          .style('left', (event.pageX + 10) + 'px')
          .style('top', (event.pageY + 10) + 'px');
      })
      .on('mouseout', function (event, d) {
        // Revert to short label
        const nameParts = d.label.split(' ');
        d3.select(this).select('text').text(nameParts[nameParts.length - 1]);
        tooltip.style('visibility', 'hidden');
      });

    // Hover on links
    link
      .on('mouseover', function (event, d) {
        const sourceNode = d.source;
        const targetNode = d.target;
        tooltip.html(
          `<strong>${d.label}</strong>: ${sourceNode.label} → ${targetNode.label}`
        )
          .style('visibility', 'visible')
          .style('left', (event.pageX + 10) + 'px')
          .style('top', (event.pageY + 10) + 'px');
        d3.select(this).attr('stroke-width', 3);
      })
      .on('mousemove', function (event) {
        tooltip
          .style('left', (event.pageX + 10) + 'px')
          .style('top', (event.pageY + 10) + 'px');
      })
      .on('mouseout', function () {
        tooltip.style('visibility', 'hidden');
        d3.select(this).attr('stroke-width', 1.5);
      });

    // If force layout, continuously update node/link positions
    if (simulation) {
      simulation.on('tick', () => {
        // No bounding => remove any max/min constraints

        link
          .attr('x1', (d) => d.source.x)
          .attr('y1', (d) => d.source.y)
          .attr('x2', (d) => d.target.x)
          .attr('y2', (d) => d.target.y);

        node.attr('transform', (d) => `translate(${d.x},${d.y})`);

        edgeLabels
          .attr('x', (d) => (d.source.x + d.target.x) / 2)
          .attr('y', (d) => (d.source.y + d.target.y) / 2);
      });
      simulation.alpha(0.3).restart();
    } else {
      // For non-force layouts, just position once
      link
        .attr('x1', (d) => d.source.x)
        .attr('y1', (d) => d.source.y)
        .attr('x2', (d) => d.target.x)
        .attr('y2', (d) => d.target.y);

      node.attr('transform', (d) => `translate(${d.x},${d.y})`);

      edgeLabels
        .attr('x', (d) => (d.source.x + d.target.x) / 2)
        .attr('y', (d) => (d.source.y + d.target.y) / 2);
    }

    // Drag helpers (force layout only)
    function dragstarted(event, d) {
      if (!event.active && simulation) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    }
    function dragged(event, d) {
      // No bounding here either
      d.fx = event.x;
      d.fy = event.y;
    }
    function dragended(event, d) {
      if (!event.active && simulation) simulation.alphaTarget(0);
      d.fx = d.x;
      d.fy = d.y;
    }
  };

  //--------------------------------------------------
  // 4. Re-render when layout or showEdgeLabels changes
  //--------------------------------------------------
  useEffect(() => {
    createVisualization();
    return () => {
      if (simulationRef.current) {
        simulationRef.current.stop();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [layout, showEdgeLabels]);

  // Toggle link labels after the graph is drawn
  useEffect(() => {
    if (!svgRef.current) return;
    const processedLinks = Array.from(
      d3.select(svgRef.current).selectAll('line').data()
    );
    d3.select(svgRef.current)
      .selectAll('text')
      .filter(function () {
        return this.parentNode?.tagName === 'g';
      })
      .data(processedLinks)
      .text((d) => (showEdgeLabels ? d.label : ''));
  }, [showEdgeLabels]);

  //--------------------------------------------------
  // 5. Search
  //--------------------------------------------------
  const handleSearch = () => {
    if (!searchText || !svgRef.current) return;
    d3.select(svgRef.current)
      .selectAll('path')
      .attr('stroke', '#999')
      .attr('stroke-width', 1.5);

    const searchLower = searchText.toLowerCase();
    d3.select(svgRef.current)
      .selectAll('g > g')
      .filter((d) => {
        if (!d) return false;
        return (
          d.label.toLowerCase().includes(searchLower) ||
          (d.title || '').toLowerCase().includes(searchLower)
        );
      })
      .select('path')
      .attr('stroke', '#FF9800')
      .attr('stroke-width', 3);
  };

  //--------------------------------------------------
  // 6. Fit to view & reset
  //--------------------------------------------------
  const handleFitToView = () => {
    if (!svgRef.current) return;
    const svg = d3.select(svgRef.current);
    const width = parseInt(svg.style('width'));
    const height = parseInt(svg.style('height'));
    svg.call(
      d3.zoom().transform,
      d3.zoomIdentity.translate(width / 2, height / 2).scale(0.8)
    );
  };

  const handleResetLayout = () => {
    createVisualization();
  };

  const handleToggleLabels = () => {
    setShowEdgeLabels(!showEdgeLabels);
  };

  const handleLayoutChange = (e) => {
    setLayout(e.target.value);
  };

  //--------------------------------------------------
  // 7. Render
  //--------------------------------------------------
  return (

      <div>
        {/* NEW HEADER */}
        <div className="flex flex-col gap-4 p-4 w-full max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <h1 className="text-3xl font-bold text-blue-700 mb-8">
            Finnish Leadership Network
          </h1>

      {/* HOW TO USE BOX SNIPPET */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
        <h2 className="text-xl font-semibold text-blue-800 mb-2">How to Use</h2>
        <p className="text-gray-700 mb-3">
          This network diagram shows Finnish leaders, their sectors, and the connections between them. Use the controls to zoom, pan, search, and switch layouts as follows:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Click “Fit to View” to centre and scale the diagram within the viewport.</li>
          <li>Click “Reset Layout” to recalculate node positions in the chosen layout.</li>
          <li>Toggle “Show Edge Labels” to reveal or hide the relationship names on each link.</li>
          <li>Choose a layout (Force, Radial, Grid, Horizontal, or Random) to rearrange the network.</li>
          <li>Use the search bar to highlight any node or position by typing its name or title.</li>
        </ul>
      </div>
      {/* END HOW TO USE BOX SNIPPET */}




        </div>
  
        {/* MAIN CONTAINER */}
        {/* <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '1100px',
            margin: '0 auto',
            border: '1px solid #ddd',
            borderRadius: '8px',
            overflow: 'hidden',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            backgroundColor: '#ffffff'
          }}
        > */}

          <div className="w-full max-w-7xl mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow-md">




          {/* Controls */}
          <div
            style={{
              padding: '10px',
              backgroundColor: '#f0f0f0',
              borderBottom: '1px solid #ddd',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap'
            }}
          >
            <div>
              <button onClick={handleFitToView} style={buttonStyle}>
                Fit to View
              </button>
              <button onClick={handleResetLayout} style={buttonStyle}>
                Reset Layout
              </button>
              <button onClick={handleToggleLabels} style={buttonStyle}>
                {showEdgeLabels ? 'Hide Edge Labels' : 'Show Edge Labels'}
              </button>
            </div>
  
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <select
                value={layout}
                onChange={handleLayoutChange}
                style={{
                  ...buttonStyle,
                  paddingRight: '24px'
                }}
              >
                <option value="force">Force Layout</option>
                <option value="radial">Radial Layout</option>
                <option value="grid">Grid Layout</option>
                <option value="horizontal">Horizontal Layout</option>
                <option value="random">Random Layout</option>
              </select>
  
              <input
                type="text"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                placeholder="Search nodes..."
                style={{
                  padding: '6px 8px',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  marginRight: '5px'
                }}
              />
              <button onClick={handleSearch} style={buttonStyle}>
                Search
              </button>
            </div>
          </div>
  
          {/* Graph area */}
          <div style={{ position: 'relative', height: '700px', width: '100%' }}>
            <svg
              ref={svgRef}
              style={{
                width: '100%',
                height: '100%',
                display: 'block',
                backgroundColor: '#fff'
              }}
            />
            <div ref={tooltipRef}></div>
          </div>
  
          {/* Legend */}
          <div
            style={{
              padding: '10px',
              backgroundColor: '#f8f9fa',
              borderTop: '1px solid #ddd',
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                maxWidth: '700px'
              }}
            >
              <LegendItem color="#4285F4" label="Government" />
              <LegendItem color="#EA4335" label="Diplomatic" />
              <LegendItem color="#FBBC05" label="Business" />
              <LegendItem color="#34A853" label="Industry Organisations" />
              <LegendItem color="#9C27B0" label="Third Party" />
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  // Simple consistent button styling
  const buttonStyle = {
    backgroundColor: '#1e88e5',
    color: 'white',
    border: 'none',
    padding: '8px 12px',
    margin: '0 5px 5px 0',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px'
  };
  
  function LegendItem({ color, label }) {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          margin: '0 15px 5px 0'
        }}
      >
        <div
          style={{
            width: '16px',
            height: '16px',
            marginRight: '8px',
            borderRadius: '3px',
            backgroundColor: color,
            border: '1px solid #ccc'
          }}
        ></div>
        <span>{label}</span>
      </div>
    );
  }
  
  export default App;
  