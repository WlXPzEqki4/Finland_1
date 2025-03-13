// import React, { useEffect, useRef, useState } from 'react';
// import * as d3 from 'd3';

// const NetworkDiagram = () => {
//   const svgRef = useRef(null);
//   const affSvgRef = useRef(null);
//   const [data, setData] = useState(null);
//   const [selectedPerson, setSelectedPerson] = useState(null);
//   const [ministers, setMinisters] = useState([]);
//   const [activeTab, setActiveTab] = useState('keyPoints');
//   const [expandedTags, setExpandedTags] = useState({});
//   const [expandedProse, setExpandedProse] = useState({});
  
//   // Force simulation references
//   const simRefs = useRef({ network: null, affiliations: null });

//   // Minister images
//   const ministerImages = {
//     person_SandraBergqvist: "/api/placeholder/300/400",
//     person_AnnaKaisaIkonen: "/api/placeholder/300/400"
//   };

//   // Load data
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await window.fs.readFile('paste.txt', { encoding: 'utf8' });
//         const parsedData = JSON.parse(response);
        
//         const peopleNodes = parsedData.graph.persons;
//         setMinisters(peopleNodes);
//         setSelectedPerson(peopleNodes[0]?.id);
//         setData(parsedData.graph);

//         // Initialize expansion states
//         const tagState = {};
//         const proseState = {};
        
//         peopleNodes.forEach(person => {
//           const isFirst = person.id === peopleNodes[0]?.id;
          
//           person.metadata.keyThematicTags.forEach((tag, i) => {
//             tagState[`${person.id}_${i}`] = isFirst && i === 0;
//           });
          
//           person.metadata.originalProse.forEach((prose, i) => {
//             proseState[`${person.id}_${i}`] = false;
//           });
//         });
        
//         setExpandedTags(tagState);
//         setExpandedProse(proseState);
//       } catch (error) {
//         console.error('Error loading data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   // Toggle tag expansion
//   const toggleTag = (personId, index) => {
//     const key = `${personId}_${index}`;
//     setExpandedTags(prev => ({...prev, [key]: !prev[key]}));
//   };

//   // Toggle prose expansion
//   const toggleProse = (personId, index) => {
//     const key = `${personId}_${index}`;
//     setExpandedProse(prev => ({...prev, [key]: !prev[key]}));
//   };
  
//   // Hexagon path helper
//   const hexagonPath = (size) => {
//     const points = [];
//     for (let i = 0; i < 6; i++) {
//       const angle = (i * Math.PI / 3) - (Math.PI / 6);
//       points.push([size * Math.cos(angle), size * Math.sin(angle)]);
//     }
//     return `M${points.map(p => p.join(',')).join('L')}Z`;
//   };

//   // Render network visualization
//   useEffect(() => {
//     if (activeTab === 'network') {
//       renderNetwork();
//     } else if (activeTab === 'affiliations') {
//       renderAffiliations();
//     }
//   }, [activeTab, selectedPerson]);

//   // Render theme network
//   const renderNetwork = () => {
//     if (!data || !selectedPerson || !svgRef.current) return;
    
//     const width = 700;
//     const height = 700;
//     const svg = d3.select(svgRef.current);
//     svg.selectAll('*').remove();
    
//     svg.attr('width', width).attr('height', height).attr('viewBox', [0, 0, width, height]);

//     const personNode = data.persons.find(p => p.id === selectedPerson);
//     if (!personNode) return;

//     // Create nodes for visualization
//     const nodes = [
//       { id: personNode.id, label: personNode.label, type: 'Person' },
//       ...personNode.metadata.keyThematicTags.map((tag, i) => ({
//         id: `${personNode.id}_theme_${i}`, label: tag.theme, type: 'Theme'
//       })),
//       ...personNode.metadata.keyThematicTags.flatMap((tag, tagI) => 
//         tag.supportingEvidence.map((evidence, evI) => ({
//           id: `${personNode.id}_theme_${tagI}_evidence_${evI}`,
//           label: evidence, type: 'Evidence', parentTheme: tagI
//         }))
//       )
//     ];

//     // Create links
//     const links = [
//       ...personNode.metadata.keyThematicTags.map((tag, i) => ({
//         source: personNode.id, target: `${personNode.id}_theme_${i}`, type: 'Person-Theme'
//       })),
//       ...personNode.metadata.keyThematicTags.flatMap((tag, tagI) => 
//         tag.supportingEvidence.map((evidence, evI) => ({
//           source: `${personNode.id}_theme_${tagI}`,
//           target: `${personNode.id}_theme_${tagI}_evidence_${evI}`,
//           type: 'Theme-Evidence'
//         }))
//       )
//     ];

//     // Node colors
//     const nodeColors = {
//       Person: '#4169E1', Theme: '#FF8C00', Evidence: '#32CD32'
//     };

//     // Stop existing simulation if running
//     if (simRefs.current.network) simRefs.current.network.stop();
    
//     // Create force simulation
//     const simulation = d3.forceSimulation(nodes)
//       .force('link', d3.forceLink(links).id(d => d.id)
//         .distance(d => d.type === 'Person-Theme' ? 100 : 60))
//       .force('charge', d3.forceManyBody().strength(-300))
//       .force('center', d3.forceCenter(width / 2, height / 2))
//       .force('collision', d3.forceCollide().radius(d => 
//         d.type === 'Person' ? 30 : d.type === 'Theme' ? 25 : 20
//       ));
    
//     simRefs.current.network = simulation;

//     // Create main group for zooming
//     const g = svg.append('g');
    
//     // Add zoom behavior
//     svg.call(d3.zoom()
//       .extent([[0, 0], [width, height]])
//       .scaleExtent([0.5, 2])
//       .on('zoom', (event) => {
//         g.attr('transform', event.transform);
//       }));

//     // Create links
//     const link = g.append('g')
//       .selectAll('line')
//       .data(links)
//       .join('line')
//       .attr('stroke', d => d.type === 'Person-Theme' ? '#4682B4' : '#87CEEB')
//       .attr('stroke-width', d => d.type === 'Person-Theme' ? 3 : 1.5)
//       .attr('stroke-dasharray', d => d.type === 'Theme-Evidence' ? '5,5' : 'none');

//     // Create nodes
//     const node = g.append('g')
//       .selectAll('.node')
//       .data(nodes)
//       .join('g')
//       .attr('class', 'node')
//       .call(d3.drag()
//         .on('start', (event, d) => {
//           if (!event.active) simulation.alphaTarget(0.3).restart();
//           d.fx = d.x;
//           d.fy = d.y;
//         })
//         .on('drag', (event, d) => {
//           d.fx = event.x;
//           d.fy = event.y;
//         })
//         .on('end', (event, d) => {
//           if (!event.active) simulation.alphaTarget(0);
//           d.fx = null;
//           d.fy = null;
//         }));

//     // Add shapes for nodes
//     node.each(function(d) {
//       const el = d3.select(this);
      
//       if (d.type === 'Person') {
//         el.append('circle')
//           .attr('r', 30)
//           .attr('fill', nodeColors.Person)
//           .attr('stroke', '#fff')
//           .attr('stroke-width', 2);
//       } else if (d.type === 'Theme') {
//         el.append('rect')
//           .attr('x', -60)
//           .attr('y', -20)
//           .attr('width', 120)
//           .attr('height', 40)
//           .attr('rx', 15)
//           .attr('ry', 15)
//           .attr('fill', nodeColors.Theme)
//           .attr('stroke', '#fff')
//           .attr('stroke-width', 1.5);
//       } else {
//         el.append('rect')
//           .attr('x', -50)
//           .attr('y', -15)
//           .attr('width', 100)
//           .attr('height', 30)
//           .attr('rx', 10)
//           .attr('ry', 10)
//           .attr('fill', nodeColors.Evidence)
//           .attr('stroke', '#fff')
//           .attr('stroke-width', 1);
//       }
//     });

//     // Add text labels
//     node.append('text')
//       .attr('text-anchor', 'middle')
//       .attr('fill', d => d.type === 'Person' ? '#fff' : '#000')
//       .attr('dy', d => d.type === 'Person' ? 0 : 5)
//       .attr('font-weight', d => d.type === 'Person' ? 'bold' : 'normal')
//       .attr('font-size', d => d.type === 'Person' ? '14px' : '12px')
//       .each(function(d) {
//         const text = d3.select(this);
        
