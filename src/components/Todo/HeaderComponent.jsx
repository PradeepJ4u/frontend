import { Link } from 'react-router-dom'
import { useAuth } from './security/AuthContext'
function HeaderComponent() {

    //const authContext = useContext(AuthContext)

    const authContext = useAuth()

    return (
        <header className="border-bottom border-light border-5 mb-5 p-2">
            <div className="container">
                <div className="row">
                    <nav className="navbar navbar-expand-lg">
                        <a className="nav-link" href="https://www.google.com/">Google</a>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav">
                                <li className="nav-item fs-5">
                                    {authContext.isAuthenticated && <Link className="nav-link" to="/welcome/in28minutes">Home</Link>}
                                </li>
                                <li className="nav-item fs-5">
                                    {authContext.isAuthenticated && <Link className="nav-link" to="/list-todos">Todos</Link>}
                                </li>
                            </ul>
                        </div>
                        <ul className="navbar-nav">
                            <li className="nav-item fs-5">
                                {!authContext.isAuthenticated &&
                                    <Link className="nav-link" to="/login">Login</Link>}
                            </li>
                            <li className="nav-item fs-5">
                                {authContext.isAuthenticated &&
                                    <Link className="nav-link" to="/logout" onClick={authContext.logout}>Logout
                                    </Link>}
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>

    )
}

export default HeaderComponent 