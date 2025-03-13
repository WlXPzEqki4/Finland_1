// import React, { useState, useEffect, useRef } from 'react';
// import * as d3 from 'd3';
// import MinisterNetwork from './MinisterNetwork';

// const FacultyNetwork = () => {
//   const svgRef = useRef(null);
//   const tooltipRef = useRef(null);
//   const [selectedFaculty, setSelectedFaculty] = useState(null);
  
//   // Department colors
//   const departmentColors = {
//     "Applied Physics": "#C9E175",
//     "Environmental Science": "#8DD3C7",
//     "Applied Mathematics": "#80B1D3",
//     "Computer Science": "#6A92CC",
//     "Materials Science": "#D18ADB",
//     "Bioengineering": "#FDB462"
//   };
  
//   // Simplified data structure
//   const data = {
//     departments: [
//       "Applied Physics", 
//       "Environmental Science", 
//       "Applied Mathematics",
//       "Materials Science", 
//       "Bioengineering"
//     ],
//     nodes: [
//       { id: "David A. Weitz", department: "Applied Physics", collaborations: 19 },
//       { id: "Vinothan N. Manoharan", department: "Applied Physics", collaborations: 10 },
//       { id: "David R. Nelson", department: "Applied Physics", collaborations: 10 },
//       { id: "Sharad Ramanathan", department: "Applied Physics", collaborations: 11 },
//       { id: "Robert M. Westervelt", department: "Applied Physics", collaborations: 7 },
//       { id: "Lene V. Hau", department: "Applied Physics", collaborations: 5 },
      
//       { id: "Steven C. Wofsy", department: "Environmental Science", collaborations: 11 },
//       { id: "Jerry X. Mitrovica", department: "Environmental Science", collaborations: 8 },
      
//       { id: "L Mahadevan", department: "Applied Mathematics", collaborations: 15 },
//       { id: "Michael P. Brenner", department: "Applied Mathematics", collaborations: 13 },
      
//       { id: "Joanna Aizenberg", department: "Materials Science", collaborations: 18 },
//       { id: "Katia Bertoldi", department: "Materials Science", collaborations: 12 },
//       { id: "Frans A. Spaepen", department: "Materials Science", collaborations: 9 },
//       { id: "Zhigang Suo", department: "Materials Science", collaborations: 14 },
//       { id: "Conor J Walsh", department: "Materials Science", collaborations: 11 },
//       { id: "Michael J. Aziz", department: "Materials Science", collaborations: 10 },
//       { id: "Xin Li", department: "Materials Science", collaborations: 8 },
      
//       { id: "Don Ingber", department: "Bioengineering", collaborations: 16 },
//       { id: "Jennifer Lewis", department: "Bioengineering", collaborations: 14 },
//       { id: "David Mooney", department: "Bioengineering", collaborations: 15 },
//       { id: "Kit Parker", department: "Bioengineering", collaborations: 12 },
//       { id: "Jia Liu", department: "Bioengineering", collaborations: 9 }
//     ],
//     links: [
//       { source: "David A. Weitz", target: "Joanna Aizenberg", value: 5 },
//       { source: "David A. Weitz", target: "Vinothan N. Manoharan", value: 7 },
//       { source: "David A. Weitz", target: "David R. Nelson", value: 4 },
//       { source: "David A. Weitz", target: "Sharad Ramanathan", value: 3 },
//       { source: "David A. Weitz", target: "Robert M. Westervelt", value: 2 },
//       { source: "David A. Weitz", target: "Lene V. Hau", value: 1 },
//       { source: "David A. Weitz", target: "Don Ingber", value: 3 },
//       { source: "David A. Weitz", target: "Jennifer Lewis", value: 4 },
//       { source: "David A. Weitz", target: "David Mooney", value: 2 },
//       { source: "David A. Weitz", target: "Kit Parker", value: 1 },
//       { source: "David A. Weitz", target: "Jia Liu", value: 1 },
//       { source: "David A. Weitz", target: "Steven C. Wofsy", value: 1 },
//       { source: "David A. Weitz", target: "Jerry X. Mitrovica", value: 1 },
//       { source: "David A. Weitz", target: "L Mahadevan", value: 4 },
//       { source: "David A. Weitz", target: "Michael P. Brenner", value: 3 },
      
//       { source: "Steven C. Wofsy", target: "Jerry X. Mitrovica", value: 2 },
//       { source: "L Mahadevan", target: "Michael P. Brenner", value: 6 },
      
//       { source: "Joanna Aizenberg", target: "Katia Bertoldi", value: 3 },
//       { source: "Joanna Aizenberg", target: "Frans A. Spaepen", value: 2 },
//       { source: "Joanna Aizenberg", target: "Zhigang Suo", value: 4 },
//       { source: "Joanna Aizenberg", target: "Conor J Walsh", value: 2 },
//       { source: "Joanna Aizenberg", target: "Michael J. Aziz", value: 3 },
//       { source: "Joanna Aizenberg", target: "Xin Li", value: 1 },
//       { source: "Joanna Aizenberg", target: "Don Ingber", value: 4 },
//       { source: "Joanna Aizenberg", target: "Jennifer Lewis", value: 5 },
      
//       { source: "Don Ingber", target: "David Mooney", value: 7 },
//       { source: "Jennifer Lewis", target: "David Mooney", value: 5 }
//     ],
//     profiles: {
//       "David A. Weitz": {
//         title: "Professor of Physics and Applied Physics",
//         collaborations: 19,
//         departments: ["Applied Physics", "Materials Science", "Bioengineering"]
//       },
//       "Joanna Aizenberg": {
//         title: "Amy Smith Berylson Professor of Materials Science",
//         collaborations: 18,
//         departments: ["Materials Science", "Bioengineering"]
//       },
//       "Steven C. Wofsy": {
//         title: "Professor of Environmental Science",
//         collaborations: 11,
//         departments: ["Environmental Science"]
//       }
//     }
//   };

//   useEffect(() => {
//     if (!svgRef.current) return;
    
//     const svg = d3.select(svgRef.current);
//     svg.selectAll("*").remove();
    
//     const width = 800;
//     const height = 1000;
    
//     // Position nodes in departments
//     let yPos = 50;
    
//     // Group nodes by department
//     const nodesByDepartment = {};
//     data.departments.forEach(dept => {
//       nodesByDepartment[dept] = data.nodes.filter(node => node.department === dept);
//     });
    
//     // Set fixed positions
//     data.departments.forEach(dept => {
//       // Add department label position
//       const labelY = yPos;
//       yPos += 30;
      
//       // Position nodes in this department
//       nodesByDepartment[dept].forEach((node, i) => {
//         node.fx = 300;
//         node.fy = yPos + (i * 24);
//       });
      
//       yPos += (nodesByDepartment[dept].length * 24) + 50;
//     });
    
//     // Add department labels
//     const departmentLabels = svg.append("g")
//       .selectAll(".dept-label")
//       .data(data.departments)
//       .enter()
//       .append("text")
//       .attr("class", "dept-label")
//       .text(d => d)
//       .attr("x", 100)
//       .attr("font-weight", "bold")
//       .attr("font-size", 16)
//       .style("fill", "#333");
    
//     // Position department labels
//     let labelY = 50;
//     departmentLabels.each(function(d) {
//       d3.select(this).attr("y", labelY);
//       labelY += (nodesByDepartment[d].length * 24) + 80;
//     });
    
//     // Create links
//     const link = svg.append("g")
//       .selectAll("path")
//       .data(data.links)
//       .enter()
//       .append("path")
//       .attr("stroke", d => {
//         const sourceNode = data.nodes.find(n => n.id === d.source);
//         const targetNode = data.nodes.find(n => n.id === d.target);
//         if (sourceNode.department === targetNode.department) {
//           return departmentColors[sourceNode.department];
//         }
//         return "#ccc";
//       })
//       .attr("stroke-opacity", 0.4)
//       .attr("stroke-width", d => Math.max(1, d.value * 0.5))
//       .attr("fill", "none")
//       .attr("d", d => {
//         const sourceNode = data.nodes.find(n => n.id === d.source);
//         const targetNode = data.nodes.find(n => n.id === d.target);
//         if (!sourceNode || !targetNode) return "";
        
//         // Get coordinates
//         const sourceX = sourceNode.fx;
//         const sourceY = sourceNode.fy;
//         const targetX = targetNode.fx;
//         const targetY = targetNode.fy;
        
//         // Create curved path with wide arc
//         const controlX = Math.max(sourceX, targetX) + 600;
//         const controlY = (sourceY + targetY) / 2;
        
//         return `M${sourceX},${sourceY} Q${controlX},${controlY} ${targetX},${targetY}`;
//       });
    
//     // Create nodes
//     const node = svg.append("g")
//       .selectAll(".node")
//       .data(data.nodes)
//       .enter()
//       .append("g")
//       .attr("class", "node")
//       .attr("transform", d => `translate(${d.fx},${d.fy})`)
//       .on("mouseover", function(event, d) {
//         // Highlight connections
//         link.style("stroke-opacity", l => {
//           if (l.source === d.id || l.target === d.id) {
//             return 1;
//           } else {
//             return 0.1;
//           }
//         })
//         .style("stroke", l => {
//           if (l.source === d.id || l.target === d.id) {
//             return "#000"; // Black for highlighted connections
//           } else {
//             const sourceNode = data.nodes.find(n => n.id === l.source);
//             const targetNode = data.nodes.find(n => n.id === l.target);
//             if (sourceNode.department === targetNode.department) {
//               return departmentColors[sourceNode.department];
//             }
//             return "#ccc";
//           }
//         })
//         .style("stroke-width", l => {
//           if (l.source === d.id || l.target === d.id) {
//             return Math.max(2, l.value * 0.8);
//           } else {
//             return Math.max(0.5, l.value * 0.3);
//           }
//         });
        
//         // Show tooltip
//         // const tooltip = d3.select(tooltipRef.current);
//         // tooltip.style("display", "block")
//         //   .html(`
//         //     <div>
//         //       <strong>${d.id}</strong><br/>
//         //       ${d.collaborations} collaborations<br/>
//         //       Click for more information
//         //     </div>
//         //   `)
//         //   .style("left", (event.pageX + 10) + "px")
//         //   .style("top", (event.pageY - 20) + "px");
//       })
//       .on("mouseout", function() {
//         // Reset links
//         link.style("stroke-opacity", 0.4)
//           .style("stroke-width", d => Math.max(1, d.value * 0.5))
//           .style("stroke", d => {
//             const sourceNode = data.nodes.find(n => n.id === l.source);
//             const targetNode = data.nodes.find(n => n.id === l.target);
//             if (sourceNode.department === targetNode.department) {
//               return departmentColors[sourceNode.department];
//             }
//             return "#ccc";
//           });
        
//         // Hide tooltip
//         // d3.select(tooltipRef.current).style("display", "none");
//       })
//       .on("click", function(event, d) {
//         setSelectedFaculty(d);
//       });
    
//     // Add circles to nodes
//     node.append("circle")
//       .attr("r", d => Math.max(5, Math.min(10, d.collaborations * 0.5)))
//       .attr("fill", d => departmentColors[d.department])
//       .attr("stroke", "#fff")
//       .attr("stroke-width", 1.5);
    
//     // Add node labels
//     node.append("text")
//       .text(d => d.id)
//       .attr("x", -14)
//       .attr("y", 4)
//       .attr("text-anchor", "end")
//       .style("font-size", 12)
//       .style("pointer-events", "none");
    
//   }, []);

//   return (
//     <div className="w-full max-w-7xl mx-auto p-4">
//       <h1 className="text-3xl font-bold text-blue-700 mb-6">FACULTY COLLABORATIONS</h1>
      
//       {/* Main content area with the network visualization and profile */}
//       <div className="flex flex-col md:flex-row gap-6">
//         {/* Network visualization container - takes up left 2/3 */}
//         <div className="w-full md:w-3/5 bg-white rounded-lg shadow-md">          
//           {/* Network visualization container with fixed height */}
//           <div className="border border-gray-200 rounded-lg bg-white relative" style={{ height: '1000px' }}>
//             <svg ref={svgRef} width="100%" height="1000px" />
//             <div ref={tooltipRef} className="absolute hidden bg-white border border-gray-300 shadow-lg p-3 rounded-lg text-sm" />
//           </div>
//         </div>
        
//         {/* Faculty profile panel - takes up right 1/3 */}
//         <div className="w-full md:w-2/5">
//           {selectedFaculty ? (
//             <div className="flex flex-col gap-6">
//               {/* Faculty profile card */}
//               <div className="bg-white rounded-lg shadow-md p-6">
//                 <h2 className="text-2xl font-bold text-blue-700 mb-2">{selectedFaculty.id}</h2>
//                 {data.profiles[selectedFaculty.id] && (
//                   <p className="text-gray-600 mb-6">{data.profiles[selectedFaculty.id].title}</p>
//                 )}
                
//                 <h3 className="text-xl font-semibold text-gray-700 uppercase mb-2">COLLABORATIONS</h3>
//                 <p className="text-gray-600 mb-6">{selectedFaculty.collaborations} total collaborations</p>
                
//                 <div className="mb-6">
//                   <h4 className="font-semibold text-gray-700 mb-3">Department</h4>
//                   <div className="flex items-center">
//                     <span 
//                       className="w-4 h-4 rounded-full mr-2" 
//                       style={{ backgroundColor: departmentColors[selectedFaculty.department] }}
//                     />
//                     <span className="text-gray-600">{selectedFaculty.department}</span>
//                   </div>
//                 </div>
                
//                 <div className="pt-4 border-t border-gray-200">
//                   <h4 className="font-semibold text-gray-700 mb-4">Research Areas</h4>
//                   <div className="flex flex-wrap gap-2">
//                     <span className="bg-blue-50 text-blue-700 rounded-full px-3 py-1 text-sm font-medium">
//                       Research
//                     </span>
//                     <span className="bg-green-50 text-green-700 rounded-full px-3 py-1 text-sm font-medium">
//                       Faculty
//                     </span>
//                     {selectedFaculty.collaborations > 15 && (
//                       <span className="bg-purple-50 text-purple-700 rounded-full px-3 py-1 text-sm font-medium">
//                         Highly Collaborative
//                       </span>
//                     )}
//                   </div>
//                 </div>
                
//                 <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg transition-colors hover:bg-blue-700">
//                   View Full Profile
//                 </button>
//               </div>
              
//               {/* NEW: Research Network graph */}
//               <MinisterNetwork selectedFaculty={selectedFaculty} />
//             </div>
//           ) : (
//             <div className="bg-white rounded-lg shadow-md p-6 text-center">
//               <p className="text-gray-600">Click on a faculty member to view their profile and collaboration details</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FacultyNetwork;










// import React, { useState, useEffect, useRef } from 'react';
// import * as d3 from 'd3';
// import MinisterNetwork from './MinisterNetwork';

// const FacultyNetwork = () => {
//   const svgRef = useRef(null);
//   const tooltipRef = useRef(null);
//   const [selectedFaculty, setSelectedFaculty] = useState(null);
  
//   // Department colors
//   const departmentColors = {
//     "Applied Physics": "#C9E175",
//     "Environmental Science": "#8DD3C7",
//     "Applied Mathematics": "#80B1D3",
//     "Computer Science": "#6A92CC",
//     "Materials Science": "#D18ADB",
//     "Bioengineering": "#FDB462"
//   };
  
//   // Simplified data structure
//   const data = {
//     departments: [
//       "Applied Physics", 
//       "Environmental Science", 
//       "Applied Mathematics",
//       "Materials Science", 
//       "Bioengineering"
//     ],
//     nodes: [
//       { id: "David A. Weitz", department: "Applied Physics", collaborations: 19 },
//       { id: "Vinothan N. Manoharan", department: "Applied Physics", collaborations: 10 },
//       { id: "David R. Nelson", department: "Applied Physics", collaborations: 10 },
//       { id: "Sharad Ramanathan", department: "Applied Physics", collaborations: 11 },
//       { id: "Robert M. Westervelt", department: "Applied Physics", collaborations: 7 },
//       { id: "Lene V. Hau", department: "Applied Physics", collaborations: 5 },
      
//       { id: "Steven C. Wofsy", department: "Environmental Science", collaborations: 11 },
//       { id: "Jerry X. Mitrovica", department: "Environmental Science", collaborations: 8 },
      
//       { id: "L Mahadevan", department: "Applied Mathematics", collaborations: 15 },
//       { id: "Michael P. Brenner", department: "Applied Mathematics", collaborations: 13 },
      
