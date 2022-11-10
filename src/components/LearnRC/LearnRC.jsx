import './LearnRC.css';
import { Component } from 'react';

export class LearnRC extends Component {
  // 라이프 사이클 메서드
  // - constructor
  // - render
  // - componentDidMount

  constructor(props) {
    super(props);

    this.state = {
      headline: this.props.headline,
      message: 'hello React class component',
    };

    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  // 클래스 필드
  // 상태, 파생(props로 부터) 상태 선언

  // state = {
  //   headline: this.props.headline,
  //   message: 'hello React class component',
  // };

  render() {
    const { headline, message } = this.state;

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

  // 마운트 이후, 1회만 실행
  componentDidMount() {
    console.log('mounted');
  }

  // 마운트 이후 실행 없음
  // 업데이트 이후 반복 실행
  componentDidUpdate() {
    console.log('updated');
  }

  componentWillUnmount() {
    console.log('un mounted');
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
      })
      // this.updatedHeadlineCallback
    );

    // console.log('1', this.state);

    this.setState(({ message }) => ({
      message: message + ' 🅾️',
    }));

    // console.log('2', this.state);
  }

  updatedHeadlineCallback() {
    console.log('1', this.state);
  }
}
