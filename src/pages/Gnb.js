import { useEffect, useRef, useState } from "react";
import Nav from "./Nav";

const Gnb = () => {
    const [TGL, setTGL] = useState(false);
    const [TGS, setTGS] = useState(false);



    return (
        <div className="hd_wrap">
            <h1>
                <a href="./">

                </a>
            </h1>


            <Nav />



            <div className="top_service">
                <ul className="project">
                    <li><a href="#!">LOGIN</a></li>
                    <li><a href="#!">JOIN US</a></li>
                    <li><a href="#!">MY PAGE</a></li>
                    <li><a href="#!">MY CART</a></li>
                </ul>
                <div className={`lang ${TGL ? 'on' : ''}`}>
                    <strong onClick={() => setTGL(!TGL)}><i className="xi-globus"></i> KOR <i className="xi-angle-down arrow"></i></strong>
                    <ul className="lang_box">
                        <li><a href="#!">KOR</a></li>
                        <li><a href="#!">ENG</a></li>
                        <li><a href="#!">CHN</a></li>
                    </ul>
                </div>
                <div className={`top_search ${TGS ? 'on' : ''}`}>
                    <strong onClick={() => setTGS(!TGS)}><i className="xi-search"></i></strong>
                    <div className="search_box">

                        <form action="#!">
                            <input type="text" placeholder="검색어를 입력하세요" required />
                            <button>
                                <i className="xi-search"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gnb;