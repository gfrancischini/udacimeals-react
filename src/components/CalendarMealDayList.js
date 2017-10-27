import React from 'react';
import { capitalize } from '../utils/helpers'
import { CalendarMealDay } from "./CalendarMealDay";

const MealTypes = ({ mealOrder }) => (
    <ul className='meal-types'>
        {mealOrder.map((mealType) => (
            <li key={mealType} className='subheader'>
                {capitalize(mealType)}
            </li>
        ))}
    </ul>
)


export const CalendarMealDayList = ({ calendar, selectMeal}) => {
    const mealOrder = ['breakfast', 'lunch', 'dinner']
    return (
        <div>
            <MealTypes mealOrder={mealOrder} />
            <div className='calendar'>
                <div className='days'>
                    {calendar.map(({ day }) => <h3 key={day} className='subheader'>{capitalize(day)}</h3>)}
                </div>
                <CalendarMealDay calendar={calendar} mealOrder={mealOrder} selectMeal={selectMeal}/>
            </div>
        </div>
    );
}
