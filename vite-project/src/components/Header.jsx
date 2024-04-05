import { useContext } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    const [user, setUser] = useContext(UserContext)

    return (
        <header className="header">
            <div className="container">

                <div className="header_inner">
                    <nav className="nav">
                        <a className="link">O нас</a>
                        <a className="link" >Специалисты</a>
                        <a className="link" >Процедуры</a>
                        <a className="link" >Средства</a>
                        {!user ? (
                            <>
                                <Link className="link" to='/log'>Войти</Link>
                            </>
                        ) : (
                            <>
                                <Link className='link' to='/home'>Home</Link>
                            </>
                        )}
                    </nav>
                </div>
            </div>
        </header>
    )
}