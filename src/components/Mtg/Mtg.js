import { useState, useEffect } from "react"

const Game = () => {
    useEffect(() => {
        fetch(`https://api.scryfall.com/cards/search?order=released&unique=prints&q=t:legend+include:extras+name:"Gideon"`)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log(data);
        })
    }, [])

    return (
        <div className="game-container">
            <div className="game-content">
                oioioi
            </div>
        </div>
    )
}

export default Game
