"use client"

import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

// Define interfaces for our data
const sampleData = {
  graph: {
    nodes: [
      {
        id: "person_SandraBergqvist",
        label: "H.E. Sandra Bergqvist",
        type: "Person",
        metadata: {
          shortBio:
            "Finland's inaugural Minister of Youth, Sport and Physical Activity, focusing on youth welfare, sports as well-being, and inclusive fitness.",
          keyPoints: [
            "Oversees youth policy and student aid",
            "Entrepreneurial background in agriculture from Swedish-speaking archipelago",
            "Enjoys outdoor pursuits and running",
          ],
        },
      },
      {
        id: "tag_SB_MinisterialRole",
        label: "Ministerial Role (Youth, Sport, Physical Activity)",
        type: "Tag",
      },
      {
        id: "tag_SB_YouthWelfareAndSports",
        label: "Youth Welfare & Sports",
        type: "Tag",
      },
      {
        id: "tag_SB_InclusionAndFitness",
        label: "Inclusion & Fitness",
        type: "Tag",
      },
      {
        id: "tag_SB_EntrepreneurshipAgriculture",
        label: "Entrepreneurship & Agriculture",
        type: "Tag",
      },
      {
        id: "tag_SB_OutdoorActiveLifestyle",
        label: "Outdoor & Active Lifestyle",
        type: "Tag",
      },
      {
        id: "tag_SB_DiplomaticOpportunities",
        label: "Diplomatic Opportunities",
        type: "Tag",
      },
      {
        id: "person_AnnaKaisaIkonen",
        label: "H.E. Anna-Kaisa Ikonen",
        type: "Person",
        metadata: {
          shortBio:
            "Minister of Local & Regional Government, former Mayor of Tampere, known for innovative urban development and public-sector reforms.",
          keyPoints: [
            "Responsible for municipal affairs, new wellbeing counties, and digitalisation",
            "Doctorate in social sciences with research on municipal leadership",
            "Enjoys literature, theatre, skiing, and open-water swimming",
          ],
        },
      },
      {
        id: "tag_AK_MinisterialRole",
        label: "Ministerial Role (Local & Regional Government)",
        type: "Tag",
      },
      {
        id: "tag_AK_LocalRegionalGov",
        label: "Local & Regional Governance",
        type: "Tag",
      },
      {
        id: "tag_AK_UrbanDevSmartCities",
        label: "Urban Dev. & Smart Cities",
        type: "Tag",
      },
      {
        id: "tag_AK_HealthcareSocialWelfare",
        label: "Healthcare & Social Welfare Reform",
        type: "Tag",
      },
      {
        id: "tag_AK_InnovativeCityMgmt",
        label: "Innovative City Management",
        type: "Tag",
      },
      {
        id: "tag_AK_CulturalOutdoorInterests",
        label: "Cultural & Outdoor Interests",
        type: "Tag",
      },
      {
        id: "tag_AK_DiplomaticOpportunities",
        label: "Diplomatic Opportunities",
        type: "Tag",
      },
    ],
    edges: [
      {
        source: "person_SandraBergqvist",
        target: "tag_SB_MinisterialRole",
        type: "Person-Tag",
        hoverInfo: "Finland's inaugural Minister of Youth, Sport & Physical Activity.",
      },
      {
        source: "person_SandraBergqvist",
        target: "tag_SB_YouthWelfareAndSports",
        type: "Person-Tag",
        hoverInfo: "Strategically focused on enhancing youth welfare & using sports as a tool for well-being.",
      },
      {
        source: "person_SandraBergqvist",
        target: "tag_SB_InclusionAndFitness",
        type: "Person-Tag",
        hoverInfo: "Her approach emphasizes inclusion and physical fitness for all.",
      },
      {
        source: "person_SandraBergqvist",
        target: "tag_SB_EntrepreneurshipAgriculture",
        type: "Person-Tag",
        hoverInfo: "Comes from a Swedish-speaking archipelago, with entrepreneurial background in agriculture.",
      },
      {
        source: "person_SandraBergqvist",
        target: "tag_SB_OutdoorActiveLifestyle",
        type: "Person-Tag",
        hoverInfo: "Enjoys outdoor pursuits and running in personal life.",
      },
      {
        source: "person_SandraBergqvist",
        target: "tag_SB_DiplomaticOpportunities",
        type: "Person-Tag",
        hoverInfo: "Portfolio offers leverage in discussing youth empowerment & sports cooperation with the UAE.",
      },
      {
        source: "person_AnnaKaisaIkonen",
        target: "tag_AK_MinisterialRole",
        type: "Person-Tag",
        hoverInfo: "Minister of Local & Regional Government overseeing municipal affairs & wellbeing counties.",
      },
      {
        source: "person_AnnaKaisaIkonen",
        target: "tag_AK_LocalRegionalGov",
        type: "Person-Tag",
        hoverInfo: "Responsible for local government efficiency & regional development in Finland.",
      },
      {
        source: "person_AnnaKaisaIkonen",
        target: "tag_AK_UrbanDevSmartCities",
        type: "Person-Tag",
        hoverInfo: "Led smart urban development as Mayor of Tampere, focusing on innovative city management.",
      },
      {
        source: "person_AnnaKaisaIkonen",
        target: "tag_AK_HealthcareSocialWelfare",
        type: "Person-Tag",
        hoverInfo: "Published research & led initiatives in healthcare & social welfare reform.",
      },
      {
        source: "person_AnnaKaisaIkonen",
        target: "tag_AK_InnovativeCityMgmt",
        type: "Person-Tag",
        hoverInfo: "Known for implementing forward-thinking city governance strategies.",
      },
      {
        source: "person_AnnaKaisaIkonen",
        target: "tag_AK_CulturalOutdoorInterests",
        type: "Person-Tag",
        hoverInfo: "Enjoys travel, literature, theatre, skiing, jogging, and open-water swimming.",
      },
      {
        source: "person_AnnaKaisaIkonen",
        target: "tag_AK_DiplomaticOpportunities",
        type: "Person-Tag",
        hoverInfo:
          "Her portfolio aligns with UAE's ambitions for smart cities & e-government, opening avenues for cooperation.",
      },
    ],
  },
};

