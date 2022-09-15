const CONTENT = [
    {
        id: 1, title: "MAGARINFINGERS", dec: " 2010년 6월에 론칭한 마가린핑거스는 디자이너 이주현의 독창적인 유니크 캐주얼 브랜드입니다. 시초에 마가린핑거스는 여러 가지 그래픽과 설치미술 등 여러 아트워크에서 파생하여 생긴 브랜드입니다. 웨어러블 한 아이템을 바탕으로 흥미로운 디테일과 위트가 있는 마가린핑거스 만의 실루엣으로 걸리시한 무드를 컨템퍼러리 하게 표현하고자 합니다. ", des: "Margarin Fingers is a unique, creative casual brand launches by Korean fashion designer Juhyeon Lee in 2010. With roots in graphic, installation and mixed media artworks Margarin Fingers expresses it’s girlish mood with fun signature silhouettes, detailing and an eye for wearability.", link: "/a"
    },
    // { id: 1, title: "", dec: "", link: "/a" },

]

const MainContent = () => {
    return (
        <section className="MainContent mg">
            <h2>ABOUT US</h2>

            <div className="inner">
                {
                    CONTENT.map(content => {
                        return (
                            <figure key={content.id}>
                                <div className="box">
                                    {/* <img src={process.env.PUBLIC_URL + " assets/section1_" + content.id + ".jpg"} alt="" /> */}
                                    <img src={process.env.PUBLIC_URL + " assets/info.jpg"} alt="" />
                                </div>
                                <div className="tit">{content.title}</div>
                                <div className="dec">{content.dec}</div>
                                <div className="des">{content.des}</div>
                                {/* { <a href={content.link} className="cbtn">자세히보기</a> } */}
                            </figure>
                        )
                    })
                }


            </div>         <p></p>
        </section>
    )
}

export default MainContent;