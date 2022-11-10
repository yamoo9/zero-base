import { Component } from 'react';
import styles from './App.module.scss';
import { LearnRC } from '../components';

export default class App extends Component {
  state = {
    showLearnRC: true,
  };

  handleToggleLearnRC = () => {
    this.setState(({ showLearnRC }) => ({
      showLearnRC: !showLearnRC,
    }));
  };

  render() {
    return (
      <div className={styles.App} lang="en">
        <div className={styles.wrapper}>
          <button type="button" onClick={this.handleToggleLearnRC}>
            toggle
          </button>
        </div>
        {this.state.showLearnRC ? (
          <LearnRC headline="React World" />
        ) : (
          <h1>App</h1>
        )}
      </div>
    );
  }
}
