// "use client"

// import { useEffect, useRef, useState } from "react";
// import * as d3 from "d3";

// // Define interfaces for our data
// const sampleData = {
//   graph: {
//     nodes: [
//       {
//         id: "person_SandraBergqvist",
//         label: "H.E. Sandra Bergqvist",
//         type: "Person",
//         metadata: {
//           shortBio:
//             "Finland's inaugural Minister of Youth, Sport and Physical Activity, focusing on youth welfare, sports as well-being, and inclusive fitness.",
//           keyPoints: [
//             "Oversees youth policy and student aid",
//             "Entrepreneurial background in agriculture from Swedish-speaking archipelago",
//             "Enjoys outdoor pursuits and running",
//           ],
//         },
//       },
//       {
//         id: "tag_SB_MinisterialRole",
//         label: "Ministerial Role (Youth, Sport, Physical Activity)",
//         type: "Tag",
//       },
//       {
//         id: "tag_SB_YouthWelfareAndSports",
//         label: "Youth Welfare & Sports",
//         type: "Tag",
//       },
//       {
//         id: "tag_SB_InclusionAndFitness",
//         label: "Inclusion & Fitness",
//         type: "Tag",
//       },
//       {
//         id: "tag_SB_EntrepreneurshipAgriculture",
//         label: "Entrepreneurship & Agriculture",
//         type: "Tag",
//       },
//       {
//         id: "tag_SB_OutdoorActiveLifestyle",
//         label: "Outdoor & Active Lifestyle",
//         type: "Tag",
//       },
//       {
//         id: "tag_SB_DiplomaticOpportunities",
//         label: "Diplomatic Opportunities",
//         type: "Tag",
//       },
//       {
//         id: "person_AnnaKaisaIkonen",
//         label: "H.E. Anna-Kaisa Ikonen",
//         type: "Person",
//         metadata: {
//           shortBio:
//             "Minister of Local & Regional Government, former Mayor of Tampere, known for innovative urban development and public-sector reforms.",
//           keyPoints: [
//             "Responsible for municipal affairs, new wellbeing counties, and digitalisation",
//             "Doctorate in social sciences with research on municipal leadership",
//             "Enjoys literature, theatre, skiing, and open-water swimming",
//           ],
//         },
//       },
//       {
//         id: "tag_AK_MinisterialRole",
//         label: "Ministerial Role (Local & Regional Government)",
//         type: "Tag",
//       },
//       {
//         id: "tag_AK_LocalRegionalGov",
//         label: "Local & Regional Governance",
//         type: "Tag",
//       },
//       {
//         id: "tag_AK_UrbanDevSmartCities",
//         label: "Urban Dev. & Smart Cities",
//         type: "Tag",
//       },
//       {
//         id: "tag_AK_HealthcareSocialWelfare",
//         label: "Healthcare & Social Welfare Reform",
//         type: "Tag",
//       },
//       {
//         id: "tag_AK_InnovativeCityMgmt",
//         label: "Innovative City Management",
//         type: "Tag",
//       },
//       {
//         id: "tag_AK_CulturalOutdoorInterests",
//         label: "Cultural & Outdoor Interests",
//         type: "Tag",
//       },
//       {
//         id: "tag_AK_DiplomaticOpportunities",
//         label: "Diplomatic Opportunities",
//         type: "Tag",
//       },
//     ],
//     edges: [
//       {
//         source: "person_SandraBergqvist",
//         target: "tag_SB_MinisterialRole",
//         type: "Person-Tag",
//         hoverInfo: "Finland's inaugural Minister of Youth, Sport & Physical Activity.",
//       },
//       {
//         source: "person_SandraBergqvist",
//         target: "tag_SB_YouthWelfareAndSports",
//         type: "Person-Tag",
//         hoverInfo: "Strategically focused on enhancing youth welfare & using sports as a tool for well-being.",
//       },
//       {
//         source: "person_SandraBergqvist",
//         target: "tag_SB_InclusionAndFitness",
//         type: "Person-Tag",
//         hoverInfo: "Her approach emphasizes inclusion and physical fitness for all.",
//       },
//       {
//         source: "person_SandraBergqvist",
//         target: "tag_SB_EntrepreneurshipAgriculture",
//         type: "Person-Tag",
//         hoverInfo: "Comes from a Swedish-speaking archipelago, with entrepreneurial background in agriculture.",
//       },
//       {
//         source: "person_SandraBergqvist",
//         target: "tag_SB_OutdoorActiveLifestyle",
//         type: "Person-Tag",
//         hoverInfo: "Enjoys outdoor pursuits and running in personal life.",
//       },
//       {
//         source: "person_SandraBergqvist",
//         target: "tag_SB_DiplomaticOpportunities",
//         type: "Person-Tag",
//         hoverInfo: "Portfolio offers leverage in discussing youth empowerment & sports cooperation with the UAE.",
//       },
//       {
//         source: "person_AnnaKaisaIkonen",
//         target: "tag_AK_MinisterialRole",
//         type: "Person-Tag",
//         hoverInfo: "Minister of Local & Regional Government overseeing municipal affairs & wellbeing counties.",
//       },
//       {
//         source: "person_AnnaKaisaIkonen",
//         target: "tag_AK_LocalRegionalGov",
//         type: "Person-Tag",
//         hoverInfo: "Responsible for local government efficiency & regional development in Finland.",
//       },
//       {
//         source: "person_AnnaKaisaIkonen",
//         target: "tag_AK_UrbanDevSmartCities",
//         type: "Person-Tag",
//         hoverInfo: "Led smart urban development as Mayor of Tampere, focusing on innovative city management.",
//       },
//       {
//         source: "person_AnnaKaisaIkonen",
//         target: "tag_AK_HealthcareSocialWelfare",
//         type: "Person-Tag",
//         hoverInfo: "Published research & led initiatives in healthcare & social welfare reform.",
//       },
//       {
//         source: "person_AnnaKaisaIkonen",
//         target: "tag_AK_InnovativeCityMgmt",
//         type: "Person-Tag",
//         hoverInfo: "Known for implementing forward-thinking city governance strategies.",
//       },
//       {
//         source: "person_AnnaKaisaIkonen",
//         target: "tag_AK_CulturalOutdoorInterests",
//         type: "Person-Tag",
//         hoverInfo: "Enjoys travel, literature, theatre, skiing, jogging, and open-water swimming.",
//       },
//       {
//         source: "person_AnnaKaisaIkonen",
//         target: "tag_AK_DiplomaticOpportunities",
//         type: "Person-Tag",
//         hoverInfo:
//           "Her portfolio aligns with UAE's ambitions for smart cities & e-government, opening avenues for cooperation.",
//       },
//     ],
//   },
// };



// function NetworkDiagram() {
//   const svgRef = useRef(null);
//   const tooltipRef = useRef(null);
//   const [selectedNode, setSelectedNode] = useState(null);
//   const [relatedNodes, setRelatedNodes] = useState([]);

//   // Get all person nodes for the selector
//   const personNodes = sampleData.graph.nodes.filter((node) => node.type === "Person");

//   // State for selected ministers
//   const [selectedMinisters, setSelectedMinisters] = useState([]);

//   // Toggle minister selection
//   const toggleMinister = (ministerId) => {
//     setSelectedMinisters((prev) =>
//       prev.includes(ministerId) ? prev.filter((id) => id !== ministerId) : [...prev, ministerId]
//     );
//   };

//   // Get filtered data based on selected ministers
//   const getFilteredData = () => {
//     if (selectedMinisters.length === 0) {
//       return { nodes: [], edges: [] };
//     }

//     // Get all selected person nodes
//     const selectedPersonNodes = sampleData.graph.nodes.filter(
//       (node) => node.type === "Person" && selectedMinisters.includes(node.id)
//     );

//     // Get all edges connected to selected persons
//     const relevantEdges = sampleData.graph.edges.filter((edge) => 
//       selectedMinisters.includes(edge.source)
//     );

//     // Get all tag nodes connected to selected persons
//     const connectedTagIds = relevantEdges.map((edge) => edge.target);
//     const connectedTagNodes = sampleData.graph.nodes.filter(
//       (node) => node.type === "Tag" && connectedTagIds.includes(node.id)
//     );

//     return {
//       nodes: [...selectedPersonNodes, ...connectedTagNodes],
//       edges: relevantEdges,
//     };
//   };

//   useEffect(() => {
//     if (!svgRef.current) return;

//     // Get filtered data
//     const { nodes, edges } = getFilteredData();

//     // Clear any existing SVG content
//     d3.select(svgRef.current).selectAll("*").remove();

//     // If no ministers selected, don't render anything
//     if (nodes.length === 0) return;

//     // Prepare nodes and links for D3
//     const simulationNodes = nodes.map((node) => ({
//       ...node,
//       x: undefined,
//       y: undefined,
//       vx: undefined,
//       vy: undefined,
//       fx: undefined,
//       fy: undefined,
//     }));

//     const simulationLinks = edges.map((edge) => ({
//       ...edge,
//       source: edge.source,
//       target: edge.target,
//     }));

//     // Get the SVG dimensions
//     const svgRect = svgRef.current.getBoundingClientRect();
//     const width = svgRect.width;
//     const height = 600;

//     const svg = d3
//       .select(svgRef.current)
//       .attr("width", width)
//       .attr("height", height)
//       .attr("viewBox", [0, 0, width, height])
//       .attr("style", "max-width: 100%; height: auto;");

//     // Create a tooltip div
//     const tooltip = d3
//       .select(tooltipRef.current)
//       .style("position", "absolute")
//       .style("visibility", "hidden")
//       .style("background-color", "white")
//       .style("border", "1px solid #ddd")
//       .style("border-radius", "4px")
//       .style("padding", "8px")
//       .style("font-size", "12px")
//       .style("pointer-events", "none")
//       .style("z-index", "10");

//     // Create the force simulation
//     const simulation = d3
//       .forceSimulation(simulationNodes)
//       .force(
//         "link",
//         d3
//           .forceLink(simulationLinks)
//           .id((d) => d.id)
//           .distance(150)
//       )
//       .force(
//         "charge",
//         d3.forceManyBody().strength((d) => (d.type === "Person" ? -800 : -400))
//       )
//       .force("center", d3.forceCenter(width / 2, height / 2))
//       .force(
//         "collision",
//         d3.forceCollide().radius((d) => (d.type === "Person" ? 80 : 60))
//       )
//       .force(
//         "radial",
//         d3
//           .forceRadial((d) => (d.type === "Person" ? 0 : 200), width / 2, height / 2)
//           .strength((d) => (d.type === "Person" ? 0.1 : 0.8))
//       );

//     // Create a container for all elements
//     const container = svg.append("g");

//     // Create the links
//     const link = container
//       .append("g")
//       .selectAll("line")
//       .data(simulationLinks)
//       .join("line")
//       .attr("stroke", "#999")
//       .attr("stroke-opacity", 0.6)
//       .attr("stroke-width", 1.5)
//       .on("mouseover", (event, d) => {
//         tooltip
//           .style("visibility", "visible")
//           .html(d.hoverInfo)
//           .style("left", event.pageX + 10 + "px")
//           .style("top", event.pageY - 10 + "px");
//       })
//       .on("mouseout", () => {
//         tooltip.style("visibility", "hidden");
//       });

//     // Create the nodes
//     const node = container
//       .append("g")
//       .selectAll("g")
//       .data(simulationNodes)
//       .join("g")
//       .attr("cursor", "pointer")
//       .call(drag(simulation))
//       .on("click", (event, d) => {
//         event.stopPropagation();

//         // Find related nodes (connected by edges)
//         const connectedNodes = simulationLinks
//           .filter(
//             (link) =>
//               (typeof link.source === "object" && link.source.id === d.id) ||
//               (typeof link.target === "object" && link.target.id === d.id)
//           )
//           .map((link) => {
//             const connectedId =
//               typeof link.source === "object" && link.source.id === d.id
//                 ? typeof link.target === "object"
//                   ? link.target.id
//                   : link.target
//                 : typeof link.source === "object"
//                   ? link.source.id
//                   : link.source;

//             return simulationNodes.find((node) => node.id === connectedId);
//           })
//           .filter(Boolean);

//         // Set selected node and related nodes
//         setSelectedNode(d);
//         setRelatedNodes(connectedNodes);

//         // Highlight the selected node and its connections
//         node.attr("opacity", (n) => (n.id === d.id || connectedNodes.some((cn) => cn.id === n.id) ? 1 : 0.3));
//         link.attr("stroke-opacity", (l) =>
//           (typeof l.source === "object" && l.source.id === d.id) ||
//           (typeof l.target === "object" && l.target.id === d.id)
//             ? 1
//             : 0.1
//         );
//       });

//     // Add circles for nodes
//     node
//       .append("circle")
//       .attr("r", (d) => (d.type === "Person" ? 35 : 25))
//       .attr("fill", (d) => (d.type === "Person" ? "#4f46e5" : "#10b981"))
//       .attr("stroke", "#fff")
//       .attr("stroke-width", 2);

//     // Add labels for nodes
//     node
//       .append("text")
//       .attr("text-anchor", "middle")
//       .attr("dy", (d) => (d.type === "Person" ? 45 : 35))
//       .attr("font-size", (d) => (d.type === "Person" ? "12px" : "10px"))
//       .attr("fill", "#333")
//       .text((d) => {
//         // For person nodes, remove the "H.E." prefix
//         if (d.type === "Person") {
//           return d.label.replace("H.E. ", "");
//         }
//         return d.label;
//       });

//     // Update positions on each tick of the simulation
//     simulation.on("tick", () => {
//       link
//         .attr("x1", (d) => (typeof d.source === "object" ? Math.max(30, Math.min(width - 30, d.source.x || 0)) : 0))
//         .attr("y1", (d) => (typeof d.source === "object" ? Math.max(30, Math.min(height - 30, d.source.y || 0)) : 0))
//         .attr("x2", (d) => (typeof d.target === "object" ? Math.max(30, Math.min(width - 30, d.target.x || 0)) : 0))
//         .attr("y2", (d) => (typeof d.target === "object" ? Math.max(30, Math.min(height - 30, d.target.y || 0)) : 0));

//       node.attr("transform", (d) => {
//         const x = Math.max(30, Math.min(width - 30, d.x || 0));
//         const y = Math.max(30, Math.min(height - 30, d.y || 0));
//         return `translate(${x},${y})`;
//       });
//     });

//     // Add zoom functionality
//     const zoom = d3
//       .zoom()
//       .scaleExtent([0.2, 5])
//       .on("zoom", (event) => {
//         container.attr("transform", event.transform);
//       });

//     svg.call(zoom);

//     // Reset selection when clicking on the background
//     svg.on("click", () => {
//       node.attr("opacity", 1);
//       link.attr("stroke-opacity", 0.6);
//       setSelectedNode(null);
//       setRelatedNodes([]);
//     });

//     // Drag function for nodes
//     function drag(simulation) {
//       function dragstarted(event) {
//         if (!event.active) simulation.alphaTarget(0.3).restart();
//         event.subject.fx = event.subject.x;
//         event.subject.fy = event.subject.y;
//       }

//       function dragged(event) {
//         event.subject.fx = event.x;
//         event.subject.fy = event.y;
//       }

//       function dragended(event) {
//         if (!event.active) simulation.alphaTarget(0);
//         event.subject.fx = null;
//         event.subject.fy = null;
//       }

//       return d3
//         .drag()
//         .on("start", dragstarted)
//         .on("drag", dragged)
//         .on("end", dragended);
//     }

//     // Cleanup function
//     return () => {
//       simulation.stop();
//     };
//   }, [selectedMinisters]);

//   return (
//     <div className="flex flex-col gap-4 p-4 w-full max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
//       {/* Minister selector */}
//       <div className="bg-white p-4 rounded-lg shadow-sm border">
//         <h3 className="text-sm font-medium mb-2">Select Ministers to Display:</h3>
//         <div className="flex flex-wrap gap-2">
//           {personNodes.map((person) => (
//             <div
//               key={person.id}
//               className={`cursor-pointer px-3 py-1 rounded-full ${
//                 selectedMinisters.includes(person.id)
//                   ? "bg-blue-600 text-white"
//                   : "bg-gray-100 text-gray-800 hover:bg-gray-200"
//               }`}
//               onClick={() => toggleMinister(person.id)}
//             >
//               {person.label.replace("H.E. ", "")}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Main content area with 2/3 - 1/3 split */}
//       <div className="flex flex-col lg:flex-row gap-4">
//         {/* Network visualization (2/3 width) */}
//         <div className="flex-1 lg:w-2/3 border rounded-lg shadow-sm bg-white">
//           <div className="p-4 border-b">
//             <h2 className="text-lg font-semibold">Finnish Ministers Network</h2>
//             <p className="text-sm text-gray-500">
//               {selectedMinisters.length === 0
//                 ? "Select ministers above to visualize their relationships"
//                 : `Showing ${selectedMinisters.length} minister${selectedMinisters.length > 1 ? "s" : ""} and their thematic tags`}
//             </p>
//           </div>
//           <div className="relative">
//             <svg ref={svgRef} className="w-full h-[600px]"></svg>
//             <div ref={tooltipRef} className="absolute"></div>
//           </div>
//           <div className="p-4 border-t">
//             <div className="flex items-center gap-4 text-sm">
//               <div className="flex items-center gap-2">
//                 <div className="w-3 h-3 rounded-full bg-[#4f46e5]"></div>
//                 <span>Person</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <div className="w-3 h-3 rounded-full bg-[#10b981]"></div>
//                 <span>Tag</span>
//               </div>
//             </div>
//             <p className="text-xs text-gray-500 mt-2">
//               Click on a node to see details. Drag nodes to reposition. Use mouse wheel to zoom in/out.
//             </p>
//           </div>
//         </div>

//         {/* Information panel (1/3 width) */}
//         <div className="lg:w-1/3 min-w-[300px]">
//           <div className="sticky top-4 border rounded-lg shadow-sm bg-white overflow-hidden">
//             <div className="p-4 border-b">
//               <h2 className="text-lg font-semibold">{selectedNode ? selectedNode.label : "Node Information"}</h2>
//               <p className="text-sm text-gray-500">
//                 {selectedNode
//                   ? selectedNode.type === "Person"
//                     ? "Minister Profile"
//                     : "Thematic Tag"
//                   : "Select a node to view details"}
//               </p>
//             </div>
//             <div className="p-4">
//               {selectedNode ? (
//                 selectedNode.type === "Person" && selectedNode.metadata ? (
//                   <div className="space-y-4">
//                     <div>
//                       <h3 className="font-medium">Biography</h3>
//                       <p className="text-sm">{selectedNode.metadata.shortBio}</p>
//                     </div>

//                     <div>
//                       <h3 className="font-medium">Key Points</h3>
//                       <ul className="list-disc pl-5 text-sm space-y-1">
//                         {selectedNode.metadata.keyPoints?.map((point, i) => (
//                           <li key={i}>{point}</li>
//                         ))}
//                       </ul>
//                     </div>

//                     <div>
//                       <h3 className="font-medium">Related Tags</h3>
//                       <div className="flex flex-wrap gap-2 mt-2">
//                         {relatedNodes.map((node) => (
//                           <span
//                             key={node.id}
//                             className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800"
//                           >
//                             {node.label}
//                           </span>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 ) : (
//                   <div className="space-y-4">
//                     <div>
//                       <h3 className="font-medium">Connected Ministers</h3>
//                       <div className="mt-2 space-y-2">
//                         {relatedNodes.map((node) => (
//                           <div key={node.id} className="p-2 bg-slate-50 rounded-md">
//                             <p className="font-medium">{node.label}</p>
//                             {node.metadata && (
//                               <p className="text-xs text-gray-500 truncate">{node.metadata.shortBio}</p>
//                             )}
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 )
//               ) : (
//                 <div className="text-center py-8">
//                   <p className="text-gray-500">
//                     Click on any node in the network diagram to view detailed information here.
//                   </p>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default NetworkDiagram;

















































// Define interfaces for our data


// const sampleData = {
//   graph: {
//     nodes: [
//       {
//         id: "person_SandraBergqvist",
//         label: "H.E. Sandra Bergqvist",
//         type: "Person",
//         metadata: {
//           shortBio:
//             "Finland's inaugural Minister of Youth, Sport and Physical Activity, focusing on youth welfare, sports as well-being, and inclusive fitness.",
//           keyPoints: [
//             "Oversees youth policy and student aid",
//             "Entrepreneurial background in agriculture from Swedish-speaking archipelago",
//             "Enjoys outdoor pursuits and running",
//           ],
//         },
//       },
//       {
//         id: "tag_SB_MinisterialRole",
//         label: "Ministerial Role (Youth, Sport, Physical Activity)",
//         type: "Tag",
//       },
//       {
//         id: "tag_SB_YouthWelfareAndSports",
//         label: "Youth Welfare & Sports",
//         type: "Tag",
//       },
//       {
//         id: "tag_SB_InclusionAndFitness",
//         label: "Inclusion & Fitness",
//         type: "Tag",
//       },
//       {
//         id: "tag_SB_EntrepreneurshipAgriculture",
//         label: "Entrepreneurship & Agriculture",
//         type: "Tag",
//       },
//       {
//         id: "tag_SB_OutdoorActiveLifestyle",
//         label: "Outdoor & Active Lifestyle",
//         type: "Tag",
//       },
//       {
//         id: "tag_SB_DiplomaticOpportunities",
//         label: "Diplomatic Opportunities",
//         type: "Tag",
//       },
//       {
//         id: "person_AnnaKaisaIkonen",
//         label: "H.E. Anna-Kaisa Ikonen",
//         type: "Person",
//         metadata: {
//           shortBio:
//             "Minister of Local & Regional Government, former Mayor of Tampere, known for innovative urban development and public-sector reforms.",
//           keyPoints: [
//             "Responsible for municipal affairs, new wellbeing counties, and digitalisation",
//             "Doctorate in social sciences with research on municipal leadership",
//             "Enjoys literature, theatre, skiing, and open-water swimming",
//           ],
//         },
//       },
//       {
//         id: "tag_AK_MinisterialRole",
//         label: "Ministerial Rolasdasdasdasdasdasdase (Local & Regional Government)",
//         type: "Tag",
//       },
//       {
//         id: "tag_AK_LocalRegionalGov",
//         label: "Local & Regional Governance",
//         type: "Tag",
//       },
//       {
//         id: "tag_AK_UrbanDevSmartCities",
//         label: "Urban Dev. & Smart Cities",
//         type: "Tag",
//       },
//       {
//         id: "tag_AK_HealthcareSocialWelfare",
//         label: "Healthcare & Social Welfare Reform",
//         type: "Tag",
//       },
//       {
//         id: "tag_AK_InnovativeCityMgmt",
//         label: "Innovative City Management",
//         type: "Tag",
//       },
//       {
//         id: "tag_AK_CulturalOutdoorInterests",
//         label: "Cultural & Outdoor Interests",
//         type: "Tag",
//       },
//       {
//         id: "tag_AK_DiplomaticOpportunities",
//         label: "Diplomatic Opportunities",
//         type: "Tag",
//       },
//     ],
//     edges: [
//       {
//         source: "person_SandraBergqvist",
//         target: "tag_SB_MinisterialRole",
//         type: "Person-Tag",
//         hoverInfo: "Finland's inaugural Minister of Youth, Sport & Physical Activity.",
//       },
//       {
//         source: "person_SandraBergqvist",
//         target: "tag_SB_YouthWelfareAndSports",
//         type: "Person-Tag",
//         hoverInfo: "Strategically focused on enhancing youth welfare & using sports as a tool for well-being.",
//       },
//       {
//         source: "person_SandraBergqvist",
//         target: "tag_SB_InclusionAndFitness",
//         type: "Person-Tag",
//         hoverInfo: "Her approach emphasizes inclusion and physical fitness for all.",
//       },
//       {
//         source: "person_SandraBergqvist",
//         target: "tag_SB_EntrepreneurshipAgriculture",
//         type: "Person-Tag",
//         hoverInfo: "Comes from a Swedish-speaking archipelago, with entrepreneurial background in agriculture.",
//       },
//       {
//         source: "person_SandraBergqvist",
//         target: "tag_SB_OutdoorActiveLifestyle",
//         type: "Person-Tag",
//         hoverInfo: "Enjoys outdoor pursuits and running in personal life.",
//       },
//       {
//         source: "person_SandraBergqvist",
//         target: "tag_SB_DiplomaticOpportunities",
//         type: "Person-Tag",
//         hoverInfo: "Portfolio offers leverage in discussing youth empowerment & sports cooperation with the UAE.",
//       },
//       {
//         source: "person_AnnaKaisaIkonen",
//         target: "tag_AK_MinisterialRole",
//         type: "Person-Tag",
//         hoverInfo: "Minister of Local & Regional Government overseeing municipal affairs & wellbeing counties.",
//       },
//       {
//         source: "person_AnnaKaisaIkonen",
//         target: "tag_AK_LocalRegionalGov",
//         type: "Person-Tag",
//         hoverInfo: "Responsible for local government efficiency & regional development in Finland.",
//       },
//       {
//         source: "person_AnnaKaisaIkonen",
//         target: "tag_AK_UrbanDevSmartCities",
//         type: "Person-Tag",
//         hoverInfo: "Led smart urban development as Mayor of Tampere, focusing on innovative city management.",
//       },
//       {
//         source: "person_AnnaKaisaIkonen",
//         target: "tag_AK_HealthcareSocialWelfare",
//         type: "Person-Tag",
//         hoverInfo: "Published research & led initiatives in healthcare & social welfare reform.",
//       },
//       {
//         source: "person_AnnaKaisaIkonen",
//         target: "tag_AK_InnovativeCityMgmt",
//         type: "Person-Tag",
//         hoverInfo: "Known for implementing forward-thinking city governance strategies.",
//       },
//       {
//         source: "person_AnnaKaisaIkonen",
//         target: "tag_AK_CulturalOutdoorInterests",
//         type: "Person-Tag",
//         hoverInfo: "Enjoys travel, literature, theatre, skiing, jogging, and open-water swimming.",
//       },
//       {
//         source: "person_AnnaKaisaIkonen",
//         target: "tag_AK_DiplomaticOpportunities",
//         type: "Person-Tag",
//         hoverInfo:
//           "Her portfolio aligns with UAE's ambitions for smart cities & e-government, opening avenues for cooperation.",
//       },
//     ],
//   },
// };





"use client"

import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

