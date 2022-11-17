import styles from './BinaryCalcurator.module.css';
import { ToggleButton } from 'components';

import { Component } from 'react';

export class BinaryCalcurator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonStates: [],
    };
  }

  static getDerivedStateFromProps(props, state) {
    const { numberOfButtons } = props;

    if (state.buttonStates.length !== numberOfButtons) {
      return {
        buttonStates: Array(numberOfButtons).fill(false),
      };
    } else {
      return null;
    }
  }

  render() {
    const { buttonStates } = this.state;

    return (
      <div className={styles.container}>
        <h2 className={styles.heading}>
          계산된 바이너리 값: {this.calcurateBinarySum()}
        </h2>
        {buttonStates.map((buttonState, index) => (
          <ToggleButton
            key={index}
            onText={1}
            offText={0}
            on={buttonState}
            onToggle={this.handleToggleButtonState.bind(this, index)}
          />
        ))}
      </div>
    );
  }

  handleToggleButtonState(index) {
    this.setState({
      buttonStates: this.state.buttonStates.map((buttonState, i) =>
        index === i ? !buttonState : buttonState
      ),
    });
  }

  calcurateBinarySum() {
    const { buttonStates } = this.state;

    return buttonStates.reduce(
      (sum, buttonState, index) =>
        sum + (buttonState ? 1 : 0) * 2 ** (buttonStates.length - index - 1),
      0
    );
  }
}
