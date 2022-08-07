import React from "react";

export default function Card(props){
    return (

        <div className="card">
            <div className="card--badge">
            <a href={props.item.Youtube}>
                    <img className="card--utube"src="https://www.freepnglogos.com/uploads/youtube-play-red-logo-png-transparent-background-6.png" alt="Link"/>
                </a>
            </div>
            <img src={props.item.Coverimage} className="card--image" alt="movie" />
            <p className="card--title">{props.item.Title}</p>
            <div className="card--stats">
            <span>{props.item.Year}</span>
                <span className="gray">{props.item.Mrating}</span>
                <span>{props.item.Length}</span>
            </div>
            <p className="card--description">{props.item.Description}</p>
        </div>

    )
}