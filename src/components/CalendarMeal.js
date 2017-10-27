import React from 'react';
import CalendarIcon from 'react-icons/lib/fa/calendar-plus-o'
//import ArrowRightIcon from 'react-icons/lib/fa/arrow-circle-right'

export const CalendarMeal = ({ meals, meal, day, removeMeal, selectMeal }) => {
    return (<div>
        {meals[meal]
            ? <div className='food-item'>
                <img src={meals[meal].image} alt={meals[meal].label} />
                <button onClick={() => removeMeal({ meal, day })}>Clear</button>
            </div>
            : <button onClick={() => selectMeal({ meal, day })} className='icon-btn'>
                <CalendarIcon size={30} />
            </button>}
    </div>);
}
