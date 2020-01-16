import React from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';

class Navbar extends React.Component {
  render() {
    return (
      <AuthContext.Consumer>
        {authContext => {
          return (
            <ThemeContext.Consumer>
              {context => {
                const { isLightTheme, light, dark } = context;
                const { isAuthenticated } = authContext;
                const theme = isLightTheme ? light : dark;
                return (
                  <nav
                    style={{ backgroundColor: theme.ui, color: theme.syntax }}
                  >
                    <h1>Context App</h1>
                    <h3>{isAuthenticated ? 'Logged in' : 'Logged Out'}</h3>
                    <ul>
                      <li>Home</li>
                      <li>About</li>
                      <li>Contact</li>
                    </ul>
                  </nav>
                );
              }}
            </ThemeContext.Consumer>
          );
        }}
      </AuthContext.Consumer>
    );
  }
}

export default Navbar;
