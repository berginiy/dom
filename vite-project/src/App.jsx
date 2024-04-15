import Routers from '@/app/Routers'
import '@/App.css'
import { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const UserContext = createContext()
export const UserInfo = createContext()
export const ModalContext = createContext()
export const ModalStatus = createContext()

export default function App() {

  const [user, setUser] = useState(true)
  const [userInfo, setUserInfo] = useState({

  })
  const [visible, setVisible] = useState(false)
  const [status, setStatus] = useState('userAvatar')

  useEffect(() => {
    if (localStorage.getItem('access_token')) {
      checkUser(localStorage.getItem('access_token'))
    }
  }, [])

  useEffect(() => {
    if (localStorage.getItem('access_token')) {
      checkUser(localStorage.getItem('access_token'))
    }
  }, [user])

  async function checkUser(access) {
    const access_token = localStorage.getItem('access_token')
    axios.defaults.headers.common = { 'Authorization': `Bearer ${access_token}` }
    let response = axios.get('http://217.151.230.35:888/api/v1/regauth/user-info/')
      .then((res) => {
        setUser(true)
        setUserInfo(res.data)
        console.log(res.data)
      })
      .catch((error) => {
        if (error.response) {
          console.error('Authentication failed. Server responded with:', error.response.data)
        } else if (error.request) {
          console.error('No response received from the server. Is the server running?')
        } else {
          console.error('Error setting up the request:', error.message)
        }
      })
  }

  return (
    <UserContext.Provider value={[user, setUser]}>
      <ModalContext.Provider value={[visible, setVisible]}>
        <ModalStatus.Provider value={[status, setStatus]}>
          <UserInfo.Provider value={[userInfo, setUserInfo]}>
            <Routers />
          </UserInfo.Provider>
        </ModalStatus.Provider>
      </ModalContext.Provider>
    </UserContext.Provider>
  )
}