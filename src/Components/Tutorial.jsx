import React, {useState} from 'react'
// Photos
import img1 from '../assets/imageTutorial1.jpg'
import img2 from '../assets/imageTutorial2.jpg'
import img3 from '../assets/imageTutorial3.jpg'
import img4 from '../assets/imageTutorial4.jpg'


function Tutorial(){
    
    const TutorialImages = [
        {
            id: "1",
            src: img1,
        },
        {
            id: "2",
            src: img2,
        },
        {
            id: "3",
            src: img3,
        },
        {
            id: "4",
            src: img4,
        },

    ]

    const [currentIndex, setCurrentIndex] = useState(0);

    
    const goToPrevious = () => {
        console.log("Previous clicked");
        const isFirstImage = currentIndex === 0;
        const newIndex = isFirstImage ? TutorialImages.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
  };
  
    const goToNext = () => {
        console.log("Next clicked");
        const isLastImage = currentIndex === TutorialImages.length - 1;
        const newIndex = isLastImage ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    

    return(
        <>
            <p>How to Save this on Mobile</p>
            <div className="carousel">
                <button className="prev-btn" onClick={goToPrevious}>
                &#10094; {/* Left arrow */}
                </button>
                
                <img
                src={TutorialImages[currentIndex].src}
                className="carousel-image"
                alt={`Image ${currentIndex}`}
                />
                
                <button className="next-btn" onClick={goToNext}>
                &#10095; {/* Right arrow */}
                </button> 

                      
            </div>
            <div className="pages-container">
                <span className='pages'>{currentIndex + 1}/{TutorialImages.length}</span>
            </div>
        </>
    )
}

export default Tutorial