const sampleData = {
  graph: {
    nodes: [
      // 1. Sandra Bergqvist
      {
        id: "person_SandraBergqvist",
        label: "H.E. Sandra Bergqvist",
        type: "Person",
        metadata: {
          shortBio:
            "H.E. Ms Sandra Bergqvist serves as Finland's Minister of Youth, Sport and Physical Activity. Since her appointment in June 2023, she has been a dynamic force in promoting youth empowerment, fostering community sports initiatives and advocating for inclusive physical activity. With a strong academic background in social sciences and a wealth of experience in both municipal and national politics, she has dedicated her career to bridging grassroots initiatives with comprehensive government policy.",
          keyPoints: [
            "Appointed as Minister in June 2023",
            "Elected to Finnish Parliament in 2019 representing Finland Proper",
            "Former chairperson of the Swedish Assembly of Finland",
            "Extensive experience in municipal politics and educational initiatives",
            "Worked with the Ministry of Education and Culture and Åbo Akademi University",
          ],
          Tags: [
            "Youth Empowerment",
            "Sports Policy",
            "Inclusive Activity",
            "Municipal Leadership",
            "Educational Expertise",
            "Community Engagement"
          ],
        },
        
      },
      {
        id: "tag_SB_StrategicPositioning",
        label: "Strategic Positioning",
        type: "Tag",
        metadata: {
          subTags: [
            "Minister since June 2023, previously active in municipal politics and academia.",
            "Focuses on youth engagement, sports, and community well-being.",
          ],
        },
      },
      {
        id: "tag_SB_UAERelatedStatements",
        label: "UAE-Related Statements",
        type: "Tag",
        metadata: {
          subTags: [
            "Finland sees the UAE as a partner for sports diplomacy and youth programmes.",
          ],
        },
      },
      {
        id: "tag_SB_RoleInUERelations",
        label: "Role in UAE Relations",
        type: "Tag",
        metadata: {
          subTags: [
            "Engaged in youth exchanges, sports diplomacy, and inclusivity (e.g. Special Olympics World Games Abu Dhabi 2019).",
            "Potential for shared best practices in youth empowerment.",
          ],
        },
      },
      {
        id: "tag_SB_BilateralAgreements",
        label: "Bilateral Agreements",
        type: "Tag",
        metadata: {
          subTags: [
            "Collaboration mostly via cultural, educational, and sports events (e.g. Special Olympics 2019).",
          ],
        },
      },
      {
        id: "tag_SB_AlignmentFriction",
        label: "Alignment & Friction",
        type: "Tag",
        metadata: {
          subTags: [
            "Shared emphasis on sports as a unifying force and inclusivity.",
            "Minimal friction; differences in funding approaches present opportunities for exchange.",
          ],
        },
      },
      {
        id: "tag_SB_Conclusion",
        label: "Conclusion",
        type: "Tag",
        metadata: {
          subTags: [
            "Aims to expand sports-based collaboration and inclusive events, reinforcing goodwill.",
          ],
        },
      },

      // 2. Anna-Kaisa Ikonen
      {
        id: "person_AnnaKaisaIkonen",
        label: "H.E. Anna-Kaisa Ikonen",
        type: "Person",
        metadata: {
          shortBio:
            "H.E. Ms Anna-Kaisa Ikonen is Finland's Minister of Local and Regional Government, celebrated for her profound expertise in urban governance and regional planning. With an impressive academic background culminating in a Doctorate in Social Sciences and a distinguished record as former Mayor of Tampere, she has led substantial municipal reforms. Her work is focused on integrating innovative public policies with sustainable urban development and efficient public service management.",
          keyPoints: [
            "Serving as Minister since June 2023",
            "Former Mayor of Tampere with extensive executive experience",
            "Holds a Doctorate in Social Sciences",
            "Advocate for smart city initiatives and urban innovation",
            "Experienced in local government reform and digitalisation",
            "Focuses on sustainable development and regional planning",
          ],
          Tags: [
            "Urban Governance",
            "Local Leadership",
            "Smart Cities",
            "Sustainable Development",
            "Regional Planning",
            "Digital Innovation",
            "Public Administration"
          ],
        },
        
      },
      {
        id: "tag_AKI_StrategicPositioning",
        label: "Strategic Positioning",
        type: "Tag",
        metadata: {
          subTags: [
            "Minister since June 2023, previously Mayor of Tampere.",
            "Has extensive governance and public administration experience.",
          ],
        },
      },
      {
        id: "tag_AKI_UAERelatedStatements",
        label: "UAE-Related Statements",
        type: "Tag",
        metadata: {
          subTags: [
            "No direct UAE statements, but fosters interest in sustainable urban development and smart city initiatives.",
          ],
        },
      },
      {
        id: "tag_AKI_RoleInUERelations",
        label: "Role in UAE Relations",
        type: "Tag",
        metadata: {
          subTags: [
            "Potential for collaboration on urban innovation and digital public services.",
          ],
        },
      },
      {
        id: "tag_AKI_BilateralAgreements",
        label: "Bilateral Agreements",
        type: "Tag",
        metadata: {
          subTags: [
            "Existing treaties provide a foundation for potential city-level partnerships.",
          ],
        },
      },
      {
        id: "tag_AKI_AlignmentFriction",
        label: "Alignment & Friction",
        type: "Tag",
        metadata: {
          subTags: [
            "Shared focus on innovation and sustainable development.",
            "Municipal structure differences can be addressed through dialogue.",
          ],
        },
      },
      {
        id: "tag_AKI_Conclusion",
        label: "Conclusion",
        type: "Tag",
        metadata: {
          subTags: [
            "Aims to foster knowledge exchange in governance and innovation, strengthening municipal collaboration.",
          ],
        },
      },

      // 3. Alexander Stubb
      {
        id: "person_AlexanderStubb",
        label: "H.E. Alexander Stubb",
        type: "Person",
        metadata: {
          shortBio:
            "H.E. Alexander Stubb is the President of Finland, distinguished by an illustrious career in both national and international politics. With extensive experience as a former Prime Minister, Minister of Foreign Affairs, and a Member of the European Parliament, he is a staunch advocate for global diplomacy and economic innovation. His leadership is dedicated to elevating Finland’s international stature and strengthening bilateral relations, particularly with key partners such as the UAE, through pragmatic and forward-thinking initiatives.",
          keyPoints: [
            "Assumed presidency on 1 March 2024",
            "Former Prime Minister and Minister of Foreign Affairs",
            "Served as a Member of the European Parliament",
            "Active promoter of international trade and diplomatic relations",
            "Champion of the 'Team Finland' approach to global partnerships",
            "Led high-level trade missions to the UAE",
          ],
          Tags: [
            "International Politics",
            "Diplomacy",
            "Economic Innovation",
            "Global Partnerships",
            "Trade Initiatives",
            "Political Leadership",
            "EU Expertise"
          ],
        },
        
      },
      {
        id: "tag_AS_StrategicPositioning",
        label: "Strategic Positioning",
        type: "Tag",
        metadata: {
          subTags: [
            "President since March 2024, with extensive national and international political experience.",
            "Advocates proactive global engagement and partnerships beyond traditional allies.",
          ],
        },
      },
      {
        id: "tag_AS_UAERelatedStatements",
        label: "UAE-Related Statements",
        type: "Tag",
        metadata: {
          subTags: [
            "Highlighted eagerness to deepen ties in education, renewable energy, and innovative governance.",
          ],
        },
      },
      {
        id: "tag_AS_RoleInUERelations",
        label: "Role in UAE Relations",
        type: "Tag",
        metadata: {
          subTags: [
            "Guides Finland’s broader foreign policy, emphasising trade, education, and technology cooperation.",
          ],
        },
      },
      {
        id: "tag_AS_BilateralAgreements",
        label: "Bilateral Agreements",
        type: "Tag",
        metadata: {
          subTags: [
            "Backs established agreements, ensuring continuity in economic, taxation, and air services cooperation.",
          ],
        },
      },
      {
        id: "tag_AS_AlignmentFriction",
        label: "Alignment & Friction",
        type: "Tag",
        metadata: {
          subTags: [
            "Shared priorities in innovation and sustainability.",
            "Export controls and global crisis stances may create friction.",
          ],
        },
      },
      {
        id: "tag_AS_Conclusion",
        label: "Conclusion",
        type: "Tag",
        metadata: {
          subTags: [
            "Plans to deepen collaboration in technology, climate solutions, and education.",
          ],
        },
      },

      // 4. Tuula Yrjola
      {
        id: "person_TuulaYrjola",
        label: "H.E. Tuula Yrjola",
        type: "Person",
        metadata: {
          shortBio:
            "H.E. Tuula Yrjola is Finland's Ambassador to the UAE, bringing over 30 years of distinguished diplomatic experience to her role. An expert in conflict prevention and international crisis management, she is devoted to advancing economic diplomacy and cultural exchange. Her extensive career, which includes significant assignments across Europe and the Middle East, is marked by a proactive approach in engaging stakeholders to enhance bilateral relations and foster sustainable development.",
          keyPoints: [
            "Assumed role on 17 October 2023",
            "Over 30 years of experience in diplomatic service",
            "Specialist in conflict prevention and international crisis management",
            "Led initiatives in aviation engineering and sustainable development",
            "Promotes cultural and educational exchanges between Finland and the UAE",
            "Advocates for innovation and economic diplomacy",
          ],
          Tags: [
            "Diplomacy",
            "Economic Development",
            "Cultural Exchange",
            "Conflict Prevention",
            "Sustainable Growth",
            "International Relations",
            "Aviation Innovation"
          ],
        },
        
      },
      {
        id: "tag_TY_StrategicPositioning",
        label: "Strategic Positioning",
        type: "Tag",
        metadata: {
          subTags: [
            "Seasoned diplomat with 30 years’ regional experience, appointed in October 2023.",
          ],
        },
      },
      {
        id: "tag_TY_UAERelatedStatements",
        label: "UAE-Related Statements",
        type: "Tag",
        metadata: {
          subTags: [
            "Focuses on bolstering bilateral relations, Finnish business, and UAE political developments.",
          ],
        },
      },
      {
        id: "tag_TY_RoleInUERelations",
        label: "Role in UAE Relations",
        type: "Tag",
        metadata: {
          subTags: [
            "Heads Finland’s mission in Abu Dhabi, managing economic and political ties.",
          ],
        },
      },
      {
        id: "tag_TY_BilateralAgreements",
        label: "Bilateral Agreements",
        type: "Tag",
        metadata: {
          subTags: [
            "Facilitates existing treaties and pursues new MoUs in education, energy, and innovation.",
          ],
        },
      },
      {
        id: "tag_TY_AlignmentFriction",
        label: "Alignment & Friction",
        type: "Tag",
        metadata: {
          subTags: [
            "Strong alignment on sustainability; differences managed diplomatically.",
          ],
        },
      },
      {
        id: "tag_TY_Conclusion",
        label: "Conclusion",
        type: "Tag",
        metadata: {
          subTags: [
            "Seeks to expand trade, innovation, and cultural ties, aligning with UAE’s growth strategy.",
          ],
        },
      },

      // 5. Anna-Mari Wong Hamalainen
      {
        id: "person_AnnaMariWongHamalainen",
        label: "H.E. Anna-Mari Wong Hamalainen",
        type: "Person",
        metadata: {
          shortBio:
            "Anna-Mari Wong Hämäläinen is Finland's Director of Foreign and Security Policy, playing a pivotal role in shaping the country's international stance. With a robust background in European security, NATO engagement, and crisis management, she brings extensive experience from high-level diplomatic roles. Her work is crucial in safeguarding Finland's global interests and ensuring effective response to international challenges, all while contributing to strategic policy development within the Cabinet.",
          keyPoints: [
            "Serving as Director since September 2024",
            "Expert in European security and NATO-related issues",
            "Extensive experience in crisis management and diplomatic affairs",
            "Former Deputy European Correspondent with deep EU insights",
            "Influences Finland's strategic foreign policy framework",
            "Skilled in managing complex international security challenges",
          ],
          Tags: [
            "Foreign Policy",
            "Security Strategy",
            "NATO Engagement",
            "European Affairs",
            "Diplomatic Crisis",
            "International Relations",
            "Strategic Leadership"
          ],
        },
        
      },
      {
        id: "tag_AMWH_StrategicPositioning",
        label: "Strategic Positioning",
        type: "Tag",
        metadata: {
          subTags: [
            "Director of Foreign and Security Policy, specialising in NATO and EU matters.",
          ],
        },
      },
      {
        id: "tag_AMWH_UAERelatedStatements",
        label: "UAE-Related Statements",
        type: "Tag",
        metadata: {
          subTags: [
            "Has not commented on the UAE; main focus is European security.",
          ],
        },
      },
      {
        id: "tag_AMWH_RoleInUERelations",
        label: "Role in UAE Relations",
        type: "Tag",
        metadata: {
          subTags: [
            "Indirectly influences Finland–UAE cooperation through overall foreign policy frameworks.",
          ],
        },
      },
      {
        id: "tag_AMWH_BilateralAgreements",
        label: "Bilateral Agreements",
        type: "Tag",
        metadata: {
          subTags: [
            "Does not negotiate agreements but shapes policy contexts that support them.",
          ],
        },
      },
      {
        id: "tag_AMWH_AlignmentFriction",
        label: "Alignment & Friction",
        type: "Tag",
        metadata: {
          subTags: [
            "Potential differences in security positions, though no major friction noted.",
          ],
        },
      },
      {
        id: "tag_AMWH_Conclusion",
        label: "Conclusion",
        type: "Tag",
        metadata: {
          subTags: [
            "Supports Gulf cooperation within a NATO/EU-oriented security framework.",
          ],
        },
      },

      // 6. Ville Brumme
      {
        id: "person_VilleBrumme",
        label: "Ville Brumme",
        type: "Person",
        metadata: {
          shortBio:
            "Dr. Ville Brumme is Finland’s Director of Peace Mediation, a role established under the Office of the President in 2024 and appointed by President Alexander Stubb. As a senior adviser on international peace mediation, he leverages over a decade of field experience from the Martti Ahtisaari Peace Foundation (CMI), where he directed mediation projects across Africa, the Middle East, and Eurasia. His work spans conflict resolution efforts in regions such as Myanmar, Iraq, Libya, Yemen, Ukraine, and Palestine, making him an invaluable asset in bridging dialogue and fostering stability in conflict zones.",
          keyPoints: [
            "Appointed Director of Peace Mediation in March 2024",
            "Member of the presidential cabinet under President Stubb",
            "Over a decade of experience at the Martti Ahtisaari Peace Foundation (CMI)",
            "Led mediation projects in Africa, the Middle East, and Eurasia",
            "Involved in conflict resolution efforts in Myanmar, Iraq, Libya, Yemen, Ukraine, and Palestine",
            "Acts as a senior adviser on international peace mediation"
          ],
          Tags: [
            "Peace Mediation",
            "Conflict Resolution",
            "CMI Experience",
            "International Advising",
            "Field Mediation",
            "Diplomatic Network"
          ],
        },
        
      },
      {
        id: "tag_VB_StrategicPositioning",
        label: "Strategic Positioning",
        type: "Tag",
        metadata: {
          subTags: [
            "Experienced mediator from CMI, appointed in 2024.",
          ],
        },
      },
      {
        id: "tag_VB_UAERelatedStatements",
        label: "UAE-Related Statements",
        type: "Tag",
        metadata: {
          subTags: [
            "Recognises the UAE’s expanding mediation role and discreet facilitation approach.",
          ],
        },
      },
      {
        id: "tag_VB_RoleInUERelations",
        label: "Role in UAE Relations",
        type: "Tag",
        metadata: {
          subTags: [
            "Leads mediation efforts, partnering with the UAE on conflict resolution, notably in the Horn of Africa.",
          ],
        },
      },
      {
        id: "tag_VB_BilateralAgreements",
        label: "Bilateral Agreements",
        type: "Tag",
        metadata: {
          subTags: [
            "Participates in bilateral committees and high-level visits to strengthen mediation dialogue.",
          ],
        },
      },
      {
        id: "tag_VB_AlignmentFriction",
        label: "Alignment & Friction",
        type: "Tag",
        metadata: {
          subTags: [
            "Shared commitment to result-oriented mediation; possible differences in inclusivity remain manageable.",
          ],
        },
      },
      {
        id: "tag_VB_Conclusion",
        label: "Conclusion",
        type: "Tag",
        metadata: {
          subTags: [
            "Plans to deepen mediation partnerships, combining Finnish NGO expertise with UAE’s regional reach.",
          ],
        },
      },

      // 7. Elina Valtonen
      {
        id: "person_ElinaValtonen",
        label: "Elina Valtonen",
        type: "Person",
        metadata: {
          shortBio:
            "H.E. Elina Valtonen has been serving as Finland’s Minister for Foreign Affairs since June 2023. A key figure in the National Coalition Party and former vice-chair of the Parliament’s Foreign Affairs Committee, she brings a unique blend of technical and economic expertise, having previously worked in investment banking and computer programming. As Chairperson-in-Office for the OSCE in 2025, she is dedicated to enhancing European security, conflict resolution, and expanding Finland’s diplomatic and trade ties, including with strategic partners like the UAE.",
          keyPoints: [
            "Minister for Foreign Affairs since June 2023",
            "Deputy Chair of the National Coalition Party",
            "Former vice-chair of the Parliament’s Foreign Affairs Committee",
            "Holds master’s degrees in technology and economics",
            "Background in investment banking and computer programming",
            "Author of the economics book 'Freedom’s Victory'",
            "Chairperson-in-Office for the OSCE in 2025",
            "Focuses on European security and broad-based international cooperation"
          ],
          Tags: [
            "Foreign Affairs",
            "Economic Expertise",
            "Technical Background",
            "OSCE Leadership",
            "Diplomatic Strategy",
            "Security Policy",
            "Bilateral Ties"
          ],
        },
        
      },
      {
        id: "tag_EV_StrategicPositioning",
        label: "Strategic Positioning",
        type: "Tag",
        metadata: {
          subTags: [
            "Key foreign policy figure during NATO accession, with a finance and economics background.",
          ],
        },
      },
      {
        id: "tag_EV_UAERelatedStatements",
        label: "UAE-Related Statements",
        type: "Tag",
        metadata: {
          subTags: [
            "Discussed multi-sector cooperation with UAE at UNGA, indicating a constructive stance.",
          ],
        },
      },
      {
        id: "tag_EV_RoleInUERelations",
        label: "Role in UAE Relations",
        type: "Tag",
        metadata: {
          subTags: [
            "Leads overall diplomacy, focusing on trade, education, and the Joint Committee for collaboration.",
          ],
        },
      },
      {
        id: "tag_EV_BilateralAgreements",
        label: "Bilateral Agreements",
        type: "Tag",
        metadata: {
          subTags: [
            "Champions key agreements and chaired the second Joint Committee meeting.",
          ],
        },
      },
      {
        id: "tag_EV_AlignmentFriction",
        label: "Alignment & Friction",
        type: "Tag",
        metadata: {
          subTags: [
            "Converges on innovation, sustainability; diverges on sanctions or defence export policies.",
          ],
        },
      },
      {
        id: "tag_EV_Conclusion",
        label: "Conclusion",
        type: "Tag",
        metadata: {
          subTags: [
            "Seeks to bolster partnerships in commerce, education, and innovation.",
          ],
        },
      },

      // 8. Laila Clyne
      {
        id: "person_LailaClyne",
        label: "Laila Clyne",
        type: "Person",
        metadata: {
          shortBio:
            "Laila Clyne serves as a Diplomatic Advisor to Finland’s Minister for Foreign Affairs, Elina Valtonen. With a Master’s degree in International Relations from the University of Helsinki, she offers strategic counsel on diplomatic matters and contributes to the formulation and execution of Finland’s foreign policy. Her prior roles include serving as Second Secretary at Finland’s Permanent Mission in Geneva and as an Adviser at the Permanent Mission in New York, as well as experience from the Ministry of Health, which all enrich her ability to navigate complex international issues.",
          keyPoints: [
            "Advises Minister Elina Valtonen on diplomatic strategy",
            "Holds a Master’s degree in International Relations from the University of Helsinki",
            "Former Second Secretary at Finland’s Permanent Mission in Geneva",
            "Served as Adviser at Finland’s Permanent Mission in New York",
            "Has worked at the Ministry of Health",
            "Provides strategic guidance on international diplomatic matters"
          ],
          Tags: [
            "Diplomatic Advisor",
            "International Relations",
            "Geneva Experience",
            "New York Advisory",
            "Strategic Counsel",
            "Policy Execution",
            "Bilateral Relations"
          ],
        },
        
      },
      {
        id: "tag_LC_StrategicPositioning",
        label: "Strategic Positioning",
        type: "Tag",
        metadata: {
          subTags: [
            "Advises the Foreign Minister, drawing on UN and diplomatic mission experience.",
          ],
        },
      },
      {
        id: "tag_LC_UAERelatedStatements",
        label: "UAE-Related Statements",
        type: "Tag",
        metadata: {
          subTags: [
            "No direct UAE commentary; focuses on general foreign policy advice.",
          ],
        },
      },
      {
        id: "tag_LC_RoleInUERelations",
        label: "Role in UAE Relations",
        type: "Tag",
        metadata: {
          subTags: [
            "Supports ministerial decision-making, including potential UAE engagements.",
          ],
        },
      },
      {
        id: "tag_LC_BilateralAgreements",
        label: "Bilateral Agreements",
        type: "Tag",
        metadata: {
          subTags: [
            "Helps execute treaty obligations, though not personally signing or negotiating.",
          ],
        },
      },
      {
        id: "tag_LC_AlignmentFriction",
        label: "Alignment & Friction",
        type: "Tag",
        metadata: {
          subTags: [
            "No direct friction; role aligns with overall ministry policies.",
          ],
        },
      },
      {
        id: "tag_LC_Conclusion",
        label: "Conclusion",
        type: "Tag",
        metadata: {
          subTags: [
            "Will maintain advisory support, ensuring consistent foreign policy execution.",
          ],
        },
      },

      // 9. Anna-Kaisa Heikkinen
      {
        id: "person_AnnaKaisaHeikkinen",
        label: "H.E. Anna-Kaisa Heikkinen",
        type: "Person",
        metadata: {
          shortBio:
            "H.E. Anna-Kaisa Heikkinen is the Director General of the Department for Africa, the Middle East and Latin America at Finland’s Ministry for Foreign Affairs. Since joining the Ministry in 2003, she has developed a distinguished career that includes serving as Head of Mission in Maputo and Ramallah, and as a special adviser to Finland’s Prime Minister. Her role involves formulating regional strategies, promoting Finnish expertise in education, clean technology, and innovation, and strengthening partnerships across the Global South. She is a key architect in advancing Finland's strategic engagement in the Middle East, particularly with the UAE.",
          keyPoints: [
            "Director General for Africa, the Middle East and Latin America",
            "Joined the Ministry for Foreign Affairs in 2003",
            "Former Head of Mission in Maputo and Ramallah",
            "Served as special adviser to Finland’s Prime Minister (2014–2017)",
            "Develops regional strategies and partnerships in the Global South",
            "Focuses on education, clean technology, and innovation",
            "Facilitates high-level dialogues and trade missions with the UAE",
            "Advances Finland’s energy and sustainability agenda"
          ],
          Tags: [
            "Regional Strategy",
            "Global South",
            "Diplomatic Leadership",
            "Energy Cooperation",
            "Innovation",
            "Sustainability",
            "Middle East Expertise",
            "UAE Relations"
          ],
        },
        
      },
      {
        id: "tag_AKH_StrategicPositioning",
        label: "Strategic Positioning",
        type: "Tag",
        metadata: {
          subTags: [
            "Manages broad regional diplomacy, with ambassadorial experience.",
          ],
        },
      },
      {
        id: "tag_AKH_UAERelatedStatements",
        label: "UAE-Related Statements",
        type: "Tag",
        metadata: {
          subTags: [
            "Stressed UAE’s key role and led a sustainability-focused mission to Dubai.",
          ],
        },
      },
      {
        id: "tag_AKH_RoleInUERelations",
        label: "Role in UAE Relations",
        type: "Tag",
        metadata: {
          subTags: [
            "Sets strategic direction for Finland–UAE engagement, overseeing Embassy operations.",
          ],
        },
      },
      {
        id: "tag_AKH_BilateralAgreements",
        label: "Bilateral Agreements",
        type: "Tag",
        metadata: {
          subTags: [
            "Enables committees and MoUs on energy, education, AI, and space.",
          ],
        },
      },
      {
        id: "tag_AKH_AlignmentFriction",
        label: "Alignment & Friction",
        type: "Tag",
        metadata: {
          subTags: [
            "Shared focus on sustainability; EU stances can require careful balance.",
          ],
        },
      },
      {
        id: "tag_AKH_Conclusion",
        label: "Conclusion",
        type: "Tag",
        metadata: {
          subTags: [
            "Seeks to broaden collaboration in energy, digital, and regional programmes.",
          ],
        },
      },

      // 10. Anne MRabet
      {
        id: "person_AnneMRabet",
        label: "Anne MRabet",
        type: "Person",
        metadata: {
          shortBio:
            "Anne M’Rabet serves as the Desk Officer for the Persian Gulf region within Finland’s Ministry for Foreign Affairs, overseeing relations with the UAE, Bahrain, the GCC and the OIC. Operating within the Middle East and Gulf Unit, she plays a crucial role in managing bilateral relations and multilateral engagements across political, economic, cultural, and developmental sectors. Her work ensures that Finland’s strategic interests in the Gulf are aligned with national foreign policy objectives and regional initiatives.",
          keyPoints: [
            "Desk Officer for the Persian Gulf, covering UAE, Bahrain, GCC and OIC",
            "Operates within Finland’s Middle East and Gulf Unit",
            "Oversees bilateral relations and multilateral engagements",
            "Focuses on political, economic, cultural and developmental initiatives",
            "Ensures strategic alignment of Finland’s regional policies",
            "Coordinates Finland’s foreign policy in the Gulf region"
          ],
          Tags: [
            "Regional Coordination",
            "Middle East Affairs",
            "Gulf Relations",
            "Bilateral Engagement",
            "Multilateral Diplomacy",
            "Foreign Policy",
            "Strategic Alignment"
          ],
        },
        
      },
      {
        id: "tag_AMR_StrategicPositioning",
        label: "Strategic Positioning",
        type: "Tag",
        metadata: {
          subTags: [
            "Manages daily Gulf relations, focusing on UAE within the MFA.",
          ],
        },
      },
      {
        id: "tag_AMR_UAERelatedStatements",
        label: "UAE-Related Statements",
        type: "Tag",
        metadata: {
          subTags: [
            "No known statements; emphasises operational diplomacy and policy alignment.",
          ],
        },
      },
      {
        id: "tag_AMR_RoleInUERelations",
        label: "Role in UAE Relations",
        type: "Tag",
        metadata: {
          subTags: [
            "Coordinates internal Finnish policy on UAE, offering local expertise.",
          ],
        },
      },
      {
        id: "tag_AMR_BilateralAgreements",
        label: "Bilateral Agreements",
        type: "Tag",
        metadata: {
          subTags: [
            "Implements and tracks key committees and MoUs.",
          ],
        },
      },
      {
        id: "tag_AMR_AlignmentFriction",
        label: "Alignment & Friction",
        type: "Tag",
        metadata: {
          subTags: [
            "Handles day-to-day issues; minimal friction reported.",
          ],
        },
      },
      {
        id: "tag_AMR_Conclusion",
        label: "Conclusion",
        type: "Tag",
        metadata: {
          subTags: [
            "Aims to maintain stable ties and explore new trade or cultural opportunities.",
          ],
        },
      },

      // 11. Antti Herlin
      {
        id: "person_AnttiHerlin",
        label: "Antti Herlin",
        type: "Person",
        metadata: {
          shortBio:
            "Antti Herlin is Finland’s most influential industrialist and the Chairman of KONE, a global leader in elevator and escalator solutions. As the great-grandson of KONE’s founder, he has transformed a family-owned business into a multinational powerhouse, strategically expanding into emerging markets including the UAE and the wider Middle East. Renowned for his long-term planning, quiet diplomacy, and business pragmatism, Herlin is a key figure in Finland’s economic diplomacy and plays a pivotal role in shaping international trade relations. Beyond KONE, he holds significant stakes in other leading Finnish companies, reinforcing his profound influence in the national industrial and financial sectors.",
          keyPoints: [
            "Chairman of KONE, a leader in elevators, escalators and smart building solutions",
            "Great-grandson of KONE’s founder, steering family legacy",
            "Transformed KONE into a multinational powerhouse",
            "Oversaw strategic expansion into the UAE and Middle Eastern markets",
            "Holds major stakes in companies such as Cargotec and Security Trading Oy",
            "Known for long-term strategic planning and quiet diplomacy",
            "Drives Finland’s economic diplomacy and international trade initiatives"
          ],
          Tags: [
            "Industrial Leadership",
            "Economic Diplomacy",
            "Global Expansion",
            "Family Legacy",
            "Strategic Planning",
            "Market Innovator",
            "Financial Influence",
            "International Trade"
          ],
        },
        
      },
      {
        id: "tag_AH_StrategicPositioning",
        label: "Strategic Positioning",
        type: "Tag",
        metadata: {
          subTags: [
            "Influential industrialist behind KONE’s global expansion.",
          ],
        },
      },
      {
        id: "tag_AH_UAERelatedStatements",
        label: "UAE-Related Statements",
        type: "Tag",
        metadata: {
          subTags: [
            "Publicly silent, but KONE is heavily involved in major UAE infrastructure.",
          ],
        },
      },
      {
        id: "tag_AH_RoleInUERelations",
        label: "Role in UAE Relations",
        type: "Tag",
        metadata: {
          subTags: [
            "Boosts Finland–UAE trade ties through KONE’s large-scale infrastructure presence.",
          ],
        },
      },
      {
        id: "tag_AH_BilateralAgreements",
        label: "Bilateral Agreements",
        type: "Tag",
        metadata: {
          subTags: [
            "Operates commercially under Finnish trade frameworks, supporting overall bilateral commerce.",
          ],
        },
      },
      {
        id: "tag_AH_AlignmentFriction",
        label: "Alignment & Friction",
        type: "Tag",
        metadata: {
          subTags: [
            "Faces global competition but leverages Finnish tech and sustainability.",
          ],
        },
      },
      {
        id: "tag_AH_Conclusion",
        label: "Conclusion",
        type: "Tag",
        metadata: {
          subTags: [
            "Aims to grow KONE’s presence, highlighting sustainability and engineering excellence.",
          ],
        },
      },

      // 12. Justin Hotard
      {
        id: "person_JustinHotard",
        label: "Justin Hotard",
        type: "Person",
        metadata: {
          shortBio:
            "Justin Hotard is the incoming CEO of Nokia, having assumed his role in early 2024. With a robust background in high-performance computing, AI-driven infrastructure, and cloud technology from his previous tenure at Hewlett Packard Enterprise, he is set to steer Nokia into a new era of telecommunications innovation. Hotard’s leadership is focused on bolstering Nokia’s competitive edge in 5G, AI-driven networking, and cloud infrastructure, paving the way for transformative digital solutions and future-proofing the company’s global market position.",
          keyPoints: [
            "Assumed the role of President and CEO of Nokia in early 2024",
            "Former Executive Vice President & General Manager at HPE",
            "Expert in high-performance computing, AI and cloud infrastructure",
            "Focused on advancing 5G, AI-driven networking and edge computing",
            "Aims to drive transformative digital innovation at Nokia",
            "Strategically positions Nokia as a global telecommunications leader"
          ],
          Tags: [
            "Telecom Leadership",
            "AI Innovation",
            "Cloud Computing",
            "5G Expertise",
            "Digital Transformation",
            "Edge Computing",
            "Strategic Vision",
            "Next-Gen Networks"
          ],
        },
        
      },
      {
        id: "tag_JH_StrategicPositioning",
        label: "Strategic Positioning",
        type: "Tag",
        metadata: {
          subTags: [
            "Incoming Nokia CEO, with AI infrastructure experience from HPE.",
          ],
        },
      },
      {
        id: "tag_JH_UAERelatedStatements",
        label: "UAE-Related Statements",
        type: "Tag",
        metadata: {
          subTags: [
            "No public remarks, but inherits Nokia’s established 5G presence in the UAE.",
          ],
        },
      },
      {
        id: "tag_JH_RoleInUERelations",
        label: "Role in UAE Relations",
        type: "Tag",
        metadata: {
          subTags: [
            "Plans to expand advanced telecom solutions and sustain operator partnerships.",
          ],
        },
      },
      {
        id: "tag_JH_BilateralAgreements",
        label: "Bilateral Agreements",
        type: "Tag",
        metadata: {
          subTags: [
            "Backed by commercial MOUs; not directly part of government deals.",
          ],
        },
      },
      {
        id: "tag_JH_AlignmentFriction",
        label: "Alignment & Friction",
        type: "Tag",
        metadata: {
          subTags: [
            "Competitive market, but Nokia’s secure, green solutions align with UAE priorities.",
          ],
        },
      },
      {
        id: "tag_JH_Conclusion",
        label: "Conclusion",
        type: "Tag",
        metadata: {
          subTags: [
            "Will enhance collaboration on next-gen networking, matching UAE’s tech ambitions.",
          ],
        },
      },

      // 13. Pekka Lundmark
      {
        id: "person_PekkaLundmark",
        label: "Pekka Lundmark",
        type: "Person",
        metadata: {
          shortBio:
            "Pekka Lundmark served as the President and CEO of Nokia from August 2020 until early 2024, leading the company through a phase of significant technological transformation. His leadership focused on sustainable innovation in cloud networking, AI-powered automation, and green telecom solutions. Lundmark’s tenure was marked by forging strategic partnerships, especially in the UAE, which reinforced Finland’s economic diplomacy in the Gulf region and positioned Nokia as a pivotal player in global telecommunications.",
          keyPoints: [
            "Led Nokia as CEO from August 2020 to early 2024",
            "Oversaw transformative shifts in technology and sustainable innovation",
            "Focused on cloud networking, AI automation and green telecom solutions",
            "Forged strategic partnerships in the UAE and Gulf region",
            "Enhanced Finland’s economic diplomacy through telecom leadership",
            "Left a lasting legacy in global telecommunications innovation"
          ],
          Tags: [
            "Telecom Transformation",
            "Sustainable Innovation",
            "Cloud Networking",
            "AI Automation",
            "Economic Diplomacy",
            "Strategic Partnerships",
            "Legacy Leadership",
            "Green Solutions"
          ],
        },
        
      },
      {
        id: "tag_PL_StrategicPositioning",
        label: "Strategic Positioning",
        type: "Tag",
        metadata: {
          subTags: [
            "Outgoing CEO who guided Nokia’s shift towards 5G, AI, and sustainability.",
          ],
        },
      },
      {
        id: "tag_PL_UAERelatedStatements",
        label: "UAE-Related Statements",
        type: "Tag",
        metadata: {
          subTags: [
            "Commended UAE’s 5G and AI vision, reaffirming Nokia’s local commitment.",
          ],
        },
      },
      {
        id: "tag_PL_RoleInUERelations",
        label: "Role in UAE Relations",
        type: "Tag",
        metadata: {
          subTags: [
            "Developed key partnerships and advanced next-gen connectivity MoUs.",
          ],
        },
      },
      {
        id: "tag_PL_BilateralAgreements",
        label: "Bilateral Agreements",
        type: "Tag",
        metadata: {
          subTags: [
            "Secured significant deals, including 5G expansions and 6G research.",
          ],
        },
      },
      {
        id: "tag_PL_AlignmentFriction",
        label: "Alignment & Friction",
        type: "Tag",
        metadata: {
          subTags: [
            "Shared digital focus; overcame competitive and supply chain hurdles.",
          ],
        },
      },
      {
        id: "tag_PL_Conclusion",
        label: "Conclusion",
        type: "Tag",
        metadata: {
          subTags: [
            "Leaves a robust partnership foundation for Nokia’s future expansions.",
          ],
        },
      },

      // 14. Sari Baldauf
      {
        id: "person_SariBaldauf",
        label: "Sari Baldauf",
        type: "Person",
        metadata: {
          shortBio:
            "Sari Baldauf has served as the Chairman of Nokia since 2020 and is recognised as one of the most influential female executives in global telecommunications. With an illustrious career that includes leading Nokia’s Networks Business Group, she played a crucial role in expanding Nokia’s presence in mobile infrastructure and digital innovation worldwide. Her leadership continues to drive sustainable growth and strategic partnerships, reinforcing Finland’s position in international technology and economic diplomacy.",
          keyPoints: [
            "Chairman of Nokia since 2020",
            "One of the most senior female executives in global telecom",
            "Former leader of Nokia’s Networks Business Group",
            "Instrumental in expanding Nokia’s global mobile infrastructure",
            "Focuses on digital innovation and sustainable growth",
            "Drives strategic partnerships that enhance economic diplomacy",
            "Strengthens Finland’s international technology influence"
          ],
          Tags: [
            "Corporate Leadership",
            "Female Executive",
            "Telecom Innovation",
            "Global Expansion",
            "Sustainable Growth",
            "Strategic Partnerships",
            "Digital Transformation",
            "Economic Diplomacy"
          ],
        },
        
      },
      {
        id: "tag_SariB_StrategicPositioning",
        label: "Strategic Positioning",
        type: "Tag",
        metadata: {
          subTags: [
            "Prominent telecom executive with extensive international expansion experience.",
          ],
        },
      },
      {
        id: "tag_SariB_UAERelatedStatements",
        label: "UAE-Related Statements",
        type: "Tag",
        metadata: {
          subTags: [
            "Publicly highlights the Middle East’s importance as a growth market.",
          ],
        },
      },
      {
        id: "tag_SariB_RoleInUERelations",
        label: "Role in UAE Relations",
        type: "Tag",
        metadata: {
          subTags: [
            "Guides board strategy, fostering R&D and digital partnerships in the UAE.",
          ],
        },
      },
      {
        id: "tag_SariB_BilateralAgreements",
        label: "Bilateral Agreements",
        type: "Tag",
        metadata: {
          subTags: [
            "Backs Nokia’s deals and promotes digital economy collaboration.",
          ],
        },
      },
      {
        id: "tag_SariB_AlignmentFriction",
        label: "Alignment & Friction",
        type: "Tag",
        metadata: {
          subTags: [
            "Needs to reconcile EU standards with UAE tech environment amid stiff competition.",
          ],
        },
      },
      {
        id: "tag_SariB_Conclusion",
        label: "Conclusion",
        type: "Tag",
        metadata: {
          subTags: [
            "Strives to align Nokia’s strategy with the UAE’s innovation drive.",
          ],
        },
      },

      // 15. Håkan Agnevall
      {
        id: "person_HakanAgnevall",
        label: "Håkan Agnevall",
        type: "Person",
        metadata: {
          shortBio:
            "Håkan Agnevall is the President and CEO of Wärtsilä Corporation, a role he has held since February 2021. With a diverse background in leading innovation at companies such as Volvo Bus, Bombardier, and ABB, Agnevall brings extensive expertise in electrification, autonomous vehicles, power systems, and industrial automation. His strong academic foundation in Engineering Physics, Business Administration, and an MBA—complemented by an honorary doctorate—underpins his commitment to sustainable energy solutions. Under his leadership, Wärtsilä plays a vital role in strengthening UAE-Finland relations through technological innovation and sustainable practices in the marine and energy sectors.",
          keyPoints: [
            "CEO of Wärtsilä Corporation since February 2021",
            "Former President of Volvo Bus Corporation with a focus on electrification",
            "Held senior roles at Bombardier and ABB in power systems and automation",
            "Holds degrees in Engineering Physics, Business Administration, and an MBA",
            "Awarded an honorary doctorate in technology in May 2022",
            "Emphasised sustainable energy solutions at ADIPEC in November 2023",
            "Leads Wärtsilä’s strategic role in UAE-Finland bilateral cooperation",
            "Drives innovation in marine and energy technologies"
          ],
          Tags: [
            "Energy Innovation",
            "Sustainable Solutions",
            "Industrial Automation",
            "Leadership",
            "Global Operations",
            "Maritime Technology",
            "Bilateral Relations",
            "Academic Excellence"
          ],
        },
        
      },
      {
        id: "tag_HA_StrategicPositioning",
        label: "Strategic Positioning",
        type: "Tag",
        metadata: {
          subTags: [
            "CEO since 2021, with strong expertise in electrification and power systems.",
          ],
        },
      },
      {
        id: "tag_HA_UAERelatedStatements",
        label: "UAE-Related Statements",
        type: "Tag",
        metadata: {
          subTags: [
            "Promotes balanced, collaborative approaches to sustainable energy.",
          ],
        },
      },
      {
        id: "tag_HA_RoleInUERelations",
        label: "Role in UAE Relations",
        type: "Tag",
        metadata: {
          subTags: [
            "Drives marine and energy projects in the UAE, showcasing Finnish expertise.",
          ],
        },
      },
      {
        id: "tag_HA_BilateralAgreements",
        label: "Bilateral Agreements",
        type: "Tag",
        metadata: {
          subTags: [
            "Operates through commercial deals that align with official energy frameworks.",
          ],
        },
      },
      {
        id: "tag_HA_AlignmentFriction",
        label: "Alignment & Friction",
        type: "Tag",
        metadata: {
          subTags: [
            "Shared interest in clean energy; typical competition and regulatory challenges.",
          ],
        },
      },
      {
        id: "tag_HA_Conclusion",
        label: "Conclusion",
        type: "Tag",
        metadata: {
          subTags: [
            "Aims to expand Wärtsilä’s presence, focusing on sustainable energy technologies.",
          ],
        },
      },

      // 16. Representative of Ehrnooth family
      {
        id: "person_EhrnoothFamilyRep",
        label: "Representative of Ehrnooth family",
        type: "Person",
        metadata: {
          shortBio:
            "The Ehrnrooth family is Finland’s preeminent noble business dynasty with a 150-year legacy of shaping the nation’s economy. Emerging from an aristocratic military lineage, they have successfully diversified into banking, manufacturing, forestry, and technology. Their extensive portfolio includes leadership roles in major companies such as Nokia, Fiskars, and UPM, and they continue to influence Finland’s industrial and financial landscape through strategic investments and stable, long-term stewardship. Their active engagement in markets like the UAE highlights their forward-thinking approach to global economic opportunities.",
          keyPoints: [
            "150-year legacy in shaping Finland’s economy",
            "Originated as an aristocratic military family",
            "Expanded into banking, manufacturing, forestry, and technology",
            "Key leadership roles in companies such as Nokia, Fiskars, and UPM",
            "Utilises family investment vehicles for strategic holdings",
            "Active in UAE markets through urban infrastructure and sustainable technology initiatives"
          ],
          Tags: [
            "Noble Dynasty",
            "Economic Legacy",
            "Industrial Leadership",
            "Strategic Investments",
            "Diversified Portfolio",
            "Global Engagement",
            "UAE Focus"
          ],
        },
        
      },
      {
        id: "tag_Ehrnooth_StrategicPositioning",
        label: "Strategic Positioning",
        type: "Tag",
        metadata: {
          subTags: [
            "Influential noble family investing widely, emphasising stability and longevity.",
          ],
        },
      },
      {
        id: "tag_Ehrnooth_UAERelatedStatements",
        label: "UAE-Related Statements",
        type: "Tag",
        metadata: {
          subTags: [
            "Publicly quiet, but invests in companies active in the UAE market.",
          ],
        },
      },
      {
        id: "tag_Ehrnooth_RoleInUERelations",
        label: "Role in UAE Relations",
        type: "Tag",
        metadata: {
          subTags: [
            "Their ownership influences corporate strategies that strengthen Finland–UAE ties.",
          ],
        },
      },
      {
        id: "tag_Ehrnooth_BilateralAgreements",
        label: "Bilateral Agreements",
        type: "Tag",
        metadata: {
          subTags: [
            "Participates in trade missions and commercial deals under Finnish frameworks.",
          ],
        },
      },
      {
        id: "tag_Ehrnooth_AlignmentFriction",
        label: "Alignment & Friction",
        type: "Tag",
        metadata: {
          subTags: [
            "Well-aligned with UAE growth plans, but global competition remains a challenge.",
          ],
        },
      },
      {
        id: "tag_Ehrnooth_Conclusion",
        label: "Conclusion",
        type: "Tag",
        metadata: {
          subTags: [
            "Expected to continue strategic investments, reinforcing bilateral ties quietly.",
          ],
        },
      },

      // 17. Robin Langenskiöld
      {
        id: "person_RobinLangenskiold",
        label: "Robin Langenskiöld",
        type: "Person",
        metadata: {
          shortBio:
            "Robin Langenskiöld is a distinguished member of the Erkko family, a major force in Finland’s media landscape through their control of Sanoma Corporation. With nearly two decades of board experience at Sanoma and his current role directing Pencentra Oy, he has been instrumental in shaping media, finance, and asset management in Finland. His strategic insights and leadership have cemented his reputation as a respected power broker within the Finnish business community.",
          keyPoints: [
            "Key member of the influential Erkko family",
            "Served for nearly two decades on the board of Sanoma Corporation",
            "Currently directs Pencentra Oy, focusing on private investments",
            "Influential in shaping media and finance in Finland",
            "Respected power broker in Finnish business circles"
          ],
          Tags: [
            "Media Influence",
            "Board Leadership",
            "Investment Strategy",
            "Business Power",
            "Erkko Legacy",
            "Financial Expertise"
          ],
        },
        
      },
      {
        id: "tag_RL_StrategicPositioning",
        label: "Strategic Positioning",
        type: "Tag",
        metadata: {
          subTags: [
            "From the influential Erkko family, key shareholders of Sanoma.",
          ],
        },
      },
      {
        id: "tag_RL_UAERelatedStatements",
        label: "UAE-Related Statements",
        type: "Tag",
        metadata: {
          subTags: [
            "No personal UAE commentary; media coverage highlights UAE’s business potential.",
          ],
        },
      },
      {
        id: "tag_RL_RoleInUERelations",
        label: "Role in UAE Relations",
        type: "Tag",
        metadata: {
          subTags: [
            "Media influence shapes public opinion; might expand into digital or educational content.",
          ],
        },
      },
      {
        id: "tag_RL_BilateralAgreements",
        label: "Bilateral Agreements",
        type: "Tag",
        metadata: {
          subTags: [
            "Focuses on Finnish media; minimal direct engagement with UAE treaties.",
          ],
        },
      },
      {
        id: "tag_RL_AlignmentFriction",
        label: "Alignment & Friction",
        type: "Tag",
        metadata: {
          subTags: [
            "Generally supportive coverage; friction only if editorial lines conflict.",
          ],
        },
      },
      {
        id: "tag_RL_Conclusion",
        label: "Conclusion",
        type: "Tag",
        metadata: {
          subTags: [
            "Likely to maintain positive coverage, no current expansion in the UAE.",
          ],
        },
      },

      // 18. Rafaela Seppälä
      {
        id: "person_RafaelaSeppala",
        label: "Rafaela Seppälä",
        type: "Person",
        metadata: {
          shortBio:
            "Rafaela Seppälä, a Columbia University-educated journalist and key figure of the Erkko family, has played a significant role in Finland’s media and cultural sectors. With nearly three decades as a non-executive board member at Sanoma and a tenure as CEO of its photo agency Lehtikuva, she has contributed to strategic media management and cultural initiatives. Her involvement in technology startups and non-profit organisations further underlines her multifaceted influence across media, finance, and the arts.",
          keyPoints: [
            "Columbia University-educated journalist",
            "Served as CEO of Sanoma's photo agency Lehtikuva (2001–2004)",
            "Board member of Sanoma for 29 years",
            "Active in technology startups and cultural foundations",
            "Significant influencer in media, finance, and the arts"
          ],
          Tags: [
            "Media Leadership",
            "Cultural Influence",
            "Journalistic Expertise",
            "Board Governance",
            "Erkko Legacy",
            "Innovation & Arts"
          ],
        },
        
      },
      {
        id: "tag_RS_StrategicPositioning",
        label: "Strategic Positioning",
        type: "Tag",
        metadata: {
          subTags: [
            "Also an Erkko family member, major shareholder in Sanoma.",
          ],
        },
      },
      {
        id: "tag_RS_UAERelatedStatements",
        label: "UAE-Related Statements",
        type: "Tag",
        metadata: {
          subTags: [
            "No explicit statements on the UAE; coverage emphasises economic and tourism appeal.",
          ],
        },
      },
      {
        id: "tag_RS_RoleInUERelations",
        label: "Role in UAE Relations",
        type: "Tag",
        metadata: {
          subTags: [
            "Media platform could foster cross-cultural understanding with the UAE.",
          ],
        },
      },
      {
        id: "tag_RS_BilateralAgreements",
        label: "Bilateral Agreements",
        type: "Tag",
        metadata: {
          subTags: [
            "No direct involvement; family’s focus is domestic media holdings.",
          ],
        },
      },
      {
        id: "tag_RS_AlignmentFriction",
        label: "Alignment & Friction",
        type: "Tag",
        metadata: {
          subTags: [
            "Minimal conflict; coverage generally business-friendly.",
          ],
        },
      },
      {
        id: "tag_RS_Conclusion",
        label: "Conclusion",
        type: "Tag",
        metadata: {
          subTags: [
            "Maintains low-key involvement, sustaining positive coverage of UAE developments.",
          ],
        },
      },

      // 19. Björn Wahlroos
      {
        id: "person_BjornWahlroos",
        label: "Björn Wahlroos",
        type: "Person",
        metadata: {
          shortBio:
            "Björn Wahlroos is a leading Finnish banker and investor renowned for his influential roles in finance and corporate governance. With a Doctorate in Economics and a background in academia, he transitioned into banking by co-founding a prominent investment firm. He has chaired major companies such as Sampo Group, Nordea Bank, and UPM-Kymmene, and has played a key role in fostering international financial partnerships. His companies have indirectly engaged with the UAE through significant global financial dealings.",
          keyPoints: [
            "Renowned banker and investor with a Doctorate in Economics",
            "Former professor turned finance leader",
            "Co-founded Mandatum & Co, which later merged with Sampo-Leonia",
            "Chaired major companies like Sampo Group, Nordea Bank, and UPM-Kymmene",
            "Instrumental in facilitating international financial deals involving the UAE",
            "Recently transitioned key investments to the next generation"
          ],
          Tags: [
            "Banking Leadership",
            "Corporate Governance",
            "Economic Expertise",
            "Investment Strategy",
            "International Finance",
            "Legacy Transition",
            "Global Partnerships"
          ],
        },
        
      },
      {
        id: "tag_BW_StrategicPositioning",
        label: "Strategic Positioning",
        type: "Tag",
        metadata: {
          subTags: [
            "High-profile investor with free-market leanings and significant corporate leadership roles.",
          ],
        },
      },
      {
        id: "tag_BW_UAERelatedStatements",
        label: "UAE-Related Statements",
        type: "Tag",
        metadata: {
          subTags: [
            "No direct UAE commentary, but has financial links through Nordea and Saxo Bank.",
          ],
        },
      },
      {
        id: "tag_BW_RoleInUERelations",
        label: "Role in UAE Relations",
        type: "Tag",
        metadata: {
          subTags: [
            "Helped foster Middle East capital connections, boosting Finland–UAE financial ties.",
          ],
        },
      },
      {
        id: "tag_BW_BilateralAgreements",
        label: "Bilateral Agreements",
        type: "Tag",
        metadata: {
          subTags: [
            "Works through corporate channels, supporting cross-border investment.",
          ],
        },
      },
      {
        id: "tag_BW_AlignmentFriction",
        label: "Alignment & Friction",
        type: "Tag",
        metadata: {
          subTags: [
            "No major conflict; regulatory differences are resolved through business processes.",
          ],
        },
      },
      {
        id: "tag_BW_Conclusion",
        label: "Conclusion",
        type: "Tag",
        metadata: {
          subTags: [
            "Remains an influential figure in cross-border finance, with potential future involvement.",
          ],
        },
      },

      // 20. Jyri Häkämies
      {
        id: "person_JyriHakamies",
        label: "Jyri Häkämies",
        type: "Person",
        metadata: {
          shortBio:
            "Jyri Häkämies is the Director General of the Confederation of Finnish Industries (EK), Finland’s foremost business advocacy organisation. With a distinguished background as a former Minister of Defence and Minister of Economic Affairs, he bridges the gap between government and the private sector. Under his leadership, EK actively promotes Finnish innovation, digital transformation, and sustainable growth. He plays a pivotal role in forging international trade relations, particularly by enhancing economic ties with the UAE and the broader Gulf region.",
          keyPoints: [
            "Director General of the Confederation of Finnish Industries (EK)",
            "Former Minister of Defence and Minister of Economic Affairs",
            "Champion of Finnish innovation and digital transformation",
            "Leads high-level trade delegations to the UAE and Gulf region",
            "Advocates for sustainable and clean technologies in Finnish industry",
            "Key figure in enhancing Finland’s global economic partnerships"
          ],
          Tags: [
            "Business Advocacy",
            "Government-Private Nexus",
            "Trade Relations",
            "Innovation",
            "Sustainable Growth",
            "International Diplomacy",
            "Economic Leadership",
            "Global Trade"
          ],
        },
        
      },
      {
        id: "tag_JHk_StrategicPositioning",
        label: "Strategic Positioning",
        type: "Tag",
        metadata: {
          subTags: [
            "Heads the Confederation of Finnish Industries, bringing ministerial experience to global promotion.",
          ],
        },
      },
      {
        id: "tag_JHk_UAERelatedStatements",
        label: "UAE-Related Statements",
        type: "Tag",
        metadata: {
          subTags: [
            "Regards the UAE as a key market for digital and sustainable innovation.",
          ],
        },
      },
      {
        id: "tag_JHk_RoleInUERelations",
        label: "Role in UAE Relations",
        type: "Tag",
        metadata: {
          subTags: [
            "Facilitates business missions and encourages SME engagement in the UAE.",
          ],
        },
      },
      {
        id: "tag_JHk_BilateralAgreements",
        label: "Bilateral Agreements",
        type: "Tag",
        metadata: {
          subTags: [
            "Backs new business councils and MoUs to expand AI, energy, and digital ties.",
          ],
        },
      },
      {
        id: "tag_JHk_AlignmentFriction",
        label: "Alignment & Friction",
        type: "Tag",
        metadata: {
          subTags: [
            "Shares economic goals; must navigate global competition.",
          ],
        },
      },
      {
        id: "tag_JHk_Conclusion",
        label: "Conclusion",
        type: "Tag",
        metadata: {
          subTags: [
            "Will keep advancing Finnish industry abroad, focusing on innovation and sustainability.",
          ],
        },
      },

      // 21. Jussi Halla-aho
      {
        id: "person_JussiHallaAho",
        label: "H.E. Jussi Halla-aho",
        type: "Person",
        metadata: {
          shortBio:
            "H.E. Jussi Halla-aho is the Speaker of the Parliament of Finland, a position that underscores his status as one of the nation’s most influential political figures. Formerly the leader of the Finns Party, he has built his career on addressing critical issues such as immigration, national security, and EU relations. As Speaker, he ensures parliamentary neutrality and efficiency while fostering international dialogue through parliamentary diplomacy. His pragmatic approach underpins Finland’s broader economic and diplomatic engagements, including strategic cooperation with key Gulf states like the UAE.",
          keyPoints: [
            "Current Speaker of the Parliament of Finland",
            "Former leader of the Finns Party with a focus on immigration and national security",
            "Ensures parliamentary neutrality and efficient legislative processes",
            "Fosters international dialogue through parliamentary diplomacy",
            "Supports pragmatic economic and diplomatic initiatives with Gulf states",
            "Advocates for controlled migration and robust national security policies",
            "Facilitates foreign parliamentary exchanges and bilateral discussions"
          ],
          Tags: [
            "Parliamentary Leadership",
            "Political Influence",
            "Foreign Policy",
            "National Security",
            "EU Relations",
            "Parliamentary Diplomacy",
            "Gulf Engagement"
          ],
        },
        
      },
      {
        id: "tag_JHalla_StrategicPositioning",
        label: "Strategic Positioning",
        type: "Tag",
        metadata: {
          subTags: [
            "Speaker with strong conservative influence on parliamentary and foreign policy.",
          ],
        },
      },
      {
        id: "tag_JHalla_UAERelatedStatements",
        label: "UAE-Related Statements",
        type: "Tag",
        metadata: {
          subTags: [
            "Limited UAE commentary; emphasises pragmatic foreign policy with the Gulf.",
          ],
        },
      },
      {
        id: "tag_JHalla_RoleInUERelations",
        label: "Role in UAE Relations",
        type: "Tag",
        metadata: {
          subTags: [
            "Oversees parliamentary involvement in Finland–UAE diplomacy.",
          ],
        },
      },
      {
        id: "tag_JHalla_BilateralAgreements",
        label: "Bilateral Agreements",
        type: "Tag",
        metadata: {
          subTags: [
            "Ensures legislative approval and oversight of bilateral treaties.",
          ],
        },
      },
      {
        id: "tag_JHalla_AlignmentFriction",
        label: "Alignment & Friction",
        type: "Tag",
        metadata: {
          subTags: [
            "Shares economic interests; migration or EU policy differences could arise.",
          ],
        },
      },
      {
        id: "tag_JHalla_Conclusion",
        label: "Conclusion",
        type: "Tag",
        metadata: {
          subTags: [
            "Maintains parliamentary support for stable trade and security cooperation.",
          ],
        },
      },

      // 22. Nathali Ahlstrom
      {
        id: "person_NathaliAhlstrom",
        label: "Nathali Ahlstrom",
        type: "Person",
        metadata: {
          shortBio:
            "Nathali Ahlström has been the CEO of Fiskars since 2020, leading this historic Finnish company renowned for its premium homeware, gardening tools, and lifestyle products since its founding in 1649. Under her dynamic leadership, Fiskars has embraced sustainability, innovation, and digital transformation to strengthen its global brand presence. Ahlström’s strategic vision has not only reinforced Fiskars’ reputation for quality and design excellence but has also driven significant expansion into key markets such as the UAE, where the company champions premium, eco-friendly products and sustainable retail practices.",
          keyPoints: [
            "CEO of Fiskars since 2020",
            "Leads a historic company founded in 1649, known for premium consumer products",
            "Focuses on sustainability, innovation, and digital transformation",
            "Strengthened Fiskars’ global brand presence and market expansion",
            "Developed strong retail partnerships with leading distributors in the UAE",
            "Showcased Finnish design excellence at Expo 2020 Dubai",
            "Emphasises circular economy and sustainable product design"
          ],
          Tags: [
            "Corporate Leadership",
            "Premium Design",
            "Sustainability",
            "Global Expansion",
            "Innovation",
            "Digital Transformation",
            "Luxury Retail",
            "UAE Market"
          ],
        },
        
      },
      {
        id: "tag_NA_StrategicPositioning",
        label: "Strategic Positioning",
        type: "Tag",
        metadata: {
          subTags: [
            "CEO of Fiskars, focusing on sustainable premium consumer brands and global growth.",
          ],
        },
      },
      {
        id: "tag_NA_UAERelatedStatements",
        label: "UAE-Related Statements",
        type: "Tag",
        metadata: {
          subTags: [
            "Sees UAE as vital for premium retail; exhibited at Expo 2020 Dubai.",
          ],
        },
      },
      {
        id: "tag_NA_RoleInUERelations",
        label: "Role in UAE Relations",
        type: "Tag",
        metadata: {
          subTags: [
            "Advances Finnish brand presence, bolstering soft diplomacy in the UAE.",
          ],
        },
      },
      {
        id: "tag_NA_BilateralAgreements",
        label: "Bilateral Agreements",
        type: "Tag",
        metadata: {
          subTags: [
            "Follows official trade frameworks, partnering with local distributors.",
          ],
        },
      },
      {
        id: "tag_NA_AlignmentFriction",
        label: "Alignment & Friction",
        type: "Tag",
        metadata: {
          subTags: [
            "Strong brand alignment; pricing and competition remain challenges.",
          ],
        },
      },
      {
        id: "tag_NA_Conclusion",
        label: "Conclusion",
        type: "Tag",
        metadata: {
          subTags: [
            "Strives to expand in the UAE with a focus on sustainability and design heritage.",
          ],
        },
      },

      // 23. Seppo Vikström
      {
        id: "person_SeppoVikstrom",
        label: "Seppo Vikström",
        type: "Person",
        metadata: {
          shortBio:
            "Seppo Vikström is the Chairman of ISKU and a third-generation leader of this esteemed family-owned Finnish furniture company. Under his visionary guidance, ISKU has evolved into a flagship brand renowned for its premium design, sustainable manufacturing practices, and eco-friendly production. With a workforce exceeding 500 and annual revenues of around €100 million, Vikström has driven the company’s national prominence and international reach. His strategic initiatives include expanding export markets and establishing a dedicated presence in the UAE, where ISKU is marketed as a one-stop-shop for school furniture and educational environments.",
          keyPoints: [
            "Chairman and third-generation leader of ISKU",
            "Guided ISKU to national prominence and international reach",
            "Pioneered sustainable manufacturing and premium Finnish design",
            "Grew the company to over 500 employees with €100 million in revenues",
            "Expanded exports to showcase Finnish craftsmanship abroad",
            "Established ISKU Middle East FZ-LLC in Dubai for targeted market engagement",
            "Focus on providing innovative furniture solutions for educational environments"
          ],
          Tags: [
            "Furniture Industry",
            "Sustainable Manufacturing",
            "Family Leadership",
            "Export Expansion",
            "Finnish Design",
            "UAE Engagement",
            "Educational Solutions"
          ],
        },
        
      },
      {
        id: "tag_SV_StrategicPositioning",
        label: "Strategic Positioning",
        type: "Tag",
        metadata: {
          subTags: [
            "Oversees ISKU’s growth, emphasising design and eco-friendly production.",
          ],
        },
      },
      {
        id: "tag_SV_UAERelatedStatements",
        label: "UAE-Related Statements",
        type: "Tag",
        metadata: {
          subTags: [
            "Highlights shared interest in sustainability and innovative educational design.",
          ],
        },
      },
      {
        id: "tag_SV_RoleInUERelations",
        label: "Role in UAE Relations",
        type: "Tag",
        metadata: {
          subTags: [
            "Provides Finnish school furniture solutions, aligning with UAE’s modern education aims.",
          ],
        },
      },
      {
        id: "tag_SV_BilateralAgreements",
        label: "Bilateral Agreements",
        type: "Tag",
        metadata: {
          subTags: [
            "Operates regionally under Finnish trade policy, collaborating with local partners.",
          ],
        },
      },
      {
        id: "tag_SV_AlignmentFriction",
        label: "Alignment & Friction",
        type: "Tag",
        metadata: {
          subTags: [
            "Good synergy in sustainability, but cost and logistics can be challenges.",
          ],
        },
      },
      {
        id: "tag_SV_Conclusion",
        label: "Conclusion",
        type: "Tag",
        metadata: {
          subTags: [
            "Expands presence via eco-friendly education solutions.",
          ],
        },
      },

      // 24. Lassi Noponen
      {
        id: "person_LassiNoponen",
        label: "Lassi Noponen",
        type: "Person",
        metadata: {
          shortBio:
            "Lassi Noponen is the CEO of Business Finland, appointed in September 2024, and is charged with driving global growth through strategic trade promotion, investment, and innovation. He leads a robust network of over 160 experts in nearly 40 overseas locations, connecting Finnish businesses to high-potential international markets. With a clear focus on expanding Finland’s economic footprint, Noponen has positioned the UAE as a key hub for trade and investment, orchestrating high-profile delegations and initiatives that bridge cutting-edge digital and energy sectors.",
          keyPoints: [
            "CEO of Business Finland since September 2024",
            "Leads trade promotion, investment, and innovation initiatives",
            "Manages a network of over 160 experts in nearly 40 international locations",
            "Strategically targets high-potential markets, notably the UAE",
            "Organised a landmark Team Finland trade delegation to the UAE in January 2025",
            "Launched studies on the UAE’s data economy to identify market opportunities",
            "Supports bilateral frameworks such as the Finland–UAE Energy MoU"
          ],
          Tags: [
            "Trade Promotion",
            "Global Growth",
            "Innovation",
            "International Partnerships",
            "UAE Market",
            "Bilateral Agreements",
            "Digital Economy"
          ],
        },
        
      },
      {
        id: "tag_LN_StrategicPositioning",
        label: "Strategic Positioning",
        type: "Tag",
        metadata: {
          subTags: [
            "Heads Business Finland since 2024, prioritising global partnerships and strategic markets.",
          ],
        },
      },
      {
        id: "tag_LN_UAERelatedStatements",
        label: "UAE-Related Statements",
        type: "Tag",
        metadata: {
          subTags: [
            "Identifies UAE as key in the region, highlighting digital economy collaboration.",
          ],
        },
      },
      {
        id: "tag_LN_RoleInUERelations",
        label: "Role in UAE Relations",
        type: "Tag",
        metadata: {
          subTags: [
            "Facilitates trade missions, turning official MoUs into practical outcomes.",
          ],
        },
      },
      {
        id: "tag_LN_BilateralAgreements",
        label: "Bilateral Agreements",
        type: "Tag",
        metadata: {
          subTags: [
            "Promotes energy and digital MoUs, orchestrating expansions in various sectors.",
          ],
        },
      },
      {
        id: "tag_LN_AlignmentFriction",
        label: "Alignment & Friction",
        type: "Tag",
        metadata: {
          subTags: [
            "Shares innovation focus; smaller Finnish firms face regional competition.",
          ],
        },
      },
      {
        id: "tag_LN_Conclusion",
        label: "Conclusion",
        type: "Tag",
        metadata: {
          subTags: [
            "Strives to boost Finnish engagement in tech and sustainability, leveraging major anniversaries.",
          ],
        },
      },

      // 25. Markus Rauramo
      {
        id: "person_MarkusRauramo",
        label: "Markus Rauramo",
        type: "Person",
        metadata: {
          shortBio:
            "Markus Rauramo is the CEO of Fortum, one of Europe’s leading clean energy companies, and has been at the helm since July 2020. With a strong academic background in economics and political history, Rauramo has steered Fortum towards an enhanced commitment to sustainability and energy transition. Under his leadership, Fortum has emerged as a major producer of carbon dioxide-free electricity, championing innovative renewable energy projects. His strategic initiatives include groundbreaking power purchase agreements and international participation, such as showcasing Finnish clean energy solutions at Expo 2020 Dubai.",
          keyPoints: [
            "CEO of Fortum since July 2020",
            "Holds a Master's in Social Sciences (Economics and Political History)",
            "Drives Fortum’s commitment to sustainability and energy transition",
            "Fortum is one of Europe's largest producers of carbon-free electricity",
            "Initiated long-term renewable energy projects and power purchase agreements",
            "Participated in Expo 2020 Dubai to promote clean energy innovations",
            "Focuses on continuous innovation in sustainable energy solutions"
          ],
          Tags: [
            "Clean Energy",
            "Sustainability",
            "Renewable Energy",
            "Innovation",
            "Carbon-Free Electricity",
            "Energy Transition",
            "Global Engagement"
          ],
        },
        
      },
      {
        id: "tag_MR_StrategicPositioning",
        label: "Strategic Positioning",
        type: "Tag",
        metadata: {
          subTags: [
            "CEO of Fortum, focusing on renewables and carbon-free power.",
          ],
        },
      },
      {
        id: "tag_MR_UAERelatedStatements",
        label: "UAE-Related Statements",
        type: "Tag",
        metadata: {
          subTags: [
            "No direct statements; demonstrated Fortum’s green solutions at Expo 2020.",
          ],
        },
      },
      {
        id: "tag_MR_RoleInUERelations",
        label: "Role in UAE Relations",
        type: "Tag",
        metadata: {
          subTags: [
            "Promotes renewable solutions for potential collaboration with UAE energy projects.",
          ],
        },
      },
      {
        id: "tag_MR_BilateralAgreements",
        label: "Bilateral Agreements",
        type: "Tag",
        metadata: {
          subTags: [
            "Aligns with official energy MoU, pursuing regional renewable projects.",
          ],
        },
      },
      {
        id: "tag_MR_AlignmentFriction",
        label: "Alignment & Friction",
        type: "Tag",
        metadata: {
          subTags: [
            "Common goals in renewables, though local partnerships can be challenging.",
          ],
        },
      },
      {
        id: "tag_MR_Conclusion",
        label: "Conclusion",
        type: "Tag",
        metadata: {
          subTags: [
            "Fortum likely to explore deeper collaboration in solar, wind, or hydrogen projects.",
          ],
        },
      },

      // 26. Jubo Romakkaniemi
      {
        id: "person_JuboRomakkaniemi",
        label: "Jubo Romakkaniemi",
        type: "Person",
        metadata: {
          shortBio:
            "Jubo Romakkaniemi is the CEO of the Finland Chamber of Commerce (FCC), the premier advocacy and networking organisation for Finnish businesses. With a wealth of experience in Finnish politics and European policy, he has been instrumental in shaping Finland’s economic strategy and international trade priorities. Representing roughly 20,000 member companies across diverse sectors, Romakkaniemi drives initiatives in innovation, digital transformation, and sustainable growth. His leadership has been pivotal in fostering strong bilateral business relations, particularly with strategic markets such as the UAE and the broader Gulf region.",
          keyPoints: [
            "CEO of the Finland Chamber of Commerce (FCC)",
            "Leads an organisation representing approximately 20,000 companies",
            "Former Chief of Staff for Finland’s EU Commissioner",
            "Extensive experience in national politics and policy advisory roles",
            "Champions internationalisation, innovation, and digital transformation",
            "Facilitates high-level trade delegations and business forums with the UAE",
            "Focuses on sustainable growth and investment promotion"
          ],
          Tags: [
            "Business Advocacy",
            "Economic Policy",
            "International Trade",
            "Digital Transformation",
            "Innovation",
            "Sustainability",
            "UAE Relations",
            "Global Business"
          ],
        },
        
      },
      {
        id: "tag_JR_StrategicPositioning",
        label: "Strategic Positioning",
        type: "Tag",
        metadata: {
          subTags: [
            "Leads Finland’s Chamber of Commerce, with background in Finnish/EU policy.",
          ],
        },
      },
      {
        id: "tag_JR_UAERelatedStatements",
        label: "UAE-Related Statements",
        type: "Tag",
        metadata: {
          subTags: [
            "Considers the UAE crucial for Finnish business, citing shared focus on innovation.",
          ],
        },
      },
      {
        id: "tag_JR_RoleInUERelations",
        label: "Role in UAE Relations",
        type: "Tag",
        metadata: {
          subTags: [
            "Organises delegations and sector forums, co-founded the UAE–Finland Business Council.",
          ],
        },
      },
      {
        id: "tag_JR_BilateralAgreements",
        label: "Bilateral Agreements",
        type: "Tag",
        metadata: {
          subTags: [
            "Encourages fresh business ties under official MoUs in tech and renewables.",
          ],
        },
      },
      {
        id: "tag_JR_AlignmentFriction",
        label: "Alignment & Friction",
        type: "Tag",
        metadata: {
          subTags: [
            "Strong synergy; global competition poses the main hurdle for SMEs.",
          ],
        },
      },
      {
        id: "tag_JR_Conclusion",
        label: "Conclusion",
        type: "Tag",
        metadata: {
          subTags: [
            "Will continue expanding trade partnerships, leveraging high-profile events.",
          ],
        },
      },
    ],
    edges: [
      // Edges for Sandra Bergqvist
      {
        source: "person_SandraBergqvist",
        target: "tag_SB_StrategicPositioning",
        type: "Person-Tag",
        hoverInfo: "Strategic Positioning",
      },
      {
        source: "person_SandraBergqvist",
        target: "tag_SB_UAERelatedStatements",
        type: "Person-Tag",
        hoverInfo: "UAE-Related Statements",
      },
      {
        source: "person_SandraBergqvist",
        target: "tag_SB_RoleInUERelations",
        type: "Person-Tag",
        hoverInfo: "Role in UAE Relations",
      },
      {
        source: "person_SandraBergqvist",
        target: "tag_SB_BilateralAgreements",
        type: "Person-Tag",
        hoverInfo: "Bilateral Agreements",
      },
      {
        source: "person_SandraBergqvist",
        target: "tag_SB_AlignmentFriction",
        type: "Person-Tag",
        hoverInfo: "Alignment & Friction",
      },
      {
        source: "person_SandraBergqvist",
        target: "tag_SB_Conclusion",
        type: "Person-Tag",
        hoverInfo: "Conclusion",
      },

      // Edges for Anna-Kaisa Ikonen
      {
        source: "person_AnnaKaisaIkonen",
        target: "tag_AKI_StrategicPositioning",
        type: "Person-Tag",
        hoverInfo: "Strategic Positioning",
      },
      {
        source: "person_AnnaKaisaIkonen",
        target: "tag_AKI_UAERelatedStatements",
        type: "Person-Tag",
        hoverInfo: "UAE-Related Statements",
      },
      {
        source: "person_AnnaKaisaIkonen",
        target: "tag_AKI_RoleInUERelations",
        type: "Person-Tag",
        hoverInfo: "Role in UAE Relations",
      },
      {
        source: "person_AnnaKaisaIkonen",
        target: "tag_AKI_BilateralAgreements",
        type: "Person-Tag",
        hoverInfo: "Bilateral Agreements",
      },
      {
        source: "person_AnnaKaisaIkonen",
        target: "tag_AKI_AlignmentFriction",
        type: "Person-Tag",
        hoverInfo: "Alignment & Friction",
      },
      {
        source: "person_AnnaKaisaIkonen",
        target: "tag_AKI_Conclusion",
        type: "Person-Tag",
        hoverInfo: "Conclusion",
      },

      // Edges for Alexander Stubb
      {
        source: "person_AlexanderStubb",
        target: "tag_AS_StrategicPositioning",
        type: "Person-Tag",
        hoverInfo: "Strategic Positioning",
      },
      {
        source: "person_AlexanderStubb",
        target: "tag_AS_UAERelatedStatements",
        type: "Person-Tag",
        hoverInfo: "UAE-Related Statements",
      },
      {
        source: "person_AlexanderStubb",
        target: "tag_AS_RoleInUERelations",
        type: "Person-Tag",
        hoverInfo: "Role in UAE Relations",
      },
      {
        source: "person_AlexanderStubb",
        target: "tag_AS_BilateralAgreements",
        type: "Person-Tag",
        hoverInfo: "Bilateral Agreements",
      },
      {
        source: "person_AlexanderStubb",
        target: "tag_AS_AlignmentFriction",
        type: "Person-Tag",
        hoverInfo: "Alignment & Friction",
      },
      {
        source: "person_AlexanderStubb",
        target: "tag_AS_Conclusion",
        type: "Person-Tag",
        hoverInfo: "Conclusion",
      },

      // Edges for Tuula Yrjola
      {
        source: "person_TuulaYrjola",
        target: "tag_TY_StrategicPositioning",
        type: "Person-Tag",
        hoverInfo: "Strategic Positioning",
      },
      {
        source: "person_TuulaYrjola",
        target: "tag_TY_UAERelatedStatements",
        type: "Person-Tag",
        hoverInfo: "UAE-Related Statements",
      },
      {
        source: "person_TuulaYrjola",
        target: "tag_TY_RoleInUERelations",
        type: "Person-Tag",
        hoverInfo: "Role in UAE Relations",
      },
      {
        source: "person_TuulaYrjola",
        target: "tag_TY_BilateralAgreements",
        type: "Person-Tag",
        hoverInfo: "Bilateral Agreements",
      },
      {
        source: "person_TuulaYrjola",
        target: "tag_TY_AlignmentFriction",
        type: "Person-Tag",
        hoverInfo: "Alignment & Friction",
      },
      {
        source: "person_TuulaYrjola",
        target: "tag_TY_Conclusion",
        type: "Person-Tag",
        hoverInfo: "Conclusion",
      },

      // Edges for Anna-Mari Wong Hamalainen
      {
        source: "person_AnnaMariWongHamalainen",
        target: "tag_AMWH_StrategicPositioning",
        type: "Person-Tag",
        hoverInfo: "Strategic Positioning",
      },
      {
        source: "person_AnnaMariWongHamalainen",
        target: "tag_AMWH_UAERelatedStatements",
        type: "Person-Tag",
        hoverInfo: "UAE-Related Statements",
      },
      {
        source: "person_AnnaMariWongHamalainen",
        target: "tag_AMWH_RoleInUERelations",
        type: "Person-Tag",
        hoverInfo: "Role in UAE Relations",
      },
      {
        source: "person_AnnaMariWongHamalainen",
        target: "tag_AMWH_BilateralAgreements",
        type: "Person-Tag",
        hoverInfo: "Bilateral Agreements",
      },
      {
        source: "person_AnnaMariWongHamalainen",
        target: "tag_AMWH_AlignmentFriction",
        type: "Person-Tag",
        hoverInfo: "Alignment & Friction",
      },
      {
        source: "person_AnnaMariWongHamalainen",
        target: "tag_AMWH_Conclusion",
        type: "Person-Tag",
        hoverInfo: "Conclusion",
      },

      // Edges for Ville Brumme
      {
        source: "person_VilleBrumme",
        target: "tag_VB_StrategicPositioning",
        type: "Person-Tag",
        hoverInfo: "Strategic Positioning",
      },
      {
        source: "person_VilleBrumme",
        target: "tag_VB_UAERelatedStatements",
        type: "Person-Tag",
        hoverInfo: "UAE-Related Statements",
      },
      {
        source: "person_VilleBrumme",
        target: "tag_VB_RoleInUERelations",
        type: "Person-Tag",
        hoverInfo: "Role in UAE Relations",
      },
      {
        source: "person_VilleBrumme",
        target: "tag_VB_BilateralAgreements",
        type: "Person-Tag",
        hoverInfo: "Bilateral Agreements",
      },
      {
        source: "person_VilleBrumme",
        target: "tag_VB_AlignmentFriction",
        type: "Person-Tag",
        hoverInfo: "Alignment & Friction",
      },
      {
        source: "person_VilleBrumme",
        target: "tag_VB_Conclusion",
        type: "Person-Tag",
        hoverInfo: "Conclusion",
      },

      // Edges for Elina Valtonen
      {
        source: "person_ElinaValtonen",
        target: "tag_EV_StrategicPositioning",
        type: "Person-Tag",
        hoverInfo: "Strategic Positioning",
      },
      {
        source: "person_ElinaValtonen",
        target: "tag_EV_UAERelatedStatements",
        type: "Person-Tag",
        hoverInfo: "UAE-Related Statements",
      },
      {
        source: "person_ElinaValtonen",
        target: "tag_EV_RoleInUERelations",
        type: "Person-Tag",
        hoverInfo: "Role in UAE Relations",
      },
      {
        source: "person_ElinaValtonen",
        target: "tag_EV_BilateralAgreements",
        type: "Person-Tag",
        hoverInfo: "Bilateral Agreements",
      },
      {
        source: "person_ElinaValtonen",
        target: "tag_EV_AlignmentFriction",
        type: "Person-Tag",
        hoverInfo: "Alignment & Friction",
      },
      {
        source: "person_ElinaValtonen",
        target: "tag_EV_Conclusion",
        type: "Person-Tag",
        hoverInfo: "Conclusion",
      },

      // Edges for Laila Clyne
      {
        source: "person_LailaClyne",
        target: "tag_LC_StrategicPositioning",
        type: "Person-Tag",
        hoverInfo: "Strategic Positioning",
      },
      {
        source: "person_LailaClyne",
        target: "tag_LC_UAERelatedStatements",
        type: "Person-Tag",
        hoverInfo: "UAE-Related Statements",
      },
      {
        source: "person_LailaClyne",
        target: "tag_LC_RoleInUERelations",
        type: "Person-Tag",
        hoverInfo: "Role in UAE Relations",
      },
      {
        source: "person_LailaClyne",
        target: "tag_LC_BilateralAgreements",
        type: "Person-Tag",
        hoverInfo: "Bilateral Agreements",
      },
      {
        source: "person_LailaClyne",
        target: "tag_LC_AlignmentFriction",
        type: "Person-Tag",
        hoverInfo: "Alignment & Friction",
      },
      {
        source: "person_LailaClyne",
        target: "tag_LC_Conclusion",
        type: "Person-Tag",
        hoverInfo: "Conclusion",
      },

      // Edges for Anna-Kaisa Heikkinen
      {
        source: "person_AnnaKaisaHeikkinen",
        target: "tag_AKH_StrategicPositioning",
        type: "Person-Tag",
        hoverInfo: "Strategic Positioning",
      },
      {
        source: "person_AnnaKaisaHeikkinen",
        target: "tag_AKH_UAERelatedStatements",
        type: "Person-Tag",
        hoverInfo: "UAE-Related Statements",
      },
      {
        source: "person_AnnaKaisaHeikkinen",
        target: "tag_AKH_RoleInUERelations",
        type: "Person-Tag",
        hoverInfo: "Role in UAE Relations",
      },
      {
        source: "person_AnnaKaisaHeikkinen",
        target: "tag_AKH_BilateralAgreements",
        type: "Person-Tag",
        hoverInfo: "Bilateral Agreements",
      },
      {
        source: "person_AnnaKaisaHeikkinen",
        target: "tag_AKH_AlignmentFriction",
        type: "Person-Tag",
        hoverInfo: "Alignment & Friction",
      },
      {
        source: "person_AnnaKaisaHeikkinen",
        target: "tag_AKH_Conclusion",
        type: "Person-Tag",
        hoverInfo: "Conclusion",
      },

      // Edges for Anne MRabet
      {
        source: "person_AnneMRabet",
        target: "tag_AMR_StrategicPositioning",
        type: "Person-Tag",
        hoverInfo: "Strategic Positioning",
      },
      {
        source: "person_AnneMRabet",
        target: "tag_AMR_UAERelatedStatements",
        type: "Person-Tag",
        hoverInfo: "UAE-Related Statements",
      },
      {
        source: "person_AnneMRabet",
        target: "tag_AMR_RoleInUERelations",
        type: "Person-Tag",
        hoverInfo: "Role in UAE Relations",
      },
      {
        source: "person_AnneMRabet",
        target: "tag_AMR_BilateralAgreements",
        type: "Person-Tag",
        hoverInfo: "Bilateral Agreements",
      },
      {
        source: "person_AnneMRabet",
        target: "tag_AMR_AlignmentFriction",
        type: "Person-Tag",
        hoverInfo: "Alignment & Friction",
      },
      {
        source: "person_AnneMRabet",
        target: "tag_AMR_Conclusion",
        type: "Person-Tag",
        hoverInfo: "Conclusion",
      },

      // Edges for Antti Herlin
      {
        source: "person_AnttiHerlin",
        target: "tag_AH_StrategicPositioning",
        type: "Person-Tag",
        hoverInfo: "Strategic Positioning",
      },
      {
        source: "person_AnttiHerlin",
        target: "tag_AH_UAERelatedStatements",
        type: "Person-Tag",
        hoverInfo: "UAE-Related Statements",
      },
      {
        source: "person_AnttiHerlin",
        target: "tag_AH_RoleInUERelations",
        type: "Person-Tag",
        hoverInfo: "Role in UAE Relations",
      },
      {
        source: "person_AnttiHerlin",
        target: "tag_AH_BilateralAgreements",
        type: "Person-Tag",
        hoverInfo: "Bilateral Agreements",
      },
      {
        source: "person_AnttiHerlin",
        target: "tag_AH_AlignmentFriction",
        type: "Person-Tag",
        hoverInfo: "Alignment & Friction",
      },
      {
        source: "person_AnttiHerlin",
        target: "tag_AH_Conclusion",
        type: "Person-Tag",
        hoverInfo: "Conclusion",
      },

      // Edges for Justin Hotard
      {
        source: "person_JustinHotard",
        target: "tag_JH_StrategicPositioning",
        type: "Person-Tag",
        hoverInfo: "Strategic Positioning",
      },
      {
        source: "person_JustinHotard",
        target: "tag_JH_UAERelatedStatements",
        type: "Person-Tag",
        hoverInfo: "UAE-Related Statements",
      },
      {
        source: "person_JustinHotard",
        target: "tag_JH_RoleInUERelations",
        type: "Person-Tag",
        hoverInfo: "Role in UAE Relations",
      },
      {
        source: "person_JustinHotard",
        target: "tag_JH_BilateralAgreements",
        type: "Person-Tag",
        hoverInfo: "Bilateral Agreements",
      },
      {
        source: "person_JustinHotard",
        target: "tag_JH_AlignmentFriction",
        type: "Person-Tag",
        hoverInfo: "Alignment & Friction",
      },
      {
        source: "person_JustinHotard",
        target: "tag_JH_Conclusion",
        type: "Person-Tag",
        hoverInfo: "Conclusion",
      },

      // Edges for Pekka Lundmark
      {
        source: "person_PekkaLundmark",
        target: "tag_PL_StrategicPositioning",
        type: "Person-Tag",
        hoverInfo: "Strategic Positioning",
      },
      {
        source: "person_PekkaLundmark",
        target: "tag_PL_UAERelatedStatements",
        type: "Person-Tag",
        hoverInfo: "UAE-Related Statements",
      },
      {
        source: "person_PekkaLundmark",
        target: "tag_PL_RoleInUERelations",
        type: "Person-Tag",
        hoverInfo: "Role in UAE Relations",
      },
      {
        source: "person_PekkaLundmark",
        target: "tag_PL_BilateralAgreements",
        type: "Person-Tag",
        hoverInfo: "Bilateral Agreements",
      },
      {
        source: "person_PekkaLundmark",
        target: "tag_PL_AlignmentFriction",
        type: "Person-Tag",
        hoverInfo: "Alignment & Friction",
      },
      {
        source: "person_PekkaLundmark",
        target: "tag_PL_Conclusion",
        type: "Person-Tag",
        hoverInfo: "Conclusion",
      },

      // Edges for Sari Baldauf
      {
        source: "person_SariBaldauf",
        target: "tag_SariB_StrategicPositioning",
        type: "Person-Tag",
        hoverInfo: "Strategic Positioning",
      },
      {
        source: "person_SariBaldauf",
        target: "tag_SariB_UAERelatedStatements",
        type: "Person-Tag",
        hoverInfo: "UAE-Related Statements",
      },
      {
        source: "person_SariBaldauf",
        target: "tag_SariB_RoleInUERelations",
        type: "Person-Tag",
        hoverInfo: "Role in UAE Relations",
      },
      {
        source: "person_SariBaldauf",
        target: "tag_SariB_BilateralAgreements",
        type: "Person-Tag",
        hoverInfo: "Bilateral Agreements",
      },
      {
        source: "person_SariBaldauf",
        target: "tag_SariB_AlignmentFriction",
        type: "Person-Tag",
        hoverInfo: "Alignment & Friction",
      },
      {
        source: "person_SariBaldauf",
        target: "tag_SariB_Conclusion",
        type: "Person-Tag",
        hoverInfo: "Conclusion",
      },

      // Edges for Håkan Agnevall
      {
        source: "person_HakanAgnevall",
        target: "tag_HA_StrategicPositioning",
        type: "Person-Tag",
        hoverInfo: "Strategic Positioning",
      },
      {
        source: "person_HakanAgnevall",
        target: "tag_HA_UAERelatedStatements",
        type: "Person-Tag",
        hoverInfo: "UAE-Related Statements",
      },
      {
        source: "person_HakanAgnevall",
        target: "tag_HA_RoleInUERelations",
        type: "Person-Tag",
        hoverInfo: "Role in UAE Relations",
      },
      {
        source: "person_HakanAgnevall",
        target: "tag_HA_BilateralAgreements",
        type: "Person-Tag",
        hoverInfo: "Bilateral Agreements",
      },
      {
        source: "person_HakanAgnevall",
        target: "tag_HA_AlignmentFriction",
        type: "Person-Tag",
        hoverInfo: "Alignment & Friction",
      },
      {
        source: "person_HakanAgnevall",
        target: "tag_HA_Conclusion",
        type: "Person-Tag",
        hoverInfo: "Conclusion",
      },

      // Edges for Representative of Ehrnooth family
      {
        source: "person_EhrnoothFamilyRep",
        target: "tag_Ehrnooth_StrategicPositioning",
        type: "Person-Tag",
        hoverInfo: "Strategic Positioning",
      },
      {
        source: "person_EhrnoothFamilyRep",
        target: "tag_Ehrnooth_UAERelatedStatements",
        type: "Person-Tag",
        hoverInfo: "UAE-Related Statements",
      },
      {
        source: "person_EhrnoothFamilyRep",
        target: "tag_Ehrnooth_RoleInUERelations",
        type: "Person-Tag",
        hoverInfo: "Role in UAE Relations",
      },
      {
        source: "person_EhrnoothFamilyRep",
        target: "tag_Ehrnooth_BilateralAgreements",
        type: "Person-Tag",
        hoverInfo: "Bilateral Agreements",
      },
      {
        source: "person_EhrnoothFamilyRep",
        target: "tag_Ehrnooth_AlignmentFriction",
        type: "Person-Tag",
        hoverInfo: "Alignment & Friction",
      },
      {
        source: "person_EhrnoothFamilyRep",
        target: "tag_Ehrnooth_Conclusion",
        type: "Person-Tag",
        hoverInfo: "Conclusion",
      },

      // Edges for Robin Langenskiöld
      {
        source: "person_RobinLangenskiold",
        target: "tag_RL_StrategicPositioning",
        type: "Person-Tag",
        hoverInfo: "Strategic Positioning",
      },
      {
        source: "person_RobinLangenskiold",
        target: "tag_RL_UAERelatedStatements",
        type: "Person-Tag",
        hoverInfo: "UAE-Related Statements",
      },
      {
        source: "person_RobinLangenskiold",
        target: "tag_RL_RoleInUERelations",
        type: "Person-Tag",
        hoverInfo: "Role in UAE Relations",
      },
      {
        source: "person_RobinLangenskiold",
        target: "tag_RL_BilateralAgreements",
        type: "Person-Tag",
        hoverInfo: "Bilateral Agreements",
      },
      {
        source: "person_RobinLangenskiold",
        target: "tag_RL_AlignmentFriction",
        type: "Person-Tag",
        hoverInfo: "Alignment & Friction",
      },
      {
        source: "person_RobinLangenskiold",
        target: "tag_RL_Conclusion",
        type: "Person-Tag",
        hoverInfo: "Conclusion",
      },

      // Edges for Rafaela Seppälä
      {
        source: "person_RafaelaSeppala",
        target: "tag_RS_StrategicPositioning",
        type: "Person-Tag",
        hoverInfo: "Strategic Positioning",
      },
      {
        source: "person_RafaelaSeppala",
        target: "tag_RS_UAERelatedStatements",
        type: "Person-Tag",
        hoverInfo: "UAE-Related Statements",
      },
      {
        source: "person_RafaelaSeppala",
        target: "tag_RS_RoleInUERelations",
        type: "Person-Tag",
        hoverInfo: "Role in UAE Relations",
      },
      {
        source: "person_RafaelaSeppala",
        target: "tag_RS_BilateralAgreements",
        type: "Person-Tag",
        hoverInfo: "Bilateral Agreements",
      },
      {
        source: "person_RafaelaSeppala",
        target: "tag_RS_AlignmentFriction",
        type: "Person-Tag",
        hoverInfo: "Alignment & Friction",
      },
      {
        source: "person_RafaelaSeppala",
        target: "tag_RS_Conclusion",
        type: "Person-Tag",
        hoverInfo: "Conclusion",
      },

      // Edges for Björn Wahlroos
      {
        source: "person_BjornWahlroos",
        target: "tag_BW_StrategicPositioning",
        type: "Person-Tag",
        hoverInfo: "Strategic Positioning",
      },
      {
        source: "person_BjornWahlroos",
        target: "tag_BW_UAERelatedStatements",
        type: "Person-Tag",
        hoverInfo: "UAE-Related Statements",
      },
      {
        source: "person_BjornWahlroos",
        target: "tag_BW_RoleInUERelations",
        type: "Person-Tag",
        hoverInfo: "Role in UAE Relations",
      },
      {
        source: "person_BjornWahlroos",
        target: "tag_BW_BilateralAgreements",
        type: "Person-Tag",
        hoverInfo: "Bilateral Agreements",
      },
      {
        source: "person_BjornWahlroos",
        target: "tag_BW_StrategicPositioning",
        type: "Person-Tag",
        hoverInfo: "Strategic Positioning",
      },
      {
        source: "person_BjornWahlroos",
        target: "tag_BW_UAERelatedStatements",
        type: "Person-Tag",
        hoverInfo: "UAE-Related Statements",
      },
      {
        source: "person_BjornWahlroos",
        target: "tag_BW_RoleInUERelations",
        type: "Person-Tag",
        hoverInfo: "Role in UAE Relations",
      },
      {
        source: "person_BjornWahlroos",
        target: "tag_BW_BilateralAgreements",
        type: "Person-Tag",
        hoverInfo: "Bilateral Agreements",
      },
      {
        source: "person_BjornWahlroos",
        target: "tag_BW_AlignmentFriction",
        type: "Person-Tag",
        hoverInfo: "Alignment & Friction",
      },
      {
        source: "person_BjornWahlroos",
        target: "tag_BW_Conclusion",
        type: "Person-Tag",
        hoverInfo: "Conclusion",
      },

      // Edges for Jyri Häkämies
      {
        source: "person_JyriHakamies",
        target: "tag_JHk_StrategicPositioning",
        type: "Person-Tag",
        hoverInfo: "Strategic Positioning",
      },
      {
        source: "person_JyriHakamies",
        target: "tag_JHk_UAERelatedStatements",
        type: "Person-Tag",
        hoverInfo: "UAE-Related Statements",
      },
      {
        source: "person_JyriHakamies",
        target: "tag_JHk_RoleInUERelations",
        type: "Person-Tag",
        hoverInfo: "Role in UAE Relations",
      },
      {
        source: "person_JyriHakamies",
        target: "tag_JHk_BilateralAgreements",
        type: "Person-Tag",
        hoverInfo: "Bilateral Agreements",
      },
      {
        source: "person_JyriHakamies",
        target: "tag_JHk_AlignmentFriction",
        type: "Person-Tag",
        hoverInfo: "Alignment & Friction",
      },
      {
        source: "person_JyriHakamies",
        target: "tag_JHk_Conclusion",
        type: "Person-Tag",
        hoverInfo: "Conclusion",
      },

      // Edges for Jussi Halla-aho
      {
        source: "person_JussiHallaAho",
        target: "tag_JHalla_StrategicPositioning",
        type: "Person-Tag",
        hoverInfo: "Strategic Positioning",
      },
      {
        source: "person_JussiHallaAho",
        target: "tag_JHalla_UAERelatedStatements",
        type: "Person-Tag",
        hoverInfo: "UAE-Related Statements",
      },
      {
        source: "person_JussiHallaAho",
        target: "tag_JHalla_RoleInUERelations",
        type: "Person-Tag",
        hoverInfo: "Role in UAE Relations",
      },
      {
        source: "person_JussiHallaAho",
        target: "tag_JHalla_BilateralAgreements",
        type: "Person-Tag",
        hoverInfo: "Bilateral Agreements",
      },
      {
        source: "person_JussiHallaAho",
        target: "tag_JHalla_AlignmentFriction",
        type: "Person-Tag",
        hoverInfo: "Alignment & Friction",
      },
      {
        source: "person_JussiHallaAho",
        target: "tag_JHalla_Conclusion",
        type: "Person-Tag",
        hoverInfo: "Conclusion",
      },

      // Edges for Nathali Ahlstrom
      {
        source: "person_NathaliAhlstrom",
        target: "tag_NA_StrategicPositioning",
        type: "Person-Tag",
        hoverInfo: "Strategic Positioning",
      },
      {
        source: "person_NathaliAhlstrom",
        target: "tag_NA_UAERelatedStatements",
        type: "Person-Tag",
        hoverInfo: "UAE-Related Statements",
      },
      {
        source: "person_NathaliAhlstrom",
        target: "tag_NA_RoleInUERelations",
        type: "Person-Tag",
        hoverInfo: "Role in UAE Relations",
      },
      {
        source: "person_NathaliAhlstrom",
        target: "tag_NA_BilateralAgreements",
        type: "Person-Tag",
        hoverInfo: "Bilateral Agreements",
      },
      {
        source: "person_NathaliAhlstrom",
        target: "tag_NA_AlignmentFriction",
        type: "Person-Tag",
        hoverInfo: "Alignment & Friction",
      },
      {
        source: "person_NathaliAhlstrom",
        target: "tag_NA_Conclusion",
        type: "Person-Tag",
        hoverInfo: "Conclusion",
      },

      // Edges for Seppo Vikström
      {
        source: "person_SeppoVikstrom",
        target: "tag_SV_StrategicPositioning",
        type: "Person-Tag",
        hoverInfo: "Strategic Positioning",
      },
      {
        source: "person_SeppoVikstrom",
        target: "tag_SV_UAERelatedStatements",
        type: "Person-Tag",
        hoverInfo: "UAE-Related Statements",
      },
      {
        source: "person_SeppoVikstrom",
        target: "tag_SV_RoleInUERelations",
        type: "Person-Tag",
        hoverInfo: "Role in UAE Relations",
      },
      {
        source: "person_SeppoVikstrom",
        target: "tag_SV_BilateralAgreements",
        type: "Person-Tag",
        hoverInfo: "Bilateral Agreements",
      },
      {
        source: "person_SeppoVikstrom",
        target: "tag_SV_AlignmentFriction",
        type: "Person-Tag",
        hoverInfo: "Alignment & Friction",
      },
      {
        source: "person_SeppoVikstrom",
        target: "tag_SV_Conclusion",
        type: "Person-Tag",
        hoverInfo: "Conclusion",
      },

      // Edges for Lassi Noponen
      {
        source: "person_LassiNoponen",
        target: "tag_LN_StrategicPositioning",
        type: "Person-Tag",
        hoverInfo: "Strategic Positioning",
      },
      {
        source: "person_LassiNoponen",
        target: "tag_LN_UAERelatedStatements",
        type: "Person-Tag",
        hoverInfo: "UAE-Related Statements",
      },
      {
        source: "person_LassiNoponen",
        target: "tag_LN_RoleInUERelations",
        type: "Person-Tag",
        hoverInfo: "Role in UAE Relations",
      },
      {
        source: "person_LassiNoponen",
        target: "tag_LN_BilateralAgreements",
        type: "Person-Tag",
        hoverInfo: "Bilateral Agreements",
      },
      {
        source: "person_LassiNoponen",
        target: "tag_LN_AlignmentFriction",
        type: "Person-Tag",
        hoverInfo: "Alignment & Friction",
      },
      {
        source: "person_LassiNoponen",
        target: "tag_LN_Conclusion",
        type: "Person-Tag",
        hoverInfo: "Conclusion",
      },

      // Edges for Markus Rauramo
      {
        source: "person_MarkusRauramo",
        target: "tag_MR_StrategicPositioning",
        type: "Person-Tag",
        hoverInfo: "Strategic Positioning",
      },
      {
        source: "person_MarkusRauramo",
        target: "tag_MR_UAERelatedStatements",
        type: "Person-Tag",
        hoverInfo: "UAE-Related Statements",
      },
      {
        source: "person_MarkusRauramo",
        target: "tag_MR_RoleInUERelations",
        type: "Person-Tag",
        hoverInfo: "Role in UAE Relations",
      },
      {
        source: "person_MarkusRauramo",
        target: "tag_MR_BilateralAgreements",
        type: "Person-Tag",
        hoverInfo: "Bilateral Agreements",
      },
      {
        source: "person_MarkusRauramo",
        target: "tag_MR_AlignmentFriction",
        type: "Person-Tag",
        hoverInfo: "Alignment & Friction",
      },
      {
        source: "person_MarkusRauramo",
        target: "tag_MR_Conclusion",
        type: "Person-Tag",
        hoverInfo: "Conclusion",
      },

      // Edges for Jubo Romakkaniemi
      {
        source: "person_JuboRomakkaniemi",
        target: "tag_JR_StrategicPositioning",
        type: "Person-Tag",
        hoverInfo: "Strategic Positioning",
      },
      {
        source: "person_JuboRomakkaniemi",
        target: "tag_JR_UAERelatedStatements",
        type: "Person-Tag",
        hoverInfo: "UAE-Related Statements",
      },
      {
        source: "person_JuboRomakkaniemi",
        target: "tag_JR_RoleInUERelations",
        type: "Person-Tag",
        hoverInfo: "Role in UAE Relations",
      },
      {
        source: "person_JuboRomakkaniemi",
        target: "tag_JR_BilateralAgreements",
        type: "Person-Tag",
        hoverInfo: "Bilateral Agreements",
      },
      {
        source: "person_JuboRomakkaniemi",
        target: "tag_JR_AlignmentFriction",
        type: "Person-Tag",
        hoverInfo: "Alignment & Friction",
      },
      {
        source: "person_JuboRomakkaniemi",
        target: "tag_JR_Conclusion",
        type: "Person-Tag",
        hoverInfo: "Conclusion",
      },
      // Edges for Jubo Romakkaniemi
      {
        source: "person_JuboRomakkaniemi",
        target: "tag_JR_StrategicPositioning",
        type: "Person-Tag",
        hoverInfo: "Strategic Positioning",
      },
      {
        source: "person_JuboRomakkaniemi",
        target: "tag_JR_UAERelatedStatements",
        type: "Person-Tag",
        hoverInfo: "UAE-Related Statements",
      },
      {
        source: "person_JuboRomakkaniemi",
        target: "tag_JR_RoleInUERelations",
        type: "Person-Tag",
        hoverInfo: "Role in UAE Relations",
      },
      {
        source: "person_JuboRomakkaniemi",
        target: "tag_JR_BilateralAgreements",
        type: "Person-Tag",
        hoverInfo: "Bilateral Agreements",
      },
      {
        source: "person_JuboRomakkaniemi",
        target: "tag_JR_AlignmentFriction",
        type: "Person-Tag",
        hoverInfo: "Alignment & Friction",
      },
      {
        source: "person_JuboRomakkaniemi",
        target: "tag_JR_Conclusion",
        type: "Person-Tag",
        hoverInfo: "Conclusion",
      },
    ], 
  }, 
}; 










