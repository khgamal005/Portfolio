import { faHandPointRight } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Container, Row } from 'react-bootstrap';
import './About.css';

import AOS from 'aos';
AOS.init({
  once: true,
});

const About = () => {
  return (
    <section className='About section_padding'>
      <h2 className='main_heading'>About Me</h2>
      <Container>
        <article className="qual_cont" data-aos={"fade-up"}>
          <p>Hi , I'm a Front-end web developer with <span>2</span>+ years of experience in designing and building responsive web apps.</p>
          <p><span>2022</span><FontAwesomeIcon icon={faHandPointRight} />  verified certificate of completion from ministry of communication and technology of egypt in React Development Cross Skilling </p>
        </article>
        <article className="About_Info" data-aos={"fade-up"}>
          <Row>
            <Col xs={12} md={6} className="col_info mb-3">
              <p>Name:</p>
              <p>Khaled Gamal</p>
            </Col>
            <Col xs={12} md={6} className="col_info mb-3">
              <p>Country:</p>
              <p>Egypt</p>
            </Col>
            <Col xs={12} md={6} className="col_info mb-3">
              <p>CV:</p>
              <a href="https://drive.google.com/file/d/11Ploin371qaJvG0PPmZhD_HlSISVBcUr/view?usp=sharing" className='view custom_button' target="_blank" rel="noreferrer">View</a>
            </Col>
            <Col xs={12} md={6} className="col_info mb-0">
              <p>Phone:</p>
              <p className='fontalt mt-1'>01229705511</p>
            </Col>
            <Col xs={12} md={6} className="col_info mb-0">
              <p>Gmail:</p>
              <p className='gmail'>khgamal005@gmail.com</p>
            </Col>
          </Row>
        </article>
        <article className="About_passion" data-aos={"fade-up"}>
          <p>I'm looking forward to building a long-term relationship with my clients. The programming is my Passion , I love to learn something new everyday</p>
          <p><FontAwesomeIcon icon={faHandPointRight} /> And Finally , My favourite Sport is Football</p>
        </article>
      </Container>
    </section>
  )
}

export default About