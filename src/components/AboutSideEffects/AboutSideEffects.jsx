import React from 'react';
import './AboutSideEffects.css';

export class AboutSideEffects extends React.Component {
  state = {
    query: 'yamoo9',
    loading: true,
    error: null,
    data: [],
  };

  render() {
    const { loading } = this.state;

    if (loading) {
      return <div role="alert">로딩 중...</div>;
    }

    return (
      <div className="AboutSideEffects">
        <h2>NPM 사용자 정보 : {this.state.query}</h2>
        <ul ref={this.accessDomElRefCallback}>
          {this.state.data.map((item, index) => (
            <li key={index}>
              <strong>{item.author.name}</strong>
              <span>{item.author.email}</span>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  componentDidMount() {
    // 데이터 요청 상태 변경
    // this.setState({ loading: true });

    // side effect 1.
    // network request/response
    setTimeout(() => {
      this.fetchNpmQueryData(this.state.query, 3);
    }, 1200);

    // side effect 2.
    // DOM 요소 접근/조작
    // this.accessDomElement();
  }

  accessDomElRefCallback(domElement) {
    // console.log(domElement); // <ul>

    const elementInfo = domElement.getBoundingClientRect();
    // console.log(elementInfo);

    domElement.addEventListener('click', (e) => {
      console.log(e.target);
    });

    domElement.style.cssText = `
      padding: 20px;
      background-color: yellow;
    `;
  }

  accessDomElement() {
    // const ulElement = document.querySelector('.AboutSideEffects ul');
    // console.log(ulElement);
  }

  async fetchNpmQueryData(query, size = 10) {
    try {
      const response = await fetch(
        `https://registry.npmjs.org/-/v1/search?text=${query}&size=${size}`
      );

      const { objects } = await response.json();

      this.setState({
        data: objects.map(({ package: { author, description } }) => ({
          author,
          description,
        })),
      });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ loading: false });
    }
  }
}
