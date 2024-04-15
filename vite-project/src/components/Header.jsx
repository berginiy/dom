import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../App.jsx'

export default function Header() {
    const [user, setUser] = useContext(UserContext)

    const handleScrollToComponent = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <header className="header">
            <div className="container">
                <div className="header_inner">
                    <nav className="nav">
                        <a className="link" onClick={() => handleScrollToComponent('about')}>O нас</a>
                        <a className="link" onClick={() => handleScrollToComponent('benefits')}>В чем плюсы</a>
                        <a className="link" onClick={() => handleScrollToComponent('products')}>Средства</a>
                        {!user ? (
                            <Link className="link" to='/logout'>Выйти</Link>
                        ) : (
                            <Link className='link' to='/home'>Home</Link>
                        )}
                    </nav>
                </div>
            </div>
        </header>
    )
}
