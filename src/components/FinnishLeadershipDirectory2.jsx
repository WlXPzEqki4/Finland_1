// import React, { useState } from 'react';

// // Drop in your "officials" data structure here
// const officials = [
//     {
//       id: 1,
//       name: "H.E. Alexander Stubb",
//       position: "President of the Republic of Finland",
//       sector: "Government",
//       type: "Political Leadership",
//       organization: "Republic of Finland",
//       diplomaticRank: "Head of State",
//       photo: "/assets/images/AlexanderS.png",
//       strategicPositioning: "Serves as President since March 2024. Has extensive experience in national and international politics, focusing on foreign policy and economic affairs. Strongly advocates for proactive global engagement and sees collaboration beyond traditional partners as essential.",
//       uaeRelatedStatements: "Emphasized Finland’s keenness to strengthen ties with the UAE at his inauguration, expressing gratitude for the UAE’s participation and highlighting shared interests in education, renewable energy, and innovative governance.",
//       roleInUaeRelations: "Shapes Finland’s overall approach, encouraging bilateral cooperation in trade, education, and technology. Works closely with the Prime Minister and other ministers to align foreign policy with practical engagements.",
//       bilateralAgreements: "Supports the longstanding legal framework including the 1982 Economic Cooperation Agreement, the 1996 Double Taxation and Investment Protection treaties, and the 2013 Air Services Agreement, which underpin Finland–UAE ties.",
//       alignmentFriction: "Aligned on innovation, sustainability, and clean energy. Potential friction could arise from Finland’s EU-aligned export controls (e.g. arms embargo in certain conflicts) and differing stances on global crises.",
//       conclusionOutlook: "Continues to view the UAE as a key Gulf partner. Seeks to deepen ties in technology, climate solutions, and education, leveraging the 50th anniversary of Finland–UAE relations as a springboard."
//     },
//     {
//       id: 2,
//       name: "H.E. Elina Valtonen",
//       position: "Minister of Foreign Affairs",
//       sector: "Government",
//       type: "Ministry",
//       organization: "Ministry of Foreign Affairs",
//       diplomaticRank: "Minister",
//       photo: "/assets/images/ElinaV.png",
//       strategicPositioning: "Holds significant influence in shaping Finland’s foreign policy during NATO accession. Has a background in investment banking and economics, emphasizing pragmatic, globally oriented diplomacy.",
//       uaeRelatedStatements: "Met with UAE Foreign Minister in September 2023 at UNGA to discuss cooperation in economic, trade, cultural, and energy fields. Signals a positive and pragmatic approach to Gulf relations.",
//       roleInUaeRelations: "Guides Finland’s diplomatic priorities, coordinating with other ministries to expand trade and educational links with the UAE. Oversees the Joint Committee mechanism that fosters bilateral collaboration.",
//       bilateralAgreements: "Supports the 1982 Economic Cooperation Agreement, 1996 Double Taxation, 2013 Air Services, and 2022 Energy Cooperation MoU. Led the second Joint Committee meeting in Helsinki in November 2024.",
//       alignmentFriction: "Strong alignment in tech, sustainability, and energy diversification. Some differences may surface over Finland’s strict stance on Russia-related sanctions or defense exports.",
//       conclusionOutlook: "Aims to solidify Finland–UAE ties by promoting commercial, educational, and innovation-driven partnerships, leveraging shared interests in renewable energy and digital transformation."
//     },
//     {
//       id: 3,
//       name: "H.E. Sandra Berqvist",
//       position: "Minister of Youth, Sport and Physical Activity",
//       sector: "Government",
//       type: "Ministry",
//       organization: "Ministry of Education and Culture",
//       diplomaticRank: "Minister",
//       photo: "/assets/images/SandraB.png",
//       strategicPositioning: "Serves as Minister since June 2023, previously active in municipal politics and academia. Focuses on youth engagement, sports, and community well-being.",
//       uaeRelatedStatements: "Statements about the UAE have been nonobtrusive; Finland generally sees the UAE as a partner for sports diplomacy and youth programs.",
//       roleInUaeRelations: "Ministry involvement in youth exchanges, sports diplomacy, and inclusivity (e.g. Special Olympics World Games Abu Dhabi 2019). Potential for shared best practices in youth empowerment.",
//       bilateralAgreements: "Collaboration primarily facilitated through cultural, educational, and sports events, including Finland’s participation in Special Olympics 2019 in Abu Dhabi.",
//       alignmentFriction: "Both countries value sports as a unifying force, focusing on inclusivity and community building. Minimal friction; differences in approach to funding or volunteer-driven vs. government-driven sports programs are seen as opportunities for exchange.",
//       conclusionOutlook: "Committed to expanding sports-based collaboration, youth exchanges, and inclusive athletic events, reinforcing mutual goodwill."
//     },
//     {
//       id: 4,
//       name: "H.E. Anna-Kaisa Ikonen",
//       position: "Minister of Local and Regional Government",
//       sector: "Government",
//       type: "Ministry",
//       organization: "Ministry of Finance",
//       diplomaticRank: "Minister",
//       photo: "/assets/images/AnnaKaisaI.png",
//       strategicPositioning: "Serves as Minister of Local and Regional Government since June 2023. Former mayor of Tampere with deep experience in governance and public administration.",
//       uaeRelatedStatements: "No specific public comments on the UAE. Broader diplomatic interactions highlight Finland’s interest in sustainable urban development and smart city initiatives.",
//       roleInUaeRelations: "While not directly involved, her ministry could collaborate on urban innovation and digital transformation of public services, aligning with UAE’s push for smart governance.",
//       bilateralAgreements: "Finland–UAE relations anchored by frameworks like the 1982 Economic Cooperation Agreement, 1996 Double Taxation Agreement, and 2013 Air Services Agreement. Potential for city-level partnerships.",
//       alignmentFriction: "Both prioritize innovation and sustainable development. Cultural differences in municipal structures are navigable through mutual dialogue.",
//       conclusionOutlook: "Likely to encourage knowledge exchange on local governance, smart cities, and public-sector innovation, furthering bilateral ties in the realm of municipal collaboration."
//     },
//     {
//       id: 5,
//       name: "H.E. Jussi Halla-aho",
//       position: "Speaker of the Parliament",
//       sector: "Government",
//       type: "Legislative",
//       organization: "Parliament of Finland",
//       diplomaticRank: "Parliamentary Leader",
//       photo: "/assets/images/JussiH.png",
//       strategicPositioning: "Speaker of the Parliament and former leader of a major conservative party, with significant influence on parliamentary procedures and foreign policy oversight.",
//       uaeRelatedStatements: "Has not made extensive public statements on the UAE. Generally promotes pragmatic foreign policy and economic cooperation with Gulf states.",
//       roleInUaeRelations: "Facilitates parliamentary-level exchanges. Provides legislative support and legitimacy for broader Finland–UAE diplomatic initiatives led by the executive branch.",
//       bilateralAgreements: "No direct role in signing agreements but upholds the parliamentary ratification and review of treaties with the UAE.",
//       alignmentFriction: "Aligns on economic partnerships and national security. Potentially stricter stances on migration or certain EU policies may differ from UAE approaches.",
//       conclusionOutlook: "Continues to support parliamentary diplomacy, encouraging stable, mutually beneficial ties with the UAE in trade and security matters."
//     },
//     {
//       id: 6,
//       name: "H.E. Tuula Yrjola",
//       position: "Ambassador of Finland to the UAE",
//       sector: "Government",
//       type: "Diplomatic",
//       organization: "Ministry of Foreign Affairs",
//       diplomaticRank: "Ambassador",
//       photo: "/assets/images/TuulaY.png",
//       strategicPositioning: "A seasoned diplomat with three decades of experience in Eastern Europe, Central Asia, and the Middle East. Assumed ambassadorship in October 2023.",
//       uaeRelatedStatements: "Emphasizes strengthening bilateral relations, promoting Finnish business interests (Team Finland), and monitoring political developments in the UAE.",
//       roleInUaeRelations: "Leads the Finnish Embassy in Abu Dhabi, overseeing economic diplomacy, political engagement, and consular services. Acts as the principal link between Finland and the UAE.",
//       bilateralAgreements: "Actively supports the existing treaties (economic, taxation, air services) and fosters new MoUs in education, energy, and innovation.",
//       alignmentFriction: "Shares Finland’s focus on sustainability and innovation, echoing UAE’s Vision 2030. Minimal friction; possible differences in approach to regional conflicts or human rights are managed diplomatically.",
//       conclusionOutlook: "Aims to deepen trade, innovation, and cultural ties, ensuring Finland’s presence grows in alignment with UAE’s development goals."
//     },
//     {
//       id: 7,
//       name: "H.E. Anna-Kaisa Heikkinen",
//       position: "Director General, Department for Africa, the Middle East and Latin America",
//       sector: "Government",
//       type: "Diplomatic",
//       organization: "Ministry of Foreign Affairs",
//       diplomaticRank: "Director General",
//       photo: "/assets/images/AnnaKaisaH.png",
//       strategicPositioning: "Oversees Finnish diplomatic engagements with Africa, the Middle East, and Latin America. Has served in multiple leadership roles, including ambassadorial positions.",
//       uaeRelatedStatements: "Highlighted the UAE’s importance in Finland’s Middle East outreach. Led a high-level delegation to Dubai focusing on sustainability and innovation.",
//       roleInUaeRelations: "Directs the strategy for Finland’s missions in the region, guiding bilateral talks and policy frameworks with the UAE. Provides oversight to the Embassy in Abu Dhabi.",
//       bilateralAgreements: "Facilitates the Political Consultation Committee (2022) and the Joint Committee (2024), supporting MoUs in energy, education, AI, and space.",
//       alignmentFriction: "Aligns strongly on sustainable technology and education. Must balance Finland’s EU stances on issues like sanctions and arms exports with maintaining positive relations.",
//       conclusionOutlook: "Plans to expand cooperation in clean energy, digital solutions, and broader Middle East initiatives, strengthening Finland’s role as a trusted partner."
//     },
//     {
//       id: 8,
//       name: "Anna-Mari Wong Hamalainen",
//       position: "Director of Foreign and Security Policy",
//       sector: "Government",
//       type: "Policy",
//       organization: "Ministry of Foreign Affairs",
//       diplomaticRank: "Director",
//       photo: "/assets/images/AnnaMariH.png",
//       strategicPositioning: "Serves as Director of Foreign and Security Policy, with a background in NATO issues and EU foreign policy. Advises the President’s Cabinet on security strategies.",
//       uaeRelatedStatements: "No publicly documented statements specific to the UAE. Focuses mainly on European security and crisis management.",
//       roleInUaeRelations: "Contributes to broader frameworks shaping Finland’s foreign relations, which can indirectly influence cooperation with the UAE, especially in security dialogues.",
//       bilateralAgreements: "Not directly involved in forging UAE agreements; however, shapes policy frameworks that may underpin new or existing treaties.",
//       alignmentFriction: "Finland’s stance on EU security issues might differ from UAE’s neutral or pragmatic positions in certain regional conflicts. No major friction reported.",
//       conclusionOutlook: "Remains supportive of collaborative engagements with Gulf nations but focuses primarily on NATO/EU security agendas."
//     },
//     {
//       id: 9,
//       name: "Dr. Ville Brumme",
//       position: "Director of Peace Mediation",
//       sector: "Government",
//       type: "Diplomatic",
//       organization: "Ministry of Foreign Affairs",
//       diplomaticRank: "Director",
//       photo: "/assets/images/VilleB.png",
//       strategicPositioning: "Appointed by President Stubb in 2024. Formerly at CMI, overseeing mediation projects in Africa, the Middle East, and Eurasia. Brings deep conflict resolution expertise.",
//       uaeRelatedStatements: "Policies reflect respect for the UAE’s growing mediation role, especially in the Middle East. Acknowledges UAE’s discreet facilitation style and shared commitment to peaceful resolution.",
//       roleInUaeRelations: "Coordinates high-level mediation initiatives, working with Finnish MFA and civil society. Sees the UAE as a like-minded actor in diplomatic solutions, especially in the Horn of Africa.",
//       bilateralAgreements: "Engages through the Finland–UAE Political Consultation Committee. Visited Abu Dhabi in October 2024, meeting Dr. Anwar Gargash to enhance dialogue on conflict resolution.",
//       alignmentFriction: "Both countries value discreet, outcome-oriented mediation. Potential friction might arise if the UAE’s mediation approaches differ from Finland’s inclusivity norms, but so far cooperation is constructive.",
//       conclusionOutlook: "Intends to expand joint mediation efforts, leveraging Finland’s NGO networks and the UAE’s regional influence for broader conflict resolution initiatives."
//     },
//     {
//       id: 10,
//       name: "Laila Clyne",
//       position: "Diplomatic Advisor to the Minister",
//       sector: "Government",
//       type: "Advisory",
//       organization: "Ministry of Foreign Affairs",
//       diplomaticRank: "Advisor",
//       photo: "/assets/images/LailaC.png",
//       strategicPositioning: "Provides strategic counsel to the Minister for Foreign Affairs. Previously served as Second Secretary at Finland’s Permanent Mission in Geneva and as Adviser at the UN Mission in New York.",
//       uaeRelatedStatements: "No known public statements regarding the UAE. Works behind the scenes on broader foreign policy priorities.",
//       roleInUaeRelations: "Advises on day-to-day diplomatic matters, possibly offering input on engagements with UAE officials but with minimal direct public role.",
//       bilateralAgreements: "Supports the minister in implementing Finland’s treaty frameworks; no direct record of involvement in UAE agreements.",
//       alignmentFriction: "No friction points documented, as her role is primarily advisory. Aligns with the ministry’s general foreign policy direction.",
//       conclusionOutlook: "Expected to continue providing expert advice, ensuring continuity and coherence in Finland’s foreign relations, including with the UAE."
//     },
//     {
//       id: 11,
//       name: "Anne M'Rabet",
//       position: "Desk Officer for Persian Gulf, UAE, Bahrain, GCC and OIC",
//       sector: "Government",
//       type: "Diplomatic",
//       organization: "Ministry of Foreign Affairs",
//       diplomaticRank: "Officer",
//       photo: "/assets/images/AnneM.png",
//       strategicPositioning: "Oversees day-to-day bilateral relations with the Gulf region, including the UAE. Part of the Middle East and Gulf Unit at the MFA.",
//       uaeRelatedStatements: "No public statements identified. Focused on facilitating diplomatic ties and ensuring alignment with Finland’s broader Middle East policy.",
//       roleInUaeRelations: "Coordinates inter-ministerial work on UAE matters, ensuring consistency in policy and day-to-day diplomatic tasks. Provides critical country-specific expertise.",
//       bilateralAgreements: "Involved in operationalizing and monitoring existing frameworks like the 2022 Political Consultation Committee, the Joint Committee, and relevant MoUs.",
//       alignmentFriction: "Likely deals with routine administrative or regulatory differences. No significant friction reported.",
//       conclusionOutlook: "Will continue to manage UAE-related dossiers, supporting smooth bilateral cooperation and possibly contributing to new initiatives in trade or culture."
//     },
//     {
//       id: 12,
//       name: "Antti Herlin",
//       position: "Chairman of KONE",
//       sector: "Business",
//       type: "Corporate Governance",
//       organization: "KONE",
//       diplomaticRank: "Chairman",
//       photo: "/assets/images/AnttiH.png",
//       strategicPositioning: "Finland’s most influential industrialist. Transformed KONE into a global leader in elevator/escalator solutions with strong expansion in emerging markets.",
//       uaeRelatedStatements: "Does not frequently comment on the UAE publicly. KONE’s regional HQ in Dubai, major involvement in iconic UAE projects like Burj Khalifa and Dubai Metro.",
//       roleInUaeRelations: "Indirectly influences Finland’s economic diplomacy by showcasing advanced infrastructure solutions. KONE’s presence strengthens bilateral trade and technology ties.",
//       bilateralAgreements: "Engages within Finland’s existing frameworks. KONE’s deals in the UAE are typically commercial contracts (e.g., supply for megaprojects), supporting broader trade relationships.",
//       alignmentFriction: "Competes with global elevator firms in the UAE market. Must navigate the UAE’s multi-vendor approach while highlighting Finnish innovation and sustainability.",
//       conclusionOutlook: "Continues to expand KONE’s footprint in the Gulf, promoting Finnish engineering expertise in sustainable urban mobility."
//     },
//     {
//       id: 13,
//       name: "Justin Hotard",
//       position: "Incoming CEO of Nokia",
//       sector: "Business",
//       type: "Corporate Leadership",
//       organization: "Nokia",
//       diplomaticRank: "CEO (Incoming)",
//       photo: "/assets/images/JustinH.png",
//       strategicPositioning: "Assuming Nokia’s top leadership role in 2024. Formerly led AI-driven infrastructure at HPE, focusing on next-gen networking and cloud solutions.",
//       uaeRelatedStatements: "No direct statements yet. Nokia’s longstanding presence in the UAE, especially in 5G rollout and digital infrastructure, signals continuity.",
//       roleInUaeRelations: "Will oversee Nokia’s future expansions in 5G/6G, cybersecurity, and AI-driven networks in the Emirates. Maintains close ties with local telecom operators.",
//       bilateralAgreements: "Nokia’s commercial MOUs with UAE telcos (Etisalat, Du) support the overall Finland–UAE digital cooperation, but no direct G2G agreements are known.",
//       alignmentFriction: "Faces competition from Huawei, Ericsson, and others in the UAE. Nokia’s emphasis on secure, energy-efficient networks aligns with UAE’s digital transformation goals.",
//       conclusionOutlook: "Likely to deepen partnerships with UAE operators, bridging Nokia’s new AI-driven solutions and the Emirates’ ambition to be a tech leader."
//     },
//     {
//       id: 14,
//       name: "Pekka Lundmark",
//       position: "Outgoing CEO of Nokia",
//       sector: "Business",
//       type: "Corporate Leadership",
//       organization: "Nokia",
//       diplomaticRank: "CEO (Outgoing)",
//       photo: "/assets/images/PekkaL.png",
//       strategicPositioning: "Led Nokia from 2020–2024, steering a critical transformation focusing on 5G, AI-powered automation, and green telecom solutions.",
//       uaeRelatedStatements: "Praised the UAE’s visionary approach to 5G and AI. Emphasized Nokia’s long-term commitment to the UAE’s digital ecosystem.",
//       roleInUaeRelations: "Strengthened ties with UAE telecom providers, championing 5G expansions and forging MoUs on 6G research and AI-driven connectivity.",
//       bilateralAgreements: "Facilitated major contracts like Nokia-Etisalat 5G expansion (2021–2023) and a 2023–2024 6G research MoU with UAE regulators and universities.",
//       alignmentFriction: "Aligned on digital innovation; navigated multi-vendor competition in the UAE’s telecom sector. Maintained good rapport despite global supply chain challenges.",
//       conclusionOutlook: "His leadership cemented Nokia’s role in UAE connectivity. Leaves a legacy of strong partnership and sets the stage for next-gen expansions under his successor."
//     },
//     {
//       id: 15,
//       name: "Sari Baldauf",
//       position: "Chairman of Nokia",
//       sector: "Business",
//       type: "Corporate Governance",
//       organization: "Nokia",
//       diplomaticRank: "Chairman",
//       photo: "/assets/images/SariB.png",
//       strategicPositioning: "Among the most senior female executives in global telecom. Former head of Nokia’s Networks business, focusing on international market expansion.",
//       uaeRelatedStatements: "Few direct public remarks on the UAE, but consistently emphasizes the Middle East as a key growth region for Nokia.",
//       roleInUaeRelations: "Oversees Nokia’s board-level strategy, supporting expansions in UAE-based R&D and forging digital economy partnerships with Emirati stakeholders.",
//       bilateralAgreements: "Endorses Nokia’s commercial agreements with UAE telcos and fosters Finland–UAE digital cooperation, such as a Finland-UAE Digital Economy Partnership.",
//       alignmentFriction: "European telecom standardization vs. UAE’s regional tech frameworks can require careful negotiation. Competition from global players remains a factor.",
//       conclusionOutlook: "Focuses on strategic alignment with the UAE’s innovation goals, ensuring Nokia’s sustainability and digital leadership remain compelling in the region."
//     },
//     {
//       id: 16,
//       name: "Hakan Agnewall",
//       position: "CEO of Wartsilla",
//       sector: "Business",
//       type: "Corporate Leadership",
//       organization: "Wartsilla",
//       diplomaticRank: "CEO",
//       photo: "/assets/images/HakanA.png",
//       strategicPositioning: "President and CEO of Wärtsilä since 2021. Extensive background in electrification and power systems from Volvo, Bombardier, and ABB.",
//       uaeRelatedStatements: "At ADIPEC 2023, advocated a balanced approach to meeting energy needs, focusing on collaboration and innovation in sustainable energy solutions.",
//       roleInUaeRelations: "Leads Wärtsilä’s operations in the Emirates, contributing marine and energy solutions. Partnerships with Emirati energy projects highlight Finnish technology’s role.",
//       bilateralAgreements: "No specific government-level MoU but engages in commercial contracts supporting Finland–UAE energy cooperation, in line with the 2022 Energy Agreement.",
//       alignmentFriction: "Wärtsilä’s emphasis on clean, innovative energy solutions aligns with UAE’s diversification goals. Market competition and local regulations can be minor friction points.",
//       conclusionOutlook: "Aims to expand Wärtsilä’s presence in the UAE, focusing on sustainable energy technologies and forging deeper collaboration with Emirati stakeholders."
//     },
//     {
//       id: 17,
//       name: "Nathalie Ahlstrom",
//       position: "CEO of Fiskars",
//       sector: "Business",
//       type: "Corporate Leadership",
//       organization: "Fiskars",
//       diplomaticRank: "CEO",
//       photo: "/assets/images/NathaliA.png",
//       strategicPositioning: "Leads one of Finland’s oldest companies, focusing on premium consumer brands in homeware and lifestyle. Emphasizes sustainability and global market expansion.",
//       uaeRelatedStatements: "Identified the UAE as a key premium retail market. Showcased Fiskars products at Expo 2020 Dubai to highlight Finnish design and heritage.",
//       roleInUaeRelations: "Promotes Finnish consumer-brand visibility in the UAE’s luxury retail sector, supporting Finland’s soft diplomacy and brand image.",
//       bilateralAgreements: "Operates within broader Finland–UAE trade frameworks. Collaborates with local distributors and participated in the Finnish pavilion at Expo 2020.",
//       alignmentFriction: "Aligns with UAE’s appetite for high-quality, heritage-driven goods. Competition in premium retail and varied pricing sensitivities can limit deeper market penetration.",
//       conclusionOutlook: "Continues building brand recognition and sustainability messaging, aiming to grow market share among discerning Emirati consumers."
//     },
//     {
//       id: 18,
//       name: "Bjorn Wahlroos",
//       position: "Banker, investor and former Chairman of the Board of Directors of several major Finnish companies",
//       sector: "Business",
//       type: "Finance/Investment",
//       organization: "Multiple",
//       diplomaticRank: "Former Chairman",
//       photo: "/assets/images/BjornW.png",
//       strategicPositioning: "Influential Finnish banker and investor. Former Chairman of Sampo Group, Nordea Bank, and UPM-Kymmene. Known for free-market philosophy and shaping major M&A deals.",
//       uaeRelatedStatements: "No personal statements on the UAE. Indirect ties via Nordea’s transaction with Abu Dhabi Investment Authority (ADIA) and Saxo Bank expansions in the Middle East.",
//       roleInUaeRelations: "Through corporate deals, facilitated capital flows involving ADIA and supported Saxo Bank’s presence in the UAE, indirectly reinforcing financial linkages.",
//       bilateralAgreements: "Operates within existing Finland–UAE frameworks, especially in finance. No direct G2G deals, but corporate-level transactions highlight cross-border investment synergy.",
//       alignmentFriction: "No major friction. Aligns with the UAE’s role as a significant global investor. Potential differences in regulatory stances or market preferences are handled commercially.",
//       conclusionOutlook: "Though semi-retired, Wahlroos’s financial influence endures, with potential for future cross-border investments connecting Finnish and Emirati markets."
//     },
//     {
//       id: 19,
//       name: "Jyri Hakamie",
//       position: "Director General of the Finnish Confederation of Industries",
//       sector: "Business",
//       type: "Industry Association",
//       organization: "Finnish Confederation of Industries",
//       diplomaticRank: "Director General",
//       photo: "/assets/images/JyriH.png",
//       strategicPositioning: "Leads Finland’s largest business advocacy group (EK). Former Minister of Defence and Economic Affairs, leveraging broad policy experience to promote Finnish industries globally.",
//       uaeRelatedStatements: "Positions the UAE as a priority market, praising the country’s ambition in digital transformation, innovation, and sustainability.",
//       roleInUaeRelations: "Organizes trade missions, fosters dialogues through the Finland-UAE Joint Business Council, and encourages Finnish SMEs to explore UAE opportunities.",
//       bilateralAgreements: "Supports the 2024 creation of the UAE-Finland Business Council and endorses MoUs in AI, energy, and digitalization.",
//       alignmentFriction: "Aligns with UAE’s drive for economic diversification. Competition from other nations is a typical challenge for Finnish exports.",
//       conclusionOutlook: "Continues championing trade delegations and bilateral initiatives, reinforcing Finland’s brand in innovation, sustainability, and advanced manufacturing."
//     },
//     {
//       id: 20,
//       name: "Seppo Vikstrom",
//       position: "Chairman of ISKU",
//       sector: "Business",
//       type: "Corporate Governance",
//       organization: "ISKU",
//       diplomaticRank: "Chairman",
//       photo: "/assets/images/SeppoV.png",
//       strategicPositioning: "Third-generation leader of a major Finnish furniture brand, known for design quality and eco-friendly manufacturing. Guides ISKU’s domestic and export growth.",
//       uaeRelatedStatements: "Focuses on synergy between Finland and the UAE in sustainability and education. Family members have publicly praised UAE’s openness to innovative school design.",
//       roleInUaeRelations: "ISKU Middle East FZ-LLC in Dubai furnishes educational institutions, bridging Finnish learning environment concepts with UAE’s modernization goals.",
//       bilateralAgreements: "Works under Finland’s trade frameworks; invests in local presence via showrooms and networks. Partners with the Finnish Business Council in Dubai.",
//       alignmentFriction: "UAE’s focus on premium, sustainable solutions aligns with ISKU’s brand. Faces competitive pricing from global furniture suppliers and logistical complexities.",
//       conclusionOutlook: "Continues promoting Finnish educational design in the UAE, leveraging sustainability as a key differentiator to deepen market presence."
//     },
//     {
//       id: 21,
//       name: "Lassi Noponen",
//       position: "CEO of Business Finland",
//       sector: "Business",
//       type: "Government-Business",
//       organization: "Business Finland",
//       diplomaticRank: "CEO",
//       photo: "/assets/images/LassiN.png",
//       strategicPositioning: "Appointed in September 2024, leads Finland’s main trade and investment promotion agency. Focuses on global partnerships and high-potential markets.",
//       uaeRelatedStatements: "Positions the UAE as a strategic priority in the Middle East. Participated in the January 2025 trade delegation to Abu Dhabi, emphasizing digital economy ties.",
//       roleInUaeRelations: "Coordinates business delegations and fosters bilateral trade. Translates government-to-government MoUs (e.g. in energy) into real commercial projects.",
//       bilateralAgreements: "Supports implementing the 2022 Energy MoU, organizes Team Finland missions, and drives new trade frameworks for AI, education, and digitalization.",
//       alignmentFriction: "Strong synergy with UAE’s innovation drive. Competition from larger exporters or regionally closer suppliers can challenge Finnish SMEs.",
//       conclusionOutlook: "Aims to expand Finnish presence in the UAE, focusing on advanced tech, sustainability, and co-innovation, especially for the 50th anniversary of diplomatic ties."
//     },
//     {
//       id: 22,
//       name: "Markus Rauramo",
//       position: "CEO of Fortum",
//       sector: "Business",
//       type: "Corporate Leadership",
//       organization: "Fortum",
//       diplomaticRank: "CEO",
//       photo: "/assets/images/MarkusR.png",
//       strategicPositioning: "Leads a major Nordic energy company specializing in clean energy. Committed to renewable projects and CO2-free electricity generation.",
//       uaeRelatedStatements: "No direct UAE-specific quotes, but Fortum participated in Expo 2020 Dubai to showcase sustainable energy solutions.",
//       roleInUaeRelations: "Supports Finland’s energy diplomacy by highlighting advanced renewable technology. Potential partnerships with UAE’s green energy initiatives.",
//       bilateralAgreements: "Operates within the 2022 Finland–UAE Energy MoU context, focusing on opportunities for renewable energy and power solutions in the region.",
//       alignmentFriction: "UAE’s push for diverse energy aligns with Fortum’s green expertise. Market entry or local partnership complexities are typical friction points.",
//       conclusionOutlook: "Fortum likely to explore deeper collaboration in solar, wind, or hydrogen projects, leveraging the UAE’s drive for sustainable energy diversification."
//     },
//     {
//       id: 23,
//       name: "Juho Romakkaniemi",
//       position: "CEO of FCC",
//       sector: "Business",
//       type: "Corporate Leadership",
//       organization: "Finnish Chamber of Commerce",
//       diplomaticRank: "CEO",
//       photo: "/assets/images/JuboR.png",
//       strategicPositioning: "Heads the Finland Chamber of Commerce, representing around 20,000 companies. Former senior advisor in Finnish and EU politics.",
//       uaeRelatedStatements: "Calls the UAE an essential partner for Finnish businesses, noting complementary interests in sustainability, digital solutions, and innovation.",
//       roleInUaeRelations: "Facilitates business delegations and fosters sector-specific forums (e.g., smart cities, digital health). Instrumental in launching the UAE–Finland Business Council.",
//       bilateralAgreements: "Supports and promotes new commercial ties that arise from official frameworks, including MoUs in AI, renewable energy, and digital economy.",
//       alignmentFriction: "High alignment on tech and sustainability. Competition from global players is the main challenge for Finnish SMEs in the UAE.",
//       conclusionOutlook: "Plans to further strengthen trade ties, building on the success of Expo 2020 Dubai and other bilateral initiatives to keep Finnish industry visible in the Gulf."
//     },
//     {
//       id: 24,
//       name: "Representative of Ehrnooth family",
//       position: "Family representative",
//       sector: "Business",
//       type: "Family Business",
//       organization: "Ehrnooth family interests",
//       diplomaticRank: "Representative",
//       photo: "/assets/images/EhnoothFamily.png",
//       strategicPositioning: "Finland’s most prominent noble business dynasty with investments in banking, manufacturing, forestry, and technology. Known for long-term, stable stewardship.",
//       uaeRelatedStatements: "Family members rarely make explicit political statements. Through companies like KONE, Pöyry/AFRY, and Wärtsilä, they acknowledge the UAE’s importance as a growth market.",
//       roleInUaeRelations: "Anchor owners in major Finnish firms active in the UAE, thereby shaping investment and project decisions that reinforce bilateral trade and technology exchanges.",
//       bilateralAgreements: "Operate under Finland’s existing trade frameworks. Their companies often join Team Finland delegations and sign commercial contracts in the Gulf.",
//       alignmentFriction: "Strong synergy with UAE’s infrastructure and energy priorities. Competition from global peers can be a friction point in securing contracts.",
//       conclusionOutlook: "Likely to maintain or expand strategic investments in sectors aligned with UAE’s development goals, reinforcing the family’s behind-the-scenes influence."
//     },
//     {
//       id: 25,
//       name: "Robin Langenskiold",
//       position: "Representative from the Erkko family",
//       sector: "Business",
//       type: "Family Business",
//       organization: "Erkko family interests",
//       diplomaticRank: "Representative",
//       photo: "/assets/images/RobinL.png",
//       strategicPositioning: "Part of the Erkko family, historically dominating Finland’s media landscape via Sanoma. Major shareholder and former board member at Sanoma Corporation.",
//       uaeRelatedStatements: "No direct personal statements on the UAE. Through Helsingin Sanomat coverage, the family’s media outlets have portrayed the UAE as a rising business hub.",
//       roleInUaeRelations: "Indirectly shapes public discourse on the UAE through media coverage. Potential for future expansions in education or digital media solutions in the region.",
//       bilateralAgreements: "Not directly involved in official treaties; family business interests remain primarily in Finland’s media sector with limited direct UAE presence.",
//       alignmentFriction: "Media coverage typically business-friendly. Minimal friction unless editorial stances conflict with certain Middle Eastern narratives.",
//       conclusionOutlook: "Family’s influence in media could support a favorable climate for Finnish–UAE business ties. No immediate plans for deeper direct investment in the UAE."
//     },
//     {
//       id: 26,
//       name: "Rafaela Seppala",
//       position: "Representative from the Erkko family",
//       sector: "Business",
//       type: "Family Business",
//       organization: "Erkko family interests",
//       diplomaticRank: "Representative",
//       photo: "/assets/images/RafaelaS.png",
//       strategicPositioning: "Also an Erkko family member, major shareholder in Sanoma. Has held board roles across media and cultural foundations, influencing Finnish arts and journalism.",
//       uaeRelatedStatements: "No explicit statements on the UAE. Family’s media coverage emphasizes the UAE’s business environment and tourism potential.",
//       roleInUaeRelations: "Similar to Langenskiold, shapes the broader media narrative through Sanoma outlets. Could theoretically facilitate cross-cultural events or coverage on the UAE.",
//       bilateralAgreements: "No direct involvement. The family’s focus remains on Finnish media holdings rather than forging UAE-specific agreements.",
//       alignmentFriction: "Low friction. Potential tension only if editorial lines clash with sensitive regional issues. Typically supportive coverage of UAE’s economic achievements.",
//       conclusionOutlook: "Likely to maintain a low-profile stance, continuing to uphold a generally favorable media portrayal of the UAE’s growth and opportunities."
//     }
//   ];





