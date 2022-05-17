import { useState } from "react";
import { StyleStar } from "./styled";


const StarRating = ({ star, className = '' }) => {
    return (
        <StyleStar className={`star-rating ${className}`}>
            {[...Array(5)].map((starItem, index) => {
                index += 1;
                return (
                    <button
                        type="button"
                        key={index}
                        className={index <= star ? "on" : "off"}
                    // onClick={() => setRating(index)}
                    >
                        <span className="star">&#9733;</span>
                    </button>
                );
            })}
        </StyleStar>
    );
};

export default StarRating;