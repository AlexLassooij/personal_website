import React from 'react'

// sylesheets 
import './ExperienceBlock.css'

export const ExperienceBlock = ({title, position, date, description, contribution, icon}) => {
    return (
        <div className='experience'>
            <div className='experience_header'>
                <img className='experience_image' src={icon} alt='experience_icon'/>
                <div className='experience_info'>
                    <h3 className='experience_title'>{title}</h3>
                    <h3 className='experience_position'>{position}</h3>
                </div>
                <h3 className='experience_date'>{date}</h3>
            </div>
            <p className='experience_description'>{description}</p>
            <p className='experience_contribution'>{contribution}</p>

            
        </div>
    )
}
