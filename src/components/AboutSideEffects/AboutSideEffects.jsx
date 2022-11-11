import React from 'react';
import './AboutSideEffects.css';
import { FormInput } from '../FormInput/FormInput';

export class AboutSideEffects extends React.Component {
  // React.createRef() : class 컴포넌트만 가능
  #listRef = React.createRef(null); // { current }

  #formInputRef = React.createRef(null);

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
        <ul ref={this.#listRef}>
          {this.state.data.map((item, index) => (
            <li key={index}>
              <strong>{item.author.name}</strong>
              <span>{item.author.email}</span>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
        <FormInput
          ref={this.#formInputRef}
          id="unique-input-id"
          label="이메일"
          type="email"
          placeholder="user@company.io"
          onChange={this.handleChangeInput}
          isHiddenLabel
        />
        <button
          type="button"
          onClick={() => {
            console.log(this.#formInputRef);
          }}
          children="print listRef element"
        />
      </div>
    );
  }

  handleChangeInput = (e) => {
    console.log(e.target.value);
  };

  componentDidMount() {
    this.fetchNpmQueryData(this.state.query, 3);
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
