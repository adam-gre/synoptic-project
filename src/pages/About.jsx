import { Link } from 'react-router-dom';
import { useEffect } from "react";

function About() {
    useEffect(() => {
        document.title = 'About';
    }, []);
    return (
        <div id='about' className='container'>
            <h2>About</h2>
            <div className='row'>
                <div className='col'>
                    <p>I've been a photographer for most of my life - ever since I picked up a camera for the first time I've been fascinated with capturing the perfect moments. From animals and nature, to vehicles and sport, I have captured a range of photos and would love to work with you.</p>
                    <Link to='/contact'><button>Get in touch ≥ </button></Link>
                </div>
                <div className='col'>
                    <img className='home-img' src='https://images.unsplash.com/photo-1493863641943-9b68992a8d07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1758&q=80' />
                </div>
            </div>
        </div>
    )
}

export default About;