import React, {useEffect, useState} from 'react'
import Tutorial from './Tutorial';
import Weather from './Weather';
import ClassTeams from './classTeams';
import { transition } from '@chakra-ui/react';
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
    const [dateStyle, setDateStyle]  = useState({
        height: "0",
    })
    const classes = [
        /*  Sunday   */
        <p key={3} className='class'>❤️ No Class</p>,

        /*  Monday   */
        <p key={4}  className='class'>
            <span>Python blyat</span><br/>
            <span className="yellow-side"> 7:00AM - 10:00AM - F2F @ Advanced Lab</span> <br/><br/>
            <span>PE4</span><br/>
            <span className="yellow-side"> 2:00PM - 4:00PM - Online</span> <br/><br/>
            <span>Game Dev</span><br/>
            <span className="yellow-side"> 4:00PM - 6:00PM - Online</span> <br/><br/>
        </p>,

        /*  Tuesday   */
        <p key={5}  className='class'>
            <span>NET1</span><br/>
            <span className="yellow-side"> 7:00AM - 10:00AM - F2F</span> <br/><br/>
            <span>GameDev</span><br/>
            <span className="yellow-side"> 11:00AM - 2:00PM - F2F</span> <br/><br/>
            <span>Contemporary</span><br/>
            <span className="yellow-side"> 2:30PM - 5:30AM - Online</span> <br/><br/>
        </p>,

        /*  Wednesday   */
        <p key={6}  className='class'>
            <span>ADET</span><br/>
            <span className="yellow-side"> 7:00AM - 9:00AM - Online</span> <br/><br/>
            <span>NET1</span><br/>
            <span className="yellow-side"> 9:00AM - 11:00AM - Online</span> <br/><br/>
            <span>ADET</span><br/>
            <span className="yellow-side"> 12:00NN - 3:00PM - F2F </span> <br/><br/>
        </p>,

        /*  Thursday   */
        <p key={7}  className='class'>
            ❤️ No Class 
        </p>,

        /*  Friday   */
        <p key={7}  className='class'>
            <span>WebDev w/ sir Batac</span><br/>
            <span className="yellow-side"> 7:00AM - 9:00AM - F2F @ </span> <br/><br/>
            <span>WebDev w/ sir Batac</span><br/>
            <span className="yellow-side"> 12:00NN - 3:00PM - Online</span> <br/><br/>
        </p>,

        /*  Saturday   */
        <p key={9}  className='class'>
            <span>History</span><br/>
            <span className="yellow-side"> 11:00AM - 2:00PM - Online </span> <br/><br/>
            <span>Rizal</span><br/>
            <span className="yellow-side"> 2:30PM - 5:30PM - Online </span> <br/><br/>
        </p>,

        /* Sunday ulit para sure */
        <p key={3} className='class'>❤️ No Class</p>,


    ];

    const Tasks = <p key="1">
                <span className='yellow-side'>{/* Date here */}</span> 
                {/*     <span className='breaker'></span>       */}
                📌 Wala pa<br/><br/>
                </p>

    const toPay = <p key="2">
        {/* 📌 IBCE Student Activity Fee:<br/> ₱150 <span className='yellow-side' style={{color: "red",}}>Overdue!</span> <br/><br/> */}
                    {/* 💵 Pay on: <br/>
                    GCash - <span className="phone-num" onClick={copyToClipboard}>{textToCopy} </span><br/>
                    <span className='yellow-side'>Click number to copy</span><br/>
                    (J**R C***S)<br/>
                    <br/> */}
                    Wala pa :)
                    </p>
    const anouncement = <p>
        <img src='https://scontent.fcrk3-2.fna.fbcdn.net/v/t39.30808-6/475231386_906747298335616_6148398410533596907_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeH-f4Zxj9_EKwo2h8KbvTUYw_oeIG56YfzD-h4gbnph_DfmQ1Q94pjDnFs2h2k9IeFGb4J0vz3ZxlQFH-fXqqSQ&_nc_ohc=gnD1we_2a9MQ7kNvgF79VT4&_nc_oc=Adic5opLOmnk-Xes7zA3fVuDhTGc5plkOrv-GbK3-ymkRP3gsfUgg2_dWpMz820OShE&_nc_zt=23&_nc_ht=scontent.fcrk3-2.fna&_nc_gid=A1_B094_Z-7j2yYJcXASGOv&oh=00_AYDsUN78nnrrpIbs9RUXy79S2E3UNoksp8DHrpP5hLESDg&oe=67AE97C1'/><br/>
Good Afternoon @everyone, reminder lang po na <br/> <br/>

Starting tomorrow FEB 10 UNTIL FEB 14 is naka civilian clothing po tayo base sa color sa post ng MCC  <br/> <br/>

Please don't forget your ID for identification para di kayo harangin ng guard  <br/> <br/>

Thank you <br/> <br/>
        - SSITE President <br/>
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

    function selectDay(){
        let containerHeight = dateStyle.height;
        if (containerHeight == "auto"){
            setDateStyle(prev => ({
                ...prev,
                height: "0"
            }))
        } else{
            setDateStyle(prev => ({
                ...prev,
                height: "auto"
            }))
        }
    }

    function showSelectDate(day){
        const selectedDate = classes[day]
        setHandleAnswer(prevState => (selectedDate));
        setDisplayToggle(prevState => ({
            ...prevState,
            display: "none",
        }))
        setDateStyle(prev => ({
            ...prev,
            height: "0"
        }))
    }

    function scrollDown() {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'smooth' // for smooth scrolling
        });
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
            </div>
                    
            <div id="buttons-container">
                <p onClick={showAnswer1}>🕔 Ano oras pasok ngayon?</p>
                <p onClick={showAnswer4}>🕔 Ano oras pasok bukas?</p>
                <p onClick={showAnswer2}>📝 Ano mga ginagawa?</p>
                <p onClick={showAnswer3}>💸 Ano mga binabayaran?</p>
                {/* <p onClick={showAnswerFiles}>📁 Files</p> */}
                <p onClick={showAnswerAbout}> 💡 About</p>
                <p onClick={showAnswerAnnounce}> 🚨 Announcement</p>
                <p onClick={scrollDown}> 🔗  Class Teams<span className="new">New!</span></p>
                <p onClick={selectDay}>⬇️ Select Day<span className="new">New!</span></p>
                <div className="date-list-container" style={dateStyle}>
                    <p onClick={() => showSelectDate(1)}>  Monday</p>
                    <p onClick={() => showSelectDate(2)}>  Tuesday</p>
                    <p onClick={() => showSelectDate(3)}>  Wednesday</p>
                    <p onClick={() => showSelectDate(4)}>  Thursday</p>
                    <p onClick={() => showSelectDate(5)}>  Friday</p>
                    <p onClick={() => showSelectDate(6)}>  Saturday</p>
                    <p onClick={() => showSelectDate(7)}>  Sunday</p>
                </div>
                
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
                <h2>👔 Wear Your Hearts 👔</h2>
                {anouncement}
                    <p className='close' onClick={toggleOffModal}>Close</p>
            </div>

            
        </div>
        <div id="class-teams">
            <ClassTeams/>
        </div>
        </>
    )
}

export default Page1