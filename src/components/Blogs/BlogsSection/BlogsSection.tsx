import React, {Component} from 'react';
import MainBlogCard from "../../Card/MainBlogCard/MainBlogCard";
import SecondBlogCard from "../../Card/SecondBlogCard/SecondBlogCard";
import './BlogsSection.scss'

class BlogsSection extends Component<any,any> {
    render() {
        let {post} = this.props;
        let post2 = post.slice(1);
        return (
            <div>
                <div className='blog-section-wrapper'>
                    <div className='group-blogs'>
                        <div className='group-blogs-title'>
                            {post[0].category}
                        </div>
                        <div className='view-all'>
                            View all
                        </div>
                    </div>
                    <div className='blogs-section-wrapper'>
                        {
                            <MainBlogCard post={post[0]}/>
                        }
                        <div className='second-blog-wrapper'>
                            <div className='flex-second'>
                                {
                                 post2.map (post => {
                                  return (
                                   <SecondBlogCard sec={post}/>
                                  )
                                 })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default BlogsSection;