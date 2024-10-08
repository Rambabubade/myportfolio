import React from 'react';  
import Carousel from 'react-multi-carousel'; // Assuming you're using this carousel library  
import 'react-multi-carousel/lib/styles.css'; // Import carousel styles  
import meter1 from '../assets/img/meter1.png'; // Adjust path to your images  
import meter2 from '../assets/img/meter2.png';  
import meter3 from '../assets/img/meter3.png';  
import colorSharp from '../assets/img/colorSharp.png'; // Ensure this path to your colorSharp image is correct  

const responsive = {  
    desktop: {  
        breakpoint: { max: 3000, min: 1024 },  
        items: 3  
    },  
    tablet: {  
        breakpoint: { max: 1024, min: 464 },  
        items: 2  
    },  
    mobile: {  
        breakpoint: { max: 464, min: 0 },  
        items: 1  
    }  
};  

const Skills = () => {  
    return (  
        <section className="skill" id="skills">  
            <div className="container">  
                <div className="row">  
                    <div className="col-12">  
                        <div className="skill-bx wow zoomIn">  
                            <h2>Skills</h2>  
                            <p>  
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br />  
                                Lorem Ipsum has been the industry's standard dummy text.  
                            </p>  
                            <Carousel  
                                responsive={responsive}  
                                infinite={true}  
                                className="owl-carousel owl-theme skill-slider"  
                            >  
                                <div className="item">  
                                    <img src={meter1} alt="Web Development" />  
                                    <h5>Web Development</h5>  
                                </div>  
                                <div className="item">  
                                    <img src={meter2} alt="Machine Learning" />  
                                    <h5>Machine Learning</h5>  
                                </div>  
                                <div className="item">  
                                    <img src={meter3} alt="UI/UX Design" />  
                                    <h5>UI/UX Design</h5>  
                                </div>  
                                <div className="item">  
                                    <img src={meter1} alt="Android Development" /> {/* Could use another image here if needed */}  
                                    <h5>Android Development</h5>  
                                </div>  
                            </Carousel>  
                        </div>  
                    </div>  
                </div>  
            </div>  
            <img className="background-image-left" src={colorSharp} alt="Background" />  
        </section>  
    );  
};  

export default Skills;
