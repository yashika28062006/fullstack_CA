import React from 'react';
import TestimonialCard from './components/TestimonialCard';
import './App.css';
// import TestimonialCard from './components/TestimonialCard';

const cardsData=[
  {id: 1, CustomerName:"Emily",ReviewText:"This service was amazing! Highly recommended."},
  {id: 2, CustomerName:"Roshan",ReviewText:"This service good  recommended."},
  {id: 3, CustomerName:"Rahul",ReviewText:"This service average once can be visited"}
  
];

function App(){
  return(
    <div className='app'>
      <h1>Client-testimonial</h1>
      <div className='card-container'>
        {cardsData.map(card=>(
          <TestimonialCard key={card.id} TestimonialCard={card}/>
        ))}
      </div>
    </div>
    
  );
}

export default App;



