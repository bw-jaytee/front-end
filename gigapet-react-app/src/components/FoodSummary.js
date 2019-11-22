import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const FoodSummary = (props) => {
    const [data, setData] = useState([]);
    const [query, setQuery] = useState('');

    useEffect(() => {
        axiosWithAuth()
        .get('https://stilljack-gigapetbackend.herokuapp.com/eatz/alleatzforuser')
        .then(res => {
            const meals = res.data.filter(meal => meal.title.toLowerCase().includes(query.toLowerCase()))
            setData(meals)
        })
        .catch(error => {
            console.log('You done goofed', error)
        })
    }, [query]);

    const handleChange = e => {
        setQuery(e.target.value)
    }

    const week = date => {
        return date - 604800000
    }
    
    const month = date => {
        return date - 2629800000
    }

    return (
        <div className='summaryContainer'>
            <h2>Meal Summary</h2>
            <Link to='/home'>Home</Link>
            <div className='summaryBtnContainer'>
                <form>
                    <label htmlfor='name'>Search:</label>
                    <input type='text' name='name' placeholder='search' onChange={handleChange} value={query}></input>
                </form>
            </div>
            <div className='listContainer'>
                <div className='summaryList'>
                    <h3>Daily</h3>
                    <div>
                        {data.map(data => {
                            return (
                                <div className='summaryItem'>
                                    <p>{new Date(data.createdDate).toDateString()}</p>
                                    <p>{data.title}</p>
                                    <p>{data.carbs>=1 ? `Carbs: ${data.carbs}` : null}</p>
                                    <p>{data.protein>=1 ? `Protein: ${data.protein}` : null}</p>
                                    <p>{data.fats>=1 ? `Fats: ${data.fats}` : null}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className='summaryList'>
                    <h3>Weekly</h3>
                    <div>
                    {data.map(data => {
                            return (
                                <div className='summaryItem'>
                                    <p>{new Date(data.createdDate).toDateString()} - {new Date(week(data.createdDate)).toDateString()}</p>
                                    <p>{data.title}</p>
                                    <p>{data.carbs>=1 ? `Carbs: ${data.carbs}` : null}</p>
                                    <p>{data.protein>=1 ? `Protein: ${data.protein}` : null}</p>
                                    <p>{data.fats>=1 ? `Fats: ${data.fats}` : null}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className='summaryList'>
                    <h3>Monthly</h3>
                    <div>
                    {data.map(data => {
                            
                            return (
                                <div className='summaryItem'>
                                    <p>{new Date(data.createdDate).toDateString()} - {new Date(month(data.createdDate)).toDateString()}</p>
                                    <p>{data.title}</p>
                                    <p>{data.carbs>=1 ? `Carbs: ${data.carbs}` : null}</p>
                                    <p>{data.protein>=1 ? `Protein: ${data.protein}` : null}</p>
                                    <p>{data.fats>=1 ? `Fats: ${data.fats}` : null}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FoodSummary