// const FinnishLeadershipDirectory = () => {
//   // Filter state variables
//   const [sectorFilter, setSectorFilter] = useState('All Sectors');
//   const [typeFilter, setTypeFilter] = useState('All Types');
//   const [organizationFilter, setOrganizationFilter] = useState('All Organisations');
//   const [diplomaticRankFilter, setDiplomaticRankFilter] = useState('All Ranks');

//   // State for the detail modal
//   const [selectedOfficial, setSelectedOfficial] = useState(null);

//   // Generate unique options for each filter
//   const sectors = ['All Sectors', ...new Set(officials.map(o => o.sector))];
//   const types = ['All Types', ...new Set(officials.map(o => o.type))];
//   const organisations = ['All Organisations', ...new Set(officials.map(o => o.organization))];
//   const diplomaticRanks = ['All Ranks', ...new Set(officials.map(o => o.diplomaticRank))];

//   // Filter the officials based on the selected filters
//   const filteredOfficials = officials.filter(o => {
//     if (sectorFilter !== 'All Sectors' && o.sector !== sectorFilter) return false;
//     if (typeFilter !== 'All Types' && o.type !== typeFilter) return false;
//     if (organizationFilter !== 'All Organisations' && o.organization !== organizationFilter) return false;
//     if (diplomaticRankFilter !== 'All Ranks' && o.diplomaticRank !== diplomaticRankFilter) return false;
//     return true;
//   });

