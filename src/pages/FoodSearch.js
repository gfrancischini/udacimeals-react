import React from 'react';
import { capitalize } from '../utils/helpers'
import Loading from 'react-loading'
import { fetchRecipes } from '../utils/api'
import { FoodList } from '../components/FoodList'
import ArrowRightIcon from 'react-icons/lib/fa/arrow-circle-right'

export class FoodSearch extends React.Component {
    constructor() {
        super();
        this.state = {
            food: null,
        }
    }

    searchFood = (e) => {
        if (!this.input.value) {
            return
        }

        e.preventDefault()

        this.setState(() => ({ loadingFood: true }))

        fetchRecipes(this.input.value)
            .then((food) => this.setState(() => ({
                food,
                loadingFood: false,
            })))
    }

    render() {
        const { loadingFood, food } = this.state
        const { onFoodSelect } = this.props;
        return (
            <div>
                {loadingFood === true
                    ? <Loading delay={200} type='spin' color='#222' className='loading' />
                    : <div className='search-container'>
                        <h3 className='subheader'>
                            Find a meal.
                  </h3>
                        <div className='search'>
                            <input
                                className='food-input'
                                type='text'
                                placeholder='Search Foods'
                                ref={(input) => this.input = input}
                            />
                            <button
                                className='icon-btn'
                                onClick={this.searchFood}>
                                <ArrowRightIcon size={30} />
                            </button>
                        </div>
                        {food !== null && (
                            <FoodList
                                food={food}
                                onSelect={(recipe) => {
                                    onFoodSelect(recipe)
                                }}
                            />)}
                    </div>}
            </div>)
    }

}