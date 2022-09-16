const DB = [
    {
        id: 1,
        content: "ABOUT",
        link: "/s1",
        submenu: [
            { content: "INFO", link: "/1" },
            { content: "STOCKISTS", link: "/2" },
            { content: "CONTACT", link: "/3" },

        ]
    },
    {
        id: 2,
        content: "SHOP",
        link: "/s1",
        submenu: [
            { content: "smenu021", link: "/1" },
            { content: "smenu022", link: "/2" },
            { content: "smenu023", link: "/3" },

        ]
    },
    {
        id: 3,
        content: "COLLECTION",
        link: "/s1",
        submenu: [
            { content: "smenu031", link: "/1" },
            { content: "smenu032", link: "/2" },
            { content: "smenu033", link: "/3" },

        ]
    },
    {
        id: 4,
        content: "COMMUNUTY",
        link: "/s1",
        submenu: [
            { content: "smenu031", link: "/1" },
            { content: "smenu032", link: "/2" },
            { content: "smenu033", link: "/3" },

        ]
    },
    {
        id: 4,
        content: "MY ACCOUNT",
        link: "/s1",
        submenu: [
            { content: "smenu031", link: "/1" },
            { content: "smenu032", link: "/2" },
            { content: "smenu033", link: "/3" },

        ]
    },
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