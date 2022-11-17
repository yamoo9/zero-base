import React from 'react';
import { string } from 'prop-types';
import axios from 'axios';

export const withFetch = (Component) => {
  // 진입되는 컴포넌트: 함수, 클래스

  // 반환되는 컴포넌트: 클래스
  return class FetchDataHOC extends React.Component {
    static propTypes = {
      endpoint: string.isRequired,
    };

    state = {
      loading: true,
      error: null,
      data: null,
    };

    render() {
      const { loading, error, data } = this.state;
      const { children } = this.props;
      return (
        <Component loading={loading} data={data} error={error}>
          {children}
        </Component>
      );
    }

    componentDidMount() {
      this.fetchData();
    }

    async fetchData() {
      try {
        const { data } = await axios.get(this.props.endpoint);
        this.setState({
          loading: false,
          data,
        });
      } catch (error) {
        this.setState({
          loading: false,
          error,
        });
      }
    }
  };
};
