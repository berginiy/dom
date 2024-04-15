import { useContext, useEffect } from 'react'
import { ModalContext } from '@/App'

export default function Modal() {
    const [visible, setVisible] = useContext(ModalContext)

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (event.target.classList.contains('modal')) {
                setVisible(false);
            }
        };

        if (visible) {
            document.addEventListener('click', handleOutsideClick);
        }

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [visible, setVisible]);

    function back() {
        setVisible(false)
    }

    async function confirmInfo(event) {
        event.preventDefault()
        setVisible(false)
    }

    return (
        <>
            {visible && (
                <div className='modal'>
                    <div className='modal-content'>
                        <div className='modalWindow userChangeInfo'>
                            <h1>Info</h1>
                            <form onSubmit={confirmInfo} className="mod_form" action="">
                                <div>
                                    <label htmlFor="username">New Username:</label>
                                    <input type="text" name='username' />
                                </div>
                                <div>
                                    <label htmlFor="email">New Email:</label>
                                    <input type="text" name='email' />
                                </div>
                                <div>
                                    <label htmlFor="name">New Name:</label>
                                    <input type="text" name='name' />
                                </div>
                                <div>
                                    <label htmlFor="phone_number">New Phone Number:</label>
                                    <input type="text" name='phone_number' />
                                </div>
                                <div>
                                    <input className='submit change_btn' type="submit" value='submit' />
                                    <button onClick={back} className='mod_back_btn change_btn'>back</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}