// function NetworkDiagram() {
//   const svgRef = useRef(null);
//   const tooltipRef = useRef(null);
//   const [selectedNode, setSelectedNode] = useState(null);
//   const [relatedNodes, setRelatedNodes] = useState([]);

//   // Get all person nodes for the selector
//   const personNodes = sampleData.graph.nodes.filter((node) => node.type === "Person");

//   // State for selected ministers
//   const [selectedMinisters, setSelectedMinisters] = useState([]);

//   // Toggle minister selection
//   const toggleMinister = (ministerId) => {
//     setSelectedMinisters((prev) =>
//       prev.includes(ministerId) ? prev.filter((id) => id !== ministerId) : [...prev, ministerId]
//     );
//   };

//   // Get filtered data based on selected ministers
//   const getFilteredData = () => {
//     if (selectedMinisters.length === 0) {
//       return { nodes: [], edges: [] };
//     }

//     // Get all selected person nodes
//     const selectedPersonNodes = sampleData.graph.nodes.filter(
//       (node) => node.type === "Person" && selectedMinisters.includes(node.id)
//     );

//     // Get all edges connected to selected persons
//     const relevantEdges = sampleData.graph.edges.filter((edge) => 
//       selectedMinisters.includes(edge.source)
//     );

//     // Get all tag nodes connected to selected persons
//     const connectedTagIds = relevantEdges.map((edge) => edge.target);
//     const connectedTagNodes = sampleData.graph.nodes.filter(
//       (node) => node.type === "Tag" && connectedTagIds.includes(node.id)
//     );

