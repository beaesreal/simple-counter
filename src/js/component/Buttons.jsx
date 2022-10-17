import React, {useState} from "react";

function Buttons() {
    const [SecondsCounter, setCount] = useState(0);
    return (
        <div className="container-fluid text-center buttons p-3 blue-900">
            <div className="col-12">
                
            </div>
            <div className="col-12 text-center">
                <button className="btn btn btn-success text-center m-2 subtract" onClick={() => setCount (SecondsCounter + 1) }>Subtract one</button>
                <button className="btn btn-success m-2 start pause">Pause counter</button>
                <button className="btn btn-success m-2 continue">Continue counting</button>
                <button className="btn btn btn-danger text-center m-2 reset" onClick={() => setCount (0) }><strong>RESET</strong></button>
            </div>
        </div>
    );
};

export default Buttons;