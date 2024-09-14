import React, {useEffect, useState} from 'react'
function Page1(){

    const today = new Date();
    const dayIndex = today.getDay();
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayName = daysOfWeek[dayIndex];

    const [handleAnswer, setHandleAnswer] = useState(<p>Ask a question!</p>);
    const classes = [
        <p key={3} className='class'>❤️No Class</p>,
        <p key={4}  className='class'>👨‍🏫 CISCO 9:00am - 12:00pm <span className='yellow-side'>F2F</span><br/><br/><span className='async'>📚 Asyncronous: Database, Data Structure</span></p>,

        <p key={5}  className='class'>👨‍🏫 Accounting 3:00pm - 6:00pm  <span className='yellow-side'>Online</span></p>,

        <p key={6}  className='class'>
            👨‍🏫Database 8:00am - 11:00am <span className='yellow-side'>F2F</span> <br/>
            👨‍🏫Science 6:00pm - 9:00pm <span className='yellow-side'>Online</span>  <br/><br/>
            <span className='async'>📚 Asyncronous: Understanding the Self</span>
            </p>,

        <p key={7}  className='class'>👨‍🏫Data Structure 12:00pm - 3:00pm <span className='yellow-side'>F2F</span> <br/><br/>
            <span className='async'>📚 Asyncronous: Art Appreciation, CISCO</span>
        </p>,

        <p key={8}  className='class'>👨‍🏫PE3 10:00am - 12:00pm <span className='yellow-side'>F2F</span> <br/>
            👨‍🏫Web Programming 2:00pm - 5:00pm <span className='yellow-side'>F2F</span></p>,

        <p key={9}  className='class'>❤️No Class<br/><br/><span className='async'>Asyncronous:<br/> WebProg 11AM - 1PM</span></p>,
        <p key={3} className='class'>❤️No Class</p>,
    ];

    const Tasks = <p key="1">📌 CISCO netacad Module 1-2 <span className='yellow-side'>Self-paced</span>  <br/><br/>
                📌Art Appreciation Word Hunt - Module 1 <span className='yellow-side'>Deadline: Sep.19 [8PM]</span> <br/><br/>
                📌Web Programming - Assignment 3 <span className='yellow-side'>Deadline: Sep.19 [5PM]</span> <br/><br/>
                📌PE3 Index Card <span className='yellow-side'>Bring on: Sep.20</span>
                </p>

    const toPay = <p key="2">📌 IBCE Student Activity Fee:<br/> ₱150 <span className='yellow-side'>DUE Sep.18</span> <br/><br/>
                    📌 SSITE Membership Fee: ₱200<br/><br/>
                    💵 Pay on: <br/>
                    GCash - 09051315374<br/>
                    Cash - See Ice during F2F class</p>

    const classToday = classes[dayIndex];

    function showAnswer1(){
        setHandleAnswer(prevState => (classToday));
        console.log( classes[dayIndex]);
    }

    function showAnswer2(){
        setHandleAnswer(prevState => (Tasks));
    }

    function showAnswer3(){
        setHandleAnswer(prevState => (toPay));
    }


    function showAnswer4(){
        setHandleAnswer(prevState => (classes[(dayIndex + 1)]));
    }


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
            </div>

            <div className="divider">
                <p> </p>
            </div>

            <div id="answer-box">
                <p>Today is {dayName}!</p>
                {handleAnswer}
            </div>
            
        </div>
        </>
    )
}

export default Page1