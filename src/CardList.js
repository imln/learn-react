import React from 'react';

const CardList = (props)=>{
    return (
        <div className= "card-style ma4 bg-green dib pa4 grow tc">
            <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="Card"/>
            <h1>{props.name}</h1>
            <p>{props.work}</p>
        </div>
    )
}

export default CardList;