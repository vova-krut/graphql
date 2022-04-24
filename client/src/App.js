import React from "react";
import "./App.css";

const App = () => {
    return (
        <div>
            <form>
                <input type="text" />
                <input type="number" />
                <div className="btns">
                    <button>Create</button>
                    <button>Get</button>
                </div>
            </form>
        </div>
    );
};

export default App;
