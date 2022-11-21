import { Component as ReactComponent, createContext, useState } from 'react';

const AuthContext = createContext();
AuthContext.displayName = 'Auth';

export const AuthProvider = (props) => {
  const [user, setUser] = useState(null);

  const authValue = {
    authUser: user,
    isAuth: !!user,
    login(userInfo) {
      setUser(userInfo);
    },
    logout() {
      setUser(null);
    },
  };

  return <AuthContext.Provider value={authValue} {...props} />;
};

export const withAuth = (Component) => {
  return class WithAuthHOC extends ReactComponent {
    static contextType = AuthContext;
    render() {
      return <Component authValue={this.context} {...this.props} />;
    }
  };
};
