import { Component } from 'react';

export class ErrorBoundary extends Component {
  state = {
    error: null,
  };

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.log(this);
    console.log(errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>오류가 발생했어요!!</h1>;
    } else {
      return this.props.children;
    }
  }
}
