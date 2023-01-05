import { faCode } from '@fortawesome/free-solid-svg-icons'
import {faWindowClose} from '@fortawesome/free-regular-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {React, useRef} from 'react'

import './Modal.scss'

export const Modal = ({showModal, openModal, title, description, prim_img, sup_img, link, togglePointerEvents}) => {
        
    const modalRef = useRef();

    const handleBackgroundClick = e => {
        if (modalRef.current === e.target) {
            openModal();
            //togglePointerEvents();
        }
    }
    return (showModal ? 
        <>
            <div className='modal_overlay' ref={modalRef} onClick={handleBackgroundClick}/>
                <div className='modal_container'>
                    <div className='modal_content'>                
                        <div className='description_pane'>
                            <h2 className='modal_title'><b>{title}</b></h2>
                            <p className='modal_description'>{description}</p>
                            
                            <a href={link} target="_blank" rel="noreferrer">
                            <button className='git_link_button'>
                            <FontAwesomeIcon className='modal_git_button' icon={faCode} />                        
                            </button>
                            </a>
                        </div>
                        <div className='image_pane'>
                            <img className='modal_image' src={process.env.PUBLIC_URL + '/' + prim_img} alt='primary_img'></img>
                            <img className='modal_image' src={process.env.PUBLIC_URL + '/' + sup_img} alt='sup_img'></img>
                        </div>
                    </div>
                    <button className='close_button' onClick={() => {
                        togglePointerEvents();
                        openModal();
                    }}>
                        <FontAwesomeIcon className='close_window' icon={faWindowClose}/>
                    </button>
                </div> 
                </>
        : null    
    )
}
