import React from 'react'

// sylesheets 
import './ExperienceBlock.scss'

export const ExperienceBlock = ({title, position, date, description, contribution, icon}) => {
    return (
        <div className='experience text-pad'>
            <div className='experience_header text-pad-paragraph'>
                <div className='experience-left-block'>
                     <img className='experience_icon' src={process.env.PUBLIC_URL + '/' + icon} alt='experience_icon'/>
                    <div className='experience_info'>
                        <h3 className='experience_title'>{title}</h3>
                        <h3 className='experience_position'>{position}</h3>
                    </div>
                </div>
                <h3 className='experience_date'>{date}</h3>
            </div>
            <p className='experience_description text-pad-paragraph'>{description}</p>
            <p className='experience_contribution text-pad-paragraph'>{contribution}</p>

            
        </div>
    )
}
