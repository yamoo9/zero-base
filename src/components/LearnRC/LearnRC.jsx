import './LearnRC.css';
import { Component } from 'react';

export class LearnRC extends Component {
  // 라이프 사이클 메서드
  // - constructor
  // - static getDerivedStateFromProps
  // - shouldComponentUpdate
  // - render
  // ---------------------------------------
  // - getSnapshotBeforeUpdate
  // ---------------------------------------
  // - 실제 DOM 렌더링/업데이트 수행
  // ---------------------------------------
  // - componentDidMount
  // - componentDidUpdate
  // - componentWillUnmount

  constructor(props) {
    super(props);

    this.state = {
      headline: this.props.headline,
      message: 'hello React class component',
    };

    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    console.log({ props, state });

    return {
      mine: true,
    };
  }

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

  // 마운트 해제 이전 시점에 1회만 실행
  componentWillUnmount() {
    console.log('un mounted');
  }

  handleButtonClick() {
    this.setState(
      ({ headline }) => ({
        headline: headline + '🥲',
      })
      // this.updatedHeadlineCallback
    );
  }

  updatedHeadlineCallback() {
    console.log('1', this.state);
  }
}
