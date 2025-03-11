// import React, { useState, useEffect, useRef } from 'react';
// import * as d3 from 'd3';

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
//     const height = 1200;
    
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
//         node.fx = 150;
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
//         const tooltip = d3.select(tooltipRef.current);
//         tooltip.style("display", "block")
//           .html(`
//             <div>
//               <strong>${d.id}</strong><br/>
//               ${d.collaborations} collaborations<br/>
//               Click for more information
//             </div>
//           `)
//           .style("left", (event.pageX + 10) + "px")
//           .style("top", (event.pageY - 20) + "px");
//       })
//       .on("mouseout", function() {
//         // Reset links
//         link.style("stroke-opacity", 0.4)
//           .style("stroke-width", d => Math.max(1, d.value * 0.5))
//           .style("stroke", d => {
//             const sourceNode = data.nodes.find(n => n.id === d.source);
//             const targetNode = data.nodes.find(n => n.id === d.target);
//             if (sourceNode.department === targetNode.department) {
//               return departmentColors[sourceNode.department];
//             }
//             return "#ccc";
//           });
        
//         // Hide tooltip
//         d3.select(tooltipRef.current).style("display", "none");
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
//           {/* Network visualization container */}
//           <div className="border border-gray-200 rounded-lg bg-white relative overflow-auto" style={{ height: '900px' }}>
//             <svg ref={svgRef} width="100%" height="2000" />
//             <div ref={tooltipRef} className="absolute hidden bg-white border border-gray-300 shadow-lg p-3 rounded-lg text-sm" />
//           </div>
//         </div>
        
//         {/* Faculty profile panel - takes up right 1/3 */}
//         <div className="w-full md:w-2/5">
//           {selectedFaculty ? (
//             <div className="bg-white rounded-lg shadow-md p-6">
//               <h2 className="text-2xl font-bold text-blue-700 mb-2">{selectedFaculty.id}</h2>
//               {data.profiles[selectedFaculty.id] && (
//                 <p className="text-gray-600 mb-6">{data.profiles[selectedFaculty.id].title}</p>
//               )}
              
//               <h3 className="text-xl font-semibold text-gray-700 uppercase mb-2">COLLABORATIONS</h3>
//               <p className="text-gray-600 mb-6">{selectedFaculty.collaborations} total collaborations</p>
              
//               <div className="mb-6">
//                 <h4 className="font-semibold text-gray-700 mb-3">Department</h4>
//                 <div className="flex items-center">
//                   <span 
//                     className="w-4 h-4 rounded-full mr-2" 
//                     style={{ backgroundColor: departmentColors[selectedFaculty.department] }}
//                   />
//                   <span className="text-gray-600">{selectedFaculty.department}</span>
//                 </div>
//               </div>
              
//               <div className="pt-4 border-t border-gray-200">
//                 <h4 className="font-semibold text-gray-700 mb-4">Research Areas</h4>
//                 <div className="flex flex-wrap gap-2">
//                   <span className="bg-blue-50 text-blue-700 rounded-full px-3 py-1 text-sm font-medium">
//                     Research
//                   </span>
//                   <span className="bg-green-50 text-green-700 rounded-full px-3 py-1 text-sm font-medium">
//                     Faculty
//                   </span>
//                   {selectedFaculty.collaborations > 15 && (
//                     <span className="bg-purple-50 text-purple-700 rounded-full px-3 py-1 text-sm font-medium">
//                       Highly Collaborative
//                     </span>
//                   )}
//                 </div>
//               </div>
              
//               <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg transition-colors hover:bg-blue-700">
//                 View Full Profile
//               </button>
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
//     const height = 1200;
    
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
//         node.fx = 150;
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
//         const tooltip = d3.select(tooltipRef.current);
//         tooltip.style("display", "block")
//           .html(`
//             <div>
//               <strong>${d.id}</strong><br/>
//               ${d.collaborations} collaborations<br/>
//               Click for more information
//             </div>
//           `)
//           .style("left", (event.pageX + 10) + "px")
//           .style("top", (event.pageY - 20) + "px");
//       })
//       .on("mouseout", function() {
//         // Reset links
//         link.style("stroke-opacity", 0.4)
//           .style("stroke-width", d => Math.max(1, d.value * 0.5))
//           .style("stroke", d => {
//             const sourceNode = data.nodes.find(n => n.id === d.source);
//             const targetNode = data.nodes.find(n => n.id === d.target);
//             if (sourceNode.department === targetNode.department) {
//               return departmentColors[sourceNode.department];
//             }
//             return "#ccc";
//           });
        