//         if (d.type === 'Person') {
//           text.text(d.label.replace('H.E. ', ''));
//         } else if (d.type === 'Theme') {
//           text.text(d.label);
//         } else {
//           const shortText = d.label.length > 40 ? d.label.substring(0, 37) + '...' : d.label;
//           text.text(shortText);
//         }
//       });

//     // Update positions on tick
//     simulation.on('tick', () => {
//       link
//         .attr('x1', d => d.source.x)
//         .attr('y1', d => d.source.y)
//         .attr('x2', d => d.target.x)
//         .attr('y2', d => d.target.y);

//       node.attr('transform', d => `translate(${d.x},${d.y})`);
//     });

//     // Add legend
//     const legend = svg.append('g')
//       .attr('transform', 'translate(20, 20)');

//     legend.append('circle')
//       .attr('cx', 10)
//       .attr('cy', 10)
//       .attr('r', 8)
//       .attr('fill', nodeColors.Person);

//     legend.append('text')
//       .attr('x', 25)
//       .attr('y', 13)
//       .text('Minister');

//     legend.append('rect')
//       .attr('x', 5)
//       .attr('y', 27)
//       .attr('width', 10)
//       .attr('height', 10)
//       .attr('rx', 3)
//       .attr('fill', nodeColors.Theme);

//     legend.append('text')
//       .attr('x', 25)
//       .attr('y', 35)
//       .text('Thematic Area');

//     legend.append('rect')
//       .attr('x', 5)
//       .attr('y', 47)
//       .attr('width', 10)
//       .attr('height', 10)
//       .attr('rx', 3)
//       .attr('fill', nodeColors.Evidence);

//     legend.append('text')
//       .attr('x', 25)
//       .attr('y', 55)
//       .text('Supporting Evidence');
//   };

//   // Render affiliations network
//   const renderAffiliations = () => {
//     if (!data || !selectedPerson || !affSvgRef.current) return;
    
//     const width = 700;
//     const height = 700;
//     const svg = d3.select(affSvgRef.current);
//     svg.selectAll('*').remove();
    
//     svg.attr('width', width).attr('height', height).attr('viewBox', [0, 0, width, height]);

//     const personNode = data.persons.find(p => p.id === selectedPerson);
//     if (!personNode || !personNode.metadata.affiliations) return;

//     // Create nodes for visualization
//     const nodes = [
//       { id: personNode.id, label: personNode.label, type: 'Person' },
//       ...personNode.metadata.affiliations.map((aff, i) => ({
//         id: `${personNode.id}_aff_${i}`,
//         label: aff.entity,
//         relationship: aff.relationship,
//         type: 'Affiliation'
//       }))
//     ];

//     // Create links
//     const links = personNode.metadata.affiliations.map((aff, i) => ({
//       source: personNode.id,
//       target: `${personNode.id}_aff_${i}`,
//       type: 'Person-Affiliation'
//     }));

//     // Node colors
//     const nodeColors = {
//       Person: '#4169E1', Affiliation: '#9932CC'
//     };

//     // Stop existing simulation if running
//     if (simRefs.current.affiliations) simRefs.current.affiliations.stop();
    
//     // Create force simulation
//     const simulation = d3.forceSimulation(nodes)
//       .force('link', d3.forceLink(links).id(d => d.id).distance(120))
//       .force('charge', d3.forceManyBody().strength(-500))
//       .force('center', d3.forceCenter(width / 2, height / 2))
//       .force('collision', d3.forceCollide().radius(d => d.type === 'Person' ? 30 : 40));
    
//     simRefs.current.affiliations = simulation;

//     // Create main group for zooming
//     const g = svg.append('g');
    
//     // Add zoom behavior
//     svg.call(d3.zoom()
//       .extent([[0, 0], [width, height]])
//       .scaleExtent([0.5, 2])
//       .on('zoom', (event) => {
//         g.attr('transform', event.transform);
//       }));

//     // Create links
//     const link = g.append('g')
//       .selectAll('line')
//       .data(links)
//       .join('line')
//       .attr('stroke', '#6A5ACD')
//       .attr('stroke-width', 3);

//     // Create nodes
//     const node = g.append('g')
//       .selectAll('.node')
//       .data(nodes)
//       .join('g')
//       .attr('class', 'node')
//       .call(d3.drag()
//         .on('start', (event, d) => {
//           if (!event.active) simulation.alphaTarget(0.3).restart();
//           d.fx = d.x;
//           d.fy = d.y;
//         })
//         .on('drag', (event, d) => {
//           d.fx = event.x;
//           d.fy = event.y;
//         })
//         .on('end', (event, d) => {
//           if (!event.active) simulation.alphaTarget(0);
//           d.fx = null;
//           d.fy = null;
//         }));

//     // Add shapes for nodes
//     node.each(function(d) {
//       const el = d3.select(this);
      
//       if (d.type === 'Person') {
//         el.append('circle')
//           .attr('r', 30)
//           .attr('fill', nodeColors.Person)
//           .attr('stroke', '#fff')
//           .attr('stroke-width', 2);
//       } else {
//         el.append('path')
//           .attr('d', hexagonPath(40))
//           .attr('fill', nodeColors.Affiliation)
//           .attr('stroke', '#fff')
//           .attr('stroke-width', 1.5);
//       }
//     });

//     // Add text labels
//     node.append('text')
//       .attr('text-anchor', 'middle')
//       .attr('fill', '#fff')
//       .attr('dy', 0)
//       .attr('font-weight', 'bold')
//       .attr('font-size', '14px')
//       .each(function(d) {
//         const text = d3.select(this);
        
//         if (d.type === 'Person') {
//           text.text(d.label.replace('H.E. ', ''));
//         } else {
//           const words = d.label.split(' ');
//           text.text(null);
          
//           if (words.length <= 2) {
//             text.text(d.label);
//           } else {
//             const lines = [];
//             let currentLine = [];
            
//             words.forEach(word => {
//               if (currentLine.length < 2) {
//                 currentLine.push(word);
//               } else {
//                 lines.push(currentLine.join(' '));
//                 currentLine = [word];
//               }
//             });
            
//             if (currentLine.length > 0) {
//               lines.push(currentLine.join(' '));
//             }
            
//             lines.forEach((line, i) => {
//               text.append('tspan')
//                 .attr('x', 0)
//                 .attr('dy', i === 0 ? -10 : 20)
//                 .text(line);
//             });
//           }
//         }
//       });

//     // Update positions on tick
//     simulation.on('tick', () => {
//       link
//         .attr('x1', d => d.source.x)
//         .attr('y1', d => d.source.y)
//         .attr('x2', d => d.target.x)
//         .attr('y2', d => d.target.y);

//       node.attr('transform', d => `translate(${d.x},${d.y})`);
//     });
//   };

//   // Get selected person data
//   const getPersonData = () => {
//     if (!data || !selectedPerson) return null;
//     return data.persons.find(person => person.id === selectedPerson);
//   };

//   const personData = getPersonData();

//   if (!personData) {
//     return <div className="flex justify-center items-center h-full">Loading...</div>;
//   }

//   // Render the UI
//   return (
//     <div className="flex flex-col w-full bg-gray-50 p-4 rounded-xl">
//       <h1 className="text-3xl font-bold text-center mb-6">Finnish Ministers Profile Explorer</h1>

//       {/* Minister selector */}
//       <div className="flex justify-center gap-4 mb-6">
//         {ministers.map(minister => (
//           <button
//             key={minister.id}
//             onClick={() => setSelectedPerson(minister.id)}
//             className={`px-6 py-2 rounded-full text-white font-medium transition-all ${
//               selectedPerson === minister.id 
//                 ? 'bg-blue-600 shadow-md' 
//                 : 'bg-blue-400 hover:bg-blue-500'
//             }`}
//           >
//             {minister.label.replace('H.E. ', '')}
//           </button>
//         ))}
//       </div>

//       {/* Profile container */}
//       <div className="w-full max-w-5xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
//         <div className="p-6">
//           {/* Minister header with image */}
//           <div className="flex flex-col md:flex-row">
//             <div className="md:w-1/4 flex-shrink-0 mb-4 md:mb-0">
//               <img 
//                 src={ministerImages[personData.id]} 
//                 alt={personData.label.replace('H.E. ', '')} 
//                 className="rounded-lg shadow-md max-w-full h-auto"
//               />
//             </div>
            
