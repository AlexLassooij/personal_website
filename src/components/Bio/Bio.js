// Library imports

//Style imports
import './Bio.css';

// Image imports

const Bio = () => {
    return(
        <div id='bio_container'>  
                <h2>About Me</h2>      
        <div className="bio_content">
            <p>Hey there 👋 My name is Alex Lassooij, I'm a third year Electrical Engineering student at UBC. I am a self-taught
                developer who is passionate about finding creative solutions that benefit our day to day lives. I have experience developing
                a menthorship app with <b>ReactJS</b>, a task management app with <b>Flutter</b> and various other personal projects. <br></br>
                Outside of school, I like to play volleyball, go to the gym and dabble in cooking. <br></br>
                I am seeking internship opportunities for May 2022.
            </p>
        </div>
        <i className='line_separator_horizontal'></i>
        </div>
    )
}

export default Bio