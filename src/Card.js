import React, { Component } from 'react';
import './Card.css';
import 'tachyons'
import CardList from './CardList';


class Card extends Component{

    constructor(){
        super();
        this.state = {
            name:"Welcome to lng world.."
        }
    }

    headingChange(){
        this.setState({
            name:"changed Welcome to lng world.."
        })
    }


    render(){
        const cardArray = [
            {
                id:1,
                name:"Allen",
                work:"Software Engineer"
            },
            {
                id:2,
                name:"Asad",
                work:"Platform Engineer"
            },
            {
                id:3,
                name:"Dibakar",
                work:"System Engineer"
            },
            {
                id:4,
                name:"Piyush",
                work:"Testing Engineer"
            }
            
        ]
    
    
        const cardobj = cardArray.map((c,i)=>{
            return <CardList key={i} id={cardArray[i].id} name={cardArray[i].name} work={cardArray[i].work}/>
        })
    
        return (
            <div>
                <h1>{this.state.name}</h1>
                {cardobj}
                <button onClick={()=>this.headingChange()}>Suscribe</button>  
            </div>
        )
    }
}



export default Card;