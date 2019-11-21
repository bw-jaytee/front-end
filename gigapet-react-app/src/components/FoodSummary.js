import React, { useState, useEffect } from 'react';
import Moment from 'react-moment';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const FoodSummary = (props) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axiosWithAuth()
        .get('https://stilljack-gigapetbackend.herokuapp.com/eatz/alleatzforuser')
        .then(res => {
            console.log(res.data)
            setData(res.data)
        })
        .catch(error => {
            console.log('You done goofed', error)
        })
    }, []);

    const goHome = () => {
        props.history.push('/home');
      };

    return (
        <div className='summaryContainer'>
            <h2>Meal Summary</h2>
            <button onClick={goHome}>Home</button>
            <div className='summaryBtnContainer'>
                <button>Carbs</button>
                <button>Proteins</button>
                <button>Fats</button>
                <button>All</button>
            </div>
            <div className='listContainer'>
                <div className='summaryList'>
                    <h3>Daily</h3>
                    <div>
                        {data.map(data => {
                            return (
                                <div classname='summaryItem'>
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
                                <div classname='summaryItem'>
                                    <p>{new Date(data.createdDate).toDateString()} - {new Date(data.createdDate ).toDateString()}</p>
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
                                <div classname='summaryItem'>
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
            </div>
        </div>
    )
}

export default FoodSummary