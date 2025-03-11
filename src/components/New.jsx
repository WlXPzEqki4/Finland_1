// import React, { useState, useEffect, useRef } from 'react';
// import * as d3 from 'd3';

// const FacultyNetwork = () => {
//   const svgRef = useRef(null);
//   const tooltipRef = useRef(null);
//   const [selectedFaculty, setSelectedFaculty] = useState(null);
//   const [filteredFaculty, setFilteredFaculty] = useState(null);
  
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
//         departments: ["Applied Physics", "Materials Science", "Bioengineering"],
//         organization: "School of Engineering and Applied Sciences"
//       },
//       "Joanna Aizenberg": {
//         title: "Amy Smith Berylson Professor of Materials Science",
//         collaborations: 18,
//         departments: ["Materials Science", "Bioengineering"],
//         organization: "School of Engineering and Applied Sciences"
//       },
//       "Steven C. Wofsy": {
//         title: "Professor of Environmental Science",
//         collaborations: 11,
//         departments: ["Environmental Science"],
//         organization: "Department of Earth and Planetary Sciences"
//       },
//       "Don Ingber": {
//         title: "Founding Director, Wyss Institute",
//         collaborations: 16,
//         departments: ["Bioengineering"],
//         organization: "Wyss Institute for Biologically Inspired Engineering"
//       },
//       "L Mahadevan": {
//         title: "Professor of Applied Mathematics",
//         collaborations: 15,
//         departments: ["Applied Mathematics"],
//         organization: "School of Engineering and Applied Sciences"
//       }
//     }
//   };

//   // Group faculty by department
//   const facultyByDepartment = {};
//   data.departments.forEach(dept => {
//     facultyByDepartment[dept] = data.nodes.filter(node => node.department === dept);
//   });

//   return (
//     <div className="w-full max-w-6xl mx-auto p-4">
//       <h1 className="text-3xl font-bold text-blue-700 mb-8">Faculty Collaboration Directory</h1>
      
//       {/* Filter Section */}
//       <div className="bg-gray-100 p-6 rounded-lg mb-8">
//         <div className="flex items-center justify-between mb-4">
//           <h2 className="text-xl font-bold">Filter Faculty</h2>
//           <button 
//             className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center"
//             onClick={() => setFilteredFaculty(null)}
//           >
//             <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v7h7M4 11l7-7m6 0v7h-7m7 0l-7-7"/>
//             </svg>
//             Reset Filters
//           </button>
//         </div>
        
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//           <div>
//             <label className="block text-gray-700 mb-2">Department</label>
//             <select className="w-full p-2 border border-gray-300 rounded-lg bg-white">
//               <option>All Departments</option>
//               {data.departments.map(dept => (
//                 <option key={dept}>{dept}</option>
//               ))}
//             </select>
//           </div>
          
//           <div>
//             <label className="block text-gray-700 mb-2">Collaboration Count</label>
//             <select className="w-full p-2 border border-gray-300 rounded-lg bg-white">
//               <option>All Counts</option>
//               <option>5+</option>
//               <option>10+</option>
//               <option>15+</option>
//             </select>
//           </div>
          
//           <div>
//             <label className="block text-gray-700 mb-2">Organization</label>
//             <select className="w-full p-2 border border-gray-300 rounded-lg bg-white">
//               <option>All Organizations</option>
//               <option>School of Engineering and Applied Sciences</option>
//               <option>Wyss Institute</option>
//             </select>
//           </div>
          
//           <div>
//             <label className="block text-gray-700 mb-2">Sort By</label>
//             <select className="w-full p-2 border border-gray-300 rounded-lg bg-white">
//               <option>Name</option>
//               <option>Collaboration Count</option>
//               <option>Department</option>
//             </select>
//           </div>
//         </div>
//       </div>
      
//       <div className="mb-4 text-gray-600">
//         Showing {data.nodes.length} of {data.nodes.length} faculty
//       </div>
      
