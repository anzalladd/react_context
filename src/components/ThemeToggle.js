import React from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class ThemeToggle extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {context => <button onClick={context.toggleTheme}>Toggle</button>}
      </ThemeContext.Consumer>
    );
  }
}

export default ThemeToggle;
