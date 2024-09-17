import React, {useEffect, useState} from 'react'


/* Sorry, 1 component lang 'to kahit naka react. Di ko kasi expect na lalaki siya hihi */
function Page1(){

    const today = new Date();
    const dayIndex = today.getDay();
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayName = daysOfWeek[dayIndex];

    const textToCopy = "09051315374";
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
        <p key={4}  className='class'>👨‍🏫 CISCO 9:00am - 12:00pm <span className='yellow-side'>F2F @ CISCO Lab / iLab</span><br/><br/><span className='async'>📚 Asyncronous: Database, Data Structure</span></p>,

        <p key={5}  className='class'>👨‍🏫 Accounting 3:00pm - 6:00pm  <span className='yellow-side'>Online</span></p>,

        <p key={6}  className='class'>
            <span>👨‍🏫Database 8:00am - 11:00am </span>
            <span className='line-t'>F2F @ Red Lab </span><span className="yellow-side">Online @ 8AM</span> <br/>
            👨‍🏫Science 6:00pm - 9:00pm <span className='yellow-side'>Online</span>  <br/><br/>
            <span className='async'>📚 Asyncronous: Understanding the Self</span>
            </p>,

        <p key={7}  className='class'>👨‍🏫Data Structure 12:00pm - 3:00pm <span className='yellow-side'>F2F @ iLab</span> <br/><br/>
            <span className='async'>📚 Asyncronous: Art Appreciation, CISCO</span>
        </p>,

        <p key={8}  className='class'>👨‍🏫PE3 10:00am - 12:00pm <span className='yellow-side'>F2F @ Gymnasium (Main)</span> <br/>
            👨‍🏫Web Programming 2:00pm - 5:00pm <span className='yellow-side'>F2F @ iLab/CISCO Lab</span></p>,

        <p key={9}  className='class'>❤️ No Class<br/><br/><span className='async'>Asyncronous:<br/> WebProg 11AM - 1PM</span></p>,
        <p key={3} className='class'>❤️ No Class</p>,
    ];

    const Tasks = <p key="1">📌 CISCO netacad Module 1-2 <span className='yellow-side'>Self-paced</span>  <br/><br/>
                📌 CISCO netacad Badge <span className='yellow-side'>Self-paced</span>  <br/><br/>
                📌 CISCO netacad Assignment <span className='yellow-side'>Deadline: Sep.20</span>  <br/><br/>
                📌 Art Appreciation Word Hunt - Module 1 <span className='yellow-side'>Deadline: Sep.19 [8PM]</span> <br/><br/>
                📌 Web Programming - Assignment 3 <span className='yellow-side'>Deadline: Sep.19 [5PM]</span> <br/><br/>
                📌 PE3 Index Card <span className='yellow-side'>Bring on: Sep.20</span> <br/><br/>
                📌 USELF SAS 2 <span className='yellow-side'>Deadline: Sep.25 [12NN]</span>  <br/><br/>
                </p>

    const toPay = <p key="2">📌 IBCE Student Activity Fee:<br/> ₱150 <span className='yellow-side'>DUE Sep.18</span> <br/><br/>
                    📌 SSITE Membership Fee: ₱200<br/><br/>
                    💵 Pay on: <br/>
                    GCash - <span className="phone-num" onClick={copyToClipboard}>{textToCopy} </span><br/>
                    <span className='yellow-side'>Click number to copy</span><br/>
                    (J**R C***S)<br/>
                    <br/>
                    Cash - See Ice during F2F class</p>




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

    function showAnswerFiles(){
        setHandleAnswer(prevState => (files));
        setDisplayToggle(prevState => ({
            ...prevState,
            display: "none",
        }))
    }

    function showAnswerAbout(){
        setHandleAnswer(prevState => (about));
        setDisplayToggle(prevState => ({
            ...prevState,
            display: "none"
        }))
    }

    const files = <div id='files'>
        <a href="https://drive.google.com/drive/folders/1Ynae4_MBdEJbPa9B6AKo4X_V-pqcvk3I?usp=drive_link" target="_blank" rel="noopener noreferrer">
        📁 Open Google Drive
        </a>
    </div>

    const about = <div id='about'>
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
    </div>


    return(
        <>
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
                <p onClick={showAnswerFiles}>📁 Files</p>
                <p onClick={showAnswerAbout}> 💡 About</p>
            </div>

            <div className="divider">
                <p> </p>
            </div>

            <div id="answer-box">
                <p className='right'>Today is {dayName}!</p>
                <p style={displayToggle}>Class Tomorrow:</p>
                {handleAnswer}
            </div>
            
        </div>
        </>
    )
}

export default Page1