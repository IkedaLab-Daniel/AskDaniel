import React, {useEffect, useState} from 'react'
import Tutorial from './Tutorial';
import Weather from './Weather';
import ClassTeams from './ClassTeams';
import { transition } from '@chakra-ui/react';
import { Toaster, toast } from 'react-hot-toast';
import { formatDistanceToNow, parse } from "date-fns";

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

    // Full F2F
    // const classes = [
    //     /*  Sunday   */
    //     <p key={3} className='class'>❤️ No Class</p>,

    //     /*  Monday   */
    //     <p key={4}  className='class'>
    //         <span>Python blyat</span><br/>
    //         <span className="yellow-side"> 7:00AM - 10:00AM - F2F @ Advanced Lab</span> <br/><br/>
    //         <span>Python blyat</span><br/>
    //         <span className="yellow-side"> 12:00NN - 2:00PM - F2F ? MB207</span> <br/><br/>
    //         <span>PE4</span><br/>
    //         <span className="yellow-side"> 2:00PM - 4:00PM - F2F @ Gymnasium</span> <br/><br/>
    //         <span>Game Dev</span><br/>
    //         <span className="yellow-side"> 4:00PM - 6:00PM - F2F @ MB104</span> <br/><br/>
    //     </p>,

    //     /*  Tuesday   */
    //     <p key={5}  className='class'>
    //         <span>NET1</span><br/>
    //         <span className="yellow-side"> 7:00AM - 10:00AM - F2F @ CISCO Lab</span> <br/><br/>
    //         <span>GameDev</span><br/>
    //         <span className="yellow-side"> 11:00AM - 2:00PM -<span> F2F @ iLab</span></span> <br/><br/>
    //         <span>Contemporary</span><br/>
    //         <span className="yellow-side"> 2:30PM - 5:30PM - F2F @ MB105</span> <br/><br/>
    //     </p>,

    //     /*  Wednesday   */
    //     <p key={6}  className='class'>
    //         <span>ADET</span><br/>
    //         <span className="yellow-side"> 7:00AM - 9:00AM - F2F @ MB205</span> <br/><br/>
    //         <span>NET1</span><br/>
    //         <span className="yellow-side"> 9:00AM - 11:00AM - F2F @ MB105</span> <br/><br/>
    //         <span>ADET</span><br/>
    //         <span className="yellow-side"> 12:00NN - 3:00PM - F2F @ Cisco Lab</span> <br/><br/>
    //     </p>,

    //     /*  Thursday   */
    //     <p key={7}  className='class'>
    //         ❤️ No Class 
    //     </p>,

    //     /*  Friday   */
    //     <p key={7}  className='class'>
    //         <span>WebDev w/ sir Batac</span><br/>
    //         <span className="yellow-side"> 7:00AM - 9:00AM - F2F @ CISCO LAB </span> <br/><br/>
    //         <span>WebDev w/ sir Batac</span><br/>
    //         <span className="yellow-side"> 9:00AM - 12:00NN - F2F @ CISCO LAB </span> <br/><br/>
    //     </p>,

    //     /*  Saturday   */
    //     <p key={9}  className='class'>
    //         <span>History</span><br/>
    //         <span className="yellow-side"> 11:00AM - 2:00PM - MB103</span> <br/><br/>
    //         <span>Rizal</span><br/>
    //         <span className="yellow-side"> 2:30PM - 5:30PM - MB205</span> <br/><br/>
    //     </p>,

    //     /* Sunday ulit para sure */
    //     <p key={3} className='class'>❤️ No Class</p>,
    // ];

    // OC week
    const classes = [
        /*  Sunday   */
        <p key={3} className='class'>❤️ No Class</p>,

        /*  Monday   */
        <p key={4}  className='class'>
            <span>Python blyat</span><br/>
            <span className="yellow-side"> 7:00AM - 10:00AM - F2F @ Advanced Lab</span> <br/><br/>
            <span>Python blyat</span><br/>
            <span className="yellow-side"> 12:00NN - 2:00PM - ? </span> <br/><br/>
            <span>PE4</span><br/>
            <span className="yellow-side"> 2:00PM - 4:00PM - 2PM</span> <br/><br/>
            {/* <span>Game Dev</span><br/>
            <span className="yellow-side"> 4:00PM - 6:00PM - Online</span> <br/><br/> */}
        </p>,

        /*  Tuesday   */
        <p key={5}  className='class'>
            <span>NET1</span><br/>
            <span className="yellow-side"> 7:00AM - 10:00AM - F2F @ CISCO Lab</span> <br/><br/>
            <span>GameDev</span><br/>
            <span className="yellow-side"> 10:00AM - 1:00PM -<span> F2F @ iLab</span></span> <br/><br/>
            <span>Contemporary</span><br/>
            <span className="yellow-side"> 2:30PM - 5:30PM - OC</span> <br/><br/>
        </p>,

        /*  Wednesday   */
        <p key={6}  className='class'>
            <span>ADET</span><br/>
            <span className="yellow-side"> 7:00AM - 9:00AM - Online</span> <br/><br/>
            <span>NET1</span><br/>
            <span className="yellow-side"> 9:00AM - 11:00AM - Online</span> <br/><br/>
            <span>ADET</span><br/>
            <span className="yellow-side"> 12:00NN - 3:00PM - F2F @ Cisco Lab</span> <br/><br/>
        </p>,

        /*  Thursday   */
        <p key={7}  className='class'>
            No Class
        </p>,

        /*  Friday   */
        <p key={7}  className='class'>
            <span>WebDev w/ sir Batac</span><br/>
            <span className="yellow-side"> 7:00AM - 9:00AM - Online</span> <br/><br/>
            <span>WebDev w/ sir Batac</span><br/>
            <span className="yellow-side"> 9:00AM - 12:00NN - F2F @ CISCO LAB </span> <br/><br/>
        </p>,

        /*  Saturday   */
        <p key={9}  className='class'>
            <span>History</span><br/>
            <span className="yellow-side"> 11:00AM - 2:00PM - Module</span> <br/><br/>
            <span>Rizal</span><br/>
            <span className="yellow-side"> 2:30PM - 5:30PM - ?</span> <br/><br/>
        </p>,

        /* Sunday ulit para sure */
        <p key={3} className='class'>❤️ No Class</p>,
    ];

    const Tasks = <p key="1">
                <span className='yellow-side'>April  21: Monday</span> 
                <span className='breaker'></span> 
                📌 Python<br/>
                Iteration Online Activity <span className='yellow-side'>11:59AM</span> <br/><br/>
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
       ₱100.00 contribution for the Rizal film.
    </p>

    // announcement delay
    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setToggleModal(prev => ({
    //             ...prev,`
    //             display: 'block',
    //         }));
    //     }, 5000);``
    
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

      useEffect(() => {
        const lastUpdate = "4/22/2025"; // MM/DD/YYYY
        const parsedDate = parse(lastUpdate, "MM/dd/yyyy", new Date());
        const timeAgo = formatDistanceToNow(parsedDate, { addSuffix: true });
    
        setTimeout(() => {
          toast.success(`Last Update: ${timeAgo}`, {
            duration: 5000,
          });
        }, 500);
      }, []);
      

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
                <p onClick={scrollDown}> 🔗      Class Teams<span className="new">New!</span></p>
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
        <Toaster />
        </>
    )
}

export default Page1