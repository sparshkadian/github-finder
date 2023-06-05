import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function UserItem({ user: { login, avatar_url } }) {
  return (
    <div className='card shadow-md compact side bg-base-100'>
      <div className='flex-row items-center space-x-4 card-body'>
        <div className='avatar .rounded-full shadow w-14 h-14'>
          <div className=''>
            <img src={avatar_url} alt='Profile' />
          </div>
        </div>
        <h2 className='card-title'>{login}</h2>
        <Link
          to={`/user/${login}`}
          className='text-base-content text-opacity-40'
        >
          Visit Profile
        </Link>
      </div>
    </div>
  );
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