//     return {
//       nodes: [...selectedPersonNodes, ...connectedTagNodes],
//       edges: relevantEdges,
//     };
//   };

//   useEffect(() => {
//     if (!svgRef.current) return;

//     // Get filtered data
//     const { nodes, edges } = getFilteredData();

//     // Clear any existing SVG content
//     d3.select(svgRef.current).selectAll("*").remove();

//     // If no ministers selected, don't render anything
//     if (nodes.length === 0) return;

//     // Prepare nodes and links for D3
//     const simulationNodes = nodes.map((node) => ({
//       ...node,
//       x: undefined,
//       y: undefined,
//       vx: undefined,
//       vy: undefined,
//       fx: undefined,
//       fy: undefined,
//     }));

//     const simulationLinks = edges.map((edge) => ({
//       ...edge,
//       source: edge.source,
//       target: edge.target,
//     }));

//     // Get the SVG dimensions
//     const svgRect = svgRef.current.getBoundingClientRect();
//     const width = svgRect.width;
//     const height = 600;

//     const svg = d3
//       .select(svgRef.current)
//       .attr("width", width)
//       .attr("height", height)
//       .attr("viewBox", [0, 0, width, height])
//       .attr("style", "max-width: 100%; height: auto;");

//     // Create a tooltip div
//     const tooltip = d3
//       .select(tooltipRef.current)
//       .style("position", "absolute")
//       .style("visibility", "hidden")
//       .style("background-color", "white")
//       .style("border", "1px solid #ddd")
//       .style("border-radius", "4px")
//       .style("padding", "8px")
//       .style("font-size", "12px")
//       .style("pointer-events", "none")
//       .style("z-index", "10");