//         // Hide tooltip
//         d3.select(tooltipRef.current).style("display", "none");
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
//           {/* Network visualization container - now without overflow scroll */}
//           <div className="border border-gray-200 rounded-lg bg-white relative" style={{ height: 'auto' }}>
//             <svg ref={svgRef} width="100%" height="2000" />
//             <div ref={tooltipRef} className="absolute hidden bg-white border border-gray-300 shadow-lg p-3 rounded-lg text-sm" />
//           </div>
//         </div>
        
//         {/* Faculty profile panel - takes up right 1/3 */}
//         <div className="w-full md:w-2/5">
//           {selectedFaculty ? (
//             <div className="bg-white rounded-lg shadow-md p-6">
//               <h2 className="text-2xl font-bold text-blue-700 mb-2">{selectedFaculty.id}</h2>
//               {data.profiles[selectedFaculty.id] && (
//                 <p className="text-gray-600 mb-6">{data.profiles[selectedFaculty.id].title}</p>
//               )}
              
//               <h3 className="text-xl font-semibold text-gray-700 uppercase mb-2">COLLABORATIONS</h3>
//               <p className="text-gray-600 mb-6">{selectedFaculty.collaborations} total collaborations</p>
              
//               <div className="mb-6">
//                 <h4 className="font-semibold text-gray-700 mb-3">Department</h4>
//                 <div className="flex items-center">
//                   <span 
//                     className="w-4 h-4 rounded-full mr-2" 
//                     style={{ backgroundColor: departmentColors[selectedFaculty.department] }}
//                   />
//                   <span className="text-gray-600">{selectedFaculty.department}</span>
//                 </div>
//               </div>
              
//               <div className="pt-4 border-t border-gray-200">
//                 <h4 className="font-semibold text-gray-700 mb-4">Research Areas</h4>
//                 <div className="flex flex-wrap gap-2">
//                   <span className="bg-blue-50 text-blue-700 rounded-full px-3 py-1 text-sm font-medium">
//                     Research
//                   </span>
//                   <span className="bg-green-50 text-green-700 rounded-full px-3 py-1 text-sm font-medium">
//                     Faculty
//                   </span>
//                   {selectedFaculty.collaborations > 15 && (
//                     <span className="bg-purple-50 text-purple-700 rounded-full px-3 py-1 text-sm font-medium">
//                       Highly Collaborative
//                     </span>
//                   )}
//                 </div>
//               </div>
              
//               <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg transition-colors hover:bg-blue-700">
//                 View Full Profile
//               </button>
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















import React, { useState, useEffect, useRef } from 'react';
import * as d3 from 'd3';

