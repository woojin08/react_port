const DB = [
    {
        id: 1,
        content: "menu01",
        link: "/s1",
        submenu: [
            { content: "smenu011", link: "/1" },
            { content: "smenu012", link: "/2" },
            { content: "smenu013", link: "/3" },

        ]
    },
    {
        id: 2,
        content: "menu02",
        link: "/s1",
        submenu: [
            { content: "smenu021", link: "/1" },
            { content: "smenu022", link: "/2" },
            { content: "smenu023", link: "/3" },

        ]
    },
    {
        id: 3,
        content: "menu03",
        link: "/s1",
        submenu: [
            { content: "smenu031", link: "/1" },
            { content: "smenu032", link: "/2" },
            { content: "smenu033", link: "/3" },

        ]
    }
]


const Nav = () => {
    return (
        <nav className="Gnb w1200">
            <ul>
                {
                    DB.map((it, idx) => <li key={idx}>
                        <a href={it.link}>{it.content}</a>
                        <ul className='smenu'>
                            {
                                it.submenu.map((smenu, idx) => <li key={idx}>
                                    <a href={smenu.link}>{smenu.content}</a>
                                </li>)
                            }
                        </ul>
                    </li>)
                }
            </ul>
        </nav>
    )
}

export default Nav;