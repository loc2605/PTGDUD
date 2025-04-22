import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../features/theme/themeSlice';

const ThemeToggle = () => {
  const theme = useSelector(state => state.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    document.body.className = theme; 
  }, [theme]);

  return (
    <div>
      <h2>Theme hiện tại: {theme.toUpperCase()}</h2>
      <button onClick={() => dispatch(toggleTheme())}>
        Chuyển sang {theme === 'dark' ? 'Light' : 'Dark'} mode
      </button>
    </div>
  );
};

export default ThemeToggle;