//   // Function to reset all filters
//   const resetFilters = () => {
//     setSectorFilter('All Sectors');
//     setTypeFilter('All Types');
//     setOrganizationFilter('All Organisations');
//     setDiplomaticRankFilter('All Ranks');
//   };

//   return (
//     <div className="w-full max-w-6xl mx-auto p-4">
//       <h1 className="text-3xl font-bold text-blue-700 mb-8">Finnish Leadership Directory</h1>

//       {/* Filter Section */}
//       <div className="bg-gray-100 p-6 rounded-lg mb-8">
//         <div className="flex items-center justify-between mb-4">
//           <h2 className="text-xl font-bold">Filter Officials</h2>
//           <button
//             className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center"
//             onClick={resetFilters}
//           >
//             Reset Filters
//           </button>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//           {/* Sector Filter */}
//           <div>
//             <label className="block text-gray-700 mb-2">Sector</label>
//             <select
//               className="w-full p-2 border border-gray-300 rounded-lg bg-white"
//               value={sectorFilter}
//               onChange={(e) => setSectorFilter(e.target.value)}
//             >
//               {sectors.map(sector => (
//                 <option key={sector} value={sector}>{sector}</option>
//               ))}
//             </select>
//           </div>

//           {/* Type Filter */}
//           <div>
//             <label className="block text-gray-700 mb-2">Type</label>
//             <select
//               className="w-full p-2 border border-gray-300 rounded-lg bg-white"
//               value={typeFilter}
//               onChange={(e) => setTypeFilter(e.target.value)}
//             >
//               {types.map(type => (
//                 <option key={type} value={type}>{type}</option>
//               ))}
//             </select>
//           </div>

