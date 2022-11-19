import { Component } from 'react';
import styles from './BinaryCalculator.module.scss';
import { ToggleButton } from '../ToggleButton';
import { PropTypes } from 'prop-types';

const NumberOfButtonsType = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.arrayOf(PropTypes.bool),
]).isRequired;

export class BinaryCalculator extends Component {
  static propTypes = {
    /** 렌더링 할 버튼 갯수 */
    numberOfButtons: NumberOfButtonsType,
  };

  state = {
    buttonStates: [],
    _oldNumberOfButtons: null,
  };

  static getDerivedStateFromProps(
    { numberOfButtons },
    { _oldNumberOfButtons }
  ) {
    let isNumberType = typeof numberOfButtons === 'number';

    if (isNumberType && !_oldNumberOfButtons) {
      return {
        buttonStates: Array(numberOfButtons).fill(false),
      };
    } else if (!isNumberType && numberOfButtons !== _oldNumberOfButtons) {
      return {
        buttonStates: numberOfButtons,
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

  componentDidMount() {
    this.setState({
      _oldNumberOfButtons: this.props.numberOfButtons,
    });
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
