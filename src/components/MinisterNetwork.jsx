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






import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

const MinisterNetwork = ({ selectedFaculty }) => {
  const svgRef = useRef(null);
  const containerRef = useRef(null);
  const [containerHeight, setContainerHeight] = useState(320);
  
  // Expanded data structure with more detailed information and edge labels
  const data = {
    "graph": {
      "nodes": [
        {
          "id": "person_DavidAWeitz",
          "label": "David A. Weitz",
          "type": "Person",
          "metadata": {
            "shortBio": "Professor of Physics and Applied Physics, focusing on soft matter physics, materials science, and bioengineering applications.",
            "keyPoints": [
              "Leads research on complex fluids and soft materials",
              "Pioneer in microfluidics technology",
              "Collaborates extensively across disciplines"
            ],
            "hoverText": "David A. Weitz directs a lab researching soft condensed matter physics and biophysics."
          }
        },
        {
          "id": "tag_DW_Microfluidics",
          "label": "Microfluidics",
          "type": "Tag",
          "metadata": {
            "hoverText": "The manipulation of fluids at the microscale for applications in biology, chemistry, and medicine."
          }
        },
        {
          "id": "tag_DW_SoftMatter",
          "label": "Soft Matter Physics",
          "type": "Tag",
          "metadata": {
            "hoverText": "The study of materials that are easily deformed by thermal fluctuations or external forces."
          }
        },
        {
          "id": "tag_DW_MaterialsScience",
          "label": "Materials Science",
          "type": "Tag",
          "metadata": {
            "hoverText": "Interdisciplinary field involving the properties and applications of materials."
          }
        },
        {
          "id": "tag_DW_Bioengineering",
          "label": "Bioengineering",
          "type": "Tag",
          "metadata": {
            "hoverText": "Application of engineering principles to biological systems for medical advances."
          }
        },
        {
          "id": "tag_DW_Nanotechnology",
          "label": "Nanotechnology",
          "type": "Tag",
          "metadata": {
            "hoverText": "Manipulation of matter on an atomic, molecular, and supramolecular scale."
          }
        },
        
        {
          "id": "person_JoannaAizenberg",
          "label": "Joanna Aizenberg",
          "type": "Person",
          "metadata": {
            "shortBio": "Professor of Materials Science, known for innovative biomimetic materials and adaptive surface technologies.",
            "keyPoints": [
              "Develops bio-inspired materials and surfaces",
              "Pioneered SLIPS technology for repellent surfaces",
              "Works at the intersection of chemistry, biology, and materials"
            ],
            "hoverText": "Joanna Aizenberg researches biomimetic materials and adaptive surfaces inspired by natural systems."
          }
        },
        {
          "id": "tag_JA_BiomimeticMaterials",
          "label": "Biomimetic Materials",
          "type": "Tag",
          "metadata": {
            "hoverText": "Materials designed to mimic biological systems and natural structures."
          }
        },
        {
          "id": "tag_JA_AdaptiveSurfaces",
          "label": "Adaptive Surfaces",
          "type": "Tag",
          "metadata": {
            "hoverText": "Surfaces that can change their properties in response to environmental stimuli."
          }
        },
        {
          "id": "tag_JA_NanostructuredMaterials",
          "label": "Nanostructured Materials",
          "type": "Tag",
          "metadata": {
            "hoverText": "Materials with designed features at the nanoscale that affect their properties."
          }
        },
        {
          "id": "tag_JA_SelfAssembly",
          "label": "Self-Assembly",
          "type": "Tag",
          "metadata": {
            "hoverText": "The process where components organize themselves through local interactions."
          }
        }
      ],
      "edges": [
        {
          "source": "person_DavidAWeitz",
          "target": "tag_DW_Microfluidics",
          "type": "Person-Tag",
          "label": "Pioneer",
          "hoverInfo": "Pioneered microfluidic techniques for droplet-based experiments."
        },
        {
          "source": "person_DavidAWeitz",
          "target": "tag_DW_SoftMatter",
          "type": "Person-Tag",
          "label": "Expert",
          "hoverInfo": "Leading researcher in soft matter physics and complex fluids."
        },
        {
          "source": "person_DavidAWeitz",
          "target": "tag_DW_MaterialsScience",
          "type": "Person-Tag",
          "label": "Focus",
          "hoverInfo": "Develops novel materials with unique properties."
        },
        {
          "source": "person_DavidAWeitz",
          "target": "tag_DW_Bioengineering",
          "type": "Person-Tag",
          "label": "Application",
          "hoverInfo": "Applies physics principles to biological systems and medical applications."
        },
        {
          "source": "person_DavidAWeitz",
          "target": "tag_DW_Nanotechnology",
          "type": "Person-Tag",
          "label": "Research",
          "hoverInfo": "Works on nanoscale structures and their applications."
        },
        
        {
          "source": "person_JoannaAizenberg",
          "target": "tag_JA_BiomimeticMaterials",
          "type": "Person-Tag",
          "label": "Pioneer",
          "hoverInfo": "Creates materials inspired by natural biological structures."
        },
        {
          "source": "person_JoannaAizenberg",
          "target": "tag_JA_AdaptiveSurfaces",
          "type": "Person-Tag",
          "label": "Developer",
          "hoverInfo": "Develops surfaces that can change properties in response to stimuli."
        },
        {
          "source": "person_JoannaAizenberg",
          "target": "tag_JA_NanostructuredMaterials",
          "type": "Person-Tag",
          "label": "Designer",
          "hoverInfo": "Designs materials with precisely controlled nanoscale features."
        },
        {
          "source": "person_JoannaAizenberg",
          "target": "tag_JA_SelfAssembly",
          "type": "Person-Tag",
          "label": "Researcher",
          "hoverInfo": "Researches systems that can organize themselves into complex structures."
        }
      ]
    }
  };

  // Calculate container height to match left panel
  useEffect(() => {
    // Set a fixed height that matches the left panel but doesn't exceed it
    setContainerHeight(600);
  }, []);

  useEffect(() => {
    if (!svgRef.current || !selectedFaculty) return;
    
    // Clear previous visualization
    d3.select(svgRef.current).selectAll("*").remove();
    
    const svg = d3.select(svgRef.current);
    const width = parseInt(svg.style("width"));
    const height = containerHeight - 20; // Account for padding
    
    // Filter data for the selected faculty only
    const personId = `person_${selectedFaculty.id.replace(/\s+/g, '')}`;
    
    // Find if this faculty exists in our data
    const personNode = data.graph.nodes.find(node => 
      node.id === personId || node.label === selectedFaculty.id
    );
    
    if (!personNode) {
      // Display a message when no detailed data is available
      svg.append("text")
        .attr("x", width / 2)
        .attr("y", height / 2)
        .attr("text-anchor", "middle")
        .style("font-size", "14px")
        .style("fill", "#666")
        .text(`No detailed network data available for ${selectedFaculty.id}`);
      return;
    }
    
    // Filter to only include this person and their connected tags
    const relevantEdges = data.graph.edges.filter(edge => 
      edge.source === personNode.id
    );
    
    const connectedTagIds = relevantEdges.map(edge => edge.target);
    const relevantNodes = [
      personNode,
      ...data.graph.nodes.filter(node => connectedTagIds.includes(node.id))
    ];
    
    // Tooltip div for hover information
    const tooltip = svg.append("g")
      .attr("class", "tooltip")
      .style("opacity", 0);
    
    tooltip.append("rect")
      .attr("rx", 5)
      .attr("ry", 5)
      .attr("width", 200)
      .attr("height", 40)
      .attr("fill", "white")
      .attr("stroke", "#ccc")
      .attr("stroke-width", 1);
    
    const tooltipText = tooltip.append("text")
      .attr("x", 10)
      .attr("y", 20)
      .attr("fill", "#333")
      .style("font-size", "12px");
    
    // Create a force simulation
    const simulation = d3.forceSimulation(relevantNodes)
      .force("link", d3.forceLink(relevantEdges)
        .id(d => d.id)
        .distance(80))
      .force("charge", d3.forceManyBody().strength(-200))
      .force("center", d3.forceCenter(width / 2, height / 2 - 30)) // Shift upward slightly
      .force("collide", d3.forceCollide().radius(35))
      .on("tick", ticked);
    
    // Create a group for the links
    const linkGroup = svg.append("g");
    
    const link = linkGroup.selectAll("g")
      .data(relevantEdges)
      .enter()
      .append("g");
    
    // Add lines for links
    link.append("line")
      .attr("stroke", "#999")
      .attr("stroke-opacity", 0.6)
      .attr("stroke-width", 2);
    
    // Add edge labels
    link.append("text")
      .attr("font-size", "10px")
      .attr("fill", "#666")
      .attr("text-anchor", "middle")
      .attr("dy", -5)
      .text(d => d.label);
    
    // Create node groups
    const node = svg.append("g")
      .selectAll(".node")
      .data(relevantNodes)
      .enter()
      .append("g")
      .attr("class", "node")
      .call(d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended))
      .on("mouseover", function(event, d) {
        // Show tooltip with hover information
        const hoverText = d.metadata?.hoverText || d.label;
        
        tooltipText.text(hoverText);
        const textLength = tooltipText.node().getComputedTextLength();
        
        tooltip.select("rect")
          .attr("width", textLength + 20);
          
        tooltip
          .attr("transform", `translate(${d.x + 20},${d.y - 30})`)
          .transition()
          .duration(200)
          .style("opacity", 1);
        
        // Highlight connections
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
      })
      .on("mouseout", function() {
        // Hide tooltip
        tooltip
          .transition()
          .duration(200)
          .style("opacity", 0);
        
        // Reset links
        link.selectAll("line")
          .style("stroke", "#999")
          .style("stroke-width", 2)
          .style("stroke-opacity", 0.6);
      });
    
    // Add circles to nodes
    node.append("circle")
      .attr("r", d => d.type === "Person" ? 25 : 20)
      .attr("fill", d => d.type === "Person" ? "#5B8FF9" : "#66C18C")
      .attr("stroke", "#fff")
      .attr("stroke-width", 1.5);
    
    // Add labels to nodes
    node.append("text")
      .text(d => d.label)
      .attr("font-size", d => d.type === "Person" ? "12px" : "10px")
      .attr("text-anchor", "middle")
      .attr("dy", d => d.type === "Person" ? "35px" : "30px")
      .attr("fill", "#333");
    
    // Set initial positions to ensure nodes are visible
    relevantNodes.forEach((node, i) => {
      const angle = (i / relevantNodes.length) * 2 * Math.PI;
      const radius = 80;
      
      if (node.type === "Person") {
        // Person in center
        node.x = width / 2;
        node.y = height / 2 - 30; // Shift upward
      } else {
        // Tags around in a circle
        node.x = width / 2 + radius * Math.cos(angle);
        node.y = (height / 2 - 30) + radius * Math.sin(angle); // Shift upward
      }
    });
    
    // Position nodes and edges in the visualization
    function ticked() {
      // Constrain nodes to the visualization area with tighter y-axis bounds
      relevantNodes.forEach(d => {
        d.x = Math.max(30, Math.min(width - 30, d.x));
        d.y = Math.max(30, Math.min(height - 60, d.y)); // Reduce bottom space
      });
      
      // Update link positions
      link.selectAll("line")
        .attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y);
      
      // Update edge label positions
      link.selectAll("text")
        .attr("x", d => (d.source.x + d.target.x) / 2)
        .attr("y", d => (d.source.y + d.target.y) / 2);
      
      // Update node positions
      node.attr("transform", d => `translate(${d.x},${d.y})`);
    }
    
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
      // Keep the nodes in fixed positions after dragging
      // d.fx = null;
      // d.fy = null;
    }
    
  }, [selectedFaculty, containerHeight]);

  return (
    <div className="w-full" ref={containerRef}>
      <h3 className="text-xl font-semibold text-gray-700 uppercase mb-2">RESEARCH NETWORK</h3>
      <div 
        className="border border-gray-200 rounded-lg bg-white p-2"
        style={{ height: `${containerHeight}px` }}
      >
        <svg ref={svgRef} width="100%" height="100%" />
      </div>
    </div>
  );
};

export default MinisterNetwork;














