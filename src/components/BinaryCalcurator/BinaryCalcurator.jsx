import { Component } from 'react';
import styles from './BinaryCalcurator.module.css';
import { ToggleButton } from 'components';

export class BinaryCalcurator extends Component {
  state = {
    buttonStates: Array(this.props.numberOfButtons).fill(false),
  };

  render() {
    return (
      <div className={styles.container}>
        <h2>바이너리 계산 값: {this.calculateBinarySum()}</h2>
        {this.state.buttonStates.map((buttonState, index) => (
          <ToggleButton
            key={index}
            onText={1}
            offText={0}
            on={buttonState}
            onToggle={() => this.handleToggleButtonContent(index)}
          />
        ))}
      </div>
    );
  }

  handleToggleButtonContent = (index) => {
    this.setState(({ buttonStates }) => ({
      buttonStates: buttonStates.map((buttonState, idx) =>
        idx === index ? !buttonState : buttonState
      ),
    }));
  };

  calculateBinarySum() {
    // '10' [true, false] → (1 * (2 ** 1)) + (0 * (2 ** 0))
    // '111' [true, true, true] → (1 * (2 ** 2)) + (1 * (2 ** 1)) + (1 * (2 ** 0))
    // '100100' [true, false, false, true, false, false]
    const { buttonStates } = this.state;
    let { length } = buttonStates;

    let sum = buttonStates.reduce((sum, buttonState, index) => {
      return sum + (buttonState ? 1 : 0) * 2 ** (length - index - 1);
    }, 0);

    return sum;
  }
}
