import { useEffect } from "react";

function About() {
    useEffect(() => {
        document.title = 'About';
    }, []);
    return (
        <div id='about' className='container'>
            <h2>About</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis lobortis libero. Nulla facilisi. Phasellus pharetra sed lectus ut feugiat. Duis massa nibh, porttitor et velit nec, lobortis imperdiet massa. Aliquam imperdiet odio id leo vulputate dapibus. Donec at tellus non ex venenatis hendrerit. Etiam sed quam in ante fringilla dignissim a sit amet libero. Vivamus a dolor lacus. Vestibulum euismod efficitur dolor eget vulputate. Morbi ac interddum metus. Donec sit amet mauris congue tellus dictum finibus. Proin semper mattis massa, vitae semper metus tempus sed.</p>
        </div>
    )
}

export default About;