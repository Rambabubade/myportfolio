import { useState, useEffect } from "react";  
import { Container, Row, Col } from "react-bootstrap";  
import headerImg from "../assets/img/header-img.svg";  
import { ArrowRightCircle } from 'react-bootstrap-icons';  
import 'animate.css';  
import TrackVisibility from 'react-on-screen';  

export const Banner = () => {  
  const [loopNum, setLoopNum] = useState(0);  
  const [isDeleting, setIsDeleting] = useState(false);  
  const [text, setText] = useState('');  
  const [delta, setDelta] = useState(300 - Math.random() * 100);  
  const [index, setIndex] = useState(1);  
  const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];  
  const period = 2000;  

  useEffect(() => {  
    let ticker = setInterval(() => {  
      tick();  
    }, delta);  

    return () => { clearInterval(ticker); };  
  }, [text, delta]); // Added delta as a dependency  

  const tick = () => {  
    let i = loopNum % toRotate.length;  
    let fullText = toRotate[i];  
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);  

    setText(updatedText);  

    if (isDeleting) {  
      setDelta(prevDelta => prevDelta / 2);  
    }  

    if (!isDeleting && updatedText === fullText) {  
      setIsDeleting(true);  
      setDelta(period); // Set delta back to period once the full text is displayed  
      setLoopNum(loopNum + 1); // Move to the next item  
    } else if (isDeleting && updatedText === '') {  
      setIsDeleting(false);  
      setDelta(300 - Math.random() * 100); // Reset delta after deletion  
    }  
  };  

  return (  
    <section className="banner" id="home">  
      <Container>  
        <Row className="align-items-center">  
          <Col xs={12} md={6} xl={7}>  
            <div className="banner-content">  
              <h1>{text}</h1>  
              <p>I'm a passionate developer skilled in building amazing user experiences.</p>  
              <button onClick={() => console.log('Connect')}>  
                Let's Connect <ArrowRightCircle size={25} />  
              </button>  
            </div>  
          </Col>  
          <Col xs={12} md={6} xl={5}>  
            <img src={headerImg} alt="Header Img" />  
          </Col>  
        </Row>  
      </Container>  
    </section>  
  );  
};