//     // Create the force simulation
//     const simulation = d3
//       .forceSimulation(simulationNodes)
//       .force(
//         "link",
//         d3
//           .forceLink(simulationLinks)
//           .id((d) => d.id)
//           .distance(150)
//       )
//       .force(
//         "charge",
//         d3.forceManyBody().strength((d) => (d.type === "Person" ? -800 : -400))
//       )
//       .force("center", d3.forceCenter(width / 2, height / 2))
//       .force(
//         "collision",
//         d3.forceCollide().radius((d) => (d.type === "Person" ? 80 : 60))
//       )
//       .force(
//         "radial",
//         d3
//           .forceRadial((d) => (d.type === "Person" ? 0 : 200), width / 2, height / 2)
//           .strength((d) => (d.type === "Person" ? 0.1 : 0.8))
//       );

//     // Create a container for all elements
//     const container = svg.append("g");

//     // Create the links
//     const link = container
//       .append("g")
//       .selectAll("line")
//       .data(simulationLinks)
//       .join("line")
//       .attr("stroke", "#999")
//       .attr("stroke-opacity", 0.6)
//       .attr("stroke-width", 1.5)
//       .on("mouseover", (event, d) => {
//         tooltip
//           .style("visibility", "visible")
//           .html(d.hoverInfo)
//           .style("left", event.pageX + 10 + "px")
//           .style("top", event.pageY - 10 + "px");
//       })
//       .on("mouseout", () => {
//         tooltip.style("visibility", "hidden");
//       });

//     // Create the nodes
//     const node = container
//       .append("g")
//       .selectAll("g")
//       .data(simulationNodes)
//       .join("g")
//       .attr("cursor", "pointer")
//       .call(drag(simulation))
//       .on("click", (event, d) => {
//         event.stopPropagation();

//         // Find related nodes (connected by edges)
//         const connectedNodes = simulationLinks
//           .filter(
//             (link) =>
//               (typeof link.source === "object" && link.source.id === d.id) ||
//               (typeof link.target === "object" && link.target.id === d.id)
//           )
//           .map((link) => {
//             const connectedId =
//               typeof link.source === "object" && link.source.id === d.id
//                 ? typeof link.target === "object"
//                   ? link.target.id
//                   : link.target
//                 : typeof link.source === "object"
//                   ? link.source.id
//                   : link.source;

//             return simulationNodes.find((node) => node.id === connectedId);
//           })
//           .filter(Boolean);

//         // Set selected node and related nodes
//         setSelectedNode(d);
//         setRelatedNodes(connectedNodes);

//         // Highlight the selected node and its connections
//         node.attr("opacity", (n) => (n.id === d.id || connectedNodes.some((cn) => cn.id === n.id) ? 1 : 0.3));
//         link.attr("stroke-opacity", (l) =>
//           (typeof l.source === "object" && l.source.id === d.id) ||
//           (typeof l.target === "object" && l.target.id === d.id)
//             ? 1
//             : 0.1
//         );
//       });

//     // Add circles for nodes
//     node
//       .append("circle")
//       .attr("r", (d) => (d.type === "Person" ? 35 : 25))
//       .attr("fill", (d) => (d.type === "Person" ? "#4f46e5" : "#10b981"))
//       .attr("stroke", "#fff")
//       .attr("stroke-width", 2);

//     // Add labels for nodes
//     node
//       .append("text")
//       .attr("text-anchor", "middle")
//       .attr("dy", (d) => (d.type === "Person" ? 45 : 35))
//       .attr("font-size", (d) => (d.type === "Person" ? "12px" : "10px"))
//       .attr("fill", "#333")
//       .text((d) => {
//         // For person nodes, remove the "H.E." prefix
//         if (d.type === "Person") {
//           return d.label.replace("H.E. ", "");
//         }
//         return d.label;
//       });

//     // Update positions on each tick of the simulation
//     simulation.on("tick", () => {
//       link
//         .attr("x1", (d) => (typeof d.source === "object" ? Math.max(30, Math.min(width - 30, d.source.x || 0)) : 0))
//         .attr("y1", (d) => (typeof d.source === "object" ? Math.max(30, Math.min(height - 30, d.source.y || 0)) : 0))
//         .attr("x2", (d) => (typeof d.target === "object" ? Math.max(30, Math.min(width - 30, d.target.x || 0)) : 0))
//         .attr("y2", (d) => (typeof d.target === "object" ? Math.max(30, Math.min(height - 30, d.target.y || 0)) : 0));

//       node.attr("transform", (d) => {
//         const x = Math.max(30, Math.min(width - 30, d.x || 0));
//         const y = Math.max(30, Math.min(height - 30, d.y || 0));
//         return `translate(${x},${y})`;
//       });
//     });

//     // Add zoom functionality
//     const zoom = d3
//       .zoom()
//       .scaleExtent([0.2, 5])
//       .on("zoom", (event) => {
//         container.attr("transform", event.transform);
//       });

//     svg.call(zoom);

//     // Reset selection when clicking on the background
//     svg.on("click", () => {
//       node.attr("opacity", 1);
//       link.attr("stroke-opacity", 0.6);
//       setSelectedNode(null);
//       setRelatedNodes([]);
//     });

//     // Drag function for nodes
//     function drag(simulation) {
//       function dragstarted(event) {
//         if (!event.active) simulation.alphaTarget(0.3).restart();
//         event.subject.fx = event.subject.x;
//         event.subject.fy = event.subject.y;
//       }

//       function dragged(event) {
//         event.subject.fx = event.x;
//         event.subject.fy = event.y;
//       }

//       function dragended(event) {
//         if (!event.active) simulation.alphaTarget(0);
//         event.subject.fx = null;
//         event.subject.fy = null;
//       }

//       return d3
//         .drag()
//         .on("start", dragstarted)
//         .on("drag", dragged)
//         .on("end", dragended);
//     }

//     // Cleanup function
//     return () => {
//       simulation.stop();
//     };
//   }, [selectedMinisters]);

//   return (
//     <div className="flex flex-col gap-4 p-4 w-full max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
//       {/* Minister selector */}
//       <div className="bg-white p-4 rounded-lg shadow-sm border">
//         <h3 className="text-sm font-medium mb-2">Select Ministers to Display:</h3>
//         <div className="flex flex-wrap gap-2">
//           {personNodes.map((person) => (
//             <div
//               key={person.id}
//               className={`cursor-pointer px-3 py-1 rounded-full ${
//                 selectedMinisters.includes(person.id)
//                   ? "bg-blue-600 text-white"
//                   : "bg-gray-100 text-gray-800 hover:bg-gray-200"
//               }`}
//               onClick={() => toggleMinister(person.id)}
//             >
//               {person.label.replace("H.E. ", "")}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Main content area with 2/3 - 1/3 split */}
//       <div className="flex flex-col lg:flex-row gap-4">
//         {/* Network visualization (2/3 width) */}
//         <div className="flex-1 lg:w-2/3 border rounded-lg shadow-sm bg-white">
//           <div className="p-4 border-b">
//             <h2 className="text-lg font-semibold">Finnish Ministers Network</h2>
//             <p className="text-sm text-gray-500">
//               {selectedMinisters.length === 0
//                 ? "Select ministers above to visualize their relationships"
//                 : `Showing ${selectedMinisters.length} minister${selectedMinisters.length > 1 ? "s" : ""} and their thematic tags`}
//             </p>
//           </div>
//           <div className="relative">
//             <svg ref={svgRef} className="w-full h-[600px]"></svg>
//             <div ref={tooltipRef} className="absolute"></div>
//           </div>
//           <div className="p-4 border-t">
//             <div className="flex items-center gap-4 text-sm">
//               <div className="flex items-center gap-2">
//                 <div className="w-3 h-3 rounded-full bg-[#4f46e5]"></div>
//                 <span>Person</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <div className="w-3 h-3 rounded-full bg-[#10b981]"></div>
//                 <span>Tag</span>
//               </div>
//             </div>
//             <p className="text-xs text-gray-500 mt-2">
//               Click on a node to see details. Drag nodes to reposition. Use mouse wheel to zoom in/out.
//             </p>
//           </div>
//         </div>

//         {/* Information panel (1/3 width) */}
//         <div className="lg:w-1/3 min-w-[300px]">
//           <div className="sticky top-4 border rounded-lg shadow-sm bg-white overflow-hidden">
//             <div className="p-4 border-b">
//               <h2 className="text-lg font-semibold">{selectedNode ? selectedNode.label : "Node Information"}</h2>
//               <p className="text-sm text-gray-500">
//                 {selectedNode
//                   ? selectedNode.type === "Person"
//                     ? "Minister Profile"
//                     : "Thematic Tag"
//                   : "Select a node to view details"}
//               </p>
//             </div>
//             <div className="p-4">
//               {selectedNode ? (
//                 selectedNode.type === "Person" && selectedNode.metadata ? (
//                   <div className="space-y-4">
//                     <div>
//                       <h3 className="font-medium">Biography</h3>
//                       <p className="text-sm">{selectedNode.metadata.shortBio}</p>
//                     </div>

//                     <div>
//                       <h3 className="font-medium">Key Points</h3>
//                       <ul className="list-disc pl-5 text-sm space-y-1">
//                         {selectedNode.metadata.keyPoints?.map((point, i) => (
//                           <li key={i}>{point}</li>
//                         ))}
//                       </ul>
//                     </div>

//                     <div>
//                       <h3 className="font-medium">Related Tags</h3>
//                       <div className="flex flex-wrap gap-2 mt-2">
//                         {relatedNodes.map((node) => (
//                           <span
//                             key={node.id}
//                             className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800"
//                           >
//                             {node.label}
//                           </span>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 ) : (
//                   <div className="space-y-4">
//                     <div>
//                       <h3 className="font-medium">Connected Ministers</h3>
//                       <div className="mt-2 space-y-2">
//                         {relatedNodes.map((node) => (
//                           <div key={node.id} className="p-2 bg-slate-50 rounded-md">
//                             <p className="font-medium">{node.label}</p>
//                             {node.metadata && (
//                               <p className="text-xs text-gray-500 truncate">{node.metadata.shortBio}</p>
//                             )}
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 )
//               ) : (
//                 <div className="text-center py-8">
//                   <p className="text-gray-500">
//                     Click on any node in the network diagram to view detailed information here.
//                   </p>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default NetworkDiagram;



































// function NetworkDiagram() {
//   const svgRef = useRef(null);
//   const tooltipRef = useRef(null);
//   const [selectedNode, setSelectedNode] = useState(null);
//   const [relatedNodes, setRelatedNodes] = useState([]);

//   // Get all person nodes for the selector
//   const personNodes = sampleData.graph.nodes.filter((node) => node.type === "Person");

//   // State for selected ministers
//   const [selectedMinisters, setSelectedMinisters] = useState([]);

//   // Toggle minister selection
//   const toggleMinister = (ministerId) => {
//     setSelectedMinisters((prev) =>
//       prev.includes(ministerId) ? prev.filter((id) => id !== ministerId) : [...prev, ministerId]
//     );
//   };

//   // Get filtered data based on selected ministers
//   const getFilteredData = () => {
//     if (selectedMinisters.length === 0) {
//       return { nodes: [], edges: [] };
//     }

//     // 1) Person nodes selected
//     const selectedPersonNodes = sampleData.graph.nodes.filter(
//       (node) => node.type === "Person" && selectedMinisters.includes(node.id)
//     );

//     // 2) Edges from those person nodes to tags
//     const relevantEdges = sampleData.graph.edges.filter((edge) =>
//       selectedMinisters.includes(edge.source)
//     );

//     // 3) Tag nodes connected to those edges
//     const connectedTagIds = relevantEdges.map((edge) => edge.target);
//     const connectedTagNodes = sampleData.graph.nodes.filter(
//       (node) => node.type === "Tag" && connectedTagIds.includes(node.id)
//     );

//     // 4) Now build subtag nodes & edges:
//     const subTagNodes = [];
//     const subTagEdges = [];

//     connectedTagNodes.forEach((tagNode) => {
//       // If this tag has subtags, create a new node for each subtag
//       if (tagNode.metadata && Array.isArray(tagNode.metadata.subTags)) {
//         tagNode.metadata.subTags.forEach((subText, index) => {
//           // Create a unique ID for the subtag node
//           const subTagId = `subtag_${tagNode.id}_${index}`;
//           subTagNodes.push({
//             id: subTagId,
//             label: subText,
//             type: "SubTag",
//             metadata: {
//               // If you need any subtag-specific metadata, add it here
//               parentTag: tagNode.id,
//             },
//           });
//           // Create an edge from the Tag node to this new SubTag node
//           subTagEdges.push({
//             source: tagNode.id,
//             target: subTagId,
//             type: "Tag-SubTag",
//             hoverInfo: subText,
//           });
//         });
//       }
//     });

//     // 5) Combine everything
//     const allNodes = [...selectedPersonNodes, ...connectedTagNodes, ...subTagNodes];
//     const allEdges = [...relevantEdges, ...subTagEdges];

//     return { nodes: allNodes, edges: allEdges };
//   };

//   useEffect(() => {
//     if (!svgRef.current) return;

//     // Get filtered data
//     const { nodes, edges } = getFilteredData();

//     // Clear any existing SVG content
//     d3.select(svgRef.current).selectAll("*").remove();

//     // If no ministers selected, don't render anything
//     if (nodes.length === 0) return;

//     // Prepare nodes and links for D3
//     const simulationNodes = nodes.map((node) => ({
//       ...node,
//       x: undefined,
//       y: undefined,
//       vx: undefined,
//       vy: undefined,
//       fx: undefined,
//       fy: undefined,
//     }));

