import { React, createRef } from 'react';

import { useHistory, Link } from 'react-router-dom';

import './style.css';

import userImg from '../../img/user.svg';

function Nav({ user }) {
  const nav_ref = createRef();
  const crosslines_ref = createRef();
  const line_ref = createRef();

  function toggle() {
    nav_ref.current.classList.toggle('nav_list_show');
    crosslines_ref.current.classList.toggle('crosslines_show');
    line_ref.current.classList.toggle('lines_hide');
  }

  return (
    <div className="nav">
      <div className="nav-brand">
        <Link to="/">
          <p></p>
        </Link>
      </div>

      <div className="lines" onClick={toggle} ref={line_ref}>
        <div className="smallline"></div>
        <div className="smallline"></div>
        <div className="smallline"></div>
      </div>

      <div className="nav_list" ref={nav_ref}>
        <div className="crosslines" onClick={toggle} ref={crosslines_ref}></div>

        {!user &&
          <>
            <div className="nav_link">
              <Link onClick={toggle} to="/signup">
                Signup
              </Link>
            </div>
            <div className="nav_link">
              <Link onClick={toggle} to="/signin">
                Signin
              </Link>
            </div>
          </>
        }
        {user && user.role === 'admin' && (
          <>
            {' '}
            <div className="nav_link">
              <Link onClick={toggle} to="/admin/users">
                {' '}
                All Users{' '}
              </Link>
            </div>
            <div className="nav_link">
              <Link onClick={toggle} to="/admin/accessList">
                {' '}
                Access List{' '}
              </Link>
            </div>
          </>
        )}

        {user && (
          <>
            <div className="nav_link">
              <Link onClick={toggle} to="/user/createFolder">
                Create Folder{' '}
              </Link>
            </div>
            <div className="nav_link">
              <Link onClick={toggle} to="/questions">
                Impact regions{' '}
              </Link>
            </div>
            <div className="nav_link">
              <Link onClick={toggle} to="/user/myQuestions">
                {' '}
                My impact regions{' '}
              </Link>
            </div>
          </>
        )}

        <div className="nav_link">
          <Link onClick={toggle} to="/user/addQuestion">
            {' '}
            Add impact regions{' '}
          </Link>
        </div>
        {user &&
          <div className="nav_link">
            <Link onClick={toggle} to="/user/logout">
              {' '}
              Logout{' '}
            </Link>
          </div>
        }
        <div className="nav_lin">
          <Link onClick={toggle} to="/user/profile">
            <img src={userImg} className="user_img" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Nav;
