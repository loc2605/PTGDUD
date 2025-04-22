import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from '../features/auth/authSlice';

const Auth = () => {
  const { user, isLoggedIn } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    if (username.trim() !== '') {
      dispatch(login({ name: username }));
      setUsername('');
    }
  };

  return (
    <div>
      <h2>Đăng nhập</h2>
      {isLoggedIn ? (
        <div>
          <p>Xin chào, <strong>{user.name}</strong>!</p>
          <button onClick={() => dispatch(logout())}>Đăng xuất</button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            placeholder="Tên người dùng"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={handleLogin}>Đăng nhập</button>
        </div>
      )}
    </div>
  );
};

export default Auth;