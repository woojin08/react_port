import { useEffect, useRef, useState } from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";



const SlickCustom = () => {
    const SlideEle = [
        { id: 1, h2: '', p: '' },
        { id: 2, h2: '', p: '' },
        { id: 3, h2: '', p: '' },
        { id: 4, h2: '', p: '' },

    ];



    const s1 = useRef();
    const [num, setNum] = useState();

    useEffect(() => {
        setNum(0)
    }, [])

    const set = {
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        fade: true,
        afterChange: idx => {
            setNum(idx)
        }
    }

    return (
        <section className="MainVisual">
            <Slider ref={s1}{...set} className="MainVisual">
                {
                    SlideEle.map((itm, idx) => <figure
                        key={itm.id}
                        className={`itm0${idx + 1} ${idx == num ? 'on' : ''}`}
                    >
                        <div className="slogan">
                            <h2>{itm.h2}</h2>
                            <p>{itm.p}</p>
                            <a href="#!">more</a>
                        </div>
                    </figure>)
                }
            </Slider>

            {/* <div className="num">
                {num + 1}/{SlideEle.length}
            </div>

            <div className="slideArrow">
                <i className='xi-arrow-left' onClick={() => s1.current.slickPrev()}></i>
                <i className='xi-arrow-right' onClick={() => s1.current.slickNext()}></i>
            </div >
            <ul className="slideDot">
                {
                    SlideEle.map((dot, idx) => <li key={dot.id}
                        onClick={() =>
                            s1.current.slickGoTo(idx)
                        }
                        className={idx == num ? 'on' : ''}
                    >
                        {dot.id}</li>)
                }
            </ul> */}
            <div className="num">
                {num + 1}/{SlideEle.length}
            </div>

            <div className="slideArrow">
                <i className='xi-arrow-left' onClick={() => s1.current.slickPrev()}></i>
                <i className='xi-arrow-right' onClick={() => s1.current.slickNext()}></i>
            </div >
            <ul className="slideDot">
                {
                    SlideEle.map((dot, idx) => <li key={dot.id}
                        onClick={() =>
                            s1.current.slickGoTo(idx)
                        }
                        className={idx == num ? 'on' : ''}
                    >
                        {dot.id}</li>)
                }
            </ul>
        </section>
    )
}

export default SlickCustom;