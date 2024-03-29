import React, {useState} from 'react';
import "./CardChange.css";

const CardChange = ({ isCorrect,setIsCorrect,cardData, numchange}) => {
    const [currentCard, setCurrentCard] = useState(0);
    

    const goPrevious = () => {
        setCurrentCard(currentCard ===0 ? cardData.length - 1 : currentCard - 1);
        numchange(currentCard ===0 ? cardData.length - 1 : currentCard - 1);
        setIsCorrect("")
    };

    const goNext = () => {
        setCurrentCard(currentCard === cardData.length - 1 ? 0 : currentCard + 1);
        numchange(currentCard === cardData.length - 1 ? 0 : currentCard + 1);
        setIsCorrect("")
    };

    return(
        <div>
            <button className='button' onClick={goPrevious}>Previous </button>
            <button className='button' onClick={goNext}>Next</button>
        </div>
    );
};

export default CardChange;