//     const simulationLinks = edges.map((edge) => ({
//       ...edge,
//       source: edge.source,
//       target: edge.target,
//     }));

//     // Get the SVG dimensions
//     const svgRect = svgRef.current.getBoundingClientRect();
//     const width = svgRect.width;
//     const height = 600;

//     const svg = d3
//       .select(svgRef.current)
//       .attr("width", width)
//       .attr("height", height)
//       .attr("viewBox", [0, 0, width, height])
//       .attr("style", "max-width: 100%; height: auto;");

//     // Create a tooltip div
//     const tooltip = d3
//       .select(tooltipRef.current)
//       .style("position", "absolute")
//       .style("visibility", "hidden")
//       .style("background-color", "white")
//       .style("border", "1px solid #ddd")
//       .style("border-radius", "4px")
//       .style("padding", "8px")
//       .style("font-size", "12px")
//       .style("pointer-events", "none")
//       .style("z-index", "10");

//     // Create the force simulation
//     const simulation = d3
//       .forceSimulation(simulationNodes)
//       .force(
//         "link",
//         d3
//           .forceLink(simulationLinks)
//           .id((d) => d.id)
//           .distance(150)
//       )
//       .force(
//         "charge",
//         d3.forceManyBody().strength((d) => {
//           if (d.type === "Person") return -800;
//           if (d.type === "Tag") return -400;
//           // SubTag or anything else
//           return -200;
//         })
//       )
//       .force("center", d3.forceCenter(width / 2, height / 2))
//       .force(
//         "collision",
//         d3.forceCollide().radius((d) => {
//           if (d.type === "Person") return 80;
//           if (d.type === "Tag") return 60;
//           // SubTag
//           return 30;
//         })
//       )
//       .force(
//         "radial",
//         d3
//           .forceRadial((d) => {
//             if (d.type === "Person") return 0;
//             if (d.type === "Tag") return 200;
//             // SubTag
//             return 300;
//           }, width / 2, height / 2)
//           .strength((d) => {
//             if (d.type === "Person") return 0.1;
//             if (d.type === "Tag") return 0.8;
//             // SubTag
//             return 0.8;
//           })
//       );

//     // Create a container for all elements
//     const container = svg.append("g");

//     // Create the links
//     const link = container
//       .append("g")
//       .selectAll("line")
//       .data(simulationLinks)
//       .join("line")
//       .attr("stroke", "#999")
//       .attr("stroke-opacity", 0.6)
//       .attr("stroke-width", 1.5)
//       .on("mouseover", (event, d) => {
//         tooltip
//           .style("visibility", "visible")
//           .html(d.hoverInfo)
//           .style("left", event.pageX + 10 + "px")
//           .style("top", event.pageY - 10 + "px");
//       })
//       .on("mouseout", () => {
//         tooltip.style("visibility", "hidden");
//       });

//     // Create the nodes
//     const node = container
//       .append("g")
//       .selectAll("g")
//       .data(simulationNodes)
//       .join("g")
//       .attr("cursor", "pointer")
//       .call(drag(simulation))
//       .on("click", (event, d) => {
//         event.stopPropagation();

//         // Find related nodes (connected by edges)
//         const connectedNodes = simulationLinks
//           .filter(
//             (link) =>
//               (typeof link.source === "object" && link.source.id === d.id) ||
//               (typeof link.target === "object" && link.target.id === d.id)
//           )
//           .map((link) => {
//             const connectedId =
//               typeof link.source === "object" && link.source.id === d.id
//                 ? typeof link.target === "object"
//                   ? link.target.id
//                   : link.target
//                 : typeof link.source === "object"
//                 ? link.source.id
//                 : link.source;

//             return simulationNodes.find((node) => node.id === connectedId);
//           })
//           .filter(Boolean);

//         // Set selected node and related nodes
//         setSelectedNode(d);
//         setRelatedNodes(connectedNodes);

//         // Highlight the selected node and its connections
//         node.attr("opacity", (n) =>
//           n.id === d.id || connectedNodes.some((cn) => cn.id === n.id) ? 1 : 0.3
//         );
//         link.attr("stroke-opacity", (l) =>
//           (typeof l.source === "object" && l.source.id === d.id) ||
//           (typeof l.target === "object" && l.target.id === d.id)
//             ? 1
//             : 0.1
//         );
//       });

//     // Add circles for nodes, with different colours by type
//     node
//       .append("circle")
//       .attr("r", (d) => {
//         if (d.type === "Person") return 35;
//         if (d.type === "Tag") return 25;
//         // SubTag
//         return 15;
//       })
//       .attr("fill", (d) => {
//         if (d.type === "Person") return "#4f46e5"; // Blue
//         if (d.type === "Tag") return "#10b981";    // Green
//         // SubTag
//         return "#f59e0b"; // Orange
//       })
//       .attr("stroke", "#fff")
//       .attr("stroke-width", 2);

//     // Add labels for nodes
//     node
//       .append("text")
//       .attr("text-anchor", "middle")
//       .attr("dy", (d) => {
//         if (d.type === "Person") return 45;
//         if (d.type === "Tag") return 35;
//         // SubTag
//         return 25;
//       })
//       .attr("font-size", (d) => {
//         if (d.type === "Person") return "12px";
//         if (d.type === "Tag") return "10px";
//         // SubTag
//         return "8px";
//       })
//       .attr("fill", "#333")
//       .text((d) => {
//         if (d.type === "Person") {
//           // Remove the "H.E." prefix
//           return d.label.replace("H.E. ", "");
//         }
//         return d.label;
//       });

//     // Update positions on each tick of the simulation
//     simulation.on("tick", () => {
//       link
//         .attr("x1", (d) =>
//           typeof d.source === "object"
//             ? Math.max(30, Math.min(width - 30, d.source.x || 0))
//             : 0
//         )
//         .attr("y1", (d) =>
//           typeof d.source === "object"
//             ? Math.max(30, Math.min(height - 30, d.source.y || 0))
//             : 0
//         )
//         .attr("x2", (d) =>
//           typeof d.target === "object"
//             ? Math.max(30, Math.min(width - 30, d.target.x || 0))
//             : 0
//         )
//         .attr("y2", (d) =>
//           typeof d.target === "object"
//             ? Math.max(30, Math.min(height - 30, d.target.y || 0))
//             : 0
//         );

//       node.attr("transform", (d) => {
//         const x = Math.max(30, Math.min(width - 30, d.x || 0));
//         const y = Math.max(30, Math.min(height - 30, d.y || 0));
//         return `translate(${x},${y})`;
//       });
//     });

//     // Add zoom functionality
//     const zoom = d3
//       .zoom()
//       .scaleExtent([0.2, 5])
//       .on("zoom", (event) => {
//         container.attr("transform", event.transform);
//       });

//     svg.call(zoom);

//     // Reset selection when clicking on the background
//     svg.on("click", () => {
//       node.attr("opacity", 1);
//       link.attr("stroke-opacity", 0.6);
//       setSelectedNode(null);
//       setRelatedNodes([]);
//     });

//     // Drag function for nodes
//     function drag(simulation) {
//       function dragstarted(event) {
//         if (!event.active) simulation.alphaTarget(0.3).restart();
//         event.subject.fx = event.subject.x;
//         event.subject.fy = event.subject.y;
//       }

//       function dragged(event) {
//         event.subject.fx = event.x;
//         event.subject.fy = event.y;
//       }

//       function dragended(event) {
//         if (!event.active) simulation.alphaTarget(0);
//         event.subject.fx = null;
//         event.subject.fy = null;
//       }

//       return d3
//         .drag()
//         .on("start", dragstarted)
//         .on("drag", dragged)
//         .on("end", dragended);
//     }

//     // Cleanup function
//     return () => {
//       simulation.stop();
//     };
//   }, [selectedMinisters]);

//   return (
//     <div className="flex flex-col gap-4 p-4 w-full max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
//       {/* Minister selector */}
//       <div className="bg-white p-4 rounded-lg shadow-sm border">
//         <h3 className="text-sm font-medium mb-2">Select Ministers to Display:</h3>
//         <div className="flex flex-wrap gap-2">
//           {personNodes.map((person) => (
//             <div
//               key={person.id}
//               className={`cursor-pointer px-3 py-1 rounded-full ${
//                 selectedMinisters.includes(person.id)
//                   ? "bg-blue-600 text-white"
//                   : "bg-gray-100 text-gray-800 hover:bg-gray-200"
//               }`}
//               onClick={() => toggleMinister(person.id)}
//             >
//               {person.label.replace("H.E. ", "")}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Main content area with 2/3 - 1/3 split */}
//       <div className="flex flex-col lg:flex-row gap-4">
//         {/* Network visualization (2/3 width) */}
//         <div className="flex-1 lg:w-2/3 border rounded-lg shadow-sm bg-white">
//           <div className="p-4 border-b">
//             <h2 className="text-lg font-semibold">Finnish Ministers Network</h2>
//             <p className="text-sm text-gray-500">
//               {selectedMinisters.length === 0
//                 ? "Select ministers above to visualize their relationships"
//                 : `Showing ${selectedMinisters.length} minister${
//                     selectedMinisters.length > 1 ? "s" : ""
//                   } and their thematic tags`}
//             </p>
//           </div>
//           <div className="relative">
//             <svg ref={svgRef} className="w-full h-[600px]"></svg>
//             <div ref={tooltipRef} className="absolute"></div>
//           </div>
//           <div className="p-4 border-t">
//             <div className="flex items-center gap-4 text-sm">
//               <div className="flex items-center gap-2">
//                 <div className="w-3 h-3 rounded-full bg-[#4f46e5]"></div>
//                 <span>Person</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <div className="w-3 h-3 rounded-full bg-[#10b981]"></div>
//                 <span>Tag</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <div className="w-3 h-3 rounded-full bg-[#f59e0b]"></div>
//                 <span>SubTag</span>
//               </div>
//             </div>
//             <p className="text-xs text-gray-500 mt-2">
//               Click on a node to see details. Drag nodes to reposition. Use mouse wheel to zoom in/out.
//             </p>
//           </div>
//         </div>

//         {/* Information panel (1/3 width) */}
//         <div className="lg:w-1/3 min-w-[300px]">
//           <div className="sticky top-4 border rounded-lg shadow-sm bg-white overflow-hidden">
//             <div className="p-4 border-b">
//               <h2 className="text-lg font-semibold">
//                 {selectedNode ? selectedNode.label : "Node Information"}
//               </h2>
//               <p className="text-sm text-gray-500">
//                 {selectedNode
//                   ? selectedNode.type === "Person"
//                     ? "Minister Profile"
//                     : selectedNode.type === "Tag"
//                     ? "Thematic Tag Details"
//                     : "SubTag Details"
//                   : "Select a node to view details"}
//               </p>
//             </div>
//             <div className="p-4">
//               {selectedNode ? (
//                 selectedNode.type === "Person" && selectedNode.metadata ? (
//                   <div className="space-y-4">
//                     <div>
//                       <h3 className="font-medium">Biography</h3>
//                       <p className="text-sm">{selectedNode.metadata.shortBio}</p>
//                     </div>
//                     <div>
//                       <h3 className="font-medium">Key Points</h3>
//                       <ul className="list-disc pl-5 text-sm space-y-1">
//                         {selectedNode.metadata.keyPoints?.map((point, i) => (
//                           <li key={i}>{point}</li>
//                         ))}
//                       </ul>
//                     </div>
//                     <div>
//                       <h3 className="font-medium">Related Tags</h3>
//                       <div className="flex flex-wrap gap-2 mt-2">
//                         {relatedNodes
//                           .filter((node) => node.type === "Tag")
//                           .map((node) => (
//                             <span
//                               key={node.id}
//                               className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800"
//                             >
//                               {node.label}
//                             </span>
//                           ))}
//                       </div>
//                     </div>
//                   </div>
//                 ) : selectedNode.type === "Tag" ? (
//                   <div className="space-y-4">
//                     <div>
//                       <h3 className="font-medium">Tag Details</h3>
//                       <p className="text-sm">Category: {selectedNode.label}</p>
//                     </div>
//                     <div>
//                       <h3 className="font-medium">Connected Ministers</h3>
//                       <div className="mt-2 space-y-2">
//                         {relatedNodes
//                           .filter((node) => node.type === "Person")
//                           .map((node) => (
//                             <div key={node.id} className="p-2 bg-slate-50 rounded-md">
//                               <p className="font-medium">{node.label}</p>
//                               {node.metadata && (
//                                 <p className="text-xs text-gray-500 truncate">
//                                   {node.metadata.shortBio}
//                                 </p>
//                               )}
//                             </div>
//                           ))}
//                       </div>
//                     </div>
//                     <div>
//                       <h3 className="font-medium">Subtags</h3>
//                       <div className="mt-2 space-y-2">
//                         {relatedNodes
//                           .filter((node) => node.type === "SubTag")
//                           .map((subNode) => (
//                             <div key={subNode.id} className="p-2 bg-slate-50 rounded-md">
//                               <p className="font-medium">{subNode.label}</p>
//                             </div>
//                           ))}
//                       </div>
//                     </div>
//                   </div>
//                 ) : selectedNode.type === "SubTag" ? (
//                   <div className="space-y-4">
//                     <div>
//                       <h3 className="font-medium">SubTag Node</h3>
//                       <p className="text-sm">
//                         This is a subtag: <strong>{selectedNode.label}</strong>
//                       </p>
//                     </div>
//                     <div>
//                       <h3 className="font-medium">Connected Tag</h3>
//                       <div className="mt-2 space-y-2">
//                         {relatedNodes
//                           .filter((node) => node.type === "Tag")
//                           .map((tagNode) => (
//                             <div key={tagNode.id} className="p-2 bg-slate-50 rounded-md">
//                               <p className="font-medium">{tagNode.label}</p>
//                             </div>
//                           ))}
//                       </div>
//                     </div>
//                     <div>
//                       <h3 className="font-medium">Connected Ministers</h3>
//                       <div className="mt-2 space-y-2">
//                         {relatedNodes
//                           .filter((node) => node.type === "Person")
//                           .map((person) => (
//                             <div key={person.id} className="p-2 bg-slate-50 rounded-md">
//                               <p className="font-medium">{person.label}</p>
//                               {person.metadata && (
//                                 <p className="text-xs text-gray-500 truncate">
//                                   {person.metadata.shortBio}
//                                 </p>
//                               )}
//                             </div>
//                           ))}
//                       </div>
//                     </div>
//                   </div>
//                 ) : (
//                   <div className="text-center py-8">
//                     <p className="text-gray-500">
//                       Click on any node in the network diagram to view detailed information here.
//                     </p>
//                   </div>
//                 )
//               ) : (
//                 <div className="text-center py-8">
//                   <p className="text-gray-500">
//                     Click on any node in the network diagram to view detailed information here.
//                   </p>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default NetworkDiagram;


































// // Example mapping of person node IDs to local image paths.
// // Adjust these paths to match your actual file structure.
// const ministerPhotos = {
//   person_SandraBergqvist: "/assets/images/SandraB.png",
//   person_AnnaKaisaIkonen: "/assets/images/SandraB.png",
//   person_AlexanderStubb: "/assets/images/SandraB.png",
//   person_TuulaYrjola: "/assets/images/SandraB.png",
//   person_AnnaMariWongHamalainen: "/assets/images/SandraB.png",
//   person_VilleBrumme: "/assets/images/SandraB.png",
//   person_ElinaValtonen: "/assets/images/SandraB.png",
//   person_LailaClyne: "/assets/images/SandraB.png",
//   person_AnnaKaisaHeikkinen: "/assets/images/SandraB.png",
//   person_AnneMRabet: "/assets/images/SandraB.png",
//   person_AnttiHerlin: "/assets/images/SandraB.png",
//   person_JustinHotard: "/assets/images/SandraB.png",
//   person_PekkaLundmark: "/assets/images/SandraB.png",
//   person_SariBaldauf: "/assets/images/SandraB.png",
//   person_HakanAgnevall: "/assets/images/SandraB.png",
//   person_EhrnoothFamilyRep: "/assets/images/SandraB.png",
//   person_RobinLangenskiold: "/assets/images/SandraB.png",
//   person_RafaelaSeppala: "/assets/images/SandraB.png",
//   person_BjornWahlroos: "/assets/images/SandraB.png",
//   person_JyriHakamies: "/assets/images/SandraB.png",
//   person_JussiHallaAho: "/assets/images/SandraB.png",
//   person_NathaliAhlstrom: "/assets/images/SandraB.png",
//   person_SeppoVikstrom: "/assets/images/SandraB.png",
//   person_LassiNoponen: "/assets/images/SandraB.png",
//   person_MarkusRauramo: "/assets/images/SandraB.png",
//   person_JuboRomakkaniemi: "/assets/images/SandraB.png",
// };


// // Example sampleData. Make sure your actual data is imported or defined similarly.
// // import { sampleData } from "./sampleData";

// function NetworkDiagram() {
//   const svgRef = useRef(null);
//   const tooltipRef = useRef(null);

//   // Single selected minister instead of an array
//   const [selectedMinister, setSelectedMinister] = useState(null);

//   // Track which node is clicked in the diagram
//   const [selectedNode, setSelectedNode] = useState(null);
//   const [relatedNodes, setRelatedNodes] = useState([]);

//   // Get all person nodes for the selector
//   const personNodes = sampleData.graph.nodes.filter(
//     (node) => node.type === "Person"
//   );

//   // Handler to select a single minister
//   const selectMinister = (ministerId) => {
//     // If we click the same minister again, deselect
//     if (selectedMinister === ministerId) {
//       setSelectedMinister(null);
//     } else {
//       setSelectedMinister(ministerId);
//     }
//     // Also reset the selected node in the diagram
//     setSelectedNode(null);
//     setRelatedNodes([]);
//   };

//   // Return filtered data for the single selected minister
//   const getFilteredData = () => {
//     if (!selectedMinister) {
//       return { nodes: [], edges: [] };
//     }

//     // 1) Get the selected person node
//     const selectedPerson = sampleData.graph.nodes.find(
//       (node) => node.id === selectedMinister
//     );
//     if (!selectedPerson) {
//       return { nodes: [], edges: [] };
//     }

//     // 2) Edges connected to that single person
//     const relevantEdges = sampleData.graph.edges.filter(
//       (edge) => edge.source === selectedMinister
//     );

//     // 3) Tag nodes connected to that person
//     const connectedTagIds = relevantEdges.map((edge) => edge.target);
//     const connectedTagNodes = sampleData.graph.nodes.filter(
//       (node) => node.type === "Tag" && connectedTagIds.includes(node.id)
//     );

//     // 4) Build subtag nodes & edges for each Tag node
//     const subTagNodes = [];
//     const subTagEdges = [];

//     connectedTagNodes.forEach((tagNode) => {
//       if (tagNode.metadata && Array.isArray(tagNode.metadata.subTags)) {
//         tagNode.metadata.subTags.forEach((subText, index) => {
//           const subTagId = `subtag_${tagNode.id}_${index}`;
//           subTagNodes.push({
//             id: subTagId,
//             label: subText,
//             type: "SubTag",
//             metadata: { parentTag: tagNode.id },
//           });
//           subTagEdges.push({
//             source: tagNode.id,
//             target: subTagId,
//             type: "Tag-SubTag",
//             hoverInfo: subText,
//           });
//         });
//       }
//     });

//     // Combine all nodes & edges
//     const allNodes = [selectedPerson, ...connectedTagNodes, ...subTagNodes];
//     const allEdges = [...relevantEdges, ...subTagEdges];

//     return { nodes: allNodes, edges: allEdges };
//   };

//   useEffect(() => {
//     if (!svgRef.current) return;

//     // Get filtered data
//     const { nodes, edges } = getFilteredData();

//     // Clear any existing SVG content
//     d3.select(svgRef.current).selectAll("*").remove();

//     // If no minister selected, don't render anything
//     if (nodes.length === 0) return;

//     // Prepare nodes and links for D3
//     const simulationNodes = nodes.map((node) => ({
//       ...node,
//       x: undefined,
//       y: undefined,
//       vx: undefined,
//       vy: undefined,
//       fx: undefined,
//       fy: undefined,
//     }));

//     const simulationLinks = edges.map((edge) => ({
//       ...edge,
//       source: edge.source,
//       target: edge.target,
//     }));

//     // Get the SVG dimensions
//     const svgRect = svgRef.current.getBoundingClientRect();
//     const width = svgRect.width;
//     const height = 600;

//     const svg = d3
//       .select(svgRef.current)
//       .attr("width", width)
//       .attr("height", height)
//       .attr("viewBox", [0, 0, width, height])
//       .attr("style", "max-width: 100%; height: auto;");

//     // Create a tooltip div
//     const tooltip = d3
//       .select(tooltipRef.current)
//       .style("position", "absolute")
//       .style("visibility", "hidden")
//       .style("background-color", "white")
//       .style("border", "1px solid #ddd")
//       .style("border-radius", "4px")
//       .style("padding", "8px")
//       .style("font-size", "12px")
//       .style("pointer-events", "none")
//       .style("z-index", "10");

//     // Create the force simulation
//     const simulation = d3
//       .forceSimulation(simulationNodes)
//       .force(
//         "link",
//         d3
//           .forceLink(simulationLinks)
//           .id((d) => d.id)
//           .distance(150)
//       )
//       .force(
//         "charge",
//         d3.forceManyBody().strength((d) => {
//           if (d.type === "Person") return -800;
//           if (d.type === "Tag") return -400;
//           return -200; // SubTag or anything else
//         })
//       )
//       .force("center", d3.forceCenter(width / 2, height / 2))
//       .force(
//         "collision",
//         d3.forceCollide().radius((d) => {
//           if (d.type === "Person") return 80;
//           if (d.type === "Tag") return 60;
//           return 30; // SubTag
//         })
//       )
//       .force(
//         "radial",
//         d3
//           .forceRadial((d) => {
//             if (d.type === "Person") return 0;
//             if (d.type === "Tag") return 200;
//             return 300; // SubTag
//           }, width / 2, height / 2)
//           .strength((d) => {
//             if (d.type === "Person") return 0.1;
//             if (d.type === "Tag") return 0.8;
//             return 0.8; // SubTag
//           })
//       );

//     // Create a container for all elements
//     const container = svg.append("g");

//     // Create the links
//     const link = container
//       .append("g")
//       .selectAll("line")
//       .data(simulationLinks)
//       .join("line")
//       .attr("stroke", "#999")
//       .attr("stroke-opacity", 0.6)
//       .attr("stroke-width", 1.5)
//       .on("mouseover", (event, d) => {
//         tooltip
//           .style("visibility", "visible")
//           .html(d.hoverInfo)
//           .style("left", event.pageX + 10 + "px")
//           .style("top", event.pageY - 10 + "px");
//       })
//       .on("mouseout", () => {
//         tooltip.style("visibility", "hidden");
//       });

//     // Create the nodes
//     const node = container
//       .append("g")
//       .selectAll("g")
//       .data(simulationNodes)
//       .join("g")
//       .attr("cursor", "pointer")
//       .call(drag(simulation))
//       .on("click", (event, d) => {
//         event.stopPropagation();

//         // Find related nodes (connected by edges)
//         const connectedNodes = simulationLinks
//           .filter(
//             (link) =>
//               (typeof link.source === "object" && link.source.id === d.id) ||
//               (typeof link.target === "object" && link.target.id === d.id)
//           )
//           .map((link) => {
//             const connectedId =
//               typeof link.source === "object" && link.source.id === d.id
//                 ? typeof link.target === "object"
//                   ? link.target.id
//                   : link.target
//                 : typeof link.source === "object"
//                 ? link.source.id
//                 : link.source;

//             return simulationNodes.find((node) => node.id === connectedId);
//           })
//           .filter(Boolean);

//         // Set selected node and related nodes
//         setSelectedNode(d);
//         setRelatedNodes(connectedNodes);

//         // Highlight the selected node and its connections
//         node.attr("opacity", (n) =>
//           n.id === d.id || connectedNodes.some((cn) => cn.id === n.id) ? 1 : 0.3
//         );
//         link.attr("stroke-opacity", (l) =>
//           (typeof l.source === "object" && l.source.id === d.id) ||
//           (typeof l.target === "object" && l.target.id === d.id)
//             ? 1
//             : 0.1
//         );
//       });

//     // Add circles for nodes, with different colours by type
//     node
//       .append("circle")
//       .attr("r", (d) => {
//         if (d.type === "Person") return 35;
//         if (d.type === "Tag") return 25;
//         return 15; // SubTag
//       })
//       .attr("fill", (d) => {
//         if (d.type === "Person") return "#4f46e5"; // Blue
//         if (d.type === "Tag") return "#10b981";    // Green
//         return "#f59e0b"; // Orange for SubTag
//       })
//       .attr("stroke", "#fff")
//       .attr("stroke-width", 2);

//     // Add labels for nodes
//     node
//       .append("text")
//       .attr("text-anchor", "middle")
//       .attr("dy", (d) => {
//         if (d.type === "Person") return 45;
//         if (d.type === "Tag") return 35;
//         return 25; // SubTag
//       })
//       .attr("font-size", (d) => {
//         if (d.type === "Person") return "12px";
//         if (d.type === "Tag") return "10px";
//         return "8px"; // SubTag
//       })
//       .attr("fill", "#333")
//       .text((d) => {
//         if (d.type === "Person") {
//           // Remove the "H.E." prefix
//           return d.label.replace("H.E. ", "");
//         }
//         return d.label;
//       });

//     // Update positions on each tick of the simulation
//     simulation.on("tick", () => {
//       link
//         .attr("x1", (d) =>
//           typeof d.source === "object"
//             ? Math.max(30, Math.min(width - 30, d.source.x || 0))
//             : 0
//         )
//         .attr("y1", (d) =>
//           typeof d.source === "object"
//             ? Math.max(30, Math.min(height - 30, d.source.y || 0))
//             : 0
//         )
//         .attr("x2", (d) =>
//           typeof d.target === "object"
//             ? Math.max(30, Math.min(width - 30, d.target.x || 0))
//             : 0
//         )
//         .attr("y2", (d) =>
//           typeof d.target === "object"
//             ? Math.max(30, Math.min(height - 30, d.target.y || 0))
//             : 0
//         );

//       node.attr("transform", (d) => {
//         const x = Math.max(30, Math.min(width - 30, d.x || 0));
//         const y = Math.max(30, Math.min(height - 30, d.y || 0));
//         return `translate(${x},${y})`;
//       });
//     });

//     // Add zoom functionality
//     const zoom = d3
//       .zoom()
//       .scaleExtent([0.2, 5])
//       .on("zoom", (event) => {
//         container.attr("transform", event.transform);
//       });

//     svg.call(zoom);

//     // Reset selection when clicking on the background
//     svg.on("click", () => {
//       node.attr("opacity", 1);
//       link.attr("stroke-opacity", 0.6);
//       setSelectedNode(null);
//       setRelatedNodes([]);
//     });

//     // Drag function for nodes
//     function drag(simulation) {
//       function dragstarted(event) {
//         if (!event.active) simulation.alphaTarget(0.3).restart();
//         event.subject.fx = event.subject.x;
//         event.subject.fy = event.subject.y;
//       }

//       function dragged(event) {
//         event.subject.fx = event.x;
//         event.subject.fy = event.y;
//       }

//       function dragended(event) {
//         if (!event.active) simulation.alphaTarget(0);
//         event.subject.fx = null;
//         event.subject.fy = null;
//       }

//       return d3
//         .drag()
//         .on("start", dragstarted)
//         .on("drag", dragged)
//         .on("end", dragended);
//     }

//     // Cleanup function
//     return () => {
//       simulation.stop();
//     };
//   }, [selectedMinister]);

//   return (
//     <div className="flex flex-col gap-4 p-4 w-full max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
//       {/* Minister selector (single selection) */}
//       <div className="bg-white p-4 rounded-lg shadow-sm border">
//         <h3 className="text-sm font-medium mb-2">Select One Minister:</h3>
//         <div className="flex flex-wrap gap-2">
//           {personNodes.map((person) => (
//             <div
//               key={person.id}
//               className={`cursor-pointer px-3 py-1 rounded-full ${
//                 selectedMinister === person.id
//                   ? "bg-blue-600 text-white"
//                   : "bg-gray-100 text-gray-800 hover:bg-gray-200"
//               }`}
//               onClick={() => selectMinister(person.id)}
//             >
//               {person.label.replace("H.E. ", "")}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Main content area with 2/3 - 1/3 split */}
//       <div className="flex flex-col lg:flex-row gap-4">
//         {/* Network visualization (2/3 width) */}
//         <div className="flex-1 lg:w-2/3 border rounded-lg shadow-sm bg-white">
//           <div className="p-4 border-b">
//             <h2 className="text-lg font-semibold">Finnish Ministers Network</h2>
//             <p className="text-sm text-gray-500">
//               {!selectedMinister
//                 ? "Select a minister above to visualize their relationships"
//                 : `Showing 1 minister and their thematic tags`}
//             </p>
//           </div>
//           <div className="relative">
//             <svg ref={svgRef} className="w-full h-[600px]"></svg>
//             <div ref={tooltipRef} className="absolute"></div>
//           </div>
//           <div className="p-4 border-t">
//             <div className="flex items-center gap-4 text-sm">
//               <div className="flex items-center gap-2">
//                 <div className="w-3 h-3 rounded-full bg-[#4f46e5]"></div>
//                 <span>Person</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <div className="w-3 h-3 rounded-full bg-[#10b981]"></div>
//                 <span>Tag</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <div className="w-3 h-3 rounded-full bg-[#f59e0b]"></div>
//                 <span>SubTag</span>
//               </div>
//             </div>
//             <p className="text-xs text-gray-500 mt-2">
//               Click on a node to see details. Drag nodes to reposition. Use mouse wheel to zoom in/out.
//             </p>
//           </div>
//         </div>