//             <div className="md:w-3/4 md:pl-6 flex flex-col justify-center">
//               <h2 className="text-2xl font-bold mb-3">{personData.label}</h2>
//               <p className="text-lg mb-4">{personData.metadata?.shortBio}</p>
//             </div>
//           </div>
          
//           {/* Tabs */}
//           <div className="flex border-b border-gray-200 mt-6">
//             {['keyPoints', 'thematicTags', 'prose', 'network', 'affiliations'].map(tab => (
//               <button
//                 key={tab}
//                 onClick={() => setActiveTab(tab)}
//                 className={`px-4 py-2 font-medium ${
//                   activeTab === tab
//                     ? 'border-b-2 border-blue-500 text-blue-600'
//                     : 'text-gray-500 hover:text-gray-700'
//                 }`}
//               >
//                 {tab === 'keyPoints' ? 'Key Points' : 
//                  tab === 'thematicTags' ? 'Thematic Tags' :
//                  tab === 'prose' ? 'Original Prose' : 
//                  tab === 'network' ? 'Network' : 'Affiliations'}
//               </button>
//             ))}
//           </div>
          
//           {/* Tab content */}
//           <div className="mt-4">
//             {/* Key Points */}
//             {activeTab === 'keyPoints' && (
//               <div className="p-4">
//                 <ul className="list-disc pl-6 space-y-2">
//                   {personData.metadata?.keyPoints.map((point, index) => (
//                     <li key={index} className="text-gray-700">{point}</li>
//                   ))}
//                 </ul>
//               </div>
//             )}
            
//             {/* Thematic Tags */}
//             {activeTab === 'thematicTags' && (
//               <div className="p-4 space-y-4">
//                 {personData.metadata?.keyThematicTags.map((tag, tagIndex) => {
//                   const isExpanded = expandedTags[`${personData.id}_${tagIndex}`];
                  
//                   return (
//                     <div key={tagIndex} className="border rounded-lg overflow-hidden">
//                       <button 
//                         onClick={() => toggleTag(personData.id, tagIndex)}
//                         className="w-full flex justify-between items-center bg-orange-50 p-3 hover:bg-orange-100 transition-colors text-left"
//                       >
//                         <span className="font-medium text-orange-800">{tag.theme}</span>
//                         <span>{isExpanded ? '−' : '+'}</span>
//                       </button>
                      
//                       {isExpanded && (
//                         <div className="p-3 bg-gray-50">
//                           <h4 className="font-medium mb-2 text-gray-700">Supporting Evidence:</h4>
//                           <ul className="list-disc pl-6 space-y-2">
//                             {tag.supportingEvidence.map((evidence, evidenceIndex) => (
//                               <li key={evidenceIndex} className="text-gray-600">{evidence}</li>
//                             ))}
//                           </ul>
//                         </div>
//                       )}
//                     </div>
//                   );
//                 })}
//               </div>
//             )}
            
//             {/* Original Prose */}
//             {activeTab === 'prose' && (
//               <div className="p-4 space-y-4">
//                 {personData.metadata?.originalProse.map((prose, proseIndex) => {
//                   const isExpanded = expandedProse[`${personData.id}_${proseIndex}`];
                  
//                   return (
//                     <div key={proseIndex} className="border rounded-lg overflow-hidden">
//                       <button 
//                         onClick={() => toggleProse(personData.id, proseIndex)}
//                         className="w-full flex justify-between items-center bg-blue-50 p-3 hover:bg-blue-100 transition-colors text-left"
//                       >
//                         <span className="font-medium text-blue-800">{prose.title}</span>
//                         <span>{isExpanded ? '−' : '+'}</span>
//                       </button>
                      
//                       {isExpanded && (
//                         <div className="p-3 bg-gray-50">
//                           <p className="text-gray-700 leading-relaxed">{prose.content}</p>
//                         </div>
//                       )}
//                     </div>
//                   );
//                 })}
//               </div>
//             )}
            
//             {/* Network Visualization */}
//             {activeTab === 'network' && (
//               <div className="p-4">
//                 <div 
//                   className="bg-white border border-gray-200 rounded-lg shadow-md mx-auto relative" 
//                   style={{ width: '700px', height: '700px' }}
//                 >
//                   <button
//                     onClick={renderNetwork}
//                     className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded text-sm z-10 hover:bg-blue-600"
//                   >
//                     Reset View
//                   </button>
//                   <svg ref={svgRef} className="w-full h-full"></svg>
//                 </div>
//                 <div className="mt-2 text-sm text-gray-600">
//                   <p><strong>Tip:</strong> Drag nodes to rearrange. Use mouse wheel to zoom.</p>
//                 </div>
//               </div>
//             )}
            
//             {/* Affiliations */}
//             {activeTab === 'affiliations' && (
//               <div className="p-4">
//                 {personData.metadata?.affiliations && personData.metadata.affiliations.length > 0 ? (
//                   <>
//                     <div className="mb-4">
//                       <ul className="list-disc pl-6 space-y-3">
//                         {personData.metadata.affiliations.map((aff, index) => (
//                           <li key={index} className="text-gray-700">
//                             <strong className="text-purple-700">{aff.entity}:</strong>{' '}
//                             {aff.relationship}
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
                    
//                     <div 
//                       className="bg-white border border-gray-200 rounded-lg shadow-md mx-auto relative mb-2" 
//                       style={{ width: '700px', height: '700px' }}
//                     >
//                       <button
//                         onClick={renderAffiliations}
//                         className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded text-sm z-10 hover:bg-blue-600"
//                       >
//                         Reset View
//                       </button>
//                       <svg ref={affSvgRef} className="w-full h-full"></svg>
//                     </div>
//                   </>
//                 ) : (
//                   <p className="text-gray-500 italic">No affiliations data available.</p>
//                 )}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NetworkDiagram;






























































// import React, { useEffect, useRef, useState } from 'react';
// import * as d3 from 'd3';
// import { ministersData, ministerImages, hexagonPath } from './minister-data';

// const NetworkDiagram = () => {
//   const svgRef = useRef(null);
//   const affSvgRef = useRef(null);
//   const [selectedPerson, setSelectedPerson] = useState(null);
//   const [ministers, setMinisters] = useState([]);
//   const [activeTab, setActiveTab] = useState('keyPoints');
//   const [expandedTags, setExpandedTags] = useState({});
//   const [expandedProse, setExpandedProse] = useState({});
  
//   // Force simulation references
//   const simRefs = useRef({ network: null, affiliations: null });

//   // Initialize on component mount
//   useEffect(() => {
//     const peopleNodes = ministersData.persons;
//     setMinisters(peopleNodes);
//     setSelectedPerson(peopleNodes[0]?.id);

//     // Initialize expansion states
//     const tagState = {};
//     const proseState = {};
    
//     peopleNodes.forEach(person => {
//       const isFirst = person.id === peopleNodes[0]?.id;
      
//       person.metadata.keyThematicTags.forEach((tag, i) => {
//         tagState[`${person.id}_${i}`] = isFirst && i === 0;
//       });
      
//       person.metadata.originalProse.forEach((prose, i) => {
//         proseState[`${person.id}_${i}`] = false;
//       });
//     });
    
//     setExpandedTags(tagState);
//     setExpandedProse(proseState);
//   }, []);

//   // Toggle tag expansion
//   const toggleTag = (personId, index) => {
//     const key = `${personId}_${index}`;
//     setExpandedTags(prev => ({...prev, [key]: !prev[key]}));
//   };

//   // Toggle prose expansion
//   const toggleProse = (personId, index) => {
//     const key = `${personId}_${index}`;
//     setExpandedProse(prev => ({...prev, [key]: !prev[key]}));
//   };

//   // Render network visualization
//   useEffect(() => {
//     if (activeTab === 'network') {
//       renderNetwork();
//     } else if (activeTab === 'affiliations') {
//       renderAffiliations();
//     }
//   }, [activeTab, selectedPerson]);

//   // Render theme network
//   const renderNetwork = () => {
//     if (!selectedPerson || !svgRef.current) return;
    
//     const width = 700;
//     const height = 700;
//     const svg = d3.select(svgRef.current);
//     svg.selectAll('*').remove();
    
//     svg.attr('width', width).attr('height', height).attr('viewBox', [0, 0, width, height]);

//     const personNode = ministersData.persons.find(p => p.id === selectedPerson);
//     if (!personNode) return;

