import { useState, useContext } from 'react'
import axios from 'axios'
import { UserContext } from '@/App.jsx'
import { useNavigate } from "react-router-dom"

export default function Register() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [nameUser, setNameUser] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [user, setUser] = useContext(UserContext)
    const navigate = useNavigate()

    function setInputUsername(event) {
        setUsername(event.target.value)
    }
    function setInputEmail(event) {
        setEmail(event.target.value)
    }
    function setInputNameUser(event) {
        setNameUser(event.target.value)
    }
    function setInputPhoneNumber(event) {
        setPhoneNumber(event.target.value)
    }

    function setInputPassword(event) {
        setPassword(event.target.value)
    }
    function setInputPasswordConfirm(event) {
        setPasswordConfirm(event.target.value)
    }

    function back(event) {
        navigate('/')
    }

    async function sendData(event) {
        event.preventDefault()

        const response = axios.post('http://217.151.230.35:888/api/v1/regauth/register/', {
            username: username,
            email: email,
            name: nameUser,
            phone_number: phoneNumber,
            password: password,
            password_confirm: passwordConfirm,
        })
            .then((res) => {
                console.log(res)
                localStorage.setItem('user_id', res.data.id)

                navigate('/')
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
        <div className="back">
            <div className='register'>
                <form onSubmit={sendData} method='post'>
                    <h2>Register</h2>
                    <label htmlFor="username">Username: </label><br />
                    <input onChange={setInputUsername} type="text" name="username" placeholder="enter your username" /><br />
                    <label htmlFor="email">Email: </label><br />
                    <input onChange={setInputEmail} type="email" name="email" placeholder="enter your Email" /><br />
                    <label htmlFor="name">Name: </label><br />
                    <input onChange={setInputNameUser} type="text" name="name" placeholder="enter your username" /><br />
                    <label htmlFor="phonenumber">Phone number: </label><br />
                    <input onChange={setInputPhoneNumber} type="tel" name="phonenumber" placeholder="enter your username" /><br />
                    <label htmlFor="password">Password: </label><br />
                    <input onChange={setInputPassword} type="password" name="password" placeholder="enter your password" /><br />
                    <label htmlFor="password_again">Password again: </label><br />
                    <input onChange={setInputPasswordConfirm} type="password" name="password_again" placeholder="enter your password again" /><br />
                    <input className="submit" type="submit" value="submit" /><br />
                    <button onClick={back} className='op_next'>Back</button>
                </form>
            </div>
        </div>
    )
}