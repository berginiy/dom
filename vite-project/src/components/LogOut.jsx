import { useContext } from "react"
import { UserContext } from "@/App"
import { useNavigate } from "react-router-dom"

export default function LogOut() {
    const [user, setUser] = useContext(UserContext)
    const navigate = useNavigate()

    function logout(event) {
        setUser(false)

        localStorage.removeItem('access_token')
        localStorage.removeItem('refresh_token')

        navigate('/')
    }

    function ok(event) {
        navigate('/')
    }

    return (
        <div className="back">
            <div className="logout">
                <form>
                    <h2>Logout</h2>
                    <label htmlFor="">Are you sure?</label>
                    <button onClick={ok} className="no">No</button>
                    <button onClick={logout} className="yes">Yes</button>
                </form>
            </div>
        </div>
    )
}