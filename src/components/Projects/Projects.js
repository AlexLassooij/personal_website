import { React, useState } from 'react'

// data import
import jsonData from '../../files/portfolio_data.json'
import { ProjectCard } from '../ProjectCard/ProjectCard';

// stylesheets
import './Projects.scss'

export const Projects = () => {

    
    const [ModalActive, setModalActive] = useState(false);
    const ProjectData = jsonData["projects"];

    const togglePointerEvents = () => {
        setModalActive(!ModalActive)
    }
    const ProjectComponents = ProjectData.map((project) => {
        return (
            <ProjectCard
                title={project.title}
                cover={project.cover}
                prim_img={project.prim_img}
                description={project.description}
                sup_img={project.sup_img}
                link={project.link}
                togglePointerEvents={togglePointerEvents}                
            />
        )
    })


    return (
        <div id='projects'>
        <div className={ModalActive ? 'project_container' : 'project_container active'}>
            <div className='project_content'>
                <h1 style={{color: "rgb(33,33,33)"}}>Projects</h1>
                <div className='project-gallery'>
                    {ProjectComponents}
                </div>            
            </div>      
        </div>
        </div>
    )
}
