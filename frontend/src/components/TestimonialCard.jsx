import React from 'react';
import './TestimonialCard.css';



function TestimonialCard({TestimonialCard}){

    return(
        <div className='Testimonialcard'>
            <h2>{TestimonialCard.CustomerName}</h2>
            <p>{TestimonialCard.ReviewText}</p>
        </div>
    );
}

export default TestimonialCard;