//         {/* Information panel (1/3 width) */}
//         <div className="lg:w-1/3 min-w-[300px]">
//           <div className="sticky top-4 border rounded-lg shadow-sm bg-white overflow-hidden">
//             <div className="p-4 border-b flex items-center gap-3">
//               {selectedNode && selectedNode.type === "Person" && (
//                 <img
//                   src={ministerPhotos[selectedNode.id]}
//                   alt={selectedNode.label}
//                   className="w-12 h-12 object-cover rounded-full"
//                 />
//               )}
//               <div>
//                 <h2 className="text-lg font-semibold">
//                   {selectedNode ? selectedNode.label : "Node Information"}
//                 </h2>
//                 <p className="text-sm text-gray-500">
//                   {selectedNode
//                     ? selectedNode.type === "Person"
//                       ? "Minister Profile"
//                       : selectedNode.type === "Tag"
//                       ? "Thematic Tag Details"
//                       : "SubTag Details"
//                     : "Select a node to view details"}
//                 </p>
//               </div>
//             </div>
//             <div className="p-4">
//               {selectedNode ? (
//                 selectedNode.type === "Person" && selectedNode.metadata ? (
//                   <div className="space-y-4">
//                     <div>
//                       <h3 className="font-medium">Biography</h3>
//                       <p className="text-sm">{selectedNode.metadata.shortBio}</p>
//                     </div>
//                     <div>
//                       <h3 className="font-medium">Key Points</h3>
//                       <ul className="list-disc pl-5 text-sm space-y-1">
//                         {selectedNode.metadata.keyPoints?.map((point, i) => (
//                           <li key={i}>{point}</li>
//                         ))}
//                       </ul>
//                     </div>
//                     <div>
//                       <h3 className="font-medium">Related Tags</h3>
//                       <div className="flex flex-wrap gap-2 mt-2">
//                         {relatedNodes
//                           .filter((node) => node.type === "Tag")
//                           .map((node) => (
//                             <span
//                               key={node.id}
//                               className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800"
//                             >
//                               {node.label}
//                             </span>
//                           ))}
//                       </div>
//                     </div>
//                   </div>
//                 ) : selectedNode.type === "Tag" ? (
//                   <div className="space-y-4">
//                     <div>
//                       <h3 className="font-medium">Tag Details</h3>
//                       <p className="text-sm">Category: {selectedNode.label}</p>
//                     </div>
//                     <div>
//                       <h3 className="font-medium">Connected Ministers</h3>
//                       <div className="mt-2 space-y-2">
//                         {relatedNodes
//                           .filter((node) => node.type === "Person")
//                           .map((node) => (
//                             <div key={node.id} className="p-2 bg-slate-50 rounded-md">
//                               <p className="font-medium">{node.label}</p>
//                               {node.metadata && (
//                                 <p className="text-xs text-gray-500 truncate">
//                                   {node.metadata.shortBio}
//                                 </p>
//                               )}
//                             </div>
//                           ))}
//                       </div>
//                     </div>
//                     <div>
//                       <h3 className="font-medium">Subtags</h3>
//                       <div className="mt-2 space-y-2">
//                         {relatedNodes
//                           .filter((node) => node.type === "SubTag")
//                           .map((subNode) => (
//                             <div key={subNode.id} className="p-2 bg-slate-50 rounded-md">
//                               <p className="font-medium">{subNode.label}</p>
//                             </div>
//                           ))}
//                       </div>
//                     </div>
//                   </div>
//                 ) : selectedNode.type === "SubTag" ? (
//                   <div className="space-y-4">
//                     <div>
//                       <h3 className="font-medium">SubTag Node</h3>
//                       <p className="text-sm">
//                         This is a subtag: <strong>{selectedNode.label}</strong>
//                       </p>
//                     </div>
//                     <div>
//                       <h3 className="font-medium">Connected Tag</h3>
//                       <div className="mt-2 space-y-2">
//                         {relatedNodes
//                           .filter((node) => node.type === "Tag")
//                           .map((tagNode) => (
//                             <div key={tagNode.id} className="p-2 bg-slate-50 rounded-md">
//                               <p className="font-medium">{tagNode.label}</p>
//                             </div>
//                           ))}
//                       </div>
//                     </div>
//                     <div>
//                       <h3 className="font-medium">Connected Ministers</h3>
//                       <div className="mt-2 space-y-2">
//                         {relatedNodes
//                           .filter((node) => node.type === "Person")
//                           .map((person) => (
//                             <div key={person.id} className="p-2 bg-slate-50 rounded-md">
//                               <p className="font-medium">{person.label}</p>
//                               {person.metadata && (
//                                 <p className="text-xs text-gray-500 truncate">
//                                   {person.metadata.shortBio}
//                                 </p>
//                               )}
//                             </div>
//                           ))}
//                       </div>
//                     </div>
//                   </div>
//                 ) : (
//                   <div className="text-center py-8">
//                     <p className="text-gray-500">
//                       Click on any node in the network diagram to view detailed information here.
//                     </p>
//                   </div>
//                 )
//               ) : (
//                 <div className="text-center py-8">
//                   <p className="text-gray-500">
//                     Click on any node in the network diagram to view detailed information here.
//                   </p>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default NetworkDiagram;












// Mapping of person node IDs to local image paths.
// Adjust these paths to match your actual file structure.
const ministerPhotos = {
  person_SandraBergqvist: "/assets/images/SandraB.png",
  person_AnnaKaisaIkonen: "/assets/images/AnnaKaisaI.png",
  person_AlexanderStubb: "/assets/images/AlexanderS.png",
  person_TuulaYrjola: "/assets/images/TuulaY.png",
  person_AnnaMariWongHamalainen: "/assets/images/AnnaMariH.png",
  person_VilleBrumme: "/assets/images/VilleB.png",
  person_ElinaValtonen: "/assets/images/ElinaV.png",
  person_LailaClyne: "/assets/images/LailaC.png",
  person_AnnaKaisaHeikkinen: "/assets/images/AnnaKaisaH.png",
  person_AnneMRabet: "/assets/images/AnneM.png",
  person_AnttiHerlin: "/assets/images/AnttiH.png",
  person_JustinHotard: "/assets/images/JustinH.png",
  person_PekkaLundmark: "/assets/images/PekkaL.png",
  person_SariBaldauf: "/assets/images/SariB.png",
  person_HakanAgnevall: "/assets/images/HakanA.png",
  person_EhrnoothFamilyRep: "/assets/images/EhnoothFamily.png",
  person_RobinLangenskiold: "/assets/images/RobinL.png",
  person_RafaelaSeppala: "/assets/images/RafaelaS.png",
  person_BjornWahlroos: "/assets/images/BjornW.png",
  person_JyriHakamies: "/assets/images/JyriH.png",
  person_JussiHallaAho: "/assets/images/JussiH.png",
  person_NathaliAhlstrom: "/assets/images/NathaliA.png",
  person_SeppoVikstrom: "/assets/images/SeppoV.png",
  person_LassiNoponen: "/assets/images/LassiN.png",
  person_MarkusRauramo: "/assets/images/MarkusR.png",
  person_JuboRomakkaniemi: "/assets/images/JuboR.png",
};












// function NetworkDiagram() {
//   const svgRef = useRef(null);
//   const tooltipRef = useRef(null);

//   // Single selected minister instead of an array
//   const [selectedMinister, setSelectedMinister] = useState(null);
//   // We'll store the currently "active" node (by default, the selected person)
//   const [selectedNode, setSelectedNode] = useState(null);
//   const [relatedNodes, setRelatedNodes] = useState([]);

//   // Get all person nodes for the selector
//   const personNodes = sampleData.graph.nodes.filter(
//     (node) => node.type === "Person"
//   );

//   // When the selected minister changes, update the selected node to the person node
//   useEffect(() => {
//     if (selectedMinister) {
//       const personNode = sampleData.graph.nodes.find(
//         (node) => node.id === selectedMinister
//       );
//       if (personNode) {
//         setSelectedNode(personNode);
//       }
//     } else {
//       setSelectedNode(null);
//     }
//   }, [selectedMinister]);

//   // Handler to select a single minister
//   const selectMinister = (ministerId) => {
//     // If we click the same minister again, deselect
//     if (selectedMinister === ministerId) {
//       setSelectedMinister(null);
//     } else {
//       setSelectedMinister(ministerId);
//     }
//     // Reset any node selection from the graph
//     setRelatedNodes([]);
//   };

//   // Return filtered data for the single selected minister
//   const getFilteredData = () => {
//     if (!selectedMinister) {
//       return { nodes: [], edges: [] };
//     }

//     // 1) Get the selected person node
//     const selectedPerson = sampleData.graph.nodes.find(
//       (node) => node.id === selectedMinister
//     );
//     if (!selectedPerson) {
//       return { nodes: [], edges: [] };
//     }

//     // 2) Edges connected to that single person
//     const relevantEdges = sampleData.graph.edges.filter(
//       (edge) => edge.source === selectedMinister
//     );

//     // 3) Tag nodes connected to that person
//     const connectedTagIds = relevantEdges.map((edge) => edge.target);
//     const connectedTagNodes = sampleData.graph.nodes.filter(
//       (node) => node.type === "Tag" && connectedTagIds.includes(node.id)
//     );

//     // 4) Build subtag nodes & edges for each Tag node
//     const subTagNodes = [];
//     const subTagEdges = [];

//     connectedTagNodes.forEach((tagNode) => {
//       if (tagNode.metadata && Array.isArray(tagNode.metadata.subTags)) {
//         tagNode.metadata.subTags.forEach((subText, index) => {
//           const subTagId = `subtag_${tagNode.id}_${index}`;
//           subTagNodes.push({
//             id: subTagId,
//             label: subText,
//             type: "SubTag",
//             metadata: { parentTag: tagNode.id },
//           });
//           subTagEdges.push({
//             source: tagNode.id,
//             target: subTagId,
//             type: "Tag-SubTag",
//             hoverInfo: subText,
//           });
//         });
//       }
//     });

//     // Combine all nodes & edges
//     const allNodes = [selectedPerson, ...connectedTagNodes, ...subTagNodes];
//     const allEdges = [...relevantEdges, ...subTagEdges];

//     return { nodes: allNodes, edges: allEdges };
//   };

//   useEffect(() => {
//     if (!svgRef.current) return;

//     // Get filtered data
//     const { nodes, edges } = getFilteredData();

//     // Clear any existing SVG content
//     d3.select(svgRef.current).selectAll("*").remove();

//     // If no minister selected, don't render anything
//     if (nodes.length === 0) return;

//     // Prepare nodes and links for D3
//     const simulationNodes = nodes.map((node) => ({
//       ...node,
//       x: undefined,
//       y: undefined,
//       vx: undefined,
//       vy: undefined,
//       fx: undefined,
//       fy: undefined,
//     }));

//     const simulationLinks = edges.map((edge) => ({
//       ...edge,
//       source: edge.source,
//       target: edge.target,
//     }));

//     // Get the SVG dimensions
//     const svgRect = svgRef.current.getBoundingClientRect();
//     const width = svgRect.width;
//     const height = 600;

//     const svg = d3
//       .select(svgRef.current)
//       .attr("width", width)
//       .attr("height", height)
//       .attr("viewBox", [0, 0, width, height])
//       .attr("style", "max-width: 100%; height: auto;");

//     // Create a tooltip div
//     const tooltip = d3
//       .select(tooltipRef.current)
//       .style("position", "absolute")
//       .style("visibility", "hidden")
//       .style("background-color", "white")
//       .style("border", "1px solid #ddd")
//       .style("border-radius", "4px")
//       .style("padding", "8px")
//       .style("font-size", "12px")
//       .style("pointer-events", "none")
//       .style("z-index", "10");

//     // Create the force simulation
//     const simulation = d3
//       .forceSimulation(simulationNodes)
//       .force(
//         "link",
//         d3
//           .forceLink(simulationLinks)
//           .id((d) => d.id)
//           .distance(150)
//       )
//       .force(
//         "charge",
//         d3.forceManyBody().strength((d) => {
//           if (d.type === "Person") return -800;
//           if (d.type === "Tag") return -400;
//           return -200; // SubTag or anything else
//         })
//       )
//       .force("center", d3.forceCenter(width / 2, height / 2))
//       .force(
//         "collision",
//         d3.forceCollide().radius((d) => {
//           if (d.type === "Person") return 80;
//           if (d.type === "Tag") return 60;
//           return 30; // SubTag
//         })
//       )
//       .force(
//         "radial",
//         d3
//           .forceRadial((d) => {
//             if (d.type === "Person") return 0;
//             if (d.type === "Tag") return 200;
//             return 300; // SubTag
//           }, width / 2, height / 2)
//           .strength((d) => {
//             if (d.type === "Person") return 0.1;
//             if (d.type === "Tag") return 0.8;
//             return 0.8; // SubTag
//           })
//       );

//     // Create a container for all elements
//     const container = svg.append("g");

//     // Create the links
//     const link = container
//       .append("g")
//       .selectAll("line")
//       .data(simulationLinks)
//       .join("line")
//       .attr("stroke", "#999")
//       .attr("stroke-opacity", 0.6)
//       .attr("stroke-width", 1.5)
//       .on("mouseover", (event, d) => {
//         tooltip
//           .style("visibility", "visible")
//           .html(d.hoverInfo)
//           .style("left", event.pageX + 10 + "px")
//           .style("top", event.pageY - 10 + "px");
//       })
//       .on("mouseout", () => {
//         tooltip.style("visibility", "hidden");
//       });

//     // Create the nodes
//     const node = container
//       .append("g")
//       .selectAll("g")
//       .data(simulationNodes)
//       .join("g")
//       .attr("cursor", "pointer")
//       .call(drag(simulation))
//       .on("click", (event, d) => {
//         event.stopPropagation();

//         // Find related nodes (connected by edges)
//         const connectedNodes = simulationLinks
//           .filter(
//             (link) =>
//               (typeof link.source === "object" && link.source.id === d.id) ||
//               (typeof link.target === "object" && link.target.id === d.id)
//           )
//           .map((link) => {
//             const connectedId =
//               typeof link.source === "object" && link.source.id === d.id
//                 ? typeof link.target === "object"
//                   ? link.target.id
//                   : link.target
//                 : typeof link.source === "object"
//                 ? link.source.id
//                 : link.source;
//             return simulationNodes.find((node) => node.id === connectedId);
//           })
//           .filter(Boolean);

//         // Set selected node and related nodes
//         setSelectedNode(d);
//         setRelatedNodes(connectedNodes);

//         // Highlight the selected node and its connections
//         node.attr("opacity", (n) =>
//           n.id === d.id || connectedNodes.some((cn) => cn.id === n.id) ? 1 : 0.3
//         );
//         link.attr("stroke-opacity", (l) =>
//           (typeof l.source === "object" && l.source.id === d.id) ||
//           (typeof l.target === "object" && l.target.id === d.id)
//             ? 1
//             : 0.1
//         );
//       });

//     // Add circles for nodes, with different colours by type
//     node
//       .append("circle")
//       .attr("r", (d) => {
//         if (d.type === "Person") return 35;
//         if (d.type === "Tag") return 25;
//         return 15; // SubTag
//       })
//       .attr("fill", (d) => {
//         if (d.type === "Person") return "#4f46e5"; // Blue
//         if (d.type === "Tag") return "#10b981";    // Green
//         return "#f59e0b"; // Orange for SubTag
//       })
//       .attr("stroke", "#fff")
//       .attr("stroke-width", 2);

//     // Add labels for nodes
//     node
//       .append("text")
//       .attr("text-anchor", "middle")
//       .attr("dy", (d) => {
//         if (d.type === "Person") return 45;
//         if (d.type === "Tag") return 35;
//         return 25; // SubTag
//       })
//       .attr("font-size", (d) => {
//         if (d.type === "Person") return "12px";
//         if (d.type === "Tag") return "10px";
//         return "8px"; // SubTag
//       })
//       .attr("fill", "#333")
//       .text((d) => {
//         if (d.type === "Person") {
//           return d.label.replace("H.E. ", "");
//         }
//         return d.label;
//       });

//     // Update positions on each tick of the simulation
//     simulation.on("tick", () => {
//       link
//         .attr("x1", (d) =>
//           typeof d.source === "object"
//             ? Math.max(30, Math.min(width - 30, d.source.x || 0))
//             : 0
//         )
//         .attr("y1", (d) =>
//           typeof d.source === "object"
//             ? Math.max(30, Math.min(height - 30, d.source.y || 0))
//             : 0
//         )
//         .attr("x2", (d) =>
//           typeof d.target === "object"
//             ? Math.max(30, Math.min(width - 30, d.target.x || 0))
//             : 0
//         )
//         .attr("y2", (d) =>
//           typeof d.target === "object"
//             ? Math.max(30, Math.min(height - 30, d.target.y || 0))
//             : 0
//         );

//       node.attr("transform", (d) => {
//         const x = Math.max(30, Math.min(width - 30, d.x || 0));
//         const y = Math.max(30, Math.min(height - 30, d.y || 0));
//         return `translate(${x},${y})`;
//       });
//     });

//     // Add zoom functionality
//     const zoom = d3
//       .zoom()
//       .scaleExtent([0.2, 5])
//       .on("zoom", (event) => {
//         container.attr("transform", event.transform);
//       });

//     svg.call(zoom);

//     // Reset selection when clicking on the background
//     svg.on("click", () => {
//       node.attr("opacity", 1);
//       link.attr("stroke-opacity", 0.6);
//       setSelectedNode(null);
//       setRelatedNodes([]);
//     });

//     // Drag function for nodes
//     function drag(simulation) {
//       function dragstarted(event) {
//         if (!event.active) simulation.alphaTarget(0.3).restart();
//         event.subject.fx = event.subject.x;
//         event.subject.fy = event.subject.y;
//       }

//       function dragged(event) {
//         event.subject.fx = event.x;
//         event.subject.fy = event.y;
//       }

//       function dragended(event) {
//         if (!event.active) simulation.alphaTarget(0);
//         event.subject.fx = null;
//         event.subject.fy = null;
//       }

//       return d3
//         .drag()
//         .on("start", dragstarted)
//         .on("drag", dragged)
//         .on("end", dragended);
//     }

//     // Cleanup function
//     return () => {
//       simulation.stop();
//     };
//   }, [selectedMinister]);

//   return (
//     <div className="flex flex-col gap-4 p-4 w-full max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
//       {/* Minister selector (single selection) */}
//       <div className="bg-white p-4 rounded-lg shadow-sm border">
//         <h3 className="text-sm font-medium mb-2">Select One Minister:</h3>
//         <div className="flex flex-wrap gap-2">
//           {personNodes.map((person) => (
//             <div
//               key={person.id}
//               className={`cursor-pointer px-3 py-1 rounded-full ${
//                 selectedMinister === person.id
//                   ? "bg-blue-600 text-white"
//                   : "bg-gray-100 text-gray-800 hover:bg-gray-200"
//               }`}
//               onClick={() => selectMinister(person.id)}
//             >
//               {person.label.replace("H.E. ", "")}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Main content area with 2/3 - 1/3 split */}
//       <div className="flex flex-col lg:flex-row gap-4">
//         {/* Network visualization (2/3 width) */}
//         <div className="flex-1 lg:w-2/3 border rounded-lg shadow-sm bg-white">
//           <div className="p-4 border-b">
//             <h2 className="text-lg font-semibold">Finnish Ministers Network</h2>
//             <p className="text-sm text-gray-500">
//               {!selectedMinister
//                 ? "Select a minister above to visualize their relationships"
//                 : "Showing 1 minister and their thematic tags"}
//             </p>
//           </div>
//           <div className="relative">
//             <svg ref={svgRef} className="w-full h-[600px]"></svg>
//             <div ref={tooltipRef} className="absolute"></div>
//           </div>
//           <div className="p-4 border-t">
//             <div className="flex items-center gap-4 text-sm">
//               <div className="flex items-center gap-2">
//                 <div className="w-3 h-3 rounded-full bg-[#4f46e5]"></div>
//                 <span>Person</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <div className="w-3 h-3 rounded-full bg-[#10b981]"></div>
//                 <span>Tag</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <div className="w-3 h-3 rounded-full bg-[#f59e0b]"></div>
//                 <span>SubTag</span>
//               </div>
//             </div>
//             <p className="text-xs text-gray-500 mt-2">
//               Click on a node to see details. Drag nodes to reposition. Use mouse wheel to zoom in/out.
//             </p>
//           </div>
//         </div>

//         {/* Information panel (1/3 width) */}
//         <div className="lg:w-1/3 min-w-[300px]">
//           <div className="sticky top-4 border rounded-lg shadow-sm bg-white overflow-hidden">
//             <div className="p-4 border-b flex items-center gap-3">
//               {selectedNode && selectedNode.type === "Person" && (
//                 <img
//                   src={ministerPhotos[selectedNode.id]}
//                   alt={selectedNode.label}
//                   className="w-48 h-48 object-cover rounded"  // Larger square image with rounded corners
//                 />
//               )}
//               <div>
//                 <h2 className="text-lg font-semibold">
//                   {selectedNode ? selectedNode.label : "Node Information"}
//                 </h2>
//                 <p className="text-sm text-gray-500">
//                   {selectedNode
//                     ? selectedNode.type === "Person"
//                       ? "Minister Profile"
//                       : selectedNode.type === "Tag"
//                       ? "Thematic Tag Details"
//                       : "SubTag Details"
//                     : "Select a node to view details"}
//                 </p>
//               </div>
//             </div>
//             <div className="p-4">
//               {selectedNode ? (
//                 selectedNode.type === "Person" && selectedNode.metadata ? (
//                   <div className="space-y-4">
//                     <div>
//                       <h3 className="font-medium">Biography</h3>
//                       <p className="text-sm">{selectedNode.metadata.shortBio}</p>
//                     </div>
//                     <div>
//                       <h3 className="font-medium">Key Points</h3>
//                       <ul className="list-disc pl-5 text-sm space-y-1">
//                         {selectedNode.metadata.keyPoints?.map((point, i) => (
//                           <li key={i}>{point}</li>
//                         ))}
//                       </ul>
//                     </div>
//                     <div>
//                       <h3 className="font-medium">Related Tags</h3>
//                       <div className="flex flex-wrap gap-2 mt-2">
//                         {relatedNodes
//                           .filter((node) => node.type === "Tag")
//                           .map((node) => (
//                             <span
//                               key={node.id}
//                               className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800"
//                             >
//                               {node.label}
//                             </span>
//                           ))}
//                       </div>
//                     </div>
//                   </div>
//                 ) : selectedNode.type === "Tag" ? (
//                   <div className="space-y-4">
//                     <div>
//                       <h3 className="font-medium">Tag Details</h3>
//                       <p className="text-sm">Category: {selectedNode.label}</p>
//                     </div>
//                     <div>
//                       <h3 className="font-medium">Connected Ministers</h3>
//                       <div className="mt-2 space-y-2">
//                         {relatedNodes
//                           .filter((node) => node.type === "Person")
//                           .map((node) => (
//                             <div key={node.id} className="p-2 bg-slate-50 rounded-md">
//                               <p className="font-medium">{node.label}</p>
//                               {node.metadata && (
//                                 <p className="text-xs text-gray-500 truncate">
//                                   {node.metadata.shortBio}
//                                 </p>
//                               )}
//                             </div>
//                           ))}
//                       </div>
//                     </div>
//                     <div>
//                       <h3 className="font-medium">Subtags</h3>
//                       <div className="mt-2 space-y-2">
//                         {relatedNodes
//                           .filter((node) => node.type === "SubTag")
//                           .map((subNode) => (
//                             <div key={subNode.id} className="p-2 bg-slate-50 rounded-md">
//                               <p className="font-medium">{subNode.label}</p>
//                             </div>
//                           ))}
//                       </div>
//                     </div>
//                   </div>
//                 ) : selectedNode.type === "SubTag" ? (
//                   <div className="space-y-4">
//                     <div>
//                       <h3 className="font-medium">SubTag Node</h3>
//                       <p className="text-sm">
//                         This is a subtag: <strong>{selectedNode.label}</strong>
//                       </p>
//                     </div>
//                     <div>
//                       <h3 className="font-medium">Connected Tag</h3>
//                       <div className="mt-2 space-y-2">
//                         {relatedNodes
//                           .filter((node) => node.type === "Tag")
//                           .map((tagNode) => (
//                             <div key={tagNode.id} className="p-2 bg-slate-50 rounded-md">
//                               <p className="font-medium">{tagNode.label}</p>
//                             </div>
//                           ))}
//                       </div>
//                     </div>
//                     <div>
//                       <h3 className="font-medium">Connected Ministers</h3>
//                       <div className="mt-2 space-y-2">
//                         {relatedNodes
//                           .filter((node) => node.type === "Person")
//                           .map((person) => (
//                             <div key={person.id} className="p-2 bg-slate-50 rounded-md">
//                               <p className="font-medium">{person.label}</p>
//                               {person.metadata && (
//                                 <p className="text-xs text-gray-500 truncate">
//                                   {person.metadata.shortBio}
//                                 </p>
//                               )}
//                             </div>
//                           ))}
//                       </div>
//                     </div>
//                   </div>
//                 ) : (
//                   <div className="text-center py-8">
//                     <p className="text-gray-500">
//                       Click on any node in the network diagram to view detailed information here.
//                     </p>
//                   </div>
//                 )
//               ) : (
//                 <div className="text-center py-8">
//                   <p className="text-gray-500">
//                     Click on any node in the network diagram to view detailed information here.
//                   </p>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default NetworkDiagram;










































// function NetworkDiagram() {
//   const svgRef = useRef(null);
//   const tooltipRef = useRef(null);

//   // Single selected minister
//   const [selectedMinister, setSelectedMinister] = useState(null);

//   // The currently active node (defaults to the selected Person node)
//   const [selectedNode, setSelectedNode] = useState(null);
//   const [relatedNodes, setRelatedNodes] = useState([]);

//   // Extract all Person nodes for the top selector
//   const personNodes = sampleData.graph.nodes.filter(
//     (node) => node.type === "Person"
//   );

//   // Whenever `selectedMinister` changes, set `selectedNode` to that Person node
//   useEffect(() => {
//     if (selectedMinister) {
//       const personNode = sampleData.graph.nodes.find(
//         (n) => n.id === selectedMinister
//       );
//       setSelectedNode(personNode || null);
//     } else {
//       setSelectedNode(null);
//     }
//     setRelatedNodes([]);
//   }, [selectedMinister]);

//   // Handler to select a single minister
//   const selectMinister = (ministerId) => {
//     if (selectedMinister === ministerId) {
//       // Deselect if the same minister is clicked again
//       setSelectedMinister(null);
//     } else {
//       setSelectedMinister(ministerId);
//     }
//   };

//   // Return filtered data for the single selected minister
//   const getFilteredData = () => {
//     if (!selectedMinister) {
//       return { nodes: [], edges: [] };
//     }

//     // 1) Find the selected Person node
//     const selectedPerson = sampleData.graph.nodes.find(
//       (node) => node.id === selectedMinister
//     );
//     if (!selectedPerson) {
//       return { nodes: [], edges: [] };
//     }

//     // 2) Edges from that single Person
//     const relevantEdges = sampleData.graph.edges.filter(
//       (edge) => edge.source === selectedMinister
//     );

//     // 3) Tag nodes connected to that Person
//     const connectedTagIds = relevantEdges.map((edge) => edge.target);
//     const connectedTagNodes = sampleData.graph.nodes.filter(
//       (node) => node.type === "Tag" && connectedTagIds.includes(node.id)
//     );

//     // 4) Build SubTag nodes & edges for each Tag node
//     const subTagNodes = [];
//     const subTagEdges = [];

//     connectedTagNodes.forEach((tagNode) => {
//       if (tagNode.metadata && Array.isArray(tagNode.metadata.subTags)) {
//         tagNode.metadata.subTags.forEach((subText, index) => {
//           const subTagId = `subtag_${tagNode.id}_${index}`;
//           // Create a new SubTag node
//           subTagNodes.push({
//             id: subTagId,
//             label: subText,
//             type: "SubTag",
//             metadata: { parentTag: tagNode.id },
//           });
//           // Link the Tag node to this new SubTag node
//           subTagEdges.push({
//             source: tagNode.id,
//             target: subTagId,
//             type: "Tag-SubTag",
//             hoverInfo: subText,
//           });
//         });
//       }
//     });

//     // Combine Person, Tag, and SubTag nodes
//     const allNodes = [selectedPerson, ...connectedTagNodes, ...subTagNodes];
//     const allEdges = [...relevantEdges, ...subTagEdges];

