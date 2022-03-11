import { useEffect } from "react";
import river from '../images/landmarks/IMAGE (9)-min.jpg';
import { Link } from 'react-router-dom';

function Home() {
    useEffect(() => {
        document.title = 'Home';
    }, []);
    return (
        <>
            <div className='hero'>
                <h3>Welcome to my gallery</h3>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <h2>I'm a photographer</h2>
                        <p>Here you can find a selection of my work.</p>
                        <Link to='/gallery'><button>See my work ≥</button></Link>
                    </div>
                    <div className='col'>
                        <img className='home-img' src={river} />
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <h2>I'm available for work</h2>
                        <p>Get in touch with me to discuss your requirements.</p>
                        <Link to='/contact'><button>Get in touch ≥ </button></Link>
                    </div>
                    <div className='col'>
                        <img className='home-img' src='https://images.unsplash.com/photo-1493863641943-9b68992a8d07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1758&q=80' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;