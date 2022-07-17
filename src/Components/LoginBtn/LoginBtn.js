import React from 'react';
import Modal from 'react-modal'
import './LoginBtn.css'
import Logo from '../Logo/Logo'
//adding icon
import loginBtn from '../../Assets/Icons/LoginBtn.svg'
import { Row } from 'react-bootstrap';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

const LoginBtn = () => {
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00 ';
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div>
            <a onClick={openModal} className='loginBtn me-3 mb-1btn '>
                <img src={loginBtn} width={18} />
            </a>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <Row className='logoContainer  px-5 w-100 m-auto' >
                    <Logo logoSize={100} />
                </Row>
                <div className='container'>
                    <div className='container pb-2 mt-2 border-bottom'>اگر اکانت ندارید، <a href='/register'>ثبت نام </a>کنید</div>

                    <form className='login container mt-2' method='post'>
                        <div>
                            <label>نام کاربری:</label>
                            <input type='text' className='mt-1' placeholder='به انگلیسی بنویسید' />
                        </div>
                        <div className='mt-3'>
                            <label>رمز عبور:</label>
                            <input type='password' className='mt-1' />
                        </div>
                        <div>
                            <button type='submit' className='btn mt-4 px-4'>ورود</button>
                        </div>
                    </form>
                </div>
            </Modal>
        </div>
    )
}

export default LoginBtn