//           {/* Organisation Filter */}
//           <div>
//             <label className="block text-gray-700 mb-2">Organisation</label>
//             <select
//               className="w-full p-2 border border-gray-300 rounded-lg bg-white"
//               value={organizationFilter}
//               onChange={(e) => setOrganizationFilter(e.target.value)}
//             >
//               {organisations.map(org => (
//                 <option key={org} value={org}>{org}</option>
//               ))}
//             </select>
//           </div>

//           {/* Diplomatic Rank Filter */}
//           <div>
//             <label className="block text-gray-700 mb-2">Diplomatic Rank</label>
//             <select
//               className="w-full p-2 border border-gray-300 rounded-lg bg-white"
//               value={diplomaticRankFilter}
//               onChange={(e) => setDiplomaticRankFilter(e.target.value)}
//             >
//               {diplomaticRanks.map(rank => (
//                 <option key={rank} value={rank}>{rank}</option>
//               ))}
//             </select>
//           </div>
//         </div>
//       </div>

//       {/* Display the number of officials */}
//       <div className="mb-4 text-gray-600">
//         Showing {filteredOfficials.length} of {officials.length} officials
//       </div>

//       {/* Officials Grid */}
//       {filteredOfficials.length > 0 ? (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredOfficials.map(off => (
//             <div
//               key={off.id}
//               className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
//             >
//               {/* Optionally display a photo here */}
//               {/* <img src={off.photo} alt={off.name} className="w-full h-48 object-cover" /> */}
//               <div className="p-6">
//                 <h3 className="text-lg font-semibold text-blue-700">{off.name}</h3>
//                 <p className="text-gray-700 mt-1">{off.position}</p>
//                 <div className="mt-4 flex flex-wrap gap-2">
//                   <span className="bg-blue-50 text-blue-700 rounded-full px-3 py-1 text-sm font-medium">{off.sector}</span>
//                   <span className="bg-green-50 text-green-700 rounded-full px-3 py-1 text-sm font-medium">{off.type}</span>
//                   <span className="bg-yellow-50 text-yellow-700 rounded-full px-3 py-1 text-sm font-medium">{off.organization}</span>
//                   <span className="bg-purple-50 text-purple-700 rounded-full px-3 py-1 text-sm font-medium">{off.diplomaticRank}</span>
//                 </div>
//                 <button
//                   onClick={() => setSelectedOfficial(off)}
//                   className="mt-4 inline-block text-blue-600 hover:underline"
//                 >
//                   View Details
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <div className="text-center p-8 text-gray-500">
//           <p className="text-lg">No officials found matching the selected filters.</p>
//           <button
//             className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg"
//             onClick={resetFilters}
//           >
//             Reset Filters
//           </button>
//         </div>
//       )}

//       {/* Detail Modal */}
//       {selectedOfficial && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//           <div className="bg-white rounded-lg shadow-lg max-w-3xl w-full max-h-screen overflow-y-auto">
//             <div className="p-6 border-b border-gray-200 flex justify-between items-start">
//               <div>
//                 <h2 className="text-2xl font-bold text-blue-700">{selectedOfficial.name}</h2>
//                 <p className="text-gray-600">{selectedOfficial.position}</p>
//               </div>
//               <button
//                 className="text-gray-500 hover:text-gray-700"
//                 onClick={() => setSelectedOfficial(null)}
//               >
//                 <svg className="w-6 h-6" fill="none" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               </button>
//             </div>
//             <div className="p-6">
//               {/* Optionally display the photo */}
//               {/* <img src={selectedOfficial.photo} alt={selectedOfficial.name} className="w-32 h-32 object-cover rounded mb-4" /> */}
//               <p className="mb-2"><strong>Sector:</strong> {selectedOfficial.sector}</p>
//               <p className="mb-2"><strong>Type:</strong> {selectedOfficial.type}</p>
//               <p className="mb-2"><strong>Organisation:</strong> {selectedOfficial.organization}</p>
//               <p className="mb-2"><strong>Diplomatic Rank:</strong> {selectedOfficial.diplomaticRank}</p>
//               <div className="mt-4">
//                 <h3 className="font-semibold mb-2">Strategic Positioning</h3>
//                 <p>{selectedOfficial.strategicPositioning}</p>
//               </div>
//               <div className="mt-4">
//                 <h3 className="font-semibold mb-2">UAE-Related Statements</h3>
//                 <p>{selectedOfficial.uaeRelatedStatements}</p>
//               </div>
//               <div className="mt-4">
//                 <h3 className="font-semibold mb-2">Role in UAE Relations</h3>
//                 <p>{selectedOfficial.roleInUaeRelations}</p>
//               </div>
//               <div className="mt-4">
//                 <h3 className="font-semibold mb-2">Bilateral Agreements</h3>
//                 <p>{selectedOfficial.bilateralAgreements}</p>
//               </div>
//               <div className="mt-4">
//                 <h3 className="font-semibold mb-2">Alignment & Friction</h3>
//                 <p>{selectedOfficial.alignmentFriction}</p>
//               </div>
//               <div className="mt-4">
//                 <h3 className="font-semibold mb-2">Conclusion & Outlook</h3>
//                 <p>{selectedOfficial.conclusionOutlook}</p>
//               </div>
//             </div>
//             <div className="p-6 border-t border-gray-200 bg-gray-50 flex justify-end">
//               <button
//                 className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg mr-2"
//                 onClick={() => setSelectedOfficial(null)}
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default FinnishLeadershipDirectory;









