//       { id: "Joanna Aizenberg", department: "Materials Science", collaborations: 18 },
//       { id: "Katia Bertoldi", department: "Materials Science", collaborations: 12 },
//       { id: "Frans A. Spaepen", department: "Materials Science", collaborations: 9 },
//       { id: "Zhigang Suo", department: "Materials Science", collaborations: 14 },
//       { id: "Conor J Walsh", department: "Materials Science", collaborations: 11 },
//       { id: "Michael J. Aziz", department: "Materials Science", collaborations: 10 },
//       { id: "Xin Li", department: "Materials Science", collaborations: 8 },
      
//       { id: "Don Ingber", department: "Bioengineering", collaborations: 16 },
//       { id: "Jennifer Lewis", department: "Bioengineering", collaborations: 14 },
//       { id: "David Mooney", department: "Bioengineering", collaborations: 15 },
//       { id: "Kit Parker", department: "Bioengineering", collaborations: 12 },
//       { id: "Jia Liu", department: "Bioengineering", collaborations: 9 }
//     ],
//     links: [
//       { source: "David A. Weitz", target: "Joanna Aizenberg", value: 5 },
//       { source: "David A. Weitz", target: "Vinothan N. Manoharan", value: 7 },
//       { source: "David A. Weitz", target: "David R. Nelson", value: 4 },
//       { source: "David A. Weitz", target: "Sharad Ramanathan", value: 3 },
//       { source: "David A. Weitz", target: "Robert M. Westervelt", value: 2 },
//       { source: "David A. Weitz", target: "Lene V. Hau", value: 1 },
//       { source: "David A. Weitz", target: "Don Ingber", value: 3 },
//       { source: "David A. Weitz", target: "Jennifer Lewis", value: 4 },
//       { source: "David A. Weitz", target: "David Mooney", value: 2 },
//       { source: "David A. Weitz", target: "Kit Parker", value: 1 },
//       { source: "David A. Weitz", target: "Jia Liu", value: 1 },
//       { source: "David A. Weitz", target: "Steven C. Wofsy", value: 1 },
//       { source: "David A. Weitz", target: "Jerry X. Mitrovica", value: 1 },
//       { source: "David A. Weitz", target: "L Mahadevan", value: 4 },
//       { source: "David A. Weitz", target: "Michael P. Brenner", value: 3 },
      
//       { source: "Steven C. Wofsy", target: "Jerry X. Mitrovica", value: 2 },
//       { source: "L Mahadevan", target: "Michael P. Brenner", value: 6 },
      
//       { source: "Joanna Aizenberg", target: "Katia Bertoldi", value: 3 },
//       { source: "Joanna Aizenberg", target: "Frans A. Spaepen", value: 2 },
//       { source: "Joanna Aizenberg", target: "Zhigang Suo", value: 4 },
//       { source: "Joanna Aizenberg", target: "Conor J Walsh", value: 2 },
//       { source: "Joanna Aizenberg", target: "Michael J. Aziz", value: 3 },
//       { source: "Joanna Aizenberg", target: "Xin Li", value: 1 },
//       { source: "Joanna Aizenberg", target: "Don Ingber", value: 4 },
//       { source: "Joanna Aizenberg", target: "Jennifer Lewis", value: 5 },
      
//       { source: "Don Ingber", target: "David Mooney", value: 7 },
//       { source: "Jennifer Lewis", target: "David Mooney", value: 5 }
//     ],
//     profiles: {
//       "David A. Weitz": {
//         title: "Professor of Physics and Applied Physics",
//         collaborations: 19,
//         departments: ["Applied Physics", "Materials Science", "Bioengineering"]
//       },
//       "Joanna Aizenberg": {
//         title: "Amy Smith Berylson Professor of Materials Science",
//         collaborations: 18,
//         departments: ["Materials Science", "Bioengineering"]
//       },
//       "Steven C. Wofsy": {
//         title: "Professor of Environmental Science",
//         collaborations: 11,
//         departments: ["Environmental Science"]
//       }
//     }
//   };

//   useEffect(() => {
//     if (!svgRef.current) return;
    
//     const svg = d3.select(svgRef.current);
//     svg.selectAll("*").remove();
    
//     const width = 800;
//     const height = 1000;
    
//     // Position nodes in departments
//     let yPos = 50;
    
//     // Group nodes by department
//     const nodesByDepartment = {};
//     data.departments.forEach(dept => {
//       nodesByDepartment[dept] = data.nodes.filter(node => node.department === dept);
//     });
    
//     // Set fixed positions
//     data.departments.forEach(dept => {
//       // Add department label position
//       const labelY = yPos;
//       yPos += 30;
      
//       // Position nodes in this department
//       nodesByDepartment[dept].forEach((node, i) => {
//         node.fx = 300;
//         node.fy = yPos + (i * 24);
//       });
      
//       yPos += (nodesByDepartment[dept].length * 24) + 50;
//     });
    
//     // Add department labels
//     const departmentLabels = svg.append("g")
//       .selectAll(".dept-label")
//       .data(data.departments)
//       .enter()
//       .append("text")
//       .attr("class", "dept-label")
//       .text(d => d)
//       .attr("x", 100)
//       .attr("font-weight", "bold")
//       .attr("font-size", 16)
//       .style("fill", "#333");
    
//     // Position department labels
//     let labelY = 50;
//     departmentLabels.each(function(d) {
//       d3.select(this).attr("y", labelY);
//       labelY += (nodesByDepartment[d].length * 24) + 80;
//     });
    
//     // Create links
//     const link = svg.append("g")
//       .selectAll("path")
//       .data(data.links)
//       .enter()
//       .append("path")
//       .attr("stroke", d => {
//         const sourceNode = data.nodes.find(n => n.id === d.source);
//         const targetNode = data.nodes.find(n => n.id === d.target);
//         if (sourceNode.department === targetNode.department) {
//           return departmentColors[sourceNode.department];
//         }
//         return "#ccc";
//       })
//       .attr("stroke-opacity", 0.4)
//       .attr("stroke-width", d => Math.max(1, d.value * 0.5))
//       .attr("fill", "none")
//       .attr("d", d => {
//         const sourceNode = data.nodes.find(n => n.id === d.source);
//         const targetNode = data.nodes.find(n => n.id === d.target);
//         if (!sourceNode || !targetNode) return "";
        
//         // Get coordinates
//         const sourceX = sourceNode.fx;
//         const sourceY = sourceNode.fy;
//         const targetX = targetNode.fx;
//         const targetY = targetNode.fy;
        
//         // Create curved path with wide arc
//         const controlX = Math.max(sourceX, targetX) + 600;
//         const controlY = (sourceY + targetY) / 2;
        
//         return `M${sourceX},${sourceY} Q${controlX},${controlY} ${targetX},${targetY}`;
//       });
    
//     // Create nodes
//     const node = svg.append("g")
//       .selectAll(".node")
//       .data(data.nodes)
//       .enter()
//       .append("g")
//       .attr("class", "node")
//       .attr("transform", d => `translate(${d.fx},${d.fy})`)
//       .on("mouseover", function(event, d) {
//         // Highlight connections
//         link.style("stroke-opacity", l => {
//           if (l.source === d.id || l.target === d.id) {
//             return 1;
//           } else {
//             return 0.1;
//           }
//         })
//         .style("stroke", l => {
//           if (l.source === d.id || l.target === d.id) {
//             return "#000"; // Black for highlighted connections
//           } else {
//             const sourceNode = data.nodes.find(n => n.id === l.source);
//             const targetNode = data.nodes.find(n => n.id === l.target);
//             if (sourceNode.department === targetNode.department) {
//               return departmentColors[sourceNode.department];
//             }
//             return "#ccc";
//           }
//         })
//         .style("stroke-width", l => {
//           if (l.source === d.id || l.target === d.id) {
//             return Math.max(2, l.value * 0.8);
//           } else {
//             return Math.max(0.5, l.value * 0.3);
//           }
//         });
        
//         // Show tooltip
//         // const tooltip = d3.select(tooltipRef.current);
//         // tooltip.style("display", "block")
//         //   .html(`
//         //     <div>
//         //       <strong>${d.id}</strong><br/>
//         //       ${d.collaborations} collaborations<br/>
//         //       Click for more information
//         //     </div>
//         //   `)
//         //   .style("left", (event.pageX + 10) + "px")
//         //   .style("top", (event.pageY - 20) + "px");
//       })
//       .on("mouseout", function() {
//         // Reset links
//         link.style("stroke-opacity", 0.4)
//           .style("stroke-width", d => Math.max(1, d.value * 0.5))
//           .style("stroke", d => {
//             const sourceNode = data.nodes.find(n => n.id === l.source);
//             const targetNode = data.nodes.find(n => n.id === l.target);
//             if (sourceNode.department === targetNode.department) {
//               return departmentColors[sourceNode.department];
//             }
//             return "#ccc";
//           });
        
//         // Hide tooltip
//         // d3.select(tooltipRef.current).style("display", "none");
//       })
//       .on("click", function(event, d) {
//         setSelectedFaculty(d);
//       });
    
//     // Add circles to nodes
//     node.append("circle")
//       .attr("r", d => Math.max(5, Math.min(10, d.collaborations * 0.5)))
//       .attr("fill", d => departmentColors[d.department])
//       .attr("stroke", "#fff")
//       .attr("stroke-width", 1.5);
    
//     // Add node labels
//     node.append("text")
//       .text(d => d.id)
//       .attr("x", -14)
//       .attr("y", 4)
//       .attr("text-anchor", "end")
//       .style("font-size", 12)
//       .style("pointer-events", "none");
    
//   }, []);

//   return (
//     <div className="w-full max-w-7xl mx-auto p-4">
//       <h1 className="text-3xl font-bold text-blue-700 mb-6">FACULTY COLLABORATIONS</h1>
      
//       {/* Main content area with the network visualization and profile */}
//       <div className="flex flex-col md:flex-row gap-6">
//         {/* Network visualization container - takes up left 2/3 */}
//         <div className="w-full md:w-3/5 bg-white rounded-lg shadow-md">          
//           {/* Network visualization container with fixed height */}
//           <div className="border border-gray-200 rounded-lg bg-white relative" style={{ height: '1000px' }}>
//             <svg ref={svgRef} width="100%" height="1000px" />
//             <div ref={tooltipRef} className="absolute hidden bg-white border border-gray-300 shadow-lg p-3 rounded-lg text-sm" />
//           </div>
//         </div>
        
//         {/* Faculty profile panel - takes up right 1/3 */}
//         <div className="w-full md:w-2/5">
//           {selectedFaculty ? (
//             <div className="flex flex-col gap-6" style={{ height: '1000px' }}>
//               {/* Faculty profile card */}
//               <div className="bg-white rounded-lg shadow-md p-6">
//                 <h2 className="text-2xl font-bold text-blue-700 mb-2">{selectedFaculty.id}</h2>
//                 {data.profiles[selectedFaculty.id] && (
//                   <p className="text-gray-600 mb-6">{data.profiles[selectedFaculty.id].title}</p>
//                 )}
                
//                 <h3 className="text-xl font-semibold text-gray-700 uppercase mb-2">COLLABORATIONS</h3>
//                 <p className="text-gray-600 mb-6">{selectedFaculty.collaborations} total collaborations</p>
                
//                 <div className="mb-6">
//                   <h4 className="font-semibold text-gray-700 mb-3">Department</h4>
//                   <div className="flex items-center">
//                     <span 
//                       className="w-4 h-4 rounded-full mr-2" 
//                       style={{ backgroundColor: departmentColors[selectedFaculty.department] }}
//                     />
//                     <span className="text-gray-600">{selectedFaculty.department}</span>
//                   </div>
//                 </div>
                
//                 <div className="pt-4 border-t border-gray-200">
//                   <h4 className="font-semibold text-gray-700 mb-4">Research Areas</h4>
//                   <div className="flex flex-wrap gap-2">
//                     <span className="bg-blue-50 text-blue-700 rounded-full px-3 py-1 text-sm font-medium">
//                       Research
//                     </span>
//                     <span className="bg-green-50 text-green-700 rounded-full px-3 py-1 text-sm font-medium">
//                       Faculty
//                     </span>
//                     {selectedFaculty.collaborations > 15 && (
//                       <span className="bg-purple-50 text-purple-700 rounded-full px-3 py-1 text-sm font-medium">
//                         Highly Collaborative
//                       </span>
//                     )}
//                   </div>
//                 </div>
                
//                 <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg transition-colors hover:bg-blue-700">
//                   View Full Profile
//                 </button>
//               </div>
              
//               {/* NEW: Research Network graph */}
//               <div className="flex-grow">
//                 <MinisterNetwork selectedFaculty={selectedFaculty} />
//               </div>
//             </div>
//           ) : (
//             <div className="bg-white rounded-lg shadow-md p-6 text-center">
//               <p className="text-gray-600">Click on a faculty member to view their profile and collaboration details</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FacultyNetwork;





















































// import React, { useState, useEffect, useRef } from 'react';
// import * as d3 from 'd3';
// import MinisterNetwork from './MinisterNetwork';

// const FacultyNetwork = () => {
//   const svgRef = useRef(null);
//   const tooltipRef = useRef(null);
//   const [selectedFaculty, setSelectedFaculty] = useState(null);
  
//   // Department colors
//   const departmentColors = {
//     "Applied Physics": "#C9E175",
//     "Environmental Science": "#8DD3C7",
//     "Applied Mathematics": "#80B1D3",
//     "Computer Science": "#6A92CC",
//     "Materials Science": "#D18ADB",
//     "Bioengineering": "#FDB462"
//   };
  
//   // Simplified data structure
//   const data = {
//     departments: [
//       "Applied Physics", 
//       "Environmental Science", 
//       "Applied Mathematics",
//       "Materials Science", 
//       "Bioengineering"
//     ],
//     nodes: [
//       { id: "David A. Weitz", department: "Applied Physics", collaborations: 19 },
//       { id: "Vinothan N. Manoharan", department: "Applied Physics", collaborations: 10 },
//       { id: "David R. Nelson", department: "Applied Physics", collaborations: 10 },
//       { id: "Sharad Ramanathan", department: "Applied Physics", collaborations: 11 },
//       { id: "Robert M. Westervelt", department: "Applied Physics", collaborations: 7 },
//       { id: "Lene V. Hau", department: "Applied Physics", collaborations: 5 },
      
//       { id: "Steven C. Wofsy", department: "Environmental Science", collaborations: 11 },
//       { id: "Jerry X. Mitrovica", department: "Environmental Science", collaborations: 8 },
      
//       { id: "L Mahadevan", department: "Applied Mathematics", collaborations: 15 },
//       { id: "Michael P. Brenner", department: "Applied Mathematics", collaborations: 13 },
      
//       { id: "Joanna Aizenberg", department: "Materials Science", collaborations: 18 },
//       { id: "Katia Bertoldi", department: "Materials Science", collaborations: 12 },
//       { id: "Frans A. Spaepen", department: "Materials Science", collaborations: 9 },
//       { id: "Zhigang Suo", department: "Materials Science", collaborations: 14 },
//       { id: "Conor J Walsh", department: "Materials Science", collaborations: 11 },
//       { id: "Michael J. Aziz", department: "Materials Science", collaborations: 10 },
//       { id: "Xin Li", department: "Materials Science", collaborations: 8 },
      
//       { id: "Don Ingber", department: "Bioengineering", collaborations: 16 },
//       { id: "Jennifer Lewis", department: "Bioengineering", collaborations: 14 },
//       { id: "David Mooney", department: "Bioengineering", collaborations: 15 },
//       { id: "Kit Parker", department: "Bioengineering", collaborations: 12 },
//       { id: "Jia Liu", department: "Bioengineering", collaborations: 9 }
//     ],
//     links: [
//       { source: "David A. Weitz", target: "Joanna Aizenberg", value: 5 },
//       { source: "David A. Weitz", target: "Vinothan N. Manoharan", value: 7 },
//       { source: "David A. Weitz", target: "David R. Nelson", value: 4 },
//       { source: "David A. Weitz", target: "Sharad Ramanathan", value: 3 },
//       { source: "David A. Weitz", target: "Robert M. Westervelt", value: 2 },
//       { source: "David A. Weitz", target: "Lene V. Hau", value: 1 },
//       { source: "David A. Weitz", target: "Don Ingber", value: 3 },
//       { source: "David A. Weitz", target: "Jennifer Lewis", value: 4 },
//       { source: "David A. Weitz", target: "David Mooney", value: 2 },
//       { source: "David A. Weitz", target: "Kit Parker", value: 1 },
//       { source: "David A. Weitz", target: "Jia Liu", value: 1 },
//       { source: "David A. Weitz", target: "Steven C. Wofsy", value: 1 },
//       { source: "David A. Weitz", target: "Jerry X. Mitrovica", value: 1 },
//       { source: "David A. Weitz", target: "L Mahadevan", value: 4 },
//       { source: "David A. Weitz", target: "Michael P. Brenner", value: 3 },
      
