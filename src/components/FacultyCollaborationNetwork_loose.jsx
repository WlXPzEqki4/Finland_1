import React, { useState, useEffect, useRef } from 'react';
import * as d3 from 'd3';

const FacultyCollaborationNetwork = () => {
  const svgRef = useRef(null);
  const tooltipRef = useRef(null);
  const [selectedFaculty, setSelectedFaculty] = useState(null);
  const [highlightedDepartment, setHighlightedDepartment] = useState(null);
  
  // Define department colors
  const departmentColors = {
    "Applied Physics": "#C9E175",
    "Environmental Science & Engineering": "#8DD3C7",
    "Applied Mathematics": "#80B1D3",
    "Computer Science": "#6A92CC",
    "Materials Science & Mechanical Engineering": "#D18ADB",
    "Bioengineering": "#FDB462"
  };

  // Faculty data structure
  const facultyData = {
    nodes: [
      // Applied Physics
      { id: "David A. Weitz", department: "Applied Physics", collaborations: 19, title: "Professor of Physics" },
      { id: "Federico Capasso", department: "Applied Physics", collaborations: 12, title: "Professor of Applied Physics" },
      { id: "Philip Kim", department: "Applied Physics", collaborations: 8, title: "Professor of Physics and Applied Physics" },
      { id: "Amir Yacoby", department: "Applied Physics", collaborations: 9, title: "Professor of Physics and Applied Physics" },
      { id: "Eric Mazur", department: "Applied Physics", collaborations: 11, title: "Professor of Physics" },
      { id: "Robert M. Westervelt", department: "Applied Physics", collaborations: 7, title: "Professor of Physics and Applied Physics" },
      { id: "Vinothan N. Manoharan", department: "Applied Physics", collaborations: 10, title: "Professor of Chemical Engineering and Physics" },
      { id: "Doeke Romke Hekstra", department: "Applied Physics", collaborations: 6, title: "Assistant Professor of Physics" },
      { id: "Julia A. Mundy", department: "Applied Physics", collaborations: 8, title: "Assistant Professor of Physics" },
      { id: "David R. Nelson", department: "Applied Physics", collaborations: 10, title: "Professor of Physics and Applied Physics" },
      { id: "Jenny Hoffman", department: "Applied Physics", collaborations: 7, title: "Professor of Physics and Applied Physics" },
      { id: "Donhee Ham", department: "Applied Physics", collaborations: 9, title: "Professor of Applied Physics" },
      { id: "Venkatesh Narayanamurti", department: "Applied Physics", collaborations: 8, title: "Professor of Applied Physics" },
      { id: "Sharad Ramanathan", department: "Applied Physics", collaborations: 11, title: "Professor of Applied Physics" },
      { id: "Daniel Needleman", department: "Applied Physics", collaborations: 6, title: "Professor of Applied Physics" },
      { id: "Lene V. Hau", department: "Applied Physics", collaborations: 5, title: "Professor of Physics and Applied Physics" },
      { id: "Maxim Prigozhin", department: "Applied Physics", collaborations: 4, title: "Assistant Professor of Applied Physics" },
      { id: "Zachary Schiffer", department: "Applied Physics", collaborations: 3, title: "Assistant Professor of Physics" },
      
      // Environmental Science & Engineering
      { id: "Steven C. Wofsy", department: "Environmental Science & Engineering", collaborations: 11, title: "Professor of Environmental Science" },
      { id: "Daniel Jacob", department: "Environmental Science & Engineering", collaborations: 12, title: "Professor of Environmental Science" },
      { id: "Daniel P. Schrag", department: "Environmental Science & Engineering", collaborations: 9, title: "Professor of Environmental Science" },
      { id: "Frank N. Keutsch", department: "Environmental Science & Engineering", collaborations: 8, title: "Professor of Chemistry and Environmental Science" },
      { id: "Peter John Huybers", department: "Environmental Science & Engineering", collaborations: 7, title: "Professor of Environmental Science" },
      { id: "Elsie M. Sunderland", department: "Environmental Science & Engineering", collaborations: 10, title: "Professor of Environmental Science" },
      { id: "Jerry X. Mitrovica", department: "Environmental Science & Engineering", collaborations: 8, title: "Professor of Environmental Science" },
      
      // Applied Mathematics
      { id: "Petros Koumoutsakos", department: "Applied Mathematics", collaborations: 14, title: "Professor of Applied Mathematics" },
      { id: "Efthimios Kaxiras", department: "Applied Mathematics", collaborations: 11, title: "Professor of Applied Physics and Mathematics" },
      { id: "L Mahadevan", department: "Applied Mathematics", collaborations: 15, title: "Professor of Applied Mathematics" },
      { id: "Cengiz Pehlevan", department: "Applied Mathematics", collaborations: 9, title: "Assistant Professor of Applied Mathematics" },
      { id: "Michael P. Brenner", department: "Applied Mathematics", collaborations: 13, title: "Professor of Applied Mathematics" },
      { id: "Eli Tziperman", department: "Applied Mathematics", collaborations: 8, title: "Professor of Oceanography and Applied Mathematics" },
      
      // Materials Science & Mechanical Engineering
      { id: "Joanna Aizenberg", department: "Materials Science & Mechanical Engineering", collaborations: 18, title: "Amy Smith Berylson Professor of Materials Science" },
      { id: "Katia Bertoldi", department: "Materials Science & Mechanical Engineering", collaborations: 12, title: "Professor of Materials Science" },
      { id: "Frans A. Spaepen", department: "Materials Science & Mechanical Engineering", collaborations: 9, title: "Professor of Materials Science" },
      { id: "Zhigang Suo", department: "Materials Science & Mechanical Engineering", collaborations: 14, title: "Professor of Materials Science" },
      { id: "Conor J Walsh", department: "Materials Science & Mechanical Engineering", collaborations: 11, title: "Professor of Mechanical Engineering" },
      { id: "Michael J. Aziz", department: "Materials Science & Mechanical Engineering", collaborations: 10, title: "Professor of Materials Science" },
      { id: "Xin Li", department: "Materials Science & Mechanical Engineering", collaborations: 8, title: "Associate Professor of Materials Science" },
      
      // Bioengineering
      { id: "Don Ingber", department: "Bioengineering", collaborations: 16, title: "Professor of Bioengineering" },
      { id: "Jennifer Lewis", department: "Bioengineering", collaborations: 14, title: "Professor of Bioengineering" },
      { id: "David Mooney", department: "Bioengineering", collaborations: 15, title: "Professor of Bioengineering" },
      { id: "Kit Parker", department: "Bioengineering", collaborations: 12, title: "Professor of Bioengineering" },
      { id: "Jia Liu", department: "Bioengineering", collaborations: 9, title: "Assistant Professor of Bioengineering" }
    ],
    // Collaboration links
    links: [
      // David A. Weitz collaborations
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
      
      // Steven C. Wofsy collaborations
      { source: "Steven C. Wofsy", target: "Daniel Jacob", value: 6 },
      { source: "Steven C. Wofsy", target: "Daniel P. Schrag", value: 5 },
      { source: "Steven C. Wofsy", target: "Frank N. Keutsch", value: 4 },
      { source: "Steven C. Wofsy", target: "Peter John Huybers", value: 3 },
      { source: "Steven C. Wofsy", target: "Elsie M. Sunderland", value: 2 },
      { source: "Steven C. Wofsy", target: "Jerry X. Mitrovica", value: 2 },
      
      // Joanna Aizenberg collaborations
      { source: "Joanna Aizenberg", target: "Katia Bertoldi", value: 3 },
      { source: "Joanna Aizenberg", target: "Frans A. Spaepen", value: 2 },
      { source: "Joanna Aizenberg", target: "Zhigang Suo", value: 4 },
      { source: "Joanna Aizenberg", target: "Conor J Walsh", value: 2 },
      { source: "Joanna Aizenberg", target: "Michael J. Aziz", value: 3 },
      { source: "Joanna Aizenberg", target: "Xin Li", value: 1 },
      { source: "Joanna Aizenberg", target: "Don Ingber", value: 4 },
      { source: "Joanna Aizenberg", target: "Jennifer Lewis", value: 5 },
      
      // Add more links as needed to represent collaborations
      { source: "L Mahadevan", target: "Michael P. Brenner", value: 6 },
      { source: "Federico Capasso", target: "Eric Mazur", value: 3 },
      { source: "Philip Kim", target: "Amir Yacoby", value: 5 },
      
      // Add more connections for realistic network density
      { source: "Vinothan N. Manoharan", target: "L Mahadevan", value: 2 },
      { source: "Efthimios Kaxiras", target: "Michael P. Brenner", value: 3 },
      { source: "Don Ingber", target: "David Mooney", value: 7 },
      { source: "Jennifer Lewis", target: "David Mooney", value: 5 },
      { source: "Daniel Jacob", target: "Frank N. Keutsch", value: 4 }
    ],
    // Faculty profile data for sidebar display
    profiles: {
      "Joanna Aizenberg": {
        title: "Amy Smith Berylson Professor of Materials Science and Professor of Chemistry",
        affiliations: [
          "Faculty Associate, Harvard University Center for the Environment",
          "Faculty Associate, Harvard Microbial Sciences Initiative",
          "Participant, Materials Research Science and Engineering Center"
        ],
        collaborationsByDepartment: {
          "Applied Mathematics": true,
          "Bioengineering": true,
          "Materials Science & Mechanical Engineering": true,
          "Applied Physics": true,
          "Environmental Science & Engineering": true,
          "Electrical Engineering": true
        },
        facultyPage: "https://example.com/faculty/aizenberg"
      },
      "David A. Weitz": {
        title: "Mallinckrodt Professor of Physics and Applied Physics",
        affiliations: [
          "Director, Materials Research Science and Engineering Center",
          "Faculty Associate, Center for Nanoscale Systems"
        ],
        collaborationsByDepartment: {
          "Applied Physics": true,
          "Materials Science & Mechanical Engineering": true,
          "Bioengineering": true,
          "Environmental Science & Engineering": true,
          "Applied Mathematics": true
        },
        facultyPage: "https://example.com/faculty/weitz"
      },
      "Steven C. Wofsy": {
        title: "Abbott Lawrence Rotch Professor of Atmospheric and Environmental Science",
        affiliations: [
          "Faculty Associate, Harvard University Center for the Environment",
          "Principal Investigator, Atmospheric Chemistry Modeling Group"
        ],
        collaborationsByDepartment: {
          "Environmental Science & Engineering": true,
          "Applied Physics": true,
          "Applied Mathematics": true
        },
        collaborations: 11,
        facultyPage: "https://example.com/faculty/wofsy"
      }
      // Add more faculty profiles as needed
    }
  };

  // Handle node click to show faculty profile
  const handleNodeClick = (faculty) => {
    setSelectedFaculty(faculty);
  };

  // Handle department filter
  const handleDepartmentFilter = (department) => {
    setHighlightedDepartment(department === highlightedDepartment ? null : department);
  };

  // Create the network visualization
  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    const width = 800;
    const height = 700;
    const tooltip = d3.select(tooltipRef.current);

    svg.selectAll("*").remove();
    
    // Create the simulation
    const simulation = d3.forceSimulation(facultyData.nodes)
      .force("link", d3.forceLink(facultyData.links)
        .id(d => d.id)
        .distance(link => 150 - link.value * 5))
      .force("charge", d3.forceManyBody().strength(-300))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("collide", d3.forceCollide().radius(d => 30));

    // Create department groupings
    const departments = [...new Set(facultyData.nodes.map(node => node.department))];
    
    // Create background grouping for departments
    const departmentGroups = svg.append("g")
      .selectAll(".department-group")
      .data(departments)
      .enter()
      .append("g")
      .attr("class", "department-group");
      
    // Create links
    const link = svg.append("g")
      .selectAll("line")
      .data(facultyData.links)
      .join("path")
      .attr("stroke", d => {
        const sourceNode = facultyData.nodes.find(n => n.id === d.source.id || n.id === d.source);
        const targetNode = facultyData.nodes.find(n => n.id === d.target.id || n.id === d.target);
        
        if (sourceNode && targetNode) {
          if (sourceNode.department === targetNode.department) {
            return departmentColors[sourceNode.department];
          }
          return "#ccc"; // Inter-department links are gray
        }
        return "#ccc";
      })
      .attr("stroke-opacity", 0.4)
      .attr("stroke-width", d => Math.max(1, d.value * 0.5))
      .attr("fill", "none");
    
    // Add department labels
    const departmentLabels = svg.append("g")
      .selectAll(".department-label")
      .data(departments)
      .enter()
      .append("text")
      .attr("class", "department-label")
      .text(d => d)
      .attr("font-weight", "bold")
      .attr("font-size", 14)
      .style("fill", d => departmentColors[d] || "#999");
      
    // Create nodes
    const node = svg.append("g")
      .selectAll(".node")
      .data(facultyData.nodes)
      .enter()
      .append("g")
      .attr("class", "node")
      .on("mouseover", function(event, d) {
        // Highlight connections
        link.style("stroke-opacity", l => {
          if (l.source.id === d.id || l.target.id === d.id) {
            return 1;
          } else {
            return 0.1;
          }
        })
        .style("stroke-width", l => {
          if (l.source.id === d.id || l.target.id === d.id) {
            return Math.max(1.5, l.value * 0.8);
          } else {
            return Math.max(0.5, l.value * 0.3);
          }
        });
        
        // Show tooltip
        tooltip.style("display", "block")
          .html(`
            <div>
              <strong>${d.id}</strong><br/>
              ${d.collaborations} collaborations<br/>
              Click for more information
            </div>
          `)
          .style("left", (event.pageX + 10) + "px")
          .style("top", (event.pageY - 20) + "px");
      })
      .on("mouseout", function() {
        // Reset links
        link.style("stroke-opacity", 0.4)
          .style("stroke-width", d => Math.max(1, d.value * 0.5));
          
        // Hide tooltip
        tooltip.style("display", "none");
      })
      .on("click", (event, d) => handleNodeClick(d))
      .call(d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended));
    
    // Add circles to nodes
    node.append("circle")
      .attr("r", d => Math.max(5, Math.min(10, d.collaborations * 0.7)))
      .attr("fill", d => departmentColors[d.department])
      .attr("stroke", "#fff")
      .attr("stroke-width", 1.5);
      
    // Add node labels
    node.append("text")
      .text(d => d.id)
      .attr("x", 12)
      .attr("y", 4)
      .style("font-size", 12)
      .style("pointer-events", "none");
      
    // Update positions on each tick
    simulation.on("tick", () => {
      link.attr("d", d => {
        return `M${d.source.x},${d.source.y} C${(d.source.x + d.target.x) / 2},${d.source.y} ${(d.source.x + d.target.x) / 2},${d.target.y} ${d.target.x},${d.target.y}`;
      });
      
      node.attr("transform", d => `translate(${d.x},${d.y})`);
      
      // Update department labels position
      const departmentPositions = {};
      facultyData.nodes.forEach(node => {
        if (!departmentPositions[node.department]) {
          departmentPositions[node.department] = { x: 0, y: 0, count: 0 };
        }
        departmentPositions[node.department].x += node.x;
        departmentPositions[node.department].y += node.y;
        departmentPositions[node.department].count++;
      });
      
      // Position department labels at the average position of their nodes
      departmentLabels.attr("x", d => {
        if (departmentPositions[d]) {
          return departmentPositions[d].x / departmentPositions[d].count;
        }
        return 0;
      })
      .attr("y", d => {
        if (departmentPositions[d]) {
          return (departmentPositions[d].y / departmentPositions[d].count) - 20;
        }
        return 0;
      });
    });
    
    // Define drag functions
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
      d.fx = null;
      d.fy = null;
    }
    
    // Apply department filtering if necessary
    if (highlightedDepartment) {
      node.style("opacity", d => d.department === highlightedDepartment ? 1 : 0.2);
      link.style("opacity", d => {
        const sourceNode = facultyData.nodes.find(n => n.id === d.source.id || n.id === d.source);
        const targetNode = facultyData.nodes.find(n => n.id === d.target.id || n.id === d.target);
        return (sourceNode?.department === highlightedDepartment || targetNode?.department === highlightedDepartment) ? 1 : 0.1;
      });
    } else {
      node.style("opacity", 1);
      link.style("opacity", 1);
    }
    
    return () => {
      simulation.stop();
    };
  }, [highlightedDepartment, facultyData]);

  return (
    <div className="flex flex-col w-full max-w-6xl">
      <h1 className="text-2xl font-bold mb-2 border-b-2 border-blue-600 pb-2">FACULTY COLLABORATIONS</h1>
      <div className="flex items-center mb-4">
        <span className="mr-2">
          <svg viewBox="0 0 24 24" width="16" height="16">
            <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M12 16v-4M12 8h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </span>
        <span className="text-sm">Hover over or click on a name to see more information. Use the control panel above to filter and highlight.</span>
      </div>
      
      <div className="flex">
        <div className="w-3/4 border border-gray-200 rounded-md bg-white relative">
          <svg ref={svgRef} width="100%" height="700" />
          <div ref={tooltipRef} className="absolute hidden bg-white border border-gray-300 shadow-lg p-2 rounded-md text-sm" />
        </div>
        
        <div className="w-1/4 ml-4">
          {selectedFaculty && facultyData.profiles[selectedFaculty.id] ? (
            <div className="border border-gray-200 rounded-md p-4 bg-white">
              <h2 className="text-2xl font-bold">{selectedFaculty.id}</h2>
              <a href={facultyData.profiles[selectedFaculty.id].facultyPage} className="text-red-500 text-sm flex items-center mb-4">
                <svg viewBox="0 0 20 20" width="16" height="16" className="mr-1">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" fill="currentColor" />
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" fill="currentColor" />
                </svg>
                Faculty Page
              </a>
              
              <p className="text-sm mb-2">{facultyData.profiles[selectedFaculty.id].title}</p>
              
              {facultyData.profiles[selectedFaculty.id].affiliations.map((affiliation, i) => (
                <p key={i} className="text-sm text-gray-600 mb-1">{affiliation}</p>
              ))}
              
              <h3 className="text-lg font-semibold mt-6 mb-2">COLLABORATIONS</h3>
              <p className="text-sm mb-2 flex items-center">
                <svg viewBox="0 0 20 20" width="16" height="16" className="mr-1">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" fill="currentColor" />
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" fill="currentColor" />
                </svg>
                Click on a name to filter the visualization
              </p>
              
              <div className="mt-2">
                {/* Render colored department buttons */}
                {Object.entries(facultyData.profiles[selectedFaculty.id].collaborationsByDepartment).map(([dept, active]) => (
                  active && (
                    <div key={dept} className="flex items-center mb-2">
                      <span 
                        className="w-4 h-4 rounded-full mr-2" 
                        style={{ backgroundColor: departmentColors[dept] }}
                      />
                      <button 
                        className="text-sm hover:underline"
                        onClick={() => handleDepartmentFilter(dept)}
                      >
                        {dept}
                      </button>
                    </div>
                  )
                ))}
              </div>
            </div>
          ) : (
            <div className="border border-gray-200 rounded-md p-4 bg-white text-center text-gray-500">
              <p>Click on a faculty member to view their profile and collaboration details</p>
            </div>
          )}
          
          <div className="mt-4 border border-gray-200 rounded-md p-4 bg-white">
            <h3 className="font-semibold mb-3">Filter by Department</h3>
            {Object.entries(departmentColors).map(([dept, color]) => (
              <div key={dept} className="flex items-center mb-2">
                <button 
                  className="w-full flex items-center"
                  onClick={() => handleDepartmentFilter(dept)}
                >
                  <span 
                    className="w-4 h-4 rounded-full mr-2" 
                    style={{ backgroundColor: color }}
                  />
                  <span className={`text-sm ${highlightedDepartment === dept ? 'font-bold' : ''}`}>
                    {dept}
                  </span>
                </button>
              </div>
            ))}
            {highlightedDepartment && (
              <button 
                className="mt-2 px-3 py-1 bg-gray-200 text-sm rounded-md hover:bg-gray-300"
                onClick={() => setHighlightedDepartment(null)}
              >
                Clear Filter
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacultyCollaborationNetwork;