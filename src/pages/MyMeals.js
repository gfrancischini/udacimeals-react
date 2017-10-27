import React, { Component } from 'react';
import Modal from 'react-modal'
import { CalendarMealDayList } from "../components/CalendarMealDayList";
import { FoodSearch } from "./FoodSearch";
import { connect } from 'react-redux'
import { addRecipe, removeFromCalendar } from '../actions'

class MyMeals1 extends Component {
    constructor() {
        super();
        this.state = {
            foodModalOpen: false,
            meal: null,
            day: null,
            food: null,
        }
    }

    selectMeal = ({ meal, day }) => {
        this.setState(() => ({
            foodModalOpen: true,
            meal,
            day,
        }))
    }

    onFoodSelect = (recipe) => {
        this.props.selectRecipe({ recipe, day: this.state.day, meal: this.state.meal });
        this.closeFoodModal();
    }

    closeFoodModal = () => {
        this.setState(() => ({
            foodModalOpen: false,
            meal: null,
            day: null,
            food: null,
        }))
    }

    render() {
        const { foodModalOpen } = this.state;
        const { calendar, removeMeal } = this.props;
        return (
            <div className="container">
                <CalendarMealDayList calendar={calendar} selectMeal={this.selectMeal} removeMeal={removeMeal} />

                <Modal
                    className='modal'
                    overlayClassName='overlay'
                    isOpen={foodModalOpen}
                    onRequestClose={this.closeFoodModal}
                    contentLabel='Modal'
                >
                    <FoodSearch onFoodSelect={this.onFoodSelect} />
                </Modal>
            </div>
        );
    }
}

function mapStateToProps({ food, calendar }) {
    const dayOrder = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']

    return {
        calendar: dayOrder.map((day) => ({
            day,
            meals: Object.keys(calendar[day]).reduce((meals, meal) => {
                meals[meal] = calendar[day][meal]
                    ? food[calendar[day][meal]]
                    : null

                return meals
            }, {})
        })),
    }
}

function mapDispatchToProps(dispatch) {
    return {
        selectRecipe: (data) => dispatch(addRecipe(data)),
        removeMeal: (data) => dispatch(removeFromCalendar(data))
    }
}

export const MyMeals = connect(
    mapStateToProps,
    mapDispatchToProps
)(MyMeals1)