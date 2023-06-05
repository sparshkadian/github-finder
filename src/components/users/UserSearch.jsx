import { useState, useContext } from 'react';
import GithubContext from '../../context/github/GithubContext';
import AlertContext from '../../context/alert/AlertContext';

function UserSearch() {
  const [text, setText] = useState('');
  const { users, searchUsers, clearUsers } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text === '') {
      setAlert('Please Enter a Name', 'error');
    } else {
      searchUsers(text);
      setText('');
    }
  };

  return (
    <div className='ml-10 grid grid-cols-1 xl:grid-col-2 lg:grid-cols-2 md:grid-col-2 mb-8 gap-8'>
      <div>
        <form onSubmit={handleSubmit}>
          <div clform-control>
            <div className='relative'>
              <input
                type='text'
                className='w-full pr-40 bg-gray-200 input input-lg text-black'
                placeholder='Search'
                value={text}
                onChange={handleChange}
              />
              <button
                type='submit'
                className='absolute top-0 right-0 rounded-l-none w-36 btn btn-lg'
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button
            onClick={clearUsers}
            className='btn btn-ghost tracking-[.15em]'
          >
            Clear
          </button>
        </div>
      )}
    </div>
  );
}

export default UserSearch;
