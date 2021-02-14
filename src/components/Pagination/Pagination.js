import React, {useContext, useState} from "react";
import CharactersContext from "../../context/Characters/CharactersContext";

export const Pagination = (props) => {
    const {handleNextPage, handlePrevPage} = useContext(CharactersContext);
    const [next, setNext] = useState(2)
    const [prev, setPrev] = useState(2)

    const handleNext = () => {
        setNext(prev => prev + 1)
        handleNextPage(next)
    }

    const handlePrev = () => {
        setPrev(prev => prev - 1)
        handlePrevPage(prev)
    }

    return (
        <div className="pagination d-flex justify-content-around">
            <h3 id="prevButton" onClick={handlePrev}>
                {"<<Prev"}
            </h3>
            <h3 id="nextButton" onClick={handleNext}>
                {"Next>>"}
            </h3>
        </div>
    );
};

