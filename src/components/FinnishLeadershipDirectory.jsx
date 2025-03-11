import React, { useState } from 'react';

const FinnishLeadershipDirectory = () => {
  // State for filters and expanded card
  const [filters, setFilters] = useState({
    sector: '',
    type: '',
    organization: '',
    diplomaticRank: ''
  });
  
  const [expandedCardId, setExpandedCardId] = useState(null);
  
  // Complete data structure with officials
  const officials = [
    {
      id: 1,
      name: "H.E. Alexander Stubb",
      position: "President of the Republic of Finland",
      sector: "Government",
      type: "Political Leadership",
      organization: "Republic of Finland",
      diplomaticRank: "Head of State",
      photo: "/api/placeholder/150/180",
      biography: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.",
      education: ["PhD in International Relations, London School of Economics"],
      career: ["President of Finland (2024-present)", "Prime Minister of Finland (2014-2015)"],
      languages: ["Finnish", "Swedish", "English", "French", "German"],
      responsibilities: "Leads Finland's foreign policy and serves as Commander-in-Chief.",
      contact: {
        office: "Office of the President, Helsinki",
        email: "contact@president.fi"
      }
    },
    {
      id: 2,
      name: "H.E. Elina Valtonen",
      position: "Minister of Foreign Affairs",
      sector: "Government",
      type: "Ministry",
      organization: "Ministry of Foreign Affairs",
      diplomaticRank: "Minister",
      photo: "/api/placeholder/150/180",
      biography: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.",
      education: ["Master of Science in Economics, Helsinki School of Economics"],
      career: ["Minister of Foreign Affairs (2023-present)", "Member of Parliament (2014-present)"],
      languages: ["Finnish", "Swedish", "English", "French"],
      responsibilities: "Leads Finland's foreign and security policy.",
      contact: {
        office: "Ministry for Foreign Affairs, Helsinki",
        email: "contact@formin.fi"
      }
    },
    {
      id: 3,
      name: "H.E. Sandra Berqvist",
      position: "Minister of Youth, Sport and Physical Activity",
      sector: "Government",
      type: "Ministry",
      organization: "Ministry of Education and Culture",
      diplomaticRank: "Minister",
      photo: "/api/placeholder/150/180",
      biography: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.",
      education: ["Master's Degree in Political Science, Åbo Akademi University"],
      career: ["Minister of Youth, Sport and Physical Activity (2023-present)"],
      languages: ["Swedish", "Finnish", "English"],
      responsibilities: "Responsible for youth policy and sport policy.",
      contact: {
        office: "Ministry of Education and Culture, Helsinki",
        email: "contact@minedu.fi"
      }
    },
    {
      id: 12,
      name: "Antti Herlin",
      position: "Chairman of KONE",
      sector: "Business",
      type: "Corporate Governance",
      organization: "KONE",
      diplomaticRank: "Chairman",
      photo: "/api/placeholder/150/180",
      biography: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.",
      education: ["Doctor of Business Administration (Honorary)"],
      career: ["Chairman of KONE (2003-present)", "CEO of KONE (1996-2006)"],
      languages: ["Finnish", "Swedish", "English", "German"],
      responsibilities: "Leads the Board of Directors of KONE.",
      contact: {
        office: "KONE Corporation, Espoo",
        email: "contact@kone.com"
      }
    },
    {
      id: 13,
      name: "Justin Hotard",
      position: "Upcoming CEO of Nokia",
      sector: "Business",
      type: "Corporate Leadership",
      organization: "Nokia",
      diplomaticRank: "CEO (Incoming)",
      photo: "/api/placeholder/150/180",
      biography: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.",
      education: ["MBA, Harvard Business School"],
      career: ["Incoming CEO of Nokia (2024)"],
      languages: ["English", "Finnish (Basic)"],
      responsibilities: "Will lead Nokia's global operations.",
      contact: {
        office: "Nokia Corporation, Espoo",
        email: "contact@nokia.com"
      }
    }
  ];
  
  // Get unique values for filter dropdowns
  const getUniqueValues = (field) => {
    return [...new Set(officials.map(official => official[field]))];
  };
  
  // Filter officials based on selected filters
  const filteredOfficials = officials.filter(official => {
    return (
      (filters.sector === '' || official.sector === filters.sector) &&
      (filters.type === '' || official.type === filters.type) &&
      (filters.organization === '' || official.organization === filters.organization) &&
      (filters.diplomaticRank === '' || official.diplomaticRank === filters.diplomaticRank)
    );
  });
  
  // Handle filter changes
  const handleFilterChange = (field, value) => {
    setFilters({
      ...filters,
      [field]: value
    });
  };
  
  // Handle card click to expand
  const handleCardClick = (id) => {
    setExpandedCardId(expandedCardId === id ? null : id);
  };
  
  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-blue-800">Finnish Leadership Directory</h1>
      
      {/* Filter Section */}
      <div className="bg-gray-100 p-4 rounded-lg mb-6">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-xl font-semibold">Filter Officials</h2>
          <button 
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center"
            onClick={() => setFilters({
              sector: '',
              type: '',
              organization: '',
              diplomaticRank: ''
            })}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Reset Filters
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Sector</label>
            <select 
              className="w-full p-2 border rounded" 
              value={filters.sector}
              onChange={(e) => handleFilterChange('sector', e.target.value)}
            >
              <option value="">All Sectors</option>
              {getUniqueValues('sector').map(value => (
                <option key={value} value={value}>{value}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
            <select 
              className="w-full p-2 border rounded" 
              value={filters.type}
              onChange={(e) => handleFilterChange('type', e.target.value)}
            >
              <option value="">All Types</option>
              {getUniqueValues('type').map(value => (
                <option key={value} value={value}>{value}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Organization</label>
            <select 
              className="w-full p-2 border rounded" 
              value={filters.organization}
              onChange={(e) => handleFilterChange('organization', e.target.value)}
            >
              <option value="">All Organizations</option>
              {getUniqueValues('organization').map(value => (
                <option key={value} value={value}>{value}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Diplomatic Rank</label>
            <select 
              className="w-full p-2 border rounded" 
              value={filters.diplomaticRank}
              onChange={(e) => handleFilterChange('diplomaticRank', e.target.value)}
            >
              <option value="">All Ranks</option>
              {getUniqueValues('diplomaticRank').map(value => (
                <option key={value} value={value}>{value}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
      
      {/* Results Count */}
      <div className="mb-4 flex justify-between items-center">
        <p className="text-gray-600">Showing {filteredOfficials.length} of {officials.length} officials</p>
        {(filters.sector || filters.type || filters.organization || filters.diplomaticRank) && (
          <div className="flex flex-wrap gap-2">
            {filters.sector && (
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded flex items-center">
                Sector: {filters.sector}
                <button 
                  className="ml-2 text-blue-600 hover:text-blue-800"
                  onClick={() => handleFilterChange('sector', '')}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </span>
            )}
            {filters.type && (
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded flex items-center">
                Type: {filters.type}
                <button 
                  className="ml-2 text-green-600 hover:text-green-800"
                  onClick={() => handleFilterChange('type', '')}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </span>
            )}
            {filters.organization && (
              <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded flex items-center">
                Organization: {filters.organization}
                <button 
                  className="ml-2 text-purple-600 hover:text-purple-800"
                  onClick={() => handleFilterChange('organization', '')}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </span>
            )}
            {filters.diplomaticRank && (
              <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded flex items-center">
                Rank: {filters.diplomaticRank}
                <button 
                  className="ml-2 text-yellow-600 hover:text-yellow-800"
                  onClick={() => handleFilterChange('diplomaticRank', '')}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </span>
            )}
          </div>
        )}
      </div>
      
      {/* Officials Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredOfficials.map(official => (
          <div 
            key={official.id} 
            className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ${expandedCardId === official.id ? 'col-span-full' : ''}`}
            onClick={() => handleCardClick(official.id)}
          >
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 lg:w-1/4">
                <img src={official.photo} alt={official.name} className="w-full h-full object-cover" />
              </div>
              
              <div className="p-4 md:w-2/3 lg:w-3/4">
                <h3 className="text-xl font-bold text-blue-800">{official.name}</h3>
                <p className="text-gray-700 font-medium">{official.position}</p>
                <p className="text-gray-600 text-sm mb-2">{official.organization}</p>
                
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">{official.sector}</span>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">{official.type}</span>
                  <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">{official.diplomaticRank}</span>
                </div>
                
                {expandedCardId === official.id && (
                  <div className="mt-4 border-t pt-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">Biography</h4>
                        <p className="text-gray-600 mb-4">{official.biography}</p>
                        
                        <h4 className="font-bold text-gray-800 mb-2">Education</h4>
                        <ul className="list-disc pl-5 mb-4">
                          {official.education.map((edu, index) => (
                            <li key={index} className="text-gray-600">{edu}</li>
                          ))}
                        </ul>
                        
                        <h4 className="font-bold text-gray-800 mb-2">Career</h4>
                        <ul className="list-disc pl-5 mb-4">
                          {official.career.map((career, index) => (
                            <li key={index} className="text-gray-600">{career}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">Languages</h4>
                        <p className="text-gray-600 mb-4">{official.languages.join(', ')}</p>
                        
                        <h4 className="font-bold text-gray-800 mb-2">Responsibilities</h4>
                        <p className="text-gray-600 mb-4">{official.responsibilities}</p>
                        
                        <h4 className="font-bold text-gray-800 mb-2">Contact Information</h4>
                        <p className="text-gray-600">Office: {official.contact.office}</p>
                        <p className="text-gray-600">Email: {official.contact.email}</p>
                      </div>
                    </div>
                    
                    <button 
                      className="mt-4 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded"
                      onClick={(e) => {
                        e.stopPropagation();
                        setExpandedCardId(null);
                      }}
                    >
                      Close Details
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {filteredOfficials.length === 0 && (
        <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 p-4 rounded">
          No officials match your filter criteria. Try adjusting your filters.
        </div>
      )}
    </div>
  );
};

export default FinnishLeadershipDirectory;





