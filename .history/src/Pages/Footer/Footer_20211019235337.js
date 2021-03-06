import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className='bg-dark'>
            <Container>
                <Row className="p-5">
                    <Col xs>
                        <h2 className="text-warning">Contact US</h2> <br />
                        <div className='text-white'>
                            <p>Heygate Street SE171UP <br /> London <br /> United Kingdom</p>
                            <p>0-844-266-2447</p>
                            <p>Monday-Friday: 10am-8pm</p>
                        </div>
                    </Col>
                    <Col xs>
                        <iframe className="rounded" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1989.3812020890443!2d90.3872416978392!3d23.870422669961613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c5509ecf5983%3A0x8a69ad4574fdfe70!2sUttara%20sector%2013%20field%20kalyan%20shomity!5e0!3m2!1sen!2sbd!4v1633370419251!5m2!1sen!2sbd" width="500" height="250" allowfullscreen="" loading="lazy"></iframe>
                    </Col>
                    <div className='text-white text'>
                        <h5>Copyright by CoderStation 2021. All rights reserved.</h5>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;