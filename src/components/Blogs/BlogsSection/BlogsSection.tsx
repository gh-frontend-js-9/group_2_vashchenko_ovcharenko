import React, {Component} from 'react';
import MainBlogCard from "../../Card/MainBlogCard/MainBlogCard";
import SecondBlogCard from "../../Card/SecondBlogCard/SecondBlogCard";
import './BlogsSection.scss'

class BlogsSection extends Component<any,any> {
    render() {
        let {post} = this.props;
        return (
            <div>
            <div className='blog-section-wrapper'>
            <div className='group-blogs'>
                <div className='group-blogs-title'>
                    {post.category}
                </div>
                <div className='view-all'>
                    View all
                </div>
            </div>
            <div className='blogs-section-wrapper'>
                <MainBlogCard  post={post}/>
                <div className='second-blog-wrapper'>
                    <div className='flex-column'>
                    <SecondBlogCard />
                    <SecondBlogCard/>
                    </div>
                    <div className='flex-column'>
                    <SecondBlogCard/>
                    <SecondBlogCard/>
                    </div>
                </div>

            </div>
            </div>
            </div>

        );
    }
}

export default BlogsSection;