//       {/* Faculty Cards Grid */}
//       {data.departments.map(department => (
//         <div key={department} className="mb-8">
//           <h2 className="text-xl font-semibold text-gray-800 mb-4">{department}</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {facultyByDepartment[department].map(faculty => (
//               <div 
//                 key={faculty.id} 
//                 className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
//               >
//                 <div className="p-6">
//                   <div className="flex">
//                     <div className="mr-4">
//                       <div className="text-gray-600">{faculty.id.split(' ').slice(0, -1).join(' ')}</div>
//                       <div className="font-medium">{faculty.id.split(' ').slice(-1)[0]}</div>
//                     </div>
//                     <div className="flex-1">
//                       <a 
//                         href="#" 
//                         className="text-blue-700 font-semibold text-lg hover:underline"
//                         onClick={(e) => {
//                           e.preventDefault();
//                           setSelectedFaculty(faculty);
//                         }}
//                       >
//                         {faculty.id}
//                       </a>
//                       {data.profiles[faculty.id] && (
//                         <>
//                           <div className="text-gray-700 mt-1">
//                             {data.profiles[faculty.id].title}
//                           </div>
//                           {data.profiles[faculty.id].organization && (
//                             <div className="text-gray-600 text-sm mt-1">
//                               {data.profiles[faculty.id].organization}
//                             </div>
//                           )}
//                         </>
//                       )}
//                       <div className="mt-4">
//                         <span className="bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm font-medium mr-2">
//                           {faculty.department}
//                         </span>
//                         <span className="bg-gray-100 text-gray-800 rounded-full px-3 py-1 text-sm font-medium">
//                           {faculty.collaborations} collaborations
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
                
//                 <div className="px-6 pb-4 flex flex-wrap">
//                   <span className="bg-blue-50 text-blue-700 rounded-full px-3 py-1 text-sm font-medium mr-2 mb-2">
//                     Research
//                   </span>
//                   <span className="bg-green-50 text-green-700 rounded-full px-3 py-1 text-sm font-medium mr-2 mb-2">
//                     Faculty
//                   </span>
//                   {faculty.collaborations > 15 && (
//                     <span className="bg-purple-50 text-purple-700 rounded-full px-3 py-1 text-sm font-medium mr-2 mb-2">
//                       Highly Collaborative
//                     </span>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       ))}
      
//       {/* Faculty Detail Modal */}
//       {selectedFaculty && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//           <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full max-h-screen overflow-y-auto">
//             <div className="p-6 border-b border-gray-200">
//               <div className="flex justify-between items-start">
//                 <div>
//                   <h2 className="text-2xl font-bold text-blue-700">{selectedFaculty.id}</h2>
//                   {data.profiles[selectedFaculty.id] && (
//                     <p className="text-gray-600">{data.profiles[selectedFaculty.id].title}</p>
//                   )}
//                 </div>
//                 <button 
//                   className="text-gray-500 hover:text-gray-700"
//                   onClick={() => setSelectedFaculty(null)}
//                 >
//                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//                   </svg>
//                 </button>
//               </div>
//             </div>
            
//             <div className="p-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <h3 className="text-lg font-semibold mb-2">Department</h3>
//                   <div className="flex items-center mb-4">
//                     <span 
//                       className="w-4 h-4 rounded-full mr-2" 
//                       style={{ backgroundColor: departmentColors[selectedFaculty.department] }}
//                     />
//                     <span>{selectedFaculty.department}</span>
//                   </div>
                  
//                   {data.profiles[selectedFaculty.id] && data.profiles[selectedFaculty.id].organization && (
//                     <>
//                       <h3 className="text-lg font-semibold mb-2">Organization</h3>
//                       <p className="mb-4">{data.profiles[selectedFaculty.id].organization}</p>
//                     </>
//                   )}
                  
//                   <h3 className="text-lg font-semibold mb-2">Collaboration Stats</h3>
//                   <p className="mb-4">{selectedFaculty.collaborations} total collaborations</p>
//                 </div>
                
//                 <div>
//                   <h3 className="text-lg font-semibold mb-2">Top Collaborators</h3>
//                   <ul className="space-y-2">
//                     {data.links
//                       .filter(link => 
//                         link.source === selectedFaculty.id || 
//                         link.target === selectedFaculty.id
//                       )
//                       .sort((a, b) => b.value - a.value)
//                       .slice(0, 5)
//                       .map(link => {
//                         const collaboratorId = link.source === selectedFaculty.id ? 
//                           link.target : link.source;
//                         const collaborator = data.nodes.find(n => n.id === collaboratorId);
                        