function NetworkDiagram() {
  const svgRef = useRef(null);
  const tooltipRef = useRef(null);
  const [selectedNode, setSelectedNode] = useState(null);
  const [relatedNodes, setRelatedNodes] = useState([]);

  // Get all person nodes for the selector
  const personNodes = sampleData.graph.nodes.filter((node) => node.type === "Person");

  // State for selected ministers
  const [selectedMinisters, setSelectedMinisters] = useState([]);

  // Toggle minister selection
  const toggleMinister = (ministerId) => {
    setSelectedMinisters((prev) =>
      prev.includes(ministerId) ? prev.filter((id) => id !== ministerId) : [...prev, ministerId]
    );
  };

  // Get filtered data based on selected ministers
  const getFilteredData = () => {
    if (selectedMinisters.length === 0) {
      return { nodes: [], edges: [] };
    }

    // Get all selected person nodes
    const selectedPersonNodes = sampleData.graph.nodes.filter(
      (node) => node.type === "Person" && selectedMinisters.includes(node.id)
    );

    // Get all edges connected to selected persons
    const relevantEdges = sampleData.graph.edges.filter((edge) => 
      selectedMinisters.includes(edge.source)
    );

    // Get all tag nodes connected to selected persons
    const connectedTagIds = relevantEdges.map((edge) => edge.target);
    const connectedTagNodes = sampleData.graph.nodes.filter(
      (node) => node.type === "Tag" && connectedTagIds.includes(node.id)
    );

    return {
      nodes: [...selectedPersonNodes, ...connectedTagNodes],
      edges: relevantEdges,
    };
  };

  useEffect(() => {
    if (!svgRef.current) return;

    // Get filtered data
    const { nodes, edges } = getFilteredData();

    // Clear any existing SVG content
    d3.select(svgRef.current).selectAll("*").remove();

    // If no ministers selected, don't render anything
    if (nodes.length === 0) return;

    // Prepare nodes and links for D3
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

    // Get the SVG dimensions
    const svgRect = svgRef.current.getBoundingClientRect();
    const width = svgRect.width;
    const height = 600;

    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [0, 0, width, height])
      .attr("style", "max-width: 100%; height: auto;");

    // Create a tooltip div
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

    // Create the force simulation
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
        d3.forceManyBody().strength((d) => (d.type === "Person" ? -800 : -400))
      )
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force(
        "collision",
        d3.forceCollide().radius((d) => (d.type === "Person" ? 80 : 60))
      )
      .force(
        "radial",
        d3
          .forceRadial((d) => (d.type === "Person" ? 0 : 200), width / 2, height / 2)
          .strength((d) => (d.type === "Person" ? 0.1 : 0.8))
      );

    // Create a container for all elements
    const container = svg.append("g");

    // Create the links
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

    // Create the nodes
    const node = container
      .append("g")
      .selectAll("g")
      .data(simulationNodes)
      .join("g")
      .attr("cursor", "pointer")
      .call(drag(simulation))
      .on("click", (event, d) => {
        event.stopPropagation();

        // Find related nodes (connected by edges)
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

        // Set selected node and related nodes
        setSelectedNode(d);
        setRelatedNodes(connectedNodes);

        // Highlight the selected node and its connections
        node.attr("opacity", (n) => (n.id === d.id || connectedNodes.some((cn) => cn.id === n.id) ? 1 : 0.3));
        link.attr("stroke-opacity", (l) =>
          (typeof l.source === "object" && l.source.id === d.id) ||
          (typeof l.target === "object" && l.target.id === d.id)
            ? 1
            : 0.1
        );
      });

    // Add circles for nodes
    node
      .append("circle")
      .attr("r", (d) => (d.type === "Person" ? 35 : 25))
      .attr("fill", (d) => (d.type === "Person" ? "#4f46e5" : "#10b981"))
      .attr("stroke", "#fff")
      .attr("stroke-width", 2);

    // Add labels for nodes
    node
      .append("text")
      .attr("text-anchor", "middle")
      .attr("dy", (d) => (d.type === "Person" ? 45 : 35))
      .attr("font-size", (d) => (d.type === "Person" ? "12px" : "10px"))
      .attr("fill", "#333")
      .text((d) => {
        // For person nodes, remove the "H.E." prefix
        if (d.type === "Person") {
          return d.label.replace("H.E. ", "");
        }
        return d.label;
      });

    // Update positions on each tick of the simulation
    simulation.on("tick", () => {
      link
        .attr("x1", (d) => (typeof d.source === "object" ? Math.max(30, Math.min(width - 30, d.source.x || 0)) : 0))
        .attr("y1", (d) => (typeof d.source === "object" ? Math.max(30, Math.min(height - 30, d.source.y || 0)) : 0))
        .attr("x2", (d) => (typeof d.target === "object" ? Math.max(30, Math.min(width - 30, d.target.x || 0)) : 0))
        .attr("y2", (d) => (typeof d.target === "object" ? Math.max(30, Math.min(height - 30, d.target.y || 0)) : 0));

      node.attr("transform", (d) => {
        const x = Math.max(30, Math.min(width - 30, d.x || 0));
        const y = Math.max(30, Math.min(height - 30, d.y || 0));
        return `translate(${x},${y})`;
      });
    });

    // Add zoom functionality
    const zoom = d3
      .zoom()
      .scaleExtent([0.2, 5])
      .on("zoom", (event) => {
        container.attr("transform", event.transform);
      });

    svg.call(zoom);

    // Reset selection when clicking on the background
    svg.on("click", () => {
      node.attr("opacity", 1);
      link.attr("stroke-opacity", 0.6);
      setSelectedNode(null);
      setRelatedNodes([]);
    });

    // Drag function for nodes
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

    // Cleanup function
    return () => {
      simulation.stop();
    };
  }, [selectedMinisters]);

  return (
    <div className="flex flex-col gap-4 p-4 w-full max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
      {/* Minister selector */}
      <div className="bg-white p-4 rounded-lg shadow-sm border">
        <h3 className="text-sm font-medium mb-2">Select Ministers to Display:</h3>
        <div className="flex flex-wrap gap-2">
          {personNodes.map((person) => (
            <div
              key={person.id}
              className={`cursor-pointer px-3 py-1 rounded-full ${
                selectedMinisters.includes(person.id)
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
              onClick={() => toggleMinister(person.id)}
            >
              {person.label.replace("H.E. ", "")}
            </div>
          ))}
        </div>
      </div>

      {/* Main content area with 2/3 - 1/3 split */}
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Network visualization (2/3 width) */}
        <div className="flex-1 lg:w-2/3 border rounded-lg shadow-sm bg-white">
          <div className="p-4 border-b">
            <h2 className="text-lg font-semibold">Finnish Ministers Network</h2>
            <p className="text-sm text-gray-500">
              {selectedMinisters.length === 0
                ? "Select ministers above to visualize their relationships"
                : `Showing ${selectedMinisters.length} minister${selectedMinisters.length > 1 ? "s" : ""} and their thematic tags`}
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
                <span>Tag</span>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Click on a node to see details. Drag nodes to reposition. Use mouse wheel to zoom in/out.
            </p>
          </div>
        </div>

        {/* Information panel (1/3 width) */}
        <div className="lg:w-1/3 min-w-[300px]">
          <div className="sticky top-4 border rounded-lg shadow-sm bg-white overflow-hidden">
            <div className="p-4 border-b">
              <h2 className="text-lg font-semibold">{selectedNode ? selectedNode.label : "Node Information"}</h2>
              <p className="text-sm text-gray-500">
                {selectedNode
                  ? selectedNode.type === "Person"
                    ? "Minister Profile"
                    : "Thematic Tag"
                  : "Select a node to view details"}
              </p>
            </div>
            <div className="p-4">
              {selectedNode ? (
                selectedNode.type === "Person" && selectedNode.metadata ? (
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium">Biography</h3>
                      <p className="text-sm">{selectedNode.metadata.shortBio}</p>
                    </div>

                    <div>
                      <h3 className="font-medium">Key Points</h3>
                      <ul className="list-disc pl-5 text-sm space-y-1">
                        {selectedNode.metadata.keyPoints?.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-medium">Related Tags</h3>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {relatedNodes.map((node) => (
                          <span
                            key={node.id}
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800"
                          >
                            {node.label}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium">Connected Ministers</h3>
                      <div className="mt-2 space-y-2">
                        {relatedNodes.map((node) => (
                          <div key={node.id} className="p-2 bg-slate-50 rounded-md">
                            <p className="font-medium">{node.label}</p>
                            {node.metadata && (
                              <p className="text-xs text-gray-500 truncate">{node.metadata.shortBio}</p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-500">
                    Click on any node in the network diagram to view detailed information here.
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






