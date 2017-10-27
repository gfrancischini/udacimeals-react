import React from 'react';
import { CalendarMeal } from "./CalendarMeal";


export const CalendarMealDay = ({ calendar, mealOrder, selectMeal }) => {
    return (
        <div className='icon-grid'>
            {calendar.map(({ day, meals }) => (
                <ul key={day}>
                    {mealOrder.map((meal) => (
                        <li key={meal} className='meal'>
                            <CalendarMeal meals={meals} meal={meal} day={day} selectMeal={selectMeal} />
                        </li>
                    ))}
                </ul>
            ))}
        </div>
    );
}
