import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
const BookMarks = ({bookmarks,readTime}) => {
    

    return (
        <div className="md:w-1/3 py-10 ml-5 bg-gray-200">
            <div className='border-2 border-red-500 m-2 p-2 shadow-lg bg-white'>
                <h1 className='text-center text-2xl text-blue-800 font-bold '>Spent Time on Reading : {readTime} min</h1>
            </div>
            <h2 className='text-4xl text-center font-bold'>Bookmarked Blog : {bookmarks.length} </h2>
            <hr className='border-b-4 border-red-500' />
            {
                bookmarks.map((bookmark,idx)=><Bookmark key={idx}
                 bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};
BookMarks.propTypes={
    bookmarks:PropTypes.array.isRequired,
    readTime:PropTypes.number.isRequired,
}
export default BookMarks;