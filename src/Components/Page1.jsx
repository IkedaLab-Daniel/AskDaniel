import React, {useEffect, useState} from 'react'
import Tutorial from './Tutorial';
import Weather from './Weather';
import Down from './Down';
import Break from './Break';
/* Sorry, 1 component lang 'to kahit naka react. Di ko kasi expect na lalaki siya hihi */

function Page1(){

    const today = new Date();
    const dayIndex = today.getDay();
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayName = daysOfWeek[dayIndex];

    const textToCopy = "09051315374";
    const [toogleModal, setToggleModal] = useState({
        display: "none",
    })
    const [displayToggle, setDisplayToggle]= useState({
        display: "none",
    });
    const copyToClipboard = () => {
        navigator.clipboard.writeText(textToCopy).then(() => {
          alert("Copied na! Sana magbayad ka na huhu...");
        }).catch((err) => {
          console.error("Failed to copy text: ", err);
        });
    }

    const [handleAnswer, setHandleAnswer] = useState(<p>Ask a question!</p>);
    const classes = [
        <p key={3} className='class'>❤️ No Class</p>,
        <p key={4}  className='class'>❤️ No Class</p>,
        <p key={5}  className='class'>❤️ No Class</p>,
        <p key={6}  className='class'>
            <span>USELF 11:00AM - 12:00NN</span>
            <span className="yellow-side">Socrative Exam</span> <br/>
        </p>,

        <p key={7}  className='class'>Art Appreciation 6PM - 9PM <span className='yellow-side'>Final Exam F2F</span> <br/><br/>
        </p>,

        <p key={7}  className='class'>PE 10AM - 12NN <span className='yellow-side'>Final Exam Arnis</span> <br/><br/></p>,
        <p key={9}  className='class'>❤️ No Class</p>,
        <p key={3} className='class'>❤️ No Class</p>,


    ];

    const Tasks = <p key="1">
                <span className='yellow-side'>December 13 - Friday</span> <span className='breaker'></span>
                📌 WebProg Documentation<br/><br/>
                <span className='yellow-side'>December 20 - Friday</span> <span className='breaker'></span>
                📌 Data Structure Sorting Roleplay Video<br/><br/>
                </p>

    const toPay = <p key="2">📌 IBCE Student Activity Fee:<br/> ₱150 <span className='yellow-side' style={{color: "red",}}>Overdue!</span> <br/><br/>
                    📌 SSITE Membership Fee:<br/> ₱200 <span className='yellow-side' style={{color: "red",}}>Overdue!</span><br/><br/>
                    💵 Pay on: <br/>
                    GCash - <span className="phone-num" onClick={copyToClipboard}>{textToCopy} </span><br/>
                    <span className='yellow-side'>Click number to copy</span><br/>
                    (J**R C***S)<br/>
                    <br/>
                    </p>
    const anouncement = <p>
        Maari naman po mag bayad ng 50/50 0r 25%, 25% then 50%. Para po di mabigat sa ibang Students. <br/><br/>
        Alam po namin na maraming Bayarin at Maraming gastosin sa mga School Activities asahan ko po na encourage nyo po sila na mag bayad for SAF.<br/><br/>

        Addtional information since di pa po APPROVED yung amendments ng Constitution and Bylaws. Gawin po natin yung 50/50 or 25%, 25% then 50% para po hindi mabigat sa mga di pa nag bayad.<br/><br/>
        - IBCE <br/>
    </p>

    // announcement delay
    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setToggleModal(prev => ({
    //             ...prev,
    //             display: 'block',
    //         }));
    //     }, 5000);
    
    //     return () => clearTimeout(timer); // Clear timeout on component unmount
    // }, []);
    



    const classToday = classes[dayIndex];


    function showAnswer1(){
        setHandleAnswer(prevState => (classToday));
        setDisplayToggle(prevState => ({
            ...prevState,
            display: "none",
        }))
    }

    function showAnswer2(){
        setHandleAnswer(prevState => (Tasks));
        setDisplayToggle(prevState => ({
            ...prevState,
            display: "none",
        }))
    }

    function showAnswer3(){
        setHandleAnswer(prevState => (toPay));
        setDisplayToggle(prevState => ({
            ...prevState,
            display: "none",
        }))
    }


    function showAnswer4(){
        setHandleAnswer(prevState => (classes[(dayIndex + 1)]));
        setDisplayToggle(prevState => ({
            ...prevState,
            display: "block",
        }))
        
    }

    // function showAnswerFiles(){
    //     setHandleAnswer(prevState => (files));
    //     setDisplayToggle(prevState => ({
    //         ...prevState,
    //         display: "none",
    //     }))
    // }

    function showAnswerAbout(){
        setHandleAnswer(prevState => (about));
        setDisplayToggle(prevState => ({
            ...prevState,
            display: "none"
        }))
    }

    function showAnswerAnnounce(){
        setToggleModal(prevState => ({
            ...prevState,
            display: "block",
        }))
        setDisplayToggle(prevState => ({
            ...prevState,
            display: "none"
        }))
    }

    function toggleOffModal(){
        setToggleModal(prevState => ({
            ...prevState,
            display: "none",
        }))
    }

    function handlePay(){
        toggleOffModal();
        showAnswer3();
    }

    // const files = <div id='files'>
    //     <a href="https://drive.google.com/drive/folders/1Ynae4_MBdEJbPa9B6AKo4X_V-pqcvk3I?usp=drive_link" target="_blank" rel="noopener noreferrer">
    //     📁 Open Google Drive
    //     </a>
    // </div>

    const about = <div id='about'>
      <Tutorial />
      <hr style={{width: "90%"}}/>
        <p>This is an open-source project. If you want to contribute/add feature:</p>
        <ol>
            <li>Visit GitHub repo and Fork <a href="https://github.com/IkedaLab-Daniel/AskDaniel" target="_blank" rel="noopener noreferrer">Here</a></li>
            <li>In VSCODE, clone your folk</li>
            <li>Set original repo as an upstream remote</li>
            <li>Create new branch</li>
            <li>Make changes</li>
            <li>Test</li>
            <li>Commit changes</li>
        </ol>
        <img src="https://media.tenor.com/1cJMF-Qh8-wAAAAM/cat-smile.gif" alt="" />
        <p className='right'>Always smile, thank you!</p>
        <hr style={{width: "90%"}}/>
        <p>Contributors:</p>
        <p style={{fontSize : "1rem"}}>💻 Nivan</p>
    </div>


    return(
        <>
        
        <div id="black-shade" style={toogleModal}>

        </div>
        <div id="main">
            <div id="title">
                <p><span className='yellow'>info</span>.<span className='brown'>IT</span>
                (<span className='green'>2B</span>)
                <span>;</span></p>
                {/*
                <img src="https://media.tenor.com/WnM0hRj_j98AAAAi/bubu-yier.gif" alt="" />
                */}
            </div>
                    
            <div id="buttons-container">
                <p onClick={showAnswer1}>🕔 Ano oras pasok ngayon?</p>
                <p onClick={showAnswer4}>🕔 Ano oras pasok bukas?</p>
                <p onClick={showAnswer2}>📝 Ano mga ginagawa?</p>
                <p onClick={showAnswer3}>💸 Ano mga binabayaran?</p>
                {/* <p onClick={showAnswerFiles}>📁 Files</p> */}
                <p onClick={showAnswerAbout}> 💡 About</p>
                <p onClick={showAnswerAnnounce}> 🚨 Announcement</p>
            </div>

            <div className="divider">
                <p> </p>
            </div>

            <div id="answer-box">
                <Weather dayName={dayName} />
                <p style={displayToggle}>Class Tomorrow:</p>
                {handleAnswer}
            </div>


            <div id="modal" style={toogleModal}>
                <h2>🚨 IBCE SAF 🚨</h2>
                {anouncement}
                    <p className='close' onClick={toggleOffModal}>Close</p>
            </div>

            
        </div>
        <Break />
        </>
    )
}

export default Page1