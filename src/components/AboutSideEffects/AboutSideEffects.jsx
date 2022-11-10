import React from 'react';
import './AboutSideEffects.css';

export class AboutSideEffects extends React.Component {
  state = {
    loading: true,
    error: null,
    data: [],
  };

  render() {
    const { loading } = this.state;

    if (loading) {
      return <div role="alert">로딩 중...</div>;
    }

    return <div className="AboutSideEffects">AboutSideEffects</div>;
  }

  componentDidMount() {
    // 데이터 요청 상태 변경
    // this.setState({ loading: true });

    // side effect 1.
    // network request/response
    this.fetchNpmQueryData('yamoo9', 3)
      .then((response) => response.json())
      .then((json) => {
        // 데이터 로딩에 성공했으므로 상태 업데이트
        this.setState({
          data: json.objects.map(({ package: { description } }) => description),
        });
      })
      .catch((error) => {
        // 데이터 로딩에 실패했으므로 상태 업데이트
        this.setState({ error });
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  }

  async fetchNpmQueryData(query, size = 10) {
    return fetch(
      `https://registry.npmjs.org/-/v1/search?text=${query}&size=${size}`
    );
  }
}
