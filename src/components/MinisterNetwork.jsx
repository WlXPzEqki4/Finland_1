// import React, { useEffect, useRef } from 'react';
// import * as d3 from 'd3';

// const MinisterNetwork = ({ selectedFaculty }) => {
//   const svgRef = useRef(null);
  
//   // Adapted data to match faculty names
//   const data = {
//     "graph": {
//       "nodes": [
//         {
//           "id": "person_DavidAWeitz",
//           "label": "David A. Weitz",
//           "type": "Person",
//           "metadata": {
//             "shortBio": "Professor of Physics and Applied Physics, focusing on soft matter physics, materials science, and bioengineering applications.",
//             "keyPoints": [
//               "Leads research on complex fluids and soft materials",
//               "Pioneer in microfluidics technology",
//               "Collaborates extensively across disciplines"
//             ]
//           }
//         },
//         {
//           "id": "tag_DW_Microfluidics",
//           "label": "Microfluidics",
//           "type": "Tag"
//         },
//         {
//           "id": "tag_DW_SoftMatter",
//           "label": "Soft Matter Physics",
//           "type": "Tag"
//         },
//         {
//           "id": "tag_DW_MaterialsScience",
//           "label": "Materials Science",
//           "type": "Tag"
//         },
//         {
//           "id": "tag_DW_Bioengineering",
//           "label": "Bioengineering",
//           "type": "Tag"
//         },
//         {
//           "id": "tag_DW_Nanotechnology",
//           "label": "Nanotechnology",
//           "type": "Tag"
//         },
        
//         {
//           "id": "person_JoannaAizenberg",
//           "label": "Joanna Aizenberg",
//           "type": "Person",
//           "metadata": {
//             "shortBio": "Professor of Materials Science, known for innovative biomimetic materials and adaptive surface technologies.",
//             "keyPoints": [
//               "Develops bio-inspired materials and surfaces",
//               "Pioneered SLIPS technology for repellent surfaces",
//               "Works at the intersection of chemistry, biology, and materials"
//             ]
//           }
//         },
//         {
//           "id": "tag_JA_BiomimeticMaterials",
//           "label": "Biomimetic Materials",
//           "type": "Tag"
//         },
//         {
//           "id": "tag_JA_AdaptiveSurfaces",
//           "label": "Adaptive Surfaces",
//           "type": "Tag"
//         },
//         {
//           "id": "tag_JA_NanostructuredMaterials",
//           "label": "Nanostructured Materials",
//           "type": "Tag"
//         },
//         {
//           "id": "tag_JA_SelfAssembly",
//           "label": "Self-Assembly",
//           "type": "Tag"
//         }
//       ],
//       "edges": [
//         {
//           "source": "person_DavidAWeitz",
//           "target": "tag_DW_Microfluidics",
//           "type": "Person-Tag",
//           "hoverInfo": "Pioneered microfluidic techniques for droplet-based experiments."
//         },
//         {
//           "source": "person_DavidAWeitz",
//           "target": "tag_DW_SoftMatter",
//           "type": "Person-Tag",
//           "hoverInfo": "Leading researcher in soft matter physics and complex fluids."
//         },
//         {
//           "source": "person_DavidAWeitz",
//           "target": "tag_DW_MaterialsScience",
//           "type": "Person-Tag",
//           "hoverInfo": "Develops novel materials with unique properties."
//         },
//         {
//           "source": "person_DavidAWeitz",
//           "target": "tag_DW_Bioengineering",
//           "type": "Person-Tag",
//           "hoverInfo": "Applies physics principles to biological systems and medical applications."
//         },
//         {
//           "source": "person_DavidAWeitz",
//           "target": "tag_DW_Nanotechnology",
//           "type": "Person-Tag",
//           "hoverInfo": "Works on nanoscale structures and their applications."
//         },
        
//         {
//           "source": "person_JoannaAizenberg",
//           "target": "tag_JA_BiomimeticMaterials",
//           "type": "Person-Tag",
//           "hoverInfo": "Creates materials inspired by natural biological structures."
//         },
//         {
//           "source": "person_JoannaAizenberg",
//           "target": "tag_JA_AdaptiveSurfaces",
//           "type": "Person-Tag",
//           "hoverInfo": "Develops surfaces that can change properties in response to stimuli."
//         },
//         {
//           "source": "person_JoannaAizenberg",
//           "target": "tag_JA_NanostructuredMaterials",
//           "type": "Person-Tag",
//           "hoverInfo": "Designs materials with precisely controlled nanoscale features."
//         },
//         {
//           "source": "person_JoannaAizenberg",
//           "target": "tag_JA_SelfAssembly",
//           "type": "Person-Tag",
//           "hoverInfo": "Researches systems that can organize themselves into complex structures."
//         }
//       ]
//     }
//   };

//   useEffect(() => {
//     if (!svgRef.current || !selectedFaculty) return;
    
//     // Clear previous visualization
//     d3.select(svgRef.current).selectAll("*").remove();
    
//     const svg = d3.select(svgRef.current);
//     const width = 400;
//     const height = 300;
    
//     // Filter data for the selected faculty only
//     const personId = `person_${selectedFaculty.id.replace(/\s+/g, '')}`;
    
//     // Find if this faculty exists in our data
//     const personNode = data.graph.nodes.find(node => 
//       node.id === personId || node.label === selectedFaculty.id
//     );
    
//     if (!personNode) {
//       // Display a message when no detailed data is available
//       svg.append("text")
//         .attr("x", width / 2)
//         .attr("y", height / 2)
//         .attr("text-anchor", "middle")
//         .style("font-size", "14px")
//         .style("fill", "#666")
//         .text(`No detailed network data available for ${selectedFaculty.id}`);
//       return;
//     }
    
//     // Filter to only include this person and their connected tags
//     const relevantEdges = data.graph.edges.filter(edge => 
//       edge.source === personNode.id
//     );
    
//     const connectedTagIds = relevantEdges.map(edge => edge.target);
//     const relevantNodes = [
//       personNode,
//       ...data.graph.nodes.filter(node => connectedTagIds.includes(node.id))
//     ];
    
//     // Create a force simulation
//     const simulation = d3.forceSimulation(relevantNodes)
//       .force("link", d3.forceLink(relevantEdges)
//         .id(d => d.id)
//         .distance(100))
//       .force("charge", d3.forceManyBody().strength(-200))
//       .force("center", d3.forceCenter(width / 2, height / 2))
//       .on("tick", ticked);
    
//     // Create a group for the links
//     const link = svg.append("g")
//       .selectAll("line")
//       .data(relevantEdges)
//       .enter()
//       .append("line")
//       .attr("stroke", "#999")
//       .attr("stroke-opacity", 0.6)
//       .attr("stroke-width", 2)
//       .on("mouseover", function(event, d) {
//         // Show hover info
//         svg.append("text")
//           .attr("class", "hover-info")
//           .attr("x", (d.source.x + d.target.x) / 2)
//           .attr("y", (d.source.y + d.target.y) / 2 - 10)
//           .attr("text-anchor", "middle")
//           .attr("font-size", "12px")
//           .attr("fill", "#333")
//           .attr("background", "#fff")
//           .text(d.hoverInfo);
//       })
//       .on("mouseout", function() {
//         // Remove hover info
//         svg.select(".hover-info").remove();
//       });
    
//     // Create node groups
//     const node = svg.append("g")
//       .selectAll(".node")
//       .data(relevantNodes)
//       .enter()
//       .append("g")
//       .attr("class", "node")
//       .call(d3.drag()
//         .on("start", dragstarted)
//         .on("drag", dragged)
//         .on("end", dragended));
    
//     // Add circles to nodes
//     node.append("circle")
//       .attr("r", d => d.type === "Person" ? 25 : 15)
//       .attr("fill", d => d.type === "Person" ? "#5B8FF9" : "#66C18C")
//       .attr("stroke", "#fff")
//       .attr("stroke-width", 1.5);
    
//     // Add labels to nodes
//     node.append("text")
//       .text(d => d.label)
//       .attr("font-size", d => d.type === "Person" ? "12px" : "10px")
//       .attr("text-anchor", "middle")
//       .attr("dy", d => d.type === "Person" ? "30px" : "25px")
//       .attr("fill", "#333");
    
//     function ticked() {
//       // Update link positions
//       link
//         .attr("x1", d => d.source.x)
//         .attr("y1", d => d.source.y)
//         .attr("x2", d => d.target.x)
//         .attr("y2", d => d.target.y);
      
//       // Update node positions
//       node.attr("transform", d => `translate(${d.x},${d.y})`);
//     }
    
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
    
//   }, [selectedFaculty]);

//   return (
//     <div className="w-full">
//       <h3 className="text-xl font-semibold text-gray-700 uppercase mb-2">RESEARCH NETWORK</h3>
//       <div className="border border-gray-200 rounded-lg bg-white p-2 h-80">
//         <svg ref={svgRef} width="100%" height="100%" />
//       </div>
//     </div>
//   );
// };

// export default MinisterNetwork;













// import React, { useEffect, useRef, useState } from 'react';
// import * as d3 from 'd3';

// const MinisterNetwork = ({ selectedFaculty }) => {
//   const svgRef = useRef(null);
//   const containerRef = useRef(null);
//   const [containerHeight, setContainerHeight] = useState(320);
  
//   // Expanded data structure with more detailed information and edge labels
//   const data = {
//     "graph": {
//       "nodes": [
//         {
//           "id": "person_DavidAWeitz",
//           "label": "David A. Weitz",
//           "type": "Person",
//           "metadata": {
//             "shortBio": "Professor of Physics and Applied Physics, focusing on soft matter physics, materials science, and bioengineering applications.",
//             "keyPoints": [
//               "Leads research on complex fluids and soft materials",
//               "Pioneer in microfluidics technology",
//               "Collaborates extensively across disciplines"
//             ],
//             "hoverText": "David A. Weitz directs a lab researching soft condensed matter physics and biophysics."
//           }
//         },
//         {
//           "id": "tag_DW_Microfluidics",
//           "label": "Microfluidics",
//           "type": "Tag",
//           "metadata": {
//             "hoverText": "The manipulation of fluids at the microscale for applications in biology, chemistry, and medicine."
//           }
//         },
//         {
//           "id": "tag_DW_SoftMatter",
//           "label": "Soft Matter Physics",
//           "type": "Tag",
//           "metadata": {
//             "hoverText": "The study of materials that are easily deformed by thermal fluctuations or external forces."
//           }
//         },
//         {
//           "id": "tag_DW_MaterialsScience",
//           "label": "Materials Science",
//           "type": "Tag",
//           "metadata": {
//             "hoverText": "Interdisciplinary field involving the properties and applications of materials."
//           }
//         },
//         {
//           "id": "tag_DW_Bioengineering",
//           "label": "Bioengineering",
//           "type": "Tag",
//           "metadata": {
//             "hoverText": "Application of engineering principles to biological systems for medical advances."
//           }
//         },
//         {
//           "id": "tag_DW_Nanotechnology",
//           "label": "Nanotechnology",
//           "type": "Tag",
//           "metadata": {
//             "hoverText": "Manipulation of matter on an atomic, molecular, and supramolecular scale."
//           }
//         },
        
//         {
//           "id": "person_JoannaAizenberg",
//           "label": "Joanna Aizenberg",
//           "type": "Person",
//           "metadata": {
//             "shortBio": "Professor of Materials Science, known for innovative biomimetic materials and adaptive surface technologies.",
//             "keyPoints": [
//               "Develops bio-inspired materials and surfaces",
//               "Pioneered SLIPS technology for repellent surfaces",
//               "Works at the intersection of chemistry, biology, and materials"
//             ],
//             "hoverText": "Joanna Aizenberg researches biomimetic materials and adaptive surfaces inspired by natural systems."
//           }
//         },
//         {
//           "id": "tag_JA_BiomimeticMaterials",
//           "label": "Biomimetic Materials",
//           "type": "Tag",
//           "metadata": {
//             "hoverText": "Materials designed to mimic biological systems and natural structures."
//           }
//         },
//         {
//           "id": "tag_JA_AdaptiveSurfaces",
//           "label": "Adaptive Surfaces",
//           "type": "Tag",
//           "metadata": {
//             "hoverText": "Surfaces that can change their properties in response to environmental stimuli."
//           }
//         },
//         {
//           "id": "tag_JA_NanostructuredMaterials",
//           "label": "Nanostructured Materials",
//           "type": "Tag",
//           "metadata": {
//             "hoverText": "Materials with designed features at the nanoscale that affect their properties."
//           }
//         },
//         {
//           "id": "tag_JA_SelfAssembly",
//           "label": "Self-Assembly",
//           "type": "Tag",
//           "metadata": {
//             "hoverText": "The process where components organize themselves through local interactions."
//           }
//         }
//       ],
//       "edges": [
//         {
//           "source": "person_DavidAWeitz",
//           "target": "tag_DW_Microfluidics",
//           "type": "Person-Tag",
//           "label": "Pioneer",
//           "hoverInfo": "Pioneered microfluidic techniques for droplet-based experiments."
//         },
//         {
//           "source": "person_DavidAWeitz",
//           "target": "tag_DW_SoftMatter",
//           "type": "Person-Tag",
//           "label": "Expert",
//           "hoverInfo": "Leading researcher in soft matter physics and complex fluids."
//         },
//         {
//           "source": "person_DavidAWeitz",
//           "target": "tag_DW_MaterialsScience",
//           "type": "Person-Tag",
//           "label": "Focus",
//           "hoverInfo": "Develops novel materials with unique properties."
//         },
//         {
//           "source": "person_DavidAWeitz",
//           "target": "tag_DW_Bioengineering",
//           "type": "Person-Tag",
//           "label": "Application",
//           "hoverInfo": "Applies physics principles to biological systems and medical applications."
//         },
//         {
//           "source": "person_DavidAWeitz",
//           "target": "tag_DW_Nanotechnology",
//           "type": "Person-Tag",
//           "label": "Research",
//           "hoverInfo": "Works on nanoscale structures and their applications."
//         },
        
//         {
//           "source": "person_JoannaAizenberg",
//           "target": "tag_JA_BiomimeticMaterials",
//           "type": "Person-Tag",
//           "label": "Pioneer",
//           "hoverInfo": "Creates materials inspired by natural biological structures."
//         },
//         {
//           "source": "person_JoannaAizenberg",
//           "target": "tag_JA_AdaptiveSurfaces",
//           "type": "Person-Tag",
//           "label": "Developer",
//           "hoverInfo": "Develops surfaces that can change properties in response to stimuli."
//         },
//         {
//           "source": "person_JoannaAizenberg",
//           "target": "tag_JA_NanostructuredMaterials",
//           "type": "Person-Tag",
//           "label": "Designer",
//           "hoverInfo": "Designs materials with precisely controlled nanoscale features."
//         },
//         {
//           "source": "person_JoannaAizenberg",
//           "target": "tag_JA_SelfAssembly",
//           "type": "Person-Tag",
//           "label": "Researcher",
//           "hoverInfo": "Researches systems that can organize themselves into complex structures."
//         }
//       ]
//     }
//   };

//   // Calculate container height to match left panel
//   useEffect(() => {
//     const updateHeight = () => {
//       if (containerRef.current) {
//         // Get viewport height
//         const viewportHeight = window.innerHeight;
        
//         // Get container top position
//         const containerTop = containerRef.current.getBoundingClientRect().top;
        
//         // Calculate available space (subtract some padding)
//         const availableSpace = viewportHeight - containerTop - 40;
        
//         // Set minimum height of 320px
//         const newHeight = Math.max(320, availableSpace);
        
//         setContainerHeight(newHeight);
//       }
//     };

//     // Update height on mount and when window is resized
//     updateHeight();
//     window.addEventListener('resize', updateHeight);
    
//     return () => {
//       window.removeEventListener('resize', updateHeight);
//     };
//   }, []);

//   useEffect(() => {
//     if (!svgRef.current || !selectedFaculty) return;
    
//     // Clear previous visualization
//     d3.select(svgRef.current).selectAll("*").remove();
    
//     const svg = d3.select(svgRef.current);
//     const width = parseInt(svg.style("width"));
//     const height = containerHeight - 20; // Account for padding
    
//     // Filter data for the selected faculty only
//     const personId = `person_${selectedFaculty.id.replace(/\s+/g, '')}`;
    
//     // Find if this faculty exists in our data
//     const personNode = data.graph.nodes.find(node => 
//       node.id === personId || node.label === selectedFaculty.id
//     );
    
//     if (!personNode) {
//       // Display a message when no detailed data is available
//       svg.append("text")
//         .attr("x", width / 2)
//         .attr("y", height / 2)
//         .attr("text-anchor", "middle")
//         .style("font-size", "14px")
//         .style("fill", "#666")
//         .text(`No detailed network data available for ${selectedFaculty.id}`);
//       return;
//     }
    
//     // Filter to only include this person and their connected tags
//     const relevantEdges = data.graph.edges.filter(edge => 
//       edge.source === personNode.id
//     );
    
//     const connectedTagIds = relevantEdges.map(edge => edge.target);
//     const relevantNodes = [
//       personNode,
//       ...data.graph.nodes.filter(node => connectedTagIds.includes(node.id))
//     ];
    
//     // Tooltip div for hover information
//     const tooltip = svg.append("g")
//       .attr("class", "tooltip")
//       .style("opacity", 0);
    
//     tooltip.append("rect")
//       .attr("rx", 5)
//       .attr("ry", 5)
//       .attr("width", 200)
//       .attr("height", 40)
//       .attr("fill", "white")
//       .attr("stroke", "#ccc")
//       .attr("stroke-width", 1);
    
//     const tooltipText = tooltip.append("text")
//       .attr("x", 10)
//       .attr("y", 20)
//       .attr("fill", "#333")
//       .style("font-size", "12px");
    
//     // Create a force simulation
//     const simulation = d3.forceSimulation(relevantNodes)
//       .force("link", d3.forceLink(relevantEdges)
//         .id(d => d.id)
//         .distance(100))
//       .force("charge", d3.forceManyBody().strength(-300))
//       .force("center", d3.forceCenter(width / 2, height / 2))
//       .force("collide", d3.forceCollide().radius(40))
//       .on("tick", ticked);
    
//     // Create a group for the links
//     const linkGroup = svg.append("g");
    
//     const link = linkGroup.selectAll("g")
//       .data(relevantEdges)
//       .enter()
//       .append("g");
    
//     // Add lines for links
//     link.append("line")
//       .attr("stroke", "#999")
//       .attr("stroke-opacity", 0.6)
//       .attr("stroke-width", 2);
    
//     // Add edge labels
//     link.append("text")
//       .attr("font-size", "10px")
//       .attr("fill", "#666")
//       .attr("text-anchor", "middle")
//       .attr("dy", -5)
//       .text(d => d.label);
    
//     // Create node groups
//     const node = svg.append("g")
//       .selectAll(".node")
//       .data(relevantNodes)
//       .enter()
//       .append("g")
//       .attr("class", "node")
//       .call(d3.drag()
//         .on("start", dragstarted)
//         .on("drag", dragged)
//         .on("end", dragended))
//       .on("mouseover", function(event, d) {
//         // Show tooltip with hover information
//         const hoverText = d.metadata?.hoverText || d.label;
        
//         tooltipText.text(hoverText);
//         const textLength = tooltipText.node().getComputedTextLength();
        
//         tooltip.select("rect")
//           .attr("width", textLength + 20);
          
//         tooltip
//           .attr("transform", `translate(${d.x + 20},${d.y - 30})`)
//           .transition()
//           .duration(200)
//           .style("opacity", 1);
        
//         // Highlight connections
//         link.selectAll("line")
//           .style("stroke", l => 
//             (l.source.id === d.id || l.target.id === d.id) ? "#333" : "#999"
//           )
//           .style("stroke-width", l => 
//             (l.source.id === d.id || l.target.id === d.id) ? 3 : 2
//           )
//           .style("stroke-opacity", l => 
//             (l.source.id === d.id || l.target.id === d.id) ? 1 : 0.2
//           );
//       })
//       .on("mouseout", function() {
//         // Hide tooltip
//         tooltip
//           .transition()
//           .duration(200)
//           .style("opacity", 0);
        
//         // Reset links
//         link.selectAll("line")
//           .style("stroke", "#999")
//           .style("stroke-width", 2)
//           .style("stroke-opacity", 0.6);
//       });
    
//     // Add circles to nodes
//     node.append("circle")
//       .attr("r", d => d.type === "Person" ? 25 : 20)
//       .attr("fill", d => d.type === "Person" ? "#5B8FF9" : "#66C18C")
//       .attr("stroke", "#fff")
//       .attr("stroke-width", 1.5);
    
//     // Add labels to nodes
//     node.append("text")
//       .text(d => d.label)
//       .attr("font-size", d => d.type === "Person" ? "12px" : "10px")
//       .attr("text-anchor", "middle")
//       .attr("dy", d => d.type === "Person" ? "35px" : "30px")
//       .attr("fill", "#333");
    
//     // Set initial positions to ensure nodes are visible
//     relevantNodes.forEach((node, i) => {
//       const angle = (i / relevantNodes.length) * 2 * Math.PI;
//       const radius = 100;
      
//       if (node.type === "Person") {
//         // Person in center
//         node.x = width / 2;
//         node.y = height / 2;
//       } else {
//         // Tags around in a circle
//         node.x = width / 2 + radius * Math.cos(angle);
//         node.y = height / 2 + radius * Math.sin(angle);
//       }
//     });
    
//     // Position nodes and edges in the visualization
//     function ticked() {
//       // Constrain nodes to the visualization area
//       relevantNodes.forEach(d => {
//         d.x = Math.max(30, Math.min(width - 30, d.x));
//         d.y = Math.max(30, Math.min(height - 30, d.y));
//       });
      
//       // Update link positions
//       link.selectAll("line")
//         .attr("x1", d => d.source.x)
//         .attr("y1", d => d.source.y)
//         .attr("x2", d => d.target.x)
//         .attr("y2", d => d.target.y);
      
//       // Update edge label positions
//       link.selectAll("text")
//         .attr("x", d => (d.source.x + d.target.x) / 2)
//         .attr("y", d => (d.source.y + d.target.y) / 2);
      
//       // Update node positions
//       node.attr("transform", d => `translate(${d.x},${d.y})`);
//     }
    
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
//       // Keep the nodes in fixed positions after dragging
//       // d.fx = null;
//       // d.fy = null;
//     }
    
//   }, [selectedFaculty, containerHeight]);

//   return (
//     <div className="w-full" ref={containerRef}>
//       <h3 className="text-xl font-semibold text-gray-700 uppercase mb-2">RESEARCH NETWORK</h3>
//       <div 
//         className="border border-gray-200 rounded-lg bg-white p-2"
//         style={{ height: `${containerHeight}px` }}
//       >
//         <svg ref={svgRef} width="100%" height="100%" />
//       </div>
//     </div>
//   );
// };

// export default MinisterNetwork;




























// import React, { useEffect, useRef, useState } from 'react';
// import * as d3 from 'd3';

// const MinisterNetwork = ({ selectedFaculty }) => {
//   const svgRef = useRef(null);
//   const containerRef = useRef(null);
//   const [containerHeight, setContainerHeight] = useState(320);
  
//   // Expanded data structure with more detailed information and edge labels
//   const data = {
//     "graph": {
//       "nodes": [
//         {
//           "id": "person_DavidAWeitz",
//           "label": "David A. Weitz",
//           "type": "Person",
//           "metadata": {
//             "shortBio": "Professor of Physics and Applied Physics, focusing on soft matter physics, materials science, and bioengineering applications.",
//             "keyPoints": [
//               "Leads research on complex fluids and soft materials",
//               "Pioneer in microfluidics technology",
//               "Collaborates extensively across disciplines"
//             ],
//             "hoverText": "David A. Weitz directs a lab researching soft condensed matter physics and biophysics."
//           }
//         },
//         {
//           "id": "tag_DW_Microfluidics",
//           "label": "Microfluidics",
//           "type": "Tag",
//           "metadata": {
//             "hoverText": "The manipulation of fluids at the microscale for applications in biology, chemistry, and medicine."
//           }
//         },
//         {
//           "id": "tag_DW_SoftMatter",
//           "label": "Soft Matter Physics",
//           "type": "Tag",
//           "metadata": {
//             "hoverText": "The study of materials that are easily deformed by thermal fluctuations or external forces."
//           }
//         },
//         {
//           "id": "tag_DW_MaterialsScience",
//           "label": "Materials Science",
//           "type": "Tag",
//           "metadata": {
//             "hoverText": "Interdisciplinary field involving the properties and applications of materials."
//           }
//         },
//         {
//           "id": "tag_DW_Bioengineering",
//           "label": "Bioengineering",
//           "type": "Tag",
//           "metadata": {
//             "hoverText": "Application of engineering principles to biological systems for medical advances."
//           }
//         },
//         {
//           "id": "tag_DW_Nanotechnology",
//           "label": "Nanotechnology",
//           "type": "Tag",
//           "metadata": {
//             "hoverText": "Manipulation of matter on an atomic, molecular, and supramolecular scale."
//           }
//         },
        
//         {
//           "id": "person_JoannaAizenberg",
//           "label": "Joanna Aizenberg",
//           "type": "Person",
//           "metadata": {
//             "shortBio": "Professor of Materials Science, known for innovative biomimetic materials and adaptive surface technologies.",
//             "keyPoints": [
//               "Develops bio-inspired materials and surfaces",
//               "Pioneered SLIPS technology for repellent surfaces",
//               "Works at the intersection of chemistry, biology, and materials"
//             ],
//             "hoverText": "Joanna Aizenberg researches biomimetic materials and adaptive surfaces inspired by natural systems."
//           }
//         },
//         {
//           "id": "tag_JA_BiomimeticMaterials",
//           "label": "Biomimetic Materials",
//           "type": "Tag",
//           "metadata": {
//             "hoverText": "Materials designed to mimic biological systems and natural structures."
//           }
//         },
//         {
//           "id": "tag_JA_AdaptiveSurfaces",
//           "label": "Adaptive Surfaces",
//           "type": "Tag",
//           "metadata": {
//             "hoverText": "Surfaces that can change their properties in response to environmental stimuli."
//           }
//         },
//         {
//           "id": "tag_JA_NanostructuredMaterials",
//           "label": "Nanostructured Materials",
//           "type": "Tag",
//           "metadata": {
//             "hoverText": "Materials with designed features at the nanoscale that affect their properties."
//           }
//         },
//         {
//           "id": "tag_JA_SelfAssembly",
//           "label": "Self-Assembly",
//           "type": "Tag",
//           "metadata": {
//             "hoverText": "The process where components organize themselves through local interactions."
//           }
//         }
//       ],
//       "edges": [
//         {
//           "source": "person_DavidAWeitz",
//           "target": "tag_DW_Microfluidics",
//           "type": "Person-Tag",
//           "label": "Pioneer",
//           "hoverInfo": "Pioneered microfluidic techniques for droplet-based experiments."
//         },
//         {
//           "source": "person_DavidAWeitz",
//           "target": "tag_DW_SoftMatter",
//           "type": "Person-Tag",
//           "label": "Expert",
//           "hoverInfo": "Leading researcher in soft matter physics and complex fluids."
//         },
//         {
//           "source": "person_DavidAWeitz",
//           "target": "tag_DW_MaterialsScience",
//           "type": "Person-Tag",
//           "label": "Focus",
//           "hoverInfo": "Develops novel materials with unique properties."
//         },
//         {
//           "source": "person_DavidAWeitz",
//           "target": "tag_DW_Bioengineering",
//           "type": "Person-Tag",
//           "label": "Application",
//           "hoverInfo": "Applies physics principles to biological systems and medical applications."
//         },
//         {
//           "source": "person_DavidAWeitz",
//           "target": "tag_DW_Nanotechnology",
//           "type": "Person-Tag",
//           "label": "Research",
//           "hoverInfo": "Works on nanoscale structures and their applications."
//         },
        
//         {
//           "source": "person_JoannaAizenberg",
//           "target": "tag_JA_BiomimeticMaterials",
//           "type": "Person-Tag",
//           "label": "Pioneer",
//           "hoverInfo": "Creates materials inspired by natural biological structures."
//         },
//         {
//           "source": "person_JoannaAizenberg",
//           "target": "tag_JA_AdaptiveSurfaces",
//           "type": "Person-Tag",
//           "label": "Developer",
//           "hoverInfo": "Develops surfaces that can change properties in response to stimuli."
//         },
//         {
//           "source": "person_JoannaAizenberg",
//           "target": "tag_JA_NanostructuredMaterials",
//           "type": "Person-Tag",
//           "label": "Designer",
//           "hoverInfo": "Designs materials with precisely controlled nanoscale features."
//         },
//         {
//           "source": "person_JoannaAizenberg",
//           "target": "tag_JA_SelfAssembly",
//           "type": "Person-Tag",
//           "label": "Researcher",
//           "hoverInfo": "Researches systems that can organize themselves into complex structures."
//         }
//       ]
//     }
//   };

//   // Calculate container height to match left panel
//   useEffect(() => {
//     // Set a fixed height that matches the left panel but doesn't exceed it
//     setContainerHeight(600);
//   }, []);

//   useEffect(() => {
//     if (!svgRef.current || !selectedFaculty) return;
    
//     // Clear previous visualization
//     d3.select(svgRef.current).selectAll("*").remove();
    
//     const svg = d3.select(svgRef.current);
//     const width = parseInt(svg.style("width"));
//     const height = containerHeight - 20; // Account for padding
    
//     // Filter data for the selected faculty only
//     const personId = `person_${selectedFaculty.id.replace(/\s+/g, '')}`;
    
//     // Find if this faculty exists in our data
//     const personNode = data.graph.nodes.find(node => 
//       node.id === personId || node.label === selectedFaculty.id
//     );
    
//     if (!personNode) {
//       // Display a message when no detailed data is available
//       svg.append("text")
//         .attr("x", width / 2)
//         .attr("y", height / 2)
//         .attr("text-anchor", "middle")
//         .style("font-size", "14px")
//         .style("fill", "#666")
//         .text(`No detailed network data available for ${selectedFaculty.id}`);
//       return;
//     }
    
//     // Filter to only include this person and their connected tags
//     const relevantEdges = data.graph.edges.filter(edge => 
//       edge.source === personNode.id
//     );
    
//     const connectedTagIds = relevantEdges.map(edge => edge.target);
//     const relevantNodes = [
//       personNode,
//       ...data.graph.nodes.filter(node => connectedTagIds.includes(node.id))
//     ];
    
//     // Tooltip div for hover information
//     const tooltip = svg.append("g")
//       .attr("class", "tooltip")
//       .style("opacity", 0);
    
//     tooltip.append("rect")
//       .attr("rx", 5)
//       .attr("ry", 5)
//       .attr("width", 200)
//       .attr("height", 40)
//       .attr("fill", "white")
//       .attr("stroke", "#ccc")
//       .attr("stroke-width", 1);
    
//     const tooltipText = tooltip.append("text")
//       .attr("x", 10)
//       .attr("y", 20)
//       .attr("fill", "#333")
//       .style("font-size", "12px");
    
//     // Create a force simulation
//     const simulation = d3.forceSimulation(relevantNodes)
//       .force("link", d3.forceLink(relevantEdges)
//         .id(d => d.id)
//         .distance(80))
//       .force("charge", d3.forceManyBody().strength(-200))
//       .force("center", d3.forceCenter(width / 2, height / 2 - 30)) // Shift upward slightly
//       .force("collide", d3.forceCollide().radius(35))
//       .on("tick", ticked);
    
//     // Create a group for the links
//     const linkGroup = svg.append("g");
    
//     const link = linkGroup.selectAll("g")
//       .data(relevantEdges)
//       .enter()
//       .append("g");
    
//     // Add lines for links
//     link.append("line")
//       .attr("stroke", "#999")
//       .attr("stroke-opacity", 0.6)
//       .attr("stroke-width", 2);
    
//     // Add edge labels
//     link.append("text")
//       .attr("font-size", "10px")
//       .attr("fill", "#666")
//       .attr("text-anchor", "middle")
//       .attr("dy", -5)
//       .text(d => d.label);
    
//     // Create node groups
//     const node = svg.append("g")
//       .selectAll(".node")
//       .data(relevantNodes)
//       .enter()
//       .append("g")
//       .attr("class", "node")
//       .call(d3.drag()
//         .on("start", dragstarted)
//         .on("drag", dragged)
//         .on("end", dragended))
//       .on("mouseover", function(event, d) {
//         // Show tooltip with hover information
//         const hoverText = d.metadata?.hoverText || d.label;
        
//         tooltipText.text(hoverText);
//         const textLength = tooltipText.node().getComputedTextLength();
        
//         tooltip.select("rect")
//           .attr("width", textLength + 20);
          
//         tooltip
//           .attr("transform", `translate(${d.x + 20},${d.y - 30})`)
//           .transition()
//           .duration(200)
//           .style("opacity", 1);
        
//         // Highlight connections
//         link.selectAll("line")
//           .style("stroke", l => 
//             (l.source.id === d.id || l.target.id === d.id) ? "#333" : "#999"
//           )
//           .style("stroke-width", l => 
//             (l.source.id === d.id || l.target.id === d.id) ? 3 : 2
//           )
//           .style("stroke-opacity", l => 
//             (l.source.id === d.id || l.target.id === d.id) ? 1 : 0.2
//           );
//       })
//       .on("mouseout", function() {
//         // Hide tooltip
//         tooltip
//           .transition()
//           .duration(200)
//           .style("opacity", 0);
        
//         // Reset links
//         link.selectAll("line")
//           .style("stroke", "#999")
//           .style("stroke-width", 2)
//           .style("stroke-opacity", 0.6);
//       });
    
//     // Add circles to nodes
//     node.append("circle")
//       .attr("r", d => d.type === "Person" ? 25 : 20)
//       .attr("fill", d => d.type === "Person" ? "#5B8FF9" : "#66C18C")
//       .attr("stroke", "#fff")
//       .attr("stroke-width", 1.5);
    
//     // Add labels to nodes
//     node.append("text")
//       .text(d => d.label)
//       .attr("font-size", d => d.type === "Person" ? "12px" : "10px")
//       .attr("text-anchor", "middle")
//       .attr("dy", d => d.type === "Person" ? "35px" : "30px")
//       .attr("fill", "#333");
    
//     // Set initial positions to ensure nodes are visible
//     relevantNodes.forEach((node, i) => {
//       const angle = (i / relevantNodes.length) * 2 * Math.PI;
//       const radius = 80;
      
//       if (node.type === "Person") {
//         // Person in center
//         node.x = width / 2;
//         node.y = height / 2 - 30; // Shift upward
//       } else {
//         // Tags around in a circle
//         node.x = width / 2 + radius * Math.cos(angle);
//         node.y = (height / 2 - 30) + radius * Math.sin(angle); // Shift upward
//       }
//     });
    
//     // Position nodes and edges in the visualization
//     function ticked() {
//       // Constrain nodes to the visualization area with tighter y-axis bounds
//       relevantNodes.forEach(d => {
//         d.x = Math.max(30, Math.min(width - 30, d.x));
//         d.y = Math.max(30, Math.min(height - 60, d.y)); // Reduce bottom space
//       });
      
//       // Update link positions
//       link.selectAll("line")
//         .attr("x1", d => d.source.x)
//         .attr("y1", d => d.source.y)
//         .attr("x2", d => d.target.x)
//         .attr("y2", d => d.target.y);
      
//       // Update edge label positions
//       link.selectAll("text")
//         .attr("x", d => (d.source.x + d.target.x) / 2)
//         .attr("y", d => (d.source.y + d.target.y) / 2);
      
//       // Update node positions
//       node.attr("transform", d => `translate(${d.x},${d.y})`);
//     }
    
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
//       // Keep the nodes in fixed positions after dragging
//       // d.fx = null;
//       // d.fy = null;
//     }
    
//   }, [selectedFaculty, containerHeight]);

//   return (
//     <div className="w-full" ref={containerRef}>
//       <h3 className="text-xl font-semibold text-gray-700 uppercase mb-2">RESEARCH NETWORK</h3>
//       <div 
//         className="border border-gray-200 rounded-lg bg-white p-2"
//         style={{ height: `${containerHeight}px` }}
//       >
//         <svg ref={svgRef} width="100%" height="100%" />
//       </div>
//     </div>
//   );
// };

// export default MinisterNetwork;






















// import React, { useEffect, useRef, useState } from 'react';
// import * as d3 from 'd3';

// const MinisterNetwork = ({ selectedFaculty }) => {
//   const svgRef = useRef(null);
//   const containerRef = useRef(null);
//   const [containerHeight, setContainerHeight] = useState(320);

//   // Adapted data structure for one person ("Antti Herlin")
//   const data = {
//     graph: {
//       nodes: [
//         {
//           id: "person_AnttiHerlin",
//           label: "Antti Herlin",
//           type: "Person",
//           metadata: {
//             shortBio: "Chairman of KONE",
//             title: "Chairman of KONE",
//             hoverText: "Antti Herlin is a prominent industrialist, transforming KONE into a global leader in elevator and escalator solutions."
//           }
//         },
//         // Main dot nodes
//         {
//           id: "dot_strategy",
//           label: "Strategy",
//           type: "Dot",
//           metadata: {
//             hoverText: "Key strategy: Finland’s most influential industrialist. Transformed KONE into a global leader."
//           }
//         },
//         {
//           id: "dot_uaestatements",
//           label: "UAE Statements",
//           type: "Dot",
//           metadata: {
//             hoverText: "Key UAE statements: Does not frequently comment on the UAE publicly. Involved in major projects."
//           }
//         },
//         {
//           id: "dot_roleinrelations",
//           label: "Role in Relations",
//           type: "Dot",
//           metadata: {
//             hoverText: "Key role: Influences Finland’s economic diplomacy and bilateral trade."
//           }
//         },
//         {
//           id: "dot_bilaterals",
//           label: "Bilaterals",
//           type: "Dot",
//           metadata: {
//             hoverText: "Key bilateral engagements and commercial contracts."
//           }
//         },
//         {
//           id: "dot_alignandfriction",
//           label: "Align and Friction",
//           type: "Dot",
//           metadata: {
//             hoverText: "Competes globally and navigates multi-vendor approaches."
//           }
//         },
//         {
//           id: "dot_conclusions",
//           label: "Conclusions",
//           type: "Dot",
//           metadata: {
//             hoverText: "Expands KONE’s footprint in the Gulf."
//           }
//         },
//         // Subdot nodes for Strategy (2 points)
//         {
//           id: "subdot_strategy_1",
//           label: "Finland’s most influential industrialist.",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of strategy." }
//         },
//         {
//           id: "subdot_strategy_2",
//           label: "Transformed KONE into a global leader in elevator/escalator solutions.",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of strategy." }
//         },
//         // Subdot nodes for UAE Statements (2 points)
//         {
//           id: "subdot_uaestatements_1",
//           label: "Does not frequently comment on the UAE publicly.",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of UAE statements." }
//         },
//         {
//           id: "subdot_uaestatements_2",
//           label: "KONE’s HQ in Dubai and involvement in iconic projects.",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of UAE statements." }
//         },
//         // Subdot nodes for Role in Relations (2 points)
//         {
//           id: "subdot_roleinrelations_1",
//           label: "Influences Finland’s economic diplomacy.",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of role in relations." }
//         },
//         {
//           id: "subdot_roleinrelations_2",
//           label: "Showcases advanced infrastructure solutions.",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of role in relations." }
//         },
//         // Subdot nodes for Bilaterals (2 points)
//         {
//           id: "subdot_bilaterals_1",
//           label: "Engages within Finland’s frameworks.",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of bilaterals." }
//         },
//         {
//           id: "subdot_bilaterals_2",
//           label: "Deals support broader trade relationships.",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of bilaterals." }
//         },
//         // Subdot nodes for Align and Friction (2 points)
//         {
//           id: "subdot_alignandfriction_1",
//           label: "Competes with global elevator firms in the UAE.",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of align and friction." }
//         },
//         {
//           id: "subdot_alignandfriction_2",
//           label: "Navigates the UAE’s multi-vendor approach.",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of align and friction." }
//         },
//         // Subdot node for Conclusions (1 point)
//         {
//           id: "subdot_conclusions_1",
//           label: "Expands KONE’s footprint in the Gulf.",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of conclusions." }
//         }
//       ],
//       edges: [
//         // Edges from the central person to each main dot node.
//         { source: "person_AnttiHerlin", target: "dot_strategy", type: "Person-Dot", label: "has" },
//         { source: "person_AnttiHerlin", target: "dot_uaestatements", type: "Person-Dot", label: "has" },
//         { source: "person_AnttiHerlin", target: "dot_roleinrelations", type: "Person-Dot", label: "has" },
//         { source: "person_AnttiHerlin", target: "dot_bilaterals", type: "Person-Dot", label: "has" },
//         { source: "person_AnttiHerlin", target: "dot_alignandfriction", type: "Person-Dot", label: "has" },
//         { source: "person_AnttiHerlin", target: "dot_conclusions", type: "Person-Dot", label: "has" },
//         // Edges from each dot node to its subdot nodes.
//         { source: "dot_strategy", target: "subdot_strategy_1", type: "Dot-SubDot", label: "point" },
//         { source: "dot_strategy", target: "subdot_strategy_2", type: "Dot-SubDot", label: "point" },
//         { source: "dot_uaestatements", target: "subdot_uaestatements_1", type: "Dot-SubDot", label: "point" },
//         { source: "dot_uaestatements", target: "subdot_uaestatements_2", type: "Dot-SubDot", label: "point" },
//         { source: "dot_roleinrelations", target: "subdot_roleinrelations_1", type: "Dot-SubDot", label: "point" },
//         { source: "dot_roleinrelations", target: "subdot_roleinrelations_2", type: "Dot-SubDot", label: "point" },
//         { source: "dot_bilaterals", target: "subdot_bilaterals_1", type: "Dot-SubDot", label: "point" },
//         { source: "dot_bilaterals", target: "subdot_bilaterals_2", type: "Dot-SubDot", label: "point" },
//         { source: "dot_alignandfriction", target: "subdot_alignandfriction_1", type: "Dot-SubDot", label: "point" },
//         { source: "dot_alignandfriction", target: "subdot_alignandfriction_2", type: "Dot-SubDot", label: "point" },
//         { source: "dot_conclusions", target: "subdot_conclusions_1", type: "Dot-SubDot", label: "point" }
//       ]
//     }
//   };

//   // Set container height to match the left panel
//   useEffect(() => {
//     setContainerHeight(600);
//   }, []);

//   useEffect(() => {
//     if (!svgRef.current) return;

//     // Clear previous visualisation
//     d3.select(svgRef.current).selectAll("*").remove();

//     const svg = d3.select(svgRef.current);
//     const width = parseInt(svg.style("width"));
//     const height = containerHeight - 20; // account for padding
//     const centerX = width / 2;
//     const centerY = height / 2 - 30;

//     // For testing this demo, we ignore selectedFaculty and use our single person data
//     // Filter all nodes and edges from the data
//     const relevantNodes = data.graph.nodes;
//     const relevantEdges = data.graph.edges;

//     // Pre-calculate groups for dot and subdot nodes
//     const personNode = relevantNodes.find(n => n.type === "Person");
//     const dotNodes = relevantNodes.filter(n => n.type === "Dot");

//     // Set initial positions
//     relevantNodes.forEach(node => {
//       if (node.type === "Person") {
//         // Centre the person node
//         node.x = centerX;
//         node.y = centerY;
//       }
//     });
//     // Arrange Dot nodes in a circle around the person node
//     dotNodes.forEach((node, i) => {
//       const angle = (i / dotNodes.length) * 2 * Math.PI;
//       const radius = 150;
//       node.x = centerX + radius * Math.cos(angle);
//       node.y = centerY + radius * Math.sin(angle);
//     });
//     // For each SubDot, place it relative to its parent Dot node
//     const dotIdToNode = {};
//     dotNodes.forEach(node => { dotIdToNode[node.id] = node; });
//     // Group subdot nodes by their parent dot
//     const subDotGroups = {};
//     relevantNodes.filter(n => n.type === "SubDot").forEach(subdot => {
//       // Find the parent dot via the edge with type "Dot-SubDot"
//       const parentEdge = relevantEdges.find(edge => edge.target === subdot.id && edge.type === "Dot-SubDot");
//       if (parentEdge) {
//         if (!subDotGroups[parentEdge.source]) subDotGroups[parentEdge.source] = [];
//         subDotGroups[parentEdge.source].push(subdot);
//       }
//     });
//     // Assign positions to subdots in a small circle around their dot node
//     Object.keys(subDotGroups).forEach(dotId => {
//       const parent = dotIdToNode[dotId];
//       const children = subDotGroups[dotId];
//       children.forEach((child, j) => {
//         const angle = (j / children.length) * 2 * Math.PI;
//         const radius = 50;
//         child.x = parent.x + radius * Math.cos(angle);
//         child.y = parent.y + radius * Math.sin(angle);
//       });
//     });

//     // Create a tooltip group
//     const tooltip = svg.append("g")
//       .attr("class", "tooltip")
//       .style("opacity", 0);
//     tooltip.append("rect")
//       .attr("rx", 5)
//       .attr("ry", 5)
//       .attr("width", 200)
//       .attr("height", 40)
//       .attr("fill", "white")
//       .attr("stroke", "#ccc")
//       .attr("stroke-width", 1);
//     const tooltipText = tooltip.append("text")
//       .attr("x", 10)
//       .attr("y", 20)
//       .attr("fill", "#333")
//       .style("font-size", "12px");

//     // Create a force simulation
//     const simulation = d3.forceSimulation(relevantNodes)
//       .force("link", d3.forceLink(relevantEdges)
//         .id(d => d.id)
//         .distance(d => {
//           if (d.type === "Person-Dot") return 150;
//           if (d.type === "Dot-SubDot") return 50;
//           return 80;
//         }))
//       .force("charge", d3.forceManyBody().strength(-200))
//       .force("center", d3.forceCenter(centerX, centerY))
//       .force("collide", d3.forceCollide().radius(35))
//       .on("tick", ticked);

//     // Create groups for edges
//     const linkGroup = svg.append("g");
//     const link = linkGroup.selectAll("g")
//       .data(relevantEdges)
//       .enter()
//       .append("g");
//     // Draw lines for links
//     link.append("line")
//       .attr("stroke", "#999")
//       .attr("stroke-opacity", 0.6)
//       .attr("stroke-width", 2);
//     // Draw edge labels
//     link.append("text")
//       .attr("font-size", "10px")
//       .attr("fill", "#666")
//       .attr("text-anchor", "middle")
//       .attr("dy", -5)
//       .text(d => d.label);

//     // Create groups for nodes
//     const node = svg.append("g")
//       .selectAll(".node")
//       .data(relevantNodes)
//       .enter()
//       .append("g")
//       .attr("class", "node")
//       .call(d3.drag()
//         .on("start", dragstarted)
//         .on("drag", dragged)
//         .on("end", dragended))
//       .on("mouseover", function(event, d) {
//         // Show tooltip with hover text
//         const hoverText = d.metadata?.hoverText || d.label;
//         tooltipText.text(hoverText);
//         const textLength = tooltipText.node().getComputedTextLength();
//         tooltip.select("rect")
//           .attr("width", textLength + 20);
//         tooltip
//           .attr("transform", `translate(${d.x + 20},${d.y - 30})`)
//           .transition()
//           .duration(200)
//           .style("opacity", 1);
//         // Highlight connected links
//         link.selectAll("line")
//           .style("stroke", l => (l.source.id === d.id || l.target.id === d.id) ? "#333" : "#999")
//           .style("stroke-width", l => (l.source.id === d.id || l.target.id === d.id) ? 3 : 2)
//           .style("stroke-opacity", l => (l.source.id === d.id || l.target.id === d.id) ? 1 : 0.2);
//       })
//       .on("mouseout", function() {
//         tooltip.transition().duration(200).style("opacity", 0);
//         link.selectAll("line")
//           .style("stroke", "#999")
//           .style("stroke-width", 2)
//           .style("stroke-opacity", 0.6);
//       });

//     // Draw circles for nodes (varying radius and colour by type)
//     node.append("circle")
//       .attr("r", d => d.type === "Person" ? 25 : (d.type === "Dot" ? 20 : 15))
//       .attr("fill", d => {
//         if (d.type === "Person") return "#5B8FF9";
//         if (d.type === "Dot") return "#66C18C";
//         return "#FFA500";
//       })
//       .attr("stroke", "#fff")
//       .attr("stroke-width", 1.5);

//     // Add labels for nodes
//     node.append("text")
//       .text(d => d.label)
//       .attr("font-size", d => d.type === "Person" ? "12px" : "10px")
//       .attr("text-anchor", "middle")
//       .attr("dy", d => d.type === "Person" ? "35px" : "25px")
//       .attr("fill", "#333");

//     // Tick function to update positions
//     function ticked() {
//       // Keep nodes within bounds
//       relevantNodes.forEach(d => {
//         d.x = Math.max(30, Math.min(width - 30, d.x));
//         d.y = Math.max(30, Math.min(height - 60, d.y));
//       });
//       // Update link positions
//       link.selectAll("line")
//         .attr("x1", d => d.source.x)
//         .attr("y1", d => d.source.y)
//         .attr("x2", d => d.target.x)
//         .attr("y2", d => d.target.y);
//       // Update edge label positions
//       link.selectAll("text")
//         .attr("x", d => (d.source.x + d.target.x) / 2)
//         .attr("y", d => (d.source.y + d.target.y) / 2);
//       // Update node positions
//       node.attr("transform", d => `translate(${d.x},${d.y})`);
//     }

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
//     }
//   }, [containerHeight]);

//   return (
//     <div className="w-full" ref={containerRef}>
//       <h3 className="text-xl font-semibold text-gray-700 uppercase mb-2">RESEARCH NETWORK</h3>
//       <div 
//         className="border border-gray-200 rounded-lg bg-white p-2"
//         style={{ height: `${containerHeight}px` }}
//       >
//         <svg ref={svgRef} width="100%" height="100%" />
//       </div>
//     </div>
//   );
// };

// export default MinisterNetwork;



















// import React, { useEffect, useRef, useState } from 'react';
// import * as d3 from 'd3';

// const MinisterNetwork = ({ selectedFaculty }) => {
//   const svgRef = useRef(null);
//   const containerRef = useRef(null);
//   const [containerHeight, setContainerHeight] = useState(320);

//   // Adapted data structure for one person ("Antti Herlin")
//   const data = {
//     graph: {
//       nodes: [
//         {
//           id: "person_AnttiHerlin",
//           label: "Antti Herlin",
//           type: "Person",
//           metadata: {
//             shortBio: "Chairman of KONE",
//             title: "Chairman of KONE",
//             hoverText:
//               "Antti Herlin is a prominent industrialist, transforming KONE into a global leader in elevator and escalator solutions."
//           }
//         },
//         // Main dot nodes
//         {
//           id: "dot_strategy",
//           label: "Strategy",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key strategy: Finland’s most influential industrialist. Transformed KONE into a global leader."
//           }
//         },
//         {
//           id: "dot_uaestatements",
//           label: "UAE Statements",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key UAE statements: Does not frequently comment on the UAE publicly. Involved in major projects."
//           }
//         },
//         {
//           id: "dot_roleinrelations",
//           label: "Role in Relations",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key role: Influences Finland’s economic diplomacy and bilateral trade."
//           }
//         },
//         {
//           id: "dot_bilaterals",
//           label: "Bilaterals",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key bilateral engagements and commercial contracts."
//           }
//         },
//         {
//           id: "dot_alignandfriction",
//           label: "Align and Friction",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Competes globally and navigates multi-vendor approaches."
//           }
//         },
//         {
//           id: "dot_conclusions",
//           label: "Conclusions",
//           type: "Dot",
//           metadata: {
//             hoverText: "Expands KONE’s footprint in the Gulf."
//           }
//         },
//         // Subdot nodes for Strategy (2 points)
//         {
//           id: "subdot_strategy_1",
//           label: "Finland’s most influential industrialist.",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of strategy." }
//         },
//         {
//           id: "subdot_strategy_2",
//           label: "Transformed KONE into a global leader in elevator/escalator solutions.",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of strategy." }
//         },
//         // Subdot nodes for UAE Statements (2 points)
//         {
//           id: "subdot_uaestatements_1",
//           label: "Does not frequently comment on the UAE publicly.",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of UAE statements." }
//         },
//         {
//           id: "subdot_uaestatements_2",
//           label: "KONE’s HQ in Dubai and involvement in iconic projects.",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of UAE statements." }
//         },
//         // Subdot nodes for Role in Relations (2 points)
//         {
//           id: "subdot_roleinrelations_1",
//           label: "Influences Finland’s economic diplomacy.",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of role in relations." }
//         },
//         {
//           id: "subdot_roleinrelations_2",
//           label: "Showcases advanced infrastructure solutions.",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of role in relations." }
//         },
//         // Subdot nodes for Bilaterals (2 points)
//         {
//           id: "subdot_bilaterals_1",
//           label: "Engages within Finland’s frameworks.",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of bilaterals." }
//         },
//         {
//           id: "subdot_bilaterals_2",
//           label: "Deals support broader trade relationships.",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of bilaterals." }
//         },
//         // Subdot nodes for Align and Friction (2 points)
//         {
//           id: "subdot_alignandfriction_1",
//           label: "Competes with global elevator firms in the UAE.",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of align and friction." }
//         },
//         {
//           id: "subdot_alignandfriction_2",
//           label: "Navigates the UAE’s multi-vendor approach.",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of align and friction." }
//         },
//         // Subdot node for Conclusions (1 point)
//         {
//           id: "subdot_conclusions_1",
//           label: "Expands KONE’s footprint in the Gulf.",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of conclusions." }
//         }
//       ],
//       edges: [
//         // Edges from the central person to each main dot node.
//         { source: "person_AnttiHerlin", target: "dot_strategy", type: "Person-Dot", label: "has" },
//         { source: "person_AnttiHerlin", target: "dot_uaestatements", type: "Person-Dot", label: "has" },
//         { source: "person_AnttiHerlin", target: "dot_roleinrelations", type: "Person-Dot", label: "has" },
//         { source: "person_AnttiHerlin", target: "dot_bilaterals", type: "Person-Dot", label: "has" },
//         { source: "person_AnttiHerlin", target: "dot_alignandfriction", type: "Person-Dot", label: "has" },
//         { source: "person_AnttiHerlin", target: "dot_conclusions", type: "Person-Dot", label: "has" },
//         // Edges from each dot node to its subdot nodes.
//         { source: "dot_strategy", target: "subdot_strategy_1", type: "Dot-SubDot", label: "point" },
//         { source: "dot_strategy", target: "subdot_strategy_2", type: "Dot-SubDot", label: "point" },
//         { source: "dot_uaestatements", target: "subdot_uaestatements_1", type: "Dot-SubDot", label: "point" },
//         { source: "dot_uaestatements", target: "subdot_uaestatements_2", type: "Dot-SubDot", label: "point" },
//         { source: "dot_roleinrelations", target: "subdot_roleinrelations_1", type: "Dot-SubDot", label: "point" },
//         { source: "dot_roleinrelations", target: "subdot_roleinrelations_2", type: "Dot-SubDot", label: "point" },
//         { source: "dot_bilaterals", target: "subdot_bilaterals_1", type: "Dot-SubDot", label: "point" },
//         { source: "dot_bilaterals", target: "subdot_bilaterals_2", type: "Dot-SubDot", label: "point" },
//         { source: "dot_alignandfriction", target: "subdot_alignandfriction_1", type: "Dot-SubDot", label: "point" },
//         { source: "dot_alignandfriction", target: "subdot_alignandfriction_2", type: "Dot-SubDot", label: "point" },
//         { source: "dot_conclusions", target: "subdot_conclusions_1", type: "Dot-SubDot", label: "point" }
//       ]
//     }
//   };

//   // Set container height to match the left panel
//   useEffect(() => {
//     setContainerHeight(600);
//   }, []);

//   useEffect(() => {
//     if (!svgRef.current) return;

//     // Clear previous visualisation
//     d3.select(svgRef.current).selectAll("*").remove();

//     const svg = d3.select(svgRef.current);
//     const width = parseInt(svg.style("width"));
//     const height = containerHeight - 20; // account for padding
//     const centerX = width / 2;
//     const centerY = height / 2 - 30;

//     // For testing this demo, we use our single person data (ignoring selectedFaculty)
//     const relevantNodes = data.graph.nodes;
//     const relevantEdges = data.graph.edges;

//     // Pre-calculate groups for dot and subdot nodes
//     const personNode = relevantNodes.find(n => n.type === "Person");
//     const dotNodes = relevantNodes.filter(n => n.type === "Dot");

//     // Set initial positions
//     relevantNodes.forEach(node => {
//       if (node.type === "Person") {
//         // Centre the person node
//         node.x = centerX;
//         node.y = centerY;
//       }
//     });
//     // Arrange Dot nodes in a circle around the person node
//     dotNodes.forEach((node, i) => {
//       const angle = (i / dotNodes.length) * 2 * Math.PI;
//       const radius = 150;
//       node.x = centerX + radius * Math.cos(angle);
//       node.y = centerY + radius * Math.sin(angle);
//     });
//     // For each SubDot, place it relative to its parent Dot node
//     const dotIdToNode = {};
//     dotNodes.forEach(node => { dotIdToNode[node.id] = node; });
//     const subDotGroups = {};
//     relevantNodes.filter(n => n.type === "SubDot").forEach(subdot => {
//       const parentEdge = relevantEdges.find(edge => edge.target === subdot.id && edge.type === "Dot-SubDot");
//       if (parentEdge) {
//         if (!subDotGroups[parentEdge.source]) subDotGroups[parentEdge.source] = [];
//         subDotGroups[parentEdge.source].push(subdot);
//       }
//     });
//     Object.keys(subDotGroups).forEach(dotId => {
//       const parent = dotIdToNode[dotId];
//       const children = subDotGroups[dotId];
//       children.forEach((child, j) => {
//         const angle = (j / children.length) * 2 * Math.PI;
//         const radius = 50;
//         child.x = parent.x + radius * Math.cos(angle);
//         child.y = parent.y + radius * Math.sin(angle);
//       });
//     });

//     // Create a tooltip group (text only, no rounded rect)
//     const tooltip = svg.append("g")
//       .attr("class", "tooltip")
//       .style("opacity", 0);
//     const tooltipText = tooltip.append("text")
//       .attr("fill", "#333")
//       .style("font-size", "12px");

//     // Function to wrap text within a given width (in pixels)
//     function wrapText(textSelection, widthLimit) {
//       textSelection.each(function() {
//         const textEl = d3.select(this);
//         const words = textEl.text().split(/\s+/).filter(w => w.length);
//         textEl.text(""); // clear current text
//         let line = [];
//         const lineHeight = 1.1; // ems
//         const tspans = [];
//         let tspan = textEl.append("tspan").attr("x", 0).attr("dy", "0em");
//         for (let word of words) {
//           line.push(word);
//           tspan.text(line.join(" "));
//           if (tspan.node().getComputedTextLength() > widthLimit && line.length > 1) {
//             line.pop();
//             tspan.text(line.join(" "));
//             line = [word];
//             tspan = textEl.append("tspan").attr("x", 0).attr("dy", lineHeight + "em").text(word);
//           }
//         }
//         // Vertically centre multiline text by shifting all tspans upward.
//         const tspansNodes = textEl.selectAll("tspan").nodes();
//         const n = tspansNodes.length;
//         // Adjust the first tspan's dy to account for centring
//         textEl.selectAll("tspan")
//           .attr("dy", (d, i) => (i - (n - 1) / 2) * lineHeight + "em");
//       });
//     }

//     // Create a force simulation
//     const simulation = d3.forceSimulation(relevantNodes)
//       .force("link", d3.forceLink(relevantEdges)
//         .id(d => d.id)
//         .distance(d => {
//           if (d.type === "Person-Dot") return 150;
//           if (d.type === "Dot-SubDot") return 50;
//           return 80;
//         }))
//       .force("charge", d3.forceManyBody().strength(-200))
//       .force("center", d3.forceCenter(centerX, centerY))
//       .force("collide", d3.forceCollide().radius(35))
//       .on("tick", ticked);

//     // Create groups for edges
//     const linkGroup = svg.append("g");
//     const link = linkGroup.selectAll("g")
//       .data(relevantEdges)
//       .enter()
//       .append("g");
//     link.append("line")
//       .attr("stroke", "#999")
//       .attr("stroke-opacity", 0.6)
//       .attr("stroke-width", 2);
//     link.append("text")
//       .attr("font-size", "10px")
//       .attr("fill", "#666")
//       .attr("text-anchor", "middle")
//       .attr("dy", -5)
//       .text(d => d.label);

//     // Create groups for nodes
//     const node = svg.append("g")
//       .selectAll(".node")
//       .data(relevantNodes)
//       .enter()
//       .append("g")
//       .attr("class", "node")
//       .call(d3.drag()
//         .on("start", dragstarted)
//         .on("drag", dragged)
//         .on("end", dragended))
//       .on("mouseover", function(event, d) {
//         // Show tooltip (text only)
//         tooltipText.text(d.metadata?.hoverText || d.label);
//         tooltip
//           .attr("transform", `translate(${d.x + 20},${d.y - 30})`)
//           .transition()
//           .duration(200)
//           .style("opacity", 1);
//         link.selectAll("line")
//           .style("stroke", l => (l.source.id === d.id || l.target.id === d.id) ? "#333" : "#999")
//           .style("stroke-width", l => (l.source.id === d.id || l.target.id === d.id) ? 3 : 2)
//           .style("stroke-opacity", l => (l.source.id === d.id || l.target.id === d.id) ? 1 : 0.2);
//       })
//       .on("mouseout", function() {
//         tooltip.transition().duration(200).style("opacity", 0);
//         link.selectAll("line")
//           .style("stroke", "#999")
//           .style("stroke-width", 2)
//           .style("stroke-opacity", 0.6);
//       });

//     // Draw circles for nodes (radius and colour by type)
//     node.append("circle")
//       .attr("r", d => d.type === "Person" ? 25 : (d.type === "Dot" ? 20 : 15))
//       .attr("fill", d => {
//         if (d.type === "Person") return "#5B8FF9"; // blue
//         if (d.type === "Dot") return "#66C18C"; // green
//         return "#FFA500"; // orange for SubDot
//       })
//       .attr("stroke", "#fff")
//       .attr("stroke-width", 1.5);

//     // Add labels for nodes. For Person and Dot nodes, centre the text inside the circle.
//     node.append("text")
//       .each(function(d) {
//         let maxWidth;
//         if (d.type === "Person") {
//           maxWidth = 50;
//           d3.select(this)
//             .attr("text-anchor", "middle")
//             .attr("dominant-baseline", "middle")
//             .attr("font-size", "12px");
//         } else if (d.type === "Dot") {
//           maxWidth = 40;
//           d3.select(this)
//             .attr("text-anchor", "middle")
//             .attr("dominant-baseline", "middle")
//             .attr("font-size", "10px");
//         } else {
//           // For SubDot nodes, keep text centred as well.
//           maxWidth = 30;
//           d3.select(this)
//             .attr("text-anchor", "middle")
//             .attr("dominant-baseline", "middle")
//             .attr("font-size", "8px");
//         }
//         d3.select(this).text(d.label);
//         wrapText(d3.select(this), maxWidth);
//       })
//       .attr("fill", "#333");

//     function ticked() {
//       relevantNodes.forEach(d => {
//         d.x = Math.max(30, Math.min(width - 30, d.x));
//         d.y = Math.max(30, Math.min(height - 60, d.y));
//       });
//       link.selectAll("line")
//         .attr("x1", d => d.source.x)
//         .attr("y1", d => d.source.y)
//         .attr("x2", d => d.target.x)
//         .attr("y2", d => d.target.y);
//       link.selectAll("text")
//         .attr("x", d => (d.source.x + d.target.x) / 2)
//         .attr("y", d => (d.source.y + d.target.y) / 2);
//       node.attr("transform", d => `translate(${d.x},${d.y})`);
//     }

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
//     }
//   }, [containerHeight]);

//   return (
//     <div className="w-full" ref={containerRef}>
//       <h3 className="text-xl font-semibold text-gray-700 uppercase mb-2">RESEARCH NETWORK</h3>
//       <div 
//         className="border border-gray-200 rounded-lg bg-white p-2"
//         style={{ height: `${containerHeight}px` }}
//       >
//         <svg ref={svgRef} width="100%" height="100%" />
//       </div>
//     </div>
//   );
// };

// export default MinisterNetwork;







































// import React, { useEffect, useRef, useState } from 'react';
// import * as d3 from 'd3';

// const MinisterNetwork = ({ selectedFaculty }) => {
//   const svgRef = useRef(null);
//   const containerRef = useRef(null);
//   const [containerHeight, setContainerHeight] = useState(320);

//   // Adapted data structure for one person ("Antti Herlin")
//   const data = {
//     graph: {
//       nodes: [
//         {
//           id: "person_AnttiHerlin",
//           label: "Antti Herlin",
//           type: "Person",
//           metadata: {
//             shortBio: "Chairman of KONE",
//             title: "Chairman of KONE",
//             hoverText:
//               "Antti Herlin is a prominent industrialist, transforming KONE into a global leader in elevator and escalator solutions."
//           }
//         },
//         // Main dot nodes
//         {
//           id: "dot_strategy",
//           label: "Strategy",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key strategy: Finland’s most influential industrialist. Transformed KONE into a global leader."
//           }
//         },
//         {
//           id: "dot_uaestatements",
//           label: "UAE Statements",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key UAE statements: Does not frequently comment on the UAE publicly. Involved in major projects."
//           }
//         },
//         {
//           id: "dot_roleinrelations",
//           label: "Role in Relations",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key role: Influences Finland’s economic diplomacy and bilateral trade."
//           }
//         },
//         {
//           id: "dot_bilaterals",
//           label: "Bilaterals",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key bilateral engagements and commercial contracts."
//           }
//         },
//         {
//           id: "dot_alignandfriction",
//           label: "Align and Friction",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Competes globally and navigates multi-vendor approaches."
//           }
//         },
//         {
//           id: "dot_conclusions",
//           label: "Conclusions",
//           type: "Dot",
//           metadata: {
//             hoverText: "Expands KONE’s footprint in the Gulf."
//           }
//         },
//         // Subdot nodes for Strategy (2 points)
//         {
//           id: "subdot_strategy_1",
//           label: "Finland’s most influential industrialist.",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of strategy." }
//         },
//         {
//           id: "subdot_strategy_2",
//           label: "Transformed KONE into a global leader in elevator/escalator solutions.",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of strategy." }
//         },
//         // Subdot nodes for UAE Statements (2 points)
//         {
//           id: "subdot_uaestatements_1",
//           label: "Does not frequently comment on the UAE publicly.",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of UAE statements." }
//         },
//         {
//           id: "subdot_uaestatements_2",
//           label: "KONE’s HQ in Dubai and involvement in iconic projects.",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of UAE statements." }
//         },
//         // Subdot nodes for Role in Relations (2 points)
//         {
//           id: "subdot_roleinrelations_1",
//           label: "Influences Finland’s economic diplomacy.",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of role in relations." }
//         },
//         {
//           id: "subdot_roleinrelations_2",
//           label: "Showcases advanced infrastructure solutions.",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of role in relations." }
//         },
//         // Subdot nodes for Bilaterals (2 points)
//         {
//           id: "subdot_bilaterals_1",
//           label: "Engages within Finland’s frameworks.",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of bilaterals." }
//         },
//         {
//           id: "subdot_bilaterals_2",
//           label: "Deals support broader trade relationships.",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of bilaterals." }
//         },
//         // Subdot nodes for Align and Friction (2 points)
//         {
//           id: "subdot_alignandfriction_1",
//           label: "Competes with global elevator firms in the UAE.",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of align and friction." }
//         },
//         {
//           id: "subdot_alignandfriction_2",
//           label: "Navigates the UAE’s multi-vendor approach.",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of align and friction." }
//         },
//         // Subdot node for Conclusions (1 point)
//         {
//           id: "subdot_conclusions_1",
//           label: "Expands KONE’s footprint in the Gulf.",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of conclusions." }
//         }
//       ],
//       edges: [
//         // Edges from the central person to each main dot node.
//         { source: "person_AnttiHerlin", target: "dot_strategy", type: "Person-Dot", label: "has" },
//         { source: "person_AnttiHerlin", target: "dot_uaestatements", type: "Person-Dot", label: "has" },
//         { source: "person_AnttiHerlin", target: "dot_roleinrelations", type: "Person-Dot", label: "has" },
//         { source: "person_AnttiHerlin", target: "dot_bilaterals", type: "Person-Dot", label: "has" },
//         { source: "person_AnttiHerlin", target: "dot_alignandfriction", type: "Person-Dot", label: "has" },
//         { source: "person_AnttiHerlin", target: "dot_conclusions", type: "Person-Dot", label: "has" },
//         // Edges from each dot node to its subdot nodes.
//         { source: "dot_strategy", target: "subdot_strategy_1", type: "Dot-SubDot", label: "point" },
//         { source: "dot_strategy", target: "subdot_strategy_2", type: "Dot-SubDot", label: "point" },
//         { source: "dot_uaestatements", target: "subdot_uaestatements_1", type: "Dot-SubDot", label: "point" },
//         { source: "dot_uaestatements", target: "subdot_uaestatements_2", type: "Dot-SubDot", label: "point" },
//         { source: "dot_roleinrelations", target: "subdot_roleinrelations_1", type: "Dot-SubDot", label: "point" },
//         { source: "dot_roleinrelations", target: "subdot_roleinrelations_2", type: "Dot-SubDot", label: "point" },
//         { source: "dot_bilaterals", target: "subdot_bilaterals_1", type: "Dot-SubDot", label: "point" },
//         { source: "dot_bilaterals", target: "subdot_bilaterals_2", type: "Dot-SubDot", label: "point" },
//         { source: "dot_alignandfriction", target: "subdot_alignandfriction_1", type: "Dot-SubDot", label: "point" },
//         { source: "dot_alignandfriction", target: "subdot_alignandfriction_2", type: "Dot-SubDot", label: "point" },
//         { source: "dot_conclusions", target: "subdot_conclusions_1", type: "Dot-SubDot", label: "point" }
//       ]
//     }
//   };

//   // Set container height to match the left panel
//   useEffect(() => {
//     setContainerHeight(600);
//   }, []);

//   useEffect(() => {
//     if (!svgRef.current) return;

//     // Clear previous visualisation
//     d3.select(svgRef.current).selectAll("*").remove();

//     const svg = d3.select(svgRef.current);
//     const width = parseInt(svg.style("width"));
//     const height = containerHeight - 20; // account for padding
//     const centerX = width / 2;
//     const centerY = height / 2 - 30;

//     // For testing, we use our single person data (ignoring selectedFaculty)
//     const relevantNodes = data.graph.nodes;
//     const relevantEdges = data.graph.edges;

//     // Create a container group for all drawn elements (for zoom/pan)
//     const containerGroup = svg.append("g").attr("class", "container-group");

//     // Pre-calculate groups for dot and subdot nodes
//     const dotNodes = relevantNodes.filter(n => n.type === "Dot");
//     const personNode = relevantNodes.find(n => n.type === "Person");

//     // Set initial positions
//     relevantNodes.forEach(node => {
//       if (node.type === "Person") {
//         node.x = centerX;
//         node.y = centerY;
//       }
//     });

//     // Arrange Dot nodes in a circle around the person node
//     dotNodes.forEach((node, i) => {
//       const angle = (i / dotNodes.length) * 2 * Math.PI;
//       const radius = 150;
//       node.x = centerX + radius * Math.cos(angle);
//       node.y = centerY + radius * Math.sin(angle);
//     });

//     // For each SubDot, place it relative to its parent Dot node
//     const dotIdToNode = {};
//     dotNodes.forEach(node => {
//       dotIdToNode[node.id] = node;
//     });
//     // Group subdot nodes by their parent Dot
//     const subDotGroups = {};
//     relevantNodes
//       .filter(n => n.type === "SubDot")
//       .forEach(subdot => {
//         const parentEdge = relevantEdges.find(
//           edge => edge.target === subdot.id && edge.type === "Dot-SubDot"
//         );
//         if (parentEdge) {
//           if (!subDotGroups[parentEdge.source]) {
//             subDotGroups[parentEdge.source] = [];
//           }
//           subDotGroups[parentEdge.source].push(subdot);
//         }
//       });
//     Object.keys(subDotGroups).forEach(dotId => {
//       const parent = dotIdToNode[dotId];
//       const children = subDotGroups[dotId];
//       children.forEach((child, j) => {
//         const angle = (j / children.length) * 2 * Math.PI;
//         const radius = 50;
//         child.x = parent.x + radius * Math.cos(angle);
//         child.y = parent.y + radius * Math.sin(angle);
//       });
//     });

//     // Create a tooltip group (text only, no rectangle)
//     const tooltip = containerGroup.append("g")
//       .attr("class", "tooltip")
//       .style("opacity", 0);

//     const tooltipText = tooltip.append("text")
//       .attr("fill", "#333")
//       .style("font-size", "12px");

//     // Function to wrap text within a given width (in pixels), with increased line spacing
//     function wrapText(textSelection, widthLimit) {
//       textSelection.each(function() {
//         const textEl = d3.select(this);
//         const words = textEl.text().split(/\s+/).filter(w => w.length);
//         textEl.text("");
//         let line = [];
//         // Increase line height slightly to reduce overlapping
//         const lineHeight = 1.3; // try 1.3 or 1.4 if you need more spacing
//         let tspan = textEl.append("tspan").attr("x", 0).attr("dy", "0em");

//         for (let word of words) {
//           line.push(word);
//           tspan.text(line.join(" "));
//           // If line is too long, wrap to next line
//           if (tspan.node().getComputedTextLength() > widthLimit && line.length > 1) {
//             line.pop();
//             tspan.text(line.join(" "));
//             line = [word];
//             tspan = textEl
//               .append("tspan")
//               .attr("x", 0)
//               .attr("dy", lineHeight + "em")
//               .text(word);
//           }
//         }
//         // Centre multiline text vertically
//         const tspans = textEl.selectAll("tspan");
//         const n = tspans.size();
//         tspans.attr("dy", (d, i) => (i - (n - 1) / 2) * lineHeight + "em");
//       });
//     }

//     // Create a force simulation
//     const simulation = d3.forceSimulation(relevantNodes)
//       .force(
//         "link",
//         d3.forceLink(relevantEdges)
//           .id(d => d.id)
//           .distance(d => {
//             if (d.type === "Person-Dot") return 150;
//             if (d.type === "Dot-SubDot") return 50;
//             return 80;
//           })
//       )
//       .force("charge", d3.forceManyBody().strength(-200))
//       .force("center", d3.forceCenter(centerX, centerY))
//       .force("collide", d3.forceCollide().radius(35))
//       .on("tick", ticked);

//     // Create groups for edges
//     const linkGroup = containerGroup.append("g").attr("class", "links");
//     const link = linkGroup
//       .selectAll("g")
//       .data(relevantEdges)
//       .enter()
//       .append("g");

//     link
//       .append("line")
//       .attr("stroke", "#999")
//       .attr("stroke-opacity", 0.6)
//       .attr("stroke-width", 2);

//     link
//       .append("text")
//       .attr("font-size", "10px")
//       .attr("fill", "#666")
//       .attr("text-anchor", "middle")
//       .attr("dy", -5)
//       .text(d => d.label);

//     // Create groups for nodes
//     const nodeGroup = containerGroup.append("g").attr("class", "nodes");
//     const node = nodeGroup
//       .selectAll(".node")
//       .data(relevantNodes)
//       .enter()
//       .append("g")
//       .attr("class", "node")
//       .call(
//         d3.drag()
//           .on("start", dragstarted)
//           .on("drag", dragged)
//           .on("end", dragended)
//       )
//       .on("mouseover", function(event, d) {
//         // Show tooltip (text only)
//         tooltipText.text(d.metadata?.hoverText || d.label);
//         tooltip
//           .attr("transform", `translate(${d.x + 20},${d.y - 30})`)
//           .transition()
//           .duration(200)
//           .style("opacity", 1);

//         // Highlight connected links
//         link.selectAll("line")
//           .style("stroke", l => (l.source.id === d.id || l.target.id === d.id) ? "#333" : "#999")
//           .style("stroke-width", l => (l.source.id === d.id || l.target.id === d.id) ? 3 : 2)
//           .style("stroke-opacity", l => (l.source.id === d.id || l.target.id === d.id) ? 1 : 0.2);
//       })
//       .on("mouseout", function() {
//         tooltip.transition().duration(200).style("opacity", 0);
//         link.selectAll("line")
//           .style("stroke", "#999")
//           .style("stroke-width", 2)
//           .style("stroke-opacity", 0.6);
//       });

//     // Draw circles for nodes (radius and colour by type)
//     node
//       .append("circle")
//       .attr("r", d => (d.type === "Person" ? 25 : d.type === "Dot" ? 20 : 15))
//       .attr("fill", d => {
//         if (d.type === "Person") return "#5B8FF9"; // blue
//         if (d.type === "Dot") return "#66C18C";   // green
//         return "#FFA500";                         // orange for SubDot
//       })
//       .attr("stroke", "#fff")
//       .attr("stroke-width", 1.5);

//     // Add labels for nodes. Centre the text inside the circle for all types.
//     node
//       .append("text")
//       .each(function(d) {
//         let maxWidth;
//         if (d.type === "Person") {
//           maxWidth = 50;
//           d3.select(this)
//             .attr("text-anchor", "middle")
//             .attr("dominant-baseline", "middle")
//             .attr("font-size", "12px");
//         } else if (d.type === "Dot") {
//           maxWidth = 40;
//           d3.select(this)
//             .attr("text-anchor", "middle")
//             .attr("dominant-baseline", "middle")
//             .attr("font-size", "10px");
//         } else {
//           // SubDot
//           maxWidth = 30;
//           d3.select(this)
//             .attr("text-anchor", "middle")
//             .attr("dominant-baseline", "middle")
//             .attr("font-size", "8px");
//         }
//         d3.select(this).text(d.label);
//         wrapText(d3.select(this), maxWidth);
//       })
//       .attr("fill", "#333");

//     // Zoom and pan functionality (does not reset the simulation)
//     const zoom = d3.zoom()
//       .scaleExtent([0.5, 3]) // Adjust min/max zoom as needed
//       .on("zoom", (event) => {
//         containerGroup.attr("transform", event.transform);
//       });
//     svg.call(zoom);

//     // Force simulation tick
//     function ticked() {
//       relevantNodes.forEach(d => {
//         d.x = Math.max(30, Math.min(width - 30, d.x));
//         d.y = Math.max(30, Math.min(height - 60, d.y));
//       });

//       link.selectAll("line")
//         .attr("x1", d => d.source.x)
//         .attr("y1", d => d.source.y)
//         .attr("x2", d => d.target.x)
//         .attr("y2", d => d.target.y);

//       link.selectAll("text")
//         .attr("x", d => (d.source.x + d.target.x) / 2)
//         .attr("y", d => (d.source.y + d.target.y) / 2);

//       node.attr("transform", d => `translate(${d.x},${d.y})`);
//     }

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
//     }
//   }, [containerHeight]);

//   return (
//     <div className="w-full" ref={containerRef}>
//       <h3 className="text-xl font-semibold text-gray-700 uppercase mb-2">RESEARCH NETWORK</h3>
//       <div
//         className="border border-gray-200 rounded-lg bg-white p-2"
//         style={{ height: `${containerHeight}px` }}
//       >
//         <svg ref={svgRef} width="100%" height="100%" />
//       </div>
//     </div>
//   );
// };

// export default MinisterNetwork;



























// import React, { useEffect, useRef, useState } from 'react';
// import * as d3 from 'd3';

// const MinisterNetwork = ({ selectedFaculty }) => {
//   const svgRef = useRef(null);
//   const containerRef = useRef(null);
//   const [containerHeight, setContainerHeight] = useState(320);












  // // Adapted data structure for one person ("Antti Herlin")
  // const data = {
  //   graph: {
  //     nodes: [
  //       {
  //         id: "person_AnttiHerlin",
  //         label: "Antti Herlin",
  //         type: "Person",
  //         metadata: {
  //           shortBio: "Chairman of KONE",
  //           title: "Chairman of KONE",
  //           hoverText:
  //             "Antti Herlin is a prominent industrialist, transforming KONE into a global leader in elevator and escalator solutions."
  //         }
  //       },
  //       // Main dot nodes
  //       {
  //         id: "dot_strategy",
  //         label: "Strategy",
  //         type: "Dot",
  //         metadata: {
  //           hoverText:
  //             "Key strategy: Finland’s most influential industrialist. Transformed KONE into a global leader."
  //         }
  //       },
  //       {
  //         id: "dot_uaestatements",
  //         label: "UAE Statements",
  //         type: "Dot",
  //         metadata: {
  //           hoverText:
  //             "Key UAE statements: Does not frequently comment on the UAE publicly. Involved in major projects."
  //         }
  //       },
  //       {
  //         id: "dot_roleinrelations",
  //         label: "Role in Relations",
  //         type: "Dot",
  //         metadata: {
  //           hoverText:
  //             "Key role: Influences Finland’s economic diplomacy and bilateral trade."
  //         }
  //       },
  //       {
  //         id: "dot_bilaterals",
  //         label: "Bilaterals",
  //         type: "Dot",
  //         metadata: {
  //           hoverText:
  //             "Key bilateral engagements and commercial contracts."
  //         }
  //       },
  //       {
  //         id: "dot_alignandfriction",
  //         label: "Align and Friction",
  //         type: "Dot",
  //         metadata: {
  //           hoverText:
  //             "Competes globally and navigates multi-vendor approaches."
  //         }
  //       },
  //       {
  //         id: "dot_conclusions",
  //         label: "Conclusions",
  //         type: "Dot",
  //         metadata: {
  //           hoverText: "Expands KONE’s footprint in the Gulf."
  //         }
  //       },
  //       // Subdot nodes for Strategy (2 points)
  //       {
  //         id: "subdot_strategy_1",
  //         label: "Finland’s most influential industrialist.",
  //         type: "SubDot",
  //         metadata: { hoverText: "Subpoint of strategy." }
  //       },
  //       {
  //         id: "subdot_strategy_2",
  //         label: "Transformed KONE into a global leader in elevator/escalator solutions.",
  //         type: "SubDot",
  //         metadata: { hoverText: "Subpoint of strategy." }
  //       },
  //       // Subdot nodes for UAE Statements (2 points)
  //       {
  //         id: "subdot_uaestatements_1",
  //         label: "Does not frequently comment on the UAE publicly.",
  //         type: "SubDot",
  //         metadata: { hoverText: "Subpoint of UAE statements." }
  //       },
  //       {
  //         id: "subdot_uaestatements_2",
  //         label: "KONE’s HQ in Dubai and involvement in iconic projects.",
  //         type: "SubDot",
  //         metadata: { hoverText: "Subpoint of UAE statements." }
  //       },
  //       // Subdot nodes for Role in Relations (2 points)
  //       {
  //         id: "subdot_roleinrelations_1",
  //         label: "Influences Finland’s economic diplomacy.",
  //         type: "SubDot",
  //         metadata: { hoverText: "Subpoint of role in relations." }
  //       },
  //       {
  //         id: "subdot_roleinrelations_2",
  //         label: "Showcases advanced infrastructure solutions.",
  //         type: "SubDot",
  //         metadata: { hoverText: "Subpoint of role in relations." }
  //       },
  //       // Subdot nodes for Bilaterals (2 points)
  //       {
  //         id: "subdot_bilaterals_1",
  //         label: "Engages within Finland’s frameworks.",
  //         type: "SubDot",
  //         metadata: { hoverText: "Subpoint of bilaterals." }
  //       },
  //       {
  //         id: "subdot_bilaterals_2",
  //         label: "Deals support broader trade relationships.",
  //         type: "SubDot",
  //         metadata: { hoverText: "Subpoint of bilaterals." }
  //       },
  //       // Subdot nodes for Align and Friction (2 points)
  //       {
  //         id: "subdot_alignandfriction_1",
  //         label: "Competes with global elevator firms in the UAE.",
  //         type: "SubDot",
  //         metadata: { hoverText: "Subpoint of align and friction." }
  //       },
  //       {
  //         id: "subdot_alignandfriction_2",
  //         label: "Navigates the UAE’s multi-vendor approach.",
  //         type: "SubDot",
  //         metadata: { hoverText: "Subpoint of align and friction." }
  //       },
  //       // Subdot node for Conclusions (1 point)
  //       {
  //         id: "subdot_conclusions_1",
  //         label: "Expands KONE’s footprint in the Gulf.",
  //         type: "SubDot",
  //         metadata: { hoverText: "Subpoint of conclusions." }
  //       }
  //     ],
  //     edges: [
  //       // Edges from the central person to each main dot node.
  //       { source: "person_AnttiHerlin", target: "dot_strategy", type: "Person-Dot", label: "has" },
  //       { source: "person_AnttiHerlin", target: "dot_uaestatements", type: "Person-Dot", label: "has" },
  //       { source: "person_AnttiHerlin", target: "dot_roleinrelations", type: "Person-Dot", label: "has" },
  //       { source: "person_AnttiHerlin", target: "dot_bilaterals", type: "Person-Dot", label: "has" },
  //       { source: "person_AnttiHerlin", target: "dot_alignandfriction", type: "Person-Dot", label: "has" },
  //       { source: "person_AnttiHerlin", target: "dot_conclusions", type: "Person-Dot", label: "has" },
  //       // Edges from each dot node to its subdot nodes.
  //       { source: "dot_strategy", target: "subdot_strategy_1", type: "Dot-SubDot", label: "point" },
  //       { source: "dot_strategy", target: "subdot_strategy_2", type: "Dot-SubDot", label: "point" },
  //       { source: "dot_uaestatements", target: "subdot_uaestatements_1", type: "Dot-SubDot", label: "point" },
  //       { source: "dot_uaestatements", target: "subdot_uaestatements_2", type: "Dot-SubDot", label: "point" },
  //       { source: "dot_roleinrelations", target: "subdot_roleinrelations_1", type: "Dot-SubDot", label: "point" },
  //       { source: "dot_roleinrelations", target: "subdot_roleinrelations_2", type: "Dot-SubDot", label: "point" },
  //       { source: "dot_bilaterals", target: "subdot_bilaterals_1", type: "Dot-SubDot", label: "point" },
  //       { source: "dot_bilaterals", target: "subdot_bilaterals_2", type: "Dot-SubDot", label: "point" },
  //       { source: "dot_alignandfriction", target: "subdot_alignandfriction_1", type: "Dot-SubDot", label: "point" },
  //       { source: "dot_alignandfriction", target: "subdot_alignandfriction_2", type: "Dot-SubDot", label: "point" },
  //       { source: "dot_conclusions", target: "subdot_conclusions_1", type: "Dot-SubDot", label: "point" }
  //     ]
  //   }
  // };









//   const data = {
//     graph: {
//       nodes: [
//         // ---------------------------
//         // Profile: Sandra Bergqvist
//         // ---------------------------
//         {
//           id: "person_SandraBergqvist",
//           label: "Sandra Bergqvist",
//           type: "Person",
//           metadata: {
//             shortBio: "Minister of Youth, Sport and Physical Activity",
//             title: "Minister of Youth, Sport and Physical Activity",
//             hoverText:
//               "Serves as Minister since June 2023, previously active in municipal politics and academia. Focuses on youth engagement, sports, and community well-being."
//           }
//         },
//         {
//           id: "dot_strategy_SandraBergqvist",
//           label: "Strategy",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key strategy: Serves as Minister since June 2023, previously active in municipal politics and academia. Focuses on youth engagement, sports, and community well-being."
//           }
//         },
//         {
//           id: "subdot_strategy_1_SandraBergqvist",
//           label:
//             "Serves as Minister since June 2023, previously active in municipal politics and academia",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of strategy." }
//         },
//         {
//           id: "subdot_strategy_2_SandraBergqvist",
//           label: "Focuses on youth engagement, sports, and community well-being",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of strategy." }
//         },
//         {
//           id: "dot_uaestatements_SandraBergqvist",
//           label: "UAE Statements",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key UAE statements: Statements about the UAE have been nonobtrusive; Finland generally sees the UAE as a partner for sports diplomacy and youth programs."
//           }
//         },
//         {
//           id: "subdot_uaestatements_1_SandraBergqvist",
//           label:
//             "Statements about the UAE have been nonobtrusive; Finland generally sees the UAE as a partner for sports diplomacy and youth programs",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of UAE statements." }
//         },
//         {
//           id: "dot_roleinrelations_SandraBergqvist",
//           label: "Role in Relations",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key role: Ministry involvement in youth exchanges, sports diplomacy, and inclusivity (e.g. Special Olympics World Games Abu Dhabi 2019). Potential for shared best practices in youth empowerment."
//           }
//         },
//         {
//           id: "subdot_roleinrelations_1_SandraBergqvist",
//           label:
//             "Ministry involvement in youth exchanges, sports diplomacy, and inclusivity (e.g. Special Olympics World Games Abu Dhabi 2019)",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of role in relations." }
//         },
//         {
//           id: "subdot_roleinrelations_2_SandraBergqvist",
//           label: "Potential for shared best practices in youth empowerment",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of role in relations." }
//         },
//         {
//           id: "dot_bilaterals_SandraBergqvist",
//           label: "Bilaterals",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key bilaterals: Collaboration primarily facilitated through cultural, educational, and sports events, including Finland’s participation in Special Olympics 2019 in Abu Dhabi."
//           }
//         },
//         {
//           id: "subdot_bilaterals_1_SandraBergqvist",
//           label:
//             "Collaboration primarily facilitated through cultural, educational, and sports events, including Finland’s participation in Special Olympics 2019 in Abu Dhabi",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of bilaterals." }
//         },
//         {
//           id: "dot_alignandfriction_SandraBergqvist",
//           label: "Align and Friction",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key align and friction: Both countries value sports as a unifying force, focusing on inclusivity and community building. Minimal friction; differences in approach to funding or volunteer-driven vs. government-driven sports programmes are seen as opportunities for exchange."
//           }
//         },
//         {
//           id: "subdot_alignandfriction_1_SandraBergqvist",
//           label:
//             "Both countries value sports as a unifying force, focusing on inclusivity and community building",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of align and friction." }
//         },
//         {
//           id: "subdot_alignandfriction_2_SandraBergqvist",
//           label:
//             "Minimal friction; differences in approach to funding or volunteer-driven vs. government-driven sports programmes are seen as opportunities for exchange",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of align and friction." }
//         },
//         {
//           id: "dot_conclusions_SandraBergqvist",
//           label: "Conclusions",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key conclusions: Committed to expanding sports-based collaboration, youth exchanges, and inclusive athletic events, reinforcing mutual goodwill."
//           }
//         },
//         {
//           id: "subdot_conclusions_1_SandraBergqvist",
//           label:
//             "Committed to expanding sports-based collaboration, youth exchanges, and inclusive athletic events, reinforcing mutual goodwill",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of conclusions." }
//         },
  
//         // ---------------------------
//         // Profile: Anna-Kaisa Ikonen
//         // ---------------------------
//         {
//           id: "person_AnnaKaisaIkonen",
//           label: "Anna-Kaisa Ikonen",
//           type: "Person",
//           metadata: {
//             shortBio: "Minister of Local and Regional Government",
//             title: "Minister of Local and Regional Government",
//             hoverText:
//               "Serves as Minister of Local and Regional Government since June 2023. Former mayor of Tampere with deep experience in governance and public administration."
//           }
//         },
//         {
//           id: "dot_strategy_AnnaKaisaIkonen",
//           label: "Strategy",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key strategy: Serves as Minister of Local and Regional Government since June 2023. Former mayor of Tampere with deep experience in governance and public administration."
//           }
//         },
//         {
//           id: "subdot_strategy_1_AnnaKaisaIkonen",
//           label:
//             "Serves as Minister of Local and Regional Government since June 2023",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of strategy." }
//         },
//         {
//           id: "subdot_strategy_2_AnnaKaisaIkonen",
//           label:
//             "Former mayor of Tampere with deep experience in governance and public administration",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of strategy." }
//         },
//         {
//           id: "dot_uaestatements_AnnaKaisaIkonen",
//           label: "UAE Statements",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key UAE statements: No specific public comments on the UAE. Broader diplomatic interactions highlight Finland’s interest in sustainable urban development and smart city initiatives."
//           }
//         },
//         {
//           id: "subdot_uaestatements_1_AnnaKaisaIkonen",
//           label: "No specific public comments on the UAE",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of UAE statements." }
//         },
//         {
//           id: "subdot_uaestatements_2_AnnaKaisaIkonen",
//           label:
//             "Broader diplomatic interactions highlight Finland’s interest in sustainable urban development and smart city initiatives",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of UAE statements." }
//         },
//         {
//           id: "dot_roleinrelations_AnnaKaisaIkonen",
//           label: "Role in Relations",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key role: While not directly involved, her ministry could collaborate on urban innovation and digital transformation of public services, aligning with UAE’s push for smart governance."
//           }
//         },
//         {
//           id: "subdot_roleinrelations_1_AnnaKaisaIkonen",
//           label:
//             "While not directly involved, her ministry could collaborate on urban innovation and digital transformation of public services, aligning with UAE’s push for smart governance",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of role in relations." }
//         },
//         {
//           id: "dot_bilaterals_AnnaKaisaIkonen",
//           label: "Bilaterals",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key bilaterals: Finland–UAE relations anchored by frameworks like the 1982 Economic Cooperation Agreement, 1996 Double Taxation Agreement, and 2013 Air Services Agreement. Potential for city-level partnerships."
//           }
//         },
//         {
//           id: "subdot_bilaterals_1_AnnaKaisaIkonen",
//           label:
//             "Finland–UAE relations anchored by frameworks like the 1982 Economic Cooperation Agreement, 1996 Double Taxation Agreement, and 2013 Air Services Agreement",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of bilaterals." }
//         },
//         {
//           id: "subdot_bilaterals_2_AnnaKaisaIkonen",
//           label: "Potential for city-level partnerships",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of bilaterals." }
//         },
//         {
//           id: "dot_alignandfriction_AnnaKaisaIkonen",
//           label: "Align and Friction",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key align and friction: Both prioritise innovation and sustainable development. Cultural differences in municipal structures are navigable through mutual dialogue."
//           }
//         },
//         {
//           id: "subdot_alignandfriction_1_AnnaKaisaIkonen",
//           label: "Both prioritise innovation and sustainable development",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of align and friction." }
//         },
//         {
//           id: "subdot_alignandfriction_2_AnnaKaisaIkonen",
//           label:
//             "Cultural differences in municipal structures are navigable through mutual dialogue",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of align and friction." }
//         },
//         {
//           id: "dot_conclusions_AnnaKaisaIkonen",
//           label: "Conclusions",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key conclusions: Likely to encourage knowledge exchange on local governance, smart cities, and public-sector innovation, furthering bilateral ties in the realm of municipal collaboration."
//           }
//         },
//         {
//           id: "subdot_conclusions_1_AnnaKaisaIkonen",
//           label:
//             "Likely to encourage knowledge exchange on local governance, smart cities, and public-sector innovation, furthering bilateral ties in the realm of municipal collaboration",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of conclusions." }
//         },
  
//         // ---------------------------
//         // Profile: Alexander Stubb
//         // ---------------------------
//         {
//           id: "person_AlexanderStubb",
//           label: "Alexander Stubb",
//           type: "Person",
//           metadata: {
//             shortBio: "President of the Republic of Finland",
//             title: "President of the Republic of Finland",
//             hoverText:
//               "Serves as President since March 2024. Has extensive experience in national and international politics, focusing on foreign policy and economic affairs. Strongly advocates for proactive global engagement and sees collaboration beyond traditional partners as essential."
//           }
//         },
//         {
//           id: "dot_strategy_AlexanderStubb",
//           label: "Strategy",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key strategy: Serves as President since March 2024. Has extensive experience in national and international politics, focusing on foreign policy and economic affairs. Strongly advocates for proactive global engagement and sees collaboration beyond traditional partners as essential."
//           }
//         },
//         {
//           id: "subdot_strategy_1_AlexanderStubb",
//           label: "Serves as President since March 2024",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of strategy." }
//         },
//         {
//           id: "subdot_strategy_2_AlexanderStubb",
//           label:
//             "Has extensive experience in national and international politics, focusing on foreign policy and economic affairs",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of strategy." }
//         },
//         {
//           id: "subdot_strategy_3_AlexanderStubb",
//           label:
//             "Strongly advocates for proactive global engagement and sees collaboration beyond traditional partners as essential",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of strategy." }
//         },
//         {
//           id: "dot_uaestatements_AlexanderStubb",
//           label: "UAE Statements",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key UAE statements: Emphasised Finland’s keenness to strengthen ties with the UAE at his inauguration, expressing gratitude for the UAE’s participation and highlighting shared interests in education, renewable energy, and innovative governance."
//           }
//         },
//         {
//           id: "subdot_uaestatements_1_AlexanderStubb",
//           label:
//             "Emphasised Finland’s keenness to strengthen ties with the UAE at his inauguration, expressing gratitude for the UAE’s participation and highlighting shared interests in education, renewable energy, and innovative governance",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of UAE statements." }
//         },
//         {
//           id: "dot_roleinrelations_AlexanderStubb",
//           label: "Role in Relations",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key role: Shapes Finland’s overall approach, encouraging bilateral cooperation in trade, education, and technology. Works closely with the Prime Minister and other ministers to align foreign policy with practical engagements."
//           }
//         },
//         {
//           id: "subdot_roleinrelations_1_AlexanderStubb",
//           label:
//             "Shapes Finland’s overall approach, encouraging bilateral cooperation in trade, education, and technology",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of role in relations." }
//         },
//         {
//           id: "subdot_roleinrelations_2_AlexanderStubb",
//           label:
//             "Works closely with the Prime Minister and other ministers to align foreign policy with practical engagements",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of role in relations." }
//         },
//         {
//           id: "dot_bilaterals_AlexanderStubb",
//           label: "Bilaterals",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key bilaterals: Supports the longstanding legal framework including the 1982 Economic Cooperation Agreement, the 1996 Double Taxation and Investment Protection treaties, and the 2013 Air Services Agreement, which underpin Finland–UAE ties."
//           }
//         },
//         {
//           id: "subdot_bilaterals_1_AlexanderStubb",
//           label:
//             "Supports the longstanding legal framework including the 1982 Economic Cooperation Agreement, the 1996 Double Taxation and Investment Protection treaties, and the 2013 Air Services Agreement, which underpin Finland–UAE ties",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of bilaterals." }
//         },
//         {
//           id: "dot_alignandfriction_AlexanderStubb",
//           label: "Align and Friction",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key align and friction: Aligned on innovation, sustainability, and clean energy. Potential friction could arise from Finland’s EU-aligned export controls (e.g. arms embargo in certain conflicts) and differing stances on global crises."
//           }
//         },
//         {
//           id: "subdot_alignandfriction_1_AlexanderStubb",
//           label: "Aligned on innovation, sustainability, and clean energy",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of align and friction." }
//         },
//         {
//           id: "subdot_alignandfriction_2_AlexanderStubb",
//           label:
//             "Potential friction could arise from Finland’s EU-aligned export controls (e.g. arms embargo in certain conflicts) and differing stances on global crises",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of align and friction." }
//         },
//         {
//           id: "dot_conclusions_AlexanderStubb",
//           label: "Conclusions",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key conclusions: Continues to view the UAE as a key Gulf partner. Seeks to deepen ties in technology, climate solutions, and education, leveraging the 50th anniversary of Finland–UAE relations as a springboard."
//           }
//         },
//         {
//           id: "subdot_conclusions_1_AlexanderStubb",
//           label: "Continues to view the UAE as a key Gulf partner",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of conclusions." }
//         },
//         {
//           id: "subdot_conclusions_2_AlexanderStubb",
//           label:
//             "Seeks to deepen ties in technology, climate solutions, and education, leveraging the 50th anniversary of Finland–UAE relations as a springboard",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of conclusions." }
//         },
  
//         // ---------------------------
//         // Profile: Tuula Yrjola
//         // ---------------------------
//         {
//           id: "person_TuulaYrjola",
//           label: "Tuula Yrjola",
//           type: "Person",
//           metadata: {
//             shortBio: "Ambassador of Finland to the UAE",
//             title: "Ambassador of Finland to the UAE",
//             hoverText:
//               "A seasoned diplomat with three decades of experience in Eastern Europe, Central Asia, and the Middle East. Assumed ambassadorship in October 2023."
//           }
//         },
//         {
//           id: "dot_strategy_TuulaYrjola",
//           label: "Strategy",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key strategy: A seasoned diplomat with three decades of experience in Eastern Europe, Central Asia, and the Middle East. Assumed ambassadorship in October 2023."
//           }
//         },
//         {
//           id: "subdot_strategy_1_TuulaYrjola",
//           label:
//             "A seasoned diplomat with three decades of experience in Eastern Europe, Central Asia, and the Middle East",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of strategy." }
//         },
//         {
//           id: "subdot_strategy_2_TuulaYrjola",
//           label: "Assumed ambassadorship in October 2023",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of strategy." }
//         },
//         {
//           id: "dot_uaestatements_TuulaYrjola",
//           label: "UAE Statements",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key UAE statements: Emphasises strengthening bilateral relations, promoting Finnish business interests (Team Finland), and monitoring political developments in the UAE."
//           }
//         },
//         {
//           id: "subdot_uaestatements_1_TuulaYrjola",
//           label:
//             "Emphasises strengthening bilateral relations, promoting Finnish business interests (Team Finland), and monitoring political developments in the UAE",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of UAE statements." }
//         },
//         {
//           id: "dot_roleinrelations_TuulaYrjola",
//           label: "Role in Relations",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key role: Leads the Finnish Embassy in Abu Dhabi, overseeing economic diplomacy, political engagement, and consular services. Acts as the principal link between Finland and the UAE."
//           }
//         },
//         {
//           id: "subdot_roleinrelations_1_TuulaYrjola",
//           label:
//             "Leads the Finnish Embassy in Abu Dhabi, overseeing economic diplomacy, political engagement, and consular services",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of role in relations." }
//         },
//         {
//           id: "subdot_roleinrelations_2_TuulaYrjola",
//           label: "Acts as the principal link between Finland and the UAE",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of role in relations." }
//         },
//         {
//           id: "dot_bilaterals_TuulaYrjola",
//           label: "Bilaterals",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key bilaterals: Actively supports the existing treaties (economic, taxation, air services) and fosters new MoUs in education, energy, and innovation."
//           }
//         },
//         {
//           id: "subdot_bilaterals_1_TuulaYrjola",
//           label:
//             "Actively supports the existing treaties (economic, taxation, air services) and fosters new MoUs in education, energy, and innovation",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of bilaterals." }
//         },
//         {
//           id: "dot_alignandfriction_TuulaYrjola",
//           label: "Align and Friction",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key align and friction: Shares Finland’s focus on sustainability and innovation, echoing UAE’s Vision 2030. Minimal friction; possible differences in approach to regional conflicts or human rights are managed diplomatically."
//           }
//         },
//         {
//           id: "subdot_alignandfriction_1_TuulaYrjola",
//           label:
//             "Shares Finland’s focus on sustainability and innovation, echoing UAE’s Vision 2030",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of align and friction." }
//         },
//         {
//           id: "subdot_alignandfriction_2_TuulaYrjola",
//           label:
//             "Minimal friction; possible differences in approach to regional conflicts or human rights are managed diplomatically",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of align and friction." }
//         },
//         {
//           id: "dot_conclusions_TuulaYrjola",
//           label: "Conclusions",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key conclusions: Aims to deepen trade, innovation, and cultural ties, ensuring Finland’s presence grows in alignment with UAE’s development goals."
//           }
//         },
//         {
//           id: "subdot_conclusions_1_TuulaYrjola",
//           label:
//             "Aims to deepen trade, innovation, and cultural ties, ensuring Finland’s presence grows in alignment with UAE’s development goals",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of conclusions." }
//         },
  
//         // ---------------------------
//         // Profile: Anna-Mari Wong Hamalainen
//         // ---------------------------
//         {
//           id: "person_AnnaMariWongHamalainen",
//           label: "Anna-Mari Wong Hamalainen",
//           type: "Person",
//           metadata: {
//             shortBio: "Director of Foreign and Security Policy",
//             title: "Director of Foreign and Security Policy",
//             hoverText:
//               "Serves as Director of Foreign and Security Policy, with a background in NATO issues and EU foreign policy. Advises the President’s Cabinet on security strategies."
//           }
//         },
//         {
//           id: "dot_strategy_AnnaMariWongHamalainen",
//           label: "Strategy",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key strategy: Serves as Director of Foreign and Security Policy, with a background in NATO issues and EU foreign policy. Advises the President’s Cabinet on security strategies."
//           }
//         },
//         {
//           id: "subdot_strategy_1_AnnaMariWongHamalainen",
//           label:
//             "Serves as Director of Foreign and Security Policy, with a background in NATO issues and EU foreign policy",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of strategy." }
//         },
//         {
//           id: "subdot_strategy_2_AnnaMariWongHamalainen",
//           label: "Advises the President’s Cabinet on security strategies",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of strategy." }
//         },
//         {
//           id: "dot_uaestatements_AnnaMariWongHamalainen",
//           label: "UAE Statements",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key UAE statements: No publicly documented statements specific to the UAE. Focuses mainly on European security and crisis management."
//           }
//         },
//         {
//           id: "subdot_uaestatements_1_AnnaMariWongHamalainen",
//           label: "No publicly documented statements specific to the UAE",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of UAE statements." }
//         },
//         {
//           id: "dot_roleinrelations_AnnaMariWongHamalainen",
//           label: "Role in Relations",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key role: Contributes to broader frameworks shaping Finland’s foreign relations, which can indirectly influence cooperation with the UAE, especially in security dialogues."
//           }
//         },
//         {
//           id: "subdot_roleinrelations_1_AnnaMariWongHamalainen",
//           label:
//             "Contributes to broader frameworks shaping Finland’s foreign relations",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of role in relations." }
//         },
//         {
//           id: "dot_bilaterals_AnnaMariWongHamalainen",
//           label: "Bilaterals",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key bilaterals: Not directly involved in forging UAE agreements; however, shapes policy frameworks that may underpin new or existing treaties."
//           }
//         },
//         {
//           id: "subdot_bilaterals_1_AnnaMariWongHamalainen",
//           label:
//             "Not directly involved in forging UAE agreements; however, shapes policy frameworks that may underpin new or existing treaties",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of bilaterals." }
//         },
//         {
//           id: "dot_alignandfriction_AnnaMariWongHamalainen",
//           label: "Align and Friction",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key align and friction: Finland’s stance on EU security issues might differ from UAE’s neutral or pragmatic positions in certain regional conflicts. No major friction reported."
//           }
//         },
//         {
//           id: "subdot_alignandfriction_1_AnnaMariWongHamalainen",
//           label:
//             "Finland’s stance on EU security issues might differ from UAE’s neutral or pragmatic positions in certain regional conflicts",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of align and friction." }
//         },
//         {
//           id: "dot_conclusions_AnnaMariWongHamalainen",
//           label: "Conclusions",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key conclusions: Remains supportive of collaborative engagements with Gulf nations but focuses primarily on NATO/EU security agendas."
//           }
//         },
//         {
//           id: "subdot_conclusions_1_AnnaMariWongHamalainen",
//           label:
//             "Remains supportive of collaborative engagements with Gulf nations but focuses primarily on NATO/EU security agendas",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of conclusions." }
//         },
  
//         // ---------------------------
//         // Profile: Ville Brumme
//         // ---------------------------
//         {
//           id: "person_VilleBrumme",
//           label: "Ville Brumme",
//           type: "Person",
//           metadata: {
//             shortBio: "Director of Peace Mediation",
//             title: "Director of Peace Mediation",
//             hoverText:
//               "Appointed by President Stubb in 2024. Formerly at CMI, overseeing mediation projects in Africa, the Middle East, and Eurasia. Brings deep conflict resolution expertise."
//           }
//         },
//         {
//           id: "dot_strategy_VilleBrumme",
//           label: "Strategy",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key strategy: Appointed by President Stubb in 2024. Formerly at CMI, overseeing mediation projects in Africa, the Middle East, and Eurasia. Brings deep conflict resolution expertise."
//           }
//         },
//         {
//           id: "subdot_strategy_1_VilleBrumme",
//           label:
//             "Appointed by President Stubb in 2024",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of strategy." }
//         },
//         {
//           id: "subdot_strategy_2_VilleBrumme",
//           label:
//             "Formerly at CMI, overseeing mediation projects in Africa, the Middle East, and Eurasia",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of strategy." }
//         },
//         {
//           id: "subdot_strategy_3_VilleBrumme",
//           label: "Brings deep conflict resolution expertise",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of strategy." }
//         },
//         {
//           id: "dot_uaestatements_VilleBrumme",
//           label: "UAE Statements",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key UAE statements: Policies reflect respect for the UAE’s growing mediation role, especially in the Middle East. Acknowledges UAE’s discreet facilitation style and shared commitment to peaceful resolution."
//           }
//         },
//         {
//           id: "subdot_uaestatements_1_VilleBrumme",
//           label:
//             "Policies reflect respect for the UAE’s growing mediation role, especially in the Middle East",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of UAE statements." }
//         },
//         {
//           id: "subdot_uaestatements_2_VilleBrumme",
//           label:
//             "Acknowledges UAE’s discreet facilitation style and shared commitment to peaceful resolution",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of UAE statements." }
//         },
//         {
//           id: "dot_roleinrelations_VilleBrumme",
//           label: "Role in Relations",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key role: Coordinates high-level mediation initiatives, working with Finnish MFA and civil society. Sees the UAE as a like-minded actor in diplomatic solutions, especially in the Horn of Africa."
//           }
//         },
//         {
//           id: "subdot_roleinrelations_1_VilleBrumme",
//           label:
//             "Coordinates high-level mediation initiatives, working with Finnish MFA and civil society",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of role in relations." }
//         },
//         {
//           id: "subdot_roleinrelations_2_VilleBrumme",
//           label:
//             "Sees the UAE as a like-minded actor in diplomatic solutions, especially in the Horn of Africa",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of role in relations." }
//         },
//         {
//           id: "dot_bilaterals_VilleBrumme",
//           label: "Bilaterals",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key bilaterals: Engages through the Finland–UAE Political Consultation Committee. Visited Abu Dhabi in October 2024, meeting Dr. Anwar Gargash to enhance dialogue on conflict resolution."
//           }
//         },
//         {
//           id: "subdot_bilaterals_1_VilleBrumme",
//           label:
//             "Engages through the Finland–UAE Political Consultation Committee",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of bilaterals." }
//         },
//         {
//           id: "subdot_bilaterals_2_VilleBrumme",
//           label:
//             "Visited Abu Dhabi in October 2024, meeting Dr. Anwar Gargash to enhance dialogue on conflict resolution",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of bilaterals." }
//         },
//         {
//           id: "dot_alignandfriction_VilleBrumme",
//           label: "Align and Friction",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key align and friction: Both countries value discreet, outcome-oriented mediation. Potential friction might arise if the UAE’s mediation approaches differ from Finland’s inclusivity norms, but so far cooperation is constructive."
//           }
//         },
//         {
//           id: "subdot_alignandfriction_1_VilleBrumme",
//           label:
//             "Both countries value discreet, outcome-oriented mediation",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of align and friction." }
//         },
//         {
//           id: "subdot_alignandfriction_2_VilleBrumme",
//           label:
//             "Potential friction might arise if the UAE’s mediation approaches differ from Finland’s inclusivity norms, but so far cooperation is constructive",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of align and friction." }
//         },
//         {
//           id: "dot_conclusions_VilleBrumme",
//           label: "Conclusions",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key conclusions: Intends to expand joint mediation efforts, leveraging Finland’s NGO networks and the UAE’s regional influence for broader conflict resolution initiatives."
//           }
//         },
//         {
//           id: "subdot_conclusions_1_VilleBrumme",
//           label:
//             "Intends to expand joint mediation efforts, leveraging Finland’s NGO networks and the UAE’s regional influence for broader conflict resolution initiatives",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of conclusions." }
//         },
  
//         // ---------------------------
//         // Profile: Elina Valtonen
//         // ---------------------------
//         {
//           id: "person_ElinaValtonen",
//           label: "Elina Valtonen",
//           type: "Person",
//           metadata: {
//             shortBio: "Minister of Foreign Affairs",
//             title: "Minister of Foreign Affairs",
//             hoverText:
//               "Holds significant influence in shaping Finland’s foreign policy during NATO accession. Has a background in investment banking and economics, emphasising pragmatic, globally oriented diplomacy."
//           }
//         },
//         {
//           id: "dot_strategy_ElinaValtonen",
//           label: "Strategy",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key strategy: Holds significant influence in shaping Finland’s foreign policy during NATO accession. Has a background in investment banking and economics, emphasising pragmatic, globally oriented diplomacy."
//           }
//         },
//         {
//           id: "subdot_strategy_1_ElinaValtonen",
//           label:
//             "Holds significant influence in shaping Finland’s foreign policy during NATO accession",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of strategy." }
//         },
//         {
//           id: "subdot_strategy_2_ElinaValtonen",
//           label:
//             "Has a background in investment banking and economics, emphasising pragmatic, globally oriented diplomacy",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of strategy." }
//         },
//         {
//           id: "dot_uaestatements_ElinaValtonen",
//           label: "UAE Statements",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key UAE statements: Met with UAE Foreign Minister in September 2023 at UNGA to discuss cooperation in economic, trade, cultural, and energy fields. Signals a positive and pragmatic approach to Gulf relations."
//           }
//         },
//         {
//           id: "subdot_uaestatements_1_ElinaValtonen",
//           label:
//             "Met with UAE Foreign Minister in September 2023 at UNGA to discuss cooperation in economic, trade, cultural, and energy fields",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of UAE statements." }
//         },
//         {
//           id: "dot_roleinrelations_ElinaValtonen",
//           label: "Role in Relations",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key role: Guides Finland’s diplomatic priorities, coordinating with other ministries to expand trade and educational links with the UAE. Oversees the Joint Committee mechanism that fosters bilateral collaboration."
//           }
//         },
//         {
//           id: "subdot_roleinrelations_1_ElinaValtonen",
//           label:
//             "Guides Finland’s diplomatic priorities, coordinating with other ministries to expand trade and educational links with the UAE",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of role in relations." }
//         },
//         {
//           id: "dot_bilaterals_ElinaValtonen",
//           label: "Bilaterals",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key bilaterals: Supports the 1982 Economic Cooperation Agreement, the 1996 Double Taxation, the 2013 Air Services Agreement, and the 2022 Energy Cooperation MoU. Led the second Joint Committee meeting in Helsinki in November 2024."
//           }
//         },
//         {
//           id: "subdot_bilaterals_1_ElinaValtonen",
//           label:
//             "Supports the 1982 Economic Cooperation Agreement, the 1996 Double Taxation, the 2013 Air Services Agreement, and the 2022 Energy Cooperation MoU",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of bilaterals." }
//         },
//         {
//           id: "dot_alignandfriction_ElinaValtonen",
//           label: "Align and Friction",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key align and friction: Strong alignment in tech, sustainability, and energy diversification. Some differences may surface over Finland’s strict stance on Russia-related sanctions or defence exports."
//           }
//         },
//         {
//           id: "subdot_alignandfriction_1_ElinaValtonen",
//           label:
//             "Strong alignment in tech, sustainability, and energy diversification",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of align and friction." }
//         },
//         {
//           id: "dot_conclusions_ElinaValtonen",
//           label: "Conclusions",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key conclusions: Aims to solidify Finland–UAE ties by promoting commercial, educational, and innovation-driven partnerships, leveraging shared interests in renewable energy and digital transformation."
//           }
//         },
//         {
//           id: "subdot_conclusions_1_ElinaValtonen",
//           label:
//             "Aims to solidify Finland–UAE ties by promoting commercial, educational, and innovation-driven partnerships, leveraging shared interests in renewable energy and digital transformation",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of conclusions." }
//         },
  
//         // ---------------------------
//         // Profile: Laila Clyne
//         // ---------------------------
//         {
//           id: "person_LailaClyne",
//           label: "Laila Clyne",
//           type: "Person",
//           metadata: {
//             shortBio: "Diplomatic Advisor to the Minister",
//             title: "Diplomatic Advisor to the Minister",
//             hoverText:
//               "Provides strategic counsel to the Minister for Foreign Affairs. Previously served as Second Secretary at Finland’s Permanent Mission in Geneva and as Adviser at the UN Mission in New York."
//           }
//         },
//         {
//           id: "dot_strategy_LailaClyne",
//           label: "Strategy",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key strategy: Provides strategic counsel to the Minister for Foreign Affairs. Previously served as Second Secretary at Finland’s Permanent Mission in Geneva and as Adviser at the UN Mission in New York."
//           }
//         },
//         {
//           id: "subdot_strategy_1_LailaClyne",
//           label:
//             "Provides strategic counsel to the Minister for Foreign Affairs",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of strategy." }
//         },
//         {
//           id: "dot_uaestatements_LailaClyne",
//           label: "UAE Statements",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key UAE statements: No known public statements regarding the UAE. Works behind the scenes on broader foreign policy priorities."
//           }
//         },
//         {
//           id: "subdot_uaestatements_1_LailaClyne",
//           label: "No known public statements regarding the UAE",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of UAE statements." }
//         },
//         {
//           id: "dot_roleinrelations_LailaClyne",
//           label: "Role in Relations",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key role: Advises on day-to-day diplomatic matters, possibly offering input on engagements with UAE officials but with minimal direct public role."
//           }
//         },
//         {
//           id: "subdot_roleinrelations_1_LailaClyne",
//           label:
//             "Advises on day-to-day diplomatic matters, with minimal direct public role",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of role in relations." }
//         },
//         {
//           id: "dot_bilaterals_LailaClyne",
//           label: "Bilaterals",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key bilaterals: Supports the minister in implementing Finland’s treaty frameworks; no direct record of involvement in UAE agreements."
//           }
//         },
//         {
//           id: "subdot_bilaterals_1_LailaClyne",
//           label:
//             "Supports the minister in implementing Finland’s treaty frameworks; no direct record of involvement in UAE agreements",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of bilaterals." }
//         },
//         {
//           id: "dot_alignandfriction_LailaClyne",
//           label: "Align and Friction",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key align and friction: No friction points documented, as her role is primarily advisory. Aligns with the ministry’s general foreign policy direction."
//           }
//         },
//         {
//           id: "subdot_alignandfriction_1_LailaClyne",
//           label:
//             "No friction points documented, aligns with the ministry’s general foreign policy direction",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of align and friction." }
//         },
//         {
//           id: "dot_conclusions_LailaClyne",
//           label: "Conclusions",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key conclusions: Expected to continue providing expert advice, ensuring continuity and coherence in Finland’s foreign relations, including with the UAE."
//           }
//         },
//         {
//           id: "subdot_conclusions_1_LailaClyne",
//           label:
//             "Expected to continue providing expert advice, ensuring continuity and coherence in Finland’s foreign relations, including with the UAE",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of conclusions." }
//         },
  
//         // ---------------------------
//         // Profile: Anna-Kaisa Heikkinen
//         // ---------------------------
//         {
//           id: "person_AnnaKaisaHeikkinen",
//           label: "Anna-Kaisa Heikkinen",
//           type: "Person",
//           metadata: {
//             shortBio: "Director General, Department for Africa, the Middle East and Latin America",
//             title: "Director General, Department for Africa, the Middle East and Latin America",
//             hoverText:
//               "Oversees Finnish diplomatic engagements with Africa, the Middle East and Latin America. Has served in multiple leadership roles, including ambassadorial positions."
//           }
//         },
//         {
//           id: "dot_strategy_AnnaKaisaHeikkinen",
//           label: "Strategy",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key strategy: Oversees Finnish diplomatic engagements with Africa, the Middle East and Latin America. Has served in multiple leadership roles, including ambassadorial positions."
//           }
//         },
//         {
//           id: "subdot_strategy_1_AnnaKaisaHeikkinen",
//           label:
//             "Oversees Finnish diplomatic engagements with Africa, the Middle East and Latin America",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of strategy." }
//         },
//         {
//           id: "subdot_strategy_2_AnnaKaisaHeikkinen",
//           label: "Has served in multiple leadership roles, including ambassadorial positions",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of strategy." }
//         },
//         {
//           id: "dot_uaestatements_AnnaKaisaHeikkinen",
//           label: "UAE Statements",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key UAE statements: Highlighted the UAE’s importance in Finland’s Middle East outreach. Led a high-level delegation to Dubai focusing on sustainability and innovation."
//           }
//         },
//         {
//           id: "subdot_uaestatements_1_AnnaKaisaHeikkinen",
//           label:
//             "Highlighted the UAE’s importance in Finland’s Middle East outreach",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of UAE statements." }
//         },
//         {
//           id: "subdot_uaestatements_2_AnnaKaisaHeikkinen",
//           label:
//             "Led a high-level delegation to Dubai focusing on sustainability and innovation",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of UAE statements." }
//         },
//         {
//           id: "dot_roleinrelations_AnnaKaisaHeikkinen",
//           label: "Role in Relations",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key role: Directs the strategy for Finland’s missions in the region, guiding bilateral talks and policy frameworks with the UAE. Provides oversight to the Embassy in Abu Dhabi."
//           }
//         },
//         {
//           id: "subdot_roleinrelations_1_AnnaKaisaHeikkinen",
//           label:
//             "Directs the strategy for Finland’s missions in the region, guiding bilateral talks and policy frameworks with the UAE",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of role in relations." }
//         },
//         {
//           id: "dot_bilaterals_AnnaKaisaHeikkinen",
//           label: "Bilaterals",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key bilaterals: Facilitates the Political Consultation Committee (2022) and the Joint Committee (2024), supporting MoUs in energy, education, AI, and space."
//           }
//         },
//         {
//           id: "subdot_bilaterals_1_AnnaKaisaHeikkinen",
//           label:
//             "Facilitates the Political Consultation Committee (2022) and the Joint Committee (2024)",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of bilaterals." }
//         },
//         {
//           id: "dot_alignandfriction_AnnaKaisaHeikkinen",
//           label: "Align and Friction",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key align and friction: Aligns strongly on sustainable technology and education. Must balance Finland’s EU stances on issues like sanctions and arms exports with maintaining positive relations."
//           }
//         },
//         {
//           id: "subdot_alignandfriction_1_AnnaKaisaHeikkinen",
//           label:
//             "Aligns strongly on sustainable technology and education",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of align and friction." }
//         },
//         {
//           id: "dot_conclusions_AnnaKaisaHeikkinen",
//           label: "Conclusions",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key conclusions: Plans to expand cooperation in clean energy, digital solutions, and broader Middle East initiatives, strengthening Finland’s role as a trusted partner."
//           }
//         },
//         {
//           id: "subdot_conclusions_1_AnnaKaisaHeikkinen",
//           label:
//             "Plans to expand cooperation in clean energy, digital solutions, and broader Middle East initiatives",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of conclusions." }
//         },
  
//         // ---------------------------
//         // Profile: Anne M'Rabet
//         // ---------------------------
//         {
//           id: "person_AnneMRabet",
//           label: "Anne M'Rabet",
//           type: "Person",
//           metadata: {
//             shortBio: "Desk Officer for Persian Gulf, UAE, Bahrain, GCC and OIC",
//             title: "Desk Officer for Persian Gulf, UAE, Bahrain, GCC and OIC",
//             hoverText:
//               "Oversees day-to-day bilateral relations with the Gulf region, including the UAE. Part of the Middle East and Gulf Unit at the MFA."
//           }
//         },
//         {
//           id: "dot_strategy_AnneMRabet",
//           label: "Strategy",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key strategy: Oversees day-to-day bilateral relations with the Gulf region, including the UAE. Part of the Middle East and Gulf Unit at the MFA."
//           }
//         },
//         {
//           id: "subdot_strategy_1_AnneMRabet",
//           label:
//             "Oversees day-to-day bilateral relations with the Gulf region, including the UAE",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of strategy." }
//         },
//         {
//           id: "dot_uaestatements_AnneMRabet",
//           label: "UAE Statements",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key UAE statements: No public statements identified. Focused on facilitating diplomatic ties and ensuring alignment with Finland’s broader Middle East policy."
//           }
//         },
//         {
//           id: "subdot_uaestatements_1_AnneMRabet",
//           label: "No public statements identified",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of UAE statements." }
//         },
//         {
//           id: "dot_roleinrelations_AnneMRabet",
//           label: "Role in Relations",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key role: Coordinates inter-ministerial work on UAE matters, ensuring consistency in policy and day-to-day diplomatic tasks. Provides critical country-specific expertise."
//           }
//         },
//         {
//           id: "subdot_roleinrelations_1_AnneMRabet",
//           label:
//             "Coordinates inter-ministerial work on UAE matters, ensuring consistency in policy and day-to-day diplomatic tasks",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of role in relations." }
//         },
//         {
//           id: "dot_bilaterals_AnneMRabet",
//           label: "Bilaterals",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key bilaterals: Involved in operationalising and monitoring existing frameworks like the 2022 Political Consultation Committee, the Joint Committee, and relevant MoUs."
//           }
//         },
//         {
//           id: "subdot_bilaterals_1_AnneMRabet",
//           label:
//             "Involved in operationalising and monitoring existing frameworks like the 2022 Political Consultation Committee, the Joint Committee, and relevant MoUs",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of bilaterals." }
//         },
//         {
//           id: "dot_alignandfriction_AnneMRabet",
//           label: "Align and Friction",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key align and friction: Likely deals with routine administrative or regulatory differences. No significant friction reported."
//           }
//         },
//         {
//           id: "subdot_alignandfriction_1_AnneMRabet",
//           label:
//             "Likely deals with routine administrative or regulatory differences; no significant friction reported",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of align and friction." }
//         },
//         {
//           id: "dot_conclusions_AnneMRabet",
//           label: "Conclusions",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key conclusions: Will continue to manage UAE-related dossiers, supporting smooth bilateral cooperation and possibly contributing to new initiatives in trade or culture."
//           }
//         },
//         {
//           id: "subdot_conclusions_1_AnneMRabet",
//           label:
//             "Will continue to manage UAE-related dossiers, supporting smooth bilateral cooperation and possibly contributing to new initiatives in trade or culture",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of conclusions." }
//         },
  
//         // ---------------------------
//         // Profile: Justin Hotard
//         // ---------------------------
//         {
//           id: "person_JustinHotard",
//           label: "Justin Hotard",
//           type: "Person",
//           metadata: {
//             shortBio: "Incoming CEO of Nokia",
//             title: "Incoming CEO of Nokia",
//             hoverText:
//               "Assuming Nokia’s top leadership role in 2024. Formerly led AI-driven infrastructure at HPE, focusing on next-gen networking and cloud solutions."
//           }
//         },
//         {
//           id: "dot_strategy_JustinHotard",
//           label: "Strategy",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key strategy: Assuming Nokia’s top leadership role in 2024. Formerly led AI-driven infrastructure at HPE, focusing on next-gen networking and cloud solutions."
//           }
//         },
//         {
//           id: "subdot_strategy_1_JustinHotard",
//           label: "Assuming Nokia’s top leadership role in 2024",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of strategy." }
//         },
//         {
//           id: "subdot_strategy_2_JustinHotard",
//           label:
//             "Formerly led AI-driven infrastructure at HPE, focusing on next-gen networking and cloud solutions",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of strategy." }
//         },
//         {
//           id: "dot_uaestatements_JustinHotard",
//           label: "UAE Statements",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key UAE statements: No direct statements yet. Nokia’s longstanding presence in the UAE, especially in 5G rollout and digital infrastructure, signals continuity."
//           }
//         },
//         {
//           id: "subdot_uaestatements_1_JustinHotard",
//           label:
//             "No direct statements yet. Nokia’s longstanding presence in the UAE signals continuity",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of UAE statements." }
//         },
//         {
//           id: "dot_roleinrelations_JustinHotard",
//           label: "Role in Relations",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key role: Will oversee Nokia’s future expansions in 5G/6G, cybersecurity, and AI-driven networks in the Emirates. Maintains close ties with local telecom operators."
//           }
//         },
//         {
//           id: "subdot_roleinrelations_1_JustinHotard",
//           label:
//             "Will oversee Nokia’s future expansions in 5G/6G, cybersecurity, and AI-driven networks in the Emirates",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of role in relations." }
//         },
//         {
//           id: "dot_bilaterals_JustinHotard",
//           label: "Bilaterals",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key bilaterals: Nokia’s commercial MOUs with UAE telcos (Etisalat, Du) support Finland–UAE digital cooperation, but no direct G2G agreements are known."
//           }
//         },
//         {
//           id: "subdot_bilaterals_1_JustinHotard",
//           label:
//             "Nokia’s commercial MOUs with UAE telcos support Finland–UAE digital cooperation",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of bilaterals." }
//         },
//         {
//           id: "dot_alignandfriction_JustinHotard",
//           label: "Align and Friction",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key align and friction: Faces competition from Huawei, Ericsson, and others in the UAE. Nokia’s emphasis on secure, energy-efficient networks aligns with UAE’s digital transformation goals."
//           }
//         },
//         {
//           id: "subdot_alignandfriction_1_JustinHotard",
//           label:
//             "Faces competition from Huawei, Ericsson, and others in the UAE",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of align and friction." }
//         },
//         {
//           id: "dot_conclusions_JustinHotard",
//           label: "Conclusions",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key conclusions: Likely to deepen partnerships with UAE operators, bridging Nokia’s new AI-driven solutions and the Emirates’ ambition to be a tech leader."
//           }
//         },
//         {
//           id: "subdot_conclusions_1_JustinHotard",
//           label:
//             "Likely to deepen partnerships with UAE operators, bridging Nokia’s new AI-driven solutions and the Emirates’ ambition to be a tech leader",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of conclusions." }
//         },
  
//         // ---------------------------
//         // Profile: Pekka Lundmark
//         // ---------------------------
//         {
//           id: "person_PekkaLundmark",
//           label: "Pekka Lundmark",
//           type: "Person",
//           metadata: {
//             shortBio: "Outgoing CEO of Nokia",
//             title: "Outgoing CEO of Nokia",
//             hoverText:
//               "Led Nokia from 2020–2024, steering a critical transformation focusing on 5G, AI-powered automation, and green telecom solutions."
//           }
//         },
//         {
//           id: "dot_strategy_PekkaLundmark",
//           label: "Strategy",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key strategy: Led Nokia from 2020–2024, steering a critical transformation focusing on 5G, AI-powered automation, and green telecom solutions."
//           }
//         },
//         {
//           id: "subdot_strategy_1_PekkaLundmark",
//           label: "Led Nokia from 2020–2024",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of strategy." }
//         },
//         {
//           id: "subdot_strategy_2_PekkaLundmark",
//           label:
//             "Steered a transformation focusing on 5G, AI-powered automation, and green telecom solutions",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of strategy." }
//         },
//         {
//           id: "dot_uaestatements_PekkaLundmark",
//           label: "UAE Statements",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key UAE statements: Praised the UAE’s visionary approach to 5G and AI. Emphasised Nokia’s long-term commitment to the UAE’s digital ecosystem."
//           }
//         },
//         {
//           id: "subdot_uaestatements_1_PekkaLundmark",
//           label:
//             "Praised the UAE’s visionary approach to 5G and AI",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of UAE statements." }
//         },
//         {
//           id: "dot_roleinrelations_PekkaLundmark",
//           label: "Role in Relations",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key role: Strengthened ties with UAE telecom providers, championing 5G expansions and forging MoUs on 6G research and AI-driven connectivity."
//           }
//         },
//         {
//           id: "subdot_roleinrelations_1_PekkaLundmark",
//           label:
//             "Strengthened ties with UAE telecom providers, championing 5G expansions and forging MoUs on 6G research and AI-driven connectivity",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of role in relations." }
//         },
//         {
//           id: "dot_bilaterals_PekkaLundmark",
//           label: "Bilaterals",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key bilaterals: Facilitated major contracts like Nokia-Etisalat 5G expansion (2021–2023) and a 2023–2024 6G research MoU with UAE regulators and universities."
//           }
//         },
//         {
//           id: "subdot_bilaterals_1_PekkaLundmark",
//           label:
//             "Facilitated major contracts like Nokia-Etisalat 5G expansion (2021–2023)",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of bilaterals." }
//         },
//         {
//           id: "dot_alignandfriction_PekkaLundmark",
//           label: "Align and Friction",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key align and friction: Aligned on digital innovation; navigated multi-vendor competition in the UAE’s telecom sector. Maintained good rapport despite global supply chain challenges."
//           }
//         },
//         {
//           id: "subdot_alignandfriction_1_PekkaLundmark",
//           label:
//             "Aligned on digital innovation; navigated multi-vendor competition in the UAE’s telecom sector",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of align and friction." }
//         },
//         {
//           id: "dot_conclusions_PekkaLundmark",
//           label: "Conclusions",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key conclusions: His leadership cemented Nokia’s role in UAE connectivity. Leaves a legacy of strong partnership and sets the stage for next-gen expansions under his successor."
//           }
//         },
//         {
//           id: "subdot_conclusions_1_PekkaLundmark",
//           label:
//             "His leadership cemented Nokia’s role in UAE connectivity, setting the stage for next-gen expansions",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of conclusions." }
//         },
  
//         // ---------------------------
//         // Profile: Sari Baldauf
//         // ---------------------------
//         {
//           id: "person_SariBaldauf",
//           label: "Sari Baldauf",
//           type: "Person",
//           metadata: {
//             shortBio: "Chairman of Nokia",
//             title: "Chairman of Nokia",
//             hoverText:
//               "Among the most senior female executives in global telecom. Former head of Nokia’s Networks business, focusing on international market expansion."
//           }
//         },
//         {
//           id: "dot_strategy_SariBaldauf",
//           label: "Strategy",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key strategy: Among the most senior female executives in global telecom. Former head of Nokia’s Networks business, focusing on international market expansion."
//           }
//         },
//         {
//           id: "subdot_strategy_1_SariBaldauf",
//           label: "Former head of Nokia’s Networks business",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of strategy." }
//         },
//         {
//           id: "dot_uaestatements_SariBaldauf",
//           label: "UAE Statements",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key UAE statements: Few direct public remarks on the UAE, but consistently emphasises the Middle East as a key growth region for Nokia."
//           }
//         },
//         {
//           id: "subdot_uaestatements_1_SariBaldauf",
//           label:
//             "Few direct public remarks on the UAE; emphasises the Middle East as a key growth region",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of UAE statements." }
//         },
//         {
//           id: "dot_roleinrelations_SariBaldauf",
//           label: "Role in Relations",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key role: Oversees Nokia’s board-level strategy, supporting expansions in UAE-based R&D and forging digital economy partnerships with Emirati stakeholders."
//           }
//         },
//         {
//           id: "subdot_roleinrelations_1_SariBaldauf",
//           label:
//             "Oversees Nokia’s board-level strategy, supporting expansions in UAE-based R&D and forging digital economy partnerships",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of role in relations." }
//         },
//         {
//           id: "dot_bilaterals_SariBaldauf",
//           label: "Bilaterals",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key bilaterals: Endorses Nokia’s commercial agreements with UAE telcos and fosters Finland–UAE digital cooperation, such as a Finland-UAE Digital Economy Partnership."
//           }
//         },
//         {
//           id: "subdot_bilaterals_1_SariBaldauf",
//           label:
//             "Endorses Nokia’s commercial agreements with UAE telcos and fosters Finland–UAE digital cooperation",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of bilaterals." }
//         },
//         {
//           id: "dot_alignandfriction_SariBaldauf",
//           label: "Align and Friction",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key align and friction: European telecom standardisation vs. UAE’s regional tech frameworks can require careful negotiation. Competition from global players remains a factor."
//           }
//         },
//         {
//           id: "subdot_alignandfriction_1_SariBaldauf",
//           label:
//             "European telecom standardisation vs. UAE’s regional tech frameworks may require careful negotiation",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of align and friction." }
//         },
//         {
//           id: "dot_conclusions_SariBaldauf",
//           label: "Conclusions",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key conclusions: Focuses on strategic alignment with the UAE’s innovation goals, ensuring Nokia’s sustainability and digital leadership remain compelling in the region."
//           }
//         },
//         {
//           id: "subdot_conclusions_1_SariBaldauf",
//           label:
//             "Focuses on strategic alignment with the UAE’s innovation goals, ensuring sustainability and digital leadership",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of conclusions." }
//         },
  
//         // ---------------------------
//         // Profile: Håkan Agnevall
//         // ---------------------------
//         {
//           id: "person_HakanAgnevall",
//           label: "Håkan Agnevall",
//           type: "Person",
//           metadata: {
//             shortBio: "CEO of Wartsilla",
//             title: "CEO of Wartsilla",
//             hoverText:
//               "President and CEO of Wärtsilä since 2021. Extensive background in electrification and power systems from Volvo, Bombardier, and ABB."
//           }
//         },
//         {
//           id: "dot_strategy_HakanAgnevall",
//           label: "Strategy",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key strategy: President and CEO of Wärtsilä since 2021. Extensive background in electrification and power systems from Volvo, Bombardier, and ABB."
//           }
//         },
//         {
//           id: "subdot_strategy_1_HakanAgnevall",
//           label: "CEO of Wärtsilä since 2021",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of strategy." }
//         },
//         {
//           id: "subdot_strategy_2_HakanAgnevall",
//           label:
//             "Extensive background in electrification and power systems from Volvo, Bombardier, and ABB",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of strategy." }
//         },
//         {
//           id: "dot_uaestatements_HakanAgnevall",
//           label: "UAE Statements",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key UAE statements: At ADIPEC 2023, advocated a balanced approach to meeting energy needs, focusing on collaboration and innovation in sustainable energy solutions."
//           }
//         },
//         {
//           id: "subdot_uaestatements_1_HakanAgnevall",
//           label:
//             "Advocated a balanced approach to meeting energy needs at ADIPEC 2023",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of UAE statements." }
//         },
//         {
//           id: "dot_roleinrelations_HakanAgnevall",
//           label: "Role in Relations",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key role: Leads Wärtsilä’s operations in the Emirates, contributing marine and energy solutions. Partnerships with Emirati energy projects highlight Finnish technology’s role."
//           }
//         },
//         {
//           id: "subdot_roleinrelations_1_HakanAgnevall",
//           label:
//             "Leads Wärtsilä’s operations in the Emirates, contributing marine and energy solutions",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of role in relations." }
//         },
//         {
//           id: "dot_bilaterals_HakanAgnevall",
//           label: "Bilaterals",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key bilaterals: Engages in commercial contracts supporting Finland–UAE energy cooperation, in line with the 2022 Energy Agreement."
//           }
//         },
//         {
//           id: "subdot_bilaterals_1_HakanAgnevall",
//           label:
//             "Engages in commercial contracts supporting Finland–UAE energy cooperation",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of bilaterals." }
//         },
//         {
//           id: "dot_alignandfriction_HakanAgnevall",
//           label: "Align and Friction",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key align and friction: Wärtsilä’s emphasis on clean, innovative energy solutions aligns with UAE’s diversification goals. Market competition and local regulations can be minor friction points."
//           }
//         },
//         {
//           id: "subdot_alignandfriction_1_HakanAgnevall",
//           label:
//             "Emphasis on clean, innovative energy solutions aligns with UAE’s diversification goals",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of align and friction." }
//         },
//         {
//           id: "dot_conclusions_HakanAgnevall",
//           label: "Conclusions",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key conclusions: Aims to expand Wärtsilä’s presence in the UAE, focusing on sustainable energy technologies and forging deeper collaboration with Emirati stakeholders."
//           }
//         },
//         {
//           id: "subdot_conclusions_1_HakanAgnevall",
//           label:
//             "Aims to expand Wärtsilä’s presence in the UAE, focusing on sustainable energy technologies and deeper collaboration",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of conclusions." }
//         },
  
//         // ---------------------------
//         // Profile: Representative of Ehrnooth family
//         // ---------------------------
//         {
//           id: "person_EhrnoothFamily",
//           label: "Representative of Ehrnooth family",
//           type: "Person",
//           metadata: {
//             shortBio: "Family representative",
//             title: "Family representative",
//             hoverText:
//               "Finland’s most prominent noble business dynasty with investments in banking, manufacturing, forestry, and technology. Known for long-term, stable stewardship."
//           }
//         },
//         {
//           id: "dot_strategy_EhrnoothFamily",
//           label: "Strategy",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key strategy: Finland’s most prominent noble business dynasty with investments in banking, manufacturing, forestry, and technology. Known for long-term, stable stewardship."
//           }
//         },
//         {
//           id: "subdot_strategy_1_EhrnoothFamily",
//           label:
//             "Investments in banking, manufacturing, forestry, and technology",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of strategy." }
//         },
//         {
//           id: "dot_uaestatements_EhrnoothFamily",
//           label: "UAE Statements",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key UAE statements: Family members rarely make explicit political statements. Through companies like KONE, Pöyry/AFRY, and Wärtsilä, they acknowledge the UAE’s importance as a growth market."
//           }
//         },
//         {
//           id: "subdot_uaestatements_1_EhrnoothFamily",
//           label:
//             "Family members rarely make explicit political statements",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of UAE statements." }
//         },
//         {
//           id: "dot_roleinrelations_EhrnoothFamily",
//           label: "Role in Relations",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key role: Anchor owners in major Finnish firms active in the UAE, thereby shaping investment and project decisions that reinforce bilateral trade and technology exchanges."
//           }
//         },
//         {
//           id: "subdot_roleinrelations_1_EhrnoothFamily",
//           label:
//             "Anchor owners in major Finnish firms active in the UAE, shaping investment and project decisions",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of role in relations." }
//         },
//         {
//           id: "dot_bilaterals_EhrnoothFamily",
//           label: "Bilaterals",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key bilaterals: Operate under Finland’s existing trade frameworks. Their companies often join Team Finland delegations and sign commercial contracts in the Gulf."
//           }
//         },
//         {
//           id: "subdot_bilaterals_1_EhrnoothFamily",
//           label:
//             "Operate under Finland’s existing trade frameworks; join Team Finland delegations and sign commercial contracts",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of bilaterals." }
//         },
//         {
//           id: "dot_alignandfriction_EhrnoothFamily",
//           label: "Align and Friction",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key align and friction: Strong synergy with UAE’s infrastructure and energy priorities. Competition from global peers can be a friction point in securing contracts."
//           }
//         },
//         {
//           id: "subdot_alignandfriction_1_EhrnoothFamily",
//           label:
//             "Strong synergy with UAE’s infrastructure and energy priorities",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of align and friction." }
//         },
//         {
//           id: "dot_conclusions_EhrnoothFamily",
//           label: "Conclusions",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key conclusions: Likely to maintain or expand strategic investments in sectors aligned with UAE’s development goals, reinforcing the family’s behind-the-scenes influence."
//           }
//         },
//         {
//           id: "subdot_conclusions_1_EhrnoothFamily",
//           label:
//             "Likely to maintain or expand strategic investments in sectors aligned with UAE’s development goals",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of conclusions." }
//         },
  
//         // ---------------------------
//         // Profile: Robin Langenskiöld
//         // ---------------------------
//         {
//           id: "person_RobinLangenskiold",
//           label: "Robin Langenskiöld",
//           type: "Person",
//           metadata: {
//             shortBio: "Representative from the Erkko family",
//             title: "Representative from the Erkko family",
//             hoverText:
//               "Part of the Erkko family, historically dominating Finland’s media landscape via Sanoma. Major shareholder and former board member at Sanoma Corporation."
//           }
//         },
//         {
//           id: "dot_strategy_RobinLangenskiold",
//           label: "Strategy",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key strategy: Part of the Erkko family, historically dominating Finland’s media landscape via Sanoma. Major shareholder and former board member at Sanoma Corporation."
//           }
//         },
//         {
//           id: "subdot_strategy_1_RobinLangenskiold",
//           label:
//             "Historically dominated Finland’s media landscape via Sanoma",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of strategy." }
//         },
//         {
//           id: "dot_uaestatements_RobinLangenskiold",
//           label: "UAE Statements",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key UAE statements: No direct personal statements on the UAE. Through Helsingin Sanomat, the family’s media outlets have portrayed the UAE as a rising business hub."
//           }
//         },
//         {
//           id: "subdot_uaestatements_1_RobinLangenskiold",
//           label:
//             "No direct personal statements on the UAE; media outlets portray the UAE as a rising business hub",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of UAE statements." }
//         },
//         {
//           id: "dot_roleinrelations_RobinLangenskiold",
//           label: "Role in Relations",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key role: Indirectly shapes public discourse on the UAE through media coverage. Potential for future expansions in education or digital media solutions."
//           }
//         },
//         {
//           id: "subdot_roleinrelations_1_RobinLangenskiold",
//           label:
//             "Indirectly shapes public discourse on the UAE through media coverage",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of role in relations." }
//         },
//         {
//           id: "dot_conclusions_RobinLangenskiold",
//           label: "Conclusions",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key conclusions: Family’s influence in media could support a favourable climate for Finnish–UAE business ties. No immediate plans for deeper direct investment in the UAE."
//           }
//         },
//         {
//           id: "subdot_conclusions_1_RobinLangenskiold",
//           label:
//             "Family’s media influence could support favourable Finnish–UAE business ties",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of conclusions." }
//         },
  
//         // ---------------------------
//         // Profile: Rafaela Seppälä
//         // ---------------------------
//         {
//           id: "person_RafaelaSeppala",
//           label: "Rafaela Seppälä",
//           type: "Person",
//           metadata: {
//             shortBio: "Representative from the Erkko family",
//             title: "Representative from the Erkko family",
//             hoverText:
//               "Also an Erkko family member, major shareholder in Sanoma. Has held board roles across media and cultural foundations, influencing Finnish arts and journalism."
//           }
//         },
//         {
//           id: "dot_strategy_RafaelaSeppala",
//           label: "Strategy",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key strategy: Also an Erkko family member, major shareholder in Sanoma. Has held board roles across media and cultural foundations, influencing Finnish arts and journalism."
//           }
//         },
//         {
//           id: "subdot_strategy_1_RafaelaSeppala",
//           label:
//             "Major shareholder in Sanoma and held board roles across media and cultural foundations",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of strategy." }
//         },
//         {
//           id: "dot_uaestatements_RafaelaSeppala",
//           label: "UAE Statements",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key UAE statements: No explicit statements on the UAE. Family’s media coverage emphasises the UAE’s business environment and tourism potential."
//           }
//         },
//         {
//           id: "subdot_uaestatements_1_RafaelaSeppala",
//           label:
//             "Family’s media coverage emphasises the UAE’s business environment and tourism potential",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of UAE statements." }
//         },
//         {
//           id: "dot_roleinrelations_RafaelaSeppala",
//           label: "Role in Relations",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key role: Similar to Robin Langenskiöld, indirectly shapes the broader media narrative through Sanoma outlets. Could facilitate cross-cultural events or coverage on the UAE."
//           }
//         },
//         {
//           id: "subdot_roleinrelations_1_RafaelaSeppala",
//           label:
//             "Indirectly shapes the broader media narrative through Sanoma outlets",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of role in relations." }
//         },
//         {
//           id: "dot_conclusions_RafaelaSeppala",
//           label: "Conclusions",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key conclusions: Likely to maintain a low-profile stance, upholding a generally favourable media portrayal of the UAE’s growth and opportunities."
//           }
//         },
//         {
//           id: "subdot_conclusions_1_RafaelaSeppala",
//           label:
//             "Likely to maintain a low-profile stance with favourable media portrayal of the UAE’s growth",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of conclusions." }
//         },
  
//         // ---------------------------
//         // Profile: Björn Wahlroos
//         // ---------------------------
//         {
//           id: "person_BjornWahlroos",
//           label: "Björn Wahlroos",
//           type: "Person",
//           metadata: {
//             shortBio: "Banker, investor and former Chairman",
//             title: "Banker, investor and former Chairman of several major Finnish companies",
//             hoverText:
//               "Influential Finnish banker and investor. Former Chairman of Sampo Group, Nordea Bank, and UPM-Kymmene. Known for free-market philosophy and shaping major M&A deals."
//           }
//         },
//         {
//           id: "dot_strategy_BjornWahlroos",
//           label: "Strategy",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key strategy: Influential banker and investor; former Chairman of Sampo Group, Nordea Bank, and UPM-Kymmene. Known for free-market philosophy and shaping major M&A deals."
//           }
//         },
//         {
//           id: "subdot_strategy_1_BjornWahlroos",
//           label:
//             "Former Chairman of Sampo Group, Nordea Bank, and UPM-Kymmene",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of strategy." }
//         },
//         {
//           id: "dot_uaestatements_BjornWahlroos",
//           label: "UAE Statements",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key UAE statements: No personal statements on the UAE. Indirect ties via Nordea’s transaction with Abu Dhabi Investment Authority and Saxo Bank expansions."
//           }
//         },
//         {
//           id: "subdot_uaestatements_1_BjornWahlroos",
//           label:
//             "No personal statements on the UAE; indirect ties via financial transactions",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of UAE statements." }
//         },
//         {
//           id: "dot_roleinrelations_BjornWahlroos",
//           label: "Role in Relations",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key role: Through corporate deals, facilitated capital flows involving ADIA and supported Saxo Bank’s presence in the UAE."
//           }
//         },
//         {
//           id: "subdot_roleinrelations_1_BjornWahlroos",
//           label:
//             "Facilitated capital flows involving ADIA and supported Saxo Bank’s presence in the UAE",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of role in relations." }
//         },
//         {
//           id: "dot_bilaterals_BjornWahlroos",
//           label: "Bilaterals",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key bilaterals: Operates within existing Finland–UAE frameworks; corporate-level transactions highlight cross-border investment synergy."
//           }
//         },
//         {
//           id: "subdot_bilaterals_1_BjornWahlroos",
//           label:
//             "Operates within existing Finland–UAE frameworks; highlights cross-border investment synergy",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of bilaterals." }
//         },
//         {
//           id: "dot_alignandfriction_BjornWahlroos",
//           label: "Align and Friction",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key align and friction: No major friction. Aligns with the UAE’s role as a significant global investor; differences in regulatory stances handled commercially."
//           }
//         },
//         {
//           id: "subdot_alignandfriction_1_BjornWahlroos",
//           label:
//             "Aligns with the UAE’s role as a significant global investor",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of align and friction." }
//         },
//         {
//           id: "dot_conclusions_BjornWahlroos",
//           label: "Conclusions",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key conclusions: Though semi-retired, his financial influence endures, with potential for future cross-border investments connecting Finnish and Emirati markets."
//           }
//         },
//         {
//           id: "subdot_conclusions_1_BjornWahlroos",
//           label:
//             "Potential for future cross-border investments connecting Finnish and Emirati markets",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of conclusions." }
//         },
  
//         // ---------------------------
//         // Profile: Jyri Häkämies
//         // ---------------------------
//         {
//           id: "person_JyriHakamies",
//           label: "Jyri Häkämies",
//           type: "Person",
//           metadata: {
//             shortBio: "Director General of the Finnish Confederation of Industries",
//             title: "Director General of the Finnish Confederation of Industries",
//             hoverText:
//               "Leads Finland’s largest business advocacy group (EK). Former Minister of Defence and Economic Affairs, leveraging broad policy experience to promote Finnish industries globally."
//           }
//         },
//         {
//           id: "dot_strategy_JyriHakamies",
//           label: "Strategy",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key strategy: Leads Finland’s largest business advocacy group (EK). Former Minister of Defence and Economic Affairs."
//           }
//         },
//         {
//           id: "subdot_strategy_1_JyriHakamies",
//           label:
//             "Leads Finland’s largest business advocacy group (EK)",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of strategy." }
//         },
//         {
//           id: "dot_uaestatements_JyriHakamies",
//           label: "UAE Statements",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key UAE statements: Positions the UAE as a priority market, praising its ambition in digital transformation, innovation, and sustainability."
//           }
//         },
//         {
//           id: "subdot_uaestatements_1_JyriHakamies",
//           label:
//             "Positions the UAE as a priority market, praising its ambition in digital transformation, innovation, and sustainability",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of UAE statements." }
//         },
//         {
//           id: "dot_roleinrelations_JyriHakamies",
//           label: "Role in Relations",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key role: Organises trade missions, fosters dialogues through the Finland–UAE Joint Business Council, and encourages Finnish SMEs to explore UAE opportunities."
//           }
//         },
//         {
//           id: "subdot_roleinrelations_1_JyriHakamies",
//           label:
//             "Organises trade missions and fosters dialogues through the Finland–UAE Joint Business Council",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of role in relations." }
//         },
//         {
//           id: "dot_bilaterals_JyriHakamies",
//           label: "Bilaterals",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key bilaterals: Supports the 2024 creation of the UAE-Finland Business Council and endorses MoUs in AI, energy, and digitalisation."
//           }
//         },
//         {
//           id: "subdot_bilaterals_1_JyriHakamies",
//           label:
//             "Supports the 2024 creation of the UAE-Finland Business Council and endorses MoUs in AI, energy, and digitalisation",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of bilaterals." }
//         },
//         {
//           id: "dot_alignandfriction_JyriHakamies",
//           label: "Align and Friction",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key align and friction: Aligns with UAE’s drive for economic diversification. Competition from other nations is a typical challenge for Finnish exports."
//           }
//         },
//         {
//           id: "subdot_alignandfriction_1_JyriHakamies",
//           label:
//             "Aligns with UAE’s drive for economic diversification",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of align and friction." }
//         },
//         {
//           id: "dot_conclusions_JyriHakamies",
//           label: "Conclusions",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key conclusions: Continues championing trade delegations and bilateral initiatives, reinforcing Finland’s brand in innovation, sustainability, and advanced manufacturing."
//           }
//         },
//         {
//           id: "subdot_conclusions_1_JyriHakamies",
//           label:
//             "Continues championing trade delegations and bilateral initiatives",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of conclusions." }
//         },
  
//         // ---------------------------
//         // Profile: Jussi Halla-aho
//         // ---------------------------
//         {
//           id: "person_JussiHallaAho",
//           label: "Jussi Halla-aho",
//           type: "Person",
//           metadata: {
//             shortBio: "Speaker of the Parliament",
//             title: "Speaker of the Parliament",
//             hoverText:
//               "Speaker of the Parliament and former leader of a major conservative party, with significant influence on parliamentary procedures and foreign policy oversight."
//           }
//         },
//         {
//           id: "dot_strategy_JussiHallaAho",
//           label: "Strategy",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key strategy: Speaker of the Parliament and former leader of a major conservative party, with significant influence on parliamentary procedures and foreign policy oversight."
//           }
//         },
//         {
//           id: "subdot_strategy_1_JussiHallaAho",
//           label:
//             "Speaker of the Parliament and former leader of a major conservative party",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of strategy." }
//         },
//         {
//           id: "dot_uaestatements_JussiHallaAho",
//           label: "UAE Statements",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key UAE statements: Has not made extensive public statements on the UAE. Generally promotes pragmatic foreign policy and economic cooperation with Gulf states."
//           }
//         },
//         {
//           id: "subdot_uaestatements_1_JussiHallaAho",
//           label:
//             "Has not made extensive public statements on the UAE",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of UAE statements." }
//         },
//         {
//           id: "dot_roleinrelations_JussiHallaAho",
//           label: "Role in Relations",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key role: Facilitates parliamentary-level exchanges. Provides legislative support and legitimacy for broader Finland–UAE diplomatic initiatives led by the executive branch."
//           }
//         },
//         {
//           id: "subdot_roleinrelations_1_JussiHallaAho",
//           label:
//             "Facilitates parliamentary-level exchanges and provides legislative support",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of role in relations." }
//         },
//         {
//           id: "dot_bilaterals_JussiHallaAho",
//           label: "Bilaterals",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key bilaterals: No direct role in signing agreements but upholds parliamentary ratification and review of treaties with the UAE."
//           }
//         },
//         {
//           id: "subdot_bilaterals_1_JussiHallaAho",
//           label:
//             "Upholds parliamentary ratification and review of treaties with the UAE",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of bilaterals." }
//         },
//         {
//           id: "dot_alignandfriction_JussiHallaAho",
//           label: "Align and Friction",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key align and friction: Aligns on economic partnerships and national security. Potentially stricter stances on migration or certain EU policies may differ from UAE approaches."
//           }
//         },
//         {
//           id: "subdot_alignandfriction_1_JussiHallaAho",
//           label:
//             "Aligns on economic partnerships and national security",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of align and friction." }
//         },
//         {
//           id: "dot_conclusions_JussiHallaAho",
//           label: "Conclusions",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key conclusions: Continues to support parliamentary diplomacy, encouraging stable, mutually beneficial ties with the UAE in trade and security matters."
//           }
//         },
//         {
//           id: "subdot_conclusions_1_JussiHallaAho",
//           label:
//             "Continues to support parliamentary diplomacy for stable, mutually beneficial UAE ties",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of conclusions." }
//         },
  
//         // ---------------------------
//         // Profile: Nathali Ahlstrom
//         // ---------------------------
//         {
//           id: "person_NathaliAhlstrom",
//           label: "Nathali Ahlstrom",
//           type: "Person",
//           metadata: {
//             shortBio: "CEO of Fiskars",
//             title: "CEO of Fiskars",
//             hoverText:
//               "Leads one of Finland’s oldest companies, focusing on premium consumer brands in homeware and lifestyle. Emphasises sustainability and global market expansion."
//           }
//         },
//         {
//           id: "dot_strategy_NathaliAhlstrom",
//           label: "Strategy",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key strategy: Leads one of Finland’s oldest companies, focusing on premium consumer brands in homeware and lifestyle. Emphasises sustainability and global market expansion."
//           }
//         },
//         {
//           id: "subdot_strategy_1_NathaliAhlstrom",
//           label:
//             "Focuses on premium consumer brands in homeware and lifestyle",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of strategy." }
//         },
//         {
//           id: "dot_uaestatements_NathaliAhlstrom",
//           label: "UAE Statements",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key UAE statements: Identified the UAE as a key premium retail market. Showcased Fiskars products at Expo 2020 Dubai to highlight Finnish design and heritage."
//           }
//         },
//         {
//           id: "subdot_uaestatements_1_NathaliAhlstrom",
//           label:
//             "Identified the UAE as a key premium retail market; showcased Fiskars products at Expo 2020 Dubai",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of UAE statements." }
//         },
//         {
//           id: "dot_roleinrelations_NathaliAhlstrom",
//           label: "Role in Relations",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key role: Promotes Finnish consumer-brand visibility in the UAE’s luxury retail sector, supporting Finland’s soft diplomacy and brand image."
//           }
//         },
//         {
//           id: "subdot_roleinrelations_1_NathaliAhlstrom",
//           label:
//             "Promotes Finnish consumer-brand visibility in the UAE’s luxury retail sector",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of role in relations." }
//         },
//         {
//           id: "dot_bilaterals_NathaliAhlstrom",
//           label: "Bilaterals",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key bilaterals: Operates within broader Finland–UAE trade frameworks. Collaborates with local distributors and participated in the Finnish pavilion at Expo 2020."
//           }
//         },
//         {
//           id: "subdot_bilaterals_1_NathaliAhlstrom",
//           label:
//             "Operates within broader Finland–UAE trade frameworks and collaborates with local distributors",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of bilaterals." }
//         },
//         {
//           id: "dot_alignandfriction_NathaliAhlstrom",
//           label: "Align and Friction",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key align and friction: Aligns with UAE’s appetite for high-quality, heritage-driven goods. Competition in premium retail and varied pricing sensitivities can limit deeper market penetration."
//           }
//         },
//         {
//           id: "subdot_alignandfriction_1_NathaliAhlstrom",
//           label:
//             "Aligns with UAE’s appetite for high-quality, heritage-driven goods",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of align and friction." }
//         },
//         {
//           id: "dot_conclusions_NathaliAhlstrom",
//           label: "Conclusions",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key conclusions: Continues building brand recognition and sustainability messaging, aiming to grow market share among discerning Emirati consumers."
//           }
//         },
//         {
//           id: "subdot_conclusions_1_NathaliAhlstrom",
//           label:
//             "Aims to grow market share among discerning Emirati consumers",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of conclusions." }
//         },
  
//         // ---------------------------
//         // Profile: Seppo Vikström
//         // ---------------------------
//         {
//           id: "person_SeppoVikstrom",
//           label: "Seppo Vikström",
//           type: "Person",
//           metadata: {
//             shortBio: "Chairman of ISKU",
//             title: "Chairman of ISKU",
//             hoverText:
//               "Third-generation leader of a major Finnish furniture brand, known for design quality and eco-friendly manufacturing. Guides ISKU’s domestic and export growth."
//           }
//         },
//         {
//           id: "dot_strategy_SeppoVikstrom",
//           label: "Strategy",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key strategy: Third-generation leader of a major Finnish furniture brand, known for design quality and eco-friendly manufacturing. Guides ISKU’s domestic and export growth."
//           }
//         },
//         {
//           id: "subdot_strategy_1_SeppoVikstrom",
//           label:
//             "Guides ISKU’s domestic and export growth with a focus on design quality and eco-friendly manufacturing",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of strategy." }
//         },
//         {
//           id: "dot_uaestatements_SeppoVikstrom",
//           label: "UAE Statements",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key UAE statements: Focuses on synergy between Finland and the UAE in sustainability and education. Family members have praised UAE’s openness to innovative school design."
//           }
//         },
//         {
//           id: "subdot_uaestatements_1_SeppoVikstrom",
//           label:
//             "Focuses on synergy between Finland and the UAE in sustainability and education",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of UAE statements." }
//         },
//         {
//           id: "dot_roleinrelations_SeppoVikstrom",
//           label: "Role in Relations",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key role: ISKU Middle East FZ-LLC in Dubai furnishes educational institutions, bridging Finnish learning environment concepts with UAE’s modernisation goals."
//           }
//         },
//         {
//           id: "subdot_roleinrelations_1_SeppoVikstrom",
//           label:
//             "Furnishes educational institutions in Dubai, bridging Finnish concepts with UAE modernisation",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of role in relations." }
//         },
//         {
//           id: "dot_bilaterals_SeppoVikstrom",
//           label: "Bilaterals",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key bilaterals: Works under Finland’s trade frameworks; invests in local presence via showrooms and networks. Partners with the Finnish Business Council in Dubai."
//           }
//         },
//         {
//           id: "subdot_bilaterals_1_SeppoVikstrom",
//           label:
//             "Invests in local presence via showrooms and networks, partnering with the Finnish Business Council in Dubai",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of bilaterals." }
//         },
//         {
//           id: "dot_alignandfriction_SeppoVikstrom",
//           label: "Align and Friction",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key align and friction: UAE’s focus on premium, sustainable solutions aligns with ISKU’s brand. Faces competitive pricing from global suppliers and logistical complexities."
//           }
//         },
//         {
//           id: "subdot_alignandfriction_1_SeppoVikstrom",
//           label:
//             "Faces competitive pricing and logistical complexities",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of align and friction." }
//         },
//         {
//           id: "dot_conclusions_SeppoVikstrom",
//           label: "Conclusions",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key conclusions: Continues promoting Finnish educational design in the UAE, leveraging sustainability as a key differentiator to deepen market presence."
//           }
//         },
//         {
//           id: "subdot_conclusions_1_SeppoVikstrom",
//           label:
//             "Continues promoting Finnish educational design in the UAE",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of conclusions." }
//         },
  
//         // ---------------------------
//         // Profile: Lassi Noponen
//         // ---------------------------
//         {
//           id: "person_LassiNoponen",
//           label: "Lassi Noponen",
//           type: "Person",
//           metadata: {
//             shortBio: "CEO of Business Finland",
//             title: "CEO of Business Finland",
//             hoverText:
//               "Appointed in September 2024, leads Finland’s main trade and investment promotion agency. Focuses on global partnerships and high-potential markets."
//           }
//         },
//         {
//           id: "dot_strategy_LassiNoponen",
//           label: "Strategy",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key strategy: Appointed in September 2024, leads Finland’s main trade and investment promotion agency. Focuses on global partnerships and high-potential markets."
//           }
//         },
//         {
//           id: "subdot_strategy_1_LassiNoponen",
//           label:
//             "Leads Finland’s main trade and investment promotion agency",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of strategy." }
//         },
//         {
//           id: "dot_uaestatements_LassiNoponen",
//           label: "UAE Statements",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key UAE statements: Positions the UAE as a strategic priority in the Middle East. Participated in the January 2025 trade delegation to Abu Dhabi, emphasising digital economy ties."
//           }
//         },
//         {
//           id: "subdot_uaestatements_1_LassiNoponen",
//           label:
//             "Positions the UAE as a strategic priority in the Middle East",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of UAE statements." }
//         },
//         {
//           id: "dot_roleinrelations_LassiNoponen",
//           label: "Role in Relations",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key role: Coordinates business delegations and fosters bilateral trade. Translates G2G MoUs into real commercial projects."
//           }
//         },
//         {
//           id: "subdot_roleinrelations_1_LassiNoponen",
//           label:
//             "Coordinates business delegations and fosters bilateral trade",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of role in relations." }
//         },
//         {
//           id: "dot_bilaterals_LassiNoponen",
//           label: "Bilaterals",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key bilaterals: Supports implementing the 2022 Energy MoU, organises Team Finland missions, and drives new trade frameworks for AI, education, and digitalisation."
//           }
//         },
//         {
//           id: "subdot_bilaterals_1_LassiNoponen",
//           label:
//             "Supports implementing the 2022 Energy MoU and organises Team Finland missions",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of bilaterals." }
//         },
//         {
//           id: "dot_alignandfriction_LassiNoponen",
//           label: "Align and Friction",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key align and friction: Strong synergy with UAE’s innovation drive. Competition from larger exporters or regionally closer suppliers can challenge Finnish SMEs."
//           }
//         },
//         {
//           id: "subdot_alignandfriction_1_LassiNoponen",
//           label:
//             "Strong synergy with UAE’s innovation drive",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of align and friction." }
//         },
//         {
//           id: "dot_conclusions_LassiNoponen",
//           label: "Conclusions",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key conclusions: Aims to expand Finnish presence in the UAE, focusing on advanced tech, sustainability, and co-innovation, especially for the 50th anniversary of diplomatic ties."
//           }
//         },
//         {
//           id: "subdot_conclusions_1_LassiNoponen",
//           label:
//             "Aims to expand Finnish presence in the UAE focusing on advanced tech, sustainability, and co-innovation",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of conclusions." }
//         },
  
//         // ---------------------------
//         // Profile: Markus Rauramo
//         // ---------------------------
//         {
//           id: "person_MarkusRauramo",
//           label: "Markus Rauramo",
//           type: "Person",
//           metadata: {
//             shortBio: "CEO of Fortum",
//             title: "CEO of Fortum",
//             hoverText:
//               "Leads a major Nordic energy company specialising in clean energy. Committed to renewable projects and CO2-free electricity generation."
//           }
//         },
//         {
//           id: "dot_strategy_MarkusRauramo",
//           label: "Strategy",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key strategy: Leads a major Nordic energy company specialising in clean energy. Committed to renewable projects and CO2-free electricity generation."
//           }
//         },
//         {
//           id: "subdot_strategy_1_MarkusRauramo",
//           label:
//             "Specialises in clean energy and renewable projects",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of strategy." }
//         },
//         {
//           id: "dot_uaestatements_MarkusRauramo",
//           label: "UAE Statements",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key UAE statements: No direct UAE-specific quotes, but Fortum participated in Expo 2020 Dubai to showcase sustainable energy solutions."
//           }
//         },
//         {
//           id: "subdot_uaestatements_1_MarkusRauramo",
//           label:
//             "Participated in Expo 2020 Dubai to showcase sustainable energy solutions",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of UAE statements." }
//         },
//         {
//           id: "dot_roleinrelations_MarkusRauramo",
//           label: "Role in Relations",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key role: Supports Finland’s energy diplomacy by highlighting advanced renewable technology. Potential partnerships with UAE’s green energy initiatives."
//           }
//         },
//         {
//           id: "subdot_roleinrelations_1_MarkusRauramo",
//           label:
//             "Highlights advanced renewable technology for energy diplomacy",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of role in relations." }
//         },
//         {
//           id: "dot_bilaterals_MarkusRauramo",
//           label: "Bilaterals",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key bilaterals: Operates within the 2022 Finland–UAE Energy MoU context, focusing on renewable energy opportunities."
//           }
//         },
//         {
//           id: "subdot_bilaterals_1_MarkusRauramo",
//           label:
//             "Operates within the 2022 Finland–UAE Energy MoU context, focusing on renewable energy opportunities",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of bilaterals." }
//         },
//         {
//           id: "dot_alignandfriction_MarkusRauramo",
//           label: "Align and Friction",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key align and friction: UAE’s push for diverse energy aligns with Fortum’s green expertise. Market entry or local partnership complexities are typical friction points."
//           }
//         },
//         {
//           id: "subdot_alignandfriction_1_MarkusRauramo",
//           label:
//             "UAE’s push for diverse energy aligns with Fortum’s green expertise",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of align and friction." }
//         },
//         {
//           id: "dot_conclusions_MarkusRauramo",
//           label: "Conclusions",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key conclusions: Fortum likely to explore deeper collaboration in solar, wind, or hydrogen projects, leveraging the UAE’s drive for sustainable energy diversification."
//           }
//         },
//         {
//           id: "subdot_conclusions_1_MarkusRauramo",
//           label:
//             "Likely to explore deeper collaboration in renewable energy projects",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of conclusions." }
//         },
  
//         // ---------------------------
//         // Profile: Jubo Romakkaniemi
//         // ---------------------------
//         {
//           id: "person_JuboRomakkaniemi",
//           label: "Jubo Romakkaniemi",
//           type: "Person",
//           metadata: {
//             shortBio: "CEO of FCC",
//             title: "CEO of FCC",
//             hoverText:
//               "Heads the Finland Chamber of Commerce, representing around 20,000 companies. Former senior advisor in Finnish and EU politics."
//           }
//         },
//         {
//           id: "dot_strategy_JuboRomakkaniemi",
//           label: "Strategy",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key strategy: Heads the Finland Chamber of Commerce, representing around 20,000 companies. Former senior advisor in Finnish and EU politics."
//           }
//         },
//         {
//           id: "subdot_strategy_1_JuboRomakkaniemi",
//           label:
//             "Heads the Finland Chamber of Commerce, representing around 20,000 companies",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of strategy." }
//         },
//         {
//           id: "dot_uaestatements_JuboRomakkaniemi",
//           label: "UAE Statements",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key UAE statements: Calls the UAE an essential partner for Finnish businesses, noting complementary interests in sustainability, digital solutions, and innovation."
//           }
//         },
//         {
//           id: "subdot_uaestatements_1_JuboRomakkaniemi",
//           label:
//             "Calls the UAE an essential partner for Finnish businesses",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of UAE statements." }
//         },
//         {
//           id: "dot_roleinrelations_JuboRomakkaniemi",
//           label: "Role in Relations",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key role: Facilitates business delegations and fosters sector-specific forums (e.g. smart cities, digital health). Instrumental in launching the UAE–Finland Business Council."
//           }
//         },
//         {
//           id: "subdot_roleinrelations_1_JuboRomakkaniemi",
//           label:
//             "Facilitates business delegations and fosters sector-specific forums",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of role in relations." }
//         },
//         {
//           id: "dot_bilaterals_JuboRomakkaniemi",
//           label: "Bilaterals",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key bilaterals: Supports and promotes new commercial ties arising from official frameworks, including MoUs in AI, renewable energy, and the digital economy."
//           }
//         },
//         {
//           id: "subdot_bilaterals_1_JuboRomakkaniemi",
//           label:
//             "Supports and promotes new commercial ties through MoUs in AI, renewable energy, and the digital economy",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of bilaterals." }
//         },
//         {
//           id: "dot_alignandfriction_JuboRomakkaniemi",
//           label: "Align and Friction",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key align and friction: High alignment on tech and sustainability; competition from global players is the main challenge."
//           }
//         },
//         {
//           id: "subdot_alignandfriction_1_JuboRomakkaniemi",
//           label:
//             "High alignment on tech and sustainability; competition from global players",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of align and friction." }
//         },
//         {
//           id: "dot_conclusions_JuboRomakkaniemi",
//           label: "Conclusions",
//           type: "Dot",
//           metadata: {
//             hoverText:
//               "Key conclusions: Plans to further strengthen trade ties, building on the success of Expo 2020 Dubai and other initiatives to keep Finnish industry visible in the Gulf."
//           }
//         },
//         {
//           id: "subdot_conclusions_1_JuboRomakkaniemi",
//           label:
//             "Plans to further strengthen trade ties, building on the success of Expo 2020 Dubai and other initiatives",
//           type: "SubDot",
//           metadata: { hoverText: "Subpoint of conclusions." }
//         }
//       ],
//       edges: [
//         // ---------------------------
//         // Edges for Sandra Bergqvist
//         // ---------------------------
//         { source: "person_SandraBergqvist", target: "dot_strategy_SandraBergqvist", type: "Person-Dot", label: "has" },
//         { source: "dot_strategy_SandraBergqvist", target: "subdot_strategy_1_SandraBergqvist", type: "Dot-SubDot", label: "point" },
//         { source: "dot_strategy_SandraBergqvist", target: "subdot_strategy_2_SandraBergqvist", type: "Dot-SubDot", label: "point" },
//         { source: "person_SandraBergqvist", target: "dot_uaestatements_SandraBergqvist", type: "Person-Dot", label: "has" },
//         { source: "dot_uaestatements_SandraBergqvist", target: "subdot_uaestatements_1_SandraBergqvist", type: "Dot-SubDot", label: "point" },
//         { source: "person_SandraBergqvist", target: "dot_roleinrelations_SandraBergqvist", type: "Person-Dot", label: "has" },
//         { source: "dot_roleinrelations_SandraBergqvist", target: "subdot_roleinrelations_1_SandraBergqvist", type: "Dot-SubDot", label: "point" },
//         { source: "dot_roleinrelations_SandraBergqvist", target: "subdot_roleinrelations_2_SandraBergqvist", type: "Dot-SubDot", label: "point" },
//         { source: "person_SandraBergqvist", target: "dot_bilaterals_SandraBergqvist", type: "Person-Dot", label: "has" },
//         { source: "dot_bilaterals_SandraBergqvist", target: "subdot_bilaterals_1_SandraBergqvist", type: "Dot-SubDot", label: "point" },
//         { source: "person_SandraBergqvist", target: "dot_alignandfriction_SandraBergqvist", type: "Person-Dot", label: "has" },
//         { source: "dot_alignandfriction_SandraBergqvist", target: "subdot_alignandfriction_1_SandraBergqvist", type: "Dot-SubDot", label: "point" },
//         { source: "dot_alignandfriction_SandraBergqvist", target: "subdot_alignandfriction_2_SandraBergqvist", type: "Dot-SubDot", label: "point" },
//         { source: "person_SandraBergqvist", target: "dot_conclusions_SandraBergqvist", type: "Person-Dot", label: "has" },
//         { source: "dot_conclusions_SandraBergqvist", target: "subdot_conclusions_1_SandraBergqvist", type: "Dot-SubDot", label: "point" },
  
//         // ---------------------------
//         // Edges for Anna-Kaisa Ikonen
//         // ---------------------------
//         { source: "person_AnnaKaisaIkonen", target: "dot_strategy_AnnaKaisaIkonen", type: "Person-Dot", label: "has" },
//         { source: "dot_strategy_AnnaKaisaIkonen", target: "subdot_strategy_1_AnnaKaisaIkonen", type: "Dot-SubDot", label: "point" },
//         { source: "dot_strategy_AnnaKaisaIkonen", target: "subdot_strategy_2_AnnaKaisaIkonen", type: "Dot-SubDot", label: "point" },
//         { source: "person_AnnaKaisaIkonen", target: "dot_uaestatements_AnnaKaisaIkonen", type: "Person-Dot", label: "has" },
//         { source: "dot_uaestatements_AnnaKaisaIkonen", target: "subdot_uaestatements_1_AnnaKaisaIkonen", type: "Dot-SubDot", label: "point" },
//         { source: "dot_uaestatements_AnnaKaisaIkonen", target: "subdot_uaestatements_2_AnnaKaisaIkonen", type: "Dot-SubDot", label: "point" },
//         { source: "person_AnnaKaisaIkonen", target: "dot_roleinrelations_AnnaKaisaIkonen", type: "Person-Dot", label: "has" },
//         { source: "dot_roleinrelations_AnnaKaisaIkonen", target: "subdot_roleinrelations_1_AnnaKaisaIkonen", type: "Dot-SubDot", label: "point" },
//         { source: "person_AnnaKaisaIkonen", target: "dot_bilaterals_AnnaKaisaIkonen", type: "Person-Dot", label: "has" },
//         { source: "dot_bilaterals_AnnaKaisaIkonen", target: "subdot_bilaterals_1_AnnaKaisaIkonen", type: "Dot-SubDot", label: "point" },
//         { source: "dot_bilaterals_AnnaKaisaIkonen", target: "subdot_bilaterals_2_AnnaKaisaIkonen", type: "Dot-SubDot", label: "point" },
//         { source: "person_AnnaKaisaIkonen", target: "dot_alignandfriction_AnnaKaisaIkonen", type: "Person-Dot", label: "has" },
//         { source: "dot_alignandfriction_AnnaKaisaIkonen", target: "subdot_alignandfriction_1_AnnaKaisaIkonen", type: "Dot-SubDot", label: "point" },
//         { source: "dot_alignandfriction_AnnaKaisaIkonen", target: "subdot_alignandfriction_2_AnnaKaisaIkonen", type: "Dot-SubDot", label: "point" },
//         { source: "person_AnnaKaisaIkonen", target: "dot_conclusions_AnnaKaisaIkonen", type: "Person-Dot", label: "has" },
//         { source: "dot_conclusions_AnnaKaisaIkonen", target: "subdot_conclusions_1_AnnaKaisaIkonen", type: "Dot-SubDot", label: "point" },
  
//         // ---------------------------
//         // Edges for Alexander Stubb
//         // ---------------------------
//         { source: "person_AlexanderStubb", target: "dot_strategy_AlexanderStubb", type: "Person-Dot", label: "has" },
//         { source: "dot_strategy_AlexanderStubb", target: "subdot_strategy_1_AlexanderStubb", type: "Dot-SubDot", label: "point" },
//         { source: "dot_strategy_AlexanderStubb", target: "subdot_strategy_2_AlexanderStubb", type: "Dot-SubDot", label: "point" },
//         { source: "dot_strategy_AlexanderStubb", target: "subdot_strategy_3_AlexanderStubb", type: "Dot-SubDot", label: "point" },
//         { source: "person_AlexanderStubb", target: "dot_uaestatements_AlexanderStubb", type: "Person-Dot", label: "has" },
//         { source: "dot_uaestatements_AlexanderStubb", target: "subdot_uaestatements_1_AlexanderStubb", type: "Dot-SubDot", label: "point" },
//         { source: "person_AlexanderStubb", target: "dot_roleinrelations_AlexanderStubb", type: "Person-Dot", label: "has" },
//         { source: "dot_roleinrelations_AlexanderStubb", target: "subdot_roleinrelations_1_AlexanderStubb", type: "Dot-SubDot", label: "point" },
//         { source: "dot_roleinrelations_AlexanderStubb", target: "subdot_roleinrelations_2_AlexanderStubb", type: "Dot-SubDot", label: "point" },
//         { source: "person_AlexanderStubb", target: "dot_bilaterals_AlexanderStubb", type: "Person-Dot", label: "has" },
//         { source: "dot_bilaterals_AlexanderStubb", target: "subdot_bilaterals_1_AlexanderStubb", type: "Dot-SubDot", label: "point" },
//         { source: "person_AlexanderStubb", target: "dot_alignandfriction_AlexanderStubb", type: "Person-Dot", label: "has" },
//         { source: "dot_alignandfriction_AlexanderStubb", target: "subdot_alignandfriction_1_AlexanderStubb", type: "Dot-SubDot", label: "point" },
//         { source: "dot_alignandfriction_AlexanderStubb", target: "subdot_alignandfriction_2_AlexanderStubb", type: "Dot-SubDot", label: "point" },
//         { source: "person_AlexanderStubb", target: "dot_conclusions_AlexanderStubb", type: "Person-Dot", label: "has" },
//         { source: "dot_conclusions_AlexanderStubb", target: "subdot_conclusions_1_AlexanderStubb", type: "Dot-SubDot", label: "point" },
//         { source: "dot_conclusions_AlexanderStubb", target: "subdot_conclusions_2_AlexanderStubb", type: "Dot-SubDot", label: "point" },
  
//         // ---------------------------
//         // Edges for Tuula Yrjola
//         // ---------------------------
//         { source: "person_TuulaYrjola", target: "dot_strategy_TuulaYrjola", type: "Person-Dot", label: "has" },
//         { source: "dot_strategy_TuulaYrjola", target: "subdot_strategy_1_TuulaYrjola", type: "Dot-SubDot", label: "point" },
//         { source: "dot_strategy_TuulaYrjola", target: "subdot_strategy_2_TuulaYrjola", type: "Dot-SubDot", label: "point" },
//         { source: "person_TuulaYrjola", target: "dot_uaestatements_TuulaYrjola", type: "Person-Dot", label: "has" },
//         { source: "dot_uaestatements_TuulaYrjola", target: "subdot_uaestatements_1_TuulaYrjola", type: "Dot-SubDot", label: "point" },
//         { source: "person_TuulaYrjola", target: "dot_roleinrelations_TuulaYrjola", type: "Person-Dot", label: "has" },
//         { source: "dot_roleinrelations_TuulaYrjola", target: "subdot_roleinrelations_1_TuulaYrjola", type: "Dot-SubDot", label: "point" },
//         { source: "dot_roleinrelations_TuulaYrjola", target: "subdot_roleinrelations_2_TuulaYrjola", type: "Dot-SubDot", label: "point" },
//         { source: "person_TuulaYrjola", target: "dot_bilaterals_TuulaYrjola", type: "Person-Dot", label: "has" },
//         { source: "dot_bilaterals_TuulaYrjola", target: "subdot_bilaterals_1_TuulaYrjola", type: "Dot-SubDot", label: "point" },
//         { source: "person_TuulaYrjola", target: "dot_alignandfriction_TuulaYrjola", type: "Person-Dot", label: "has" },
//         { source: "dot_alignandfriction_TuulaYrjola", target: "subdot_alignandfriction_1_TuulaYrjola", type: "Dot-SubDot", label: "point" },
//         { source: "dot_alignandfriction_TuulaYrjola", target: "subdot_alignandfriction_2_TuulaYrjola", type: "Dot-SubDot", label: "point" },
//         { source: "person_TuulaYrjola", target: "dot_conclusions_TuulaYrjola", type: "Person-Dot", label: "has" },
//         { source: "dot_conclusions_TuulaYrjola", target: "subdot_conclusions_1_TuulaYrjola", type: "Dot-SubDot", label: "point" },
  
//         // ---------------------------
//         // Edges for Anna-Mari Wong Hamalainen
//         // ---------------------------
//         { source: "person_AnnaMariWongHamalainen", target: "dot_strategy_AnnaMariWongHamalainen", type: "Person-Dot", label: "has" },
//         { source: "dot_strategy_AnnaMariWongHamalainen", target: "subdot_strategy_1_AnnaMariWongHamalainen", type: "Dot-SubDot", label: "point" },
//         { source: "dot_strategy_AnnaMariWongHamalainen", target: "subdot_strategy_2_AnnaMariWongHamalainen", type: "Dot-SubDot", label: "point" },
//         { source: "person_AnnaMariWongHamalainen", target: "dot_uaestatements_AnnaMariWongHamalainen", type: "Person-Dot", label: "has" },
//         { source: "dot_uaestatements_AnnaMariWongHamalainen", target: "subdot_uaestatements_1_AnnaMariWongHamalainen", type: "Dot-SubDot", label: "point" },
//         { source: "person_AnnaMariWongHamalainen", target: "dot_roleinrelations_AnnaMariWongHamalainen", type: "Person-Dot", label: "has" },
//         { source: "dot_roleinrelations_AnnaMariWongHamalainen", target: "subdot_roleinrelations_1_AnnaMariWongHamalainen", type: "Dot-SubDot", label: "point" },
//         { source: "person_AnnaMariWongHamalainen", target: "dot_bilaterals_AnnaMariWongHamalainen", type: "Person-Dot", label: "has" },
//         { source: "dot_bilaterals_AnnaMariWongHamalainen", target: "subdot_bilaterals_1_AnnaMariWongHamalainen", type: "Dot-SubDot", label: "point" },
//         { source: "person_AnnaMariWongHamalainen", target: "dot_alignandfriction_AnnaMariWongHamalainen", type: "Person-Dot", label: "has" },
//         { source: "dot_alignandfriction_AnnaMariWongHamalainen", target: "subdot_alignandfriction_1_AnnaMariWongHamalainen", type: "Dot-SubDot", label: "point" },
//         { source: "person_AnnaMariWongHamalainen", target: "dot_conclusions_AnnaMariWongHamalainen", type: "Person-Dot", label: "has" },
//         { source: "dot_conclusions_AnnaMariWongHamalainen", target: "subdot_conclusions_1_AnnaMariWongHamalainen", type: "Dot-SubDot", label: "point" },
  
//         // ---------------------------
//         // Edges for Ville Brumme
//         // ---------------------------
//         { source: "person_VilleBrumme", target: "dot_strategy_VilleBrumme", type: "Person-Dot", label: "has" },
//         { source: "dot_strategy_VilleBrumme", target: "subdot_strategy_1_VilleBrumme", type: "Dot-SubDot", label: "point" },
//         { source: "dot_strategy_VilleBrumme", target: "subdot_strategy_2_VilleBrumme", type: "Dot-SubDot", label: "point" },
//         { source: "dot_strategy_VilleBrumme", target: "subdot_strategy_3_VilleBrumme", type: "Dot-SubDot", label: "point" },
//         { source: "person_VilleBrumme", target: "dot_uaestatements_VilleBrumme", type: "Person-Dot", label: "has" },
//         { source: "dot_uaestatements_VilleBrumme", target: "subdot_uaestatements_1_VilleBrumme", type: "Dot-SubDot", label: "point" },
//         { source: "dot_uaestatements_VilleBrumme", target: "subdot_uaestatements_2_VilleBrumme", type: "Dot-SubDot", label: "point" },
//         { source: "person_VilleBrumme", target: "dot_roleinrelations_VilleBrumme", type: "Person-Dot", label: "has" },
//         { source: "dot_roleinrelations_VilleBrumme", target: "subdot_roleinrelations_1_VilleBrumme", type: "Dot-SubDot", label: "point" },
//         { source: "dot_roleinrelations_VilleBrumme", target: "subdot_roleinrelations_2_VilleBrumme", type: "Dot-SubDot", label: "point" },
//         { source: "person_VilleBrumme", target: "dot_bilaterals_VilleBrumme", type: "Person-Dot", label: "has" },
//         { source: "dot_bilaterals_VilleBrumme", target: "subdot_bilaterals_1_VilleBrumme", type: "Dot-SubDot", label: "point" },
//         { source: "dot_bilaterals_VilleBrumme", target: "subdot_bilaterals_2_VilleBrumme", type: "Dot-SubDot", label: "point" },
//         { source: "person_VilleBrumme", target: "dot_alignandfriction_VilleBrumme", type: "Person-Dot", label: "has" },
//         { source: "dot_alignandfriction_VilleBrumme", target: "subdot_alignandfriction_1_VilleBrumme", type: "Dot-SubDot", label: "point" },
//         { source: "dot_alignandfriction_VilleBrumme", target: "subdot_alignandfriction_2_VilleBrumme", type: "Dot-SubDot", label: "point" },
//         { source: "person_VilleBrumme", target: "dot_conclusions_VilleBrumme", type: "Person-Dot", label: "has" },
//         { source: "dot_conclusions_VilleBrumme", target: "subdot_conclusions_1_VilleBrumme", type: "Dot-SubDot", label: "point" },
  
//         // ---------------------------
//         // Edges for Elina Valtonen
//         // ---------------------------
//         { source: "person_ElinaValtonen", target: "dot_strategy_ElinaValtonen", type: "Person-Dot", label: "has" },
//         { source: "dot_strategy_ElinaValtonen", target: "subdot_strategy_1_ElinaValtonen", type: "Dot-SubDot", label: "point" },
//         { source: "dot_strategy_ElinaValtonen", target: "subdot_strategy_2_ElinaValtonen", type: "Dot-SubDot", label: "point" },
//         { source: "person_ElinaValtonen", target: "dot_uaestatements_ElinaValtonen", type: "Person-Dot", label: "has" },
//         { source: "dot_uaestatements_ElinaValtonen", target: "subdot_uaestatements_1_ElinaValtonen", type: "Dot-SubDot", label: "point" },
//         { source: "person_ElinaValtonen", target: "dot_roleinrelations_ElinaValtonen", type: "Person-Dot", label: "has" },
//         { source: "dot_roleinrelations_ElinaValtonen", target: "subdot_roleinrelations_1_ElinaValtonen", type: "Dot-SubDot", label: "point" },
//         { source: "person_ElinaValtonen", target: "dot_bilaterals_ElinaValtonen", type: "Person-Dot", label: "has" },
//         { source: "dot_bilaterals_ElinaValtonen", target: "subdot_bilaterals_1_ElinaValtonen", type: "Dot-SubDot", label: "point" },
//         { source: "person_ElinaValtonen", target: "dot_alignandfriction_ElinaValtonen", type: "Person-Dot", label: "has" },
//         { source: "dot_alignandfriction_ElinaValtonen", target: "subdot_alignandfriction_1_ElinaValtonen", type: "Dot-SubDot", label: "point" },
//         { source: "person_ElinaValtonen", target: "dot_conclusions_ElinaValtonen", type: "Person-Dot", label: "has" },
//         { source: "dot_conclusions_ElinaValtonen", target: "subdot_conclusions_1_ElinaValtonen", type: "Dot-SubDot", label: "point" },
  
//         // ---------------------------
//         // Edges for Laila Clyne
//         // ---------------------------
//         { source: "person_LailaClyne", target: "dot_strategy_LailaClyne", type: "Person-Dot", label: "has" },
//         { source: "dot_strategy_LailaClyne", target: "subdot_strategy_1_LailaClyne", type: "Dot-SubDot", label: "point" },
//         { source: "person_LailaClyne", target: "dot_uaestatements_LailaClyne", type: "Person-Dot", label: "has" },
//         { source: "dot_uaestatements_LailaClyne", target: "subdot_uaestatements_1_LailaClyne", type: "Dot-SubDot", label: "point" },
//         { source: "person_LailaClyne", target: "dot_roleinrelations_LailaClyne", type: "Person-Dot", label: "has" },
//         { source: "dot_roleinrelations_LailaClyne", target: "subdot_roleinrelations_1_LailaClyne", type: "Dot-SubDot", label: "point" },
//         { source: "person_LailaClyne", target: "dot_bilaterals_LailaClyne", type: "Person-Dot", label: "has" },
//         { source: "dot_bilaterals_LailaClyne", target: "subdot_bilaterals_1_LailaClyne", type: "Dot-SubDot", label: "point" },
//         { source: "person_LailaClyne", target: "dot_alignandfriction_LailaClyne", type: "Person-Dot", label: "has" },
//         { source: "dot_alignandfriction_LailaClyne", target: "subdot_alignandfriction_1_LailaClyne", type: "Dot-SubDot", label: "point" },
//         { source: "person_LailaClyne", target: "dot_conclusions_LailaClyne", type: "Person-Dot", label: "has" },
//         { source: "dot_conclusions_LailaClyne", target: "subdot_conclusions_1_LailaClyne", type: "Dot-SubDot", label: "point" },
  
//         // ---------------------------
//         // Edges for Anna-Kaisa Heikkinen
//         // ---------------------------
//         { source: "person_AnnaKaisaHeikkinen", target: "dot_strategy_AnnaKaisaHeikkinen", type: "Person-Dot", label: "has" },
//         { source: "dot_strategy_AnnaKaisaHeikkinen", target: "subdot_strategy_1_AnnaKaisaHeikkinen", type: "Dot-SubDot", label: "point" },
//         { source: "dot_strategy_AnnaKaisaHeikkinen", target: "subdot_strategy_2_AnnaKaisaHeikkinen", type: "Dot-SubDot", label: "point" },
//         { source: "person_AnnaKaisaHeikkinen", target: "dot_uaestatements_AnnaKaisaHeikkinen", type: "Person-Dot", label: "has" },
//         { source: "dot_uaestatements_AnnaKaisaHeikkinen", target: "subdot_uaestatements_1_AnnaKaisaHeikkinen", type: "Dot-SubDot", label: "point" },
//         { source: "person_AnnaKaisaHeikkinen", target: "dot_roleinrelations_AnnaKaisaHeikkinen", type: "Person-Dot", label: "has" },
//         { source: "dot_roleinrelations_AnnaKaisaHeikkinen", target: "subdot_roleinrelations_1_AnnaKaisaHeikkinen", type: "Dot-SubDot", label: "point" },
//         { source: "person_AnnaKaisaHeikkinen", target: "dot_bilaterals_AnnaKaisaHeikkinen", type: "Person-Dot", label: "has" },
//         { source: "dot_bilaterals_AnnaKaisaHeikkinen", target: "subdot_bilaterals_1_AnnaKaisaHeikkinen", type: "Dot-SubDot", label: "point" },
//         { source: "person_AnnaKaisaHeikkinen", target: "dot_alignandfriction_AnnaKaisaHeikkinen", type: "Person-Dot", label: "has" },
//         { source: "dot_alignandfriction_AnnaKaisaHeikkinen", target: "subdot_alignandfriction_1_AnnaKaisaHeikkinen", type: "Dot-SubDot", label: "point" },
//         { source: "person_AnnaKaisaHeikkinen", target: "dot_conclusions_AnnaKaisaHeikkinen", type: "Person-Dot", label: "has" },
//         { source: "dot_conclusions_AnnaKaisaHeikkinen", target: "subdot_conclusions_1_AnnaKaisaHeikkinen", type: "Dot-SubDot", label: "point" },
  
//         // ---------------------------
//         // Edges for Anne M'Rabet
//         // ---------------------------
//         { source: "person_AnneMRabet", target: "dot_strategy_AnneMRabet", type: "Person-Dot", label: "has" },
//         { source: "dot_strategy_AnneMRabet", target: "subdot_strategy_1_AnneMRabet", type: "Dot-SubDot", label: "point" },
//         { source: "person_AnneMRabet", target: "dot_uaestatements_AnneMRabet", type: "Person-Dot", label: "has" },
//         { source: "dot_uaestatements_AnneMRabet", target: "subdot_uaestatements_1_AnneMRabet", type: "Dot-SubDot", label: "point" },
//         { source: "person_AnneMRabet", target: "dot_roleinrelations_AnneMRabet", type: "Person-Dot", label: "has" },
//         { source: "dot_roleinrelations_AnneMRabet", target: "subdot_roleinrelations_1_AnneMRabet", type: "Dot-SubDot", label: "point" },
//         { source: "person_AnneMRabet", target: "dot_bilaterals_AnneMRabet", type: "Person-Dot", label: "has" },
//         { source: "dot_bilaterals_AnneMRabet", target: "subdot_bilaterals_1_AnneMRabet", type: "Dot-SubDot", label: "point" },
//         { source: "person_AnneMRabet", target: "dot_alignandfriction_AnneMRabet", type: "Person-Dot", label: "has" },
//         { source: "dot_alignandfriction_AnneMRabet", target: "subdot_alignandfriction_1_AnneMRabet", type: "Dot-SubDot", label: "point" },
//         { source: "person_AnneMRabet", target: "dot_conclusions_AnneMRabet", type: "Person-Dot", label: "has" },
//         { source: "dot_conclusions_AnneMRabet", target: "subdot_conclusions_1_AnneMRabet", type: "Dot-SubDot", label: "point" },
  
//         // ---------------------------
//         // Edges for Justin Hotard
//         // ---------------------------
//         { source: "person_JustinHotard", target: "dot_strategy_JustinHotard", type: "Person-Dot", label: "has" },
//         { source: "dot_strategy_JustinHotard", target: "subdot_strategy_1_JustinHotard", type: "Dot-SubDot", label: "point" },
//         { source: "dot_strategy_JustinHotard", target: "subdot_strategy_2_JustinHotard", type: "Dot-SubDot", label: "point" },
//         { source: "person_JustinHotard", target: "dot_uaestatements_JustinHotard", type: "Person-Dot", label: "has" },
//         { source: "dot_uaestatements_JustinHotard", target: "subdot_uaestatements_1_JustinHotard", type: "Dot-SubDot", label: "point" },
//         { source: "person_JustinHotard", target: "dot_roleinrelations_JustinHotard", type: "Person-Dot", label: "has" },
//         { source: "dot_roleinrelations_JustinHotard", target: "subdot_roleinrelations_1_JustinHotard", type: "Dot-SubDot", label: "point" },
//         { source: "person_JustinHotard", target: "dot_bilaterals_JustinHotard", type: "Person-Dot", label: "has" },
//         { source: "dot_bilaterals_JustinHotard", target: "subdot_bilaterals_1_JustinHotard", type: "Dot-SubDot", label: "point" },
//         { source: "person_JustinHotard", target: "dot_alignandfriction_JustinHotard", type: "Person-Dot", label: "has" },
//         { source: "dot_alignandfriction_JustinHotard", target: "subdot_alignandfriction_1_JustinHotard", type: "Dot-SubDot", label: "point" },
//         { source: "person_JustinHotard", target: "dot_conclusions_JustinHotard", type: "Person-Dot", label: "has" },
//         { source: "dot_conclusions_JustinHotard", target: "subdot_conclusions_1_JustinHotard", type: "Dot-SubDot", label: "point" },
  
//         // ---------------------------
//         // Edges for Pekka Lundmark
//         // ---------------------------
//         { source: "person_PekkaLundmark", target: "dot_strategy_PekkaLundmark", type: "Person-Dot", label: "has" },
//         { source: "dot_strategy_PekkaLundmark", target: "subdot_strategy_1_PekkaLundmark", type: "Dot-SubDot", label: "point" },
//         { source: "dot_strategy_PekkaLundmark", target: "subdot_strategy_2_PekkaLundmark", type: "Dot-SubDot", label: "point" },
//         { source: "person_PekkaLundmark", target: "dot_uaestatements_PekkaLundmark", type: "Person-Dot", label: "has" },
//         { source: "dot_uaestatements_PekkaLundmark", target: "subdot_uaestatements_1_PekkaLundmark", type: "Dot-SubDot", label: "point" },
//         { source: "person_PekkaLundmark", target: "dot_roleinrelations_PekkaLundmark", type: "Person-Dot", label: "has" },
//         { source: "dot_roleinrelations_PekkaLundmark", target: "subdot_roleinrelations_1_PekkaLundmark", type: "Dot-SubDot", label: "point" },
//         { source: "person_PekkaLundmark", target: "dot_bilaterals_PekkaLundmark", type: "Person-Dot", label: "has" },
//         { source: "dot_bilaterals_PekkaLundmark", target: "subdot_bilaterals_1_PekkaLundmark", type: "Dot-SubDot", label: "point" },
//         { source: "person_PekkaLundmark", target: "dot_alignandfriction_PekkaLundmark", type: "Person-Dot", label: "has" },
//         { source: "dot_alignandfriction_PekkaLundmark", target: "subdot_alignandfriction_1_PekkaLundmark", type: "Dot-SubDot", label: "point" },
//         { source: "person_PekkaLundmark", target: "dot_conclusions_PekkaLundmark", type: "Person-Dot", label: "has" },
//         { source: "dot_conclusions_PekkaLundmark", target: "subdot_conclusions_1_PekkaLundmark", type: "Dot-SubDot", label: "point" },
  
//         // ---------------------------
//         // Edges for Sari Baldauf
//         // ---------------------------
//         { source: "person_SariBaldauf", target: "dot_strategy_SariBaldauf", type: "Person-Dot", label: "has" },
//         { source: "dot_strategy_SariBaldauf", target: "subdot_strategy_1_SariBaldauf", type: "Dot-SubDot", label: "point" },
//         { source: "person_SariBaldauf", target: "dot_uaestatements_SariBaldauf", type: "Person-Dot", label: "has" },
//         { source: "dot_uaestatements_SariBaldauf", target: "subdot_uaestatements_1_SariBaldauf", type: "Dot-SubDot", label: "point" },
//         { source: "person_SariBaldauf", target: "dot_roleinrelations_SariBaldauf", type: "Person-Dot", label: "has" },
//         { source: "dot_roleinrelations_SariBaldauf", target: "subdot_roleinrelations_1_SariBaldauf", type: "Dot-SubDot", label: "point" },
//         { source: "person_SariBaldauf", target: "dot_bilaterals_SariBaldauf", type: "Person-Dot", label: "has" },
//         { source: "dot_bilaterals_SariBaldauf", target: "subdot_bilaterals_1_SariBaldauf", type: "Dot-SubDot", label: "point" },
//         { source: "person_SariBaldauf", target: "dot_alignandfriction_SariBaldauf", type: "Person-Dot", label: "has" },
//         { source: "dot_alignandfriction_SariBaldauf", target: "subdot_alignandfriction_1_SariBaldauf", type: "Dot-SubDot", label: "point" },
//         { source: "person_SariBaldauf", target: "dot_conclusions_SariBaldauf", type: "Person-Dot", label: "has" },
//         { source: "dot_conclusions_SariBaldauf", target: "subdot_conclusions_1_SariBaldauf", type: "Dot-SubDot", label: "point" },
  
//         // ---------------------------
//         // Edges for Håkan Agnevall
//         // ---------------------------
//         { source: "person_HakanAgnevall", target: "dot_strategy_HakanAgnevall", type: "Person-Dot", label: "has" },
//         { source: "dot_strategy_HakanAgnevall", target: "subdot_strategy_1_HakanAgnevall", type: "Dot-SubDot", label: "point" },
//         { source: "dot_strategy_HakanAgnevall", target: "subdot_strategy_2_HakanAgnevall", type: "Dot-SubDot", label: "point" },
//         { source: "person_HakanAgnevall", target: "dot_uaestatements_HakanAgnevall", type: "Person-Dot", label: "has" },
//         { source: "dot_uaestatements_HakanAgnevall", target: "subdot_uaestatements_1_HakanAgnevall", type: "Dot-SubDot", label: "point" },
//         { source: "person_HakanAgnevall", target: "dot_roleinrelations_HakanAgnevall", type: "Person-Dot", label: "has" },
//         { source: "dot_roleinrelations_HakanAgnevall", target: "subdot_roleinrelations_1_HakanAgnevall", type: "Dot-SubDot", label: "point" },
//         { source: "person_HakanAgnevall", target: "dot_bilaterals_HakanAgnevall", type: "Person-Dot", label: "has" },
//         { source: "dot_bilaterals_HakanAgnevall", target: "subdot_bilaterals_1_HakanAgnevall", type: "Dot-SubDot", label: "point" },
//         { source: "person_HakanAgnevall", target: "dot_alignandfriction_HakanAgnevall", type: "Person-Dot", label: "has" },
//         { source: "dot_alignandfriction_HakanAgnevall", target: "subdot_alignandfriction_1_HakanAgnevall", type: "Dot-SubDot", label: "point" },
//         { source: "person_HakanAgnevall", target: "dot_conclusions_HakanAgnevall", type: "Person-Dot", label: "has" },
//         { source: "dot_conclusions_HakanAgnevall", target: "subdot_conclusions_1_HakanAgnevall", type: "Dot-SubDot", label: "point" },
  
//         // ---------------------------
//         // Edges for Representative of Ehrnooth family
//         // ---------------------------
//         { source: "person_EhrnoothFamily", target: "dot_strategy_EhrnoothFamily", type: "Person-Dot", label: "has" },
//         { source: "dot_strategy_EhrnoothFamily", target: "subdot_strategy_1_EhrnoothFamily", type: "Dot-SubDot", label: "point" },
//         { source: "person_EhrnoothFamily", target: "dot_uaestatements_EhrnoothFamily", type: "Person-Dot", label: "has" },
//         { source: "dot_uaestatements_EhrnoothFamily", target: "subdot_uaestatements_1_EhrnoothFamily", type: "Dot-SubDot", label: "point" },
//         { source: "person_EhrnoothFamily", target: "dot_roleinrelations_EhrnoothFamily", type: "Person-Dot", label: "has" },
//         { source: "dot_roleinrelations_EhrnoothFamily", target: "subdot_roleinrelations_1_EhrnoothFamily", type: "Dot-SubDot", label: "point" },
//         { source: "person_EhrnoothFamily", target: "dot_bilaterals_EhrnoothFamily", type: "Person-Dot", label: "has" },
//         { source: "dot_bilaterals_EhrnoothFamily", target: "subdot_bilaterals_1_EhrnoothFamily", type: "Dot-SubDot", label: "point" },
//         { source: "person_EhrnoothFamily", target: "dot_alignandfriction_EhrnoothFamily", type: "Person-Dot", label: "has" },
//         { source: "dot_alignandfriction_EhrnoothFamily", target: "subdot_alignandfriction_1_EhrnoothFamily", type: "Dot-SubDot", label: "point" },
//         { source: "person_EhrnoothFamily", target: "dot_conclusions_EhrnoothFamily", type: "Person-Dot", label: "has" },
//         { source: "dot_conclusions_EhrnoothFamily", target: "subdot_conclusions_1_EhrnoothFamily", type: "Dot-SubDot", label: "point" },
  
//         // ---------------------------
//         // Edges for Robin Langenskiöld
//         // ---------------------------
//         { source: "person_RobinLangenskiold", target: "dot_strategy_RobinLangenskiold", type: "Person-Dot", label: "has" },
//         { source: "dot_strategy_RobinLangenskiold", target: "subdot_strategy_1_RobinLangenskiold", type: "Dot-SubDot", label: "point" },
//         { source: "person_RobinLangenskiold", target: "dot_uaestatements_RobinLangenskiold", type: "Person-Dot", label: "has" },
//         { source: "dot_uaestatements_RobinLangenskiold", target: "subdot_uaestatements_1_RobinLangenskiold", type: "Dot-SubDot", label: "point" },
//         { source: "person_RobinLangenskiold", target: "dot_roleinrelations_RobinLangenskiold", type: "Person-Dot", label: "has" },
//         { source: "dot_roleinrelations_RobinLangenskiold", target: "subdot_roleinrelations_1_RobinLangenskiold", type: "Dot-SubDot", label: "point" },
//         { source: "person_RobinLangenskiold", target: "dot_conclusions_RobinLangenskiold", type: "Person-Dot", label: "has" },
//         { source: "dot_conclusions_RobinLangenskiold", target: "subdot_conclusions_1_RobinLangenskiold", type: "Dot-SubDot", label: "point" },
  
//         // ---------------------------
//         // Edges for Rafaela Seppälä
//         // ---------------------------
//         { source: "person_RafaelaSeppala", target: "dot_strategy_RafaelaSeppala", type: "Person-Dot", label: "has" },
//         { source: "dot_strategy_RafaelaSeppala", target: "subdot_strategy_1_RafaelaSeppala", type: "Dot-SubDot", label: "point" },
//         { source: "person_RafaelaSeppala", target: "dot_uaestatements_RafaelaSeppala", type: "Person-Dot", label: "has" },
//         { source: "dot_uaestatements_RafaelaSeppala", target: "subdot_uaestatements_1_RafaelaSeppala", type: "Dot-SubDot", label: "point" },
//         { source: "person_RafaelaSeppala", target: "dot_roleinrelations_RafaelaSeppala", type: "Person-Dot", label: "has" },
//         { source: "dot_roleinrelations_RafaelaSeppala", target: "subdot_roleinrelations_1_RafaelaSeppala", type: "Dot-SubDot", label: "point" },
//         { source: "person_RafaelaSeppala", target: "dot_conclusions_RafaelaSeppala", type: "Person-Dot", label: "has" },
//         { source: "dot_conclusions_RafaelaSeppala", target: "subdot_conclusions_1_RafaelaSeppala", type: "Dot-SubDot", label: "point" },
  
//         // ---------------------------
//         // Edges for Björn Wahlroos
//         // ---------------------------
//         { source: "person_BjornWahlroos", target: "dot_strategy_BjornWahlroos", type: "Person-Dot", label: "has" },
//         { source: "dot_strategy_BjornWahlroos", target: "subdot_strategy_1_BjornWahlroos", type: "Dot-SubDot", label: "point" },
//         { source: "person_BjornWahlroos", target: "dot_uaestatements_BjornWahlroos", type: "Person-Dot", label: "has" },
//         { source: "dot_uaestatements_BjornWahlroos", target: "subdot_uaestatements_1_BjornWahlroos", type: "Dot-SubDot", label: "point" },
//         { source: "person_BjornWahlroos", target: "dot_roleinrelations_BjornWahlroos", type: "Person-Dot", label: "has" },
//         { source: "dot_roleinrelations_BjornWahlroos", target: "subdot_roleinrelations_1_BjornWahlroos", type: "Dot-SubDot", label: "point" },
//         { source: "person_BjornWahlroos", target: "dot_bilaterals_BjornWahlroos", type: "Person-Dot", label: "has" },
//         { source: "dot_bilaterals_BjornWahlroos", target: "subdot_bilaterals_1_BjornWahlroos", type: "Dot-SubDot", label: "point" },
//         { source: "person_BjornWahlroos", target: "dot_alignandfriction_BjornWahlroos", type: "Person-Dot", label: "has" },
//         { source: "dot_alignandfriction_BjornWahlroos", target: "subdot_alignandfriction_1_BjornWahlroos", type: "Dot-SubDot", label: "point" },
//         { source: "person_BjornWahlroos", target: "dot_conclusions_BjornWahlroos", type: "Person-Dot", label: "has" },
//         { source: "dot_conclusions_BjornWahlroos", target: "subdot_conclusions_1_BjornWahlroos", type: "Dot-SubDot", label: "point" },
  
//         // ---------------------------
//         // Edges for Jyri Häkämies
//         // ---------------------------
//         { source: "person_JyriHakamies", target: "dot_strategy_JyriHakamies", type: "Person-Dot", label: "has" },
//         { source: "dot_strategy_JyriHakamies", target: "subdot_strategy_1_JyriHakamies", type: "Dot-SubDot", label: "point" },
//         { source: "person_JyriHakamies", target: "dot_uaestatements_JyriHakamies", type: "Person-Dot", label: "has" },
//         { source: "dot_uaestatements_JyriHakamies", target: "subdot_uaestatements_1_JyriHakamies", type: "Dot-SubDot", label: "point" },
//         { source: "person_JyriHakamies", target: "dot_roleinrelations_JyriHakamies", type: "Person-Dot", label: "has" },
//         { source: "dot_roleinrelations_JyriHakamies", target: "subdot_roleinrelations_1_JyriHakamies", type: "Dot-SubDot", label: "point" },
//         { source: "person_JyriHakamies", target: "dot_bilaterals_JyriHakamies", type: "Person-Dot", label: "has" },
//         { source: "dot_bilaterals_JyriHakamies", target: "subdot_bilaterals_1_JyriHakamies", type: "Dot-SubDot", label: "point" },
//         { source: "person_JyriHakamies", target: "dot_alignandfriction_JyriHakamies", type: "Person-Dot", label: "has" },
//         { source: "dot_alignandfriction_JyriHakamies", target: "subdot_alignandfriction_1_JyriHakamies", type: "Dot-SubDot", label: "point" },
//         { source: "person_JyriHakamies", target: "dot_conclusions_JyriHakamies", type: "Person-Dot", label: "has" },
//         { source: "dot_conclusions_JyriHakamies", target: "subdot_conclusions_1_JyriHakamies", type: "Dot-SubDot", label: "point" },
  
//         // ---------------------------
//         // Edges for Jussi Halla-aho
//         // ---------------------------
//         { source: "person_JussiHallaAho", target: "dot_strategy_JussiHallaAho", type: "Person-Dot", label: "has" },
//         { source: "dot_strategy_JussiHallaAho", target: "subdot_strategy_1_JussiHallaAho", type: "Dot-SubDot", label: "point" },
//         { source: "person_JussiHallaAho", target: "dot_uaestatements_JussiHallaAho", type: "Person-Dot", label: "has" },
//         { source: "dot_uaestatements_JussiHallaAho", target: "subdot_uaestatements_1_JussiHallaAho", type: "Dot-SubDot", label: "point" },
//         { source: "person_JussiHallaAho", target: "dot_roleinrelations_JussiHallaAho", type: "Person-Dot", label: "has" },
//         { source: "dot_roleinrelations_JussiHallaAho", target: "subdot_roleinrelations_1_JussiHallaAho", type: "Dot-SubDot", label: "point" },
//         { source: "person_JussiHallaAho", target: "dot_bilaterals_JussiHallaAho", type: "Person-Dot", label: "has" },
//         { source: "dot_bilaterals_JussiHallaAho", target: "subdot_bilaterals_1_JussiHallaAho", type: "Dot-SubDot", label: "point" },
//         { source: "person_JussiHallaAho", target: "dot_alignandfriction_JussiHallaAho", type: "Person-Dot", label: "has" },
//         { source: "dot_alignandfriction_JussiHallaAho", target: "subdot_alignandfriction_1_JussiHallaAho", type: "Dot-SubDot", label: "point" },
//         { source: "person_JussiHallaAho", target: "dot_conclusions_JussiHallaAho", type: "Person-Dot", label: "has" },
//         { source: "dot_conclusions_JussiHallaAho", target: "subdot_conclusions_1_JussiHallaAho", type: "Dot-SubDot", label: "point" },
  
//         // ---------------------------
//         // Edges for Nathali Ahlstrom
//         // ---------------------------
//         { source: "person_NathaliAhlstrom", target: "dot_strategy_NathaliAhlstrom", type: "Person-Dot", label: "has" },
//         { source: "dot_strategy_NathaliAhlstrom", target: "subdot_strategy_1_NathaliAhlstrom", type: "Dot-SubDot", label: "point" },
//         { source: "person_NathaliAhlstrom", target: "dot_uaestatements_NathaliAhlstrom", type: "Person-Dot", label: "has" },
//         { source: "dot_uaestatements_NathaliAhlstrom", target: "subdot_uaestatements_1_NathaliAhlstrom", type: "Dot-SubDot", label: "point" },
//         { source: "person_NathaliAhlstrom", target: "dot_roleinrelations_NathaliAhlstrom", type: "Person-Dot", label: "has" },
//         { source: "dot_roleinrelations_NathaliAhlstrom", target: "subdot_roleinrelations_1_NathaliAhlstrom", type: "Dot-SubDot", label: "point" },
//         { source: "person_NathaliAhlstrom", target: "dot_bilaterals_NathaliAhlstrom", type: "Person-Dot", label: "has" },
//         { source: "dot_bilaterals_NathaliAhlstrom", target: "subdot_bilaterals_1_NathaliAhlstrom", type: "Dot-SubDot", label: "point" },
//         { source: "person_NathaliAhlstrom", target: "dot_alignandfriction_NathaliAhlstrom", type: "Person-Dot", label: "has" },
//         { source: "dot_alignandfriction_NathaliAhlstrom", target: "subdot_alignandfriction_1_NathaliAhlstrom", type: "Dot-SubDot", label: "point" },
//         { source: "person_NathaliAhlstrom", target: "dot_conclusions_NathaliAhlstrom", type: "Person-Dot", label: "has" },
//         { source: "dot_conclusions_NathaliAhlstrom", target: "subdot_conclusions_1_NathaliAhlstrom", type: "Dot-SubDot", label: "point" },
  
//         // ---------------------------
//         // Edges for Seppo Vikström
//         // ---------------------------
//         { source: "person_SeppoVikstrom", target: "dot_strategy_SeppoVikstrom", type: "Person-Dot", label: "has" },
//         { source: "dot_strategy_SeppoVikstrom", target: "subdot_strategy_1_SeppoVikstrom", type: "Dot-SubDot", label: "point" },
//         { source: "person_SeppoVikstrom", target: "dot_uaestatements_SeppoVikstrom", type: "Person-Dot", label: "has" },
//         { source: "dot_uaestatements_SeppoVikstrom", target: "subdot_uaestatements_1_SeppoVikstrom", type: "Dot-SubDot", label: "point" },
//         { source: "person_SeppoVikstrom", target: "dot_roleinrelations_SeppoVikstrom", type: "Person-Dot", label: "has" },
//         { source: "dot_roleinrelations_SeppoVikstrom", target: "subdot_roleinrelations_1_SeppoVikstrom", type: "Dot-SubDot", label: "point" },
//         { source: "person_SeppoVikstrom", target: "dot_bilaterals_SeppoVikstrom", type: "Person-Dot", label: "has" },
//         { source: "dot_bilaterals_SeppoVikstrom", target: "subdot_bilaterals_1_SeppoVikstrom", type: "Dot-SubDot", label: "point" },
//         { source: "person_SeppoVikstrom", target: "dot_alignandfriction_SeppoVikstrom", type: "Person-Dot", label: "has" },
//         { source: "dot_alignandfriction_SeppoVikstrom", target: "subdot_alignandfriction_1_SeppoVikstrom", type: "Dot-SubDot", label: "point" },
//         { source: "person_SeppoVikstrom", target: "dot_conclusions_SeppoVikstrom", type: "Person-Dot", label: "has" },
//         { source: "dot_conclusions_SeppoVikstrom", target: "subdot_conclusions_1_SeppoVikstrom", type: "Dot-SubDot", label: "point" },
  
//         // ---------------------------
//         // Edges for Lassi Noponen
//         // ---------------------------
//         { source: "person_LassiNoponen", target: "dot_strategy_LassiNoponen", type: "Person-Dot", label: "has" },
//         { source: "dot_strategy_LassiNoponen", target: "subdot_strategy_1_LassiNoponen", type: "Dot-SubDot", label: "point" },
//         { source: "person_LassiNoponen", target: "dot_uaestatements_LassiNoponen", type: "Person-Dot", label: "has" },
//         { source: "dot_uaestatements_LassiNoponen", target: "subdot_uaestatements_1_LassiNoponen", type: "Dot-SubDot", label: "point" },
//         { source: "person_LassiNoponen", target: "dot_roleinrelations_LassiNoponen", type: "Person-Dot", label: "has" },
//         { source: "dot_roleinrelations_LassiNoponen", target: "subdot_roleinrelations_1_LassiNoponen", type: "Dot-SubDot", label: "point" },
//         { source: "person_LassiNoponen", target: "dot_bilaterals_LassiNoponen", type: "Person-Dot", label: "has" },
//         { source: "dot_bilaterals_LassiNoponen", target: "subdot_bilaterals_1_LassiNoponen", type: "Dot-SubDot", label: "point" },
//         { source: "person_LassiNoponen", target: "dot_alignandfriction_LassiNoponen", type: "Person-Dot", label: "has" },
//         { source: "dot_alignandfriction_LassiNoponen", target: "subdot_alignandfriction_1_LassiNoponen", type: "Dot-SubDot", label: "point" },
//         { source: "person_LassiNoponen", target: "dot_conclusions_LassiNoponen", type: "Person-Dot", label: "has" },
//         { source: "dot_conclusions_LassiNoponen", target: "subdot_conclusions_1_LassiNoponen", type: "Dot-SubDot", label: "point" },
  
//         // ---------------------------
//         // Edges for Markus Rauramo
//         // ---------------------------
//         { source: "person_MarkusRauramo", target: "dot_strategy_MarkusRauramo", type: "Person-Dot", label: "has" },
//         { source: "dot_strategy_MarkusRauramo", target: "subdot_strategy_1_MarkusRauramo", type: "Dot-SubDot", label: "point" },
//         { source: "person_MarkusRauramo", target: "dot_uaestatements_MarkusRauramo", type: "Person-Dot", label: "has" },
//         { source: "dot_uaestatements_MarkusRauramo", target: "subdot_uaestatements_1_MarkusRauramo", type: "Dot-SubDot", label: "point" },
//         { source: "person_MarkusRauramo", target: "dot_roleinrelations_MarkusRauramo", type: "Person-Dot", label: "has" },
//         { source: "dot_roleinrelations_MarkusRauramo", target: "subdot_roleinrelations_1_MarkusRauramo", type: "Dot-SubDot", label: "point" },
//         { source: "person_MarkusRauramo", target: "dot_bilaterals_MarkusRauramo", type: "Person-Dot", label: "has" },
//         { source: "dot_bilaterals_MarkusRauramo", target: "subdot_bilaterals_1_MarkusRauramo", type: "Dot-SubDot", label: "point" },
//         { source: "person_MarkusRauramo", target: "dot_alignandfriction_MarkusRauramo", type: "Person-Dot", label: "has" },
//         { source: "dot_alignandfriction_MarkusRauramo", target: "subdot_alignandfriction_1_MarkusRauramo", type: "Dot-SubDot", label: "point" },
//         { source: "person_MarkusRauramo", target: "dot_conclusions_MarkusRauramo", type: "Person-Dot", label: "has" },
//         { source: "dot_conclusions_MarkusRauramo", target: "subdot_conclusions_1_MarkusRauramo", type: "Dot-SubDot", label: "point" },
  
//         // ---------------------------
//         // Edges for Jubo Romakkaniemi
//         // ---------------------------
//         { source: "person_JuboRomakkaniemi", target: "dot_strategy_JuboRomakkaniemi", type: "Person-Dot", label: "has" },
//         { source: "dot_strategy_JuboRomakkaniemi", target: "subdot_strategy_1_JuboRomakkaniemi", type: "Dot-SubDot", label: "point" },
//         { source: "person_JuboRomakkaniemi", target: "dot_uaestatements_JuboRomakkaniemi", type: "Person-Dot", label: "has" },
//         { source: "dot_uaestatements_JuboRomakkaniemi", target: "subdot_uaestatements_1_JuboRomakkaniemi", type: "Dot-SubDot", label: "point" },
//         { source: "person_JuboRomakkaniemi", target: "dot_roleinrelations_JuboRomakkaniemi", type: "Person-Dot", label: "has" },
//         { source: "dot_roleinrelations_JuboRomakkaniemi", target: "subdot_roleinrelations_1_JuboRomakkaniemi", type: "Dot-SubDot", label: "point" },
//         { source: "person_JuboRomakkaniemi", target: "dot_bilaterals_JuboRomakkaniemi", type: "Person-Dot", label: "has" },
//         { source: "dot_bilaterals_JuboRomakkaniemi", target: "subdot_bilaterals_1_JuboRomakkaniemi", type: "Dot-SubDot", label: "point" },
//         { source: "person_JuboRomakkaniemi", target: "dot_alignandfriction_JuboRomakkaniemi", type: "Person-Dot", label: "has" },
//         { source: "dot_alignandfriction_JuboRomakkaniemi", target: "subdot_alignandfriction_1_JuboRomakkaniemi", type: "Dot-SubDot", label: "point" },
//         { source: "person_JuboRomakkaniemi", target: "dot_conclusions_JuboRomakkaniemi", type: "Person-Dot", label: "has" },
//         { source: "dot_conclusions_JuboRomakkaniemi", target: "subdot_conclusions_1_JuboRomakkaniemi", type: "Dot-SubDot", label: "point" }
//       ]
//     }
//   };
  





//   // Set container height
//   useEffect(() => {
//     setContainerHeight(600);
//   }, []);

//   useEffect(() => {
//     if (!svgRef.current) return;

//     // Clear previous visualisation
//     d3.select(svgRef.current).selectAll("*").remove();

//     const svg = d3.select(svgRef.current);
//     const width = parseInt(svg.style("width"));
//     const height = containerHeight - 20; // account for padding
//     const centerX = width / 2;
//     const centerY = height / 2 - 30;

//     // For this demo, we ignore selectedFaculty and just use our data
//     const relevantNodes = data.graph.nodes;
//     const relevantEdges = data.graph.edges;

//     // Create a container group for zoom/pan
//     const containerGroup = svg.append("g").attr("class", "container-group");

//     // Identify the single Person node and Dot nodes
//     const dotNodes = relevantNodes.filter(n => n.type === "Dot");
//     const personNode = relevantNodes.find(n => n.type === "Person");

//     // Initial positions
//     relevantNodes.forEach(node => {
//       if (node.type === "Person") {
//         node.x = centerX;
//         node.y = centerY;
//       }
//     });

//     // Circle layout for Dot nodes around the person
//     dotNodes.forEach((node, i) => {
//       const angle = (i / dotNodes.length) * 2 * Math.PI;
//       const radius = 150;
//       node.x = centerX + radius * Math.cos(angle);
//       node.y = centerY + radius * Math.sin(angle);
//     });

//     // SubDot nodes relative to each Dot
//     const dotIdToNode = {};
//     dotNodes.forEach(node => {
//       dotIdToNode[node.id] = node;
//     });
//     const subDotGroups = {};
//     relevantNodes
//       .filter(n => n.type === "SubDot")
//       .forEach(subdot => {
//         const parentEdge = relevantEdges.find(
//           edge => edge.target === subdot.id && edge.type === "Dot-SubDot"
//         );
//         if (parentEdge) {
//           if (!subDotGroups[parentEdge.source]) {
//             subDotGroups[parentEdge.source] = [];
//           }
//           subDotGroups[parentEdge.source].push(subdot);
//         }
//       });
//     Object.keys(subDotGroups).forEach(dotId => {
//       const parent = dotIdToNode[dotId];
//       const children = subDotGroups[dotId];
//       children.forEach((child, j) => {
//         const angle = (j / children.length) * 2 * Math.PI;
//         const radius = 50;
//         child.x = parent.x + radius * Math.cos(angle);
//         child.y = parent.y + radius * Math.sin(angle);
//       });
//     });

//     // Tooltip group (text only, no rectangle)
//     const tooltip = containerGroup
//       .append("g")
//       .attr("class", "tooltip")
//       .style("opacity", 0);

//     const tooltipText = tooltip
//       .append("text")
//       .attr("fill", "#333")
//       .style("font-size", "12px");

//     // Force simulation
//     const simulation = d3.forceSimulation(relevantNodes)
//       .force(
//         "link",
//         d3.forceLink(relevantEdges)
//           .id(d => d.id)
//           .distance(d => {
//             if (d.type === "Person-Dot") return 150;
//             if (d.type === "Dot-SubDot") return 50;
//             return 80;
//           })
//       )
//       .force("charge", d3.forceManyBody().strength(-200))
//       .force("center", d3.forceCenter(centerX, centerY))
//       .force("collide", d3.forceCollide().radius(35))
//       .on("tick", ticked);

//     // Link elements
//     const linkGroup = containerGroup.append("g").attr("class", "links");
//     const link = linkGroup
//       .selectAll("g")
//       .data(relevantEdges)
//       .enter()
//       .append("g");

//     link
//       .append("line")
//       .attr("stroke", "#999")
//       .attr("stroke-opacity", 0.6)
//       .attr("stroke-width", 2);

//     link
//       .append("text")
//       .attr("font-size", "10px")
//       .attr("fill", "#666")
//       .attr("text-anchor", "middle")
//       .attr("dy", -5)
//       .text(d => d.label);

//     // Node elements
//     const nodeGroup = containerGroup.append("g").attr("class", "nodes");
//     const node = nodeGroup
//       .selectAll(".node")
//       .data(relevantNodes)
//       .enter()
//       .append("g")
//       .attr("class", "node")
//       .call(
//         d3.drag()
//           .on("start", dragstarted)
//           .on("drag", dragged)
//           .on("end", dragended)
//       )
//       .on("mouseover", function(event, d) {
//         // Only show tooltip for Person or Dot nodes
//         if (d.type === "Person" || d.type === "Dot") {
//           tooltipText.text(d.metadata?.hoverText || d.label);
//           tooltip
//             .attr("transform", `translate(${d.x + 20},${d.y - 30})`)
//             .transition()
//             .duration(200)
//             .style("opacity", 1);

//           // Highlight connected links
//           link.selectAll("line")
//             .style("stroke", l => (l.source.id === d.id || l.target.id === d.id) ? "#333" : "#999")
//             .style("stroke-width", l => (l.source.id === d.id || l.target.id === d.id) ? 3 : 2)
//             .style("stroke-opacity", l => (l.source.id === d.id || l.target.id === d.id) ? 1 : 0.2);
//         }
//       })
//       .on("mouseout", function() {
//         tooltip.transition().duration(200).style("opacity", 0);
//         link.selectAll("line")
//           .style("stroke", "#999")
//           .style("stroke-width", 2)
//           .style("stroke-opacity", 0.6);
//       });

//     // Circles for nodes
//     node
//       .append("circle")
//       .attr("r", d => (d.type === "Person" ? 25 : d.type === "Dot" ? 20 : 15))
//       .attr("fill", d => {
//         if (d.type === "Person") return "#5B8FF9"; // blue
//         if (d.type === "Dot") return "#66C18C";   // green
//         return "#FFA500";                         // orange for SubDot
//       })
//       .attr("stroke", "#fff")
//       .attr("stroke-width", 1.5);

//     // Single-line labels, centred
//     node
//       .append("text")
//       .attr("text-anchor", "middle")
//       .attr("dominant-baseline", "middle")
//       .attr("fill", "#333")
//       .attr("font-size", d => {
//         if (d.type === "Person") return "12px";
//         if (d.type === "Dot") return "10px";
//         return "8px"; // SubDot
//       })
//       .text(d => d.label);

//     // Zoom and pan (doesn't reset simulation)
//     const zoom = d3.zoom()
//       .scaleExtent([0.5, 3])
//       .on("zoom", (event) => {
//         containerGroup.attr("transform", event.transform);
//       });
//     svg.call(zoom);

//     // Ticked function
//     function ticked() {
//       relevantNodes.forEach(d => {
//         d.x = Math.max(30, Math.min(width - 30, d.x));
//         d.y = Math.max(30, Math.min(height - 60, d.y));
//       });

//       link.selectAll("line")
//         .attr("x1", d => d.source.x)
//         .attr("y1", d => d.source.y)
//         .attr("x2", d => d.target.x)
//         .attr("y2", d => d.target.y);

//       link.selectAll("text")
//         .attr("x", d => (d.source.x + d.target.x) / 2)
//         .attr("y", d => (d.source.y + d.target.y) / 2);

//       node.attr("transform", d => `translate(${d.x},${d.y})`);
//     }

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
//     }
//   }, [containerHeight]);

//   return (
//     <div className="w-full" ref={containerRef}>
//       <h3 className="text-xl font-semibold text-gray-700 uppercase mb-2">OVERVIEW</h3>
//       <div
//         className="border border-gray-200 rounded-lg bg-white p-2"
//         style={{ height: `${containerHeight}px` }}
//       >
//         <svg ref={svgRef} width="100%" height="100%" />
//       </div>
//     </div>
//   );
// };

// export default MinisterNetwork;

























































import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

const MinisterNetwork = ({ selectedFaculty }) => {
  const svgRef = useRef(null);
  const containerRef = useRef(null);
  const [containerHeight, setContainerHeight] = useState(320);

  const data = {
    graph: {
      nodes: [
        // ---------------------------
        // Profile: Sandra Bergqvist
        // ---------------------------
        {
          id: "person_SandraBergqvist",
          label: "Sandra Bergqvist",
          type: "Person",
          metadata: {
            shortBio: "Minister of Youth, Sport and Physical Activity",
            title: "Minister of Youth, Sport and Physical Activity",
            hoverText:
              "Serves as Minister since June 2023, previously active in municipal politics and academia. Focuses on youth engagement, sports, and community well-being."
          }
        },
        {
          id: "dot_strategy_SandraBergqvist",
          label: "Strategy",
          type: "Dot",
          metadata: {
            hoverText:
              "Key strategy: Serves as Minister since June 2023, previously active in municipal politics and academia. Focuses on youth engagement, sports, and community well-being."
          }
        },
        {
          id: "subdot_strategy_1_SandraBergqvist",
          label:
            "Serves as Minister since June 2023, previously active in municipal politics and academia",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of strategy." }
        },
        {
          id: "subdot_strategy_2_SandraBergqvist",
          label: "Focuses on youth engagement, sports, and community well-being",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of strategy." }
        },
        {
          id: "dot_uaestatements_SandraBergqvist",
          label: "UAE Statements",
          type: "Dot",
          metadata: {
            hoverText:
              "Key UAE statements: Statements about the UAE have been nonobtrusive; Finland generally sees the UAE as a partner for sports diplomacy and youth programs."
          }
        },
        {
          id: "subdot_uaestatements_1_SandraBergqvist",
          label:
            "Statements about the UAE have been nonobtrusive; Finland generally sees the UAE as a partner for sports diplomacy and youth programs",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of UAE statements." }
        },
        {
          id: "dot_roleinrelations_SandraBergqvist",
          label: "Role in Relations",
          type: "Dot",
          metadata: {
            hoverText:
              "Key role: Ministry involvement in youth exchanges, sports diplomacy, and inclusivity (e.g. Special Olympics World Games Abu Dhabi 2019). Potential for shared best practices in youth empowerment."
          }
        },
        {
          id: "subdot_roleinrelations_1_SandraBergqvist",
          label:
            "Ministry involvement in youth exchanges, sports diplomacy, and inclusivity (e.g. Special Olympics World Games Abu Dhabi 2019)",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of role in relations." }
        },
        {
          id: "subdot_roleinrelations_2_SandraBergqvist",
          label: "Potential for shared best practices in youth empowerment",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of role in relations." }
        },
        {
          id: "dot_bilaterals_SandraBergqvist",
          label: "Bilaterals",
          type: "Dot",
          metadata: {
            hoverText:
              "Key bilaterals: Collaboration primarily facilitated through cultural, educational, and sports events, including Finland’s participation in Special Olympics 2019 in Abu Dhabi."
          }
        },
        {
          id: "subdot_bilaterals_1_SandraBergqvist",
          label:
            "Collaboration primarily facilitated through cultural, educational, and sports events, including Finland’s participation in Special Olympics 2019 in Abu Dhabi",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of bilaterals." }
        },
        {
          id: "dot_alignandfriction_SandraBergqvist",
          label: "Align and Friction",
          type: "Dot",
          metadata: {
            hoverText:
              "Key align and friction: Both countries value sports as a unifying force, focusing on inclusivity and community building. Minimal friction; differences in approach to funding or volunteer-driven vs. government-driven sports programmes are seen as opportunities for exchange."
          }
        },
        {
          id: "subdot_alignandfriction_1_SandraBergqvist",
          label:
            "Both countries value sports as a unifying force, focusing on inclusivity and community building",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of align and friction." }
        },
        {
          id: "subdot_alignandfriction_2_SandraBergqvist",
          label:
            "Minimal friction; differences in approach to funding or volunteer-driven vs. government-driven sports programmes are seen as opportunities for exchange",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of align and friction." }
        },
        {
          id: "dot_conclusions_SandraBergqvist",
          label: "Conclusions",
          type: "Dot",
          metadata: {
            hoverText:
              "Key conclusions: Committed to expanding sports-based collaboration, youth exchanges, and inclusive athletic events, reinforcing mutual goodwill."
          }
        },
        {
          id: "subdot_conclusions_1_SandraBergqvist",
          label:
            "Committed to expanding sports-based collaboration, youth exchanges, and inclusive athletic events, reinforcing mutual goodwill",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of conclusions." }
        },
  
        // ---------------------------
        // Profile: Anna-Kaisa Ikonen
        // ---------------------------
        {
          id: "person_Anna-KaisaIkonen",
          label: "Anna-Kaisa Ikonen",
          type: "Person",
          metadata: {
            shortBio: "Minister of Local and Regional Government",
            title: "Minister of Local and Regional Government",
            hoverText:
              "Serves as Minister of Local and Regional Government since June 2023. Former mayor of Tampere with deep experience in governance and public administration."
          }
        },
        {
          id: "dot_strategy_AnnaKaisaIkonen",
          label: "Strategy",
          type: "Dot",
          metadata: {
            hoverText:
              "Key strategy: Serves as Minister of Local and Regional Government since June 2023. Former mayor of Tampere with deep experience in governance and public administration."
          }
        },
        {
          id: "subdot_strategy_1_AnnaKaisaIkonen",
          label:
            "Serves as Minister of Local and Regional Government since June 2023",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of strategy." }
        },
        {
          id: "subdot_strategy_2_AnnaKaisaIkonen",
          label:
            "Former mayor of Tampere with deep experience in governance and public administration",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of strategy." }
        },
        {
          id: "dot_uaestatements_AnnaKaisaIkonen",
          label: "UAE Statements",
          type: "Dot",
          metadata: {
            hoverText:
              "Key UAE statements: No specific public comments on the UAE. Broader diplomatic interactions highlight Finland’s interest in sustainable urban development and smart city initiatives."
          }
        },
        {
          id: "subdot_uaestatements_1_AnnaKaisaIkonen",
          label: "No specific public comments on the UAE",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of UAE statements." }
        },
        {
          id: "subdot_uaestatements_2_AnnaKaisaIkonen",
          label:
            "Broader diplomatic interactions highlight Finland’s interest in sustainable urban development and smart city initiatives",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of UAE statements." }
        },
        {
          id: "dot_roleinrelations_AnnaKaisaIkonen",
          label: "Role in Relations",
          type: "Dot",
          metadata: {
            hoverText:
              "Key role: While not directly involved, her ministry could collaborate on urban innovation and digital transformation of public services, aligning with UAE’s push for smart governance."
          }
        },
        {
          id: "subdot_roleinrelations_1_AnnaKaisaIkonen",
          label:
            "While not directly involved, her ministry could collaborate on urban innovation and digital transformation of public services, aligning with UAE’s push for smart governance",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of role in relations." }
        },
        {
          id: "dot_bilaterals_AnnaKaisaIkonen",
          label: "Bilaterals",
          type: "Dot",
          metadata: {
            hoverText:
              "Key bilaterals: Finland–UAE relations anchored by frameworks like the 1982 Economic Cooperation Agreement, 1996 Double Taxation Agreement, and 2013 Air Services Agreement. Potential for city-level partnerships."
          }
        },
        {
          id: "subdot_bilaterals_1_AnnaKaisaIkonen",
          label:
            "Finland–UAE relations anchored by frameworks like the 1982 Economic Cooperation Agreement, 1996 Double Taxation Agreement, and 2013 Air Services Agreement",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of bilaterals." }
        },
        {
          id: "subdot_bilaterals_2_AnnaKaisaIkonen",
          label: "Potential for city-level partnerships",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of bilaterals." }
        },
        {
          id: "dot_alignandfriction_AnnaKaisaIkonen",
          label: "Align and Friction",
          type: "Dot",
          metadata: {
            hoverText:
              "Key align and friction: Both prioritise innovation and sustainable development. Cultural differences in municipal structures are navigable through mutual dialogue."
          }
        },
        {
          id: "subdot_alignandfriction_1_AnnaKaisaIkonen",
          label: "Both prioritise innovation and sustainable development",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of align and friction." }
        },
        {
          id: "subdot_alignandfriction_2_AnnaKaisaIkonen",
          label:
            "Cultural differences in municipal structures are navigable through mutual dialogue",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of align and friction." }
        },
        {
          id: "dot_conclusions_AnnaKaisaIkonen",
          label: "Conclusions",
          type: "Dot",
          metadata: {
            hoverText:
              "Key conclusions: Likely to encourage knowledge exchange on local governance, smart cities, and public-sector innovation, furthering bilateral ties in the realm of municipal collaboration."
          }
        },
        {
          id: "subdot_conclusions_1_AnnaKaisaIkonen",
          label:
            "Likely to encourage knowledge exchange on local governance, smart cities, and public-sector innovation, furthering bilateral ties in the realm of municipal collaboration",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of conclusions." }
        },
  
        // ---------------------------
        // Profile: Alexander Stubb
        // ---------------------------
        {
          id: "person_AlexanderStubb",
          label: "Alexander Stubb",
          type: "Person",
          metadata: {
            shortBio: "President of the Republic of Finland",
            title: "President of the Republic of Finland",
            hoverText:
              "Serves as President since March 2024. Has extensive experience in national and international politics, focusing on foreign policy and economic affairs. Strongly advocates for proactive global engagement and sees collaboration beyond traditional partners as essential."
          }
        },
        {
          id: "dot_strategy_AlexanderStubb",
          label: "Strategy",
          type: "Dot",
          metadata: {
            hoverText:
              "Key strategy: Serves as President since March 2024. Has extensive experience in national and international politics, focusing on foreign policy and economic affairs. Strongly advocates for proactive global engagement and sees collaboration beyond traditional partners as essential."
          }
        },
        {
          id: "subdot_strategy_1_AlexanderStubb",
          label: "Serves as President since March 2024",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of strategy." }
        },
        {
          id: "subdot_strategy_2_AlexanderStubb",
          label:
            "Has extensive experience in national and international politics, focusing on foreign policy and economic affairs",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of strategy." }
        },
        {
          id: "subdot_strategy_3_AlexanderStubb",
          label:
            "Strongly advocates for proactive global engagement and sees collaboration beyond traditional partners as essential",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of strategy." }
        },
        {
          id: "dot_uaestatements_AlexanderStubb",
          label: "UAE Statements",
          type: "Dot",
          metadata: {
            hoverText:
              "Key UAE statements: Emphasised Finland’s keenness to strengthen ties with the UAE at his inauguration, expressing gratitude for the UAE’s participation and highlighting shared interests in education, renewable energy, and innovative governance."
          }
        },
        {
          id: "subdot_uaestatements_1_AlexanderStubb",
          label:
            "Emphasised Finland’s keenness to strengthen ties with the UAE at his inauguration, expressing gratitude for the UAE’s participation and highlighting shared interests in education, renewable energy, and innovative governance",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of UAE statements." }
        },
        {
          id: "dot_roleinrelations_AlexanderStubb",
          label: "Role in Relations",
          type: "Dot",
          metadata: {
            hoverText:
              "Key role: Shapes Finland’s overall approach, encouraging bilateral cooperation in trade, education, and technology. Works closely with the Prime Minister and other ministers to align foreign policy with practical engagements."
          }
        },
        {
          id: "subdot_roleinrelations_1_AlexanderStubb",
          label:
            "Shapes Finland’s overall approach, encouraging bilateral cooperation in trade, education, and technology",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of role in relations." }
        },
        {
          id: "subdot_roleinrelations_2_AlexanderStubb",
          label:
            "Works closely with the Prime Minister and other ministers to align foreign policy with practical engagements",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of role in relations." }
        },
        {
          id: "dot_bilaterals_AlexanderStubb",
          label: "Bilaterals",
          type: "Dot",
          metadata: {
            hoverText:
              "Key bilaterals: Supports the longstanding legal framework including the 1982 Economic Cooperation Agreement, the 1996 Double Taxation and Investment Protection treaties, and the 2013 Air Services Agreement, which underpin Finland–UAE ties."
          }
        },
        {
          id: "subdot_bilaterals_1_AlexanderStubb",
          label:
            "Supports the longstanding legal framework including the 1982 Economic Cooperation Agreement, the 1996 Double Taxation and Investment Protection treaties, and the 2013 Air Services Agreement, which underpin Finland–UAE ties",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of bilaterals." }
        },
        {
          id: "dot_alignandfriction_AlexanderStubb",
          label: "Align and Friction",
          type: "Dot",
          metadata: {
            hoverText:
              "Key align and friction: Aligned on innovation, sustainability, and clean energy. Potential friction could arise from Finland’s EU-aligned export controls (e.g. arms embargo in certain conflicts) and differing stances on global crises."
          }
        },
        {
          id: "subdot_alignandfriction_1_AlexanderStubb",
          label: "Aligned on innovation, sustainability, and clean energy",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of align and friction." }
        },
        {
          id: "subdot_alignandfriction_2_AlexanderStubb",
          label:
            "Potential friction could arise from Finland’s EU-aligned export controls (e.g. arms embargo in certain conflicts) and differing stances on global crises",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of align and friction." }
        },
        {
          id: "dot_conclusions_AlexanderStubb",
          label: "Conclusions",
          type: "Dot",
          metadata: {
            hoverText:
              "Key conclusions: Continues to view the UAE as a key Gulf partner. Seeks to deepen ties in technology, climate solutions, and education, leveraging the 50th anniversary of Finland–UAE relations as a springboard."
          }
        },
        {
          id: "subdot_conclusions_1_AlexanderStubb",
          label: "Continues to view the UAE as a key Gulf partner",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of conclusions." }
        },
        {
          id: "subdot_conclusions_2_AlexanderStubb",
          label:
            "Seeks to deepen ties in technology, climate solutions, and education, leveraging the 50th anniversary of Finland–UAE relations as a springboard",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of conclusions." }
        },
  
        // ---------------------------
        // Profile: Tuula Yrjola
        // ---------------------------
        {
          id: "person_TuulaYrjola",
          label: "Tuula Yrjola",
          type: "Person",
          metadata: {
            shortBio: "Ambassador of Finland to the UAE",
            title: "Ambassador of Finland to the UAE",
            hoverText:
              "A seasoned diplomat with three decades of experience in Eastern Europe, Central Asia, and the Middle East. Assumed ambassadorship in October 2023."
          }
        },
        {
          id: "dot_strategy_TuulaYrjola",
          label: "Strategy",
          type: "Dot",
          metadata: {
            hoverText:
              "Key strategy: A seasoned diplomat with three decades of experience in Eastern Europe, Central Asia, and the Middle East. Assumed ambassadorship in October 2023."
          }
        },
        {
          id: "subdot_strategy_1_TuulaYrjola",
          label:
            "A seasoned diplomat with three decades of experience in Eastern Europe, Central Asia, and the Middle East",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of strategy." }
        },
        {
          id: "subdot_strategy_2_TuulaYrjola",
          label: "Assumed ambassadorship in October 2023",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of strategy." }
        },
        {
          id: "dot_uaestatements_TuulaYrjola",
          label: "UAE Statements",
          type: "Dot",
          metadata: {
            hoverText:
              "Key UAE statements: Emphasises strengthening bilateral relations, promoting Finnish business interests (Team Finland), and monitoring political developments in the UAE."
          }
        },
        {
          id: "subdot_uaestatements_1_TuulaYrjola",
          label:
            "Emphasises strengthening bilateral relations, promoting Finnish business interests (Team Finland), and monitoring political developments in the UAE",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of UAE statements." }
        },
        {
          id: "dot_roleinrelations_TuulaYrjola",
          label: "Role in Relations",
          type: "Dot",
          metadata: {
            hoverText:
              "Key role: Leads the Finnish Embassy in Abu Dhabi, overseeing economic diplomacy, political engagement, and consular services. Acts as the principal link between Finland and the UAE."
          }
        },
        {
          id: "subdot_roleinrelations_1_TuulaYrjola",
          label:
            "Leads the Finnish Embassy in Abu Dhabi, overseeing economic diplomacy, political engagement, and consular services",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of role in relations." }
        },
        {
          id: "subdot_roleinrelations_2_TuulaYrjola",
          label: "Acts as the principal link between Finland and the UAE",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of role in relations." }
        },
        {
          id: "dot_bilaterals_TuulaYrjola",
          label: "Bilaterals",
          type: "Dot",
          metadata: {
            hoverText:
              "Key bilaterals: Actively supports the existing treaties (economic, taxation, air services) and fosters new MoUs in education, energy, and innovation."
          }
        },
        {
          id: "subdot_bilaterals_1_TuulaYrjola",
          label:
            "Actively supports the existing treaties (economic, taxation, air services) and fosters new MoUs in education, energy, and innovation",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of bilaterals." }
        },
        {
          id: "dot_alignandfriction_TuulaYrjola",
          label: "Align and Friction",
          type: "Dot",
          metadata: {
            hoverText:
              "Key align and friction: Shares Finland’s focus on sustainability and innovation, echoing UAE’s Vision 2030. Minimal friction; possible differences in approach to regional conflicts or human rights are managed diplomatically."
          }
        },
        {
          id: "subdot_alignandfriction_1_TuulaYrjola",
          label:
            "Shares Finland’s focus on sustainability and innovation, echoing UAE’s Vision 2030",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of align and friction." }
        },
        {
          id: "subdot_alignandfriction_2_TuulaYrjola",
          label:
            "Minimal friction; possible differences in approach to regional conflicts or human rights are managed diplomatically",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of align and friction." }
        },
        {
          id: "dot_conclusions_TuulaYrjola",
          label: "Conclusions",
          type: "Dot",
          metadata: {
            hoverText:
              "Key conclusions: Aims to deepen trade, innovation, and cultural ties, ensuring Finland’s presence grows in alignment with UAE’s development goals."
          }
        },
        {
          id: "subdot_conclusions_1_TuulaYrjola",
          label:
            "Aims to deepen trade, innovation, and cultural ties, ensuring Finland’s presence grows in alignment with UAE’s development goals",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of conclusions." }
        },
  
        // ---------------------------
        // Profile: Anna-Mari Wong Hamalainen
        // ---------------------------
        {
          id: "person_Anna-MariWongHamalainen",
          label: "Anna-Mari Wong Hamalainen",
          type: "Person",
          metadata: {
            shortBio: "Director of Foreign and Security Policy",
            title: "Director of Foreign and Security Policy",
            hoverText:
              "Serves as Director of Foreign and Security Policy, with a background in NATO issues and EU foreign policy. Advises the President’s Cabinet on security strategies."
          }
        },
        {
          id: "dot_strategy_AnnaMariWongHamalainen",
          label: "Strategy",
          type: "Dot",
          metadata: {
            hoverText:
              "Key strategy: Serves as Director of Foreign and Security Policy, with a background in NATO issues and EU foreign policy. Advises the President’s Cabinet on security strategies."
          }
        },
        {
          id: "subdot_strategy_1_AnnaMariWongHamalainen",
          label:
            "Serves as Director of Foreign and Security Policy, with a background in NATO issues and EU foreign policy",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of strategy." }
        },
        {
          id: "subdot_strategy_2_AnnaMariWongHamalainen",
          label: "Advises the President’s Cabinet on security strategies",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of strategy." }
        },
        {
          id: "dot_uaestatements_AnnaMariWongHamalainen",
          label: "UAE Statements",
          type: "Dot",
          metadata: {
            hoverText:
              "Key UAE statements: No publicly documented statements specific to the UAE. Focuses mainly on European security and crisis management."
          }
        },
        {
          id: "subdot_uaestatements_1_AnnaMariWongHamalainen",
          label: "No publicly documented statements specific to the UAE",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of UAE statements." }
        },
        {
          id: "dot_roleinrelations_AnnaMariWongHamalainen",
          label: "Role in Relations",
          type: "Dot",
          metadata: {
            hoverText:
              "Key role: Contributes to broader frameworks shaping Finland’s foreign relations, which can indirectly influence cooperation with the UAE, especially in security dialogues."
          }
        },
        {
          id: "subdot_roleinrelations_1_AnnaMariWongHamalainen",
          label:
            "Contributes to broader frameworks shaping Finland’s foreign relations",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of role in relations." }
        },
        {
          id: "dot_bilaterals_AnnaMariWongHamalainen",
          label: "Bilaterals",
          type: "Dot",
          metadata: {
            hoverText:
              "Key bilaterals: Not directly involved in forging UAE agreements; however, shapes policy frameworks that may underpin new or existing treaties."
          }
        },
        {
          id: "subdot_bilaterals_1_AnnaMariWongHamalainen",
          label:
            "Not directly involved in forging UAE agreements; however, shapes policy frameworks that may underpin new or existing treaties",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of bilaterals." }
        },
        {
          id: "dot_alignandfriction_AnnaMariWongHamalainen",
          label: "Align and Friction",
          type: "Dot",
          metadata: {
            hoverText:
              "Key align and friction: Finland’s stance on EU security issues might differ from UAE’s neutral or pragmatic positions in certain regional conflicts. No major friction reported."
          }
        },
        {
          id: "subdot_alignandfriction_1_AnnaMariWongHamalainen",
          label:
            "Finland’s stance on EU security issues might differ from UAE’s neutral or pragmatic positions in certain regional conflicts",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of align and friction." }
        },
        {
          id: "dot_conclusions_AnnaMariWongHamalainen",
          label: "Conclusions",
          type: "Dot",
          metadata: {
            hoverText:
              "Key conclusions: Remains supportive of collaborative engagements with Gulf nations but focuses primarily on NATO/EU security agendas."
          }
        },
        {
          id: "subdot_conclusions_1_AnnaMariWongHamalainen",
          label:
            "Remains supportive of collaborative engagements with Gulf nations but focuses primarily on NATO/EU security agendas",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of conclusions." }
        },
  
        // ---------------------------
        // Profile: Ville Brumme
        // ---------------------------
        {
          id: "person_VilleBrumme",
          label: "Ville Brumme",
          type: "Person",
          metadata: {
            shortBio: "Director of Peace Mediation",
            title: "Director of Peace Mediation",
            hoverText:
              "Appointed by President Stubb in 2024. Formerly at CMI, overseeing mediation projects in Africa, the Middle East, and Eurasia. Brings deep conflict resolution expertise."
          }
        },
        {
          id: "dot_strategy_VilleBrumme",
          label: "Strategy",
          type: "Dot",
          metadata: {
            hoverText:
              "Key strategy: Appointed by President Stubb in 2024. Formerly at CMI, overseeing mediation projects in Africa, the Middle East, and Eurasia. Brings deep conflict resolution expertise."
          }
        },
        {
          id: "subdot_strategy_1_VilleBrumme",
          label:
            "Appointed by President Stubb in 2024",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of strategy." }
        },
        {
          id: "subdot_strategy_2_VilleBrumme",
          label:
            "Formerly at CMI, overseeing mediation projects in Africa, the Middle East, and Eurasia",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of strategy." }
        },
        {
          id: "subdot_strategy_3_VilleBrumme",
          label: "Brings deep conflict resolution expertise",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of strategy." }
        },
        {
          id: "dot_uaestatements_VilleBrumme",
          label: "UAE Statements",
          type: "Dot",
          metadata: {
            hoverText:
              "Key UAE statements: Policies reflect respect for the UAE’s growing mediation role, especially in the Middle East. Acknowledges UAE’s discreet facilitation style and shared commitment to peaceful resolution."
          }
        },
        {
          id: "subdot_uaestatements_1_VilleBrumme",
          label:
            "Policies reflect respect for the UAE’s growing mediation role, especially in the Middle East",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of UAE statements." }
        },
        {
          id: "subdot_uaestatements_2_VilleBrumme",
          label:
            "Acknowledges UAE’s discreet facilitation style and shared commitment to peaceful resolution",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of UAE statements." }
        },
        {
          id: "dot_roleinrelations_VilleBrumme",
          label: "Role in Relations",
          type: "Dot",
          metadata: {
            hoverText:
              "Key role: Coordinates high-level mediation initiatives, working with Finnish MFA and civil society. Sees the UAE as a like-minded actor in diplomatic solutions, especially in the Horn of Africa."
          }
        },
        {
          id: "subdot_roleinrelations_1_VilleBrumme",
          label:
            "Coordinates high-level mediation initiatives, working with Finnish MFA and civil society",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of role in relations." }
        },
        {
          id: "subdot_roleinrelations_2_VilleBrumme",
          label:
            "Sees the UAE as a like-minded actor in diplomatic solutions, especially in the Horn of Africa",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of role in relations." }
        },
        {
          id: "dot_bilaterals_VilleBrumme",
          label: "Bilaterals",
          type: "Dot",
          metadata: {
            hoverText:
              "Key bilaterals: Engages through the Finland–UAE Political Consultation Committee. Visited Abu Dhabi in October 2024, meeting Dr. Anwar Gargash to enhance dialogue on conflict resolution."
          }
        },
        {
          id: "subdot_bilaterals_1_VilleBrumme",
          label:
            "Engages through the Finland–UAE Political Consultation Committee",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of bilaterals." }
        },
        {
          id: "subdot_bilaterals_2_VilleBrumme",
          label:
            "Visited Abu Dhabi in October 2024, meeting Dr. Anwar Gargash to enhance dialogue on conflict resolution",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of bilaterals." }
        },
        {
          id: "dot_alignandfriction_VilleBrumme",
          label: "Align and Friction",
          type: "Dot",
          metadata: {
            hoverText:
              "Key align and friction: Both countries value discreet, outcome-oriented mediation. Potential friction might arise if the UAE’s mediation approaches differ from Finland’s inclusivity norms, but so far cooperation is constructive."
          }
        },
        {
          id: "subdot_alignandfriction_1_VilleBrumme",
          label:
            "Both countries value discreet, outcome-oriented mediation",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of align and friction." }
        },
        {
          id: "subdot_alignandfriction_2_VilleBrumme",
          label:
            "Potential friction might arise if the UAE’s mediation approaches differ from Finland’s inclusivity norms, but so far cooperation is constructive",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of align and friction." }
        },
        {
          id: "dot_conclusions_VilleBrumme",
          label: "Conclusions",
          type: "Dot",
          metadata: {
            hoverText:
              "Key conclusions: Intends to expand joint mediation efforts, leveraging Finland’s NGO networks and the UAE’s regional influence for broader conflict resolution initiatives."
          }
        },
        {
          id: "subdot_conclusions_1_VilleBrumme",
          label:
            "Intends to expand joint mediation efforts, leveraging Finland’s NGO networks and the UAE’s regional influence for broader conflict resolution initiatives",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of conclusions." }
        },
  
        // ---------------------------
        // Profile: Elina Valtonen
        // ---------------------------
        {
          id: "person_ElinaValtonen",
          label: "Elina Valtonen",
          type: "Person",
          metadata: {
            shortBio: "Minister of Foreign Affairs",
            title: "Minister of Foreign Affairs",
            hoverText:
              "Holds significant influence in shaping Finland’s foreign policy during NATO accession. Has a background in investment banking and economics, emphasising pragmatic, globally oriented diplomacy."
          }
        },
        {
          id: "dot_strategy_ElinaValtonen",
          label: "Strategy",
          type: "Dot",
          metadata: {
            hoverText:
              "Key strategy: Holds significant influence in shaping Finland’s foreign policy during NATO accession. Has a background in investment banking and economics, emphasising pragmatic, globally oriented diplomacy."
          }
        },
        {
          id: "subdot_strategy_1_ElinaValtonen",
          label:
            "Holds significant influence in shaping Finland’s foreign policy during NATO accession",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of strategy." }
        },
        {
          id: "subdot_strategy_2_ElinaValtonen",
          label:
            "Has a background in investment banking and economics, emphasising pragmatic, globally oriented diplomacy",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of strategy." }
        },
        {
          id: "dot_uaestatements_ElinaValtonen",
          label: "UAE Statements",
          type: "Dot",
          metadata: {
            hoverText:
              "Key UAE statements: Met with UAE Foreign Minister in September 2023 at UNGA to discuss cooperation in economic, trade, cultural, and energy fields. Signals a positive and pragmatic approach to Gulf relations."
          }
        },
        {
          id: "subdot_uaestatements_1_ElinaValtonen",
          label:
            "Met with UAE Foreign Minister in September 2023 at UNGA to discuss cooperation in economic, trade, cultural, and energy fields",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of UAE statements." }
        },
        {
          id: "dot_roleinrelations_ElinaValtonen",
          label: "Role in Relations",
          type: "Dot",
          metadata: {
            hoverText:
              "Key role: Guides Finland’s diplomatic priorities, coordinating with other ministries to expand trade and educational links with the UAE. Oversees the Joint Committee mechanism that fosters bilateral collaboration."
          }
        },
        {
          id: "subdot_roleinrelations_1_ElinaValtonen",
          label:
            "Guides Finland’s diplomatic priorities, coordinating with other ministries to expand trade and educational links with the UAE",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of role in relations." }
        },
        {
          id: "dot_bilaterals_ElinaValtonen",
          label: "Bilaterals",
          type: "Dot",
          metadata: {
            hoverText:
              "Key bilaterals: Supports the 1982 Economic Cooperation Agreement, the 1996 Double Taxation, the 2013 Air Services Agreement, and the 2022 Energy Cooperation MoU. Led the second Joint Committee meeting in Helsinki in November 2024."
          }
        },
        {
          id: "subdot_bilaterals_1_ElinaValtonen",
          label:
            "Supports the 1982 Economic Cooperation Agreement, the 1996 Double Taxation, the 2013 Air Services Agreement, and the 2022 Energy Cooperation MoU",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of bilaterals." }
        },
        {
          id: "dot_alignandfriction_ElinaValtonen",
          label: "Align and Friction",
          type: "Dot",
          metadata: {
            hoverText:
              "Key align and friction: Strong alignment in tech, sustainability, and energy diversification. Some differences may surface over Finland’s strict stance on Russia-related sanctions or defence exports."
          }
        },
        {
          id: "subdot_alignandfriction_1_ElinaValtonen",
          label:
            "Strong alignment in tech, sustainability, and energy diversification",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of align and friction." }
        },
        {
          id: "dot_conclusions_ElinaValtonen",
          label: "Conclusions",
          type: "Dot",
          metadata: {
            hoverText:
              "Key conclusions: Aims to solidify Finland–UAE ties by promoting commercial, educational, and innovation-driven partnerships, leveraging shared interests in renewable energy and digital transformation."
          }
        },
        {
          id: "subdot_conclusions_1_ElinaValtonen",
          label:
            "Aims to solidify Finland–UAE ties by promoting commercial, educational, and innovation-driven partnerships, leveraging shared interests in renewable energy and digital transformation",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of conclusions." }
        },
  
        // ---------------------------
        // Profile: Laila Clyne
        // ---------------------------
        {
          id: "person_LailaClyne",
          label: "Laila Clyne",
          type: "Person",
          metadata: {
            shortBio: "Diplomatic Advisor to the Minister",
            title: "Diplomatic Advisor to the Minister",
            hoverText:
              "Provides strategic counsel to the Minister for Foreign Affairs. Previously served as Second Secretary at Finland’s Permanent Mission in Geneva and as Adviser at the UN Mission in New York."
          }
        },
        {
          id: "dot_strategy_LailaClyne",
          label: "Strategy",
          type: "Dot",
          metadata: {
            hoverText:
              "Key strategy: Provides strategic counsel to the Minister for Foreign Affairs. Previously served as Second Secretary at Finland’s Permanent Mission in Geneva and as Adviser at the UN Mission in New York."
          }
        },
        {
          id: "subdot_strategy_1_LailaClyne",
          label:
            "Provides strategic counsel to the Minister for Foreign Affairs",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of strategy." }
        },
        {
          id: "dot_uaestatements_LailaClyne",
          label: "UAE Statements",
          type: "Dot",
          metadata: {
            hoverText:
              "Key UAE statements: No known public statements regarding the UAE. Works behind the scenes on broader foreign policy priorities."
          }
        },
        {
          id: "subdot_uaestatements_1_LailaClyne",
          label: "No known public statements regarding the UAE",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of UAE statements." }
        },
        {
          id: "dot_roleinrelations_LailaClyne",
          label: "Role in Relations",
          type: "Dot",
          metadata: {
            hoverText:
              "Key role: Advises on day-to-day diplomatic matters, possibly offering input on engagements with UAE officials but with minimal direct public role."
          }
        },
        {
          id: "subdot_roleinrelations_1_LailaClyne",
          label:
            "Advises on day-to-day diplomatic matters, with minimal direct public role",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of role in relations." }
        },
        {
          id: "dot_bilaterals_LailaClyne",
          label: "Bilaterals",
          type: "Dot",
          metadata: {
            hoverText:
              "Key bilaterals: Supports the minister in implementing Finland’s treaty frameworks; no direct record of involvement in UAE agreements."
          }
        },
        {
          id: "subdot_bilaterals_1_LailaClyne",
          label:
            "Supports the minister in implementing Finland’s treaty frameworks; no direct record of involvement in UAE agreements",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of bilaterals." }
        },
        {
          id: "dot_alignandfriction_LailaClyne",
          label: "Align and Friction",
          type: "Dot",
          metadata: {
            hoverText:
              "Key align and friction: No friction points documented, as her role is primarily advisory. Aligns with the ministry’s general foreign policy direction."
          }
        },
        {
          id: "subdot_alignandfriction_1_LailaClyne",
          label:
            "No friction points documented, aligns with the ministry’s general foreign policy direction",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of align and friction." }
        },
        {
          id: "dot_conclusions_LailaClyne",
          label: "Conclusions",
          type: "Dot",
          metadata: {
            hoverText:
              "Key conclusions: Expected to continue providing expert advice, ensuring continuity and coherence in Finland’s foreign relations, including with the UAE."
          }
        },
        {
          id: "subdot_conclusions_1_LailaClyne",
          label:
            "Expected to continue providing expert advice, ensuring continuity and coherence in Finland’s foreign relations, including with the UAE",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of conclusions." }
        },
  
        // ---------------------------
        // Profile: Anna-Kaisa Heikkinen
        // ---------------------------
        {
          id: "person_Anna-KaisaHeikkinen",
          label: "Anna-Kaisa Heikkinen",
          type: "Person",
          metadata: {
            shortBio: "Director General, Department for Africa, the Middle East and Latin America",
            title: "Director General, Department for Africa, the Middle East and Latin America",
            hoverText:
              "Oversees Finnish diplomatic engagements with Africa, the Middle East and Latin America. Has served in multiple leadership roles, including ambassadorial positions."
          }
        },
        {
          id: "dot_strategy_AnnaKaisaHeikkinen",
          label: "Strategy",
          type: "Dot",
          metadata: {
            hoverText:
              "Key strategy: Oversees Finnish diplomatic engagements with Africa, the Middle East and Latin America. Has served in multiple leadership roles, including ambassadorial positions."
          }
        },
        {
          id: "subdot_strategy_1_AnnaKaisaHeikkinen",
          label:
            "Oversees Finnish diplomatic engagements with Africa, the Middle East and Latin America",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of strategy." }
        },
        {
          id: "subdot_strategy_2_AnnaKaisaHeikkinen",
          label: "Has served in multiple leadership roles, including ambassadorial positions",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of strategy." }
        },
        {
          id: "dot_uaestatements_AnnaKaisaHeikkinen",
          label: "UAE Statements",
          type: "Dot",
          metadata: {
            hoverText:
              "Key UAE statements: Highlighted the UAE’s importance in Finland’s Middle East outreach. Led a high-level delegation to Dubai focusing on sustainability and innovation."
          }
        },
        {
          id: "subdot_uaestatements_1_AnnaKaisaHeikkinen",
          label:
            "Highlighted the UAE’s importance in Finland’s Middle East outreach",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of UAE statements." }
        },
        {
          id: "subdot_uaestatements_2_AnnaKaisaHeikkinen",
          label:
            "Led a high-level delegation to Dubai focusing on sustainability and innovation",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of UAE statements." }
        },
        {
          id: "dot_roleinrelations_AnnaKaisaHeikkinen",
          label: "Role in Relations",
          type: "Dot",
          metadata: {
            hoverText:
              "Key role: Directs the strategy for Finland’s missions in the region, guiding bilateral talks and policy frameworks with the UAE. Provides oversight to the Embassy in Abu Dhabi."
          }
        },
        {
          id: "subdot_roleinrelations_1_AnnaKaisaHeikkinen",
          label:
            "Directs the strategy for Finland’s missions in the region, guiding bilateral talks and policy frameworks with the UAE",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of role in relations." }
        },
        {
          id: "dot_bilaterals_AnnaKaisaHeikkinen",
          label: "Bilaterals",
          type: "Dot",
          metadata: {
            hoverText:
              "Key bilaterals: Facilitates the Political Consultation Committee (2022) and the Joint Committee (2024), supporting MoUs in energy, education, AI, and space."
          }
        },
        {
          id: "subdot_bilaterals_1_AnnaKaisaHeikkinen",
          label:
            "Facilitates the Political Consultation Committee (2022) and the Joint Committee (2024)",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of bilaterals." }
        },
        {
          id: "dot_alignandfriction_AnnaKaisaHeikkinen",
          label: "Align and Friction",
          type: "Dot",
          metadata: {
            hoverText:
              "Key align and friction: Aligns strongly on sustainable technology and education. Must balance Finland’s EU stances on issues like sanctions and arms exports with maintaining positive relations."
          }
        },
        {
          id: "subdot_alignandfriction_1_AnnaKaisaHeikkinen",
          label:
            "Aligns strongly on sustainable technology and education",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of align and friction." }
        },
        {
          id: "dot_conclusions_AnnaKaisaHeikkinen",
          label: "Conclusions",
          type: "Dot",
          metadata: {
            hoverText:
              "Key conclusions: Plans to expand cooperation in clean energy, digital solutions, and broader Middle East initiatives, strengthening Finland’s role as a trusted partner."
          }
        },
        {
          id: "subdot_conclusions_1_AnnaKaisaHeikkinen",
          label:
            "Plans to expand cooperation in clean energy, digital solutions, and broader Middle East initiatives",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of conclusions." }
        },
  
        // ---------------------------
        // Profile: Anne M'Rabet
        // ---------------------------
        {
          id: "person_AnneMRabet",
          label: "Anne MRabet",
          type: "Person",
          metadata: {
            shortBio: "Desk Officer for Persian Gulf, UAE, Bahrain, GCC and OIC",
            title: "Desk Officer for Persian Gulf, UAE, Bahrain, GCC and OIC",
            hoverText:
              "Oversees day-to-day bilateral relations with the Gulf region, including the UAE. Part of the Middle East and Gulf Unit at the MFA."
          }
        },
        {
          id: "dot_strategy_AnneMRabet",
          label: "Strategy",
          type: "Dot",
          metadata: {
            hoverText:
              "Key strategy: Oversees day-to-day bilateral relations with the Gulf region, including the UAE. Part of the Middle East and Gulf Unit at the MFA."
          }
        },
        {
          id: "subdot_strategy_1_AnneMRabet",
          label:
            "Oversees day-to-day bilateral relations with the Gulf region, including the UAE",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of strategy." }
        },
        {
          id: "dot_uaestatements_AnneMRabet",
          label: "UAE Statements",
          type: "Dot",
          metadata: {
            hoverText:
              "Key UAE statements: No public statements identified. Focused on facilitating diplomatic ties and ensuring alignment with Finland’s broader Middle East policy."
          }
        },
        {
          id: "subdot_uaestatements_1_AnneMRabet",
          label: "No public statements identified",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of UAE statements." }
        },
        {
          id: "dot_roleinrelations_AnneMRabet",
          label: "Role in Relations",
          type: "Dot",
          metadata: {
            hoverText:
              "Key role: Coordinates inter-ministerial work on UAE matters, ensuring consistency in policy and day-to-day diplomatic tasks. Provides critical country-specific expertise."
          }
        },
        {
          id: "subdot_roleinrelations_1_AnneMRabet",
          label:
            "Coordinates inter-ministerial work on UAE matters, ensuring consistency in policy and day-to-day diplomatic tasks",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of role in relations." }
        },
        {
          id: "dot_bilaterals_AnneMRabet",
          label: "Bilaterals",
          type: "Dot",
          metadata: {
            hoverText:
              "Key bilaterals: Involved in operationalising and monitoring existing frameworks like the 2022 Political Consultation Committee, the Joint Committee, and relevant MoUs."
          }
        },
        {
          id: "subdot_bilaterals_1_AnneMRabet",
          label:
            "Involved in operationalising and monitoring existing frameworks like the 2022 Political Consultation Committee, the Joint Committee, and relevant MoUs",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of bilaterals." }
        },
        {
          id: "dot_alignandfriction_AnneMRabet",
          label: "Align and Friction",
          type: "Dot",
          metadata: {
            hoverText:
              "Key align and friction: Likely deals with routine administrative or regulatory differences. No significant friction reported."
          }
        },
        {
          id: "subdot_alignandfriction_1_AnneMRabet",
          label:
            "Likely deals with routine administrative or regulatory differences; no significant friction reported",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of align and friction." }
        },
        {
          id: "dot_conclusions_AnneMRabet",
          label: "Conclusions",
          type: "Dot",
          metadata: {
            hoverText:
              "Key conclusions: Will continue to manage UAE-related dossiers, supporting smooth bilateral cooperation and possibly contributing to new initiatives in trade or culture."
          }
        },
        {
          id: "subdot_conclusions_1_AnneMRabet",
          label:
            "Will continue to manage UAE-related dossiers, supporting smooth bilateral cooperation and possibly contributing to new initiatives in trade or culture",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of conclusions." }
        },
  
        // ---------------------------
        // Profile: Justin Hotard
        // ---------------------------
        {
          id: "person_JustinHotard",
          label: "Justin Hotard",
          type: "Person",
          metadata: {
            shortBio: "Incoming CEO of Nokia",
            title: "Incoming CEO of Nokia",
            hoverText:
              "Assuming Nokia’s top leadership role in 2024. Formerly led AI-driven infrastructure at HPE, focusing on next-gen networking and cloud solutions."
          }
        },
        {
          id: "dot_strategy_JustinHotard",
          label: "Strategy",
          type: "Dot",
          metadata: {
            hoverText:
              "Key strategy: Assuming Nokia’s top leadership role in 2024. Formerly led AI-driven infrastructure at HPE, focusing on next-gen networking and cloud solutions."
          }
        },
        {
          id: "subdot_strategy_1_JustinHotard",
          label: "Assuming Nokia’s top leadership role in 2024",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of strategy." }
        },
        {
          id: "subdot_strategy_2_JustinHotard",
          label:
            "Formerly led AI-driven infrastructure at HPE, focusing on next-gen networking and cloud solutions",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of strategy." }
        },
        {
          id: "dot_uaestatements_JustinHotard",
          label: "UAE Statements",
          type: "Dot",
          metadata: {
            hoverText:
              "Key UAE statements: No direct statements yet. Nokia’s longstanding presence in the UAE, especially in 5G rollout and digital infrastructure, signals continuity."
          }
        },
        {
          id: "subdot_uaestatements_1_JustinHotard",
          label:
            "No direct statements yet. Nokia’s longstanding presence in the UAE signals continuity",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of UAE statements." }
        },
        {
          id: "dot_roleinrelations_JustinHotard",
          label: "Role in Relations",
          type: "Dot",
          metadata: {
            hoverText:
              "Key role: Will oversee Nokia’s future expansions in 5G/6G, cybersecurity, and AI-driven networks in the Emirates. Maintains close ties with local telecom operators."
          }
        },
        {
          id: "subdot_roleinrelations_1_JustinHotard",
          label:
            "Will oversee Nokia’s future expansions in 5G/6G, cybersecurity, and AI-driven networks in the Emirates",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of role in relations." }
        },
        {
          id: "dot_bilaterals_JustinHotard",
          label: "Bilaterals",
          type: "Dot",
          metadata: {
            hoverText:
              "Key bilaterals: Nokia’s commercial MOUs with UAE telcos (Etisalat, Du) support Finland–UAE digital cooperation, but no direct G2G agreements are known."
          }
        },
        {
          id: "subdot_bilaterals_1_JustinHotard",
          label:
            "Nokia’s commercial MOUs with UAE telcos support Finland–UAE digital cooperation",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of bilaterals." }
        },
        {
          id: "dot_alignandfriction_JustinHotard",
          label: "Align and Friction",
          type: "Dot",
          metadata: {
            hoverText:
              "Key align and friction: Faces competition from Huawei, Ericsson, and others in the UAE. Nokia’s emphasis on secure, energy-efficient networks aligns with UAE’s digital transformation goals."
          }
        },
        {
          id: "subdot_alignandfriction_1_JustinHotard",
          label:
            "Faces competition from Huawei, Ericsson, and others in the UAE",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of align and friction." }
        },
        {
          id: "dot_conclusions_JustinHotard",
          label: "Conclusions",
          type: "Dot",
          metadata: {
            hoverText:
              "Key conclusions: Likely to deepen partnerships with UAE operators, bridging Nokia’s new AI-driven solutions and the Emirates’ ambition to be a tech leader."
          }
        },
        {
          id: "subdot_conclusions_1_JustinHotard",
          label:
            "Likely to deepen partnerships with UAE operators, bridging Nokia’s new AI-driven solutions and the Emirates’ ambition to be a tech leader",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of conclusions." }
        },
  
        // ---------------------------
        // Profile: Pekka Lundmark
        // ---------------------------
        {
          id: "person_PekkaLundmark",
          label: "Pekka Lundmark",
          type: "Person",
          metadata: {
            shortBio: "Outgoing CEO of Nokia",
            title: "Outgoing CEO of Nokia",
            hoverText:
              "Led Nokia from 2020–2024, steering a critical transformation focusing on 5G, AI-powered automation, and green telecom solutions."
          }
        },
        {
          id: "dot_strategy_PekkaLundmark",
          label: "Strategy",
          type: "Dot",
          metadata: {
            hoverText:
              "Key strategy: Led Nokia from 2020–2024, steering a critical transformation focusing on 5G, AI-powered automation, and green telecom solutions."
          }
        },
        {
          id: "subdot_strategy_1_PekkaLundmark",
          label: "Led Nokia from 2020–2024",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of strategy." }
        },
        {
          id: "subdot_strategy_2_PekkaLundmark",
          label:
            "Steered a transformation focusing on 5G, AI-powered automation, and green telecom solutions",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of strategy." }
        },
        {
          id: "dot_uaestatements_PekkaLundmark",
          label: "UAE Statements",
          type: "Dot",
          metadata: {
            hoverText:
              "Key UAE statements: Praised the UAE’s visionary approach to 5G and AI. Emphasised Nokia’s long-term commitment to the UAE’s digital ecosystem."
          }
        },
        {
          id: "subdot_uaestatements_1_PekkaLundmark",
          label:
            "Praised the UAE’s visionary approach to 5G and AI",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of UAE statements." }
        },
        {
          id: "dot_roleinrelations_PekkaLundmark",
          label: "Role in Relations",
          type: "Dot",
          metadata: {
            hoverText:
              "Key role: Strengthened ties with UAE telecom providers, championing 5G expansions and forging MoUs on 6G research and AI-driven connectivity."
          }
        },
        {
          id: "subdot_roleinrelations_1_PekkaLundmark",
          label:
            "Strengthened ties with UAE telecom providers, championing 5G expansions and forging MoUs on 6G research and AI-driven connectivity",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of role in relations." }
        },
        {
          id: "dot_bilaterals_PekkaLundmark",
          label: "Bilaterals",
          type: "Dot",
          metadata: {
            hoverText:
              "Key bilaterals: Facilitated major contracts like Nokia-Etisalat 5G expansion (2021–2023) and a 2023–2024 6G research MoU with UAE regulators and universities."
          }
        },
        {
          id: "subdot_bilaterals_1_PekkaLundmark",
          label:
            "Facilitated major contracts like Nokia-Etisalat 5G expansion (2021–2023)",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of bilaterals." }
        },
        {
          id: "dot_alignandfriction_PekkaLundmark",
          label: "Align and Friction",
          type: "Dot",
          metadata: {
            hoverText:
              "Key align and friction: Aligned on digital innovation; navigated multi-vendor competition in the UAE’s telecom sector. Maintained good rapport despite global supply chain challenges."
          }
        },
        {
          id: "subdot_alignandfriction_1_PekkaLundmark",
          label:
            "Aligned on digital innovation; navigated multi-vendor competition in the UAE’s telecom sector",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of align and friction." }
        },
        {
          id: "dot_conclusions_PekkaLundmark",
          label: "Conclusions",
          type: "Dot",
          metadata: {
            hoverText:
              "Key conclusions: His leadership cemented Nokia’s role in UAE connectivity. Leaves a legacy of strong partnership and sets the stage for next-gen expansions under his successor."
          }
        },
        {
          id: "subdot_conclusions_1_PekkaLundmark",
          label:
            "His leadership cemented Nokia’s role in UAE connectivity, setting the stage for next-gen expansions",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of conclusions." }
        },
  
        // ---------------------------
        // Profile: Sari Baldauf
        // ---------------------------
        {
          id: "person_SariBaldauf",
          label: "Sari Baldauf",
          type: "Person",
          metadata: {
            shortBio: "Chairman of Nokia",
            title: "Chairman of Nokia",
            hoverText:
              "Among the most senior female executives in global telecom. Former head of Nokia’s Networks business, focusing on international market expansion."
          }
        },
        {
          id: "dot_strategy_SariBaldauf",
          label: "Strategy",
          type: "Dot",
          metadata: {
            hoverText:
              "Key strategy: Among the most senior female executives in global telecom. Former head of Nokia’s Networks business, focusing on international market expansion."
          }
        },
        {
          id: "subdot_strategy_1_SariBaldauf",
          label: "Former head of Nokia’s Networks business",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of strategy." }
        },
        {
          id: "dot_uaestatements_SariBaldauf",
          label: "UAE Statements",
          type: "Dot",
          metadata: {
            hoverText:
              "Key UAE statements: Few direct public remarks on the UAE, but consistently emphasises the Middle East as a key growth region for Nokia."
          }
        },
        {
          id: "subdot_uaestatements_1_SariBaldauf",
          label:
            "Few direct public remarks on the UAE; emphasises the Middle East as a key growth region",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of UAE statements." }
        },
        {
          id: "dot_roleinrelations_SariBaldauf",
          label: "Role in Relations",
          type: "Dot",
          metadata: {
            hoverText:
              "Key role: Oversees Nokia’s board-level strategy, supporting expansions in UAE-based R&D and forging digital economy partnerships with Emirati stakeholders."
          }
        },
        {
          id: "subdot_roleinrelations_1_SariBaldauf",
          label:
            "Oversees Nokia’s board-level strategy, supporting expansions in UAE-based R&D and forging digital economy partnerships",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of role in relations." }
        },
        {
          id: "dot_bilaterals_SariBaldauf",
          label: "Bilaterals",
          type: "Dot",
          metadata: {
            hoverText:
              "Key bilaterals: Endorses Nokia’s commercial agreements with UAE telcos and fosters Finland–UAE digital cooperation, such as a Finland-UAE Digital Economy Partnership."
          }
        },
        {
          id: "subdot_bilaterals_1_SariBaldauf",
          label:
            "Endorses Nokia’s commercial agreements with UAE telcos and fosters Finland–UAE digital cooperation",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of bilaterals." }
        },
        {
          id: "dot_alignandfriction_SariBaldauf",
          label: "Align and Friction",
          type: "Dot",
          metadata: {
            hoverText:
              "Key align and friction: European telecom standardisation vs. UAE’s regional tech frameworks can require careful negotiation. Competition from global players remains a factor."
          }
        },
        {
          id: "subdot_alignandfriction_1_SariBaldauf",
          label:
            "European telecom standardisation vs. UAE’s regional tech frameworks may require careful negotiation",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of align and friction." }
        },
        {
          id: "dot_conclusions_SariBaldauf",
          label: "Conclusions",
          type: "Dot",
          metadata: {
            hoverText:
              "Key conclusions: Focuses on strategic alignment with the UAE’s innovation goals, ensuring Nokia’s sustainability and digital leadership remain compelling in the region."
          }
        },
        {
          id: "subdot_conclusions_1_SariBaldauf",
          label:
            "Focuses on strategic alignment with the UAE’s innovation goals, ensuring sustainability and digital leadership",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of conclusions." }
        },
  
        // ---------------------------
        // Profile: Håkan Agnevall
        // ---------------------------
        {
          id: "person_HåkanAgnevall",
          label: "Håkan Agnevall",
          type: "Person",
          metadata: {
            shortBio: "CEO of Wartsilla",
            title: "CEO of Wartsilla",
            hoverText:
              "President and CEO of Wärtsilä since 2021. Extensive background in electrification and power systems from Volvo, Bombardier, and ABB."
          }
        },
        {
          id: "dot_strategy_HakanAgnevall",
          label: "Strategy",
          type: "Dot",
          metadata: {
            hoverText:
              "Key strategy: President and CEO of Wärtsilä since 2021. Extensive background in electrification and power systems from Volvo, Bombardier, and ABB."
          }
        },
        {
          id: "subdot_strategy_1_HakanAgnevall",
          label: "CEO of Wärtsilä since 2021",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of strategy." }
        },
        {
          id: "subdot_strategy_2_HakanAgnevall",
          label:
            "Extensive background in electrification and power systems from Volvo, Bombardier, and ABB",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of strategy." }
        },
        {
          id: "dot_uaestatements_HakanAgnevall",
          label: "UAE Statements",
          type: "Dot",
          metadata: {
            hoverText:
              "Key UAE statements: At ADIPEC 2023, advocated a balanced approach to meeting energy needs, focusing on collaboration and innovation in sustainable energy solutions."
          }
        },
        {
          id: "subdot_uaestatements_1_HakanAgnevall",
          label:
            "Advocated a balanced approach to meeting energy needs at ADIPEC 2023",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of UAE statements." }
        },
        {
          id: "dot_roleinrelations_HakanAgnevall",
          label: "Role in Relations",
          type: "Dot",
          metadata: {
            hoverText:
              "Key role: Leads Wärtsilä’s operations in the Emirates, contributing marine and energy solutions. Partnerships with Emirati energy projects highlight Finnish technology’s role."
          }
        },
        {
          id: "subdot_roleinrelations_1_HakanAgnevall",
          label:
            "Leads Wärtsilä’s operations in the Emirates, contributing marine and energy solutions",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of role in relations." }
        },
        {
          id: "dot_bilaterals_HakanAgnevall",
          label: "Bilaterals",
          type: "Dot",
          metadata: {
            hoverText:
              "Key bilaterals: Engages in commercial contracts supporting Finland–UAE energy cooperation, in line with the 2022 Energy Agreement."
          }
        },
        {
          id: "subdot_bilaterals_1_HakanAgnevall",
          label:
            "Engages in commercial contracts supporting Finland–UAE energy cooperation",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of bilaterals." }
        },
        {
          id: "dot_alignandfriction_HakanAgnevall",
          label: "Align and Friction",
          type: "Dot",
          metadata: {
            hoverText:
              "Key align and friction: Wärtsilä’s emphasis on clean, innovative energy solutions aligns with UAE’s diversification goals. Market competition and local regulations can be minor friction points."
          }
        },
        {
          id: "subdot_alignandfriction_1_HakanAgnevall",
          label:
            "Emphasis on clean, innovative energy solutions aligns with UAE’s diversification goals",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of align and friction." }
        },
        {
          id: "dot_conclusions_HakanAgnevall",
          label: "Conclusions",
          type: "Dot",
          metadata: {
            hoverText:
              "Key conclusions: Aims to expand Wärtsilä’s presence in the UAE, focusing on sustainable energy technologies and forging deeper collaboration with Emirati stakeholders."
          }
        },
        {
          id: "subdot_conclusions_1_HakanAgnevall",
          label:
            "Aims to expand Wärtsilä’s presence in the UAE, focusing on sustainable energy technologies and deeper collaboration",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of conclusions." }
        },
  
        // ---------------------------
        // Profile: Representative of Ehrnooth family
        // ---------------------------
        {
          id: "person_EhrnroothFamily",
          label: "Representative of Ehrnooth family",
          type: "Person",
          metadata: {
            shortBio: "Family representative",
            title: "Family representative",
            hoverText:
              "Finland’s most prominent noble business dynasty with investments in banking, manufacturing, forestry, and technology. Known for long-term, stable stewardship."
          }
        },
        {
          id: "dot_strategy_EhrnoothFamily",
          label: "Strategy",
          type: "Dot",
          metadata: {
            hoverText:
              "Key strategy: Finland’s most prominent noble business dynasty with investments in banking, manufacturing, forestry, and technology. Known for long-term, stable stewardship."
          }
        },
        {
          id: "subdot_strategy_1_EhrnoothFamily",
          label:
            "Investments in banking, manufacturing, forestry, and technology",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of strategy." }
        },
        {
          id: "dot_uaestatements_EhrnoothFamily",
          label: "UAE Statements",
          type: "Dot",
          metadata: {
            hoverText:
              "Key UAE statements: Family members rarely make explicit political statements. Through companies like KONE, Pöyry/AFRY, and Wärtsilä, they acknowledge the UAE’s importance as a growth market."
          }
        },
        {
          id: "subdot_uaestatements_1_EhrnoothFamily",
          label:
            "Family members rarely make explicit political statements",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of UAE statements." }
        },
        {
          id: "dot_roleinrelations_EhrnoothFamily",
          label: "Role in Relations",
          type: "Dot",
          metadata: {
            hoverText:
              "Key role: Anchor owners in major Finnish firms active in the UAE, thereby shaping investment and project decisions that reinforce bilateral trade and technology exchanges."
          }
        },
        {
          id: "subdot_roleinrelations_1_EhrnoothFamily",
          label:
            "Anchor owners in major Finnish firms active in the UAE, shaping investment and project decisions",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of role in relations." }
        },
        {
          id: "dot_bilaterals_EhrnoothFamily",
          label: "Bilaterals",
          type: "Dot",
          metadata: {
            hoverText:
              "Key bilaterals: Operate under Finland’s existing trade frameworks. Their companies often join Team Finland delegations and sign commercial contracts in the Gulf."
          }
        },
        {
          id: "subdot_bilaterals_1_EhrnoothFamily",
          label:
            "Operate under Finland’s existing trade frameworks; join Team Finland delegations and sign commercial contracts",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of bilaterals." }
        },
        {
          id: "dot_alignandfriction_EhrnoothFamily",
          label: "Align and Friction",
          type: "Dot",
          metadata: {
            hoverText:
              "Key align and friction: Strong synergy with UAE’s infrastructure and energy priorities. Competition from global peers can be a friction point in securing contracts."
          }
        },
        {
          id: "subdot_alignandfriction_1_EhrnoothFamily",
          label:
            "Strong synergy with UAE’s infrastructure and energy priorities",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of align and friction." }
        },
        {
          id: "dot_conclusions_EhrnoothFamily",
          label: "Conclusions",
          type: "Dot",
          metadata: {
            hoverText:
              "Key conclusions: Likely to maintain or expand strategic investments in sectors aligned with UAE’s development goals, reinforcing the family’s behind-the-scenes influence."
          }
        },
        {
          id: "subdot_conclusions_1_EhrnoothFamily",
          label:
            "Likely to maintain or expand strategic investments in sectors aligned with UAE’s development goals",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of conclusions." }
        },
  
        // ---------------------------
        // Profile: Robin Langenskiöld
        // ---------------------------
        {
          id: "person_RobinLangenskiöld",
          label: "Robin Langenskiöld",
          type: "Person",
          metadata: {
            shortBio: "Representative from the Erkko family",
            title: "Representative from the Erkko family",
            hoverText:
              "Part of the Erkko family, historically dominating Finland’s media landscape via Sanoma. Major shareholder and former board member at Sanoma Corporation."
          }
        },
        {
          id: "dot_strategy_RobinLangenskiold",
          label: "Strategy",
          type: "Dot",
          metadata: {
            hoverText:
              "Key strategy: Part of the Erkko family, historically dominating Finland’s media landscape via Sanoma. Major shareholder and former board member at Sanoma Corporation."
          }
        },
        {
          id: "subdot_strategy_1_RobinLangenskiold",
          label:
            "Historically dominated Finland’s media landscape via Sanoma",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of strategy." }
        },
        {
          id: "dot_uaestatements_RobinLangenskiold",
          label: "UAE Statements",
          type: "Dot",
          metadata: {
            hoverText:
              "Key UAE statements: No direct personal statements on the UAE. Through Helsingin Sanomat, the family’s media outlets have portrayed the UAE as a rising business hub."
          }
        },
        {
          id: "subdot_uaestatements_1_RobinLangenskiold",
          label:
            "No direct personal statements on the UAE; media outlets portray the UAE as a rising business hub",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of UAE statements." }
        },
        {
          id: "dot_roleinrelations_RobinLangenskiold",
          label: "Role in Relations",
          type: "Dot",
          metadata: {
            hoverText:
              "Key role: Indirectly shapes public discourse on the UAE through media coverage. Potential for future expansions in education or digital media solutions."
          }
        },
        {
          id: "subdot_roleinrelations_1_RobinLangenskiold",
          label:
            "Indirectly shapes public discourse on the UAE through media coverage",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of role in relations." }
        },
        {
          id: "dot_conclusions_RobinLangenskiold",
          label: "Conclusions",
          type: "Dot",
          metadata: {
            hoverText:
              "Key conclusions: Family’s influence in media could support a favourable climate for Finnish–UAE business ties. No immediate plans for deeper direct investment in the UAE."
          }
        },
        {
          id: "subdot_conclusions_1_RobinLangenskiold",
          label:
            "Family’s media influence could support favourable Finnish–UAE business ties",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of conclusions." }
        },
  
        // ---------------------------
        // Profile: Rafaela Seppälä
        // ---------------------------
        {
          id: "person_RafaelaSeppälä",
          label: "Rafaela Seppälä",
          type: "Person",
          metadata: {
            shortBio: "Representative from the Erkko family",
            title: "Representative from the Erkko family",
            hoverText:
              "Also an Erkko family member, major shareholder in Sanoma. Has held board roles across media and cultural foundations, influencing Finnish arts and journalism."
          }
        },
        {
          id: "dot_strategy_RafaelaSeppala",
          label: "Strategy",
          type: "Dot",
          metadata: {
            hoverText:
              "Key strategy: Also an Erkko family member, major shareholder in Sanoma. Has held board roles across media and cultural foundations, influencing Finnish arts and journalism."
          }
        },
        {
          id: "subdot_strategy_1_RafaelaSeppala",
          label:
            "Major shareholder in Sanoma and held board roles across media and cultural foundations",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of strategy." }
        },
        {
          id: "dot_uaestatements_RafaelaSeppala",
          label: "UAE Statements",
          type: "Dot",
          metadata: {
            hoverText:
              "Key UAE statements: No explicit statements on the UAE. Family’s media coverage emphasises the UAE’s business environment and tourism potential."
          }
        },
        {
          id: "subdot_uaestatements_1_RafaelaSeppala",
          label:
            "Family’s media coverage emphasises the UAE’s business environment and tourism potential",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of UAE statements." }
        },
        {
          id: "dot_roleinrelations_RafaelaSeppala",
          label: "Role in Relations",
          type: "Dot",
          metadata: {
            hoverText:
              "Key role: Similar to Robin Langenskiöld, indirectly shapes the broader media narrative through Sanoma outlets. Could facilitate cross-cultural events or coverage on the UAE."
          }
        },
        {
          id: "subdot_roleinrelations_1_RafaelaSeppala",
          label:
            "Indirectly shapes the broader media narrative through Sanoma outlets",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of role in relations." }
        },
        {
          id: "dot_conclusions_RafaelaSeppala",
          label: "Conclusions",
          type: "Dot",
          metadata: {
            hoverText:
              "Key conclusions: Likely to maintain a low-profile stance, upholding a generally favourable media portrayal of the UAE’s growth and opportunities."
          }
        },
        {
          id: "subdot_conclusions_1_RafaelaSeppala",
          label:
            "Likely to maintain a low-profile stance with favourable media portrayal of the UAE’s growth",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of conclusions." }
        },
  
        // ---------------------------
        // Profile: Björn Wahlroos
        // ---------------------------
        {
          id: "person_BjörnWahlroos",
          label: "Björn Wahlroos",
          type: "Person",
          metadata: {
            shortBio: "Banker, investor and former Chairman",
            title: "Banker, investor and former Chairman of several major Finnish companies",
            hoverText:
              "Influential Finnish banker and investor. Former Chairman of Sampo Group, Nordea Bank, and UPM-Kymmene. Known for free-market philosophy and shaping major M&A deals."
          }
        },
        {
          id: "dot_strategy_BjornWahlroos",
          label: "Strategy",
          type: "Dot",
          metadata: {
            hoverText:
              "Key strategy: Influential banker and investor; former Chairman of Sampo Group, Nordea Bank, and UPM-Kymmene. Known for free-market philosophy and shaping major M&A deals."
          }
        },
        {
          id: "subdot_strategy_1_BjornWahlroos",
          label:
            "Former Chairman of Sampo Group, Nordea Bank, and UPM-Kymmene",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of strategy." }
        },
        {
          id: "dot_uaestatements_BjornWahlroos",
          label: "UAE Statements",
          type: "Dot",
          metadata: {
            hoverText:
              "Key UAE statements: No personal statements on the UAE. Indirect ties via Nordea’s transaction with Abu Dhabi Investment Authority and Saxo Bank expansions."
          }
        },
        {
          id: "subdot_uaestatements_1_BjornWahlroos",
          label:
            "No personal statements on the UAE; indirect ties via financial transactions",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of UAE statements." }
        },
        {
          id: "dot_roleinrelations_BjornWahlroos",
          label: "Role in Relations",
          type: "Dot",
          metadata: {
            hoverText:
              "Key role: Through corporate deals, facilitated capital flows involving ADIA and supported Saxo Bank’s presence in the UAE."
          }
        },
        {
          id: "subdot_roleinrelations_1_BjornWahlroos",
          label:
            "Facilitated capital flows involving ADIA and supported Saxo Bank’s presence in the UAE",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of role in relations." }
        },
        {
          id: "dot_bilaterals_BjornWahlroos",
          label: "Bilaterals",
          type: "Dot",
          metadata: {
            hoverText:
              "Key bilaterals: Operates within existing Finland–UAE frameworks; corporate-level transactions highlight cross-border investment synergy."
          }
        },
        {
          id: "subdot_bilaterals_1_BjornWahlroos",
          label:
            "Operates within existing Finland–UAE frameworks; highlights cross-border investment synergy",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of bilaterals." }
        },
        {
          id: "dot_alignandfriction_BjornWahlroos",
          label: "Align and Friction",
          type: "Dot",
          metadata: {
            hoverText:
              "Key align and friction: No major friction. Aligns with the UAE’s role as a significant global investor; differences in regulatory stances handled commercially."
          }
        },
        {
          id: "subdot_alignandfriction_1_BjornWahlroos",
          label:
            "Aligns with the UAE’s role as a significant global investor",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of align and friction." }
        },
        {
          id: "dot_conclusions_BjornWahlroos",
          label: "Conclusions",
          type: "Dot",
          metadata: {
            hoverText:
              "Key conclusions: Though semi-retired, his financial influence endures, with potential for future cross-border investments connecting Finnish and Emirati markets."
          }
        },
        {
          id: "subdot_conclusions_1_BjornWahlroos",
          label:
            "Potential for future cross-border investments connecting Finnish and Emirati markets",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of conclusions." }
        },
  
        // ---------------------------
        // Profile: Jyri Häkämies
        // ---------------------------
        {
          id: "person_JyriHäkämies",
          label: "Jyri Häkämies",
          type: "Person",
          metadata: {
            shortBio: "Director General of the Finnish Confederation of Industries",
            title: "Director General of the Finnish Confederation of Industries",
            hoverText:
              "Leads Finland’s largest business advocacy group (EK). Former Minister of Defence and Economic Affairs, leveraging broad policy experience to promote Finnish industries globally."
          }
        },
        {
          id: "dot_strategy_JyriHakamies",
          label: "Strategy",
          type: "Dot",
          metadata: {
            hoverText:
              "Key strategy: Leads Finland’s largest business advocacy group (EK). Former Minister of Defence and Economic Affairs."
          }
        },
        {
          id: "subdot_strategy_1_JyriHakamies",
          label:
            "Leads Finland’s largest business advocacy group (EK)",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of strategy." }
        },
        {
          id: "dot_uaestatements_JyriHakamies",
          label: "UAE Statements",
          type: "Dot",
          metadata: {
            hoverText:
              "Key UAE statements: Positions the UAE as a priority market, praising its ambition in digital transformation, innovation, and sustainability."
          }
        },
        {
          id: "subdot_uaestatements_1_JyriHakamies",
          label:
            "Positions the UAE as a priority market, praising its ambition in digital transformation, innovation, and sustainability",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of UAE statements." }
        },
        {
          id: "dot_roleinrelations_JyriHakamies",
          label: "Role in Relations",
          type: "Dot",
          metadata: {
            hoverText:
              "Key role: Organises trade missions, fosters dialogues through the Finland–UAE Joint Business Council, and encourages Finnish SMEs to explore UAE opportunities."
          }
        },
        {
          id: "subdot_roleinrelations_1_JyriHakamies",
          label:
            "Organises trade missions and fosters dialogues through the Finland–UAE Joint Business Council",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of role in relations." }
        },
        {
          id: "dot_bilaterals_JyriHakamies",
          label: "Bilaterals",
          type: "Dot",
          metadata: {
            hoverText:
              "Key bilaterals: Supports the 2024 creation of the UAE-Finland Business Council and endorses MoUs in AI, energy, and digitalisation."
          }
        },
        {
          id: "subdot_bilaterals_1_JyriHakamies",
          label:
            "Supports the 2024 creation of the UAE-Finland Business Council and endorses MoUs in AI, energy, and digitalisation",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of bilaterals." }
        },
        {
          id: "dot_alignandfriction_JyriHakamies",
          label: "Align and Friction",
          type: "Dot",
          metadata: {
            hoverText:
              "Key align and friction: Aligns with UAE’s drive for economic diversification. Competition from other nations is a typical challenge for Finnish exports."
          }
        },
        {
          id: "subdot_alignandfriction_1_JyriHakamies",
          label:
            "Aligns with UAE’s drive for economic diversification",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of align and friction." }
        },
        {
          id: "dot_conclusions_JyriHakamies",
          label: "Conclusions",
          type: "Dot",
          metadata: {
            hoverText:
              "Key conclusions: Continues championing trade delegations and bilateral initiatives, reinforcing Finland’s brand in innovation, sustainability, and advanced manufacturing."
          }
        },
        {
          id: "subdot_conclusions_1_JyriHakamies",
          label:
            "Continues championing trade delegations and bilateral initiatives",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of conclusions." }
        },
  
        // ---------------------------
        // Profile: Jussi Halla-aho
        // ---------------------------
        {
          id: "person_JussiHallaaho",
          label: "Jussi Halla-aho",
          type: "Person",
          metadata: {
            shortBio: "Speaker of the Parliament",
            title: "Speaker of the Parliament",
            hoverText:
              "Speaker of the Parliament and former leader of a major conservative party, with significant influence on parliamentary procedures and foreign policy oversight."
          }
        },
        {
          id: "dot_strategy_JussiHallaAho",
          label: "Strategy",
          type: "Dot",
          metadata: {
            hoverText:
              "Key strategy: Speaker of the Parliament and former leader of a major conservative party, with significant influence on parliamentary procedures and foreign policy oversight."
          }
        },
        {
          id: "subdot_strategy_1_JussiHallaAho",
          label:
            "Speaker of the Parliament and former leader of a major conservative party",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of strategy." }
        },
        {
          id: "dot_uaestatements_JussiHallaAho",
          label: "UAE Statements",
          type: "Dot",
          metadata: {
            hoverText:
              "Key UAE statements: Has not made extensive public statements on the UAE. Generally promotes pragmatic foreign policy and economic cooperation with Gulf states."
          }
        },
        {
          id: "subdot_uaestatements_1_JussiHallaAho",
          label:
            "Has not made extensive public statements on the UAE",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of UAE statements." }
        },
        {
          id: "dot_roleinrelations_JussiHallaAho",
          label: "Role in Relations",
          type: "Dot",
          metadata: {
            hoverText:
              "Key role: Facilitates parliamentary-level exchanges. Provides legislative support and legitimacy for broader Finland–UAE diplomatic initiatives led by the executive branch."
          }
        },
        {
          id: "subdot_roleinrelations_1_JussiHallaAho",
          label:
            "Facilitates parliamentary-level exchanges and provides legislative support",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of role in relations." }
        },
        {
          id: "dot_bilaterals_JussiHallaAho",
          label: "Bilaterals",
          type: "Dot",
          metadata: {
            hoverText:
              "Key bilaterals: No direct role in signing agreements but upholds parliamentary ratification and review of treaties with the UAE."
          }
        },
        {
          id: "subdot_bilaterals_1_JussiHallaAho",
          label:
            "Upholds parliamentary ratification and review of treaties with the UAE",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of bilaterals." }
        },
        {
          id: "dot_alignandfriction_JussiHallaAho",
          label: "Align and Friction",
          type: "Dot",
          metadata: {
            hoverText:
              "Key align and friction: Aligns on economic partnerships and national security. Potentially stricter stances on migration or certain EU policies may differ from UAE approaches."
          }
        },
        {
          id: "subdot_alignandfriction_1_JussiHallaAho",
          label:
            "Aligns on economic partnerships and national security",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of align and friction." }
        },
        {
          id: "dot_conclusions_JussiHallaAho",
          label: "Conclusions",
          type: "Dot",
          metadata: {
            hoverText:
              "Key conclusions: Continues to support parliamentary diplomacy, encouraging stable, mutually beneficial ties with the UAE in trade and security matters."
          }
        },
        {
          id: "subdot_conclusions_1_JussiHallaAho",
          label:
            "Continues to support parliamentary diplomacy for stable, mutually beneficial UAE ties",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of conclusions." }
        },
  
        // ---------------------------
        // Profile: Nathali Ahlstrom
        // ---------------------------
        {
          id: "person_NathaliAhlstrom",
          label: "Nathali Ahlstrom",
          type: "Person",
          metadata: {
            shortBio: "CEO of Fiskars",
            title: "CEO of Fiskars",
            hoverText:
              "Leads one of Finland’s oldest companies, focusing on premium consumer brands in homeware and lifestyle. Emphasises sustainability and global market expansion."
          }
        },
        {
          id: "dot_strategy_NathaliAhlstrom",
          label: "Strategy",
          type: "Dot",
          metadata: {
            hoverText:
              "Key strategy: Leads one of Finland’s oldest companies, focusing on premium consumer brands in homeware and lifestyle. Emphasises sustainability and global market expansion."
          }
        },
        {
          id: "subdot_strategy_1_NathaliAhlstrom",
          label:
            "Focuses on premium consumer brands in homeware and lifestyle",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of strategy." }
        },
        {
          id: "dot_uaestatements_NathaliAhlstrom",
          label: "UAE Statements",
          type: "Dot",
          metadata: {
            hoverText:
              "Key UAE statements: Identified the UAE as a key premium retail market. Showcased Fiskars products at Expo 2020 Dubai to highlight Finnish design and heritage."
          }
        },
        {
          id: "subdot_uaestatements_1_NathaliAhlstrom",
          label:
            "Identified the UAE as a key premium retail market; showcased Fiskars products at Expo 2020 Dubai",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of UAE statements." }
        },
        {
          id: "dot_roleinrelations_NathaliAhlstrom",
          label: "Role in Relations",
          type: "Dot",
          metadata: {
            hoverText:
              "Key role: Promotes Finnish consumer-brand visibility in the UAE’s luxury retail sector, supporting Finland’s soft diplomacy and brand image."
          }
        },
        {
          id: "subdot_roleinrelations_1_NathaliAhlstrom",
          label:
            "Promotes Finnish consumer-brand visibility in the UAE’s luxury retail sector",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of role in relations." }
        },
        {
          id: "dot_bilaterals_NathaliAhlstrom",
          label: "Bilaterals",
          type: "Dot",
          metadata: {
            hoverText:
              "Key bilaterals: Operates within broader Finland–UAE trade frameworks. Collaborates with local distributors and participated in the Finnish pavilion at Expo 2020."
          }
        },
        {
          id: "subdot_bilaterals_1_NathaliAhlstrom",
          label:
            "Operates within broader Finland–UAE trade frameworks and collaborates with local distributors",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of bilaterals." }
        },
        {
          id: "dot_alignandfriction_NathaliAhlstrom",
          label: "Align and Friction",
          type: "Dot",
          metadata: {
            hoverText:
              "Key align and friction: Aligns with UAE’s appetite for high-quality, heritage-driven goods. Competition in premium retail and varied pricing sensitivities can limit deeper market penetration."
          }
        },
        {
          id: "subdot_alignandfriction_1_NathaliAhlstrom",
          label:
            "Aligns with UAE’s appetite for high-quality, heritage-driven goods",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of align and friction." }
        },
        {
          id: "dot_conclusions_NathaliAhlstrom",
          label: "Conclusions",
          type: "Dot",
          metadata: {
            hoverText:
              "Key conclusions: Continues building brand recognition and sustainability messaging, aiming to grow market share among discerning Emirati consumers."
          }
        },
        {
          id: "subdot_conclusions_1_NathaliAhlstrom",
          label:
            "Aims to grow market share among discerning Emirati consumers",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of conclusions." }
        },
  
        // ---------------------------
        // Profile: Seppo Vikström
        // ---------------------------
        {
          id: "person_SeppoVikström",
          label: "Seppo Vikström",
          type: "Person",
          metadata: {
            shortBio: "Chairman of ISKU",
            title: "Chairman of ISKU",
            hoverText:
              "Third-generation leader of a major Finnish furniture brand, known for design quality and eco-friendly manufacturing. Guides ISKU’s domestic and export growth."
          }
        },
        {
          id: "dot_strategy_SeppoVikstrom",
          label: "Strategy",
          type: "Dot",
          metadata: {
            hoverText:
              "Key strategy: Third-generation leader of a major Finnish furniture brand, known for design quality and eco-friendly manufacturing. Guides ISKU’s domestic and export growth."
          }
        },
        {
          id: "subdot_strategy_1_SeppoVikstrom",
          label:
            "Guides ISKU’s domestic and export growth with a focus on design quality and eco-friendly manufacturing",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of strategy." }
        },
        {
          id: "dot_uaestatements_SeppoVikstrom",
          label: "UAE Statements",
          type: "Dot",
          metadata: {
            hoverText:
              "Key UAE statements: Focuses on synergy between Finland and the UAE in sustainability and education. Family members have praised UAE’s openness to innovative school design."
          }
        },
        {
          id: "subdot_uaestatements_1_SeppoVikstrom",
          label:
            "Focuses on synergy between Finland and the UAE in sustainability and education",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of UAE statements." }
        },
        {
          id: "dot_roleinrelations_SeppoVikstrom",
          label: "Role in Relations",
          type: "Dot",
          metadata: {
            hoverText:
              "Key role: ISKU Middle East FZ-LLC in Dubai furnishes educational institutions, bridging Finnish learning environment concepts with UAE’s modernisation goals."
          }
        },
        {
          id: "subdot_roleinrelations_1_SeppoVikstrom",
          label:
            "Furnishes educational institutions in Dubai, bridging Finnish concepts with UAE modernisation",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of role in relations." }
        },
        {
          id: "dot_bilaterals_SeppoVikstrom",
          label: "Bilaterals",
          type: "Dot",
          metadata: {
            hoverText:
              "Key bilaterals: Works under Finland’s trade frameworks; invests in local presence via showrooms and networks. Partners with the Finnish Business Council in Dubai."
          }
        },
        {
          id: "subdot_bilaterals_1_SeppoVikstrom",
          label:
            "Invests in local presence via showrooms and networks, partnering with the Finnish Business Council in Dubai",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of bilaterals." }
        },
        {
          id: "dot_alignandfriction_SeppoVikstrom",
          label: "Align and Friction",
          type: "Dot",
          metadata: {
            hoverText:
              "Key align and friction: UAE’s focus on premium, sustainable solutions aligns with ISKU’s brand. Faces competitive pricing from global suppliers and logistical complexities."
          }
        },
        {
          id: "subdot_alignandfriction_1_SeppoVikstrom",
          label:
            "Faces competitive pricing and logistical complexities",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of align and friction." }
        },
        {
          id: "dot_conclusions_SeppoVikstrom",
          label: "Conclusions",
          type: "Dot",
          metadata: {
            hoverText:
              "Key conclusions: Continues promoting Finnish educational design in the UAE, leveraging sustainability as a key differentiator to deepen market presence."
          }
        },
        {
          id: "subdot_conclusions_1_SeppoVikstrom",
          label:
            "Continues promoting Finnish educational design in the UAE",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of conclusions." }
        },
  
        // ---------------------------
        // Profile: Lassi Noponen
        // ---------------------------
        {
          id: "person_LassiNoponen",
          label: "Lassi Noponen",
          type: "Person",
          metadata: {
            shortBio: "CEO of Business Finland",
            title: "CEO of Business Finland",
            hoverText:
              "Appointed in September 2024, leads Finland’s main trade and investment promotion agency. Focuses on global partnerships and high-potential markets."
          }
        },
        {
          id: "dot_strategy_LassiNoponen",
          label: "Strategy",
          type: "Dot",
          metadata: {
            hoverText:
              "Key strategy: Appointed in September 2024, leads Finland’s main trade and investment promotion agency. Focuses on global partnerships and high-potential markets."
          }
        },
        {
          id: "subdot_strategy_1_LassiNoponen",
          label:
            "Leads Finland’s main trade and investment promotion agency",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of strategy." }
        },
        {
          id: "dot_uaestatements_LassiNoponen",
          label: "UAE Statements",
          type: "Dot",
          metadata: {
            hoverText:
              "Key UAE statements: Positions the UAE as a strategic priority in the Middle East. Participated in the January 2025 trade delegation to Abu Dhabi, emphasising digital economy ties."
          }
        },
        {
          id: "subdot_uaestatements_1_LassiNoponen",
          label:
            "Positions the UAE as a strategic priority in the Middle East",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of UAE statements." }
        },
        {
          id: "dot_roleinrelations_LassiNoponen",
          label: "Role in Relations",
          type: "Dot",
          metadata: {
            hoverText:
              "Key role: Coordinates business delegations and fosters bilateral trade. Translates G2G MoUs into real commercial projects."
          }
        },
        {
          id: "subdot_roleinrelations_1_LassiNoponen",
          label:
            "Coordinates business delegations and fosters bilateral trade",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of role in relations." }
        },
        {
          id: "dot_bilaterals_LassiNoponen",
          label: "Bilaterals",
          type: "Dot",
          metadata: {
            hoverText:
              "Key bilaterals: Supports implementing the 2022 Energy MoU, organises Team Finland missions, and drives new trade frameworks for AI, education, and digitalisation."
          }
        },
        {
          id: "subdot_bilaterals_1_LassiNoponen",
          label:
            "Supports implementing the 2022 Energy MoU and organises Team Finland missions",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of bilaterals." }
        },
        {
          id: "dot_alignandfriction_LassiNoponen",
          label: "Align and Friction",
          type: "Dot",
          metadata: {
            hoverText:
              "Key align and friction: Strong synergy with UAE’s innovation drive. Competition from larger exporters or regionally closer suppliers can challenge Finnish SMEs."
          }
        },
        {
          id: "subdot_alignandfriction_1_LassiNoponen",
          label:
            "Strong synergy with UAE’s innovation drive",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of align and friction." }
        },
        {
          id: "dot_conclusions_LassiNoponen",
          label: "Conclusions",
          type: "Dot",
          metadata: {
            hoverText:
              "Key conclusions: Aims to expand Finnish presence in the UAE, focusing on advanced tech, sustainability, and co-innovation, especially for the 50th anniversary of diplomatic ties."
          }
        },
        {
          id: "subdot_conclusions_1_LassiNoponen",
          label:
            "Aims to expand Finnish presence in the UAE focusing on advanced tech, sustainability, and co-innovation",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of conclusions." }
        },
  
        // ---------------------------
        // Profile: Markus Rauramo
        // ---------------------------
        {
          id: "person_MarkusRauramo",
          label: "Markus Rauramo",
          type: "Person",
          metadata: {
            shortBio: "CEO of Fortum",
            title: "CEO of Fortum",
            hoverText:
              "Leads a major Nordic energy company specialising in clean energy. Committed to renewable projects and CO2-free electricity generation."
          }
        },
        {
          id: "dot_strategy_MarkusRauramo",
          label: "Strategy",
          type: "Dot",
          metadata: {
            hoverText:
              "Key strategy: Leads a major Nordic energy company specialising in clean energy. Committed to renewable projects and CO2-free electricity generation."
          }
        },
        {
          id: "subdot_strategy_1_MarkusRauramo",
          label:
            "Specialises in clean energy and renewable projects",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of strategy." }
        },
        {
          id: "dot_uaestatements_MarkusRauramo",
          label: "UAE Statements",
          type: "Dot",
          metadata: {
            hoverText:
              "Key UAE statements: No direct UAE-specific quotes, but Fortum participated in Expo 2020 Dubai to showcase sustainable energy solutions."
          }
        },
        {
          id: "subdot_uaestatements_1_MarkusRauramo",
          label:
            "Participated in Expo 2020 Dubai to showcase sustainable energy solutions",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of UAE statements." }
        },
        {
          id: "dot_roleinrelations_MarkusRauramo",
          label: "Role in Relations",
          type: "Dot",
          metadata: {
            hoverText:
              "Key role: Supports Finland’s energy diplomacy by highlighting advanced renewable technology. Potential partnerships with UAE’s green energy initiatives."
          }
        },
        {
          id: "subdot_roleinrelations_1_MarkusRauramo",
          label:
            "Highlights advanced renewable technology for energy diplomacy",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of role in relations." }
        },
        {
          id: "dot_bilaterals_MarkusRauramo",
          label: "Bilaterals",
          type: "Dot",
          metadata: {
            hoverText:
              "Key bilaterals: Operates within the 2022 Finland–UAE Energy MoU context, focusing on renewable energy opportunities."
          }
        },
        {
          id: "subdot_bilaterals_1_MarkusRauramo",
          label:
            "Operates within the 2022 Finland–UAE Energy MoU context, focusing on renewable energy opportunities",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of bilaterals." }
        },
        {
          id: "dot_alignandfriction_MarkusRauramo",
          label: "Align and Friction",
          type: "Dot",
          metadata: {
            hoverText:
              "Key align and friction: UAE’s push for diverse energy aligns with Fortum’s green expertise. Market entry or local partnership complexities are typical friction points."
          }
        },
        {
          id: "subdot_alignandfriction_1_MarkusRauramo",
          label:
            "UAE’s push for diverse energy aligns with Fortum’s green expertise",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of align and friction." }
        },
        {
          id: "dot_conclusions_MarkusRauramo",
          label: "Conclusions",
          type: "Dot",
          metadata: {
            hoverText:
              "Key conclusions: Fortum likely to explore deeper collaboration in solar, wind, or hydrogen projects, leveraging the UAE’s drive for sustainable energy diversification."
          }
        },
        {
          id: "subdot_conclusions_1_MarkusRauramo",
          label:
            "Likely to explore deeper collaboration in renewable energy projects",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of conclusions." }
        },
  
        // ---------------------------
        // Profile: Jubo Romakkaniemi
        // ---------------------------
        {
          id: "person_JuboRomakkaniemi",
          label: "Jubo Romakkaniemi",
          type: "Person",
          metadata: {
            shortBio: "CEO of FCC",
            title: "CEO of FCC",
            hoverText:
              "Heads the Finland Chamber of Commerce, representing around 20,000 companies. Former senior advisor in Finnish and EU politics."
          }
        },
        {
          id: "dot_strategy_JuboRomakkaniemi",
          label: "Strategy",
          type: "Dot",
          metadata: {
            hoverText:
              "Key strategy: Heads the Finland Chamber of Commerce, representing around 20,000 companies. Former senior advisor in Finnish and EU politics."
          }
        },
        {
          id: "subdot_strategy_1_JuboRomakkaniemi",
          label:
            "Heads the Finland Chamber of Commerce, representing around 20,000 companies",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of strategy." }
        },
        {
          id: "dot_uaestatements_JuboRomakkaniemi",
          label: "UAE Statements",
          type: "Dot",
          metadata: {
            hoverText:
              "Key UAE statements: Calls the UAE an essential partner for Finnish businesses, noting complementary interests in sustainability, digital solutions, and innovation."
          }
        },
        {
          id: "subdot_uaestatements_1_JuboRomakkaniemi",
          label:
            "Calls the UAE an essential partner for Finnish businesses",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of UAE statements." }
        },
        {
          id: "dot_roleinrelations_JuboRomakkaniemi",
          label: "Role in Relations",
          type: "Dot",
          metadata: {
            hoverText:
              "Key role: Facilitates business delegations and fosters sector-specific forums (e.g. smart cities, digital health). Instrumental in launching the UAE–Finland Business Council."
          }
        },
        {
          id: "subdot_roleinrelations_1_JuboRomakkaniemi",
          label:
            "Facilitates business delegations and fosters sector-specific forums",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of role in relations." }
        },
        {
          id: "dot_bilaterals_JuboRomakkaniemi",
          label: "Bilaterals",
          type: "Dot",
          metadata: {
            hoverText:
              "Key bilaterals: Supports and promotes new commercial ties arising from official frameworks, including MoUs in AI, renewable energy, and the digital economy."
          }
        },
        {
          id: "subdot_bilaterals_1_JuboRomakkaniemi",
          label:
            "Supports and promotes new commercial ties through MoUs in AI, renewable energy, and the digital economy",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of bilaterals." }
        },
        {
          id: "dot_alignandfriction_JuboRomakkaniemi",
          label: "Align and Friction",
          type: "Dot",
          metadata: {
            hoverText:
              "Key align and friction: High alignment on tech and sustainability; competition from global players is the main challenge."
          }
        },
        {
          id: "subdot_alignandfriction_1_JuboRomakkaniemi",
          label:
            "High alignment on tech and sustainability; competition from global players",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of align and friction." }
        },
        {
          id: "dot_conclusions_JuboRomakkaniemi",
          label: "Conclusions",
          type: "Dot",
          metadata: {
            hoverText:
              "Key conclusions: Plans to further strengthen trade ties, building on the success of Expo 2020 Dubai and other initiatives to keep Finnish industry visible in the Gulf."
          }
        },
        {
          id: "subdot_conclusions_1_JuboRomakkaniemi",
          label:
            "Plans to further strengthen trade ties, building on the success of Expo 2020 Dubai and other initiatives",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of conclusions." }
        },


        // ---------------------------
        // Profile: Antti Herlin
        // ---------------------------

        {
          id: "person_AnttiHerlin",
          label: "Antti Herlin",
          type: "Person",
          metadata: {
            shortBio: "Chairman of KONE",
            title: "Chairman of KONE",
            hoverText:
              "Antti Herlin is a prominent industrialist, transforming KONE into a global leader in elevator and escalator solutions."
          }
        },
        // Main dot nodes
        {
          id: "dot_strategy",
          label: "Strategy",
          type: "Dot",
          metadata: {
            hoverText:
              "Key strategy: Finland’s most influential industrialist. Transformed KONE into a global leader."
          }
        },
        {
          id: "dot_uaestatements",
          label: "UAE Statements",
          type: "Dot",
          metadata: {
            hoverText:
              "Key UAE statements: Does not frequently comment on the UAE publicly. Involved in major projects."
          }
        },
        {
          id: "dot_roleinrelations",
          label: "Role in Relations",
          type: "Dot",
          metadata: {
            hoverText:
              "Key role: Influences Finland’s economic diplomacy and bilateral trade."
          }
        },
        {
          id: "dot_bilaterals",
          label: "Bilaterals",
          type: "Dot",
          metadata: {
            hoverText:
              "Key bilateral engagements and commercial contracts."
          }
        },
        {
          id: "dot_alignandfriction",
          label: "Align and Friction",
          type: "Dot",
          metadata: {
            hoverText:
              "Competes globally and navigates multi-vendor approaches."
          }
        },
        {
          id: "dot_conclusions",
          label: "Conclusions",
          type: "Dot",
          metadata: {
            hoverText: "Expands KONE’s footprint in the Gulf."
          }
        },
        // Subdot nodes for Strategy (2 points)
        {
          id: "subdot_strategy_1",
          label: "Finland’s most influential industrialist.",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of strategy." }
        },
        {
          id: "subdot_strategy_2",
          label: "Transformed KONE into a global leader in elevator/escalator solutions.",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of strategy." }
        },
        // Subdot nodes for UAE Statements (2 points)
        {
          id: "subdot_uaestatements_1",
          label: "Does not frequently comment on the UAE publicly.",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of UAE statements." }
        },
        {
          id: "subdot_uaestatements_2",
          label: "KONE’s HQ in Dubai and involvement in iconic projects.",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of UAE statements." }
        },
        // Subdot nodes for Role in Relations (2 points)
        {
          id: "subdot_roleinrelations_1",
          label: "Influences Finland’s economic diplomacy.",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of role in relations." }
        },
        {
          id: "subdot_roleinrelations_2",
          label: "Showcases advanced infrastructure solutions.",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of role in relations." }
        },
        // Subdot nodes for Bilaterals (2 points)
        {
          id: "subdot_bilaterals_1",
          label: "Engages within Finland’s frameworks.",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of bilaterals." }
        },
        {
          id: "subdot_bilaterals_2",
          label: "Deals support broader trade relationships.",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of bilaterals." }
        },
        // Subdot nodes for Align and Friction (2 points)
        {
          id: "subdot_alignandfriction_1",
          label: "Competes with global elevator firms in the UAE.",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of align and friction." }
        },
        {
          id: "subdot_alignandfriction_2",
          label: "Navigates the UAE’s multi-vendor approach.",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of align and friction." }
        },
        // Subdot node for Conclusions (1 point)
        {
          id: "subdot_conclusions_1",
          label: "Expands KONE’s footprint in the Gulf.",
          type: "SubDot",
          metadata: { hoverText: "Subpoint of conclusions." }
        }
      ],

      edges: [
        // ---------------------------
        // Edges for Sandra Bergqvist
        // ---------------------------
        { source: "person_SandraBergqvist", target: "dot_strategy_SandraBergqvist", type: "Person-Dot", label: "has" },
        { source: "dot_strategy_SandraBergqvist", target: "subdot_strategy_1_SandraBergqvist", type: "Dot-SubDot", label: "point" },
        { source: "dot_strategy_SandraBergqvist", target: "subdot_strategy_2_SandraBergqvist", type: "Dot-SubDot", label: "point" },
        { source: "person_SandraBergqvist", target: "dot_uaestatements_SandraBergqvist", type: "Person-Dot", label: "has" },
        { source: "dot_uaestatements_SandraBergqvist", target: "subdot_uaestatements_1_SandraBergqvist", type: "Dot-SubDot", label: "point" },
        { source: "person_SandraBergqvist", target: "dot_roleinrelations_SandraBergqvist", type: "Person-Dot", label: "has" },
        { source: "dot_roleinrelations_SandraBergqvist", target: "subdot_roleinrelations_1_SandraBergqvist", type: "Dot-SubDot", label: "point" },
        { source: "dot_roleinrelations_SandraBergqvist", target: "subdot_roleinrelations_2_SandraBergqvist", type: "Dot-SubDot", label: "point" },
        { source: "person_SandraBergqvist", target: "dot_bilaterals_SandraBergqvist", type: "Person-Dot", label: "has" },
        { source: "dot_bilaterals_SandraBergqvist", target: "subdot_bilaterals_1_SandraBergqvist", type: "Dot-SubDot", label: "point" },
        { source: "person_SandraBergqvist", target: "dot_alignandfriction_SandraBergqvist", type: "Person-Dot", label: "has" },
        { source: "dot_alignandfriction_SandraBergqvist", target: "subdot_alignandfriction_1_SandraBergqvist", type: "Dot-SubDot", label: "point" },
        { source: "dot_alignandfriction_SandraBergqvist", target: "subdot_alignandfriction_2_SandraBergqvist", type: "Dot-SubDot", label: "point" },
        { source: "person_SandraBergqvist", target: "dot_conclusions_SandraBergqvist", type: "Person-Dot", label: "has" },
        { source: "dot_conclusions_SandraBergqvist", target: "subdot_conclusions_1_SandraBergqvist", type: "Dot-SubDot", label: "point" },
  


        // ---------------------------
        // Edges for Antti Herlin
        // ---------------------------

        // Edges from the central person to each main dot node.
        { source: "person_AnttiHerlin", target: "dot_strategy", type: "Person-Dot", label: "has" },
        { source: "person_AnttiHerlin", target: "dot_uaestatements", type: "Person-Dot", label: "has" },
        { source: "person_AnttiHerlin", target: "dot_roleinrelations", type: "Person-Dot", label: "has" },
        { source: "person_AnttiHerlin", target: "dot_bilaterals", type: "Person-Dot", label: "has" },
        { source: "person_AnttiHerlin", target: "dot_alignandfriction", type: "Person-Dot", label: "has" },
        { source: "person_AnttiHerlin", target: "dot_conclusions", type: "Person-Dot", label: "has" },
        // Edges from each dot node to its subdot nodes.
        { source: "dot_strategy", target: "subdot_strategy_1", type: "Dot-SubDot", label: "point" },
        { source: "dot_strategy", target: "subdot_strategy_2", type: "Dot-SubDot", label: "point" },
        { source: "dot_uaestatements", target: "subdot_uaestatements_1", type: "Dot-SubDot", label: "point" },
        { source: "dot_uaestatements", target: "subdot_uaestatements_2", type: "Dot-SubDot", label: "point" },
        { source: "dot_roleinrelations", target: "subdot_roleinrelations_1", type: "Dot-SubDot", label: "point" },
        { source: "dot_roleinrelations", target: "subdot_roleinrelations_2", type: "Dot-SubDot", label: "point" },
        { source: "dot_bilaterals", target: "subdot_bilaterals_1", type: "Dot-SubDot", label: "point" },
        { source: "dot_bilaterals", target: "subdot_bilaterals_2", type: "Dot-SubDot", label: "point" },
        { source: "dot_alignandfriction", target: "subdot_alignandfriction_1", type: "Dot-SubDot", label: "point" },
        { source: "dot_alignandfriction", target: "subdot_alignandfriction_2", type: "Dot-SubDot", label: "point" },
        { source: "dot_conclusions", target: "subdot_conclusions_1", type: "Dot-SubDot", label: "point" },
        

        // ---------------------------
        // Edges for Anna-Kaisa Ikonen
        // ---------------------------
        { source: "person_Anna-KaisaIkonen", target: "dot_strategy_AnnaKaisaIkonen", type: "Person-Dot", label: "has" },
        { source: "dot_strategy_AnnaKaisaIkonen", target: "subdot_strategy_1_AnnaKaisaIkonen", type: "Dot-SubDot", label: "point" },
        { source: "dot_strategy_AnnaKaisaIkonen", target: "subdot_strategy_2_AnnaKaisaIkonen", type: "Dot-SubDot", label: "point" },
        { source: "person_Anna-KaisaIkonen", target: "dot_uaestatements_AnnaKaisaIkonen", type: "Person-Dot", label: "has" },
        { source: "dot_uaestatements_AnnaKaisaIkonen", target: "subdot_uaestatements_1_AnnaKaisaIkonen", type: "Dot-SubDot", label: "point" },
        { source: "dot_uaestatements_AnnaKaisaIkonen", target: "subdot_uaestatements_2_AnnaKaisaIkonen", type: "Dot-SubDot", label: "point" },
        { source: "person_Anna-KaisaIkonen", target: "dot_roleinrelations_AnnaKaisaIkonen", type: "Person-Dot", label: "has" },
        { source: "dot_roleinrelations_AnnaKaisaIkonen", target: "subdot_roleinrelations_1_AnnaKaisaIkonen", type: "Dot-SubDot", label: "point" },
        { source: "person_Anna-KaisaIkonen", target: "dot_bilaterals_AnnaKaisaIkonen", type: "Person-Dot", label: "has" },
        { source: "dot_bilaterals_AnnaKaisaIkonen", target: "subdot_bilaterals_1_AnnaKaisaIkonen", type: "Dot-SubDot", label: "point" },
        { source: "dot_bilaterals_AnnaKaisaIkonen", target: "subdot_bilaterals_2_AnnaKaisaIkonen", type: "Dot-SubDot", label: "point" },
        { source: "person_Anna-KaisaIkonen", target: "dot_alignandfriction_AnnaKaisaIkonen", type: "Person-Dot", label: "has" },
        { source: "dot_alignandfriction_AnnaKaisaIkonen", target: "subdot_alignandfriction_1_AnnaKaisaIkonen", type: "Dot-SubDot", label: "point" },
        { source: "dot_alignandfriction_AnnaKaisaIkonen", target: "subdot_alignandfriction_2_AnnaKaisaIkonen", type: "Dot-SubDot", label: "point" },
        { source: "person_Anna-KaisaIkonen", target: "dot_conclusions_AnnaKaisaIkonen", type: "Person-Dot", label: "has" },
        { source: "dot_conclusions_AnnaKaisaIkonen", target: "subdot_conclusions_1_AnnaKaisaIkonen", type: "Dot-SubDot", label: "point" },
  
        // ---------------------------
        // Edges for Alexander Stubb
        // ---------------------------
        { source: "person_AlexanderStubb", target: "dot_strategy_AlexanderStubb", type: "Person-Dot", label: "has" },
        { source: "dot_strategy_AlexanderStubb", target: "subdot_strategy_1_AlexanderStubb", type: "Dot-SubDot", label: "point" },
        { source: "dot_strategy_AlexanderStubb", target: "subdot_strategy_2_AlexanderStubb", type: "Dot-SubDot", label: "point" },
        { source: "dot_strategy_AlexanderStubb", target: "subdot_strategy_3_AlexanderStubb", type: "Dot-SubDot", label: "point" },
        { source: "person_AlexanderStubb", target: "dot_uaestatements_AlexanderStubb", type: "Person-Dot", label: "has" },
        { source: "dot_uaestatements_AlexanderStubb", target: "subdot_uaestatements_1_AlexanderStubb", type: "Dot-SubDot", label: "point" },
        { source: "person_AlexanderStubb", target: "dot_roleinrelations_AlexanderStubb", type: "Person-Dot", label: "has" },
        { source: "dot_roleinrelations_AlexanderStubb", target: "subdot_roleinrelations_1_AlexanderStubb", type: "Dot-SubDot", label: "point" },
        { source: "dot_roleinrelations_AlexanderStubb", target: "subdot_roleinrelations_2_AlexanderStubb", type: "Dot-SubDot", label: "point" },
        { source: "person_AlexanderStubb", target: "dot_bilaterals_AlexanderStubb", type: "Person-Dot", label: "has" },
        { source: "dot_bilaterals_AlexanderStubb", target: "subdot_bilaterals_1_AlexanderStubb", type: "Dot-SubDot", label: "point" },
        { source: "person_AlexanderStubb", target: "dot_alignandfriction_AlexanderStubb", type: "Person-Dot", label: "has" },
        { source: "dot_alignandfriction_AlexanderStubb", target: "subdot_alignandfriction_1_AlexanderStubb", type: "Dot-SubDot", label: "point" },
        { source: "dot_alignandfriction_AlexanderStubb", target: "subdot_alignandfriction_2_AlexanderStubb", type: "Dot-SubDot", label: "point" },
        { source: "person_AlexanderStubb", target: "dot_conclusions_AlexanderStubb", type: "Person-Dot", label: "has" },
        { source: "dot_conclusions_AlexanderStubb", target: "subdot_conclusions_1_AlexanderStubb", type: "Dot-SubDot", label: "point" },
        { source: "dot_conclusions_AlexanderStubb", target: "subdot_conclusions_2_AlexanderStubb", type: "Dot-SubDot", label: "point" },
  
        // ---------------------------
        // Edges for Tuula Yrjola
        // ---------------------------
        { source: "person_TuulaYrjola", target: "dot_strategy_TuulaYrjola", type: "Person-Dot", label: "has" },
        { source: "dot_strategy_TuulaYrjola", target: "subdot_strategy_1_TuulaYrjola", type: "Dot-SubDot", label: "point" },
        { source: "dot_strategy_TuulaYrjola", target: "subdot_strategy_2_TuulaYrjola", type: "Dot-SubDot", label: "point" },
        { source: "person_TuulaYrjola", target: "dot_uaestatements_TuulaYrjola", type: "Person-Dot", label: "has" },
        { source: "dot_uaestatements_TuulaYrjola", target: "subdot_uaestatements_1_TuulaYrjola", type: "Dot-SubDot", label: "point" },
        { source: "person_TuulaYrjola", target: "dot_roleinrelations_TuulaYrjola", type: "Person-Dot", label: "has" },
        { source: "dot_roleinrelations_TuulaYrjola", target: "subdot_roleinrelations_1_TuulaYrjola", type: "Dot-SubDot", label: "point" },
        { source: "dot_roleinrelations_TuulaYrjola", target: "subdot_roleinrelations_2_TuulaYrjola", type: "Dot-SubDot", label: "point" },
        { source: "person_TuulaYrjola", target: "dot_bilaterals_TuulaYrjola", type: "Person-Dot", label: "has" },
        { source: "dot_bilaterals_TuulaYrjola", target: "subdot_bilaterals_1_TuulaYrjola", type: "Dot-SubDot", label: "point" },
        { source: "person_TuulaYrjola", target: "dot_alignandfriction_TuulaYrjola", type: "Person-Dot", label: "has" },
        { source: "dot_alignandfriction_TuulaYrjola", target: "subdot_alignandfriction_1_TuulaYrjola", type: "Dot-SubDot", label: "point" },
        { source: "dot_alignandfriction_TuulaYrjola", target: "subdot_alignandfriction_2_TuulaYrjola", type: "Dot-SubDot", label: "point" },
        { source: "person_TuulaYrjola", target: "dot_conclusions_TuulaYrjola", type: "Person-Dot", label: "has" },
        { source: "dot_conclusions_TuulaYrjola", target: "subdot_conclusions_1_TuulaYrjola", type: "Dot-SubDot", label: "point" },
  
        // ---------------------------
        // Edges for Anna-Mari Wong Hamalainen
        // ---------------------------
        { source: "person_Anna-MariWongHamalainen", target: "dot_strategy_AnnaMariWongHamalainen", type: "Person-Dot", label: "has" },
        { source: "dot_strategy_AnnaMariWongHamalainen", target: "subdot_strategy_1_AnnaMariWongHamalainen", type: "Dot-SubDot", label: "point" },
        { source: "dot_strategy_AnnaMariWongHamalainen", target: "subdot_strategy_2_AnnaMariWongHamalainen", type: "Dot-SubDot", label: "point" },
        { source: "person_Anna-MariWongHamalainen", target: "dot_uaestatements_AnnaMariWongHamalainen", type: "Person-Dot", label: "has" },
        { source: "dot_uaestatements_AnnaMariWongHamalainen", target: "subdot_uaestatements_1_AnnaMariWongHamalainen", type: "Dot-SubDot", label: "point" },
        { source: "person_Anna-MariWongHamalainen", target: "dot_roleinrelations_AnnaMariWongHamalainen", type: "Person-Dot", label: "has" },
        { source: "dot_roleinrelations_AnnaMariWongHamalainen", target: "subdot_roleinrelations_1_AnnaMariWongHamalainen", type: "Dot-SubDot", label: "point" },
        { source: "person_Anna-MariWongHamalainen", target: "dot_bilaterals_AnnaMariWongHamalainen", type: "Person-Dot", label: "has" },
        { source: "dot_bilaterals_AnnaMariWongHamalainen", target: "subdot_bilaterals_1_AnnaMariWongHamalainen", type: "Dot-SubDot", label: "point" },
        { source: "person_Anna-MariWongHamalainen", target: "dot_alignandfriction_AnnaMariWongHamalainen", type: "Person-Dot", label: "has" },
        { source: "dot_alignandfriction_AnnaMariWongHamalainen", target: "subdot_alignandfriction_1_AnnaMariWongHamalainen", type: "Dot-SubDot", label: "point" },
        { source: "person_Anna-MariWongHamalainen", target: "dot_conclusions_AnnaMariWongHamalainen", type: "Person-Dot", label: "has" },
        { source: "dot_conclusions_AnnaMariWongHamalainen", target: "subdot_conclusions_1_AnnaMariWongHamalainen", type: "Dot-SubDot", label: "point" },
  
        // ---------------------------
        // Edges for Ville Brumme
        // ---------------------------
        { source: "person_VilleBrumme", target: "dot_strategy_VilleBrumme", type: "Person-Dot", label: "has" },
        { source: "dot_strategy_VilleBrumme", target: "subdot_strategy_1_VilleBrumme", type: "Dot-SubDot", label: "point" },
        { source: "dot_strategy_VilleBrumme", target: "subdot_strategy_2_VilleBrumme", type: "Dot-SubDot", label: "point" },
        { source: "dot_strategy_VilleBrumme", target: "subdot_strategy_3_VilleBrumme", type: "Dot-SubDot", label: "point" },
        { source: "person_VilleBrumme", target: "dot_uaestatements_VilleBrumme", type: "Person-Dot", label: "has" },
        { source: "dot_uaestatements_VilleBrumme", target: "subdot_uaestatements_1_VilleBrumme", type: "Dot-SubDot", label: "point" },
        { source: "dot_uaestatements_VilleBrumme", target: "subdot_uaestatements_2_VilleBrumme", type: "Dot-SubDot", label: "point" },
        { source: "person_VilleBrumme", target: "dot_roleinrelations_VilleBrumme", type: "Person-Dot", label: "has" },
        { source: "dot_roleinrelations_VilleBrumme", target: "subdot_roleinrelations_1_VilleBrumme", type: "Dot-SubDot", label: "point" },
        { source: "dot_roleinrelations_VilleBrumme", target: "subdot_roleinrelations_2_VilleBrumme", type: "Dot-SubDot", label: "point" },
        { source: "person_VilleBrumme", target: "dot_bilaterals_VilleBrumme", type: "Person-Dot", label: "has" },
        { source: "dot_bilaterals_VilleBrumme", target: "subdot_bilaterals_1_VilleBrumme", type: "Dot-SubDot", label: "point" },
        { source: "dot_bilaterals_VilleBrumme", target: "subdot_bilaterals_2_VilleBrumme", type: "Dot-SubDot", label: "point" },
        { source: "person_VilleBrumme", target: "dot_alignandfriction_VilleBrumme", type: "Person-Dot", label: "has" },
        { source: "dot_alignandfriction_VilleBrumme", target: "subdot_alignandfriction_1_VilleBrumme", type: "Dot-SubDot", label: "point" },
        { source: "dot_alignandfriction_VilleBrumme", target: "subdot_alignandfriction_2_VilleBrumme", type: "Dot-SubDot", label: "point" },
        { source: "person_VilleBrumme", target: "dot_conclusions_VilleBrumme", type: "Person-Dot", label: "has" },
        { source: "dot_conclusions_VilleBrumme", target: "subdot_conclusions_1_VilleBrumme", type: "Dot-SubDot", label: "point" },
  
        // ---------------------------
        // Edges for Elina Valtonen
        // ---------------------------
        { source: "person_ElinaValtonen", target: "dot_strategy_ElinaValtonen", type: "Person-Dot", label: "has" },
        { source: "dot_strategy_ElinaValtonen", target: "subdot_strategy_1_ElinaValtonen", type: "Dot-SubDot", label: "point" },
        { source: "dot_strategy_ElinaValtonen", target: "subdot_strategy_2_ElinaValtonen", type: "Dot-SubDot", label: "point" },
        { source: "person_ElinaValtonen", target: "dot_uaestatements_ElinaValtonen", type: "Person-Dot", label: "has" },
        { source: "dot_uaestatements_ElinaValtonen", target: "subdot_uaestatements_1_ElinaValtonen", type: "Dot-SubDot", label: "point" },
        { source: "person_ElinaValtonen", target: "dot_roleinrelations_ElinaValtonen", type: "Person-Dot", label: "has" },
        { source: "dot_roleinrelations_ElinaValtonen", target: "subdot_roleinrelations_1_ElinaValtonen", type: "Dot-SubDot", label: "point" },
        { source: "person_ElinaValtonen", target: "dot_bilaterals_ElinaValtonen", type: "Person-Dot", label: "has" },
        { source: "dot_bilaterals_ElinaValtonen", target: "subdot_bilaterals_1_ElinaValtonen", type: "Dot-SubDot", label: "point" },
        { source: "person_ElinaValtonen", target: "dot_alignandfriction_ElinaValtonen", type: "Person-Dot", label: "has" },
        { source: "dot_alignandfriction_ElinaValtonen", target: "subdot_alignandfriction_1_ElinaValtonen", type: "Dot-SubDot", label: "point" },
        { source: "person_ElinaValtonen", target: "dot_conclusions_ElinaValtonen", type: "Person-Dot", label: "has" },
        { source: "dot_conclusions_ElinaValtonen", target: "subdot_conclusions_1_ElinaValtonen", type: "Dot-SubDot", label: "point" },
  
        // ---------------------------
        // Edges for Laila Clyne
        // ---------------------------
        { source: "person_LailaClyne", target: "dot_strategy_LailaClyne", type: "Person-Dot", label: "has" },
        { source: "dot_strategy_LailaClyne", target: "subdot_strategy_1_LailaClyne", type: "Dot-SubDot", label: "point" },
        { source: "person_LailaClyne", target: "dot_uaestatements_LailaClyne", type: "Person-Dot", label: "has" },
        { source: "dot_uaestatements_LailaClyne", target: "subdot_uaestatements_1_LailaClyne", type: "Dot-SubDot", label: "point" },
        { source: "person_LailaClyne", target: "dot_roleinrelations_LailaClyne", type: "Person-Dot", label: "has" },
        { source: "dot_roleinrelations_LailaClyne", target: "subdot_roleinrelations_1_LailaClyne", type: "Dot-SubDot", label: "point" },
        { source: "person_LailaClyne", target: "dot_bilaterals_LailaClyne", type: "Person-Dot", label: "has" },
        { source: "dot_bilaterals_LailaClyne", target: "subdot_bilaterals_1_LailaClyne", type: "Dot-SubDot", label: "point" },
        { source: "person_LailaClyne", target: "dot_alignandfriction_LailaClyne", type: "Person-Dot", label: "has" },
        { source: "dot_alignandfriction_LailaClyne", target: "subdot_alignandfriction_1_LailaClyne", type: "Dot-SubDot", label: "point" },
        { source: "person_LailaClyne", target: "dot_conclusions_LailaClyne", type: "Person-Dot", label: "has" },
        { source: "dot_conclusions_LailaClyne", target: "subdot_conclusions_1_LailaClyne", type: "Dot-SubDot", label: "point" },
  
        // ---------------------------
        // Edges for Anna-Kaisa Heikkinen
        // ---------------------------
        { source: "person_Anna-KaisaHeikkinen", target: "dot_strategy_AnnaKaisaHeikkinen", type: "Person-Dot", label: "has" },
        { source: "dot_strategy_AnnaKaisaHeikkinen", target: "subdot_strategy_1_AnnaKaisaHeikkinen", type: "Dot-SubDot", label: "point" },
        { source: "dot_strategy_AnnaKaisaHeikkinen", target: "subdot_strategy_2_AnnaKaisaHeikkinen", type: "Dot-SubDot", label: "point" },
        { source: "person_Anna-KaisaHeikkinen", target: "dot_uaestatements_AnnaKaisaHeikkinen", type: "Person-Dot", label: "has" },
        { source: "dot_uaestatements_AnnaKaisaHeikkinen", target: "subdot_uaestatements_1_AnnaKaisaHeikkinen", type: "Dot-SubDot", label: "point" },
        { source: "person_Anna-KaisaHeikkinen", target: "dot_roleinrelations_AnnaKaisaHeikkinen", type: "Person-Dot", label: "has" },
        { source: "dot_roleinrelations_AnnaKaisaHeikkinen", target: "subdot_roleinrelations_1_AnnaKaisaHeikkinen", type: "Dot-SubDot", label: "point" },
        { source: "person_Anna-KaisaHeikkinen", target: "dot_bilaterals_AnnaKaisaHeikkinen", type: "Person-Dot", label: "has" },
        { source: "dot_bilaterals_AnnaKaisaHeikkinen", target: "subdot_bilaterals_1_AnnaKaisaHeikkinen", type: "Dot-SubDot", label: "point" },
        { source: "person_Anna-KaisaHeikkinen", target: "dot_alignandfriction_AnnaKaisaHeikkinen", type: "Person-Dot", label: "has" },
        { source: "dot_alignandfriction_AnnaKaisaHeikkinen", target: "subdot_alignandfriction_1_AnnaKaisaHeikkinen", type: "Dot-SubDot", label: "point" },
        { source: "person_Anna-KaisaHeikkinen", target: "dot_conclusions_AnnaKaisaHeikkinen", type: "Person-Dot", label: "has" },
        { source: "dot_conclusions_AnnaKaisaHeikkinen", target: "subdot_conclusions_1_AnnaKaisaHeikkinen", type: "Dot-SubDot", label: "point" },
  
        // ---------------------------
        // Edges for Anne M'Rabet
        // ---------------------------
        { source: "person_AnneMRabet", target: "dot_strategy_AnneMRabet", type: "Person-Dot", label: "has" },
        { source: "dot_strategy_AnneMRabet", target: "subdot_strategy_1_AnneMRabet", type: "Dot-SubDot", label: "point" },
        { source: "person_AnneMRabet", target: "dot_uaestatements_AnneMRabet", type: "Person-Dot", label: "has" },
        { source: "dot_uaestatements_AnneMRabet", target: "subdot_uaestatements_1_AnneMRabet", type: "Dot-SubDot", label: "point" },
        { source: "person_AnneMRabet", target: "dot_roleinrelations_AnneMRabet", type: "Person-Dot", label: "has" },
        { source: "dot_roleinrelations_AnneMRabet", target: "subdot_roleinrelations_1_AnneMRabet", type: "Dot-SubDot", label: "point" },
        { source: "person_AnneMRabet", target: "dot_bilaterals_AnneMRabet", type: "Person-Dot", label: "has" },
        { source: "dot_bilaterals_AnneMRabet", target: "subdot_bilaterals_1_AnneMRabet", type: "Dot-SubDot", label: "point" },
        { source: "person_AnneMRabet", target: "dot_alignandfriction_AnneMRabet", type: "Person-Dot", label: "has" },
        { source: "dot_alignandfriction_AnneMRabet", target: "subdot_alignandfriction_1_AnneMRabet", type: "Dot-SubDot", label: "point" },
        { source: "person_AnneMRabet", target: "dot_conclusions_AnneMRabet", type: "Person-Dot", label: "has" },
        { source: "dot_conclusions_AnneMRabet", target: "subdot_conclusions_1_AnneMRabet", type: "Dot-SubDot", label: "point" },
  
        // ---------------------------
        // Edges for Justin Hotard
        // ---------------------------
        { source: "person_JustinHotard", target: "dot_strategy_JustinHotard", type: "Person-Dot", label: "has" },
        { source: "dot_strategy_JustinHotard", target: "subdot_strategy_1_JustinHotard", type: "Dot-SubDot", label: "point" },
        { source: "dot_strategy_JustinHotard", target: "subdot_strategy_2_JustinHotard", type: "Dot-SubDot", label: "point" },
        { source: "person_JustinHotard", target: "dot_uaestatements_JustinHotard", type: "Person-Dot", label: "has" },
        { source: "dot_uaestatements_JustinHotard", target: "subdot_uaestatements_1_JustinHotard", type: "Dot-SubDot", label: "point" },
        { source: "person_JustinHotard", target: "dot_roleinrelations_JustinHotard", type: "Person-Dot", label: "has" },
        { source: "dot_roleinrelations_JustinHotard", target: "subdot_roleinrelations_1_JustinHotard", type: "Dot-SubDot", label: "point" },
        { source: "person_JustinHotard", target: "dot_bilaterals_JustinHotard", type: "Person-Dot", label: "has" },
        { source: "dot_bilaterals_JustinHotard", target: "subdot_bilaterals_1_JustinHotard", type: "Dot-SubDot", label: "point" },
        { source: "person_JustinHotard", target: "dot_alignandfriction_JustinHotard", type: "Person-Dot", label: "has" },
        { source: "dot_alignandfriction_JustinHotard", target: "subdot_alignandfriction_1_JustinHotard", type: "Dot-SubDot", label: "point" },
        { source: "person_JustinHotard", target: "dot_conclusions_JustinHotard", type: "Person-Dot", label: "has" },
        { source: "dot_conclusions_JustinHotard", target: "subdot_conclusions_1_JustinHotard", type: "Dot-SubDot", label: "point" },
  
        // ---------------------------
        // Edges for Pekka Lundmark
        // ---------------------------
        { source: "person_PekkaLundmark", target: "dot_strategy_PekkaLundmark", type: "Person-Dot", label: "has" },
        { source: "dot_strategy_PekkaLundmark", target: "subdot_strategy_1_PekkaLundmark", type: "Dot-SubDot", label: "point" },
        { source: "dot_strategy_PekkaLundmark", target: "subdot_strategy_2_PekkaLundmark", type: "Dot-SubDot", label: "point" },
        { source: "person_PekkaLundmark", target: "dot_uaestatements_PekkaLundmark", type: "Person-Dot", label: "has" },
        { source: "dot_uaestatements_PekkaLundmark", target: "subdot_uaestatements_1_PekkaLundmark", type: "Dot-SubDot", label: "point" },
        { source: "person_PekkaLundmark", target: "dot_roleinrelations_PekkaLundmark", type: "Person-Dot", label: "has" },
        { source: "dot_roleinrelations_PekkaLundmark", target: "subdot_roleinrelations_1_PekkaLundmark", type: "Dot-SubDot", label: "point" },
        { source: "person_PekkaLundmark", target: "dot_bilaterals_PekkaLundmark", type: "Person-Dot", label: "has" },
        { source: "dot_bilaterals_PekkaLundmark", target: "subdot_bilaterals_1_PekkaLundmark", type: "Dot-SubDot", label: "point" },
        { source: "person_PekkaLundmark", target: "dot_alignandfriction_PekkaLundmark", type: "Person-Dot", label: "has" },
        { source: "dot_alignandfriction_PekkaLundmark", target: "subdot_alignandfriction_1_PekkaLundmark", type: "Dot-SubDot", label: "point" },
        { source: "person_PekkaLundmark", target: "dot_conclusions_PekkaLundmark", type: "Person-Dot", label: "has" },
        { source: "dot_conclusions_PekkaLundmark", target: "subdot_conclusions_1_PekkaLundmark", type: "Dot-SubDot", label: "point" },
  
        // ---------------------------
        // Edges for Sari Baldauf
        // ---------------------------
        { source: "person_SariBaldauf", target: "dot_strategy_SariBaldauf", type: "Person-Dot", label: "has" },
        { source: "dot_strategy_SariBaldauf", target: "subdot_strategy_1_SariBaldauf", type: "Dot-SubDot", label: "point" },
        { source: "person_SariBaldauf", target: "dot_uaestatements_SariBaldauf", type: "Person-Dot", label: "has" },
        { source: "dot_uaestatements_SariBaldauf", target: "subdot_uaestatements_1_SariBaldauf", type: "Dot-SubDot", label: "point" },
        { source: "person_SariBaldauf", target: "dot_roleinrelations_SariBaldauf", type: "Person-Dot", label: "has" },
        { source: "dot_roleinrelations_SariBaldauf", target: "subdot_roleinrelations_1_SariBaldauf", type: "Dot-SubDot", label: "point" },
        { source: "person_SariBaldauf", target: "dot_bilaterals_SariBaldauf", type: "Person-Dot", label: "has" },
        { source: "dot_bilaterals_SariBaldauf", target: "subdot_bilaterals_1_SariBaldauf", type: "Dot-SubDot", label: "point" },
        { source: "person_SariBaldauf", target: "dot_alignandfriction_SariBaldauf", type: "Person-Dot", label: "has" },
        { source: "dot_alignandfriction_SariBaldauf", target: "subdot_alignandfriction_1_SariBaldauf", type: "Dot-SubDot", label: "point" },
        { source: "person_SariBaldauf", target: "dot_conclusions_SariBaldauf", type: "Person-Dot", label: "has" },
        { source: "dot_conclusions_SariBaldauf", target: "subdot_conclusions_1_SariBaldauf", type: "Dot-SubDot", label: "point" },
  
        // ---------------------------
        // Edges for Håkan Agnevall
        // ---------------------------
        { source: "person_HåkanAgnevall", target: "dot_strategy_HakanAgnevall", type: "Person-Dot", label: "has" },
        { source: "dot_strategy_HakanAgnevall", target: "subdot_strategy_1_HakanAgnevall", type: "Dot-SubDot", label: "point" },
        { source: "dot_strategy_HakanAgnevall", target: "subdot_strategy_2_HakanAgnevall", type: "Dot-SubDot", label: "point" },
        { source: "person_HåkanAgnevall", target: "dot_uaestatements_HakanAgnevall", type: "Person-Dot", label: "has" },
        { source: "dot_uaestatements_HakanAgnevall", target: "subdot_uaestatements_1_HakanAgnevall", type: "Dot-SubDot", label: "point" },
        { source: "person_HåkanAgnevall", target: "dot_roleinrelations_HakanAgnevall", type: "Person-Dot", label: "has" },
        { source: "dot_roleinrelations_HakanAgnevall", target: "subdot_roleinrelations_1_HakanAgnevall", type: "Dot-SubDot", label: "point" },
        { source: "person_HåkanAgnevall", target: "dot_bilaterals_HakanAgnevall", type: "Person-Dot", label: "has" },
        { source: "dot_bilaterals_HakanAgnevall", target: "subdot_bilaterals_1_HakanAgnevall", type: "Dot-SubDot", label: "point" },
        { source: "person_HåkanAgnevall", target: "dot_alignandfriction_HakanAgnevall", type: "Person-Dot", label: "has" },
        { source: "dot_alignandfriction_HakanAgnevall", target: "subdot_alignandfriction_1_HakanAgnevall", type: "Dot-SubDot", label: "point" },
        { source: "person_HåkanAgnevall", target: "dot_conclusions_HakanAgnevall", type: "Person-Dot", label: "has" },
        { source: "dot_conclusions_HakanAgnevall", target: "subdot_conclusions_1_HakanAgnevall", type: "Dot-SubDot", label: "point" },
  
        // ---------------------------
        // Edges for Representative of Ehrnooth family
        // ---------------------------
        { source: "person_EhrnroothFamily", target: "dot_strategy_EhrnoothFamily", type: "Person-Dot", label: "has" },
        { source: "dot_strategy_EhrnoothFamily", target: "subdot_strategy_1_EhrnoothFamily", type: "Dot-SubDot", label: "point" },
        { source: "person_EhrnroothFamily", target: "dot_uaestatements_EhrnoothFamily", type: "Person-Dot", label: "has" },
        { source: "dot_uaestatements_EhrnoothFamily", target: "subdot_uaestatements_1_EhrnoothFamily", type: "Dot-SubDot", label: "point" },
        { source: "person_EhrnroothFamily", target: "dot_roleinrelations_EhrnoothFamily", type: "Person-Dot", label: "has" },
        { source: "dot_roleinrelations_EhrnoothFamily", target: "subdot_roleinrelations_1_EhrnoothFamily", type: "Dot-SubDot", label: "point" },
        { source: "person_EhrnroothFamily", target: "dot_bilaterals_EhrnoothFamily", type: "Person-Dot", label: "has" },
        { source: "dot_bilaterals_EhrnoothFamily", target: "subdot_bilaterals_1_EhrnoothFamily", type: "Dot-SubDot", label: "point" },
        { source: "person_EhrnroothFamily", target: "dot_alignandfriction_EhrnoothFamily", type: "Person-Dot", label: "has" },
        { source: "dot_alignandfriction_EhrnoothFamily", target: "subdot_alignandfriction_1_EhrnoothFamily", type: "Dot-SubDot", label: "point" },
        { source: "person_EhrnroothFamily", target: "dot_conclusions_EhrnoothFamily", type: "Person-Dot", label: "has" },
        { source: "dot_conclusions_EhrnoothFamily", target: "subdot_conclusions_1_EhrnoothFamily", type: "Dot-SubDot", label: "point" },
  
        // ---------------------------
        // Edges for Robin Langenskiöld
        // ---------------------------
        { source: "person_RobinLangenskiöld", target: "dot_strategy_RobinLangenskiold", type: "Person-Dot", label: "has" },
        { source: "dot_strategy_RobinLangenskiold", target: "subdot_strategy_1_RobinLangenskiold", type: "Dot-SubDot", label: "point" },
        { source: "person_RobinLangenskiöld", target: "dot_uaestatements_RobinLangenskiold", type: "Person-Dot", label: "has" },
        { source: "dot_uaestatements_RobinLangenskiold", target: "subdot_uaestatements_1_RobinLangenskiold", type: "Dot-SubDot", label: "point" },
        { source: "person_RobinLangenskiöld", target: "dot_roleinrelations_RobinLangenskiold", type: "Person-Dot", label: "has" },
        { source: "dot_roleinrelations_RobinLangenskiold", target: "subdot_roleinrelations_1_RobinLangenskiold", type: "Dot-SubDot", label: "point" },
        { source: "person_RobinLangenskiöld", target: "dot_conclusions_RobinLangenskiold", type: "Person-Dot", label: "has" },
        { source: "dot_conclusions_RobinLangenskiold", target: "subdot_conclusions_1_RobinLangenskiold", type: "Dot-SubDot", label: "point" },
  
        // ---------------------------
        // Edges for Rafaela Seppälä
        // ---------------------------
        { source: "person_RafaelaSeppälä", target: "dot_strategy_RafaelaSeppala", type: "Person-Dot", label: "has" },
        { source: "dot_strategy_RafaelaSeppala", target: "subdot_strategy_1_RafaelaSeppala", type: "Dot-SubDot", label: "point" },
        { source: "person_RafaelaSeppälä", target: "dot_uaestatements_RafaelaSeppala", type: "Person-Dot", label: "has" },
        { source: "dot_uaestatements_RafaelaSeppala", target: "subdot_uaestatements_1_RafaelaSeppala", type: "Dot-SubDot", label: "point" },
        { source: "person_RafaelaSeppälä", target: "dot_roleinrelations_RafaelaSeppala", type: "Person-Dot", label: "has" },
        { source: "dot_roleinrelations_RafaelaSeppala", target: "subdot_roleinrelations_1_RafaelaSeppala", type: "Dot-SubDot", label: "point" },
        { source: "person_RafaelaSeppälä", target: "dot_conclusions_RafaelaSeppala", type: "Person-Dot", label: "has" },
        { source: "dot_conclusions_RafaelaSeppala", target: "subdot_conclusions_1_RafaelaSeppala", type: "Dot-SubDot", label: "point" },
  
        // ---------------------------
        // Edges for Björn Wahlroos
        // ---------------------------
        { source: "person_BjörnWahlroos", target: "dot_strategy_BjornWahlroos", type: "Person-Dot", label: "has" },
        { source: "dot_strategy_BjornWahlroos", target: "subdot_strategy_1_BjornWahlroos", type: "Dot-SubDot", label: "point" },
        { source: "person_BjörnWahlroos", target: "dot_uaestatements_BjornWahlroos", type: "Person-Dot", label: "has" },
        { source: "dot_uaestatements_BjornWahlroos", target: "subdot_uaestatements_1_BjornWahlroos", type: "Dot-SubDot", label: "point" },
        { source: "person_BjörnWahlroos", target: "dot_roleinrelations_BjornWahlroos", type: "Person-Dot", label: "has" },
        { source: "dot_roleinrelations_BjornWahlroos", target: "subdot_roleinrelations_1_BjornWahlroos", type: "Dot-SubDot", label: "point" },
        { source: "person_BjörnWahlroos", target: "dot_bilaterals_BjornWahlroos", type: "Person-Dot", label: "has" },
        { source: "dot_bilaterals_BjornWahlroos", target: "subdot_bilaterals_1_BjornWahlroos", type: "Dot-SubDot", label: "point" },
        { source: "person_BjörnWahlroos", target: "dot_alignandfriction_BjornWahlroos", type: "Person-Dot", label: "has" },
        { source: "dot_alignandfriction_BjornWahlroos", target: "subdot_alignandfriction_1_BjornWahlroos", type: "Dot-SubDot", label: "point" },
        { source: "person_BjörnWahlroos", target: "dot_conclusions_BjornWahlroos", type: "Person-Dot", label: "has" },
        { source: "dot_conclusions_BjornWahlroos", target: "subdot_conclusions_1_BjornWahlroos", type: "Dot-SubDot", label: "point" },
  
        // ---------------------------
        // Edges for Jyri Häkämies
        // ---------------------------
        { source: "person_JyriHäkämies", target: "dot_strategy_JyriHakamies", type: "Person-Dot", label: "has" },
        { source: "dot_strategy_JyriHakamies", target: "subdot_strategy_1_JyriHakamies", type: "Dot-SubDot", label: "point" },
        { source: "person_JyriHäkämies", target: "dot_uaestatements_JyriHakamies", type: "Person-Dot", label: "has" },
        { source: "dot_uaestatements_JyriHakamies", target: "subdot_uaestatements_1_JyriHakamies", type: "Dot-SubDot", label: "point" },
        { source: "person_JyriHäkämies", target: "dot_roleinrelations_JyriHakamies", type: "Person-Dot", label: "has" },
        { source: "dot_roleinrelations_JyriHakamies", target: "subdot_roleinrelations_1_JyriHakamies", type: "Dot-SubDot", label: "point" },
        { source: "person_JyriHäkämies", target: "dot_bilaterals_JyriHakamies", type: "Person-Dot", label: "has" },
        { source: "dot_bilaterals_JyriHakamies", target: "subdot_bilaterals_1_JyriHakamies", type: "Dot-SubDot", label: "point" },
        { source: "person_JyriHäkämies", target: "dot_alignandfriction_JyriHakamies", type: "Person-Dot", label: "has" },
        { source: "dot_alignandfriction_JyriHakamies", target: "subdot_alignandfriction_1_JyriHakamies", type: "Dot-SubDot", label: "point" },
        { source: "person_JyriHäkämies", target: "dot_conclusions_JyriHakamies", type: "Person-Dot", label: "has" },
        { source: "dot_conclusions_JyriHakamies", target: "subdot_conclusions_1_JyriHakamies", type: "Dot-SubDot", label: "point" },
  
        // ---------------------------
        // Edges for Jussi Halla-aho
        // ---------------------------
        { source: "person_JussiHallaaho", target: "dot_strategy_JussiHallaAho", type: "Person-Dot", label: "has" },
        { source: "dot_strategy_JussiHallaAho", target: "subdot_strategy_1_JussiHallaAho", type: "Dot-SubDot", label: "point" },
        { source: "person_JussiHallaaho", target: "dot_uaestatements_JussiHallaAho", type: "Person-Dot", label: "has" },
        { source: "dot_uaestatements_JussiHallaAho", target: "subdot_uaestatements_1_JussiHallaAho", type: "Dot-SubDot", label: "point" },
        { source: "person_JussiHallaaho", target: "dot_roleinrelations_JussiHallaAho", type: "Person-Dot", label: "has" },
        { source: "dot_roleinrelations_JussiHallaAho", target: "subdot_roleinrelations_1_JussiHallaAho", type: "Dot-SubDot", label: "point" },
        { source: "person_JussiHallaaho", target: "dot_bilaterals_JussiHallaAho", type: "Person-Dot", label: "has" },
        { source: "dot_bilaterals_JussiHallaAho", target: "subdot_bilaterals_1_JussiHallaAho", type: "Dot-SubDot", label: "point" },
        { source: "person_JussiHallaaho", target: "dot_alignandfriction_JussiHallaAho", type: "Person-Dot", label: "has" },
        { source: "dot_alignandfriction_JussiHallaAho", target: "subdot_alignandfriction_1_JussiHallaAho", type: "Dot-SubDot", label: "point" },
        { source: "person_JussiHallaaho", target: "dot_conclusions_JussiHallaAho", type: "Person-Dot", label: "has" },
        { source: "dot_conclusions_JussiHallaAho", target: "subdot_conclusions_1_JussiHallaAho", type: "Dot-SubDot", label: "point" },
  
        // ---------------------------
        // Edges for Nathali Ahlstrom
        // ---------------------------
        { source: "person_NathaliAhlstrom", target: "dot_strategy_NathaliAhlstrom", type: "Person-Dot", label: "has" },
        { source: "dot_strategy_NathaliAhlstrom", target: "subdot_strategy_1_NathaliAhlstrom", type: "Dot-SubDot", label: "point" },
        { source: "person_NathaliAhlstrom", target: "dot_uaestatements_NathaliAhlstrom", type: "Person-Dot", label: "has" },
        { source: "dot_uaestatements_NathaliAhlstrom", target: "subdot_uaestatements_1_NathaliAhlstrom", type: "Dot-SubDot", label: "point" },
        { source: "person_NathaliAhlstrom", target: "dot_roleinrelations_NathaliAhlstrom", type: "Person-Dot", label: "has" },
        { source: "dot_roleinrelations_NathaliAhlstrom", target: "subdot_roleinrelations_1_NathaliAhlstrom", type: "Dot-SubDot", label: "point" },
        { source: "person_NathaliAhlstrom", target: "dot_bilaterals_NathaliAhlstrom", type: "Person-Dot", label: "has" },
        { source: "dot_bilaterals_NathaliAhlstrom", target: "subdot_bilaterals_1_NathaliAhlstrom", type: "Dot-SubDot", label: "point" },
        { source: "person_NathaliAhlstrom", target: "dot_alignandfriction_NathaliAhlstrom", type: "Person-Dot", label: "has" },
        { source: "dot_alignandfriction_NathaliAhlstrom", target: "subdot_alignandfriction_1_NathaliAhlstrom", type: "Dot-SubDot", label: "point" },
        { source: "person_NathaliAhlstrom", target: "dot_conclusions_NathaliAhlstrom", type: "Person-Dot", label: "has" },
        { source: "dot_conclusions_NathaliAhlstrom", target: "subdot_conclusions_1_NathaliAhlstrom", type: "Dot-SubDot", label: "point" },
  
        // ---------------------------
        // Edges for Seppo Vikström
        // ---------------------------
        { source: "person_SeppoVikström", target: "dot_strategy_SeppoVikstrom", type: "Person-Dot", label: "has" },
        { source: "dot_strategy_SeppoVikstrom", target: "subdot_strategy_1_SeppoVikstrom", type: "Dot-SubDot", label: "point" },
        { source: "person_SeppoVikström", target: "dot_uaestatements_SeppoVikstrom", type: "Person-Dot", label: "has" },
        { source: "dot_uaestatements_SeppoVikstrom", target: "subdot_uaestatements_1_SeppoVikstrom", type: "Dot-SubDot", label: "point" },
        { source: "person_SeppoVikström", target: "dot_roleinrelations_SeppoVikstrom", type: "Person-Dot", label: "has" },
        { source: "dot_roleinrelations_SeppoVikstrom", target: "subdot_roleinrelations_1_SeppoVikstrom", type: "Dot-SubDot", label: "point" },
        { source: "person_SeppoVikström", target: "dot_bilaterals_SeppoVikstrom", type: "Person-Dot", label: "has" },
        { source: "dot_bilaterals_SeppoVikstrom", target: "subdot_bilaterals_1_SeppoVikstrom", type: "Dot-SubDot", label: "point" },
        { source: "person_SeppoVikström", target: "dot_alignandfriction_SeppoVikstrom", type: "Person-Dot", label: "has" },
        { source: "dot_alignandfriction_SeppoVikstrom", target: "subdot_alignandfriction_1_SeppoVikstrom", type: "Dot-SubDot", label: "point" },
        { source: "person_SeppoVikström", target: "dot_conclusions_SeppoVikstrom", type: "Person-Dot", label: "has" },
        { source: "dot_conclusions_SeppoVikstrom", target: "subdot_conclusions_1_SeppoVikstrom", type: "Dot-SubDot", label: "point" },
  
        // ---------------------------
        // Edges for Lassi Noponen
        // ---------------------------
        { source: "person_LassiNoponen", target: "dot_strategy_LassiNoponen", type: "Person-Dot", label: "has" },
        { source: "dot_strategy_LassiNoponen", target: "subdot_strategy_1_LassiNoponen", type: "Dot-SubDot", label: "point" },
        { source: "person_LassiNoponen", target: "dot_uaestatements_LassiNoponen", type: "Person-Dot", label: "has" },
        { source: "dot_uaestatements_LassiNoponen", target: "subdot_uaestatements_1_LassiNoponen", type: "Dot-SubDot", label: "point" },
        { source: "person_LassiNoponen", target: "dot_roleinrelations_LassiNoponen", type: "Person-Dot", label: "has" },
        { source: "dot_roleinrelations_LassiNoponen", target: "subdot_roleinrelations_1_LassiNoponen", type: "Dot-SubDot", label: "point" },
        { source: "person_LassiNoponen", target: "dot_bilaterals_LassiNoponen", type: "Person-Dot", label: "has" },
        { source: "dot_bilaterals_LassiNoponen", target: "subdot_bilaterals_1_LassiNoponen", type: "Dot-SubDot", label: "point" },
        { source: "person_LassiNoponen", target: "dot_alignandfriction_LassiNoponen", type: "Person-Dot", label: "has" },
        { source: "dot_alignandfriction_LassiNoponen", target: "subdot_alignandfriction_1_LassiNoponen", type: "Dot-SubDot", label: "point" },
        { source: "person_LassiNoponen", target: "dot_conclusions_LassiNoponen", type: "Person-Dot", label: "has" },
        { source: "dot_conclusions_LassiNoponen", target: "subdot_conclusions_1_LassiNoponen", type: "Dot-SubDot", label: "point" },
  
        // ---------------------------
        // Edges for Markus Rauramo
        // ---------------------------
        { source: "person_MarkusRauramo", target: "dot_strategy_MarkusRauramo", type: "Person-Dot", label: "has" },
        { source: "dot_strategy_MarkusRauramo", target: "subdot_strategy_1_MarkusRauramo", type: "Dot-SubDot", label: "point" },
        { source: "person_MarkusRauramo", target: "dot_uaestatements_MarkusRauramo", type: "Person-Dot", label: "has" },
        { source: "dot_uaestatements_MarkusRauramo", target: "subdot_uaestatements_1_MarkusRauramo", type: "Dot-SubDot", label: "point" },
        { source: "person_MarkusRauramo", target: "dot_roleinrelations_MarkusRauramo", type: "Person-Dot", label: "has" },
        { source: "dot_roleinrelations_MarkusRauramo", target: "subdot_roleinrelations_1_MarkusRauramo", type: "Dot-SubDot", label: "point" },
        { source: "person_MarkusRauramo", target: "dot_bilaterals_MarkusRauramo", type: "Person-Dot", label: "has" },
        { source: "dot_bilaterals_MarkusRauramo", target: "subdot_bilaterals_1_MarkusRauramo", type: "Dot-SubDot", label: "point" },
        { source: "person_MarkusRauramo", target: "dot_alignandfriction_MarkusRauramo", type: "Person-Dot", label: "has" },
        { source: "dot_alignandfriction_MarkusRauramo", target: "subdot_alignandfriction_1_MarkusRauramo", type: "Dot-SubDot", label: "point" },
        { source: "person_MarkusRauramo", target: "dot_conclusions_MarkusRauramo", type: "Person-Dot", label: "has" },
        { source: "dot_conclusions_MarkusRauramo", target: "subdot_conclusions_1_MarkusRauramo", type: "Dot-SubDot", label: "point" },
  
        // ---------------------------
        // Edges for Jubo Romakkaniemi
        // ---------------------------
        { source: "person_JuboRomakkaniemi", target: "dot_strategy_JuboRomakkaniemi", type: "Person-Dot", label: "has" },
        { source: "dot_strategy_JuboRomakkaniemi", target: "subdot_strategy_1_JuboRomakkaniemi", type: "Dot-SubDot", label: "point" },
        { source: "person_JuboRomakkaniemi", target: "dot_uaestatements_JuboRomakkaniemi", type: "Person-Dot", label: "has" },
        { source: "dot_uaestatements_JuboRomakkaniemi", target: "subdot_uaestatements_1_JuboRomakkaniemi", type: "Dot-SubDot", label: "point" },
        { source: "person_JuboRomakkaniemi", target: "dot_roleinrelations_JuboRomakkaniemi", type: "Person-Dot", label: "has" },
        { source: "dot_roleinrelations_JuboRomakkaniemi", target: "subdot_roleinrelations_1_JuboRomakkaniemi", type: "Dot-SubDot", label: "point" },
        { source: "person_JuboRomakkaniemi", target: "dot_bilaterals_JuboRomakkaniemi", type: "Person-Dot", label: "has" },
        { source: "dot_bilaterals_JuboRomakkaniemi", target: "subdot_bilaterals_1_JuboRomakkaniemi", type: "Dot-SubDot", label: "point" },
        { source: "person_JuboRomakkaniemi", target: "dot_alignandfriction_JuboRomakkaniemi", type: "Person-Dot", label: "has" },
        { source: "dot_alignandfriction_JuboRomakkaniemi", target: "subdot_alignandfriction_1_JuboRomakkaniemi", type: "Dot-SubDot", label: "point" },
        { source: "person_JuboRomakkaniemi", target: "dot_conclusions_JuboRomakkaniemi", type: "Person-Dot", label: "has" },
        { source: "dot_conclusions_JuboRomakkaniemi", target: "subdot_conclusions_1_JuboRomakkaniemi", type: "Dot-SubDot", label: "point" }
      ]
    }
  };
  

  // Set container height
  useEffect(() => {
    setContainerHeight(600);
  }, []);

  useEffect(() => {
    if (!svgRef.current || !selectedFaculty) return;

    // Clear previous visualisation
    d3.select(svgRef.current).selectAll("*").remove();

    const svg = d3.select(svgRef.current);
    const width = parseInt(svg.style("width"));
    const height = containerHeight - 20; // account for padding
    const centerX = width / 2;
    const centerY = height / 2 - 30;

    // Use selectedFaculty to filter data:
    const personId = `person_${selectedFaculty.id.replace(/\s+/g, "")}`;
    // const personId = "person_" + selectedFaculty.id.replace(/[^A-Za-z0-9]/g, "");



    const allNodes = data.graph.nodes;
    const allEdges = data.graph.edges;

    // Find the Person node that matches selectedFaculty
    const personNode = allNodes.find(n => n.id === personId);

    if (!personNode) {
      svg.append("text")
        .attr("x", centerX)
        .attr("y", centerY)
        .attr("text-anchor", "middle")
        .style("font-size", "14px")
        .style("fill", "#666")
        .text(`No data found for ${selectedFaculty.id}`);
      return;
    }

    // Gather Dot nodes connected to the Person via "Person-Dot" edges
    const personDotEdges = allEdges.filter(
      e => e.source === personNode.id && e.type === "Person-Dot"
    );
    const dotIds = personDotEdges.map(e => e.target);
    const dotNodes = allNodes.filter(n => dotIds.includes(n.id));

    // For each Dot node, gather the SubDot nodes via "Dot-SubDot" edges
    let subdotEdges = [];
    dotNodes.forEach(dot => {
      const edges = allEdges.filter(
        e => e.source === dot.id && e.type === "Dot-SubDot"
      );
      subdotEdges = subdotEdges.concat(edges);
    });
    const subdotIds = subdotEdges.map(e => e.target);
    const subdotNodes = allNodes.filter(n => subdotIds.includes(n.id));

    // Combine only the relevant nodes and edges
    const relevantNodes = [personNode, ...dotNodes, ...subdotNodes];
    const relevantEdges = [...personDotEdges, ...subdotEdges];

    // Create a container group for zoom/pan
    const containerGroup = svg.append("g").attr("class", "container-group");

    // Set initial positions
    personNode.x = centerX;
    personNode.y = centerY;

    // Layout Dot nodes in a circle around the person
    dotNodes.forEach((dot, i) => {
      const angle = (i / dotNodes.length) * 2 * Math.PI;
      const radius = 150;
      dot.x = centerX + radius * Math.cos(angle);
      dot.y = centerY + radius * Math.sin(angle);
    });

    // Position SubDot nodes relative to their parent Dot
    const dotIdMap = {};
    dotNodes.forEach(dot => {
      dotIdMap[dot.id] = dot;
    });
    subdotEdges.forEach(e => {
      const parentDot = dotIdMap[e.source];
      const subdot = subdotNodes.find(n => n.id === e.target);
      if (parentDot && subdot) {
        // Arrange in a small circle around the parent Dot.
        const angle = (Math.random() * 2 * Math.PI);
        const radius = 50;
        subdot.x = parentDot.x + radius * Math.cos(angle);
        subdot.y = parentDot.y + radius * Math.sin(angle);
      }
    });

    // Tooltip (text only, no rectangle)
    const tooltip = containerGroup.append("g")
      .attr("class", "tooltip")
      .style("opacity", 0);
    const tooltipText = tooltip.append("text")
      .attr("fill", "#333")
      .style("font-size", "12px");

    // Force simulation with relevant nodes and edges
    const simulation = d3.forceSimulation(relevantNodes)
      .force("link", d3.forceLink(relevantEdges)
        .id(d => d.id)
        .distance(d => {
          if (d.type === "Person-Dot") return 150;
          if (d.type === "Dot-SubDot") return 50;
          return 80;
        })
      )
      .force("charge", d3.forceManyBody().strength(-200))
      .force("center", d3.forceCenter(centerX, centerY))
      .force("collide", d3.forceCollide().radius(35))
      .on("tick", ticked);

    // Draw links
    const linkGroup = containerGroup.append("g").attr("class", "links");
    const link = linkGroup.selectAll("g")
      .data(relevantEdges)
      .enter()
      .append("g");

    link.append("line")
      .attr("stroke", "#999")
      .attr("stroke-opacity", 0.6)
      .attr("stroke-width", 2);

    link.append("text")
      .attr("font-size", "10px")
      .attr("fill", "#666")
      .attr("text-anchor", "middle")
      .attr("dy", -5)
      .text(d => d.label);

    // Draw nodes
    const nodeGroup = containerGroup.append("g").attr("class", "nodes");
    const node = nodeGroup.selectAll(".node")
      .data(relevantNodes)
      .enter()
      .append("g")
      .attr("class", "node")
      .call(d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended)
      )
      .on("mouseover", function(event, d) {
        // Only show tooltip for Person and Dot nodes (not SubDot)
        if (d.type === "Person" || d.type === "Dot") {
          tooltipText.text(d.metadata?.hoverText || d.label);
          tooltip.attr("transform", `translate(${d.x + 20},${d.y - 30})`)
            .transition().duration(200)
            .style("opacity", 1);

          // Highlight connected links
          link.selectAll("line")
            .style("stroke", l =>
              (l.source.id === d.id || l.target.id === d.id) ? "#333" : "#999"
            )
            .style("stroke-width", l =>
              (l.source.id === d.id || l.target.id === d.id) ? 3 : 2
            )
            .style("stroke-opacity", l =>
              (l.source.id === d.id || l.target.id === d.id) ? 1 : 0.2
            );
        }
      })
      .on("mouseout", function() {
        tooltip.transition().duration(200).style("opacity", 0);
        link.selectAll("line")
          .style("stroke", "#999")
          .style("stroke-width", 2)
          .style("stroke-opacity", 0.6);
      });

    // Draw circles for nodes
    node.append("circle")
      .attr("r", d => d.type === "Person" ? 25 : (d.type === "Dot" ? 20 : 15))
      .attr("fill", d => {
        if (d.type === "Person") return "#5B8FF9";
        if (d.type === "Dot") return "#66C18C";
        return "#FFA500";
      })
      .attr("stroke", "#fff")
      .attr("stroke-width", 1.5);

    // Draw labels (single line, centred)
    node.append("text")
      .attr("text-anchor", "middle")
      .attr("dominant-baseline", "middle")
      .attr("fill", "#333")
      .attr("font-size", d => {
        if (d.type === "Person") return "12px";
        if (d.type === "Dot") return "10px";
        return "8px";
      })
      .text(d => d.label);

    // Zoom and pan
    const zoom = d3.zoom()
      .scaleExtent([0.5, 3])
      .on("zoom", event => {
        containerGroup.attr("transform", event.transform);
      });
    svg.call(zoom);

    // Update positions on each tick of the simulation
    function ticked() {
      relevantNodes.forEach(d => {
        d.x = Math.max(30, Math.min(width - 30, d.x));
        d.y = Math.max(30, Math.min(height - 60, d.y));
      });

      link.selectAll("line")
        .attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y);

      link.selectAll("text")
        .attr("x", d => (d.source.x + d.target.x) / 2)
        .attr("y", d => (d.source.y + d.target.y) / 2);

      node.attr("transform", d => `translate(${d.x},${d.y})`);
    }

    // Drag functions
    function dragstarted(event, d) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    }
    function dragged(event, d) {
      d.fx = event.x;
      d.fy = event.y;
    }
    function dragended(event, d) {
      if (!event.active) simulation.alphaTarget(0);
    }
  }, [selectedFaculty, data, containerHeight]);

  return (
    <div className="w-full" ref={containerRef}>
      <h3 className="text-xl font-semibold text-gray-700 uppercase mb-2">OVERVIEW</h3>
      <div className="border border-gray-200 rounded-lg bg-white p-2" style={{ height: `${containerHeight}px` }}>
        <svg ref={svgRef} width="100%" height="100%" />
      </div>
    </div>
  );
};

export default MinisterNetwork;













