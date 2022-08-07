import React from "react"
import hmovie from "./Data/hmoviedata"
import bmovie from "./Data/bmoviedat"
import Card from "./components/card"


export default function Hello(){
    const hollywood = hmovie.map(item => {
        return (
                <Card 
                key={item.id}
                item={item}
                />
        )})
        const bollywood = bmovie.map(item => {
            return (
                    <Card 
                    key={item.id}
                    item={item}
                    />
            )})
    return(
        <div>
            <span className="tt">Hollywood Movie Data</span>
        <section className="cards-list">
            {hollywood}
        </section>
            <span className="tt">Bollywood Movie Data</span>
        <section className="cards-list">
            {bollywood}
        </section>
        </div>
    )
}