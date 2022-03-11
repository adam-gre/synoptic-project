import { useEffect, useState } from "react";

function Contact() {
    const [state, setState] = useState({})
    useEffect(() => {
        document.title = 'Contact';
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(state)
    }

    const handleChange = (e) => {
        setState({...state,  [e.target.name]: e.target.value });
    }

    return (
        <div id='contact' className='container'>
            <h2>Contact</h2>
            <form style={{display: 'block'}}>
                <input type="text" name="name" id="name" placeholder='Name' onChange={handleChange} /><br/>
                <input type="text" name="subject" id="subject" placeholder='Subject' onChange={handleChange} /><br/>
                <textarea name="message" id="message" cols="20" rows="10" onChange={handleChange}></textarea><br/>
                <button onClick={handleSubmit}>Send Message</button>
            </form>
        </div>
    )
}

export default Contact;