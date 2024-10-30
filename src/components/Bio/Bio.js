// Library imports

//Style imports
import './Bio.scss';
import jsonData from '../../files/portfolio_data.json'


// Image imports

const Bio = () => {
    const bio_main = jsonData["bio_main"]
    const bio_experience = jsonData["bio_experience"]
    const technologies = jsonData["technologies"]

    const technologiesComponents = technologies.map((technology) => {
        return(
            <div className='technology-item'>
                <img className={'technology-icon'} style={technology.customSize} src={process.env.PUBLIC_URL + '/images/' + technology.icon + '.png'} alt='technology-icon'/>
                <h5 className='technology-name'>
                    {technology.name}
                </h5>
            </div>
            
        )
    }) 
    return(
        <div id='bio-container'> 
            {/* <div className='bio-header'> */}
                <h1 id="about-me">About Me</h1> 
            {/* </div>  */}
            <div className='bio-content text-pad'>
                <img className="bio-picture" src={process.env.PUBLIC_URL + '/images/profile1:1.png'} alt='profile'/> 

                <p className='bio-text text-pad-paragraph' style={{paddingBottom: "0"}}>
                    {bio_main}
                </p>
                <p className='bio-text text-pad-paragraph' style={{paddingTop: "0"}}>
                    {bio_experience}
                </p>
                {/* <p>Hey there 👋 My name is Alex Lassooij, I'm a third year Electrical Engineering student at UBC. I am a self-taught
                    developer who is passionate about finding creative solutions that benefit our day to day lives. I have experience developing
                    a menthorship app with <b>ReactJS</b>, a task management app with <b>Flutter</b> and various other personal projects. <br></br>
                    Outside of school, I like to play volleyball, go to the gym and dabble in cooking. <br></br>
                    I am seeking internship opportunities for May 2022.
                </p> */}
                <div className='technologies'>
                        {technologiesComponents}
                </div>
            </div>
            <i className='line_separator_horizontal'></i>
        </div>
    )
}

export default Bio