//     // Create nodes for visualization
//     const nodes = [
//       { id: personNode.id, label: personNode.label, type: 'Person' },
//       ...personNode.metadata.keyThematicTags.map((tag, i) => ({
//         id: `${personNode.id}_theme_${i}`, label: tag.theme, type: 'Theme'
//       })),
//       ...personNode.metadata.keyThematicTags.flatMap((tag, tagI) => 
//         tag.supportingEvidence.map((evidence, evI) => ({
//           id: `${personNode.id}_theme_${tagI}_evidence_${evI}`,
//           label: evidence, type: 'Evidence', parentTheme: tagI
//         }))
//       )
//     ];

//     // Create links
//     const links = [
//       ...personNode.metadata.keyThematicTags.map((tag, i) => ({
//         source: personNode.id, target: `${personNode.id}_theme_${i}`, type: 'Person-Theme'
//       })),
//       ...personNode.metadata.keyThematicTags.flatMap((tag, tagI) => 
//         tag.supportingEvidence.map((evidence, evI) => ({
//           source: `${personNode.id}_theme_${tagI}`,
//           target: `${personNode.id}_theme_${tagI}_evidence_${evI}`,
//           type: 'Theme-Evidence'
//         }))
//       )
//     ];

//     // Node colors
//     const nodeColors = {
//       Person: '#4169E1', Theme: '#FF8C00', Evidence: '#32CD32'
//     };

//     // Stop existing simulation if running
//     if (simRefs.current.network) simRefs.current.network.stop();
    
//     // Create force simulation
//     const simulation = d3.forceSimulation(nodes)
//       .force('link', d3.forceLink(links).id(d => d.id)
//         .distance(d => d.type === 'Person-Theme' ? 100 : 60))
//       .force('charge', d3.forceManyBody().strength(-300))
//       .force('center', d3.forceCenter(width / 2, height / 2))
//       .force('collision', d3.forceCollide().radius(d => 
//         d.type === 'Person' ? 30 : d.type === 'Theme' ? 25 : 20
//       ));
    
//     simRefs.current.network = simulation;

//     // Create main group for zooming
//     const g = svg.append('g');
    
//     // Add zoom behavior
//     svg.call(d3.zoom()
//       .extent([[0, 0], [width, height]])
//       .scaleExtent([0.5, 2])
//       .on('zoom', (event) => {
//         g.attr('transform', event.transform);
//       }));

//     // Create links
//     const link = g.append('g')
//       .selectAll('line')
//       .data(links)
//       .join('line')
//       .attr('stroke', d => d.type === 'Person-Theme' ? '#4682B4' : '#87CEEB')
//       .attr('stroke-width', d => d.type === 'Person-Theme' ? 3 : 1.5)
//       .attr('stroke-dasharray', d => d.type === 'Theme-Evidence' ? '5,5' : 'none');

//     // Create nodes
//     const node = g.append('g')
//       .selectAll('.node')
//       .data(nodes)
//       .join('g')
//       .attr('class', 'node')
//       .call(d3.drag()
//         .on('start', (event, d) => {
//           if (!event.active) simulation.alphaTarget(0.3).restart();
//           d.fx = d.x;
//           d.fy = d.y;
//         })
//         .on('drag', (event, d) => {
//           d.fx = event.x;
//           d.fy = event.y;
//         })
//         .on('end', (event, d) => {
//           if (!event.active) simulation.alphaTarget(0);
//           d.fx = null;
//           d.fy = null;
//         }));

//     // Add shapes for nodes
//     node.each(function(d) {
//       const el = d3.select(this);
      
//       if (d.type === 'Person') {
//         el.append('circle')
//           .attr('r', 30)
//           .attr('fill', nodeColors.Person)
//           .attr('stroke', '#fff')
//           .attr('stroke-width', 2);
//       } else if (d.type === 'Theme') {
//         el.append('rect')
//           .attr('x', -60)
//           .attr('y', -20)
//           .attr('width', 120)
//           .attr('height', 40)
//           .attr('rx', 15)
//           .attr('ry', 15)
//           .attr('fill', nodeColors.Theme)
//           .attr('stroke', '#fff')
//           .attr('stroke-width', 1.5);
//       } else {
//         el.append('rect')
//           .attr('x', -50)
//           .attr('y', -15)
//           .attr('width', 100)
//           .attr('height', 30)
//           .attr('rx', 10)
//           .attr('ry', 10)
//           .attr('fill', nodeColors.Evidence)
//           .attr('stroke', '#fff')
//           .attr('stroke-width', 1);
//       }
//     });

//     // Add text labels
//     node.append('text')
//       .attr('text-anchor', 'middle')
//       .attr('fill', d => d.type === 'Person' ? '#fff' : '#000')
//       .attr('dy', d => d.type === 'Person' ? 0 : 5)
//       .attr('font-weight', d => d.type === 'Person' ? 'bold' : 'normal')
//       .attr('font-size', d => d.type === 'Person' ? '14px' : '12px')
//       .each(function(d) {
//         const text = d3.select(this);
        
//         if (d.type === 'Person') {
//           text.text(d.label.replace('H.E. ', ''));
//         } else if (d.type === 'Theme') {
//           text.text(d.label);
//         } else {
//           const shortText = d.label.length > 40 ? d.label.substring(0, 37) + '...' : d.label;
//           text.text(shortText);
//         }
//       });

//     // Update positions on tick
//     simulation.on('tick', () => {
//       link
//         .attr('x1', d => d.source.x)
//         .attr('y1', d => d.source.y)
//         .attr('x2', d => d.target.x)
//         .attr('y2', d => d.target.y);

//       node.attr('transform', d => `translate(${d.x},${d.y})`);
//     });

//     // Add legend
//     const legend = svg.append('g')
//       .attr('transform', 'translate(20, 20)');

//     legend.append('circle')
//       .attr('cx', 10)
//       .attr('cy', 10)
//       .attr('r', 8)
//       .attr('fill', nodeColors.Person);

//     legend.append('text')
//       .attr('x', 25)
//       .attr('y', 13)
//       .text('Minister');

//     legend.append('rect')
//       .attr('x', 5)
//       .attr('y', 27)
//       .attr('width', 10)
//       .attr('height', 10)
//       .attr('rx', 3)
//       .attr('fill', nodeColors.Theme);

//     legend.append('text')
//       .attr('x', 25)
//       .attr('y', 35)
//       .text('Thematic Area');

//     legend.append('rect')
//       .attr('x', 5)
//       .attr('y', 47)
//       .attr('width', 10)
//       .attr('height', 10)
//       .attr('rx', 3)
//       .attr('fill', nodeColors.Evidence);

//     legend.append('text')
//       .attr('x', 25)
//       .attr('y', 55)
//       .text('Supporting Evidence');
//   };

//   // Render affiliations network
//   const renderAffiliations = () => {
//     if (!selectedPerson || !affSvgRef.current) return;
    
//     const width = 700;
//     const height = 700;
//     const svg = d3.select(affSvgRef.current);
//     svg.selectAll('*').remove();
    
//     svg.attr('width', width).attr('height', height).attr('viewBox', [0, 0, width, height]);

//     const personNode = ministersData.persons.find(p => p.id === selectedPerson);
//     if (!personNode || !personNode.metadata.affiliations) return;

//     // Create nodes for visualization
//     const nodes = [
//       { id: personNode.id, label: personNode.label, type: 'Person' },
//       ...personNode.metadata.affiliations.map((aff, i) => ({
//         id: `${personNode.id}_aff_${i}`,
//         label: aff.entity,
//         relationship: aff.relationship,
//         type: 'Affiliation'
//       }))
//     ];

//     // Create links
//     const links = personNode.metadata.affiliations.map((aff, i) => ({
//       source: personNode.id,
//       target: `${personNode.id}_aff_${i}`,
//       type: 'Person-Affiliation'
//     }));

//     // Node colors
//     const nodeColors = {
//       Person: '#4169E1', Affiliation: '#9932CC'
//     };

//     // Stop existing simulation if running
//     if (simRefs.current.affiliations) simRefs.current.affiliations.stop();
    
//     // Create force simulation
//     const simulation = d3.forceSimulation(nodes)
//       .force('link', d3.forceLink(links).id(d => d.id).distance(120))
//       .force('charge', d3.forceManyBody().strength(-500))
//       .force('center', d3.forceCenter(width / 2, height / 2))
//       .force('collision', d3.forceCollide().radius(d => d.type === 'Person' ? 30 : 40));
    
