import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
function Blog() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        document.title = 'Blog';

        setPosts([
            {
                id: 0,
                title: 'Blog Post 1',
                date: '2020-01-01',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu tristique nisl, eget tempor nisl. Integer scelerisque, erat sit amet imperdiet malesuada, tellus metus ultricies tortor...'
            },
            {
                id: 1,
                title: 'Blog Post 2',
                date: '2020-01-01',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu tristique nisl, eget tempor nisl. Integer scelerisque, erat sit amet imperdiet malesuada, tellus metus ultricies tortor...'
             },
            {
                id: 2,
                title: 'Blog Post 3',
                date: '2020-01-01',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu tristique nisl, eget tempor nisl. Integer scelerisque, erat sit amet imperdiet malesuada, tellus metus ultricies tortor...'
            },
        ].sort(function(a, b) { 
            return b.id - a.id;
        }))
    }, []);
    return (
        <>
            <h2>Blog</h2>
            {posts.map((blog) => {
                return (
                    <div className='blog-post'>
                        <h3>{blog.title}</h3>
                        <p>{blog.content}</p>
                        <p><small>{blog.date}</small></p>
                        <Link to={`/blog/${blog.id}`} key={blog.id}>Read more</Link>
                    </div>
                )
            })}
        </>
    )
}

export default Blog;