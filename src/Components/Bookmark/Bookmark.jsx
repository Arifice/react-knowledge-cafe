import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    return (
        <div className=' m-2 p-2 shadow-lg rounded-lg bg-gray-400'> 
            <h1 className='text-2xl font-semibold bg-white p-2'>{bookmark.title}</h1>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark:PropTypes.object.isRequired,
    
};

export default Bookmark;