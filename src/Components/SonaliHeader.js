// import React, { useState } from "react";
import './SonaliHeader.css';
// import Comp from "./OneToTen/OneToTen";

function SonaliHeader() {
    // const [showSattu, setShowSattu] = useState(false);
    return (
        <>
            <div className="outer-flex">
                <div className="body-div">
                    <div className="profile">
                        <div className="image-div"></div>
                        <div className="image-div-text">Sonali Patle</div>
                    </div>
                    <div className="btn">
                        {/* <button onClick={() => setShowSattu(true)}>All 10 Slides</button> */}
                        <a href="https://satyekuma.github.io/1-10-pics-to-drag/"><button>All 10 Slides</button></a>
                        <a href="https://satyekuma.github.io/1-10-pics-to-drag/"><button>All 10 Slides</button></a>
                    </div>
                </div>
                {/* {showSattu && <Comp />} */}
            </div>
        </>
    )
}
export default SonaliHeader;