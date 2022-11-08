import './LearnRC.css';
import { Component } from 'react';

export class LearnRC extends Component {
  // 클래스 필드
  // 상태, 파생(props로 부터) 상태 선언
  constructor(props) {
    super(props);

    this.state = {
      headline: this.props.headline,
      message: 'hello React class component',
    };

    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  // state = {
  //   headline: this.props.headline,
  //   message: 'hello React class component',
  // };

  render() {
    const { headline, message } = this.state;

    console.log(document.querySelector('button')); // null

    return (
      <>
        <h2>{headline}</h2>
        <p>{message}</p>
        <button type="button" onClick={this.handleButtonClick.bind(this)}>
          change headline
        </button>
      </>
    );
  }

  // vue: mounted() {}
  componentDidMount() {
    // console.log(document.querySelector('button')); // <button>
    console.log('mounted');
  }

  handleButtonClick() {
    // updator 1. new state object
    // this.setState({
    //   headline: this.state.headline + '🥲',
    // });

    // updator 2. function (return new state)
    this.setState(
      ({ headline }) => ({
        headline: headline + '🥲',
      }),
      this.updatedHeadlineCallback
    );

    // console.log('1', this.state);

    this.setState(({ message }) => ({
      message: message + ' 🅾️',
    }));

    console.log('2', this.state);

    // callback
  }

  updatedHeadlineCallback() {
    console.log('1', this.state);
  }
}
