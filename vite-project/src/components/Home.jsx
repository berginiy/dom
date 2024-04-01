import { UserInfo } from '@/App'
import { useContext } from 'react'

export default function Home() {
    const [userInfo, setUserInfo] = useContext(UserInfo)

    return (
        <div className="home">
            <div className="home_avatar">
                <div>
                </div>
                <h2>{userInfo.avatar}</h2>
            </div>
            <div className="home_user">
                <h1>user-info</h1>
                <ul>
                    <li><h3>{userInfo.username}</h3></li>
                    <li><h3>{userInfo.email}</h3></li>
                    <li><h3>{userInfo.name}</h3></li>
                    <li><h3>{userInfo.phone_number}</h3></li>
                </ul>
            </div>
        </div>
    )
}