//     return { nodes: allNodes, edges: allEdges };
//   };

//   useEffect(() => {
//     if (!svgRef.current) return;

//     // Get filtered data
//     const { nodes, edges } = getFilteredData();

//     // Clear old SVG
//     d3.select(svgRef.current).selectAll("*").remove();

//     if (nodes.length === 0) return; // no minister selected

//     // Prepare nodes & links
//     const simulationNodes = nodes.map((node) => ({
//       ...node,
//       x: undefined,
//       y: undefined,
//       vx: undefined,
//       vy: undefined,
//       fx: undefined,
//       fy: undefined,
//     }));

//     const simulationLinks = edges.map((edge) => ({
//       ...edge,
//       source: edge.source,
//       target: edge.target,
//     }));

//     // Dimensions
//     const svgRect = svgRef.current.getBoundingClientRect();
//     const width = svgRect.width;
//     const height = 600;

//     const svg = d3
//       .select(svgRef.current)
//       .attr("width", width)
//       .attr("height", height)
//       .attr("viewBox", [0, 0, width, height])
//       .attr("style", "max-width: 100%; height: auto;");

//     // Tooltip
//     const tooltip = d3
//       .select(tooltipRef.current)
//       .style("position", "absolute")
//       .style("visibility", "hidden")
//       .style("background-color", "white")
//       .style("border", "1px solid #ddd")
//       .style("border-radius", "4px")
//       .style("padding", "8px")
//       .style("font-size", "12px")
//       .style("pointer-events", "none")
//       .style("z-index", "10");

//     // Force simulation
//     const simulation = d3
//       .forceSimulation(simulationNodes)
//       .force(
//         "link",
//         d3
//           .forceLink(simulationLinks)
//           .id((d) => d.id)
//           .distance(150)
//       )
//       .force(
//         "charge",
//         d3.forceManyBody().strength((d) => {
//           if (d.type === "Person") return -800;
//           if (d.type === "Tag") return -400;
//           // SubTag
//           return -200;
//         })
//       )
//       .force("center", d3.forceCenter(width / 2, height / 2))
//       .force(
//         "collision",
//         d3.forceCollide().radius((d) => {
//           if (d.type === "Person") return 80;
//           if (d.type === "Tag") return 60;
//           // SubTag
//           return 30;
//         })
//       )
//       .force(
//         "radial",
//         d3
//           .forceRadial((d) => {
//             if (d.type === "Person") return 0;
//             if (d.type === "Tag") return 200;
//             // SubTag
//             return 300;
//           }, width / 2, height / 2)
//           .strength((d) => {
//             if (d.type === "Person") return 0.1;
//             if (d.type === "Tag") return 0.8;
//             return 0.8; // SubTag
//           })
//       );

//     // Container
//     const container = svg.append("g");

//     // Links
//     const link = container
//       .append("g")
//       .selectAll("line")
//       .data(simulationLinks)
//       .join("line")
//       .attr("stroke", "#999")
//       .attr("stroke-opacity", 0.6)
//       .attr("stroke-width", 1.5)
//       .on("mouseover", (event, d) => {
//         tooltip
//           .style("visibility", "visible")
//           .html(d.hoverInfo)
//           .style("left", event.pageX + 10 + "px")
//           .style("top", event.pageY - 10 + "px");
//       })
//       .on("mouseout", () => {
//         tooltip.style("visibility", "hidden");
//       });

//     // Nodes
//     const node = container
//       .append("g")
//       .selectAll("g")
//       .data(simulationNodes)
//       .join("g")
//       .attr("cursor", "pointer")
//       .call(drag(simulation))
//       .on("click", (event, d) => {
//         event.stopPropagation();
//         // If we want to highlight a new node from the graph
//         setSelectedNode(d);

//         // Identify connected nodes
//         const connectedNodes = simulationLinks
//           .filter(
//             (link) =>
//               (typeof link.source === "object" && link.source.id === d.id) ||
//               (typeof link.target === "object" && link.target.id === d.id)
//           )
//           .map((link) => {
//             const connectedId =
//               typeof link.source === "object" && link.source.id === d.id
//                 ? typeof link.target === "object"
//                   ? link.target.id
//                   : link.target
//                 : typeof link.source === "object"
//                 ? link.source.id
//                 : link.source;
//             return simulationNodes.find((node) => node.id === connectedId);
//           })
//           .filter(Boolean);

//         setRelatedNodes(connectedNodes);

//         // Highlight
//         node.attr("opacity", (n) =>
//           n.id === d.id || connectedNodes.some((cn) => cn.id === n.id) ? 1 : 0.3
//         );
//         link.attr("stroke-opacity", (l) =>
//           (typeof l.source === "object" && l.source.id === d.id) ||
//           (typeof l.target === "object" && l.target.id === d.id)
//             ? 1
//             : 0.1
//         );
//       });

//     // Circles
//     node
//       .append("circle")
//       .attr("r", (d) => {
//         if (d.type === "Person") return 35;
//         if (d.type === "Tag") return 25;
//         // SubTag
//         return 15;
//       })
//       .attr("fill", (d) => {
//         if (d.type === "Person") return "#4f46e5"; // Blue
//         if (d.type === "Tag") return "#10b981";    // Green
//         return "#f59e0b";                         // Orange for SubTag
//       })
//       .attr("stroke", "#fff")
//       .attr("stroke-width", 2);

//     // Labels
//     node
//       .append("text")
//       .attr("text-anchor", "middle")
//       .attr("dy", (d) => {
//         if (d.type === "Person") return 45;
//         if (d.type === "Tag") return 35;
//         return 25; // SubTag
//       })
//       .attr("font-size", (d) => {
//         if (d.type === "Person") return "12px";
//         if (d.type === "Tag") return "10px";
//         return "8px"; // SubTag
//       })
//       .attr("fill", "#333")
//       .text((d) => {
//         if (d.type === "Person") {
//           // remove "H.E. "
//           return d.label.replace("H.E. ", "");
//         }
//         return d.label;
//       });

//     // Simulation
//     simulation.on("tick", () => {
//       link
//         .attr("x1", (d) =>
//           typeof d.source === "object"
//             ? Math.max(30, Math.min(width - 30, d.source.x || 0))
//             : 0
//         )
//         .attr("y1", (d) =>
//           typeof d.source === "object"
//             ? Math.max(30, Math.min(height - 30, d.source.y || 0))
//             : 0
//         )
//         .attr("x2", (d) =>
//           typeof d.target === "object"
//             ? Math.max(30, Math.min(width - 30, d.target.x || 0))
//             : 0
//         )
//         .attr("y2", (d) =>
//           typeof d.target === "object"
//             ? Math.max(30, Math.min(height - 30, d.target.y || 0))
//             : 0
//         );

//       node.attr("transform", (d) => {
//         const x = Math.max(30, Math.min(width - 30, d.x || 0));
//         const y = Math.max(30, Math.min(height - 30, d.y || 0));
//         return `translate(${x},${y})`;
//       });
//     });

//     // Zoom
//     const zoom = d3
//       .zoom()
//       .scaleExtent([0.2, 5])
//       .on("zoom", (event) => {
//         container.attr("transform", event.transform);
//       });

//     svg.call(zoom);

//     // Reset on background click
//     svg.on("click", () => {
//       node.attr("opacity", 1);
//       link.attr("stroke-opacity", 0.6);
//       setSelectedNode(null);
//       setRelatedNodes([]);
//     });

//     // Drag
//     function drag(simulation) {
//       function dragstarted(event) {
//         if (!event.active) simulation.alphaTarget(0.3).restart();
//         event.subject.fx = event.subject.x;
//         event.subject.fy = event.subject.y;
//       }
//       function dragged(event) {
//         event.subject.fx = event.x;
//         event.subject.fy = event.y;
//       }
//       function dragended(event) {
//         if (!event.active) simulation.alphaTarget(0);
//         event.subject.fx = null;
//         event.subject.fy = null;
//       }
//       return d3
//         .drag()
//         .on("start", dragstarted)
//         .on("drag", dragged)
//         .on("end", dragended);
//     }

//     // Cleanup
//     return () => {
//       simulation.stop();
//     };
//   }, [selectedMinister]);

//   return (
//     <div className="flex flex-col gap-4 p-4 w-full max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
//     <h1 className="text-3xl font-bold text-blue-700 mb-8">Finnish Leadership Directory</h1>


//       {/* Minister selector */}
//       <div className="bg-white p-4 rounded-lg shadow-sm border">
//         <h3 className="text-sm font-medium mb-2">Select One Minister:</h3>
//         <div className="flex flex-wrap gap-2">
//           {personNodes.map((person) => (
//             <div
//               key={person.id}
//               className={`cursor-pointer px-3 py-1 rounded-full ${
//                 selectedMinister === person.id
//                   ? "bg-blue-600 text-white"
//                   : "bg-gray-100 text-gray-800 hover:bg-gray-200"
//               }`}
//               onClick={() => selectMinister(person.id)}
//             >
//               {person.label.replace("H.E. ", "")}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Main content: 2/3 - 1/3 */}
//       <div className="flex flex-col lg:flex-row gap-4">
//         {/* Graph (2/3) */}
//         <div className="flex-1 lg:w-2/3 border rounded-lg shadow-sm bg-white">
//           <div className="p-4 border-b">
//             <h2 className="text-lg font-semibold">Finnish Ministers Network</h2>
//             <p className="text-sm text-gray-500">
//               {!selectedMinister
//                 ? "Select a minister above to visualize their relationships"
//                 : "Showing 1 minister, their Tag nodes, and subtag nodes"}
//             </p>
//           </div>
//           <div className="relative">
//             <svg ref={svgRef} className="w-full h-[600px]"></svg>
//             <div ref={tooltipRef} className="absolute"></div>
//           </div>
//           <div className="p-4 border-t">
//             <div className="flex items-center gap-4 text-sm">
//               <div className="flex items-center gap-2">
//                 <div className="w-3 h-3 rounded-full bg-[#4f46e5]"></div>
//                 <span>Person</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <div className="w-3 h-3 rounded-full bg-[#10b981]"></div>
//                 <span>Domains of interest</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <div className="w-3 h-3 rounded-full bg-[#f59e0b]"></div>
//                 <span>Analysis</span>
//               </div>
//             </div>
//             <p className="text-xs text-gray-500 mt-2">
//               Click on a node to see details. Drag nodes to reposition. Use mouse wheel to zoom in/out.
//             </p>
//           </div>
//         </div>

//         {/* Info panel (1/3) */}
//         <div className="lg:w-1/3 min-w-[300px]">
//           <div className="sticky top-4 border rounded-lg shadow-sm bg-white overflow-hidden">
//             <div className="p-4 border-b flex items-center gap-3">
//               {selectedNode && selectedNode.type === "Person" && (
//                 <img
//                   src={ministerPhotos[selectedNode.id]}
//                   alt={selectedNode.label}
//                   className="w-48 h-48 object-cover rounded"
//                 />
//               )}
//               <div>
//                 <h2 className="text-lg font-semibold">
//                   {selectedNode ? selectedNode.label : "Node Information"}
//                 </h2>
//                 <p className="text-sm text-gray-500">
//                   {selectedNode
//                     ? selectedNode.type === "Person"
//                       ? "Minister Profile"
//                       : selectedNode.type === "Tag"
//                       ? "Thematic Tag"
//                       : "SubTag Node"
//                     : "Select a node to view details"}
//                 </p>
//               </div>
//             </div>
//             <div className="p-4">
//               {selectedNode ? (
//                 selectedNode.type === "Person" && selectedNode.metadata ? (
//                   <div className="space-y-4">
//                     {/* Biography */}
//                     <div>
//                       <h3 className="font-medium">Biography</h3>
//                       <p className="text-sm">{selectedNode.metadata.shortBio}</p>
//                     </div>
//                     {/* Key Points */}
//                     <div>
//                       <h3 className="font-medium">Key Points</h3>
//                       <ul className="list-disc pl-5 text-sm space-y-1">
//                         {selectedNode.metadata.keyPoints?.map((point, i) => (
//                           <li key={i}>{point}</li>
//                         ))}
//                       </ul>
//                     </div>
//                     {/* Person's Own Tags (metadata.Tags) */}
//                     {selectedNode.metadata.Tags && selectedNode.metadata.Tags.length > 0 && (
//                       <div>
//                         <h3 className="font-medium">Related Tags</h3>
//                         <div className="flex flex-wrap gap-2 mt-2">
//                           {selectedNode.metadata.Tags.map((tag, i) => (
//                             <span
//                               key={i}
//                               className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
//                             >
//                               {tag}
//                             </span>
//                           ))}
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 ) : selectedNode.type === "Tag" && selectedNode.metadata ? (
//                   <div className="space-y-4">
//                     <h3 className="font-medium">Tag Details</h3>
//                     <p className="text-sm">Category: {selectedNode.label}</p>
//                     {/* If you want to display subTags for Tag nodes in the panel (redundant if they're on the graph) */}
//                     {selectedNode.metadata.subTags && selectedNode.metadata.subTags.length > 0 && (
//                       <div>
//                         <h3 className="font-medium">Tag Subtags</h3>
//                         <ul className="list-disc pl-5 text-sm space-y-1">
//                           {selectedNode.metadata.subTags.map((sub, idx) => (
//                             <li key={idx}>{sub}</li>
//                           ))}
//                         </ul>
//                       </div>
//                     )}
//                   </div>
//                 ) : selectedNode.type === "SubTag" ? (
//                   <div className="space-y-4">
//                     <h3 className="font-medium">SubTag Node</h3>
//                     <p className="text-sm">
//                       This is a subtag: <strong>{selectedNode.label}</strong>
//                     </p>
//                   </div>
//                 ) : (
//                   <div className="text-center py-8">
//                     <p className="text-gray-500">
//                       Click on any node in the network diagram to view detailed information here.
//                     </p>
//                   </div>
//                 )
//               ) : (
//                 <div className="text-center py-8">
//                   <p className="text-gray-500">
//                     Select a minister or click a node in the network diagram to view details.
//                   </p>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default NetworkDiagram;





























function NetworkDiagram() {
  const svgRef = useRef(null);
  const tooltipRef = useRef(null);

  // Single selected minister
  // Change: default to "Sandra Bergqvist" so she’s selected on load
  const [selectedMinister, setSelectedMinister] = useState("person_SandraBergqvist");

  // The currently active node (defaults to the selected Person node)
  const [selectedNode, setSelectedNode] = useState(null);
  const [relatedNodes, setRelatedNodes] = useState([]);

  // Sample data not shown here, but assume `sampleData.graph.nodes` and `.edges`
  // exist and contain the necessary structure.
  const personNodes = sampleData.graph.nodes.filter(
    (node) => node.type === "Person"
  );

  // Whenever `selectedMinister` changes, set `selectedNode` to that Person node
  useEffect(() => {
    if (selectedMinister) {
      const personNode = sampleData.graph.nodes.find(
        (n) => n.id === selectedMinister
      );
      setSelectedNode(personNode || null);
    } else {
      setSelectedNode(null);
    }
    setRelatedNodes([]);
  }, [selectedMinister]);

  // Handler to select a single minister
  const selectMinister = (ministerId) => {
    if (selectedMinister === ministerId) {
      // Deselect if the same minister is clicked again
      setSelectedMinister(null);
    } else {
      setSelectedMinister(ministerId);
    }
  };

  // Return filtered data for the single selected minister
  const getFilteredData = () => {
    if (!selectedMinister) {
      return { nodes: [], edges: [] };
    }

    const selectedPerson = sampleData.graph.nodes.find(
      (node) => node.id === selectedMinister
    );
    if (!selectedPerson) {
      return { nodes: [], edges: [] };
    }

    // Edges from that single Person
    const relevantEdges = sampleData.graph.edges.filter(
      (edge) => edge.source === selectedMinister
    );

    // Tag nodes connected to that Person
    const connectedTagIds = relevantEdges.map((edge) => edge.target);
    const connectedTagNodes = sampleData.graph.nodes.filter(
      (node) => node.type === "Tag" && connectedTagIds.includes(node.id)
    );

    // Build SubTag nodes & edges for each Tag node
    const subTagNodes = [];
    const subTagEdges = [];

    connectedTagNodes.forEach((tagNode) => {
      if (tagNode.metadata && Array.isArray(tagNode.metadata.subTags)) {
        tagNode.metadata.subTags.forEach((subText, index) => {
          const subTagId = `subtag_${tagNode.id}_${index}`;
          subTagNodes.push({
            id: subTagId,
            label: subText,
            type: "SubTag",
            metadata: { parentTag: tagNode.id },
          });
          subTagEdges.push({
            source: tagNode.id,
            target: subTagId,
            type: "Tag-SubTag",
            hoverInfo: subText,
          });
        });
      }
    });

    // Combine Person, Tag, and SubTag nodes
    const allNodes = [selectedPerson, ...connectedTagNodes, ...subTagNodes];
    const allEdges = [...relevantEdges, ...subTagEdges];

    return { nodes: allNodes, edges: allEdges };
  };

  useEffect(() => {
    if (!svgRef.current) return;

    // Get filtered data
    const { nodes, edges } = getFilteredData();

    // Clear old SVG
    d3.select(svgRef.current).selectAll("*").remove();

    if (nodes.length === 0) return; // no minister selected

    // Prepare nodes & links
    const simulationNodes = nodes.map((node) => ({
      ...node,
      x: undefined,
      y: undefined,
      vx: undefined,
      vy: undefined,
      fx: undefined,
      fy: undefined,
    }));

    const simulationLinks = edges.map((edge) => ({
      ...edge,
      source: edge.source,
      target: edge.target,
    }));

    // Dimensions
    const svgRect = svgRef.current.getBoundingClientRect();
    const width = svgRect.width;
    const height = 600;

    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [0, 0, width, height])
      .attr("style", "max-width: 100%; height: auto;");

    // Tooltip
    const tooltip = d3
      .select(tooltipRef.current)
      .style("position", "absolute")
      .style("visibility", "hidden")
      .style("background-color", "white")
      .style("border", "1px solid #ddd")
      .style("border-radius", "4px")
      .style("padding", "8px")
      .style("font-size", "12px")
      .style("pointer-events", "none")
      .style("z-index", "10");

    // Force simulation
    const simulation = d3
      .forceSimulation(simulationNodes)
      .force(
        "link",
        d3
          .forceLink(simulationLinks)
          .id((d) => d.id)
          .distance(150)
      )
      .force(
        "charge",
        d3.forceManyBody().strength((d) => {
          if (d.type === "Person") return -800;
          if (d.type === "Tag") return -400;
          return -200; // SubTag
        })
      )
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force(
        "collision",
        d3.forceCollide().radius((d) => {
          if (d.type === "Person") return 80;
          if (d.type === "Tag") return 60;
          return 30; // SubTag
        })
      )
      .force(
        "radial",
        d3
          .forceRadial((d) => {
            if (d.type === "Person") return 0;
            if (d.type === "Tag") return 200;
            return 300; // SubTag
          }, width / 2, height / 2)
          .strength((d) => {
            if (d.type === "Person") return 0.1;
            return 0.8; // Tag & SubTag
          })
      );

    // Container
    const container = svg.append("g");

    // Links
    const link = container
      .append("g")
      .selectAll("line")
      .data(simulationLinks)
      .join("line")
      .attr("stroke", "#999")
      .attr("stroke-opacity", 0.6)
      .attr("stroke-width", 1.5)
      .on("mouseover", (event, d) => {
        tooltip
          .style("visibility", "visible")
          .html(d.hoverInfo)
          .style("left", event.pageX + 10 + "px")
          .style("top", event.pageY - 10 + "px");
      })
      .on("mouseout", () => {
        tooltip.style("visibility", "hidden");
      });

    // Nodes
    const node = container
      .append("g")
      .selectAll("g")
      .data(simulationNodes)
      .join("g")
      .attr("cursor", "pointer")
      .call(drag(simulation))
      .on("click", (event, d) => {
        event.stopPropagation();
        setSelectedNode(d);

        // Identify connected nodes
        const connectedNodes = simulationLinks
          .filter(
            (link) =>
              (typeof link.source === "object" && link.source.id === d.id) ||
              (typeof link.target === "object" && link.target.id === d.id)
          )
          .map((link) => {
            const connectedId =
              typeof link.source === "object" && link.source.id === d.id
                ? typeof link.target === "object"
                  ? link.target.id
                  : link.target
                : typeof link.source === "object"
                ? link.source.id
                : link.source;
            return simulationNodes.find((node) => node.id === connectedId);
          })
          .filter(Boolean);

        setRelatedNodes(connectedNodes);

        // Highlight
        node.attr("opacity", (n) =>
          n.id === d.id || connectedNodes.some((cn) => cn.id === n.id) ? 1 : 0.3
        );
        link.attr("stroke-opacity", (l) =>
          (typeof l.source === "object" && l.source.id === d.id) ||
          (typeof l.target === "object" && l.target.id === d.id)
            ? 1
            : 0.1
        );
      });

    // Circles
    node
      .append("circle")
      .attr("r", (d) => {
        if (d.type === "Person") return 35;
        if (d.type === "Tag") return 25;
        return 15; // SubTag
      })
      .attr("fill", (d) => {
        if (d.type === "Person") return "#4f46e5"; // Blue
        if (d.type === "Tag") return "#10b981";    // Green
        return "#f59e0b";                         // Orange for SubTag
      })
      .attr("stroke", "#fff")
      .attr("stroke-width", 2);

    // Labels
    node
      .append("text")
      .attr("text-anchor", "middle")
      .attr("dy", (d) => {
        if (d.type === "Person") return 45;
        if (d.type === "Tag") return 35;
        return 25; // SubTag
      })
      .attr("font-size", (d) => {
        if (d.type === "Person") return "12px";
        if (d.type === "Tag") return "10px";
        return "8px"; // SubTag
      })
      .attr("fill", "#333")
      .text((d) => {
        if (d.type === "Person") {
          return d.label.replace("H.E. ", "");
        }
        return d.label;
      });

    // Simulation
    simulation.on("tick", () => {
      link
        .attr("x1", (d) =>
          typeof d.source === "object"
            ? Math.max(30, Math.min(width - 30, d.source.x || 0))
            : 0
        )
        .attr("y1", (d) =>
          typeof d.source === "object"
            ? Math.max(30, Math.min(height - 30, d.source.y || 0))
            : 0
        )
        .attr("x2", (d) =>
          typeof d.target === "object"
            ? Math.max(30, Math.min(width - 30, d.target.x || 0))
            : 0
        )
        .attr("y2", (d) =>
          typeof d.target === "object"
            ? Math.max(30, Math.min(height - 30, d.target.y || 0))
            : 0
        );

      node.attr("transform", (d) => {
        const x = Math.max(30, Math.min(width - 30, d.x || 0));
        const y = Math.max(30, Math.min(height - 30, d.y || 0));
        return `translate(${x},${y})`;
      });
    });

    // Zoom
    const zoom = d3
      .zoom()
      .scaleExtent([0.2, 5])
      .on("zoom", (event) => {
        container.attr("transform", event.transform);
      });

    svg.call(zoom);

    // Reset on background click
    svg.on("click", () => {
      node.attr("opacity", 1);
      link.attr("stroke-opacity", 0.6);
      setSelectedNode(null);
      setRelatedNodes([]);
    });

    // Drag
    function drag(simulation) {
      function dragstarted(event) {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        event.subject.fx = event.subject.x;
        event.subject.fy = event.subject.y;
      }
      function dragged(event) {
        event.subject.fx = event.x;
        event.subject.fy = event.y;
      }
      function dragended(event) {
        if (!event.active) simulation.alphaTarget(0);
        event.subject.fx = null;
        event.subject.fy = null;
      }
      return d3
        .drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended);
    }

    // Cleanup
    return () => {
      simulation.stop();
    };
  }, [selectedMinister]);

  return (
    // Change: added `mb-16` to create extra space at the bottom
    <div className="flex flex-col gap-4 p-4 w-full max-w-7xl mx-auto px-6 md:px-8 lg:px-12 mb-16">
      <h1 className="text-3xl font-bold text-blue-700 mb-8">Finnish Leadership Directory</h1>


    {/* HOW TO USE BOX SNIPPET */}
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
      <h2 className="text-xl font-semibold text-blue-800 mb-2">How to Use</h2>
      <p className="text-gray-700 mb-3">
        This explorer displays a single selected minister, their relevant Tag nodes, and deeper subtag data. Use the controls to:
      </p>
      <ul className="list-disc list-inside text-gray-700 space-y-1">
        <li>Choose a minister in the “Select One Minister” section to load their data.</li>
        <li>Click on any node (minister, tag, or subtag) in the network diagram to see its details.</li>
        <li>Drag nodes to rearrange, and use your mouse wheel to zoom in/out.</li>
        <li>Click on the background to reset highlights.</li>
      </ul>
    </div>
    {/* END HOW TO USE BOX SNIPPET */}



      {/* Minister selector */}
      <div className="bg-white p-4 rounded-lg shadow-sm border">
        <h3 className="text-sm font-medium mb-2">Select One Minister:</h3>
        <div className="flex flex-wrap gap-2">
          {personNodes.map((person) => (
            <div
              key={person.id}
              className={`cursor-pointer px-3 py-1 rounded-full ${
                selectedMinister === person.id
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
              onClick={() => selectMinister(person.id)}
            >
              {person.label.replace("H.E. ", "")}
            </div>
          ))}
        </div>
      </div>

      {/* Main content: 2/3 - 1/3 */}
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Graph (2/3) */}
        <div className="flex-1 lg:w-2/3 border rounded-lg shadow-sm bg-white">
          <div className="p-4 border-b">
            <h2 className="text-lg font-semibold">Finnish Ministers Network</h2>
            <p className="text-sm text-gray-500">
              {!selectedMinister
                ? "Select a minister above to visualise their relationships"
                : "Showing 1 minister, their Tag nodes, and subtag nodes"}
            </p>
          </div>
          <div className="relative">
            <svg ref={svgRef} className="w-full h-[600px]"></svg>
            <div ref={tooltipRef} className="absolute"></div>
          </div>
          <div className="p-4 border-t">
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#4f46e5]"></div>
                <span>Person</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#10b981]"></div>
                <span>Domains of interest</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#f59e0b]"></div>
                <span>Analysis</span>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Click on a node to see details. Drag nodes to reposition. Use mouse wheel to zoom in/out.
            </p>
          </div>
        </div>

        {/* Info panel (1/3) */}
        <div className="lg:w-1/3 min-w-[300px]">
          <div className="sticky top-4 border rounded-lg shadow-sm bg-white overflow-hidden">
            <div className="p-4 border-b flex items-center gap-3">
              {selectedNode && selectedNode.type === "Person" && (
                <img
                  src={ministerPhotos[selectedNode.id]}
                  alt={selectedNode.label}
                  className="w-48 h-48 object-cover rounded"
                />
              )}
              <div>
                <h2 className="text-lg font-semibold">
                  {selectedNode ? selectedNode.label : "Node Information"}
                </h2>
                <p className="text-sm text-gray-500">
                  {selectedNode
                    ? selectedNode.type === "Person"
                      ? "Minister Profile"
                      : selectedNode.type === "Tag"
                      ? "Thematic Tag"
                      : "SubTag Node"
                    : "Select a node to view details"}
                </p>
              </div>
            </div>
            <div className="p-4">
              {selectedNode ? (
                selectedNode.type === "Person" && selectedNode.metadata ? (
                  <div className="space-y-4">
                    {/* Biography */}
                    <div>
                      <h3 className="font-medium">Biography</h3>
                      <p className="text-sm">{selectedNode.metadata.shortBio}</p>
                    </div>
                    {/* Key Points */}
                    <div>
                      <h3 className="font-medium">Key Points</h3>
                      <ul className="list-disc pl-5 text-sm space-y-1">
                        {selectedNode.metadata.keyPoints?.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    </div>
                    {/* Person's Own Tags (metadata.Tags) */}
                    {selectedNode.metadata.Tags && selectedNode.metadata.Tags.length > 0 && (
                      <div>
                        <h3 className="font-medium">Related Tags</h3>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {selectedNode.metadata.Tags.map((tag, i) => (
                            <span
                              key={i}
                              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : selectedNode.type === "Tag" && selectedNode.metadata ? (
                  <div className="space-y-4">
                    <h3 className="font-medium">Tag Details</h3>
                    <p className="text-sm">Category: {selectedNode.label}</p>
                    {selectedNode.metadata.subTags && selectedNode.metadata.subTags.length > 0 && (
                      <div>
                        <h3 className="font-medium">Tag Subtags</h3>
                        <ul className="list-disc pl-5 text-sm space-y-1">
                          {selectedNode.metadata.subTags.map((sub, idx) => (
                            <li key={idx}>{sub}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ) : selectedNode.type === "SubTag" ? (
                  <div className="space-y-4">
                    <h3 className="font-medium">SubTag Node</h3>
                    <p className="text-sm">
                      This is a subtag: <strong>{selectedNode.label}</strong>
                    </p>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-500">
                      Click on any node in the network diagram to view detailed information here.
                    </p>
                  </div>
                )
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-500">
                    Select a minister or click a node in the network diagram to view details.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NetworkDiagram;