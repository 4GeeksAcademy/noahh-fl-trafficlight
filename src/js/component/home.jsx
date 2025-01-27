import React, { useState } from "react";

// Create the TrafficLight component
const TrafficLight = () => {
    const [color, setColor] = useState("red"); // Default light is red

    return (
        <div>
            {/* Pole */}
            <div id="pole"></div>

            {/* Traffic Light */}
            <div id="container">
                <div
                    className={`light red ${color === "red" ? "glow" : ""}`}
                    onClick={() => setColor("red")}
                ></div>
                <div
                    className={`light yellow ${color === "yellow" ? "glow" : ""}`}
                    onClick={() => setColor("yellow")}
                ></div>
                <div
                    className={`light green ${color === "green" ? "glow" : ""}`}
                    onClick={() => setColor("green")}
                ></div>
            </div>
        </div>
    );
};

// Home component
const Home = () => {
    return (
        <div className="text-center">
            <TrafficLight />
        </div>
    );
};

export default Home;
