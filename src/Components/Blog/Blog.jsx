import PropTypes from 'prop-types'; 
import {FaRegBookmark } from 'react-icons/fa';
const Blog = ({blog,handleAddToBookMarks,handleMarkRead}) => {
    const {title,id,cover,author,author_img,reading_time,posted_date,hashtags
    }=blog;
     
    return (
        <div className='my-10'>
            <img className='w-full mb-8' src={cover} alt={`Cover picture of title : ${title}`} />
            <div className='flex justify-between '>
                <div className='flex items-center gap-4'>
                    <img className='w-14' src={author_img} alt="" />
                    <div>
                        <h3 className='text-2xl'>{author}</h3>
                        <p className=''>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span className='text-2xl'>{reading_time} min read</span>
                    <button className='ml-2 text-green-500 text-2xl' onClick={()=>handleAddToBookMarks(blog)}><FaRegBookmark></FaRegBookmark></button>
                </div>
            </div>
            <h3 className='text-4xl font-semibold my-8'>{title}</h3>
            <p>
                {
                    hashtags.map((has,idx)=><span key={idx}><a className='mr-4' href="">#{has}</a></span>)
                }
            </p>
            <button onClick={()=>handleMarkRead(reading_time,id)} className='text-blue-800 underline text-2xl'>Mark as read</button>
        </div>
    );
};

Blog.propTypes={
    blog:PropTypes.object.isRequired,
    handleAddToBookMarks:PropTypes.func.isRequired,
    handleMarkRead:PropTypes.func.isRequired,
}
export default Blog;