import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FoodSummary = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
        .get('https://stilljack-gigapetbackend.herokuapp.com/eatz/alleatzforuser')
        .then(res => {
            console.log(res)
            setData(res)
        })
        .catch(error => {
            console.log('You done goofed', error)
        })
    }, [])

    return (
        <div className='summaryContainer'>
            <h2>Meal Summary</h2>
            <div className='summaryBtnContainer'>
                <button>Carbs</button>
                <button>Proteins</button>
                <button>Fats</button>
            </div>
            <div className='listContainer'>
                <div className='summaryList'>
                    <h3>Daily</h3>
                    <div>
                        {data.map(data => {
                            return (
                                <div>
                                    <p>{data.createdDate}</p>
                                    <p>{data.title}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className='summaryList'>
                    <h3>Weekly</h3>
                    <div></div>
                </div>
                <div className='summaryList'>
                    <h3>Monthly</h3>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default FoodSummary