//     simRefs.current.affiliations = simulation;

//     // Create main group for zooming
//     const g = svg.append('g');
    
//     // Add zoom behavior
//     svg.call(d3.zoom()
//       .extent([[0, 0], [width, height]])
//       .scaleExtent([0.5, 2])
//       .on('zoom', (event) => {
//         g.attr('transform', event.transform);
//       }));

//     // Create links
//     const link = g.append('g')
//       .selectAll('line')
//       .data(links)
//       .join('line')
//       .attr('stroke', '#6A5ACD')
//       .attr('stroke-width', 3);

//     // Create nodes
//     const node = g.append('g')
//       .selectAll('.node')
//       .data(nodes)
//       .join('g')
//       .attr('class', 'node')
//       .call(d3.drag()
//         .on('start', (event, d) => {
//           if (!event.active) simulation.alphaTarget(0.3).restart();
//           d.fx = d.x;
//           d.fy = d.y;
//         })
//         .on('drag', (event, d) => {
//           d.fx = event.x;
//           d.fy = event.y;
//         })
//         .on('end', (event, d) => {
//           if (!event.active) simulation.alphaTarget(0);
//           d.fx = null;
//           d.fy = null;
//         }));

//     // Add shapes for nodes
//     node.each(function(d) {
//       const el = d3.select(this);
      
//       if (d.type === 'Person') {
//         el.append('circle')
//           .attr('r', 30)
//           .attr('fill', nodeColors.Person)
//           .attr('stroke', '#fff')
//           .attr('stroke-width', 2);
//       } else {
//         el.append('path')
//           .attr('d', hexagonPath(40))
//           .attr('fill', nodeColors.Affiliation)
//           .attr('stroke', '#fff')
//           .attr('stroke-width', 1.5);
//       }
//     });

//     // Add text labels
//     node.append('text')
//       .attr('text-anchor', 'middle')
//       .attr('fill', '#fff')
//       .attr('dy', 0)
//       .attr('font-weight', 'bold')
//       .attr('font-size', '14px')
//       .each(function(d) {
//         const text = d3.select(this);
        
//         if (d.type === 'Person') {
//           text.text(d.label.replace('H.E. ', ''));
//         } else {
//           const words = d.label.split(' ');
//           text.text(null);
          
//           if (words.length <= 2) {
//             text.text(d.label);
//           } else {
//             const lines = [];
//             let currentLine = [];
            
//             words.forEach(word => {
//               if (currentLine.length < 2) {
//                 currentLine.push(word);
//               } else {
//                 lines.push(currentLine.join(' '));
//                 currentLine = [word];
//               }
//             });
            
//             if (currentLine.length > 0) {
//               lines.push(currentLine.join(' '));
//             }
            
//             lines.forEach((line, i) => {
//               text.append('tspan')
//                 .attr('x', 0)
//                 .attr('dy', i === 0 ? -10 : 20)
//                 .text(line);
//             });
//           }
//         }
//       });

//     // Update positions on tick
//     simulation.on('tick', () => {
//       link
//         .attr('x1', d => d.source.x)
//         .attr('y1', d => d.source.y)
//         .attr('x2', d => d.target.x)
//         .attr('y2', d => d.target.y);

//       node.attr('transform', d => `translate(${d.x},${d.y})`);
//     });
//   };

//   // Get selected person data
//   const getPersonData = () => {
//     if (!selectedPerson) return null;
//     return ministersData.persons.find(person => person.id === selectedPerson);
//   };

//   const personData = getPersonData();

//   if (!personData) {
//     return <div className="flex justify-center items-center h-full">Loading...</div>;
//   }

//   // Render the UI
//   return (
//     <div className="flex flex-col w-full bg-gray-50 p-4 rounded-xl">
//       <h1 className="text-3xl font-bold text-center mb-6">Finnish Ministers Profile Explorer</h1>

//       {/* Minister selector */}
//       <div className="flex justify-center gap-4 mb-6">
//         {ministers.map(minister => (
//           <button
//             key={minister.id}
//             onClick={() => setSelectedPerson(minister.id)}
//             className={`px-6 py-2 rounded-full text-white font-medium transition-all ${
//               selectedPerson === minister.id 
//                 ? 'bg-blue-600 shadow-md' 
//                 : 'bg-blue-400 hover:bg-blue-500'
//             }`}
//           >
//             {minister.label.replace('H.E. ', '')}
//           </button>
//         ))}
//       </div>

//       {/* Profile container */}
//       <div className="w-full max-w-5xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
//         <div className="p-6">
//           {/* Minister header with image */}
//           <div className="flex flex-col md:flex-row">
//             <div className="md:w-1/4 flex-shrink-0 mb-4 md:mb-0">
//               <img 
//                 src={ministerImages[personData.id]} 
//                 alt={personData.label.replace('H.E. ', '')} 
//                 className="rounded-lg shadow-md max-w-full h-auto"
//               />
//             </div>
            
//             <div className="md:w-3/4 md:pl-6 flex flex-col justify-center">
//               <h2 className="text-2xl font-bold mb-3">{personData.label}</h2>
//               <p className="text-lg mb-4">{personData.metadata?.shortBio}</p>
//             </div>
//           </div>
          
//           {/* Tabs */}
//           <div className="flex border-b border-gray-200 mt-6">
//             {['keyPoints', 'thematicTags', 'prose', 'network', 'affiliations'].map(tab => (
//               <button
//                 key={tab}
//                 onClick={() => setActiveTab(tab)}
//                 className={`px-4 py-2 font-medium ${
//                   activeTab === tab
//                     ? 'border-b-2 border-blue-500 text-blue-600'
//                     : 'text-gray-500 hover:text-gray-700'
//                 }`}
//               >
//                 {tab === 'keyPoints' ? 'Key Points' : 
//                  tab === 'thematicTags' ? 'Thematic Tags' :
//                  tab === 'prose' ? 'Original Prose' : 
//                  tab === 'network' ? 'Network' : 'Affiliations'}
//               </button>
//             ))}
//           </div>
          
//           {/* Tab content */}
//           <div className="mt-4">
//             {/* Key Points */}
//             {activeTab === 'keyPoints' && (
//               <div className="p-4">
//                 <ul className="list-disc pl-6 space-y-2">
//                   {personData.metadata?.keyPoints.map((point, index) => (
//                     <li key={index} className="text-gray-700">{point}</li>
//                   ))}
//                 </ul>
//               </div>
//             )}
            
//             {/* Thematic Tags */}
//             {activeTab === 'thematicTags' && (
//               <div className="p-4 space-y-4">
//                 {personData.metadata?.keyThematicTags.map((tag, tagIndex) => {
//                   const isExpanded = expandedTags[`${personData.id}_${tagIndex}`];
                  
//                   return (
//                     <div key={tagIndex} className="border rounded-lg overflow-hidden">
//                       <button 
//                         onClick={() => toggleTag(personData.id, tagIndex)}
//                         className="w-full flex justify-between items-center bg-orange-50 p-3 hover:bg-orange-100 transition-colors text-left"
//                       >
//                         <span className="font-medium text-orange-800">{tag.theme}</span>
//                         <span>{isExpanded ? '−' : '+'}</span>
//                       </button>
                      
//                       {isExpanded && (
//                         <div className="p-3 bg-gray-50">
//                           <h4 className="font-medium mb-2 text-gray-700">Supporting Evidence:</h4>
//                           <ul className="list-disc pl-6 space-y-2">
//                             {tag.supportingEvidence.map((evidence, evidenceIndex) => (
//                               <li key={evidenceIndex} className="text-gray-600">{evidence}</li>
//                             ))}
//                           </ul>
//                         </div>
//                       )}
//                     </div>
//                   );
//                 })}
//               </div>
//             )}
            
//             {/* Original Prose */}
//             {activeTab === 'prose' && (
//               <div className="p-4 space-y-4">
//                 {personData.metadata?.originalProse.map((prose, proseIndex) => {
//                   const isExpanded = expandedProse[`${personData.id}_${proseIndex}`];
                  
//                   return (
//                     <div key={proseIndex} className="border rounded-lg overflow-hidden">
//                       <button 
//                         onClick={() => toggleProse(personData.id, proseIndex)}
//                         className="w-full flex justify-between items-center bg-blue-50 p-3 hover:bg-blue-100 transition-colors text-left"
//                       >
//                         <span className="font-medium text-blue-800">{prose.title}</span>
//                         <span>{isExpanded ? '−' : '+'}</span>
//                       </button>
                      
