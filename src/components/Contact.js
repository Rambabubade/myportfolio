import { useState } from "react";  
import { Container, Row, Col } from "react-bootstrap";  
import contactImg from "../assets/img/contact-img.svg";  
import 'animate.css';  
import TrackVisibility from 'react-on-screen';  

export const Contact = () => {  
  const formInitialDetails = {  
    firstName: '',  
    lastName: '',  
    email: '',  
    phone: '',  
    message: ''  
  };  

  const [formDetails, setFormDetails] = useState(formInitialDetails);  
  const [buttonText, setButtonText] = useState('Send');  
  const [status, setStatus] = useState({});  

  const onFormUpdate = (category, value) => {  
    setFormDetails({  
      ...formDetails,  
      [category]: value  
    });  
  };  

  const handleSubmit = async (e) => {  
    e.preventDefault();  
    setButtonText("Sending...");  

    try {  
      let response = await fetch("http://localhost:5000/contact", {  
        method: "POST",  
        headers: {  
          "Content-Type": "application/json;charset=utf-8",  
        },  
        body: JSON.stringify(formDetails),  
      });  

      if (response.ok) {  
        const result = await response.json();  
        setStatus({ success: true, message: result.message || "Message sent successfully!" });  
      } else {  
        const errorData = await response.json();  
        setStatus({ success: false, message: errorData.message || "Something went wrong!" });  
      }  
    } catch (error) {  
      setStatus({ success: false, message: "Network error! Please try again later." });  
    }  
    
    setButtonText("Send");  
    setFormDetails(formInitialDetails); // Reset the form once the submission is done  
  };  

  return (  
    <section className="contact" id="connect">  
      <Container>  
        <Row className="align-items-center">  
          <Col xs={12} md={6}>  
            <img src={contactImg} alt="Contact Us" />  
          </Col>  
          <Col xs={12} md={6}>  
            <form onSubmit={handleSubmit}>  
              <Row>  
                <Col xs={6} md={6}>  
                  <input   
                    type="text"   
                    placeholder="First Name"   
                    value={formDetails.firstName}   
                    onChange={(e) => onFormUpdate('firstName', e.target.value)}   
                    required   
                  />  
                </Col>  
                <Col xs={6} md={6}>  
                  <input   
                    type="text"   
                    placeholder="Last Name"   
                    value={formDetails.lastName}   
                    onChange={(e) => onFormUpdate('lastName', e.target.value)}   
                    required   
                  />  
                </Col>  
                <Col xs={12} md={12}>  
                  <input   
                    type="email"   
                    placeholder="Email"   
                    value={formDetails.email}   
                    onChange={(e) => onFormUpdate('email', e.target.value)}   
                    required   
                  />  
                </Col>  
                <Col xs={12} md={12}>  
                  <input   
                    type="tel"   
                    placeholder="Phone"   
                    value={formDetails.phone}   
                    onChange={(e) => onFormUpdate('phone', e.target.value)}   
                    required   
                  />  
                </Col>  
                <Col xs={12} md={12}>  
                  <textarea   
                    rows="5"   
                    placeholder="Message"   
                    value={formDetails.message}   
                    onChange={(e) => onFormUpdate('message', e.target.value)}   
                    required   
                  />  
                </Col>  
                <Col xs={12}>  
                  <button type="submit">{buttonText}</button>  
                  {status.message && <div className={`status-message ${status.success ? 'success' : 'error'}`}>{status.message}</div>}  
                </Col>  
              </Row>  
            </form>  
          </Col>  
        </Row>  
      </Container>  
    </section>  
  );  
};
