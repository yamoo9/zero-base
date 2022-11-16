import React from 'react';

export function withFetch(Component) {
  class WithFetchHOC extends React.Component {
    state = {
      loading: true,
      error: null,
      data: null,
    };

    render() {
      const { loading, error, data } = this.state;

      return (
        <Component fetchState={{ loading, error, data }}>
          {this.props.children}
        </Component>
      );
    }

    componentDidMount() {
      this.fetchData();
    }

    async fetchData() {
      try {
        const response = await fetch(this.props.endpoint);
        const json = await response.json();
        this.setState({
          loading: false,
          data: json,
        });
      } catch (error) {
        this.setState({
          loading: false,
          error: error,
        });
      }
    }
  }

  return WithFetchHOC;
}