const FacultyNetwork = () => {
  const svgRef = useRef(null);
  const tooltipRef = useRef(null);
  const [selectedFaculty, setSelectedFaculty] = useState(null);
  
  // Department colors
  const departmentColors = {
    "Applied Physics": "#C9E175",
    "Environmental Science": "#8DD3C7",
    "Applied Mathematics": "#80B1D3",
    "Computer Science": "#6A92CC",
    "Materials Science": "#D18ADB",
    "Bioengineering": "#FDB462"
  };
  
  // Simplified data structure
  const data = {
    departments: [
      "Applied Physics", 
      "Environmental Science", 
      "Applied Mathematics",
      "Materials Science", 
      "Bioengineering"
    ],
    nodes: [
      { id: "David A. Weitz", department: "Applied Physics", collaborations: 19 },
      { id: "Vinothan N. Manoharan", department: "Applied Physics", collaborations: 10 },
      { id: "David R. Nelson", department: "Applied Physics", collaborations: 10 },
      { id: "Sharad Ramanathan", department: "Applied Physics", collaborations: 11 },
      { id: "Robert M. Westervelt", department: "Applied Physics", collaborations: 7 },
      { id: "Lene V. Hau", department: "Applied Physics", collaborations: 5 },
      
      { id: "Steven C. Wofsy", department: "Environmental Science", collaborations: 11 },
      { id: "Jerry X. Mitrovica", department: "Environmental Science", collaborations: 8 },
      
      { id: "L Mahadevan", department: "Applied Mathematics", collaborations: 15 },
      { id: "Michael P. Brenner", department: "Applied Mathematics", collaborations: 13 },
      
      { id: "Joanna Aizenberg", department: "Materials Science", collaborations: 18 },
      { id: "Katia Bertoldi", department: "Materials Science", collaborations: 12 },
      { id: "Frans A. Spaepen", department: "Materials Science", collaborations: 9 },
      { id: "Zhigang Suo", department: "Materials Science", collaborations: 14 },
      { id: "Conor J Walsh", department: "Materials Science", collaborations: 11 },
      { id: "Michael J. Aziz", department: "Materials Science", collaborations: 10 },
      { id: "Xin Li", department: "Materials Science", collaborations: 8 },
      
      { id: "Don Ingber", department: "Bioengineering", collaborations: 16 },
      { id: "Jennifer Lewis", department: "Bioengineering", collaborations: 14 },
      { id: "David Mooney", department: "Bioengineering", collaborations: 15 },
      { id: "Kit Parker", department: "Bioengineering", collaborations: 12 },
      { id: "Jia Liu", department: "Bioengineering", collaborations: 9 }
    ],
    links: [
      { source: "David A. Weitz", target: "Joanna Aizenberg", value: 5 },
      { source: "David A. Weitz", target: "Vinothan N. Manoharan", value: 7 },
      { source: "David A. Weitz", target: "David R. Nelson", value: 4 },
      { source: "David A. Weitz", target: "Sharad Ramanathan", value: 3 },
      { source: "David A. Weitz", target: "Robert M. Westervelt", value: 2 },
      { source: "David A. Weitz", target: "Lene V. Hau", value: 1 },
      { source: "David A. Weitz", target: "Don Ingber", value: 3 },
      { source: "David A. Weitz", target: "Jennifer Lewis", value: 4 },
      { source: "David A. Weitz", target: "David Mooney", value: 2 },
      { source: "David A. Weitz", target: "Kit Parker", value: 1 },
      { source: "David A. Weitz", target: "Jia Liu", value: 1 },
      { source: "David A. Weitz", target: "Steven C. Wofsy", value: 1 },
      { source: "David A. Weitz", target: "Jerry X. Mitrovica", value: 1 },
      { source: "David A. Weitz", target: "L Mahadevan", value: 4 },
      { source: "David A. Weitz", target: "Michael P. Brenner", value: 3 },
      
      { source: "Steven C. Wofsy", target: "Jerry X. Mitrovica", value: 2 },
      { source: "L Mahadevan", target: "Michael P. Brenner", value: 6 },
      
      { source: "Joanna Aizenberg", target: "Katia Bertoldi", value: 3 },
      { source: "Joanna Aizenberg", target: "Frans A. Spaepen", value: 2 },
      { source: "Joanna Aizenberg", target: "Zhigang Suo", value: 4 },
      { source: "Joanna Aizenberg", target: "Conor J Walsh", value: 2 },
      { source: "Joanna Aizenberg", target: "Michael J. Aziz", value: 3 },
      { source: "Joanna Aizenberg", target: "Xin Li", value: 1 },
      { source: "Joanna Aizenberg", target: "Don Ingber", value: 4 },
      { source: "Joanna Aizenberg", target: "Jennifer Lewis", value: 5 },
      
      { source: "Don Ingber", target: "David Mooney", value: 7 },
      { source: "Jennifer Lewis", target: "David Mooney", value: 5 }
    ],
    profiles: {
      "David A. Weitz": {
        title: "Professor of Physics and Applied Physics",
        collaborations: 19,
        departments: ["Applied Physics", "Materials Science", "Bioengineering"]
      },
      "Joanna Aizenberg": {
        title: "Amy Smith Berylson Professor of Materials Science",
        collaborations: 18,
        departments: ["Materials Science", "Bioengineering"]
      },
      "Steven C. Wofsy": {
        title: "Professor of Environmental Science",
        collaborations: 11,
        departments: ["Environmental Science"]
      }
    }
  };

  useEffect(() => {
    if (!svgRef.current) return;
    
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();
    
    const width = 800;
    const height = 1000;
    
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
        node.fx = 300;
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
    
    // Create links
    const link = svg.append("g")
      .selectAll("path")
      .data(data.links)
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
        
        // Show tooltip
        // const tooltip = d3.select(tooltipRef.current);
        // tooltip.style("display", "block")
        //   .html(`
        //     <div>
        //       <strong>${d.id}</strong><br/>
        //       ${d.collaborations} collaborations<br/>
        //       Click for more information
        //     </div>
        //   `)
        //   .style("left", (event.pageX + 10) + "px")
        //   .style("top", (event.pageY - 20) + "px");
      })
      .on("mouseout", function() {
        // Reset links
        link.style("stroke-opacity", 0.4)
          .style("stroke-width", d => Math.max(1, d.value * 0.5))
          .style("stroke", d => {
            const sourceNode = data.nodes.find(n => n.id === d.source);
            const targetNode = data.nodes.find(n => n.id === d.target);
            if (sourceNode.department === targetNode.department) {
              return departmentColors[sourceNode.department];
            }
            return "#ccc";
          });
        
        // Hide tooltip
        // d3.select(tooltipRef.current).style("display", "none");
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
      <h1 className="text-3xl font-bold text-blue-700 mb-6">FACULTY COLLABORATIONS</h1>
      
      {/* Main content area with the network visualization and profile */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Network visualization container - takes up left 2/3 */}
        <div className="w-full md:w-3/5 bg-white rounded-lg shadow-md">          
          {/* Network visualization container with fixed height */}
          <div className="border border-gray-200 rounded-lg bg-white relative" style={{ height: '1000px' }}>
            <svg ref={svgRef} width="100%" height="1000px" />
            <div ref={tooltipRef} className="absolute hidden bg-white border border-gray-300 shadow-lg p-3 rounded-lg text-sm" />
          </div>
        </div>
        
        {/* Faculty profile panel - takes up right 1/3 */}
        <div className="w-full md:w-2/5">
          {selectedFaculty ? (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-blue-700 mb-2">{selectedFaculty.id}</h2>
              {data.profiles[selectedFaculty.id] && (
                <p className="text-gray-600 mb-6">{data.profiles[selectedFaculty.id].title}</p>
              )}
              
              <h3 className="text-xl font-semibold text-gray-700 uppercase mb-2">COLLABORATIONS</h3>
              <p className="text-gray-600 mb-6">{selectedFaculty.collaborations} total collaborations</p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-700 mb-3">Department</h4>
                <div className="flex items-center">
                  <span 
                    className="w-4 h-4 rounded-full mr-2" 
                    style={{ backgroundColor: departmentColors[selectedFaculty.department] }}
                  />
                  <span className="text-gray-600">{selectedFaculty.department}</span>
                </div>
              </div>
              
              <div className="pt-4 border-t border-gray-200">
                <h4 className="font-semibold text-gray-700 mb-4">Research Areas</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-50 text-blue-700 rounded-full px-3 py-1 text-sm font-medium">
                    Research
                  </span>
                  <span className="bg-green-50 text-green-700 rounded-full px-3 py-1 text-sm font-medium">
                    Faculty
                  </span>
                  {selectedFaculty.collaborations > 15 && (
                    <span className="bg-purple-50 text-purple-700 rounded-full px-3 py-1 text-sm font-medium">
                      Highly Collaborative
                    </span>
                  )}
                </div>
              </div>
              
              <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg transition-colors hover:bg-blue-700">
                View Full Profile
              </button>
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