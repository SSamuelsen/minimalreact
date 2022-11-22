import React, { useState } from "react";
import './home.css';
import Board from "./board";

const Home = () => {

    // State
    const [board, setBoard] = useState<string>("");
    // EndState

    return (
        <div className="minimal">
            <h2>A Minimal Project Management Application Demo</h2>
            <div className="minimal_demo--container">
                <Board board={board} setBoard={setBoard}/>
            </div>
        </div>
    );
};

export default Home;