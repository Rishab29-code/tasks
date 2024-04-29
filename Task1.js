
const { useState }=React
const { createRoot}=ReactDOM
// onboardingCall:"",
// //         googlesearchConsoleAccess:"",
// //         googleAnalyticsAccess:"",
// //         websiteAccess:"",
// //         technicalAudit:"",
// //         anchorTextsemanticAnalysis:"",
// //         competitorAnalysis:"",
// //         anchorTextUrlMapping:"",
// //         googleDataStudio:"",
// //         siteLevelOptimization:"",
// //         onPageOptimization:"",
// //         contentCreation:"",
// //         contentPublish:"",
// //         premiumPress:"",
// //         nichePlacement:"",
// //         indexLinks:"",
// //         videoRecap:""

function App() {
    const [data, setData] = useState([
        {
            field: "Onboarding Call",
            month1: "",
            month2: "",
            month3: ""
        },
        {
            field: "Google Search Console Access",
            month1: "",
            month2: "",
            month3: ""
        },
        {
            field: "Google Analytics Access",
            month1: "",
            month2: "",
            month3: ""
        },
        {
            field: "Website Access",
            month1: "",
            month2: "",
            month3: ""
        },
        {
            field: "Technical Audit",
            month1: "",
            month2: "",
            month3: ""
        },
        {
            field: "Anchor Text and Semantic Analysis",
            month1: "",
            month2: "",
            month3: ""
        },
        {
            field: "Competitor Analysis",
            month1: "",
            month2: "",
            month3: ""
        },
        {
            field: "Anchor Text / URL Mapping",
            month1: "",
            month2: "",
            month3: ""
        },
        {
            field: "Google Data Studio",
            month1: "",
            month2: "",
            month3: ""
        },
        {
            field: "Site Level Optimization",
            month1: "",
            month2: "",
            month3: ""
        },
        {
            field: "On-Page Optimization",
            month1: "",
            month2: "",
            month3: ""
        },
        {
            field: "Content Creation",
            month1: "",
            month2: "",
            month3: ""
        },
        {
            field: "Content Publish",
            month1: "",
            month2: "",
            month3: ""
        },
        {
            field: "Premium Press Release",
            month1: "",
            month2: "",
            month3: ""
        },
        {
            field: "Niche Placements",
            month1: "",
            month2: "",
            month3: ""
        },
        {
            field: "Index Links",
            month1: "",
            month2: "",
            month3: ""
        },
        {
            field: "Video Recap",
            month1: "",
            month2: "",
            month3: ""
        },
    ]);

    const handleEdit = (field, month, value) => {
        setData(prevData => {
            const newData = prevData.map(item => {
                if (item.field === field) {
                    return { ...item, [month]: value };
                }
                return item;
            });
            return newData;
        });
        console.log("field value",{ [field]: { [month]: value } })

        fetch(`/endpoint`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ [field]: { [month]: value } }),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
        
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);

            });
    };

    return (
        <div style={{ margin: '50px auto', padding: '20px', width: '80%', maxWidth: '800px' }}>
            <table className="bordered-table">
                <thead>
                    <tr>
                        <th>Field</th>
                        <th>Month 1</th>
                        <th>Month 2</th>
                        <th>Month 3</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.field}</td>
                            <td contentEditable onBlur={(e) => handleEdit(item.field, 'month1', e.target.innerText)}>
                                {item.month1}
                            </td>
                            <td contentEditable onBlur={(e) => handleEdit(item.field, 'month2', e.target.innerText)}>
                                {item.month2}
                            </td>
                            <td contentEditable onBlur={(e) => handleEdit(item.field, 'month3', e.target.innerText)}>
                                {item.month3}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

const domNode = document.getElementById('output');
const root = createRoot(domNode);
root.render(<App />);












// const { useState }=React
// const { createRoot}=ReactDOM
// function App() {
//     const [data, setData] = useState({
//         onboardingCall:"",
//         googlesearchConsoleAccess:"",
//         googleAnalyticsAccess:"",
//         websiteAccess:"",
//         technicalAudit:"",
//         anchorTextsemanticAnalysis:"",
//         competitorAnalysis:"",
//         anchorTextUrlMapping:"",
//         googleDataStudio:"",
//         siteLevelOptimization:"",
//         onPageOptimization:"",
//         contentCreation:"",
//         contentPublish:"",
//         premiumPress:"",
//         nichePlacement:"",
//         indexLinks:"",
//         videoRecap:""
// });

    

