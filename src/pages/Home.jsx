import { useEffect } from "react";

function Home() {
    useEffect(() => {
        document.title = 'Home';
    }, []);
    return (
        <>
            <h2>Home</h2>
            <div className='hero'>
                <h3>Welcome to my gallery</h3>
            </div>
        </>
    )
}

export default Home;