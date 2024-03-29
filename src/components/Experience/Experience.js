import React from 'react'
import jsonData from '../../files/portfolio_data.json'

import { ExperienceBlock } from '../ExperienceBlock/ExperienceBlock';

// stylesheets
import './Experience.scss'



export const Experience = () => {
    const experienceData = jsonData['experience'];
    const experienceBlocks = experienceData.map((experience) => {
        return(
            <ExperienceBlock
            title = {experience.title}
            position={experience.position}
            date = {experience.date}
            description = {experience.description}
            contribution={experience.contribution}
            icon = {experience.icon}
        />   
        );
        
    })
    
    return (
        
        <div id='experience_container'>
            <h1>Experience</h1>
                {experienceBlocks} 
            <i className='line_separator_horizontal'></i>            
        </div>
    )
}