import React, { useState } from 'react';

// Drop your officials data here
const officials = [
    {
      id: 1,
      name: "H.E. Alexander Stubb",
      position: "President of the Republic of Finland",
      sector: "Government",
      type: "Political Leadership",
      organization: "Republic of Finland",
      diplomaticRank: "Head of State",
      photo: "/assets/images/AlexanderS.png",
      strategicPositioning: "Serves as President since March 2024. Has extensive experience in national and international politics, focusing on foreign policy and economic affairs. Strongly advocates for proactive global engagement and sees collaboration beyond traditional partners as essential.",
      uaeRelatedStatements: "Emphasized Finland’s keenness to strengthen ties with the UAE at his inauguration, expressing gratitude for the UAE’s participation and highlighting shared interests in education, renewable energy, and innovative governance.",
      roleInUaeRelations: "Shapes Finland’s overall approach, encouraging bilateral cooperation in trade, education, and technology. Works closely with the Prime Minister and other ministers to align foreign policy with practical engagements.",
      bilateralAgreements: "Supports the longstanding legal framework including the 1982 Economic Cooperation Agreement, the 1996 Double Taxation and Investment Protection treaties, and the 2013 Air Services Agreement, which underpin Finland–UAE ties.",
      alignmentFriction: "Aligned on innovation, sustainability, and clean energy. Potential friction could arise from Finland’s EU-aligned export controls (e.g. arms embargo in certain conflicts) and differing stances on global crises.",
      conclusionOutlook: "Continues to view the UAE as a key Gulf partner. Seeks to deepen ties in technology, climate solutions, and education, leveraging the 50th anniversary of Finland–UAE relations as a springboard."
    },
    {
      id: 2,
      name: "H.E. Elina Valtonen",
      position: "Minister of Foreign Affairs",
      sector: "Government",
      type: "Ministry",
      organization: "Ministry of Foreign Affairs",
      diplomaticRank: "Minister",
      photo: "/assets/images/ElinaV.png",
      strategicPositioning: "Holds significant influence in shaping Finland’s foreign policy during NATO accession. Has a background in investment banking and economics, emphasizing pragmatic, globally oriented diplomacy.",
      uaeRelatedStatements: "Met with UAE Foreign Minister in September 2023 at UNGA to discuss cooperation in economic, trade, cultural, and energy fields. Signals a positive and pragmatic approach to Gulf relations.",
      roleInUaeRelations: "Guides Finland’s diplomatic priorities, coordinating with other ministries to expand trade and educational links with the UAE. Oversees the Joint Committee mechanism that fosters bilateral collaboration.",
      bilateralAgreements: "Supports the 1982 Economic Cooperation Agreement, 1996 Double Taxation, 2013 Air Services, and 2022 Energy Cooperation MoU. Led the second Joint Committee meeting in Helsinki in November 2024.",
      alignmentFriction: "Strong alignment in tech, sustainability, and energy diversification. Some differences may surface over Finland’s strict stance on Russia-related sanctions or defense exports.",
      conclusionOutlook: "Aims to solidify Finland–UAE ties by promoting commercial, educational, and innovation-driven partnerships, leveraging shared interests in renewable energy and digital transformation."
    },
    {
      id: 3,
      name: "H.E. Sandra Berqvist",
      position: "Minister of Youth, Sport and Physical Activity",
      sector: "Government",
      type: "Ministry",
      organization: "Ministry of Education and Culture",
      diplomaticRank: "Minister",
      photo: "/assets/images/SandraB.png",
      strategicPositioning: "Serves as Minister since June 2023, previously active in municipal politics and academia. Focuses on youth engagement, sports, and community well-being.",
      uaeRelatedStatements: "Statements about the UAE have been nonobtrusive; Finland generally sees the UAE as a partner for sports diplomacy and youth programs.",
      roleInUaeRelations: "Ministry involvement in youth exchanges, sports diplomacy, and inclusivity (e.g. Special Olympics World Games Abu Dhabi 2019). Potential for shared best practices in youth empowerment.",
      bilateralAgreements: "Collaboration primarily facilitated through cultural, educational, and sports events, including Finland’s participation in Special Olympics 2019 in Abu Dhabi.",
      alignmentFriction: "Both countries value sports as a unifying force, focusing on inclusivity and community building. Minimal friction; differences in approach to funding or volunteer-driven vs. government-driven sports programs are seen as opportunities for exchange.",
      conclusionOutlook: "Committed to expanding sports-based collaboration, youth exchanges, and inclusive athletic events, reinforcing mutual goodwill."
    },
    {
      id: 4,
      name: "H.E. Anna-Kaisa Ikonen",
      position: "Minister of Local and Regional Government",
      sector: "Government",
      type: "Ministry",
      organization: "Ministry of Finance",
      diplomaticRank: "Minister",
      photo: "/assets/images/AnnaKaisaI.png",
      strategicPositioning: "Serves as Minister of Local and Regional Government since June 2023. Former mayor of Tampere with deep experience in governance and public administration.",
      uaeRelatedStatements: "No specific public comments on the UAE. Broader diplomatic interactions highlight Finland’s interest in sustainable urban development and smart city initiatives.",
      roleInUaeRelations: "While not directly involved, her ministry could collaborate on urban innovation and digital transformation of public services, aligning with UAE’s push for smart governance.",
      bilateralAgreements: "Finland–UAE relations anchored by frameworks like the 1982 Economic Cooperation Agreement, 1996 Double Taxation Agreement, and 2013 Air Services Agreement. Potential for city-level partnerships.",
      alignmentFriction: "Both prioritize innovation and sustainable development. Cultural differences in municipal structures are navigable through mutual dialogue.",
      conclusionOutlook: "Likely to encourage knowledge exchange on local governance, smart cities, and public-sector innovation, furthering bilateral ties in the realm of municipal collaboration."
    },
    {
      id: 5,
      name: "H.E. Jussi Halla-aho",
      position: "Speaker of the Parliament",
      sector: "Government",
      type: "Legislative",
      organization: "Parliament of Finland",
      diplomaticRank: "Parliamentary Leader",
      photo: "/assets/images/JussiH.png",
      strategicPositioning: "Speaker of the Parliament and former leader of a major conservative party, with significant influence on parliamentary procedures and foreign policy oversight.",
      uaeRelatedStatements: "Has not made extensive public statements on the UAE. Generally promotes pragmatic foreign policy and economic cooperation with Gulf states.",
      roleInUaeRelations: "Facilitates parliamentary-level exchanges. Provides legislative support and legitimacy for broader Finland–UAE diplomatic initiatives led by the executive branch.",
      bilateralAgreements: "No direct role in signing agreements but upholds the parliamentary ratification and review of treaties with the UAE.",
      alignmentFriction: "Aligns on economic partnerships and national security. Potentially stricter stances on migration or certain EU policies may differ from UAE approaches.",
      conclusionOutlook: "Continues to support parliamentary diplomacy, encouraging stable, mutually beneficial ties with the UAE in trade and security matters."
    },
    {
      id: 6,
      name: "H.E. Tuula Yrjola",
      position: "Ambassador of Finland to the UAE",
      sector: "Government",
      type: "Diplomatic",
      organization: "Ministry of Foreign Affairs",
      diplomaticRank: "Ambassador",
      photo: "/assets/images/TuulaY.png",
      strategicPositioning: "A seasoned diplomat with three decades of experience in Eastern Europe, Central Asia, and the Middle East. Assumed ambassadorship in October 2023.",
      uaeRelatedStatements: "Emphasizes strengthening bilateral relations, promoting Finnish business interests (Team Finland), and monitoring political developments in the UAE.",
      roleInUaeRelations: "Leads the Finnish Embassy in Abu Dhabi, overseeing economic diplomacy, political engagement, and consular services. Acts as the principal link between Finland and the UAE.",
      bilateralAgreements: "Actively supports the existing treaties (economic, taxation, air services) and fosters new MoUs in education, energy, and innovation.",
      alignmentFriction: "Shares Finland’s focus on sustainability and innovation, echoing UAE’s Vision 2030. Minimal friction; possible differences in approach to regional conflicts or human rights are managed diplomatically.",
      conclusionOutlook: "Aims to deepen trade, innovation, and cultural ties, ensuring Finland’s presence grows in alignment with UAE’s development goals."
    },
    {
      id: 7,
      name: "H.E. Anna-Kaisa Heikkinen",
      position: "Director General, Department for Africa, the Middle East and Latin America",
      sector: "Government",
      type: "Diplomatic",
      organization: "Ministry of Foreign Affairs",
      diplomaticRank: "Director General",
      photo: "/assets/images/AnnaKaisaH.png",
      strategicPositioning: "Oversees Finnish diplomatic engagements with Africa, the Middle East, and Latin America. Has served in multiple leadership roles, including ambassadorial positions.",
      uaeRelatedStatements: "Highlighted the UAE’s importance in Finland’s Middle East outreach. Led a high-level delegation to Dubai focusing on sustainability and innovation.",
      roleInUaeRelations: "Directs the strategy for Finland’s missions in the region, guiding bilateral talks and policy frameworks with the UAE. Provides oversight to the Embassy in Abu Dhabi.",
      bilateralAgreements: "Facilitates the Political Consultation Committee (2022) and the Joint Committee (2024), supporting MoUs in energy, education, AI, and space.",
      alignmentFriction: "Aligns strongly on sustainable technology and education. Must balance Finland’s EU stances on issues like sanctions and arms exports with maintaining positive relations.",
      conclusionOutlook: "Plans to expand cooperation in clean energy, digital solutions, and broader Middle East initiatives, strengthening Finland’s role as a trusted partner."
    },
    {
      id: 8,
      name: "Anna-Mari Wong Hamalainen",
      position: "Director of Foreign and Security Policy",
      sector: "Government",
      type: "Policy",
      organization: "Ministry of Foreign Affairs",
      diplomaticRank: "Director",
      photo: "/assets/images/AnnaMariH.png",
      strategicPositioning: "Serves as Director of Foreign and Security Policy, with a background in NATO issues and EU foreign policy. Advises the President’s Cabinet on security strategies.",
      uaeRelatedStatements: "No publicly documented statements specific to the UAE. Focuses mainly on European security and crisis management.",
      roleInUaeRelations: "Contributes to broader frameworks shaping Finland’s foreign relations, which can indirectly influence cooperation with the UAE, especially in security dialogues.",
      bilateralAgreements: "Not directly involved in forging UAE agreements; however, shapes policy frameworks that may underpin new or existing treaties.",
      alignmentFriction: "Finland’s stance on EU security issues might differ from UAE’s neutral or pragmatic positions in certain regional conflicts. No major friction reported.",
      conclusionOutlook: "Remains supportive of collaborative engagements with Gulf nations but focuses primarily on NATO/EU security agendas."
    },
    {
      id: 9,
      name: "Dr. Ville Brumme",
      position: "Director of Peace Mediation",
      sector: "Government",
      type: "Diplomatic",
      organization: "Ministry of Foreign Affairs",
      diplomaticRank: "Director",
      photo: "/assets/images/VilleB.png",
      strategicPositioning: "Appointed by President Stubb in 2024. Formerly at CMI, overseeing mediation projects in Africa, the Middle East, and Eurasia. Brings deep conflict resolution expertise.",
      uaeRelatedStatements: "Policies reflect respect for the UAE’s growing mediation role, especially in the Middle East. Acknowledges UAE’s discreet facilitation style and shared commitment to peaceful resolution.",
      roleInUaeRelations: "Coordinates high-level mediation initiatives, working with Finnish MFA and civil society. Sees the UAE as a like-minded actor in diplomatic solutions, especially in the Horn of Africa.",
      bilateralAgreements: "Engages through the Finland–UAE Political Consultation Committee. Visited Abu Dhabi in October 2024, meeting Dr. Anwar Gargash to enhance dialogue on conflict resolution.",
      alignmentFriction: "Both countries value discreet, outcome-oriented mediation. Potential friction might arise if the UAE’s mediation approaches differ from Finland’s inclusivity norms, but so far cooperation is constructive.",
      conclusionOutlook: "Intends to expand joint mediation efforts, leveraging Finland’s NGO networks and the UAE’s regional influence for broader conflict resolution initiatives."
    },
    {
      id: 10,
      name: "Laila Clyne",
      position: "Diplomatic Advisor to the Minister",
      sector: "Government",
      type: "Advisory",
      organization: "Ministry of Foreign Affairs",
      diplomaticRank: "Advisor",
      photo: "/assets/images/LailaC.png",
      strategicPositioning: "Provides strategic counsel to the Minister for Foreign Affairs. Previously served as Second Secretary at Finland’s Permanent Mission in Geneva and as Adviser at the UN Mission in New York.",
      uaeRelatedStatements: "No known public statements regarding the UAE. Works behind the scenes on broader foreign policy priorities.",
      roleInUaeRelations: "Advises on day-to-day diplomatic matters, possibly offering input on engagements with UAE officials but with minimal direct public role.",
      bilateralAgreements: "Supports the minister in implementing Finland’s treaty frameworks; no direct record of involvement in UAE agreements.",
      alignmentFriction: "No friction points documented, as her role is primarily advisory. Aligns with the ministry’s general foreign policy direction.",
      conclusionOutlook: "Expected to continue providing expert advice, ensuring continuity and coherence in Finland’s foreign relations, including with the UAE."
    },
    {
      id: 11,
      name: "Anne M'Rabet",
      position: "Desk Officer for Persian Gulf, UAE, Bahrain, GCC and OIC",
      sector: "Government",
      type: "Diplomatic",
      organization: "Ministry of Foreign Affairs",
      diplomaticRank: "Officer",
      photo: "/assets/images/AnneM.png",
      strategicPositioning: "Oversees day-to-day bilateral relations with the Gulf region, including the UAE. Part of the Middle East and Gulf Unit at the MFA.",
      uaeRelatedStatements: "No public statements identified. Focused on facilitating diplomatic ties and ensuring alignment with Finland’s broader Middle East policy.",
      roleInUaeRelations: "Coordinates inter-ministerial work on UAE matters, ensuring consistency in policy and day-to-day diplomatic tasks. Provides critical country-specific expertise.",
      bilateralAgreements: "Involved in operationalizing and monitoring existing frameworks like the 2022 Political Consultation Committee, the Joint Committee, and relevant MoUs.",
      alignmentFriction: "Likely deals with routine administrative or regulatory differences. No significant friction reported.",
      conclusionOutlook: "Will continue to manage UAE-related dossiers, supporting smooth bilateral cooperation and possibly contributing to new initiatives in trade or culture."
    },
    {
      id: 12,
      name: "Antti Herlin",
      position: "Chairman of KONE",
      sector: "Business",
      type: "Corporate Governance",
      organization: "KONE",
      diplomaticRank: "Chairman",
      photo: "/assets/images/AnttiH.png",
      strategicPositioning: "Finland’s most influential industrialist. Transformed KONE into a global leader in elevator/escalator solutions with strong expansion in emerging markets.",
      uaeRelatedStatements: "Does not frequently comment on the UAE publicly. KONE’s regional HQ in Dubai, major involvement in iconic UAE projects like Burj Khalifa and Dubai Metro.",
      roleInUaeRelations: "Indirectly influences Finland’s economic diplomacy by showcasing advanced infrastructure solutions. KONE’s presence strengthens bilateral trade and technology ties.",
      bilateralAgreements: "Engages within Finland’s existing frameworks. KONE’s deals in the UAE are typically commercial contracts (e.g., supply for megaprojects), supporting broader trade relationships.",
      alignmentFriction: "Competes with global elevator firms in the UAE market. Must navigate the UAE’s multi-vendor approach while highlighting Finnish innovation and sustainability.",
      conclusionOutlook: "Continues to expand KONE’s footprint in the Gulf, promoting Finnish engineering expertise in sustainable urban mobility."
    },
    {
      id: 13,
      name: "Justin Hotard",
      position: "Incoming CEO of Nokia",
      sector: "Business",
      type: "Corporate Leadership",
      organization: "Nokia",
      diplomaticRank: "CEO (Incoming)",
      photo: "/assets/images/JustinH.png",
      strategicPositioning: "Assuming Nokia’s top leadership role in 2024. Formerly led AI-driven infrastructure at HPE, focusing on next-gen networking and cloud solutions.",
      uaeRelatedStatements: "No direct statements yet. Nokia’s longstanding presence in the UAE, especially in 5G rollout and digital infrastructure, signals continuity.",
      roleInUaeRelations: "Will oversee Nokia’s future expansions in 5G/6G, cybersecurity, and AI-driven networks in the Emirates. Maintains close ties with local telecom operators.",
      bilateralAgreements: "Nokia’s commercial MOUs with UAE telcos (Etisalat, Du) support the overall Finland–UAE digital cooperation, but no direct G2G agreements are known.",
      alignmentFriction: "Faces competition from Huawei, Ericsson, and others in the UAE. Nokia’s emphasis on secure, energy-efficient networks aligns with UAE’s digital transformation goals.",
      conclusionOutlook: "Likely to deepen partnerships with UAE operators, bridging Nokia’s new AI-driven solutions and the Emirates’ ambition to be a tech leader."
    },
    {
      id: 14,
      name: "Pekka Lundmark",
      position: "Outgoing CEO of Nokia",
      sector: "Business",
      type: "Corporate Leadership",
      organization: "Nokia",
      diplomaticRank: "CEO (Outgoing)",
      photo: "/assets/images/PekkaL.png",
      strategicPositioning: "Led Nokia from 2020–2024, steering a critical transformation focusing on 5G, AI-powered automation, and green telecom solutions.",
      uaeRelatedStatements: "Praised the UAE’s visionary approach to 5G and AI. Emphasized Nokia’s long-term commitment to the UAE’s digital ecosystem.",
      roleInUaeRelations: "Strengthened ties with UAE telecom providers, championing 5G expansions and forging MoUs on 6G research and AI-driven connectivity.",
      bilateralAgreements: "Facilitated major contracts like Nokia-Etisalat 5G expansion (2021–2023) and a 2023–2024 6G research MoU with UAE regulators and universities.",
      alignmentFriction: "Aligned on digital innovation; navigated multi-vendor competition in the UAE’s telecom sector. Maintained good rapport despite global supply chain challenges.",
      conclusionOutlook: "His leadership cemented Nokia’s role in UAE connectivity. Leaves a legacy of strong partnership and sets the stage for next-gen expansions under his successor."
    },
    {
      id: 15,
      name: "Sari Baldauf",
      position: "Chairman of Nokia",
      sector: "Business",
      type: "Corporate Governance",
      organization: "Nokia",
      diplomaticRank: "Chairman",
      photo: "/assets/images/SariB.png",
      strategicPositioning: "Among the most senior female executives in global telecom. Former head of Nokia’s Networks business, focusing on international market expansion.",
      uaeRelatedStatements: "Few direct public remarks on the UAE, but consistently emphasizes the Middle East as a key growth region for Nokia.",
      roleInUaeRelations: "Oversees Nokia’s board-level strategy, supporting expansions in UAE-based R&D and forging digital economy partnerships with Emirati stakeholders.",
      bilateralAgreements: "Endorses Nokia’s commercial agreements with UAE telcos and fosters Finland–UAE digital cooperation, such as a Finland-UAE Digital Economy Partnership.",
      alignmentFriction: "European telecom standardization vs. UAE’s regional tech frameworks can require careful negotiation. Competition from global players remains a factor.",
      conclusionOutlook: "Focuses on strategic alignment with the UAE’s innovation goals, ensuring Nokia’s sustainability and digital leadership remain compelling in the region."
    },
    {
      id: 16,
      name: "Hakan Agnewall",
      position: "CEO of Wartsilla",
      sector: "Business",
      type: "Corporate Leadership",
      organization: "Wartsilla",
      diplomaticRank: "CEO",
      photo: "/assets/images/HakanA.png",
      strategicPositioning: "President and CEO of Wärtsilä since 2021. Extensive background in electrification and power systems from Volvo, Bombardier, and ABB.",
      uaeRelatedStatements: "At ADIPEC 2023, advocated a balanced approach to meeting energy needs, focusing on collaboration and innovation in sustainable energy solutions.",
      roleInUaeRelations: "Leads Wärtsilä’s operations in the Emirates, contributing marine and energy solutions. Partnerships with Emirati energy projects highlight Finnish technology’s role.",
      bilateralAgreements: "No specific government-level MoU but engages in commercial contracts supporting Finland–UAE energy cooperation, in line with the 2022 Energy Agreement.",
      alignmentFriction: "Wärtsilä’s emphasis on clean, innovative energy solutions aligns with UAE’s diversification goals. Market competition and local regulations can be minor friction points.",
      conclusionOutlook: "Aims to expand Wärtsilä’s presence in the UAE, focusing on sustainable energy technologies and forging deeper collaboration with Emirati stakeholders."
    },
    {
      id: 17,
      name: "Nathalie Ahlstrom",
      position: "CEO of Fiskars",
      sector: "Business",
      type: "Corporate Leadership",
      organization: "Fiskars",
      diplomaticRank: "CEO",
      photo: "/assets/images/NathaliA.png",
      strategicPositioning: "Leads one of Finland’s oldest companies, focusing on premium consumer brands in homeware and lifestyle. Emphasizes sustainability and global market expansion.",
      uaeRelatedStatements: "Identified the UAE as a key premium retail market. Showcased Fiskars products at Expo 2020 Dubai to highlight Finnish design and heritage.",
      roleInUaeRelations: "Promotes Finnish consumer-brand visibility in the UAE’s luxury retail sector, supporting Finland’s soft diplomacy and brand image.",
      bilateralAgreements: "Operates within broader Finland–UAE trade frameworks. Collaborates with local distributors and participated in the Finnish pavilion at Expo 2020.",
      alignmentFriction: "Aligns with UAE’s appetite for high-quality, heritage-driven goods. Competition in premium retail and varied pricing sensitivities can limit deeper market penetration.",
      conclusionOutlook: "Continues building brand recognition and sustainability messaging, aiming to grow market share among discerning Emirati consumers."
    },
    {
      id: 18,
      name: "Bjorn Wahlroos",
      position: "Banker, investor and former Chairman of the Board of Directors of several major Finnish companies",
      sector: "Business",
      type: "Finance/Investment",
      organization: "Multiple",
      diplomaticRank: "Former Chairman",
      photo: "/assets/images/BjornW.png",
      strategicPositioning: "Influential Finnish banker and investor. Former Chairman of Sampo Group, Nordea Bank, and UPM-Kymmene. Known for free-market philosophy and shaping major M&A deals.",
      uaeRelatedStatements: "No personal statements on the UAE. Indirect ties via Nordea’s transaction with Abu Dhabi Investment Authority (ADIA) and Saxo Bank expansions in the Middle East.",
      roleInUaeRelations: "Through corporate deals, facilitated capital flows involving ADIA and supported Saxo Bank’s presence in the UAE, indirectly reinforcing financial linkages.",
      bilateralAgreements: "Operates within existing Finland–UAE frameworks, especially in finance. No direct G2G deals, but corporate-level transactions highlight cross-border investment synergy.",
      alignmentFriction: "No major friction. Aligns with the UAE’s role as a significant global investor. Potential differences in regulatory stances or market preferences are handled commercially.",
      conclusionOutlook: "Though semi-retired, Wahlroos’s financial influence endures, with potential for future cross-border investments connecting Finnish and Emirati markets."
    },
    {
      id: 19,
      name: "Jyri Hakamie",
      position: "Director General of the Finnish Confederation of Industries",
      sector: "Business",
      type: "Industry Association",
      organization: "Finnish Confederation of Industries",
      diplomaticRank: "Director General",
      photo: "/assets/images/JyriH.png",
      strategicPositioning: "Leads Finland’s largest business advocacy group (EK). Former Minister of Defence and Economic Affairs, leveraging broad policy experience to promote Finnish industries globally.",
      uaeRelatedStatements: "Positions the UAE as a priority market, praising the country’s ambition in digital transformation, innovation, and sustainability.",
      roleInUaeRelations: "Organizes trade missions, fosters dialogues through the Finland-UAE Joint Business Council, and encourages Finnish SMEs to explore UAE opportunities.",
      bilateralAgreements: "Supports the 2024 creation of the UAE-Finland Business Council and endorses MoUs in AI, energy, and digitalization.",
      alignmentFriction: "Aligns with UAE’s drive for economic diversification. Competition from other nations is a typical challenge for Finnish exports.",
      conclusionOutlook: "Continues championing trade delegations and bilateral initiatives, reinforcing Finland’s brand in innovation, sustainability, and advanced manufacturing."
    },
    {
      id: 20,
      name: "Seppo Vikstrom",
      position: "Chairman of ISKU",
      sector: "Business",
      type: "Corporate Governance",
      organization: "ISKU",
      diplomaticRank: "Chairman",
      photo: "/assets/images/SeppoV.png",
      strategicPositioning: "Third-generation leader of a major Finnish furniture brand, known for design quality and eco-friendly manufacturing. Guides ISKU’s domestic and export growth.",
      uaeRelatedStatements: "Focuses on synergy between Finland and the UAE in sustainability and education. Family members have publicly praised UAE’s openness to innovative school design.",
      roleInUaeRelations: "ISKU Middle East FZ-LLC in Dubai furnishes educational institutions, bridging Finnish learning environment concepts with UAE’s modernization goals.",
      bilateralAgreements: "Works under Finland’s trade frameworks; invests in local presence via showrooms and networks. Partners with the Finnish Business Council in Dubai.",
      alignmentFriction: "UAE’s focus on premium, sustainable solutions aligns with ISKU’s brand. Faces competitive pricing from global furniture suppliers and logistical complexities.",
      conclusionOutlook: "Continues promoting Finnish educational design in the UAE, leveraging sustainability as a key differentiator to deepen market presence."
    },
    {
      id: 21,
      name: "Lassi Noponen",
      position: "CEO of Business Finland",
      sector: "Business",
      type: "Government-Business",
      organization: "Business Finland",
      diplomaticRank: "CEO",
      photo: "/assets/images/LassiN.png",
      strategicPositioning: "Appointed in September 2024, leads Finland’s main trade and investment promotion agency. Focuses on global partnerships and high-potential markets.",
      uaeRelatedStatements: "Positions the UAE as a strategic priority in the Middle East. Participated in the January 2025 trade delegation to Abu Dhabi, emphasizing digital economy ties.",
      roleInUaeRelations: "Coordinates business delegations and fosters bilateral trade. Translates government-to-government MoUs (e.g. in energy) into real commercial projects.",
      bilateralAgreements: "Supports implementing the 2022 Energy MoU, organizes Team Finland missions, and drives new trade frameworks for AI, education, and digitalization.",
      alignmentFriction: "Strong synergy with UAE’s innovation drive. Competition from larger exporters or regionally closer suppliers can challenge Finnish SMEs.",
      conclusionOutlook: "Aims to expand Finnish presence in the UAE, focusing on advanced tech, sustainability, and co-innovation, especially for the 50th anniversary of diplomatic ties."
    },
    {
      id: 22,
      name: "Markus Rauramo",
      position: "CEO of Fortum",
      sector: "Business",
      type: "Corporate Leadership",
      organization: "Fortum",
      diplomaticRank: "CEO",
      photo: "/assets/images/MarkusR.png",
      strategicPositioning: "Leads a major Nordic energy company specializing in clean energy. Committed to renewable projects and CO2-free electricity generation.",
      uaeRelatedStatements: "No direct UAE-specific quotes, but Fortum participated in Expo 2020 Dubai to showcase sustainable energy solutions.",
      roleInUaeRelations: "Supports Finland’s energy diplomacy by highlighting advanced renewable technology. Potential partnerships with UAE’s green energy initiatives.",
      bilateralAgreements: "Operates within the 2022 Finland–UAE Energy MoU context, focusing on opportunities for renewable energy and power solutions in the region.",
      alignmentFriction: "UAE’s push for diverse energy aligns with Fortum’s green expertise. Market entry or local partnership complexities are typical friction points.",
      conclusionOutlook: "Fortum likely to explore deeper collaboration in solar, wind, or hydrogen projects, leveraging the UAE’s drive for sustainable energy diversification."
    },
    {
      id: 23,
      name: "Juho Romakkaniemi",
      position: "CEO of FCC",
      sector: "Business",
      type: "Corporate Leadership",
      organization: "Finnish Chamber of Commerce",
      diplomaticRank: "CEO",
      photo: "/assets/images/JuboR.png",
      strategicPositioning: "Heads the Finland Chamber of Commerce, representing around 20,000 companies. Former senior advisor in Finnish and EU politics.",
      uaeRelatedStatements: "Calls the UAE an essential partner for Finnish businesses, noting complementary interests in sustainability, digital solutions, and innovation.",
      roleInUaeRelations: "Facilitates business delegations and fosters sector-specific forums (e.g., smart cities, digital health). Instrumental in launching the UAE–Finland Business Council.",
      bilateralAgreements: "Supports and promotes new commercial ties that arise from official frameworks, including MoUs in AI, renewable energy, and digital economy.",
      alignmentFriction: "High alignment on tech and sustainability. Competition from global players is the main challenge for Finnish SMEs in the UAE.",
      conclusionOutlook: "Plans to further strengthen trade ties, building on the success of Expo 2020 Dubai and other bilateral initiatives to keep Finnish industry visible in the Gulf."
    },
    {
      id: 24,
      name: "Representative of Ehrnooth family",
      position: "Family representative",
      sector: "Business",
      type: "Family Business",
      organization: "Ehrnooth family interests",
      diplomaticRank: "Representative",
      photo: "/assets/images/EhnoothFamily.png",
      strategicPositioning: "Finland’s most prominent noble business dynasty with investments in banking, manufacturing, forestry, and technology. Known for long-term, stable stewardship.",
      uaeRelatedStatements: "Family members rarely make explicit political statements. Through companies like KONE, Pöyry/AFRY, and Wärtsilä, they acknowledge the UAE’s importance as a growth market.",
      roleInUaeRelations: "Anchor owners in major Finnish firms active in the UAE, thereby shaping investment and project decisions that reinforce bilateral trade and technology exchanges.",
      bilateralAgreements: "Operate under Finland’s existing trade frameworks. Their companies often join Team Finland delegations and sign commercial contracts in the Gulf.",
      alignmentFriction: "Strong synergy with UAE’s infrastructure and energy priorities. Competition from global peers can be a friction point in securing contracts.",
      conclusionOutlook: "Likely to maintain or expand strategic investments in sectors aligned with UAE’s development goals, reinforcing the family’s behind-the-scenes influence."
    },
    {
      id: 25,
      name: "Robin Langenskiold",
      position: "Representative from the Erkko family",
      sector: "Business",
      type: "Family Business",
      organization: "Erkko family interests",
      diplomaticRank: "Representative",
      photo: "/assets/images/RobinL.png",
      strategicPositioning: "Part of the Erkko family, historically dominating Finland’s media landscape via Sanoma. Major shareholder and former board member at Sanoma Corporation.",
      uaeRelatedStatements: "No direct personal statements on the UAE. Through Helsingin Sanomat coverage, the family’s media outlets have portrayed the UAE as a rising business hub.",
      roleInUaeRelations: "Indirectly shapes public discourse on the UAE through media coverage. Potential for future expansions in education or digital media solutions in the region.",
      bilateralAgreements: "Not directly involved in official treaties; family business interests remain primarily in Finland’s media sector with limited direct UAE presence.",
      alignmentFriction: "Media coverage typically business-friendly. Minimal friction unless editorial stances conflict with certain Middle Eastern narratives.",
      conclusionOutlook: "Family’s influence in media could support a favorable climate for Finnish–UAE business ties. No immediate plans for deeper direct investment in the UAE."
    },
    {
      id: 26,
      name: "Rafaela Seppala",
      position: "Representative from the Erkko family",
      sector: "Business",
      type: "Family Business",
      organization: "Erkko family interests",
      diplomaticRank: "Representative",
      photo: "/assets/images/RafaelaS.png",
      strategicPositioning: "Also an Erkko family member, major shareholder in Sanoma. Has held board roles across media and cultural foundations, influencing Finnish arts and journalism.",
      uaeRelatedStatements: "No explicit statements on the UAE. Family’s media coverage emphasizes the UAE’s business environment and tourism potential.",
      roleInUaeRelations: "Similar to Langenskiold, shapes the broader media narrative through Sanoma outlets. Could theoretically facilitate cross-cultural events or coverage on the UAE.",
      bilateralAgreements: "No direct involvement. The family’s focus remains on Finnish media holdings rather than forging UAE-specific agreements.",
      alignmentFriction: "Low friction. Potential tension only if editorial lines clash with sensitive regional issues. Typically supportive coverage of UAE’s economic achievements.",
      conclusionOutlook: "Likely to maintain a low-profile stance, continuing to uphold a generally favorable media portrayal of the UAE’s growth and opportunities."
    }
  ];