//                         return (
//                           <li key={collaboratorId} className="flex items-center justify-between">
//                             <span className="text-gray-700">{collaboratorId}</span>
//                             <span className="bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm">
//                               {link.value} joint projects
//                             </span>
//                           </li>
//                         );
//                       })
//                     }
//                   </ul>
//                 </div>
//               </div>
              
//               <div className="mt-6 pt-6 border-t border-gray-200">
//                 <h3 className="text-lg font-semibold mb-4">Research Areas</h3>
//                 <div className="flex flex-wrap gap-2">
//                   <span className="bg-blue-50 text-blue-700 rounded-full px-3 py-1 text-sm font-medium">
//                     Research
//                   </span>
//                   <span className="bg-green-50 text-green-700 rounded-full px-3 py-1 text-sm font-medium">
//                     Faculty
//                   </span>
//                   <span className="bg-purple-50 text-purple-700 rounded-full px-3 py-1 text-sm font-medium">
//                     Highly Collaborative
//                   </span>
//                   <span className="bg-yellow-50 text-yellow-700 rounded-full px-3 py-1 text-sm font-medium">
//                     {selectedFaculty.department}
//                   </span>
//                 </div>
//               </div>
//             </div>
            
//             <div className="p-6 border-t border-gray-200 bg-gray-50 flex justify-end">
//               <button 
//                 className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg mr-2"
//                 onClick={() => setSelectedFaculty(null)}
//               >
//                 Close
//               </button>
//               <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
//                 View Full Profile
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
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
  
  // Filter states
  const [departmentFilter, setDepartmentFilter] = useState('All Departments');
  const [collaborationFilter, setCollaborationFilter] = useState('All Counts');
  const [organizationFilter, setOrganizationFilter] = useState('All Organizations');
  const [sortBy, setSortBy] = useState('Name');
  
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
        departments: ["Applied Physics", "Materials Science", "Bioengineering"],
        organization: "School of Engineering and Applied Sciences"
      },
      "Joanna Aizenberg": {
        title: "Amy Smith Berylson Professor of Materials Science",
        collaborations: 18,
        departments: ["Materials Science", "Bioengineering"],
        organization: "School of Engineering and Applied Sciences"
      },
      "Steven C. Wofsy": {
        title: "Professor of Environmental Science",
        collaborations: 11,
        departments: ["Environmental Science"],
        organization: "Department of Earth and Planetary Sciences"
      },
      "Don Ingber": {
        title: "Founding Director, Wyss Institute",
        collaborations: 16,
        departments: ["Bioengineering"],
        organization: "Wyss Institute for Biologically Inspired Engineering"
      },
      "L Mahadevan": {
        title: "Professor of Applied Mathematics",
        collaborations: 15,
        departments: ["Applied Mathematics"],
        organization: "School of Engineering and Applied Sciences"
      },
      "Vinothan N. Manoharan": {
        title: "Professor of Physics and Applied Physics",
        collaborations: 10,
        organization: "School of Engineering and Applied Sciences"
      },
      "David R. Nelson": {
        title: "Professor of Physics and Applied Physics",
        collaborations: 10,
        organization: "School of Engineering and Applied Sciences"
      },
      "Jerry X. Mitrovica": {
        title: "Professor of Environmental Science",
        collaborations: 8,
        organization: "Department of Earth and Planetary Sciences"
      },
      "Michael P. Brenner": {
        title: "Professor of Applied Mathematics",
        collaborations: 13,
        organization: "School of Engineering and Applied Sciences"
      }
    }
  };

  // Apply filters to faculty data
  const filteredNodes = data.nodes.filter(node => {
    // Department filter
    if (departmentFilter !== 'All Departments' && node.department !== departmentFilter) {
      return false;
    }
    
    // Collaboration filter
    if (collaborationFilter === '5+' && node.collaborations < 5) {
      return false;
    } else if (collaborationFilter === '10+' && node.collaborations < 10) {
      return false;
    } else if (collaborationFilter === '15+' && node.collaborations < 15) {
      return false;
    }
    
    // Organization filter
    if (organizationFilter !== 'All Organizations') {
      const profile = data.profiles[node.id];
      if (!profile || profile.organization !== organizationFilter) {
        return false;
      }
    }
    
    return true;
  });
  
  // Sort filtered nodes
  const sortedNodes = [...filteredNodes].sort((a, b) => {
    if (sortBy === 'Name') {
      return a.id.localeCompare(b.id);
    } else if (sortBy === 'Collaboration Count') {
      return b.collaborations - a.collaborations;
    } else if (sortBy === 'Department') {
      return a.department.localeCompare(b.department);
    }
    return 0;
  });
  
  // Get unique departments from filtered nodes
  const filteredDepartments = Array.from(new Set(sortedNodes.map(node => node.department)))
    .sort((a, b) => a.localeCompare(b));
  
  // Group faculty by department
  const facultyByDepartment = {};
  filteredDepartments.forEach(dept => {
    facultyByDepartment[dept] = sortedNodes.filter(node => node.department === dept);
  });
  
  // Extract unique organizations from profiles
  const organizations = Array.from(
    new Set(Object.values(data.profiles).map(profile => profile.organization))
  ).sort();

  // Reset all filters
  const resetFilters = () => {
    setDepartmentFilter('All Departments');
    setCollaborationFilter('All Counts');
    setOrganizationFilter('All Organizations');
    setSortBy('Name');
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-blue-700 mb-8">Faculty Collaboration Directory</h1>
      
      {/* Filter Section */}
      <div className="bg-gray-100 p-6 rounded-lg mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Filter Faculty</h2>
          <button 
            className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center"
            onClick={resetFilters}
          >
            <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v7h7M4 11l7-7m6 0v7h-7m7 0l-7-7"/>
            </svg>
            Reset Filters
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-gray-700 mb-2">Department</label>
            <select 
              className="w-full p-2 border border-gray-300 rounded-lg bg-white"
              value={departmentFilter}
              onChange={(e) => setDepartmentFilter(e.target.value)}
            >
              <option>All Departments</option>
              {data.departments.map(dept => (
                <option key={dept}>{dept}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-gray-700 mb-2">Collaboration Count</label>
            <select 
              className="w-full p-2 border border-gray-300 rounded-lg bg-white"
              value={collaborationFilter}
              onChange={(e) => setCollaborationFilter(e.target.value)}
            >
              <option>All Counts</option>
              <option>5+</option>
              <option>10+</option>
              <option>15+</option>
            </select>
          </div>
          
          <div>
            <label className="block text-gray-700 mb-2">Organization</label>
            <select 
              className="w-full p-2 border border-gray-300 rounded-lg bg-white"
              value={organizationFilter}
              onChange={(e) => setOrganizationFilter(e.target.value)}
            >
              <option>All Organizations</option>
              {organizations.map(org => (
                <option key={org}>{org}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-gray-700 mb-2">Sort By</label>
            <select 
              className="w-full p-2 border border-gray-300 rounded-lg bg-white"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option>Name</option>
              <option>Collaboration Count</option>
              <option>Department</option>
            </select>
          </div>
        </div>
      </div>
      
      <div className="mb-4 text-gray-600">
        Showing {sortedNodes.length} of {data.nodes.length} faculty
      </div>
      
      {/* Faculty Cards Grid */}
      {filteredDepartments.length > 0 ? (
        filteredDepartments.map(department => (
          <div key={department} className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">{department}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {facultyByDepartment[department].map(faculty => (
                <div 
                  key={faculty.id} 
                  className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="p-6">
                    <div className="flex">
                      <div className="mr-4">
                        <div className="text-gray-600">{faculty.id.split(' ').slice(0, -1).join(' ')}</div>
                        <div className="font-medium">{faculty.id.split(' ').slice(-1)[0]}</div>
                      </div>
                      <div className="flex-1">
                        <a 
                          href="#" 
                          className="text-blue-700 font-semibold text-lg hover:underline"
                          onClick={(e) => {
                            e.preventDefault();
                            setSelectedFaculty(faculty);
                          }}
                        >
                          {faculty.id}
                        </a>
                        {data.profiles[faculty.id] && (
                          <>
                            <div className="text-gray-700 mt-1">
                              {data.profiles[faculty.id].title}
                            </div>
                            {data.profiles[faculty.id].organization && (
                              <div className="text-gray-600 text-sm mt-1">
                                {data.profiles[faculty.id].organization}
                              </div>
                            )}
                          </>
                        )}
                        <div className="mt-4">
                          <span className="bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm font-medium mr-2">
                            {faculty.department}
                          </span>
                          <span className="bg-gray-100 text-gray-800 rounded-full px-3 py-1 text-sm font-medium">
                            {faculty.collaborations} collaborations
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="px-6 pb-4 flex flex-wrap">
                    <span className="bg-blue-50 text-blue-700 rounded-full px-3 py-1 text-sm font-medium mr-2 mb-2">
                      Research
                    </span>
                    <span className="bg-green-50 text-green-700 rounded-full px-3 py-1 text-sm font-medium mr-2 mb-2">
                      Faculty
                    </span>
                    {faculty.collaborations > 15 && (
                      <span className="bg-purple-50 text-purple-700 rounded-full px-3 py-1 text-sm font-medium mr-2 mb-2">
                        Highly Collaborative
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))
      ) : (
        <div className="text-center p-8 text-gray-500">
          <p className="text-lg">No faculty found matching the selected filters.</p>
          <button 
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg"
            onClick={resetFilters}
          >
            Reset Filters
          </button>
        </div>
      )}
      
      {/* Faculty Detail Modal */}
      {selectedFaculty && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full max-h-screen overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold text-blue-700">{selectedFaculty.id}</h2>
                  {data.profiles[selectedFaculty.id] && (
                    <p className="text-gray-600">{data.profiles[selectedFaculty.id].title}</p>
                  )}
                </div>
                <button 
                  className="text-gray-500 hover:text-gray-700"
                  onClick={() => setSelectedFaculty(null)}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Department</h3>
                  <div className="flex items-center mb-4">
                    <span 
                      className="w-4 h-4 rounded-full mr-2" 
                      style={{ backgroundColor: departmentColors[selectedFaculty.department] }}
                    />
                    <span>{selectedFaculty.department}</span>
                  </div>
                  
                  {data.profiles[selectedFaculty.id] && data.profiles[selectedFaculty.id].organization && (
                    <>
                      <h3 className="text-lg font-semibold mb-2">Organization</h3>
                      <p className="mb-4">{data.profiles[selectedFaculty.id].organization}</p>
                    </>
                  )}
                  
                  <h3 className="text-lg font-semibold mb-2">Collaboration Stats</h3>
                  <p className="mb-4">{selectedFaculty.collaborations} total collaborations</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Top Collaborators</h3>
                  <ul className="space-y-2">
                    {data.links
                      .filter(link => 
                        link.source === selectedFaculty.id || 
                        link.target === selectedFaculty.id
                      )
                      .sort((a, b) => b.value - a.value)
                      .slice(0, 5)
                      .map(link => {
                        const collaboratorId = link.source === selectedFaculty.id ? 
                          link.target : link.source;
                        const collaborator = data.nodes.find(n => n.id === collaboratorId);
                        
                        return (
                          <li key={collaboratorId} className="flex items-center justify-between">
                            <span className="text-gray-700">{collaboratorId}</span>
                            <span className="bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm">
                              {link.value} joint projects
                            </span>
                          </li>
                        );
                      })
                    }
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-semibold mb-4">Research Areas</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-50 text-blue-700 rounded-full px-3 py-1 text-sm font-medium">
                    Research
                  </span>
                  <span className="bg-green-50 text-green-700 rounded-full px-3 py-1 text-sm font-medium">
                    Faculty
                  </span>
                  <span className="bg-purple-50 text-purple-700 rounded-full px-3 py-1 text-sm font-medium">
                    Highly Collaborative
                  </span>
                  <span className="bg-yellow-50 text-yellow-700 rounded-full px-3 py-1 text-sm font-medium">
                    {selectedFaculty.department}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="p-6 border-t border-gray-200 bg-gray-50 flex justify-end">
              <button 
                className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg mr-2"
                onClick={() => setSelectedFaculty(null)}
              >
                Close
              </button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                View Full Profile
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FacultyNetwork;



















