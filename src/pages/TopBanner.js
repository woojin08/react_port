import { useState } from "react";

const TopBanner = () => {
    // classList.add 구현
    const [TB, setTB] = useState();
    return (
        <div className={`TopBanner ${TB ? 'on' : ''}`}>
            <div className="w1200">
                <h2>
                    2022  <span>FALL WINTER COLLECTION LOOKBOOK</span>
                </h2>
                {/* <p>
                    현대엘리베이터가 만든 새로운 길을 따라 세상은 위로 넓어집니다.
                </p> */}
                <div className="top_close_btn" onClick={() => setTB(!TB)}>
                    <i className="xi-close"></i>
                </div>
            </div>
        </div >
    )
}

export default TopBanner;