//       { source: "Steven C. Wofsy", target: "Jerry X. Mitrovica", value: 2 },
//       { source: "L Mahadevan", target: "Michael P. Brenner", value: 6 },
      
//       { source: "Joanna Aizenberg", target: "Katia Bertoldi", value: 3 },
//       { source: "Joanna Aizenberg", target: "Frans A. Spaepen", value: 2 },
//       { source: "Joanna Aizenberg", target: "Zhigang Suo", value: 4 },
//       { source: "Joanna Aizenberg", target: "Conor J Walsh", value: 2 },
//       { source: "Joanna Aizenberg", target: "Michael J. Aziz", value: 3 },
//       { source: "Joanna Aizenberg", target: "Xin Li", value: 1 },
//       { source: "Joanna Aizenberg", target: "Don Ingber", value: 4 },
//       { source: "Joanna Aizenberg", target: "Jennifer Lewis", value: 5 },
      
//       { source: "Don Ingber", target: "David Mooney", value: 7 },
//       { source: "Jennifer Lewis", target: "David Mooney", value: 5 }
//     ],
//     profiles: {
//       "David A. Weitz": {
//         title: "Professor of Physics and Applied Physics",
//         collaborations: 19,
//         departments: ["Applied Physics", "Materials Science", "Bioengineering"]
//       },
//       "Joanna Aizenberg": {
//         title: "Amy Smith Berylson Professor of Materials Science",
//         collaborations: 18,
//         departments: ["Materials Science", "Bioengineering"]
//       },
//       "Steven C. Wofsy": {
//         title: "Professor of Environmental Science",
//         collaborations: 11,
//         departments: ["Environmental Science"]
//       }
//     }
//   };

//   useEffect(() => {
//     if (!svgRef.current) return;
    
//     const svg = d3.select(svgRef.current);
//     svg.selectAll("*").remove();
    
//     const width = 800;
//     const height = 1000;
    
//     // Position nodes in departments
//     let yPos = 50;
    
//     // Group nodes by department
//     const nodesByDepartment = {};
//     data.departments.forEach(dept => {
//       nodesByDepartment[dept] = data.nodes.filter(node => node.department === dept);
//     });
    
//     // Set fixed positions
//     data.departments.forEach(dept => {
//       // Add department label position
//       const labelY = yPos;
//       yPos += 30;
      
//       // Position nodes in this department
//       nodesByDepartment[dept].forEach((node, i) => {
//         node.fx = 300;
//         node.fy = yPos + (i * 24);
//       });
      
//       yPos += (nodesByDepartment[dept].length * 24) + 50;
//     });
    
//     // Add department labels
//     const departmentLabels = svg.append("g")
//       .selectAll(".dept-label")
//       .data(data.departments)
//       .enter()
//       .append("text")
//       .attr("class", "dept-label")
//       .text(d => d)
//       .attr("x", 100)
//       .attr("font-weight", "bold")
//       .attr("font-size", 16)
//       .style("fill", "#333");
    
//     // Position department labels
//     let labelY = 50;
//     departmentLabels.each(function(d) {
//       d3.select(this).attr("y", labelY);
//       labelY += (nodesByDepartment[d].length * 24) + 80;
//     });
    
//     // Create links
//     const link = svg.append("g")
//       .selectAll("path")
//       .data(data.links)
//       .enter()
//       .append("path")
//       .attr("stroke", d => {
//         const sourceNode = data.nodes.find(n => n.id === d.source);
//         const targetNode = data.nodes.find(n => n.id === d.target);
//         if (sourceNode.department === targetNode.department) {
//           return departmentColors[sourceNode.department];
//         }
//         return "#ccc";
//       })
//       .attr("stroke-opacity", 0.4)
//       .attr("stroke-width", d => Math.max(1, d.value * 0.5))
//       .attr("fill", "none")
//       .attr("d", d => {
//         const sourceNode = data.nodes.find(n => n.id === d.source);
//         const targetNode = data.nodes.find(n => n.id === d.target);
//         if (!sourceNode || !targetNode) return "";
        
//         // Get coordinates
//         const sourceX = sourceNode.fx;
//         const sourceY = sourceNode.fy;
//         const targetX = targetNode.fx;
//         const targetY = targetNode.fy;
        
//         // Create curved path with wide arc
//         const controlX = Math.max(sourceX, targetX) + 600;
//         const controlY = (sourceY + targetY) / 2;
        
//         return `M${sourceX},${sourceY} Q${controlX},${controlY} ${targetX},${targetY}`;
//       });
    
//     // Create nodes
//     const node = svg.append("g")
//       .selectAll(".node")
//       .data(data.nodes)
//       .enter()
//       .append("g")
//       .attr("class", "node")
//       .attr("transform", d => `translate(${d.fx},${d.fy})`)
//       .on("mouseover", function(event, d) {
//         // Highlight connections
//         link.style("stroke-opacity", l => {
//           if (l.source === d.id || l.target === d.id) {
//             return 1;
//           } else {
//             return 0.1;
//           }
//         })
//         .style("stroke", l => {
//           if (l.source === d.id || l.target === d.id) {
//             return "#000"; // Black for highlighted connections
//           } else {
//             const sourceNode = data.nodes.find(n => n.id === l.source);
//             const targetNode = data.nodes.find(n => n.id === l.target);
//             if (sourceNode.department === targetNode.department) {
//               return departmentColors[sourceNode.department];
//             }
//             return "#ccc";
//           }
//         })
//         .style("stroke-width", l => {
//           if (l.source === d.id || l.target === d.id) {
//             return Math.max(2, l.value * 0.8);
//           } else {
//             return Math.max(0.5, l.value * 0.3);
//           }
//         });
        
//         // Show tooltip
//         // const tooltip = d3.select(tooltipRef.current);
//         // tooltip.style("display", "block")
//         //   .html(`
//         //     <div>
//         //       <strong>${d.id}</strong><br/>
//         //       ${d.collaborations} collaborations<br/>
//         //       Click for more information
//         //     </div>
//         //   `)
//         //   .style("left", (event.pageX + 10) + "px")
//         //   .style("top", (event.pageY - 20) + "px");
//       })
//       .on("mouseout", function() {
//         // Reset links
//         link.style("stroke-opacity", 0.4)
//           .style("stroke-width", d => Math.max(1, d.value * 0.5))
//           .style("stroke", d => {
//             const sourceNode = data.nodes.find(n => n.id === l.source);
//             const targetNode = data.nodes.find(n => n.id === l.target);
//             if (sourceNode.department === targetNode.department) {
//               return departmentColors[sourceNode.department];
//             }
//             return "#ccc";
//           });
        
//         // Hide tooltip
//         // d3.select(tooltipRef.current).style("display", "none");
//       })
//       .on("click", function(event, d) {
//         setSelectedFaculty(d);
//       });
    
//     // Add circles to nodes
//     node.append("circle")
//       .attr("r", d => Math.max(5, Math.min(10, d.collaborations * 0.5)))
//       .attr("fill", d => departmentColors[d.department])
//       .attr("stroke", "#fff")
//       .attr("stroke-width", 1.5);
    
//     // Add node labels
//     node.append("text")
//       .text(d => d.id)
//       .attr("x", -14)
//       .attr("y", 4)
//       .attr("text-anchor", "end")
//       .style("font-size", 12)
//       .style("pointer-events", "none");
    
//   }, []);

//   return (
//     <div className="w-full max-w-7xl mx-auto p-4">
//       <h1 className="text-3xl font-bold text-blue-700 mb-6">FACULTY COLLABORATIONS</h1>
      
//       {/* Main content area with the network visualization and profile */}
//       <div className="flex flex-col md:flex-row gap-6">
//         {/* Network visualization container - takes up left 2/3 */}
//         <div className="w-full md:w-3/5 bg-white rounded-lg shadow-md">          
//           {/* Network visualization container with fixed height */}
//           <div className="border border-gray-200 rounded-lg bg-white relative" style={{ height: '1000px' }}>
//             <svg ref={svgRef} width="100%" height="1000px" />
//             <div ref={tooltipRef} className="absolute hidden bg-white border border-gray-300 shadow-lg p-3 rounded-lg text-sm" />
//           </div>
//         </div>
        
//         {/* Faculty profile panel - takes up right 1/3 */}
//         <div className="w-full md:w-2/5">
//           {selectedFaculty ? (
//             <div className="flex flex-col gap-6" style={{ height: '950px' }}>
//               {/* Faculty profile card */}
//               <div className="bg-white rounded-lg shadow-md p-6">
//                 <h2 className="text-2xl font-bold text-blue-700 mb-2">{selectedFaculty.id}</h2>
//                 {data.profiles[selectedFaculty.id] && (
//                   <p className="text-gray-600 mb-6">{data.profiles[selectedFaculty.id].title}</p>
//                 )}
                
//                 <h3 className="text-xl font-semibold text-gray-700 uppercase mb-2">COLLABORATIONS</h3>
//                 <p className="text-gray-600 mb-6">{selectedFaculty.collaborations} total collaborations</p>
                
//                 <div className="mb-6">
//                   <h4 className="font-semibold text-gray-700 mb-3">Department</h4>
//                   <div className="flex items-center">
//                     <span 
//                       className="w-4 h-4 rounded-full mr-2" 
//                       style={{ backgroundColor: departmentColors[selectedFaculty.department] }}
//                     />
//                     <span className="text-gray-600">{selectedFaculty.department}</span>
//                   </div>
//                 </div>
                
//                 <div className="pt-4 border-t border-gray-200">
//                   <h4 className="font-semibold text-gray-700 mb-4">Research Areas</h4>
//                   <div className="flex flex-wrap gap-2">
//                     <span className="bg-blue-50 text-blue-700 rounded-full px-3 py-1 text-sm font-medium">
//                       Research
//                     </span>
//                     <span className="bg-green-50 text-green-700 rounded-full px-3 py-1 text-sm font-medium">
//                       Faculty
//                     </span>
//                     {selectedFaculty.collaborations > 15 && (
//                       <span className="bg-purple-50 text-purple-700 rounded-full px-3 py-1 text-sm font-medium">
//                         Highly Collaborative
//                       </span>
//                     )}
//                   </div>
//                 </div>
                
//                 <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg transition-colors hover:bg-blue-700">
//                   View Full Profile
//                 </button>
//               </div>
              