//                       {isExpanded && (
//                         <div className="p-3 bg-gray-50">
//                           <p className="text-gray-700 leading-relaxed">{prose.content}</p>
//                         </div>
//                       )}
//                     </div>
//                   );
//                 })}
//               </div>
//             )}
            
//             {/* Network Visualization */}
//             {activeTab === 'network' && (
//               <div className="p-4">
//                 <div 
//                   className="bg-white border border-gray-200 rounded-lg shadow-md mx-auto relative" 
//                   style={{ width: '700px', height: '700px' }}
//                 >
//                   <button
//                     onClick={renderNetwork}
//                     className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded text-sm z-10 hover:bg-blue-600"
//                   >
//                     Reset View
//                   </button>
//                   <svg ref={svgRef} className="w-full h-full"></svg>
//                 </div>
//                 <div className="mt-2 text-sm text-gray-600">
//                   <p><strong>Tip:</strong> Drag nodes to rearrange. Use mouse wheel to zoom.</p>
//                 </div>
//               </div>
//             )}
            
//             {/* Affiliations */}
//             {activeTab === 'affiliations' && (
//               <div className="p-4">
//                 {personData.metadata?.affiliations && personData.metadata.affiliations.length > 0 ? (
//                   <>
//                     <div className="mb-4">
//                       <ul className="list-disc pl-6 space-y-3">
//                         {personData.metadata.affiliations.map((aff, index) => (
//                           <li key={index} className="text-gray-700">
//                             <strong className="text-purple-700">{aff.entity}:</strong>{' '}
//                             {aff.relationship}
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
                    
//                     <div 
//                       className="bg-white border border-gray-200 rounded-lg shadow-md mx-auto relative mb-2" 
//                       style={{ width: '700px', height: '700px' }}
//                     >
//                       <button
//                         onClick={renderAffiliations}
//                         className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded text-sm z-10 hover:bg-blue-600"
//                       >
//                         Reset View
//                       </button>
//                       <svg ref={affSvgRef} className="w-full h-full"></svg>
//                     </div>
//                   </>
//                 ) : (
//                   <p className="text-gray-500 italic">No affiliations data available.</p>
//                 )}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NetworkDiagram;


























import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { ministersData, ministerImages, hexagonPath } from './minister-data';

