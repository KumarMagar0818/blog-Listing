
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import './BlogList.css';



const BlogList = () =>
{
    const [blogs, setBlogs] = useState([]);

    useEffect(() =>
    {
        let mounted = true;
        axios.get('https://api.theinnerhour.com/v1/customers/resources/articles/list?page=1&limit=10')
            .then(response =>
            {
                if (mounted) {
                    setBlogs(response.data.data);
                }
            });
        return () => mounted = false;
    }, []);


    return (
        <div class="row">

            {blogs.map(blog => (
                <Card key={blog.blog_id} className="my-3">
                    <Card.Img variant="top" src={blog.thumb} />
                    <Card.Body>
                        <Card.Title>{blog.title}</Card.Title>
                        <Card.Text>
                            {blog.short_description}
                        </Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </div>


    );
};
export default BlogList;