import { Component } from 'react';
import styles from './BinaryCalculator.module.scss';
import { ToggleButton } from '../ToggleButton';
import { number, oneOfType, arrayOf, bool } from 'prop-types';

export class BinaryCalculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonStates: [],
    };
  }

  static getDerivedStateFromProps({ numberOfButtons }, state) {
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

BinaryCalculator.propTypes = {
  /** 버튼의 갯수 */
  numberOfButtons: oneOfType([number, arrayOf(bool)]).isRequired,
};
