import { selectOptions } from "@testing-library/user-event/dist/select-options";
import { useEffect, useState } from "react"; 

function Gallery() {
    const [images, setImages] = useState([]);
    const [filter, setFilter] = useState('all');
    const filters = ['animals', 'flowers', 'landmarks', 'vehicles', 'other'];

    const importAll = (files) => {
        let images = [];
        files.keys().map((item, index) => { 
            images.push({
                url: files(item),
                category: item.substring(0,item.lastIndexOf("/")+1).replace('./', '').replace('/', '')
            })
        });
        console.log(images)
        return setImages(images);
    }
    
    const handleClick = (e) => {
        console.log(e.target.value)
        setFilter(e.target.value)
    }

    useEffect(() => {
        document.title = 'Gallery';
        
       importAll(require.context('../images', true, /\.jpg$/))
    }, []);

    return (
        <div id='gallery'>
            <h2>Gallery</h2>
            <div className="filters">
                <p>Filter:</p>
                <select name="filter" id="filter" onChange={handleClick}>
                    <option value="all" selected>All</option>
                    {filters.map((item, index) => {
                        return <option key={index} value={item}>{item}</option>;
                    })}
                </select>
            </div>
            {images ? Object.entries(images).map((image, index) => {
                return (
                    <a href={image[1].url} key={index}  className='gallery-image-wrapper'>
                        <img width='auto' height='125px' className={(filter != image[1].category && filter != 'all') ? 'hidden' : ''} src={image[1].url} alt={index} />
                    </a>
                )
            }) : <></>}
        </div>
    )
}

export default Gallery;