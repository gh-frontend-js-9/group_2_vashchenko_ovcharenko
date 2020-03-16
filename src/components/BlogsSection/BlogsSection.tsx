import React, {Component} from 'react';
import MainBlogCard from "../MainBlogCard/MainBlogCard";
import SecondBlogCard from "../SecondBlogCard/SecondBlogCard";
import './BlogsSection.scss'

class BlogsSection extends Component {
    render() {
        return (
            <div className='blog-section-wrapper'>
            <div className='group-blogs'>
                <div className='group-blogs-title'>
                    Popular
                </div>
                <div className='view-all'>
                    View all
                </div>
            </div>
            <div className='blogs-section-wrapper'>
                <MainBlogCard/>
                <div className='second-blog-wrapper'>
                    <div className='flex-column'>
                    <SecondBlogCard/>
                    <SecondBlogCard/>
                    </div>
                    <div className='flex-column'>
                    <SecondBlogCard/>
                    <SecondBlogCard/>
                    </div>
                </div>
            </div>

            </div>
        );
    }
}

export default BlogsSection;