const FinnishLeadershipDirectory = () => {
  // Filter state variables
  const [sectorFilter, setSectorFilter] = useState('All Sectors');
  const [typeFilter, setTypeFilter] = useState('All Types');
  const [organizationFilter, setOrganizationFilter] = useState('All Organisations');
  const [diplomaticRankFilter, setDiplomaticRankFilter] = useState('All Ranks');

  // State for the detail modal
  const [selectedOfficial, setSelectedOfficial] = useState(null);

  // Generate unique options for each filter from the officials data
  const sectors = ['All Sectors', ...new Set(officials.map(o => o.sector))];
  const types = ['All Types', ...new Set(officials.map(o => o.type))];
  const organisations = ['All Organisations', ...new Set(officials.map(o => o.organization))];
  const diplomaticRanks = ['All Ranks', ...new Set(officials.map(o => o.diplomaticRank))];

  // Filter the officials based on the selected filters
  const filteredOfficials = officials.filter(o => {
    if (sectorFilter !== 'All Sectors' && o.sector !== sectorFilter) return false;
    if (typeFilter !== 'All Types' && o.type !== typeFilter) return false;
    if (organizationFilter !== 'All Organisations' && o.organization !== organizationFilter) return false;
    if (diplomaticRankFilter !== 'All Ranks' && o.diplomaticRank !== diplomaticRankFilter) return false;
    return true;
  });

  // Function to reset all filters
  const resetFilters = () => {
    setSectorFilter('All Sectors');
    setTypeFilter('All Types');
    setOrganizationFilter('All Organisations');
    setDiplomaticRankFilter('All Ranks');
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-blue-700 mb-8">Finnish Leadership Directory</h1>


    {/* HOW TO USE BOX SNIPPET */}
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
      <h2 className="text-xl font-semibold text-blue-800 mb-2">How to Use</h2>
      <p className="text-gray-700 mb-3">
        This directory displays a list of Finnish officials along with key details. Use the filters to refine the list, and click on an official’s card to view more information in a modal.
      </p>
      <ul className="list-disc list-inside text-gray-700 space-y-1">
        <li>Use the dropdowns to filter by sector, type, organisation, or diplomatic rank.</li>
        <li>Click an official’s card to view detailed information.</li>
        <li>Reset the filters to view the entire list again.</li>
      </ul>
    </div>
    {/* END HOW TO USE BOX SNIPPET */}





      {/* Filter Section */}
      <div className="bg-gray-100 p-6 rounded-lg mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Filter Officials</h2>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center"
            onClick={resetFilters}
          >
            Reset Filters
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Sector Filter */}
          <div>
            <label className="block text-gray-700 mb-2">Sector</label>
            <select
              className="w-full p-2 border border-gray-300 rounded-lg bg-white"
              value={sectorFilter}
              onChange={(e) => setSectorFilter(e.target.value)}
            >
              {sectors.map(sector => (
                <option key={sector} value={sector}>{sector}</option>
              ))}
            </select>
          </div>
          {/* Type Filter */}
          <div>
            <label className="block text-gray-700 mb-2">Type</label>
            <select
              className="w-full p-2 border border-gray-300 rounded-lg bg-white"
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
            >
              {types.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
          {/* Organisation Filter */}
          <div>
            <label className="block text-gray-700 mb-2">Organisation</label>
            <select
              className="w-full p-2 border border-gray-300 rounded-lg bg-white"
              value={organizationFilter}
              onChange={(e) => setOrganizationFilter(e.target.value)}
            >
              {organisations.map(org => (
                <option key={org} value={org}>{org}</option>
              ))}
            </select>
          </div>
          {/* Diplomatic Rank Filter */}
          <div>
            <label className="block text-gray-700 mb-2">Diplomatic Rank</label>
            <select
              className="w-full p-2 border border-gray-300 rounded-lg bg-white"
              value={diplomaticRankFilter}
              onChange={(e) => setDiplomaticRankFilter(e.target.value)}
            >
              {diplomaticRanks.map(rank => (
                <option key={rank} value={rank}>{rank}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Display the number of officials */}
      <div className="mb-4 text-gray-600">
        Showing {filteredOfficials.length} of {officials.length} officials
      </div>

      {/* Officials Grid */}
      {filteredOfficials.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredOfficials.map(off => (
            <div
              key={off.id}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="p-6 flex items-center">
                {/* Photo at 24x24 */}
                {off.photo && (
                  <img src={off.photo} alt={off.name} className="w-36 h-36 mr-2" />
                )}
                {/* Clicking the name opens the modal */}
                <button
                  onClick={() => setSelectedOfficial(off)}
                //   className="text-lg font-semibold text-blue-700 hover:underline"
                      className="text-2xl font-bold text-blue-700 hover:underline text-left"
                >
                  {off.name}
                </button>
              </div>
              <div className="px-6 pb-4">
                {/* <p className="text-gray-700">{off.position}</p> */}
                <p className="text-lg font-bold text-gray-900">{off.position}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="bg-blue-50 text-blue-700 rounded-full px-3 py-1 text-sm font-medium">{off.sector}</span>
                  <span className="bg-green-50 text-green-700 rounded-full px-3 py-1 text-sm font-medium">{off.type}</span>
                  <span className="bg-yellow-50 text-yellow-700 rounded-full px-3 py-1 text-sm font-medium">{off.organization}</span>
                  <span className="bg-purple-50 text-purple-700 rounded-full px-3 py-1 text-sm font-medium">{off.diplomaticRank}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center p-8 text-gray-500">
          <p className="text-lg">No officials found matching the selected filters.</p>
          <button
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg"
            onClick={resetFilters}
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Detail Modal */}
      {selectedOfficial && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-3xl w-full max-h-screen overflow-y-auto">
            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
              <div className="flex items-center">
                {/* Photo at 48x48 */}
                {selectedOfficial.photo && (
                  <img src={selectedOfficial.photo} alt={selectedOfficial.name} className="w-48 h-48 mr-4" />
                )}
                <div>
                  <h2 className="text-2xl font-bold text-blue-700">{selectedOfficial.name}</h2>
                  <p className="text-gray-600">{selectedOfficial.position}</p>
                </div>
              </div>
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={() => setSelectedOfficial(null)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6">
              <p className="mb-2"><strong>Sector:</strong> {selectedOfficial.sector}</p>
              <p className="mb-2"><strong>Type:</strong> {selectedOfficial.type}</p>
              <p className="mb-2"><strong>Organisation:</strong> {selectedOfficial.organization}</p>
              <p className="mb-2"><strong>Diplomatic Rank:</strong> {selectedOfficial.diplomaticRank}</p>
              <div className="mt-4">
                <h3 className="font-semibold mb-2">Strategic Positioning</h3>
                <p>{selectedOfficial.strategicPositioning}</p>
              </div>
              <div className="mt-4">
                <h3 className="font-semibold mb-2">UAE-Related Statements</h3>
                <p>{selectedOfficial.uaeRelatedStatements}</p>
              </div>
              <div className="mt-4">
                <h3 className="font-semibold mb-2">Role in UAE Relations</h3>
                <p>{selectedOfficial.roleInUaeRelations}</p>
              </div>
              <div className="mt-4">
                <h3 className="font-semibold mb-2">Bilateral Agreements</h3>
                <p>{selectedOfficial.bilateralAgreements}</p>
              </div>
              <div className="mt-4">
                <h3 className="font-semibold mb-2">Alignment & Friction</h3>
                <p>{selectedOfficial.alignmentFriction}</p>
              </div>
              <div className="mt-4">
                <h3 className="font-semibold mb-2">Conclusion & Outlook</h3>
                <p>{selectedOfficial.conclusionOutlook}</p>
              </div>
            </div>
            <div className="p-6 border-t border-gray-200 bg-gray-50 flex justify-end">
              <button
                className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg"
                onClick={() => setSelectedOfficial(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FinnishLeadershipDirectory;
