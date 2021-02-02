var headerOptions = [
    {
        id: 1,
        name: 'Opcion 1',
        url: 'google.com'
    },
    {
        id: 2,
        name: 'Opcion 2',
        url: 'google.com'
    },
    {
        id: 3,
        name: 'Opcion 3',
        url: 'google.com'
    },
    {
        id: 4,
        name: 'Opcion 4',
        url: 'google.com'
    }
]

const Header = (props) => {
    return (
        <header className="header">
            <div className="container">
                <div className="menu">
                    <nav>
                        <ul>
                            {headerOptions.map((opt) => (
                                <li key={opt.id}>
                                    <a href={opt.url}>{opt.name}</a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <button className="hamburguer">
                        <span></span>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header