//               {/* NEW: Research Network graph */}
//               <div className="flex-grow">
//                 <MinisterNetwork selectedFaculty={selectedFaculty} />
//               </div>
//             </div>
//           ) : (
//             <div className="bg-white rounded-lg shadow-md p-6 text-center">
//               <p className="text-gray-600">Click on a faculty member to view their profile and collaboration details</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FacultyNetwork;

















































    

    // nodes: [
    //   { id: "David A. Weitz", department: "Applied Physics", collaborations: 19 },
    //   { id: "Vinothan N. Manoharan", department: "Applied Physics", collaborations: 10 },
    //   { id: "David R. Nelson", department: "Applied Physics", collaborations: 10 },
    //   { id: "Sharad Ramanathan", department: "Applied Physics", collaborations: 11 },
    //   { id: "Robert M. Westervelt", department: "Applied Physics", collaborations: 7 },
    //   { id: "Lene V. Hau", department: "Applied Physics", collaborations: 5 },
      
    //   { id: "Steven C. Wofsy", department: "Environmental Science", collaborations: 11 },
    //   { id: "Jerry X. Mitrovica", department: "Environmental Science", collaborations: 8 },
      
    //   { id: "L Mahadevan", department: "Applied Mathematics", collaborations: 15 },
    //   { id: "Michael P. Brenner", department: "Applied Mathematics", collaborations: 13 },
      
    //   { id: "Joanna Aizenberg", department: "Materials Science", collaborations: 18 },
    //   { id: "Katia Bertoldi", department: "Materials Science", collaborations: 12 },
    //   { id: "Frans A. Spaepen", department: "Materials Science", collaborations: 9 },
    //   { id: "Zhigang Suo", department: "Materials Science", collaborations: 14 },
    //   { id: "Conor J Walsh", department: "Materials Science", collaborations: 11 },
    //   { id: "Michael J. Aziz", department: "Materials Science", collaborations: 10 },
    //   { id: "Xin Li", department: "Materials Science", collaborations: 8 },
      
    //   { id: "Don Ingber", department: "Bioengineering", collaborations: 16 },
    //   { id: "Jennifer Lewis", department: "Bioengineering", collaborations: 14 },
    //   { id: "David Mooney", department: "Bioengineering", collaborations: 15 },
    //   { id: "Kit Parker", department: "Bioengineering", collaborations: 12 },
    //   { id: "Jia Liu", department: "Bioengineering", collaborations: 9 }
    // ],
    
    // links: [
    //   { source: "David A. Weitz", target: "Joanna Aizenberg", value: 5 },
    //   { source: "David A. Weitz", target: "Vinothan N. Manoharan", value: 7 },
    //   { source: "David A. Weitz", target: "David R. Nelson", value: 4 },
    //   { source: "David A. Weitz", target: "Sharad Ramanathan", value: 3 },
    //   { source: "David A. Weitz", target: "Robert M. Westervelt", value: 2 },
    //   { source: "David A. Weitz", target: "Lene V. Hau", value: 1 },
    //   { source: "David A. Weitz", target: "Don Ingber", value: 3 },
    //   { source: "David A. Weitz", target: "Jennifer Lewis", value: 4 },
    //   { source: "David A. Weitz", target: "David Mooney", value: 2 },
    //   { source: "David A. Weitz", target: "Kit Parker", value: 1 },
    //   { source: "David A. Weitz", target: "Jia Liu", value: 1 },
    //   { source: "David A. Weitz", target: "Steven C. Wofsy", value: 1 },
    //   { source: "David A. Weitz", target: "Jerry X. Mitrovica", value: 1 },
    //   { source: "David A. Weitz", target: "L Mahadevan", value: 4 },
    //   { source: "David A. Weitz", target: "Michael P. Brenner", value: 3 },
      
    //   { source: "Steven C. Wofsy", target: "Jerry X. Mitrovica", value: 2 },
    //   { source: "L Mahadevan", target: "Michael P. Brenner", value: 6 },
      
    //   { source: "Joanna Aizenberg", target: "Katia Bertoldi", value: 3 },
    //   { source: "Joanna Aizenberg", target: "Frans A. Spaepen", value: 2 },
    //   { source: "Joanna Aizenberg", target: "Zhigang Suo", value: 4 },
    //   { source: "Joanna Aizenberg", target: "Conor J Walsh", value: 2 },
    //   { source: "Joanna Aizenberg", target: "Michael J. Aziz", value: 3 },
    //   { source: "Joanna Aizenberg", target: "Xin Li", value: 1 },
    //   { source: "Joanna Aizenberg", target: "Don Ingber", value: 4 },
    //   { source: "Joanna Aizenberg", target: "Jennifer Lewis", value: 5 },
      
    //   { source: "Don Ingber", target: "David Mooney", value: 7 },
    //   { source: "Jennifer Lewis", target: "David Mooney", value: 5 }
    // ],












    // nodes: [
    //   {
    //     id: "Sandra Bergqvist",
    //     department: "Government",
    //     collaborations: 6,
    //     links: [
    //       { name: "Finnish Parliament" },
    //       { name: "Swedish Assembly of Finland" },
    //       { name: "Pargas City Executive" },
    //       { name: "Association of Finnish Municipalities" },
    //       { name: "Ministry of Education and Culture" },
    //       { name: "Åbo Akademi University" }
    //     ]
    //   },
    //   {
    //     id: "Anna-Kaisa Ikonen",
    //     department: "Government",
    //     collaborations: 3,
    //     links: [
    //       { name: "City of Tampere" },
    //       { name: "Ministry of Finance" },
    //       { name: "Finnish Parliament" }
    //     ]
    //   },
    //   {
    //     id: "Alexander Stubb",
    //     department: "Government",
    //     collaborations: 2,
    //     links: [
    //       { name: "Finnish Government" },
    //       { name: "World Happiness Council" }
    //     ]
    //   },
    //   {
    //     id: "Tuula Yrjola",
    //     department: "Government",
    //     collaborations: 3,
    //     links: [
    //       { name: "Finnish Embassy in Abu Dhabi" },
    //       { name: "Team Finland" },
    //       { name: "Anwar Gargash Diplomatic Academy" }
    //     ]
    //   },
    //   {
    //     id: "Anna-Mari Wong Hamalainen",
    //     department: "Government",
    //     collaborations: 3,
    //     links: [
    //       { name: "Cabinet of the President of Finland" },
    //       { name: "Ministry for Foreign Affairs" },
    //       { name: "NATO" }
    //     ]
    //   },
    //   {
    //     id: "Ville Brumme",
    //     department: "Government",
    //     collaborations: 3,
    //     links: [
    //       { name: "Office of the President of Finland" },
    //       { name: "CMI – Martti Ahtisaari Peace Foundation" },
    //       { name: "UN Group of Friends of Mediation" }
    //     ]
    //   },
    //   {
    //     id: "Elina Valtonen",
    //     department: "Government",
    //     collaborations: 2,
    //     links: [
    //       { name: "Ministry for Foreign Affairs" },
    //       { name: "UN General Assembly" }
    //     ]
    //   },
    //   {
    //     id: "Laila Clyne",
    //     department: "Government",
    //     collaborations: 3,
    //     links: [
    //       { name: "Ministry for Foreign Affairs" },
    //       { name: "Finnish Permanent Mission in Geneva" },
    //       { name: "Finnish Permanent Mission in New York" }
    //     ]
    //   },
    //   {
    //     id: "Anna-Kaisa Heikkinen",
    //     department: "Government",
    //     collaborations: 2,
    //     links: [
    //       { name: "Ministry for Foreign Affairs" },
    //       { name: "Dubai Electricity and Water Authority (DEWA)" }
    //     ]
    //   },
    //   {
    //     id: "Anne M'Rabet",
    //     department: "Government",
    //     collaborations: 3,
    //     links: [
    //       { name: "Ministry for Foreign Affairs" },
    //       { name: "GCC" },
    //       { name: "OIC" }
    //     ]
    //   },
    //   {
    //     id: "Antti Herlin",
    //     department: "Business",
    //     collaborations: 1,
    //     links: [
    //       { name: "KONE Corporation" }
    //     ]
    //   },
    //   {
    //     id: "Justin Hotard",
    //     department: "Business",
    //     collaborations: 2,
    //     links: [
    //       { name: "Nokia" },
    //       { name: "Hewlett Packard Enterprise" }
    //     ]
    //   },
    //   {
    //     id: "Pekka Lundmark",
    //     department: "Business",
    //     collaborations: 1,
    //     links: [
    //       { name: "Nokia" }
    //     ]
    //   },
    //   {
    //     id: "Sari Baldauf",
    //     department: "Business",
    //     collaborations: 2,
    //     links: [
    //       { name: "Nokia" },
    //       { name: "UAE Ministry of AI" }
    //     ]
    //   },
    //   {
    //     id: "Håkan Agnevall",
    //     department: "Business",
    //     collaborations: 2,
    //     links: [
    //       { name: "Wärtsilä Corporation" },
    //       { name: "ADIPEC" }
    //     ]
    //   },
    //   {
    //     id: "Representative of Ehrnooth family",
    //     department: "Business",
    //     collaborations: 5,
    //     links: [
    //       { name: "Ehrnrooth family" },
    //       { name: "KONE Corporation" },
    //       { name: "Fiskars" },
    //       { name: "Pöyry/AFRY" },
    //       { name: "Wärtsilä Corporation" }
    //     ]
    //   },
    //   {
    //     id: "Robin Langenskiöld",
    //     department: "Business",
    //     collaborations: 2,
    //     links: [
    //       { name: "Sanoma Corporation" },
    //       { name: "Helsingin Sanomat" }
    //     ]
    //   },
    //   {
    //     id: "Rafaela Seppälä",
    //     department: "Business",
    //     collaborations: 2,
    //     links: [
    //       { name: "Sanoma Corporation" },
    //       { name: "Helsingin Sanomat" }
    //     ]
    //   },
    //   {
    //     id: "Björn Wahlroos",
    //     department: "Business",
    //     collaborations: 5,
    //     links: [
    //       { name: "Sampo Group" },
    //       { name: "Nordea Bank" },
    //       { name: "UPM-Kymmene" },
    //       { name: "Abu Dhabi Investment Authority (ADIA)" },
    //       { name: "Saxo Bank" }
    //     ]
    //   },
    //   {
    //     id: "Jyri Häkämies",
    //     department: "Business",
    //     collaborations: 1,
    //     links: [
    //       { name: "Finnish Confederation of Industries (EK)" }
    //     ]
    //   },
    //   {
    //     id: "Jussi Halla-aho",
    //     department: "Government",
    //     collaborations: 2,
    //     links: [
    //       { name: "Finnish Parliament" },
    //       { name: "Finns Party" }
    //     ]
    //   },
    //   {
    //     id: "Nathali Ahlstrom",
    //     department: "Business",
    //     collaborations: 4,
    //     links: [
    //       { name: "Fiskars Group" },
    //       { name: "Iittala" },
    //       { name: "Royal Copenhagen" },
    //       { name: "Expo 2020 Dubai" }
    //     ]
    //   },
    //   {
    //     id: "Seppo Vikström",
    //     department: "Business",
    //     collaborations: 2,
    //     links: [
    //       { name: "ISKU" },
    //       { name: "Finnish Business Council in Dubai" }
    //     ]
    //   },
    //   {
    //     id: "Lassi Noponen",
    //     department: "Government",
    //     collaborations: 2,
    //     links: [
    //       { name: "Business Finland" },
    //       { name: "Team Finland" }
    //     ]
    //   },
    //   {
    //     id: "Markus Rauramo",
    //     department: "Business",
    //     collaborations: 2,
    //     links: [
    //       { name: "Fortum" },
    //       { name: "Expo 2020 Dubai" }
    //     ]
    //   },
    //   {
    //     id: "Jubo Romakkaniemi",
    //     department: "Business",
    //     collaborations: 2,
    //     links: [
    //       { name: "Finland Chamber of Commerce (FCC)" },
    //       { name: "UAE-Finland Business Council" }
    //     ]
    //   }
    // ],




    // links: [
    //   { source: "Sandra Bergqvist", target: "Finnish Parliament", value: 1 },
    //   { source: "Sandra Bergqvist", target: "Swedish Assembly of Finland", value: 1 },
    //   { source: "Sandra Bergqvist", target: "Pargas City Executive", value: 1 },
    //   { source: "Sandra Bergqvist", target: "Association of Finnish Municipalities", value: 1 },
    //   { source: "Sandra Bergqvist", target: "Ministry of Education and Culture", value: 1 },
    //   { source: "Sandra Bergqvist", target: "Åbo Akademi University", value: 1 },
    
    //   { source: "Anna-Kaisa Ikonen", target: "City of Tampere", value: 1 },
    //   { source: "Anna-Kaisa Ikonen", target: "Ministry of Finance", value: 1 },
    //   { source: "Anna-Kaisa Ikonen", target: "Finnish Parliament", value: 1 },
    
    //   { source: "Alexander Stubb", target: "Finnish Government", value: 1 },
    //   { source: "Alexander Stubb", target: "World Happiness Council", value: 1 },
    
    //   { source: "Tuula Yrjola", target: "Finnish Embassy in Abu Dhabi", value: 1 },
    //   { source: "Tuula Yrjola", target: "Team Finland", value: 1 },
    //   { source: "Tuula Yrjola", target: "Anwar Gargash Diplomatic Academy", value: 1 },
    
    //   { source: "Anna-Mari Wong Hamalainen", target: "Cabinet of the President of Finland", value: 1 },
    //   { source: "Anna-Mari Wong Hamalainen", target: "Ministry for Foreign Affairs", value: 1 },
    //   { source: "Anna-Mari Wong Hamalainen", target: "NATO", value: 1 },
    
    //   { source: "Ville Brumme", target: "Office of the President of Finland", value: 1 },
    //   { source: "Ville Brumme", target: "CMI – Martti Ahtisaari Peace Foundation", value: 1 },
    //   { source: "Ville Brumme", target: "UN Group of Friends of Mediation", value: 1 },
    
    //   { source: "Elina Valtonen", target: "Ministry for Foreign Affairs", value: 1 },
    //   { source: "Elina Valtonen", target: "UN General Assembly", value: 1 },
    
    //   { source: "Laila Clyne", target: "Ministry for Foreign Affairs", value: 1 },
    //   { source: "Laila Clyne", target: "Finnish Permanent Mission in Geneva", value: 1 },
    //   { source: "Laila Clyne", target: "Finnish Permanent Mission in New York", value: 1 },
    
    //   { source: "Anna-Kaisa Heikkinen", target: "Ministry for Foreign Affairs", value: 1 },
    //   { source: "Anna-Kaisa Heikkinen", target: "Dubai Electricity and Water Authority (DEWA)", value: 1 },
    
    //   { source: "Anne M'Rabet", target: "Ministry for Foreign Affairs", value: 1 },
    //   { source: "Anne M'Rabet", target: "GCC", value: 1 },
    //   { source: "Anne M'Rabet", target: "OIC", value: 1 },
    
    //   { source: "Antti Herlin", target: "KONE Corporation", value: 1 },
    
    //   { source: "Justin Hotard", target: "Nokia", value: 1 },
    //   { source: "Justin Hotard", target: "Hewlett Packard Enterprise", value: 1 },
    
    //   { source: "Pekka Lundmark", target: "Nokia", value: 1 },
    
    //   { source: "Sari Baldauf", target: "Nokia", value: 1 },
    //   { source: "Sari Baldauf", target: "UAE Ministry of AI", value: 1 },
    
    //   { source: "Håkan Agnevall", target: "Wärtsilä Corporation", value: 1 },
    //   { source: "Håkan Agnevall", target: "ADIPEC", value: 1 },
    
    //   { source: "Representative of Ehrnooth family", target: "Ehrnrooth family", value: 1 },
    //   { source: "Representative of Ehrnooth family", target: "KONE Corporation", value: 1 },
    //   { source: "Representative of Ehrnooth family", target: "Fiskars", value: 1 },
    //   { source: "Representative of Ehrnooth family", target: "Pöyry/AFRY", value: 1 },
    //   { source: "Representative of Ehrnooth family", target: "Wärtsilä Corporation", value: 1 },
    
    //   { source: "Robin Langenskiöld", target: "Sanoma Corporation", value: 1 },
    //   { source: "Robin Langenskiöld", target: "Helsingin Sanomat", value: 1 },
    
    //   { source: "Rafaela Seppälä", target: "Sanoma Corporation", value: 1 },
    //   { source: "Rafaela Seppälä", target: "Helsingin Sanomat", value: 1 },
    
    //   { source: "Björn Wahlroos", target: "Sampo Group", value: 1 },
    //   { source: "Björn Wahlroos", target: "Nordea Bank", value: 1 },
    //   { source: "Björn Wahlroos", target: "UPM-Kymmene", value: 1 },
    //   { source: "Björn Wahlroos", target: "Abu Dhabi Investment Authority (ADIA)", value: 1 },
    //   { source: "Björn Wahlroos", target: "Saxo Bank", value: 1 },
    
    //   { source: "Jyri Häkämies", target: "Finnish Confederation of Industries (EK)", value: 1 },
    
    //   { source: "Jussi Halla-aho", target: "Finnish Parliament", value: 1 },
    //   { source: "Jussi Halla-aho", target: "Finns Party", value: 1 },
    
    //   { source: "Nathali Ahlstrom", target: "Fiskars Group", value: 1 },
    //   { source: "Nathali Ahlstrom", target: "Iittala", value: 1 },
    //   { source: "Nathali Ahlstrom", target: "Royal Copenhagen", value: 1 },
    //   { source: "Nathali Ahlstrom", target: "Expo 2020 Dubai", value: 1 },
    
    //   { source: "Seppo Vikström", target: "ISKU", value: 1 },
    //   { source: "Seppo Vikström", target: "Finnish Business Council in Dubai", value: 1 },
    
    //   { source: "Lassi Noponen", target: "Business Finland", value: 1 },
    //   { source: "Lassi Noponen", target: "Team Finland", value: 1 },
    
    //   { source: "Markus Rauramo", target: "Fortum", value: 1 },
    //   { source: "Markus Rauramo", target: "Expo 2020 Dubai", value: 1 },
    
    //   { source: "Jubo Romakkaniemi", target: "Finland Chamber of Commerce (FCC)", value: 1 },
    //   { source: "Jubo Romakkaniemi", target: "UAE-Finland Business Council", value: 1 }
    // ],











    import React, { useState, useEffect, useRef } from 'react';
    import * as d3 from 'd3';
    import MinisterNetwork from './MinisterNetwork';
    
    const FacultyNetwork = () => {
      const svgRef = useRef(null);
      const tooltipRef = useRef(null);
      const [selectedFaculty, setSelectedFaculty] = useState(null);
      
      // Department colors
      const departmentColors = {
        "Business": "#C9E175",
        "Government": "#8DD3C7",
        "Third Party": "#8D63C7"
      };
      
      // Simplified data structure
      const data = {
        departments: [
          "Business", 
          "Government",
          "Third Party"
        ],

      nodes: [
        {
          id: "Sandra Bergqvist",
          department: "Government",
          collaborations: 6,
          links: [
            { name: "Finnish Parliament" },
            { name: "Swedish Assembly of Finland" },
            { name: "Pargas City Executive" },
            { name: "Association of Finnish Municipalities" },
            { name: "Ministry of Education and Culture" },
            { name: "Åbo Akademi University" }
          ]
        },
        {
          id: "Anna-Kaisa Ikonen",
          department: "Government",
          collaborations: 3,
          links: [
            { name: "City of Tampere" },
            { name: "Ministry of Finance" },
            { name: "Finnish Parliament" }
          ]
        },
        {
          id: "Alexander Stubb",
          department: "Government",
          collaborations: 2,
          links: [
            { name: "Finnish Government" },
            { name: "World Happiness Council" }
          ]
        },
        {
          id: "Tuula Yrjola",
          department: "Government",
          collaborations: 3,
          links: [
            { name: "Finnish Embassy in Abu Dhabi" },
            { name: "Team Finland" },
            { name: "Anwar Gargash Diplomatic Academy" }
          ]
        },
        {
          id: "Anna-Mari Wong Hamalainen",
          department: "Government",
          collaborations: 3,
          links: [
            { name: "Cabinet of the President of Finland" },
            { name: "Ministry for Foreign Affairs" },
            { name: "NATO" }
          ]
        },
        {
          id: "Ville Brumme",
          department: "Government",
          collaborations: 3,
          links: [
            { name: "Office of the President of Finland" },
            { name: "CMI – Martti Ahtisaari Peace Foundation" },
            { name: "UN Group of Friends of Mediation" }
          ]
        },
        {
          id: "Elina Valtonen",
          department: "Government",
          collaborations: 2,
          links: [
            { name: "Ministry for Foreign Affairs" },
            { name: "UN General Assembly" }
          ]
        },
        {
          id: "Laila Clyne",
          department: "Government",
          collaborations: 3,
          links: [
            { name: "Ministry for Foreign Affairs" },
            { name: "Finnish Permanent Mission in Geneva" },
            { name: "Finnish Permanent Mission in New York" }
          ]
        },
        {
          id: "Anna-Kaisa Heikkinen",
          department: "Government",
          collaborations: 2,
          links: [
            { name: "Ministry for Foreign Affairs" },
            { name: "Dubai Electricity and Water Authority (DEWA)" }
          ]
        },
        {
          id: "Anne MRabet",
          department: "Government",
          collaborations: 3,
          links: [
            { name: "Ministry for Foreign Affairs" },
            { name: "GCC" },
            { name: "OIC" }
          ]
        },
        {
          id: "Antti Herlin",
          department: "Business",
          collaborations: 1,
          links: [
            { name: "KONE Corporation" }
          ]
        },
        {
          id: "Justin Hotard",
          department: "Business",
          collaborations: 2,
          links: [
            { name: "Nokia" },
            { name: "Hewlett Packard Enterprise" }
          ]
        },
        {
          id: "Pekka Lundmark",
          department: "Business",
          collaborations: 1,
          links: [
            { name: "Nokia" }
          ]
        },
        {
          id: "Sari Baldauf",
          department: "Business",
          collaborations: 2,
          links: [
            { name: "Nokia" },
            { name: "UAE Ministry of AI" }
          ]
        },
        {
          id: "Håkan Agnevall",
          department: "Business",
          collaborations: 2,
          links: [
            { name: "Wärtsilä Corporation" },
            { name: "ADIPEC" }
          ]
        },
        {
          id: "Representative of Ehrnooth family",
          department: "Business",
          collaborations: 5,
          links: [
            { name: "Ehrnrooth family" },
            { name: "KONE Corporation" },
            { name: "Fiskars" },
            { name: "Pöyry/AFRY" },
            { name: "Wärtsilä Corporation" }
          ]
        },
        {
          id: "Robin Langenskiöld",
          department: "Business",
          collaborations: 2,
          links: [
            { name: "Sanoma Corporation" },
            { name: "Helsingin Sanomat" }
          ]
        },
        {
          id: "Rafaela Seppälä",
          department: "Business",
          collaborations: 2,
          links: [
            { name: "Sanoma Corporation" },
            { name: "Helsingin Sanomat" }
          ]
        },
        {
          id: "Björn Wahlroos",
          department: "Business",
          collaborations: 5,
          links: [
            { name: "Sampo Group" },
            { name: "Nordea Bank" },
            { name: "UPM-Kymmene" },
            { name: "Abu Dhabi Investment Authority (ADIA)" },
            { name: "Saxo Bank" }
          ]
        },
        {
          id: "Jyri Häkämies",
          department: "Business",
          collaborations: 1,
          links: [
            { name: "Finnish Confederation of Industries (EK)" }
          ]
        },
        {
          id: "Jussi Halla-aho",
          department: "Government",
          collaborations: 2,
          links: [
            { name: "Finnish Parliament" },
            { name: "Finns Party" }
          ]
        },
        {
          id: "Nathali Ahlstrom",
          department: "Business",
          collaborations: 4,
          links: [
            { name: "Fiskars Group" },
            { name: "Iittala" },
            { name: "Royal Copenhagen" },
            { name: "Expo 2020 Dubai" }
          ]
        },
        {
          id: "Seppo Vikström",
          department: "Business",
          collaborations: 2,
          links: [
            { name: "ISKU" },
            { name: "Finnish Business Council in Dubai" }
          ]
        },
        {
          id: "Lassi Noponen",
          department: "Government",
          collaborations: 2,
          links: [
            { name: "Business Finland" },
            { name: "Team Finland" }
          ]
        },
        {
          id: "Markus Rauramo",
          department: "Business",
          collaborations: 2,
          links: [
            { name: "Fortum" },
            { name: "Expo 2020 Dubai" }
          ]
        },
        {
          id: "Jubo Romakkaniemi",
          department: "Business",
          collaborations: 2,
          links: [
            { name: "Finland Chamber of Commerce (FCC)" },
            { name: "UAE-Finland Business Council" }
          ]
        },
        {
          id: "Finnish Parliament",
          department: "Third Party",
          collaborations: 3,
          links: []
        },
        {
          id: "Swedish Assembly of Finland",
          department: "Third Party",
          collaborations: 1,
          links: []
        },
        {
          id: "Pargas City Executive",
          department: "Third Party",
          collaborations: 1,
          links: []
        },
        {
          id: "Association of Finnish Municipalities",
          department: "Third Party",
          collaborations: 1,
          links: []
        },
        {
          id: "Ministry of Education and Culture",
          department: "Third Party",
          collaborations: 1,
          links: []
        },
        {
          id: "Åbo Akademi University",
          department: "Third Party",
          collaborations: 1,
          links: []
        },
        {
          id: "City of Tampere",
          department: "Third Party",
          collaborations: 1,
          links: []
        },
        {
          id: "Ministry of Finance",
          department: "Third Party",
          collaborations: 1,
          links: []
        },
        {
          id: "Finnish Government",
          department: "Third Party",
          collaborations: 1,
          links: []
        },
        {
          id: "World Happiness Council",
          department: "Third Party",
          collaborations: 1,
          links: []
        },
        {
          id: "Finnish Embassy in Abu Dhabi",
          department: "Third Party",
          collaborations: 1,
          links: []
        },
        {
          id: "Team Finland",
          department: "Third Party",
          collaborations: 2,
          links: []
        },
        {
          id: "Anwar Gargash Diplomatic Academy",
          department: "Third Party",
          collaborations: 1,
          links: []
        },
        {
          id: "Cabinet of the President of Finland",
          department: "Third Party",
          collaborations: 1,
          links: []
        },
        {
          id: "Ministry for Foreign Affairs",
          department: "Third Party",
          collaborations: 5,
          links: []
        },
        {
          id: "NATO",
          department: "Third Party",
          collaborations: 1,
          links: []
        },
        {
          id: "Office of the President of Finland",
          department: "Third Party",
          collaborations: 1,
          links: []
        },
        {
          id: "CMI – Martti Ahtisaari Peace Foundation",
          department: "Third Party",
          collaborations: 1,
          links: []
        },
        {
          id: "UN Group of Friends of Mediation",
          department: "Third Party",
          collaborations: 1,
          links: []
        },
        {
          id: "UN General Assembly",
          department: "Third Party",
          collaborations: 1,
          links: []
        },
        {
          id: "Finnish Permanent Mission in Geneva",
          department: "Third Party",
          collaborations: 1,
          links: []
        },
        {
          id: "Finnish Permanent Mission in New York",
          department: "Third Party",
          collaborations: 1,
          links: []
        },
        {
          id: "Dubai Electricity and Water Authority (DEWA)",
          department: "Third Party",
          collaborations: 1,
          links: []
        },
        {
          id: "GCC",
          department: "Third Party",
          collaborations: 1,
          links: []
        },
        {
          id: "OIC",
          department: "Third Party",
          collaborations: 1,
          links: []
        },
        {
          id: "KONE Corporation",
          department: "Third Party",
          collaborations: 2,
          links: []
        },
        {
          id: "Nokia",
          department: "Third Party",
          collaborations: 3,
          links: []
        },
        {
          id: "Hewlett Packard Enterprise",
          department: "Third Party",
          collaborations: 1,
          links: []
        },
        {
          id: "UAE Ministry of AI",
          department: "Third Party",
          collaborations: 1,
          links: []
        },
        {
          id: "Wärtsilä Corporation",
          department: "Third Party",
          collaborations: 2,
          links: []
        },
        {
          id: "ADIPEC",
          department: "Third Party",
          collaborations: 1,
          links: []
        },
        {
          id: "Ehrnrooth family",
          department: "Third Party",
          collaborations: 1,
          links: []
        },
        {
          id: "Fiskars",
          department: "Third Party",
          collaborations: 1,
          links: []
        },
        {
          id: "Pöyry/AFRY",
          department: "Third Party",
          collaborations: 1,
          links: []
        },
        {
          id: "Sanoma Corporation",
          department: "Third Party",
          collaborations: 2,
          links: []
        },
        {
          id: "Helsingin Sanomat",
          department: "Third Party",
          collaborations: 2,
          links: []
        },
        {
          id: "Sampo Group",
          department: "Third Party",
          collaborations: 1,
          links: []
        },
        {
          id: "Nordea Bank",
          department: "Third Party",
          collaborations: 1,
          links: []
        },
        {
          id: "UPM-Kymmene",
          department: "Third Party",
          collaborations: 1,
          links: []
        },
        {
          id: "Abu Dhabi Investment Authority (ADIA)",
          department: "Third Party",
          collaborations: 1,
          links: []
        },
        {
          id: "Saxo Bank",
          department: "Third Party",
          collaborations: 1,
          links: []
        },
        {
          id: "Finnish Confederation of Industries (EK)",
          department: "Third Party",
          collaborations: 1,
          links: []
        },
        {
          id: "Finns Party",
          department: "Third Party",
          collaborations: 1,
          links: []
        },
        {
          id: "Fiskars Group",
          department: "Third Party",
          collaborations: 1,
          links: []
        },
        {
          id: "Iittala",
          department: "Third Party",
          collaborations: 1,
          links: []
        },
        {
          id: "Royal Copenhagen",
          department: "Third Party",
          collaborations: 1,
          links: []
        },
        {
          id: "Expo 2020 Dubai",
          department: "Third Party",
          collaborations: 2,
          links: []
        },
        {
          id: "ISKU",
          department: "Third Party",
          collaborations: 1,
          links: []
        },
        {
          id: "Finnish Business Council in Dubai",
          department: "Third Party",
          collaborations: 1,
          links: []
        },
        {
          id: "Business Finland",
          department: "Third Party",
          collaborations: 1,
          links: []
        },
        {
          id: "Fortum",
          department: "Third Party",
          collaborations: 1,
          links: []
        },
        {
          id: "Finland Chamber of Commerce (FCC)",
          department: "Third Party",
          collaborations: 1,
          links: []
        },
        {
          id: "UAE-Finland Business Council",
          department: "Third Party",
          collaborations: 1,
          links: []
        }
      ],

      links: [
        { source: "Sandra Bergqvist", target: "Finnish Parliament", value: 1 },
        { source: "Sandra Bergqvist", target: "Swedish Assembly of Finland", value: 1 },
        { source: "Sandra Bergqvist", target: "Pargas City Executive", value: 1 },
        { source: "Sandra Bergqvist", target: "Association of Finnish Municipalities", value: 1 },
        { source: "Sandra Bergqvist", target: "Ministry of Education and Culture", value: 1 },
        { source: "Sandra Bergqvist", target: "Åbo Akademi University", value: 1 },
        { source: "Anna-Kaisa Ikonen", target: "City of Tampere", value: 1 },
        { source: "Anna-Kaisa Ikonen", target: "Ministry of Finance", value: 1 },
        { source: "Anna-Kaisa Ikonen", target: "Finnish Parliament", value: 1 },
        { source: "Alexander Stubb", target: "Finnish Government", value: 1 },
        { source: "Alexander Stubb", target: "World Happiness Council", value: 1 },
        { source: "Tuula Yrjola", target: "Finnish Embassy in Abu Dhabi", value: 1 },
        { source: "Tuula Yrjola", target: "Team Finland", value: 1 },
        { source: "Tuula Yrjola", target: "Anwar Gargash Diplomatic Academy", value: 1 },
        { source: "Anna-Mari Wong Hamalainen", target: "Cabinet of the President of Finland", value: 1 },
        { source: "Anna-Mari Wong Hamalainen", target: "Ministry for Foreign Affairs", value: 1 },
        { source: "Anna-Mari Wong Hamalainen", target: "NATO", value: 1 },
        { source: "Ville Brumme", target: "Office of the President of Finland", value: 1 },
        { source: "Ville Brumme", target: "CMI – Martti Ahtisaari Peace Foundation", value: 1 },
        { source: "Ville Brumme", target: "UN Group of Friends of Mediation", value: 1 },
        { source: "Elina Valtonen", target: "Ministry for Foreign Affairs", value: 1 },
        { source: "Elina Valtonen", target: "UN General Assembly", value: 1 },
        { source: "Laila Clyne", target: "Ministry for Foreign Affairs", value: 1 },
        { source: "Laila Clyne", target: "Finnish Permanent Mission in Geneva", value: 1 },
        { source: "Laila Clyne", target: "Finnish Permanent Mission in New York", value: 1 },
        { source: "Anna-Kaisa Heikkinen", target: "Ministry for Foreign Affairs", value: 1 },
        { source: "Anna-Kaisa Heikkinen", target: "Dubai Electricity and Water Authority (DEWA)", value: 1 },
        { source: "Anne MRabet", target: "Ministry for Foreign Affairs", value: 1 },
        { source: "Anne MRabet", target: "GCC", value: 1 },
        { source: "Anne MRabet", target: "OIC", value: 1 },
        { source: "Antti Herlin", target: "KONE Corporation", value: 1 },
        { source: "Justin Hotard", target: "Nokia", value: 1 },
        { source: "Justin Hotard", target: "Hewlett Packard Enterprise", value: 1 },
        { source: "Pekka Lundmark", target: "Nokia", value: 1 },
        { source: "Sari Baldauf", target: "Nokia", value: 1 },
        { source: "Sari Baldauf", target: "UAE Ministry of AI", value: 1 },
        { source: "Håkan Agnevall", target: "Wärtsilä Corporation", value: 1 },
        { source: "Håkan Agnevall", target: "ADIPEC", value: 1 },
        { source: "Representative of Ehrnooth family", target: "Ehrnrooth family", value: 1 },
        { source: "Representative of Ehrnooth family", target: "KONE Corporation", value: 1 },
        { source: "Representative of Ehrnooth family", target: "Fiskars", value: 1 },
        { source: "Representative of Ehrnooth family", target: "Pöyry/AFRY", value: 1 },
        { source: "Representative of Ehrnooth family", target: "Wärtsilä Corporation", value: 1 },
        { source: "Robin Langenskiöld", target: "Sanoma Corporation", value: 1 },
        { source: "Robin Langenskiöld", target: "Helsingin Sanomat", value: 1 },
        { source: "Rafaela Seppälä", target: "Sanoma Corporation", value: 1 },
        { source: "Rafaela Seppälä", target: "Helsingin Sanomat", value: 1 },
        { source: "Björn Wahlroos", target: "Sampo Group", value: 1 },
        { source: "Björn Wahlroos", target: "Nordea Bank", value: 1 },
        { source: "Björn Wahlroos", target: "UPM-Kymmene", value: 1 },
        { source: "Björn Wahlroos", target: "Abu Dhabi Investment Authority (ADIA)", value: 1 },
        { source: "Björn Wahlroos", target: "Saxo Bank", value: 1 },
        { source: "Jyri Häkämies", target: "Finnish Confederation of Industries (EK)", value: 1 },
        { source: "Jussi Halla-aho", target: "Finnish Parliament", value: 1 },
        { source: "Jussi Halla-aho", target: "Finns Party", value: 1 },
        { source: "Nathali Ahlstrom", target: "Fiskars Group", value: 1 },
        { source: "Nathali Ahlstrom", target: "Iittala", value: 1 },
        { source: "Nathali Ahlstrom", target: "Royal Copenhagen", value: 1 },
        { source: "Nathali Ahlstrom", target: "Expo 2020 Dubai", value: 1 },
        { source: "Seppo Vikström", target: "ISKU", value: 1 },
        { source: "Seppo Vikström", target: "Finnish Business Council in Dubai", value: 1 },
        { source: "Lassi Noponen", target: "Business Finland", value: 1 },
        { source: "Lassi Noponen", target: "Team Finland", value: 1 },
        { source: "Markus Rauramo", target: "Fortum", value: 1 },
        { source: "Markus Rauramo", target: "Expo 2020 Dubai", value: 1 },
        { source: "Jubo Romakkaniemi", target: "Finland Chamber of Commerce (FCC)", value: 1 },
        { source: "Jubo Romakkaniemi", target: "UAE-Finland Business Council", value: 1 }
      ],
    

    profiles: {
      "Sandra Bergqvist": {
        title: "Minister of Youth, Sport and Physical Activity",
        affiliations: 6,
        departments: ["Government"],
        strategy: "Serves as Minister since June 2023, previously active in municipal politics and academia. Focuses on youth engagement, sports, and community well-being.",
        uaestatements: "Statements about the UAE have been nonobtrusive; Finland generally sees the UAE as a partner for sports diplomacy and youth programs.",
        roleinrelations: "Ministry involvement in youth exchanges, sports diplomacy, and inclusivity (e.g. Special Olympics World Games Abu Dhabi 2019). Potential for shared best practices in youth empowerment.",
        bilaterals: "Collaboration primarily facilitated through cultural, educational, and sports events, including Finland’s participation in Special Olympics 2019 in Abu Dhabi.",
        alignandfriction: "Both countries value sports as a unifying force, focusing on inclusivity and community building. Minimal friction; differences in approach to funding or volunteer-driven vs. government-driven sports programmes are seen as opportunities for exchange.",
        conclusions: "Committed to expanding sports-based collaboration, youth exchanges, and inclusive athletic events, reinforcing mutual goodwill."
      },
      "Anna-Kaisa Ikonen": {
        title: "Minister of Local and Regional Government",
        affiliations: 3,
        departments: ["Government"],
        strategy: "Serves as Minister of Local and Regional Government since June 2023. Former mayor of Tampere with deep experience in governance and public administration.",
        uaestatements: "No specific public comments on the UAE. Broader diplomatic interactions highlight Finland’s interest in sustainable urban development and smart city initiatives.",
        roleinrelations: "While not directly involved, her ministry could collaborate on urban innovation and digital transformation of public services, aligning with UAE’s push for smart governance.",
        bilaterals: "Finland–UAE relations anchored by frameworks like the 1982 Economic Cooperation Agreement, 1996 Double Taxation Agreement, and 2013 Air Services Agreement. Potential for city-level partnerships.",
        alignandfriction: "Both prioritise innovation and sustainable development. Cultural differences in municipal structures are navigable through mutual dialogue.",
        conclusions: "Likely to encourage knowledge exchange on local governance, smart cities, and public-sector innovation, furthering bilateral ties in the realm of municipal collaboration."
      },
      "Alexander Stubb": {
        title: "President of the Republic of Finland",
        affiliations: 2,
        departments: ["Government"],
        strategy: "Serves as President since March 2024. Has extensive experience in national and international politics, focusing on foreign policy and economic affairs. Strongly advocates for proactive global engagement and sees collaboration beyond traditional partners as essential.",
        uaestatements: "Emphasised Finland’s keenness to strengthen ties with the UAE at his inauguration, expressing gratitude for the UAE’s participation and highlighting shared interests in education, renewable energy, and innovative governance.",
        roleinrelations: "Shapes Finland’s overall approach, encouraging bilateral cooperation in trade, education, and technology. Works closely with the Prime Minister and other ministers to align foreign policy with practical engagements.",
        bilaterals: "Supports the longstanding legal framework including the 1982 Economic Cooperation Agreement, the 1996 Double Taxation and Investment Protection treaties, and the 2013 Air Services Agreement, which underpin Finland–UAE ties.",
        alignandfriction: "Aligned on innovation, sustainability, and clean energy. Potential friction could arise from Finland’s EU-aligned export controls (e.g. arms embargo in certain conflicts) and differing stances on global crises.",
        conclusions: "Continues to view the UAE as a key Gulf partner. Seeks to deepen ties in technology, climate solutions, and education, leveraging the 50th anniversary of Finland–UAE relations as a springboard."
      },
      "Tuula Yrjola": {
        title: "Ambassador of Finland to the UAE",
        affiliations: 3,
        departments: ["Government"],
        strategy: "A seasoned diplomat with three decades of experience in Eastern Europe, Central Asia, and the Middle East. Assumed ambassadorship in October 2023.",
        uaestatements: "Emphasises strengthening bilateral relations, promoting Finnish business interests (Team Finland), and monitoring political developments in the UAE.",
        roleinrelations: "Leads the Finnish Embassy in Abu Dhabi, overseeing economic diplomacy, political engagement, and consular services. Acts as the principal link between Finland and the UAE.",
        bilaterals: "Actively supports the existing treaties (economic, taxation, air services) and fosters new MoUs in education, energy, and innovation.",
        alignandfriction: "Shares Finland’s focus on sustainability and innovation, echoing UAE’s Vision 2030. Minimal friction; possible differences in approach to regional conflicts or human rights are managed diplomatically.",
        conclusions: "Aims to deepen trade, innovation, and cultural ties, ensuring Finland’s presence grows in alignment with UAE’s development goals."
      },
      "Anna-Mari Wong Hamalainen": {
        title: "Director of Foreign and Security Policy",
        affiliations: 3,
        departments: ["Government"],
        strategy: "Serves as Director of Foreign and Security Policy, with a background in NATO issues and EU foreign policy. Advises the President’s Cabinet on security strategies.",
        uaestatements: "No publicly documented statements specific to the UAE. Focuses mainly on European security and crisis management.",
        roleinrelations: "Contributes to broader frameworks shaping Finland’s foreign relations, which can indirectly influence cooperation with the UAE, especially in security dialogues.",
        bilaterals: "Not directly involved in forging UAE agreements; however, shapes policy frameworks that may underpin new or existing treaties.",
        alignandfriction: "Finland’s stance on EU security issues might differ from UAE’s neutral or pragmatic positions in certain regional conflicts. No major friction reported.",
        conclusions: "Remains supportive of collaborative engagements with Gulf nations but focuses primarily on NATO/EU security agendas."
      },
      "Ville Brumme": {
        title: "Director of Peace Mediation",
        affiliations: 3,
        departments: ["Government"],
        strategy: "Appointed by President Stubb in 2024. Formerly at CMI, overseeing mediation projects in Africa, the Middle East, and Eurasia. Brings deep conflict resolution expertise.",
        uaestatements: "Policies reflect respect for the UAE’s growing mediation role, especially in the Middle East. Acknowledges UAE’s discreet facilitation style and shared commitment to peaceful resolution.",
        roleinrelations: "Coordinates high-level mediation initiatives, working with Finnish MFA and civil society. Sees the UAE as a like-minded actor in diplomatic solutions, especially in the Horn of Africa.",
        bilaterals: "Engages through the Finland–UAE Political Consultation Committee. Visited Abu Dhabi in October 2024, meeting Dr. Anwar Gargash to enhance dialogue on conflict resolution.",
        alignandfriction: "Both countries value discreet, outcome-oriented mediation. Potential friction might arise if the UAE’s mediation approaches differ from Finland’s inclusivity norms, but so far cooperation is constructive.",
        conclusions: "Intends to expand joint mediation efforts, leveraging Finland’s NGO networks and the UAE’s regional influence for broader conflict resolution initiatives."
      },
      "Elina Valtonen": {
        title: "Minister of Foreign Affairs",
        affiliations: 2,
        departments: ["Government"],
        strategy: "Holds significant influence in shaping Finland’s foreign policy during NATO accession. Has a background in investment banking and economics, emphasising pragmatic, globally oriented diplomacy.",
        uaestatements: "Met with UAE Foreign Minister in September 2023 at UNGA to discuss cooperation in economic, trade, cultural, and energy fields. Signals a positive and pragmatic approach to Gulf relations.",
        roleinrelations: "Guides Finland’s diplomatic priorities, coordinating with other ministries to expand trade and educational links with the UAE. Oversees the Joint Committee mechanism that fosters bilateral collaboration.",
        bilaterals: "Supports the 1982 Economic Cooperation Agreement, the 1996 Double Taxation, the 2013 Air Services Agreement, and the 2022 Energy Cooperation MoU. Led the second Joint Committee meeting in Helsinki in November 2024.",
        alignandfriction: "Strong alignment in tech, sustainability, and energy diversification. Some differences may surface over Finland’s strict stance on Russia-related sanctions or defence exports.",
        conclusions: "Aims to solidify Finland–UAE ties by promoting commercial, educational, and innovation-driven partnerships, leveraging shared interests in renewable energy and digital transformation."
      },
      "Laila Clyne": {
        title: "Diplomatic Advisor to the Minister",
        affiliations: 3,
        departments: ["Government"],
        strategy: "Provides strategic counsel to the Minister for Foreign Affairs. Previously served as Second Secretary at Finland’s Permanent Mission in Geneva and as Adviser at the UN Mission in New York.",
        uaestatements: "No known public statements regarding the UAE. Works behind the scenes on broader foreign policy priorities.",
        roleinrelations: "Advises on day-to-day diplomatic matters, possibly offering input on engagements with UAE officials but with minimal direct public role.",
        bilaterals: "Supports the minister in implementing Finland’s treaty frameworks; no direct record of involvement in UAE agreements.",
        alignandfriction: "No friction points documented, as her role is primarily advisory. Aligns with the ministry’s general foreign policy direction.",
        conclusions: "Expected to continue providing expert advice, ensuring continuity and coherence in Finland’s foreign relations, including with the UAE."
      },
      "Anna-Kaisa Heikkinen": {
        title: "Director General, Department for Africa, the Middle East and Latin America",
        affiliations: 2,
        departments: ["Government"],
        strategy: "Oversees Finnish diplomatic engagements with Africa, the Middle East, and Latin America. Has served in multiple leadership roles, including ambassadorial positions.",
        uaestatements: "Highlighted the UAE’s importance in Finland’s Middle East outreach. Led a high-level delegation to Dubai focusing on sustainability and innovation.",
        roleinrelations: "Directs the strategy for Finland’s missions in the region, guiding bilateral talks and policy frameworks with the UAE. Provides oversight to the Embassy in Abu Dhabi.",
        bilaterals: "Facilitates the Political Consultation Committee (2022) and the Joint Committee (2024), supporting MoUs in energy, education, AI, and space.",
        alignandfriction: "Aligns strongly on sustainable technology and education. Must balance Finland’s EU stances on issues like sanctions and arms exports with maintaining positive relations.",
        conclusions: "Plans to expand cooperation in clean energy, digital solutions, and broader Middle East initiatives, strengthening Finland’s role as a trusted partner."
      },
      "Anne MRabet": {
        title: "Desk Officer for Persian Gulf, UAE, Bahrain, GCC and OIC",
        affiliations: 3,
        departments: ["Government"],
        strategy: "Oversees day-to-day bilateral relations with the Gulf region, including the UAE. Part of the Middle East and Gulf Unit at the MFA.",
        uaestatements: "No public statements identified. Focused on facilitating diplomatic ties and ensuring alignment with Finland’s broader Middle East policy.",
        roleinrelations: "Coordinates inter-ministerial work on UAE matters, ensuring consistency in policy and day-to-day diplomatic tasks. Provides critical country-specific expertise.",
        bilaterals: "Involved in operationalising and monitoring existing frameworks like the 2022 Political Consultation Committee, the Joint Committee, and relevant MoUs.",
        alignandfriction: "Likely deals with routine administrative or regulatory differences. No significant friction reported.",
        conclusions: "Will continue to manage UAE-related dossiers, supporting smooth bilateral cooperation and possibly contributing to new initiatives in trade or culture."
      },
      "Antti Herlin": {
        title: "Chairman of KONE",
        affiliations: 1,
        departments: ["Business"],
        strategy: "Finland’s most influential industrialist. Transformed KONE into a global leader in elevator/escalator solutions with strong expansion in emerging markets.",
        uaestatements: "Does not frequently comment on the UAE publicly. KONE’s regional HQ in Dubai, major involvement in iconic UAE projects like Burj Khalifa and Dubai Metro.",
        roleinrelations: "Indirectly influences Finland’s economic diplomacy by showcasing advanced infrastructure solutions. KONE’s presence strengthens bilateral trade and technology ties.",
        bilaterals: "Engages within Finland’s existing frameworks. KONE’s deals in the UAE are typically commercial contracts (e.g., supply for megaprojects), supporting broader trade relationships.",
        alignandfriction: "Competes with global elevator firms in the UAE market. Must navigate the UAE’s multi-vendor approach while highlighting Finnish innovation and sustainability.",
        conclusions: "Continues to expand KONE’s footprint in the Gulf, promoting Finnish engineering expertise in sustainable urban mobility."
      },
      "Justin Hotard": {
        title: "Incoming CEO of Nokia",
        affiliations: 2,
        departments: ["Business"],
        strategy: "Assuming Nokia’s top leadership role in 2024. Formerly led AI-driven infrastructure at HPE, focusing on next-gen networking and cloud solutions.",
        uaestatements: "No direct statements yet. Nokia’s longstanding presence in the UAE, especially in 5G rollout and digital infrastructure, signals continuity.",
        roleinrelations: "Will oversee Nokia’s future expansions in 5G/6G, cybersecurity, and AI-driven networks in the Emirates. Maintains close ties with local telecom operators.",
        bilaterals: "Nokia’s commercial MOUs with UAE telcos (Etisalat, Du) support the overall Finland–UAE digital cooperation, but no direct G2G agreements are known.",
        alignandfriction: "Faces competition from Huawei, Ericsson, and others in the UAE. Nokia’s emphasis on secure, energy-efficient networks aligns with UAE’s digital transformation goals.",
        conclusions: "Likely to deepen partnerships with UAE operators, bridging Nokia’s new AI-driven solutions and the Emirates’ ambition to be a tech leader."
      },
      "Pekka Lundmark": {
        title: "Outgoing CEO of Nokia",
        affiliations: 1,
        departments: ["Business"],
        strategy: "Led Nokia from 2020–2024, steering a critical transformation focusing on 5G, AI-powered automation, and green telecom solutions.",
        uaestatements: "Praised the UAE’s visionary approach to 5G and AI. Emphasised Nokia’s long-term commitment to the UAE’s digital ecosystem.",
        roleinrelations: "Strengthened ties with UAE telecom providers, championing 5G expansions and forging MoUs on 6G research and AI-driven connectivity.",
        bilaterals: "Facilitated major contracts like Nokia-Etisalat 5G expansion (2021–2023) and a 2023–2024 6G research MoU with UAE regulators and universities.",
        alignandfriction: "Aligned on digital innovation; navigated multi-vendor competition in the UAE’s telecom sector. Maintained good rapport despite global supply chain challenges.",
        conclusions: "His leadership cemented Nokia’s role in UAE connectivity. Leaves a legacy of strong partnership and sets the stage for next-gen expansions under his successor."
      },
      "Sari Baldauf": {
        title: "Chairman of Nokia",
        affiliations: 2,
        departments: ["Business"],
        strategy: "Among the most senior female executives in global telecom. Former head of Nokia’s Networks business, focusing on international market expansion.",
        uaestatements: "Few direct public remarks on the UAE, but consistently emphasises the Middle East as a key growth region for Nokia.",
        roleinrelations: "Oversees Nokia’s board-level strategy, supporting expansions in UAE-based R&D and forging digital economy partnerships with Emirati stakeholders.",
        bilaterals: "Endorses Nokia’s commercial agreements with UAE telcos and fosters Finland–UAE digital cooperation, such as a Finland-UAE Digital Economy Partnership.",
        alignandfriction: "European telecom standardisation vs. UAE’s regional tech frameworks can require careful negotiation. Competition from global players remains a factor.",
        conclusions: "Focuses on strategic alignment with the UAE’s innovation goals, ensuring Nokia’s sustainability and digital leadership remain compelling in the region."
      },
      "Håkan Agnevall": {
        title: "CEO of Wartsilla",
        affiliations: 2,
        departments: ["Business"],
        strategy: "President and CEO of Wärtsilä since 2021. Extensive background in electrification and power systems from Volvo, Bombardier, and ABB.",
        uaestatements: "At ADIPEC 2023, advocated a balanced approach to meeting energy needs, focusing on collaboration and innovation in sustainable energy solutions.",
        roleinrelations: "Leads Wärtsilä’s operations in the Emirates, contributing marine and energy solutions. Partnerships with Emirati energy projects highlight Finnish technology’s role.",
        bilaterals: "No specific government-level MoU but engages in commercial contracts supporting Finland–UAE energy cooperation, in line with the 2022 Energy Agreement.",
        alignandfriction: "Wärtsilä’s emphasis on clean, innovative energy solutions aligns with UAE’s diversification goals. Market competition and local regulations can be minor friction points.",
        conclusions: "Aims to expand Wärtsilä’s presence in the UAE, focusing on sustainable energy technologies and forging deeper collaboration with Emirati stakeholders."
      },
      "Representative of Ehrnooth family": {
        title: "Family representative",
        affiliations: 5,
        departments: ["Business"],
        strategy: "Finland’s most prominent noble business dynasty with investments in banking, manufacturing, forestry, and technology. Known for long-term, stable stewardship.",
        uaestatements: "Family members rarely make explicit political statements. Through companies like KONE, Pöyry/AFRY, and Wärtsilä, they acknowledge the UAE’s importance as a growth market.",
        roleinrelations: "Anchor owners in major Finnish firms active in the UAE, thereby shaping investment and project decisions that reinforce bilateral trade and technology exchanges.",
        bilaterals: "Operate under Finland’s existing trade frameworks. Their companies often join Team Finland delegations and sign commercial contracts in the Gulf.",
        alignandfriction: "Strong synergy with UAE’s infrastructure and energy priorities. Competition from global peers can be a friction point in securing contracts.",
        conclusions: "Likely to maintain or expand strategic investments in sectors aligned with UAE’s development goals, reinforcing the family’s behind-the-scenes influence."
      },
      "Robin Langenskiöld": {
        title: "Representative from the Erkko family",
        affiliations: 2,
        departments: ["Business"],
        strategy: "Part of the Erkko family, historically dominating Finland’s media landscape via Sanoma. Major shareholder and former board member at Sanoma Corporation.",
        uaestatements: "No direct personal statements on the UAE. Through Helsingin Sanomat coverage, the family’s media outlets have portrayed the UAE as a rising business hub.",
        roleinrelations: "Indirectly shapes public discourse on the UAE through media coverage. Potential for future expansions in education or digital media solutions in the region.",
        bilaterals: "Not directly involved in official treaties; family business interests remain primarily in Finland’s media sector with limited direct UAE presence.",
        alignandfriction: "Media coverage typically business-friendly. Minimal friction unless editorial stances conflict with certain Middle Eastern narratives.",
        conclusions: "Family’s influence in media could support a favourable climate for Finnish–UAE business ties. No immediate plans for deeper direct investment in the UAE."
      },
      "Rafaela Seppälä": {
        title: "Representative from the Erkko family",
        affiliations: 2,
        departments: ["Business"],
        strategy: "Also an Erkko family member, major shareholder in Sanoma. Has held board roles across media and cultural foundations, influencing Finnish arts and journalism.",
        uaestatements: "No explicit statements on the UAE. Family’s media coverage emphasises the UAE’s business environment and tourism potential.",
        roleinrelations: "Similar to Langenskiöld, shapes the broader media narrative through Sanoma outlets. Could theoretically facilitate cross-cultural events or coverage on the UAE.",
        bilaterals: "No direct involvement. The family’s focus remains on Finnish media holdings rather than forging UAE-specific agreements.",
        alignandfriction: "Low friction. Potential tension only if editorial lines clash with sensitive regional issues. Typically supportive coverage of UAE’s economic achievements.",
        conclusions: "Likely to maintain a low-profile stance, continuing to uphold a generally favourable media portrayal of the UAE’s growth and opportunities."
      },
      "Björn Wahlroos": {
        title: "Banker, investor and former Chairman of the Board of Directors of several major Finnish companies",
        affiliations: 5,
        departments: ["Business"],
        strategy: "Influential Finnish banker and investor. Former Chairman of Sampo Group, Nordea Bank, and UPM-Kymmene. Known for free-market philosophy and shaping major M&A deals.",
        uaestatements: "No personal statements on the UAE. Indirect ties via Nordea’s transaction with Abu Dhabi Investment Authority (ADIA) and Saxo Bank expansions in the Middle East.",
        roleinrelations: "Through corporate deals, facilitated capital flows involving ADIA and supported Saxo Bank’s presence in the UAE, indirectly reinforcing financial linkages.",
        bilaterals: "Operates within existing Finland–UAE frameworks, especially in finance. No direct G2G deals, but corporate-level transactions highlight cross-border investment synergy.",
        alignandfriction: "No major friction. Aligns with the UAE’s role as a significant global investor. Potential differences in regulatory stances or market preferences are handled commercially.",
        conclusions: "Though semi-retired, Wahlroos’s financial influence endures, with potential for future cross-border investments connecting Finnish and Emirati markets."
      },
      "Jyri Häkämies": {
        title: "Director General of the Finnish Confederation of Industries",
        affiliations: 1,
        departments: ["Business"],
        strategy: "Leads Finland’s largest business advocacy group (EK). Former Minister of Defence and Economic Affairs, leveraging broad policy experience to promote Finnish industries globally.",
        uaestatements: "Positions the UAE as a priority market, praising the country’s ambition in digital transformation, innovation, and sustainability.",
        roleinrelations: "Organises trade missions, fosters dialogues through the Finland-UAE Joint Business Council, and encourages Finnish SMEs to explore UAE opportunities.",
        bilaterals: "Supports the 2024 creation of the UAE-Finland Business Council and endorses MoUs in AI, energy, and digitalisation.",
        alignandfriction: "Aligns with UAE’s drive for economic diversification. Competition from other nations is a typical challenge for Finnish exports.",
        conclusions: "Continues championing trade delegations and bilateral initiatives, reinforcing Finland’s brand in innovation, sustainability, and advanced manufacturing."
      },
      "Jussi Halla-aho": {
        title: "Speaker of the Parliament",
        affiliations: 2,
        departments: ["Government"],
        strategy: "Speaker of the Parliament and former leader of a major conservative party, with significant influence on parliamentary procedures and foreign policy oversight.",
        uaestatements: "Has not made extensive public statements on the UAE. Generally promotes pragmatic foreign policy and economic cooperation with Gulf states.",
        roleinrelations: "Facilitates parliamentary-level exchanges. Provides legislative support and legitimacy for broader Finland–UAE diplomatic initiatives led by the executive branch.",
        bilaterals: "No direct role in signing agreements but upholds the parliamentary ratification and review of treaties with the UAE.",
        alignandfriction: "Aligns on economic partnerships and national security. Potentially stricter stances on migration or certain EU policies may differ from UAE approaches.",
        conclusions: "Continues to support parliamentary diplomacy, encouraging stable, mutually beneficial ties with the UAE in trade and security matters."
      },
      "Nathali Ahlstrom": {
        title: "CEO of Fiskars",
        affiliations: 4,
        departments: ["Business"],
        strategy: "Leads one of Finland’s oldest companies, focusing on premium consumer brands in homeware and lifestyle. Emphasises sustainability and global market expansion.",
        uaestatements: "Identified the UAE as a key premium retail market. Showcased Fiskars products at Expo 2020 Dubai to highlight Finnish design and heritage.",
        roleinrelations: "Promotes Finnish consumer-brand visibility in the UAE’s luxury retail sector, supporting Finland’s soft diplomacy and brand image.",
        bilaterals: "Operates within broader Finland–UAE trade frameworks. Collaborates with local distributors and participated in the Finnish pavilion at Expo 2020.",
        alignandfriction: "Aligns with UAE’s appetite for high-quality, heritage-driven goods. Competition in premium retail and varied pricing sensitivities can limit deeper market penetration.",
        conclusions: "Continues building brand recognition and sustainability messaging, aiming to grow market share among discerning Emirati consumers."
      },
      "Seppo Vikström": {
        title: "Chairman of ISKU",
        affiliations: 2,
        departments: ["Business"],
        strategy: "Third-generation leader of a major Finnish furniture brand, known for design quality and eco-friendly manufacturing. Guides ISKU’s domestic and export growth.",
        uaestatements: "Focuses on synergy between Finland and the UAE in sustainability and education. Family members have publicly praised UAE’s openness to innovative school design.",
        roleinrelations: "ISKU Middle East FZ-LLC in Dubai furnishes educational institutions, bridging Finnish learning environment concepts with UAE’s modernisation goals.",
        bilaterals: "Works under Finland’s trade frameworks; invests in local presence via showrooms and networks. Partners with the Finnish Business Council in Dubai.",
        alignandfriction: "UAE’s focus on premium, sustainable solutions aligns with ISKU’s brand. Faces competitive pricing from global furniture suppliers and logistical complexities.",
        conclusions: "Continues promoting Finnish educational design in the UAE, leveraging sustainability as a key differentiator to deepen market presence."
      },
      "Lassi Noponen": {
        title: "CEO of Business Finland",
        affiliations: 2,
        departments: ["Business"],
        strategy: "Appointed in September 2024, leads Finland’s main trade and investment promotion agency. Focuses on global partnerships and high-potential markets.",
        uaestatements: "Positions the UAE as a strategic priority in the Middle East. Participated in the January 2025 trade delegation to Abu Dhabi, emphasising digital economy ties.",
        roleinrelations: "Coordinates business delegations and fosters bilateral trade. Translates government-to-government MoUs (e.g. in energy) into real commercial projects.",
        bilaterals: "Supports implementing the 2022 Energy MoU, organises Team Finland missions, and drives new trade frameworks for AI, education, and digitalisation.",
        alignandfriction: "Strong synergy with UAE’s innovation drive. Competition from larger exporters or regionally closer suppliers can challenge Finnish SMEs.",
        conclusions: "Aims to expand Finnish presence in the UAE, focusing on advanced tech, sustainability, and co-innovation, especially for the 50th anniversary of diplomatic ties."
      },
      "Markus Rauramo": {
        title: "CEO of Fortum",
        affiliations: 2,
        departments: ["Business"],
        strategy: "Leads a major Nordic energy company specialising in clean energy. Committed to renewable projects and CO2-free electricity generation.",
        uaestatements: "No direct UAE-specific quotes, but Fortum participated in Expo 2020 Dubai to showcase sustainable energy solutions.",
        roleinrelations: "Supports Finland’s energy diplomacy by highlighting advanced renewable technology. Potential partnerships with UAE’s green energy initiatives.",
        bilaterals: "Operates within the 2022 Finland–UAE Energy MoU context, focusing on opportunities for renewable energy and power solutions in the region.",
        alignandfriction: "UAE’s push for diverse energy aligns with Fortum’s green expertise. Market entry or local partnership complexities are typical friction points.",
        conclusions: "Fortum likely to explore deeper collaboration in solar, wind, or hydrogen projects, leveraging the UAE’s drive for sustainable energy diversification."
      },
      "Jubo Romakkaniemi": {
        title: "CEO of FCC",
        affiliations: 2,
        departments: ["Business"],
        strategy: "Heads the Finland Chamber of Commerce, representing around 20,000 companies. Former senior advisor in Finnish and EU politics.",
        uaestatements: "Calls the UAE an essential partner for Finnish businesses, noting complementary interests in sustainability, digital solutions, and innovation.",
        roleinrelations: "Facilitates business delegations and fosters sector-specific forums (e.g., smart cities, digital health). Instrumental in launching the UAE–Finland Business Council.",
        bilaterals: "Supports and promotes new commercial ties that arise from official frameworks, including MoUs in AI, renewable energy, and digital economy.",
        alignandfriction: "High alignment on tech and sustainability. Competition from global players is the main challenge for Finnish SMEs in the UAE.",
        conclusions: "Plans to further strengthen trade ties, building on the success of Expo 2020 Dubai and other bilateral initiatives to keep Finnish industry visible in the Gulf."
      },
      "Finnish Parliament": {
        title: "",
        affiliations: 3,
        departments: ["Third Party"],
        strategy: "",
        uaestatements: "",
        roleinrelations: "",
        bilaterals: "",
        alignandfriction: "",
        conclusions: ""
      },
      "Swedish Assembly of Finland": {
        title: "",
        affiliations: 1,
        departments: ["Third Party"],
        strategy: "",
        uaestatements: "",
        roleinrelations: "",
        bilaterals: "",
        alignandfriction: "",
        conclusions: ""
      },
      "Pargas City Executive": {
        title: "",
        affiliations: 1,
        departments: ["Third Party"],
        strategy: "",
        uaestatements: "",
        roleinrelations: "",
        bilaterals: "",
        alignandfriction: "",
        conclusions: ""
      },
      "Association of Finnish Municipalities": {
        title: "",
        affiliations: 1,
        departments: ["Third Party"],
        strategy: "",
        uaestatements: "",
        roleinrelations: "",
        bilaterals: "",
        alignandfriction: "",
        conclusions: ""
      },
      "Ministry of Education and Culture": {
        title: "",
        affiliations: 1,
        departments: ["Third Party"],
        strategy: "",
        uaestatements: "",
        roleinrelations: "",
        bilaterals: "",
        alignandfriction: "",
        conclusions: ""
      },
      "Åbo Akademi University": {
        title: "",
        affiliations: 1,
        departments: ["Third Party"],
        strategy: "",
        uaestatements: "",
        roleinrelations: "",
        bilaterals: "",
        alignandfriction: "",
        conclusions: ""
      },
      "City of Tampere": {
        title: "",
        affiliations: 1,
        departments: ["Third Party"],
        strategy: "",
        uaestatements: "",
        roleinrelations: "",
        bilaterals: "",
        alignandfriction: "",
        conclusions: ""
      },
      "Ministry of Finance": {
        title: "",
        affiliations: 1,
        departments: ["Third Party"],
        strategy: "",
        uaestatements: "",
        roleinrelations: "",
        bilaterals: "",
        alignandfriction: "",
        conclusions: ""
      },
      "Finnish Government": {
        title: "",
        affiliations: 1,
        departments: ["Third Party"],
        strategy: "",
        uaestatements: "",
        roleinrelations: "",
        bilaterals: "",
        alignandfriction: "",
        conclusions: ""
      },
      "World Happiness Council": {
        title: "",
        affiliations: 1,
        departments: ["Third Party"],
        strategy: "",
        uaestatements: "",
        roleinrelations: "",
        bilaterals: "",
        alignandfriction: "",
        conclusions: ""
      },
      "Finnish Embassy in Abu Dhabi": {
        title: "",
        affiliations: 1,
        departments: ["Third Party"],
        strategy: "",
        uaestatements: "",
        roleinrelations: "",
        bilaterals: "",
        alignandfriction: "",
        conclusions: ""
      },
      "Team Finland": {
        title: "",
        affiliations: 2,
        departments: ["Third Party"],
        strategy: "",
        uaestatements: "",
        roleinrelations: "",
        bilaterals: "",
        alignandfriction: "",
        conclusions: ""
      },
      "Anwar Gargash Diplomatic Academy": {
        title: "",
        affiliations: 1,
        departments: ["Third Party"],
        strategy: "",
        uaestatements: "",
        roleinrelations: "",
        bilaterals: "",
        alignandfriction: "",
        conclusions: ""
      },
      "Cabinet of the President of Finland": {
        title: "",
        affiliations: 1,
        departments: ["Third Party"],
        strategy: "",
        uaestatements: "",
        roleinrelations: "",
        bilaterals: "",
        alignandfriction: "",
        conclusions: ""
      },
      "Ministry for Foreign Affairs": {
        title: "",
        affiliations: 5,
        departments: ["Third Party"],
        strategy: "",
        uaestatements: "",
        roleinrelations: "",
        bilaterals: "",
        alignandfriction: "",
        conclusions: ""
      },
      "NATO": {
        title: "",
        affiliations: 1,
        departments: ["Third Party"],
        strategy: "",
        uaestatements: "",
        roleinrelations: "",
        bilaterals: "",
        alignandfriction: "",
        conclusions: ""
      },
      "Office of the President of Finland": {
        title: "",
        affiliations: 1,
        departments: ["Third Party"],
        strategy: "",
        uaestatements: "",
        roleinrelations: "",
        bilaterals: "",
        alignandfriction: "",
        conclusions: ""
      },
      "CMI – Martti Ahtisaari Peace Foundation": {
        title: "",
        affiliations: 1,
        departments: ["Third Party"],
        strategy: "",
        uaestatements: "",
        roleinrelations: "",
        bilaterals: "",
        alignandfriction: "",
        conclusions: ""
      },
      "UN Group of Friends of Mediation": {
        title: "",
        affiliations: 1,
        departments: ["Third Party"],
        strategy: "",
        uaestatements: "",
        roleinrelations: "",
        bilaterals: "",
        alignandfriction: "",
        conclusions: ""
      },
      "UN General Assembly": {
        title: "",
        affiliations: 1,
        departments: ["Third Party"],
        strategy: "",
        uaestatements: "",
        roleinrelations: "",
        bilaterals: "",
        alignandfriction: "",
        conclusions: ""
      },
      "Finnish Permanent Mission in Geneva": {
        title: "",
        affiliations: 1,
        departments: ["Third Party"],
        strategy: "",
        uaestatements: "",
        roleinrelations: "",
        bilaterals: "",
        alignandfriction: "",
        conclusions: ""
      },
      "Finnish Permanent Mission in New York": {
        title: "",
        affiliations: 1,
        departments: ["Third Party"],
        strategy: "",
        uaestatements: "",
        roleinrelations: "",
        bilaterals: "",
        alignandfriction: "",
        conclusions: ""
      },
      "Dubai Electricity and Water Authority (DEWA)": {
        title: "",
        affiliations: 1,
        departments: ["Third Party"],
        strategy: "",
        uaestatements: "",
        roleinrelations: "",
        bilaterals: "",
        alignandfriction: "",
        conclusions: ""
      },
      "GCC": {
        title: "",
        affiliations: 1,
        departments: ["Third Party"],
        strategy: "",
        uaestatements: "",
        roleinrelations: "",
        bilaterals: "",
        alignandfriction: "",
        conclusions: ""
      },
      "OIC": {
        title: "",
        affiliations: 1,
        departments: ["Third Party"],
        strategy: "",
        uaestatements: "",
        roleinrelations: "",
        bilaterals: "",
        alignandfriction: "",
        conclusions: ""
      },
      "KONE Corporation": {
        title: "",
        affiliations: 2,
        departments: ["Third Party"],
        strategy: "",
        uaestatements: "",
        roleinrelations: "",
        bilaterals: "",
        alignandfriction: "",
        conclusions: ""
      },
      "Nokia": {
        title: "",
        affiliations: 3,
        departments: ["Third Party"],
        strategy: "",
        uaestatements: "",
        roleinrelations: "",
        bilaterals: "",
        alignandfriction: "",
        conclusions: ""
      },
      "Hewlett Packard Enterprise": {
        title: "",
        affiliations: 1,
        departments: ["Third Party"],
        strategy: "",
        uaestatements: "",
        roleinrelations: "",
        bilaterals: "",
        alignandfriction: "",
        conclusions: ""
      },
      "UAE Ministry of AI": {
        title: "",
        affiliations: 1,
        departments: ["Third Party"],
        strategy: "",
        uaestatements: "",
        roleinrelations: "",
        bilaterals: "",
        alignandfriction: "",
        conclusions: ""
      },
      "Wärtsilä Corporation": {
        title: "",
        affiliations: 2,
        departments: ["Third Party"],
        strategy: "",
        uaestatements: "",
        roleinrelations: "",
        bilaterals: "",
        alignandfriction: "",
        conclusions: ""
      },
      "ADIPEC": {
        title: "",
        affiliations: 1,
        departments: ["Third Party"],
        strategy: "",
        uaestatements: "",
        roleinrelations: "",
        bilaterals: "",
        alignandfriction: "",
        conclusions: ""
      },
      "Ehrnrooth family": {
        title: "",
        affiliations: 1,
        departments: ["Third Party"],
        strategy: "",
        uaestatements: "",
        roleinrelations: "",
        bilaterals: "",
        alignandfriction: "",
        conclusions: ""
      },
      "Fiskars": {
        title: "",
        affiliations: 1,
        departments: ["Third Party"],
        strategy: "",
        uaestatements: "",
        roleinrelations: "",
        bilaterals: "",
        alignandfriction: "",
        conclusions: ""
      },
      "Pöyry/AFRY": {
        title: "",
        affiliations: 1,
        departments: ["Third Party"],
        strategy: "",
        uaestatements: "",
        roleinrelations: "",
        bilaterals: "",
        alignandfriction: "",
        conclusions: ""
      },
      "Sanoma Corporation": {
        title: "",
        affiliations: 2,
        departments: ["Third Party"],
        strategy: "",
        uaestatements: "",
        roleinrelations: "",
        bilaterals: "",
        alignandfriction: "",
        conclusions: ""
      },
      "Helsingin Sanomat": {
        title: "",
        affiliations: 2,
        departments: ["Third Party"],
        strategy: "",
        uaestatements: "",
        roleinrelations: "",
        bilaterals: "",
        alignandfriction: "",
        conclusions: ""
      },
      "Sampo Group": {
        title: "",
        affiliations: 1,
        departments: ["Third Party"],
        strategy: "",
        uaestatements: "",
        roleinrelations: "",
        bilaterals: "",
        alignandfriction: "",
        conclusions: ""
      },
      "Nordea Bank": {
        title: "",
        affiliations: 1,
        departments: ["Third Party"],
        strategy: "",
        uaestatements: "",
        roleinrelations: "",
        bilaterals: "",
        alignandfriction: "",
        conclusions: ""
      },
      "UPM-Kymmene": {
        title: "",
        affiliations: 1,
        departments: ["Third Party"],
        strategy: "",
        uaestatements: "",
        roleinrelations: "",
        bilaterals: "",
        alignandfriction: "",
        conclusions: ""
      },
      "Abu Dhabi Investment Authority (ADIA)": {
        title: "",
        affiliations: 1,
        departments: ["Third Party"],
        strategy: "",
        uaestatements: "",
        roleinrelations: "",
        bilaterals: "",
        alignandfriction: "",
        conclusions: ""
      },
      "Saxo Bank": {
        title: "",
        affiliations: 1,
        departments: ["Third Party"],
        strategy: "",
        uaestatements: "",
        roleinrelations: "",
        bilaterals: "",
        alignandfriction: "",
        conclusions: ""
      },
      "Finnish Confederation of Industries (EK)": {
        title: "",
        affiliations: 1,
        departments: ["Third Party"],
        strategy: "",
        uaestatements: "",
        roleinrelations: "",
        bilaterals: "",
        alignandfriction: "",
        conclusions: ""
      },
      "Finns Party": {
        title: "",
        affiliations: 1,
        departments: ["Third Party"],
        strategy: "",
        uaestatements: "",
        roleinrelations: "",
        bilaterals: "",
        alignandfriction: "",
        conclusions: ""
      },
      "Fiskars Group": {
        title: "",
        affiliations: 1,
        departments: ["Third Party"],
        strategy: "",
        uaestatements: "",
        roleinrelations: "",
        bilaterals: "",
        alignandfriction: "",
        conclusions: ""
      },
      "Iittala": {
        title: "",
        affiliations: 1,
        departments: ["Third Party"],
        strategy: "",
        uaestatements: "",
        roleinrelations: "",
        bilaterals: "",
        alignandfriction: "",
        conclusions: ""
      },
      "Royal Copenhagen": {
        title: "",
        affiliations: 1,
        departments: ["Third Party"],
        strategy: "",
        uaestatements: "",
        roleinrelations: "",
        bilaterals: "",
        alignandfriction: "",
        conclusions: ""
      },
      "Expo 2020 Dubai": {
        title: "",
        affiliations: 2,
        departments: ["Third Party"],
        strategy: "",
        uaestatements: "",
        roleinrelations: "",
        bilaterals: "",
        alignandfriction: "",
        conclusions: ""
      },
      "ISKU": {
        title: "",
        affiliations: 1,
        departments: ["Third Party"],
        strategy: "",
        uaestatements: "",
        roleinrelations: "",
        bilaterals: "",
        alignandfriction: "",
        conclusions: ""
      },
      "Finnish Business Council in Dubai": {
        title: "",
        affiliations: 1,
        departments: ["Third Party"],
        strategy: "",
        uaestatements: "",
        roleinrelations: "",
        bilaterals: "",
        alignandfriction: "",
        conclusions: ""
      },
      "Business Finland": {
        title: "",
        affiliations: 1,
        departments: ["Third Party"],
        strategy: "",
        uaestatements: "",
        roleinrelations: "",
        bilaterals: "",
        alignandfriction: "",
        conclusions: ""
      },
      "Fortum": {
        title: "",
        affiliations: 1,
        departments: ["Third Party"],
        strategy: "",
        uaestatements: "",
        roleinrelations: "",
        bilaterals: "",
        alignandfriction: "",
        conclusions: ""
      },
      "Finland Chamber of Commerce (FCC)": {
        title: "",
        affiliations: 1,
        departments: ["Third Party"],
        strategy: "",
        uaestatements: "",
        roleinrelations: "",
        bilaterals: "",
        alignandfriction: "",
        conclusions: ""
      },
      "UAE-Finland Business Council": {
        title: "",
        affiliations: 1,
        departments: ["Third Party"],
        strategy: "",
        uaestatements: "",
        roleinrelations: "",
        bilaterals: "",
        alignandfriction: "",
        conclusions: ""
      }
    }
    
  };




  useEffect(() => {
    if (!svgRef.current) return;
    
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();
    
    const width = 800;
    const height = 2200;
    
    // Position nodes in departments
    let yPos = 50;
    
    // Group nodes by department
    const nodesByDepartment = {};
    data.departments.forEach(dept => {
      nodesByDepartment[dept] = data.nodes.filter(node => node.department === dept);
    });
    
    // Set fixed positions
    data.departments.forEach(dept => {
      // Add department label position
      const labelY = yPos;
      yPos += 30;
      
      // Position nodes in this department
      nodesByDepartment[dept].forEach((node, i) => {
        node.fx = 350;
        node.fy = yPos + (i * 24);
      });
      
      yPos += (nodesByDepartment[dept].length * 24) + 50;
    });
    
    // Add department labels
    const departmentLabels = svg.append("g")
      .selectAll(".dept-label")
      .data(data.departments)
      .enter()
      .append("text")
      .attr("class", "dept-label")
      .text(d => d)
      .attr("x", 100)
      .attr("font-weight", "bold")
      .attr("font-size", 16)
      .style("fill", "#333");
    
    // Position department labels
    let labelY = 50;
    departmentLabels.each(function(d) {
      d3.select(this).attr("y", labelY);
      labelY += (nodesByDepartment[d].length * 24) + 80;
    });
    

      // Filter out links with missing nodes
      const filteredLinks = data.links.filter(link =>
        data.nodes.find(n => n.id === link.source) && data.nodes.find(n => n.id === link.target)
      );

      // Create links using the filtered data
      const link = svg.append("g")
        .selectAll("path")
        .data(filteredLinks)
        .enter()
        .append("path")
        .attr("stroke", d => {
          const sourceNode = data.nodes.find(n => n.id === d.source);
          const targetNode = data.nodes.find(n => n.id === d.target);
          if (sourceNode.department === targetNode.department) {
            return departmentColors[sourceNode.department];
          }
          return "#ccc";
        })





      .attr("stroke-opacity", 0.4)
      .attr("stroke-width", d => Math.max(1, d.value * 0.5))
      .attr("fill", "none")
      .attr("d", d => {
        const sourceNode = data.nodes.find(n => n.id === d.source);
        const targetNode = data.nodes.find(n => n.id === d.target);
        if (!sourceNode || !targetNode) return "";
        
        // Get coordinates
        const sourceX = sourceNode.fx;
        const sourceY = sourceNode.fy;
        const targetX = targetNode.fx;
        const targetY = targetNode.fy;
        
        // Create curved path with wide arc
        const controlX = Math.max(sourceX, targetX) + 600;
        const controlY = (sourceY + targetY) / 2;
        
        return `M${sourceX},${sourceY} Q${controlX},${controlY} ${targetX},${targetY}`;
      });
    
    // Create nodes
    const node = svg.append("g")
      .selectAll(".node")
      .data(data.nodes)
      .enter()
      .append("g")
      .attr("class", "node")
      .attr("transform", d => `translate(${d.fx},${d.fy})`)
      .on("mouseover", function(event, d) {
        // Highlight connections
        link.style("stroke-opacity", l => {
          if (l.source === d.id || l.target === d.id) {
            return 1;
          } else {
            return 0.1;
          }
        })
        .style("stroke", l => {
          if (l.source === d.id || l.target === d.id) {
            return "#000"; // Black for highlighted connections
          } else {
            const sourceNode = data.nodes.find(n => n.id === l.source);
            const targetNode = data.nodes.find(n => n.id === l.target);
            if (sourceNode.department === targetNode.department) {
              return departmentColors[sourceNode.department];
            }
            return "#ccc";
          }
        })
        .style("stroke-width", l => {
          if (l.source === d.id || l.target === d.id) {
            return Math.max(2, l.value * 0.8);
          } else {
            return Math.max(0.5, l.value * 0.3);
          }
        });

      })





      .on("mouseout", function() {
        // Reset links
        link.style("stroke-opacity", 0.4)
          .style("stroke-width", d => Math.max(1, d.value * 0.5))
          .style("stroke", d => {
            const sourceNode = data.nodes.find(n => n.id === d.source);
            const targetNode = data.nodes.find(n => n.id === d.target);
            if (sourceNode && targetNode && sourceNode.department === targetNode.department) {
              return departmentColors[sourceNode.department];
            }
            return "#ccc";
          });
        

      })
      


      .on("click", function(event, d) {
        setSelectedFaculty(d);
      });
    
    // Add circles to nodes
    node.append("circle")
      .attr("r", d => Math.max(5, Math.min(10, d.collaborations * 0.5)))
      .attr("fill", d => departmentColors[d.department])
      .attr("stroke", "#fff")
      .attr("stroke-width", 1.5);
    
    // Add node labels
    node.append("text")
      .text(d => d.id)
      .attr("x", -14)
      .attr("y", 4)
      .attr("text-anchor", "end")
      .style("font-size", 12)
      .style("pointer-events", "none");
    
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Finnish Leadership Affiliations</h1>
      
    {/* HOW TO USE BOX SNIPPET */}
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
      <h2 className="text-xl font-semibold text-blue-800 mb-2">How to Use</h2>
      <p className="text-gray-700 mb-3">
        This network visualisation shows Finnish leaders, their affiliations, and how they collaborate. Hover over or click on nodes to explore their links and see more details on the right.
      </p>
      <ul className="list-disc list-inside text-gray-700 space-y-1">
        <li>Hover over a node to highlight its connections.</li>
        <li>Click on a node to view its profile in the panel on the right.</li>
        <li>Scroll through the diagram to explore all connections.</li>
        <li>Click another node (or outside) to reset highlighting.</li>
      </ul>
    </div>
    {/* END HOW TO USE BOX SNIPPET */}






      {/* Main content area with the network visualization and profile */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Network visualization container - takes up left 2/3 */}
        <div className="w-full md:w-3/5 bg-white rounded-lg shadow-md">          
          {/* Network visualization container with fixed height */}
          <div className="border border-gray-200 rounded-lg bg-white relative" style={{ height: '2200px' }}>
            <svg ref={svgRef} width="100%" height="2200px" />
            <div ref={tooltipRef} className="absolute hidden bg-white border border-gray-300 shadow-lg p-3 rounded-lg text-sm" />
          </div>
        </div>
        
        {/* Faculty profile panel - takes up right 1/3 */}
        <div className="w-full md:w-2/5">
          {selectedFaculty ? (
            <div className="flex flex-col gap-6" style={{ height: '950px' }}>



{/* Faculty profile card */}
<div className="bg-white rounded-lg shadow-md p-6">
  <h2 className="text-2xl font-bold text-blue-700 mb-2">{selectedFaculty.id}</h2>
  {data.profiles[selectedFaculty.id] && (
    <p className="text-gray-600 mb-6">
      {data.profiles[selectedFaculty.id].title}
    </p>
  )}

  <h3 className="text-xl font-semibold text-gray-700 uppercase mb-2">
    AFFILIATIONS
  </h3>
  <p className="text-gray-600 mb-6">
    {selectedFaculty.collaborations} total affiliations
  </p>

  <div className="mb-6">
    <h3 className="text-xl font-semibold text-gray-700 uppercase mb-2">
      SECTOR
    </h3>
    <div className="flex items-center">
      <span
        className="w-4 h-4 rounded-full mr-2"
        style={{ backgroundColor: departmentColors[selectedFaculty.department] }}
      />
      <span className="text-gray-600">{selectedFaculty.department}</span>
    </div>
  </div>

  {/* Render new fields only for Government or Business departments */}
  {(selectedFaculty.department === "Government" ||
    selectedFaculty.department === "Business") && (
    <>
      {/* Strategic Positioning */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-700 uppercase mb-2">
          Strategic Positioning
        </h3>
        <p className="text-gray-600 mb-6">
          {data.profiles[selectedFaculty.id].strategy}
        </p>
      </div>

      {/* UAE-Related Statements */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-700 uppercase mb-2">
          UAE-Related Statements
        </h3>
        <p className="text-gray-600 mb-6">
          {data.profiles[selectedFaculty.id].uaestatements}
        </p>
      </div>

      {/* Role in UAE Relations */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-700 uppercase mb-2">
          Role in UAE Relations
        </h3>
        <p className="text-gray-600 mb-6">
          {data.profiles[selectedFaculty.id].roleinrelations}
        </p>
      </div>

      {/* Bilateral Agreements */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-700 uppercase mb-2">
          Bilateral Agreements
        </h3>
        <p className="text-gray-600 mb-6">
          {data.profiles[selectedFaculty.id].bilaterals}
        </p>
      </div>

      {/* Alignment & Friction */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-700 uppercase mb-2">
          Alignment & Friction
        </h3>
        <p className="text-gray-600 mb-6">
          {data.profiles[selectedFaculty.id].alignandfriction}
        </p>
      </div>

      {/* Conclusion/Outlook */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-700 uppercase mb-2">
          Conclusion/Outlook
        </h3>
        <p className="text-gray-600 mb-6">
          {data.profiles[selectedFaculty.id].conclusions}
        </p>
      </div>
    </>
  )}

  {/* <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg transition-colors hover:bg-blue-700">
    View Full Profile
  </button> */}
</div>


              {/* NEW: Research Network graph */}
              <div className="flex-grow">
                <MinisterNetwork selectedFaculty={selectedFaculty} />
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <p className="text-gray-600">Click on a faculty member to view their profile and collaboration details</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FacultyNetwork;