// const handleEdit = (field, value) => {
//     // Update the local state optimistically
//     setData(prevData => ({
//         ...prevData,
//         [field]: value
//     }));
//     console.log('field value',field,value)

//     // Make API call to update data (assuming you have an ID or unique identifier for the data)
//     fetch(`your-api-endpoint/`, {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ [field]: value }),
//     })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         // Handle success if needed
//     })
//     .catch(error => {
//         console.error('There was a problem with the fetch operation:', error);
//         // Handle error if needed
//     });
// };


//     return (
//         <div style={{ margin: '50px auto', padding: '20px', width: '80%', maxWidth: '800px' }}>
//             <table className="bordered-table">
//                 <thead>
//                 <tr>
                        
                        
//                         <th>Onboarding Call</th>
//                         <th>Google Search Console Access</th>
//                         <th>GoogleAnalytics Access</th>
//                         <th>Website Access</th>
//                         <th>Technical Audit</th>
//                         <th>Anchor Text and Semantic Analytics</th>
//                         <th>Competitor Analytics</th>
//                         <th>Anchor Text / URL Mapping</th>
//                         <th>Google Data Studio Report + Local Reporting Suite</th>
//                         <th>Site-level Optimization</th>
//                         <th>On-page Optimization</th>
//                         <th>Content Creation</th>
//                         <th>Content Publishing</th>
//                         <th>Premium Press Release</th>
//                         <th>Authority Niche Placements</th>
//                         <th>Review Management</th>
//                         <th>Index Links</th>
//                         <th>Video Recap</th>
//                         </tr>
                    
                       
                        
//                 </thead>
//                 <tbody>
                    
//                         <tr >
                            
//                             <td contentEditable onBlur={(e) => handleEdit('onboardingCall', e.target.innerText)}>{data.onboardingCall}</td>
//                             <td contentEditable onBlur={(e) => handleEdit('googlesearchConsoleAccess', e.target.innerText)}>{data.googlesearchConsoleAccess}</td>
//                             <td contentEditable onBlur={(e) => handleEdit('googleAnalyticsAccess', e.target.innerText)}>{data.googleAnalyticsAccess}</td>
//                             <td contentEditable onBlur={(e) => handleEdit('websiteAccess', e.target.innerText)}>{data.websiteAccess}</td>
//                             <td contentEditable onBlur={(e) => handleEdit('technicalAudit', e.target.innerText)}>{data.technicalAudit}</td>
                            
//                             <td contentEditable onBlur={(e) => handleEdit('anchorTextsemanticAnalysis', e.target.innerText)}>{data.anchorTextsemanticAnalysis}</td>
//                             <td contentEditable onBlur={(e) => handleEdit('competitorAnalysis', e.target.innerText)}>{data.competitorAnalysis}</td>
//                             <td contentEditable onBlur={(e) => handleEdit('anchorTextUrlMapping', e.target.innerText)}>{data.anchorTextUrlMapping}</td>
//                             <td contentEditable onBlur={(e) => handleEdit('googleDataStudio', e.target.innerText)}>{data.googleDataStudio}</td>
//                             <td contentEditable onBlur={(e) => handleEdit('siteLevelOptimization', e.target.innerText)}>{data.siteLevelOptimization}</td>
//                             <td contentEditable onBlur={(e) => handleEdit('onPageOptimization', e.target.innerText)}>{data.onPageOptimization}</td>
//                             <td contentEditable onBlur={(e) => handleEdit('contentCreation', e.target.innerText)}>{data.contentCreation}</td>
//                             <td contentEditable onBlur={(e) => handleEdit('contentPublish', e.target.innerText)}>{data.contentPublish}</td>
//                             <td contentEditable onBlur={(e) => handleEdit('premiumPress', e.target.innerText)}>{data.premiumPress}</td>
//                             <td contentEditable onBlur={(e) => handleEdit('nichePlacement', e.target.innerText)}>{data.nichePlacement}</td>
//                             <td contentEditable onBlur={(e) => handleEdit('reviewManagement', e.target.innerText)}>{data.reviewManagement}</td>
//                             <td contentEditable onBlur={(e) => handleEdit('indexLinks', e.target.innerText)}>{data.indexLinks}</td>
//                             <td contentEditable onBlur={(e) => handleEdit('videoRecap', e.target.innerText)}>{data.videoRecap}</td>
                            
                            
//                         </tr>
//                 </tbody>
//             </table>
//         </div>
//     );
// }



// const domNode = document.getElementById('output');
// const root = createRoot(domNode);
// root.render(<App />);
