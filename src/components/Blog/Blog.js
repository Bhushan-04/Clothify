import React from 'react'
import BlogBanner from './BlogBanner/BlogBanner.js';
import BlogText from './BlogText/BlogText.js'
import Collection from './Collection/Collection.js';

const Blog = () => {
    return (
        <div>
            <BlogBanner />
            <BlogText />
            <Collection />

        </div>
    )
}

export default Blog;