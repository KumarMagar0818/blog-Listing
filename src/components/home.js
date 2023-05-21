import React from 'react';
import './home.css'
import BlogList from './BlogList';
import Nav from './Nav'

class MyDiv extends React.Component
{
    render()
    {
        return (

            <div class="container">
                <Nav></Nav>
                <div class="articles">
                    <div class="con1">
                        <p>All articles</p>

                    </div>
                    <div class="searchBar">
                        <div class="ser">
                            <input
                                placeholder="Search articles"
                            />

                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                            </svg>
                        </div>

                    </div>
                </div>
                <div class="Articles">
                    <BlogList></BlogList>
                </div>
            </div>


        );
    };
}
export default MyDiv;