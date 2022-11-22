import React from 'react';

const AuthContext = React.createContext();

/* 인증 프로바이더 래퍼 컴포넌트 ----------------------------------------------------- */
export const AuthProvider = (props) => {
  const [auth, setAuth] = React.useState(null);

  const authValue = {
    isAuth: !!auth,
    currentUser: auth,
    login(userInfo) {
      setAuth(userInfo);
    },
    logout() {
      setAuth(null);
    },
  };

  return <AuthContext.Provider value={authValue} {...props} />;
};

/* 고차 컴포넌트 ------------------------------------------------------------------ */

export const withAuth = (Component) => {
  return class WithAuthHOC extends React.Component {
    static contextType = AuthContext;
    render() {
      return <Component auth={this.context} {...this.props} />;
    }
  };
};

/* 커스텀 훅 -------------------------------------------------------------------- */

export const useAuth = () => {
  const authValue = React.useContext(AuthContext);
  if (!authValue) {
    throw new Error(
      'useAuth 훅은 AuthProvider 컴포넌트 내부에서만 호출 가능합니다.'
    );
  }
  return authValue;
};
