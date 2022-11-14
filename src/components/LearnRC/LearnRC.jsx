import './LearnRC.css';
import { Component } from 'react';

// 라이프 사이클 메서드
// - [x] constructor
// - [x] static getDerivedStateFromProps
// - [x] shouldComponentUpdate
// - [x] render
// ---------------------------------------
// - [x] getSnapshotBeforeUpdate
// ---------------------------------------
// - 실제 DOM 렌더링/업데이트 수행
// ---------------------------------------
// - [x] componentDidMount
// - [x] componentDidUpdate
// - [x] componentWillUnmount
// ---------------------------------------
// 컴포넌트의 오류가 특정 영역에서 발생한 것을 감지
// ---------------------------------------
// - [ ] static getDerivedStateFromError
// - [ ] componentDidCatch

export class LearnRC extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     headline: this.props.headline,
  //     message: 'hello React class component',
  //     score: 0,
  //   };

  //   this.handleButtonClick = this.handleButtonClick.bind(this);
  // }

  state = {
    headline: this.props.headline,
    message: 'hello React class component',
    score: 101,
  };

  static defaultProps = {
    finalScore: 100,
  };

  static getDerivedStateFromProps(props, state) {
    return {
      gameOver: state.score >= props.finalScore,
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    // console.log('컴포넌트 업데이트 렌더링 결정 부분: false');
    // 비교 대상
    // 현재 props vs. 다음 props
    // if (this.props.data === nextProps.data) {
    //   return false;
    // }
    return true;
  }

  render() {
    const { headline, message } = this.state;

    return (
      <>
        <h2>{headline}</h2>
        <p>{message}</p>
        <button type="button" onClick={this.handleButtonClick}>
          change headline
        </button>
      </>
    );
  }

  // 만약에? 매끄럽지 않은 UI 변경이 발생한다면?
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('update DOM, repainting / reflow UI');

    // 스냅샷 (정보: 데이터) 반환
    // return 1004;
    return {
      docHeight: document.body.getBoundingClientRect().height,
    };
  }

  // 마운트 이후, 1회만 실행
  componentDidMount() {
    console.log('mounted');
  }

  // 마운트 이후 실행 없음
  // 업데이트 이후 반복 실행
  componentDidUpdate(props, state, snapshot) {
    console.log('updated');
    console.log({ snapshot });
  }

  // 마운트 해제 이전 시점에 1회만 실행
  componentWillUnmount() {
    console.log('un mounted');
  }

  handleButtonClick = () => {
    console.log('update 시도');
    this.setState(
      ({ headline }) => ({
        headline: headline + '🥲',
      })
      // this.updatedHeadlineCallback
    );
  };

  updatedHeadlineCallback() {
    console.log('1', this.state);
  }
}