const NetworkDiagram = () => {
  const svgRef = useRef(null);
  const affSvgRef = useRef(null);
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [ministers, setMinisters] = useState([]);
  const [activeTab, setActiveTab] = useState('keyPoints');
  const [expandedTags, setExpandedTags] = useState({});
  const [expandedProse, setExpandedProse] = useState({});
  
  // Force simulation references
  const simRefs = useRef({ network: null, affiliations: null });

  // Initialize on component mount
  useEffect(() => {
    const peopleNodes = ministersData.persons;
    setMinisters(peopleNodes);
    setSelectedPerson(peopleNodes[0]?.id);

    // Initialize expansion states
    const tagState = {};
    const proseState = {};
    
    peopleNodes.forEach(person => {
      const isFirst = person.id === peopleNodes[0]?.id;
      
      person.metadata.keyThematicTags.forEach((tag, i) => {
        tagState[`${person.id}_${i}`] = isFirst && i === 0;
      });
      
      person.metadata.originalProse.forEach((prose, i) => {
        proseState[`${person.id}_${i}`] = false;
      });
    });
    
    setExpandedTags(tagState);
    setExpandedProse(proseState);
  }, []);

  // Toggle tag expansion
  const toggleTag = (personId, index) => {
    const key = `${personId}_${index}`;
    setExpandedTags(prev => ({...prev, [key]: !prev[key]}));
  };

  // Toggle prose expansion
  const toggleProse = (personId, index) => {
    const key = `${personId}_${index}`;
    setExpandedProse(prev => ({...prev, [key]: !prev[key]}));
  };

  // Render network visualization
  useEffect(() => {
    if (activeTab === 'network') {
      renderNetwork();
    } else if (activeTab === 'affiliations') {
      renderAffiliations();
    }
  }, [activeTab, selectedPerson]);

  // Render theme network
  const renderNetwork = () => {
    if (!selectedPerson || !svgRef.current) return;
    
    const width = 700;
    const height = 700;
    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();
    
    svg.attr('width', width).attr('height', height).attr('viewBox', [0, 0, width, height]);

    const personNode = ministersData.persons.find(p => p.id === selectedPerson);
    if (!personNode) return;

    // Create nodes for visualization
    const nodes = [
      { id: personNode.id, label: personNode.label, type: 'Person' },
      ...personNode.metadata.keyThematicTags.map((tag, i) => ({
        id: `${personNode.id}_theme_${i}`, label: tag.theme, type: 'Theme'
      })),
      ...personNode.metadata.keyThematicTags.flatMap((tag, tagI) => 
        tag.supportingEvidence.map((evidence, evI) => ({
          id: `${personNode.id}_theme_${tagI}_evidence_${evI}`,
          label: evidence, type: 'Evidence', parentTheme: tagI
        }))
      )
    ];

    // Create links
    const links = [
      ...personNode.metadata.keyThematicTags.map((tag, i) => ({
        source: personNode.id, target: `${personNode.id}_theme_${i}`, type: 'Person-Theme'
      })),
      ...personNode.metadata.keyThematicTags.flatMap((tag, tagI) => 
        tag.supportingEvidence.map((evidence, evI) => ({
          source: `${personNode.id}_theme_${tagI}`,
          target: `${personNode.id}_theme_${tagI}_evidence_${evI}`,
          type: 'Theme-Evidence'
        }))
      )
    ];

    // Node colors
    const nodeColors = {
      Person: '#4169E1', Theme: '#FF8C00', Evidence: '#32CD32'
    };

    // Stop existing simulation if running
    if (simRefs.current.network) simRefs.current.network.stop();
    
    // Create force simulation
    const simulation = d3.forceSimulation(nodes)
      .force('link', d3.forceLink(links).id(d => d.id)
        .distance(d => d.type === 'Person-Theme' ? 100 : 60))
      .force('charge', d3.forceManyBody().strength(-300))
      .force('center', d3.forceCenter(width / 2, height / 2))
      .force('collision', d3.forceCollide().radius(d => 
        d.type === 'Person' ? 30 : d.type === 'Theme' ? 25 : 20
      ));
    
    simRefs.current.network = simulation;

    // Create main group for zooming
    const g = svg.append('g');
    
    // Add zoom behavior
    svg.call(d3.zoom()
      .extent([[0, 0], [width, height]])
      .scaleExtent([0.5, 2])
      .on('zoom', (event) => {
        g.attr('transform', event.transform);
      }));

    // Create links
    const link = g.append('g')
      .selectAll('line')
      .data(links)
      .join('line')
      .attr('stroke', d => d.type === 'Person-Theme' ? '#4682B4' : '#87CEEB')
      .attr('stroke-width', d => d.type === 'Person-Theme' ? 3 : 1.5)
      .attr('stroke-dasharray', d => d.type === 'Theme-Evidence' ? '5,5' : 'none');

    // Create nodes
    const node = g.append('g')
      .selectAll('.node')
      .data(nodes)
      .join('g')
      .attr('class', 'node')



      // .call(d3.drag()
      //   .on('start', (event, d) => {
      //     if (!event.active) simulation.alphaTarget(0.3).restart();
      //     d.fx = d.x;
      //     d.fy = d.y;
      //   })
      //   .on('drag', (event, d) => {
      //     d.fx = event.x;
      //     d.fy = event.y;
      //   })
      //   .on('end', (event, d) => {
      //     if (!event.active) simulation.alphaTarget(0);
      //     d.fx = null;
      //     d.fy = null;
      //   }));



      // AFTER
      .call(d3.drag()
        .on('start', (event, d) => {
          if (!event.active) simulation.alphaTarget(0.3).restart();
          d.fx = d.x;
          d.fy = d.y;
        })
        .on('drag', (event, d) => {
          d.fx = event.x;
          d.fy = event.y;
        })
        .on('end', (event, d) => {
          if (!event.active) simulation.alphaTarget(0);
          // d.fx and d.fy remain set, so the node stays pinned
        })
      );






    // Add shapes for nodes
    node.each(function(d) {
      const el = d3.select(this);
      
      if (d.type === 'Person') {
        el.append('circle')
          .attr('r', 30)
          .attr('fill', nodeColors.Person)
          .attr('stroke', '#fff')
          .attr('stroke-width', 2);
      } else if (d.type === 'Theme') {
        el.append('rect')
          .attr('x', -60)
          .attr('y', -20)
          .attr('width', 120)
          .attr('height', 40)
          .attr('rx', 15)
          .attr('ry', 15)
          .attr('fill', nodeColors.Theme)
          .attr('stroke', '#fff')
          .attr('stroke-width', 1.5);
      } else {
        el.append('rect')
          .attr('x', -50)
          .attr('y', -15)
          .attr('width', 100)
          .attr('height', 30)
          .attr('rx', 10)
          .attr('ry', 10)
          .attr('fill', nodeColors.Evidence)
          .attr('stroke', '#fff')
          .attr('stroke-width', 1);
      }
    });

    // Add text labels
    // node.append('text')
    //   .attr('text-anchor', 'middle')
    //   .attr('fill', d => d.type === 'Person' ? '#fff' : '#000')
    //   .attr('dy', d => d.type === 'Person' ? 0 : 5)
    //   .attr('font-weight', d => d.type === 'Person' ? 'bold' : 'normal')
    //   .attr('font-size', d => d.type === 'Person' ? '14px' : '12px')
    //   .each(function(d) {


      node.append('text')
      .attr('text-anchor', 'middle')
      .attr('fill', d => d.type === 'Person' ? '#000' : '#000')
      .attr('dy', d => d.type === 'Person' ? 0 : 5)
      .attr('font-weight', d => d.type === 'Person' ? 'bold' : 'normal')
      .attr('font-size', d => d.type === 'Person' ? '14px' : '12px')
      .each(function(d) {
    
        const text = d3.select(this);
        
        if (d.type === 'Person') {
          text.text(d.label.replace('H.E. ', ''));
        } else if (d.type === 'Theme') {
          text.text(d.label);
        } else {
          const shortText = d.label.length > 40 ? d.label.substring(0, 37) + '...' : d.label;
          text.text(shortText);
        }
      });

    // Update positions on tick
    simulation.on('tick', () => {
      link
        .attr('x1', d => d.source.x)
        .attr('y1', d => d.source.y)
        .attr('x2', d => d.target.x)
        .attr('y2', d => d.target.y);

      node.attr('transform', d => `translate(${d.x},${d.y})`);
    });

    // Add legend
    const legend = svg.append('g')
      .attr('transform', 'translate(20, 20)');

    legend.append('circle')
      .attr('cx', 10)
      .attr('cy', 10)
      .attr('r', 8)
      .attr('fill', nodeColors.Person);

    legend.append('text')
      .attr('x', 25)
      .attr('y', 13)
      .text('Minister');

    legend.append('rect')
      .attr('x', 5)
      .attr('y', 27)
      .attr('width', 10)
      .attr('height', 10)
      .attr('rx', 3)
      .attr('fill', nodeColors.Theme);

    legend.append('text')
      .attr('x', 25)
      .attr('y', 35)
      .text('Thematic Area');

    legend.append('rect')
      .attr('x', 5)
      .attr('y', 47)
      .attr('width', 10)
      .attr('height', 10)
      .attr('rx', 3)
      .attr('fill', nodeColors.Evidence);

    legend.append('text')
      .attr('x', 25)
      .attr('y', 55)
      .text('Supporting Evidence');
  };

  // Render affiliations network
  const renderAffiliations = () => {
    if (!selectedPerson || !affSvgRef.current) return;
    
    const width = 700;
    const height = 700;
    const svg = d3.select(affSvgRef.current);
    svg.selectAll('*').remove();
    
    svg.attr('width', width).attr('height', height).attr('viewBox', [0, 0, width, height]);

    const personNode = ministersData.persons.find(p => p.id === selectedPerson);
    if (!personNode || !personNode.metadata.affiliations) return;

    // Create nodes for visualization
    const nodes = [
      { id: personNode.id, label: personNode.label, type: 'Person' },
      ...personNode.metadata.affiliations.map((aff, i) => ({
        id: `${personNode.id}_aff_${i}`,
        label: aff.entity,
        relationship: aff.relationship,
        type: 'Affiliation'
      }))
    ];

    // Create links
    const links = personNode.metadata.affiliations.map((aff, i) => ({
      source: personNode.id,
      target: `${personNode.id}_aff_${i}`,
      type: 'Person-Affiliation'
    }));

    // Node colors
    const nodeColors = {
      Person: '#4169E1', Affiliation: '#9932CC'
    };

    // Stop existing simulation if running
    if (simRefs.current.affiliations) simRefs.current.affiliations.stop();
    
    // Create force simulation
    const simulation = d3.forceSimulation(nodes)
      .force('link', d3.forceLink(links).id(d => d.id).distance(120))
      .force('charge', d3.forceManyBody().strength(-500))
      .force('center', d3.forceCenter(width / 2, height / 2))
      .force('collision', d3.forceCollide().radius(d => d.type === 'Person' ? 30 : 40));
    
    simRefs.current.affiliations = simulation;

    // Create main group for zooming
    const g = svg.append('g');
    
    // Add zoom behavior
    svg.call(d3.zoom()
      .extent([[0, 0], [width, height]])
      .scaleExtent([0.5, 2])
      .on('zoom', (event) => {
        g.attr('transform', event.transform);
      }));

    // Create links
    const link = g.append('g')
      .selectAll('line')
      .data(links)
      .join('line')
      .attr('stroke', '#6A5ACD')
      .attr('stroke-width', 3);

    // Create nodes
    const node = g.append('g')
      .selectAll('.node')
      .data(nodes)
      .join('g')
      .attr('class', 'node')



      // .call(d3.drag()
      //   .on('start', (event, d) => {
      //     if (!event.active) simulation.alphaTarget(0.3).restart();
      //     d.fx = d.x;
      //     d.fy = d.y;
      //   })
      //   .on('drag', (event, d) => {
      //     d.fx = event.x;
      //     d.fy = event.y;
      //   })
      //   .on('end', (event, d) => {
      //     if (!event.active) simulation.alphaTarget(0);
      //     d.fx = null;
      //     d.fy = null;
      //   }));


        .call(d3.drag()
        .on('start', (event, d) => {
          if (!event.active) simulation.alphaTarget(0.3).restart();
          d.fx = d.x;
          d.fy = d.y;
        })
        .on('drag', (event, d) => {
          d.fx = event.x;
          d.fy = event.y;
        })
        .on('end', (event, d) => {
          if (!event.active) simulation.alphaTarget(0);
          // Comment out or remove the lines below so the node remains pinned
          // d.fx = null;
          // d.fy = null;
        })
      );
      




    // Add shapes for nodes
    node.each(function(d) {
      const el = d3.select(this);
      
      if (d.type === 'Person') {
        el.append('circle')
          .attr('r', 30)
          .attr('fill', nodeColors.Person)
          .attr('stroke', '#fff')
          .attr('stroke-width', 2);
      } else {
        el.append('path')
          .attr('d', hexagonPath(40))
          .attr('fill', nodeColors.Affiliation)
          .attr('stroke', '#fff')
          .attr('stroke-width', 1.5);
      }
    });

    // Add text labels
    // node.append('text')
    //   .attr('text-anchor', 'middle')
    //   .attr('fill', '#fff')
    //   .attr('dy', 0)
    //   .attr('font-weight', 'bold')
    //   .attr('font-size', '14px')
    //   .each(function(d) {


    node.append('text')
    .attr('text-anchor', 'middle')
    .attr('fill', '#000')  // <--- black text now
    .attr('dy', 0)
    .attr('font-weight', 'bold')
    .attr('font-size', '14px')
    .each(function(d) {





        const text = d3.select(this);
        
        if (d.type === 'Person') {
          text.text(d.label.replace('H.E. ', ''));
        } else {
          const words = d.label.split(' ');
          text.text(null);
          
          if (words.length <= 2) {
            text.text(d.label);
          } else {
            const lines = [];
            let currentLine = [];
            
            words.forEach(word => {
              if (currentLine.length < 2) {
                currentLine.push(word);
              } else {
                lines.push(currentLine.join(' '));
                currentLine = [word];
              }
            });
            
            if (currentLine.length > 0) {
              lines.push(currentLine.join(' '));
            }
            
            lines.forEach((line, i) => {
              text.append('tspan')
                .attr('x', 0)
                .attr('dy', i === 0 ? -10 : 20)
                .text(line);
            });
          }
        }
      });

    // Update positions on tick
    simulation.on('tick', () => {
      link
        .attr('x1', d => d.source.x)
        .attr('y1', d => d.source.y)
        .attr('x2', d => d.target.x)
        .attr('y2', d => d.target.y);

      node.attr('transform', d => `translate(${d.x},${d.y})`);
    });
  };

  // Get selected person data
  const getPersonData = () => {
    if (!selectedPerson) return null;
    return ministersData.persons.find(person => person.id === selectedPerson);
  };

  const personData = getPersonData();

  if (!personData) {
    return <div className="flex justify-center items-center h-full">Loading...</div>;
  }

  // Render the UI
  return (
    // <div className="flex flex-col w-full bg-gray-50 p-4 rounded-xl">
    // <div className="bg-gray-50 p-4">
    // <div className="max-w-5xl mx-auto rounded-xl">

      <div className="w-full max-w-7xl mx-auto p-4 bg-gray-50">
      <div className="rounded-xl">


      <h1 className="text-3xl font-bold text-blue-700 mb-8">Finnish Ministers Profile Explorer</h1>

    {/* HOW TO USE BOX SNIPPET */}
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
      <h2 className="text-xl font-semibold text-blue-800 mb-2">How to Use</h2>
      <p className="text-gray-700 mb-3">
        This explorer lets you select a Finnish minister and view their key points, thematic tags, deeper analysis, and network or affiliation diagrams.
        Click different tabs to switch between information views.
      </p>
      <ul className="list-disc list-inside text-gray-700 space-y-1">
        <li>Use the minister buttons to select a profile.</li>
        <li>Switch tabs (Key Points, Thematic Tags, Analysis, Network, Affiliations) to explore different details.</li>
        <li>For Network and Affiliations, drag nodes or use your mouse wheel to zoom in and out.</li>
        <li>Use “Reset View” if you need to re-centre the diagram.</li>
      </ul>
    </div>
    {/* END HOW TO USE BOX SNIPPET */}





      {/* Minister selector */}
      <div className="w-full max-w-5xl mx-auto">


        {/* <div className="flex flex-wrap justify-center gap-2 mb-6">
          {ministers.map(minister => (
            <button
              key={minister.id}
              onClick={() => setSelectedPerson(minister.id)}
              className={`px-3 py-1 text-sm rounded-full text-white font-medium transition-all ${
                selectedPerson === minister.id
                  ? 'bg-blue-600 shadow-md'
                  : 'bg-blue-400 hover:bg-blue-500'
              }`}
            >
              {minister.label.replace('H.E. ', '')}
            </button>
          ))}
        </div> */}

        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {ministers.map(minister => (
            <button
              key={minister.id}
              onClick={() => setSelectedPerson(minister.id)}
              className={`px-3 py-1 text-sm rounded-full font-medium transition-all ${
                selectedPerson === minister.id
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-gray-200 text-black hover:bg-gray-300'
              }`}
            >
              {minister.label.replace('H.E. ', '')}
            </button>
          ))}
        </div>

        
      </div>


      {/* Profile container */}
      <div className="w-full max-w-5xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-6">
          {/* Minister header with image */}
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/4 flex-shrink-0 mb-4 md:mb-0">
              <img 
                // src={ministerImages[personData.id]} 
                src={ministerImages[`person_${personData.id}`]} 
                alt={personData.label.replace('H.E. ', '')} 
                className="rounded-lg shadow-md max-w-full h-auto"
              />
            </div>
            
            <div className="md:w-3/4 md:pl-6 flex flex-col justify-center">
              <h2 className="text-2xl font-bold mb-3">{personData.label}</h2>
              <p className="text-lg mb-4">{personData.metadata?.shortBio}</p>
            </div>
          </div>
          
          {/* Tabs */}
          <div className="flex border-b border-gray-200 mt-6">
            {['keyPoints', 'thematicTags', 'prose', 'network', 'affiliations'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 font-medium ${
                  activeTab === tab
                    ? 'border-b-2 border-blue-500 text-blue-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab === 'keyPoints' ? 'Key Points' : 
                 tab === 'thematicTags' ? 'Thematic Tags' :
                 tab === 'prose' ? 'Analysis' : 
                 tab === 'network' ? 'Network' : 'Affiliations'}
              </button>
            ))}
          </div>
          
          {/* Tab content */}
          <div className="mt-4">
            {/* Key Points */}
            {activeTab === 'keyPoints' && (
              <div className="p-4">
                <ul className="list-disc pl-6 space-y-2">
                  {personData.metadata?.keyPoints.map((point, index) => (
                    <li key={index} className="text-gray-700">{point}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {/* Thematic Tags */}
            {activeTab === 'thematicTags' && (
              <div className="p-4 space-y-4">
                {personData.metadata?.keyThematicTags.map((tag, tagIndex) => {
                  const isExpanded = expandedTags[`${personData.id}_${tagIndex}`];
                  
                  return (
                    <div key={tagIndex} className="border rounded-lg overflow-hidden">
                      <button 
                        onClick={() => toggleTag(personData.id, tagIndex)}
                        className="w-full flex justify-between items-center bg-orange-50 p-3 hover:bg-orange-100 transition-colors text-left"
                      >
                        <span className="font-medium text-orange-800">{tag.theme}</span>
                        <span>{isExpanded ? '−' : '+'}</span>
                      </button>
                      
                      {isExpanded && (
                        <div className="p-3 bg-gray-50">
                          <h4 className="font-medium mb-2 text-gray-700">Supporting Evidence:</h4>
                          <ul className="list-disc pl-6 space-y-2">
                            {tag.supportingEvidence.map((evidence, evidenceIndex) => (
                              <li key={evidenceIndex} className="text-gray-600">{evidence}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
            
            {/* Original Prose */}
            {activeTab === 'prose' && (
              <div className="p-4 space-y-4">
                {personData.metadata?.originalProse.map((prose, proseIndex) => {
                  const isExpanded = expandedProse[`${personData.id}_${proseIndex}`];
                  
                  return (
                    <div key={proseIndex} className="border rounded-lg overflow-hidden">
                      <button 
                        onClick={() => toggleProse(personData.id, proseIndex)}
                        className="w-full flex justify-between items-center bg-blue-50 p-3 hover:bg-blue-100 transition-colors text-left"
                      >
                        <span className="font-medium text-blue-800">{prose.title}</span>
                        <span>{isExpanded ? '−' : '+'}</span>
                      </button>
                      
                      {isExpanded && (
                        <div className="p-3 bg-gray-50">
                          <p className="text-gray-700 leading-relaxed">{prose.content}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
            
            {/* Network Visualization */}
            {activeTab === 'network' && (
              <div className="p-4">
                <div 
                  className="bg-white border border-gray-200 rounded-lg shadow-md mx-auto relative" 
                  style={{ width: '700px', height: '700px' }}
                >
                  <button
                    onClick={renderNetwork}
                    className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded text-sm z-10 hover:bg-blue-600"
                  >
                    Reset View
                  </button>
                  <svg ref={svgRef} className="w-full h-full"></svg>
                </div>
                <div className="mt-2 text-sm text-gray-600">
                  <p><strong>Tip:</strong> Drag nodes to rearrange. Use mouse wheel to zoom.</p>
                </div>
              </div>
            )}
            
            {/* Affiliations */}
            {activeTab === 'affiliations' && (
              <div className="p-4">
                {personData.metadata?.affiliations && personData.metadata.affiliations.length > 0 ? (
                  <>
                    <div className="mb-4">
                      <ul className="list-disc pl-6 space-y-3">
                        {personData.metadata.affiliations.map((aff, index) => (
                          <li key={index} className="text-gray-700">
                            <strong className="text-purple-700">{aff.entity}:</strong>{' '}
                            {aff.relationship}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div 
                      className="bg-white border border-gray-200 rounded-lg shadow-md mx-auto relative mb-2" 
                      style={{ width: '700px', height: '700px' }}
                    >
                      <button
                        onClick={renderAffiliations}
                        className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded text-sm z-10 hover:bg-blue-600"
                      >
                        Reset View
                      </button>
                      <svg ref={affSvgRef} className="w-full h-full"></svg>
                    </div>
                  </>
                ) : (
                  <p className="text-gray-500 italic">No affiliations data available.</p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default NetworkDiagram;














































