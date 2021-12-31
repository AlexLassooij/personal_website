import { React, useState, useRef, memo} from 'react'
import { Modal } from '../Modal/Modal';

import './ProjectCard.css'

export const ProjectCard = ({title, cover, prim_img, description, sup_img, link, togglePointerEvents}) => {

    const [showModal, setShowModal] = useState(false);
    const modalRef = useRef();

    
    const openModal = () => {
        setShowModal(!showModal)
        togglePointerEvents();
        console.log("modal toggled")
    }

    

    return (
        <div className='project_card_container'>
            <div className='project_card'>
                <img className='project_image' src={cover} alt='project_image'/>
                <h2 className='project_title_holder'>{title}</h2>
                <div className='background' onClick={openModal}></div>
            </div>  
            <Modal
                showModal={showModal}
                openModal={openModal}
                title={title}
                description={description}
                prim_img={prim_img}
                sup_img={sup_img}
                link={link}
                togglePointerEvents={togglePointerEvents}
            />
        </div>
    )
}
