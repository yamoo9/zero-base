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
        {this.state.buttonStates.map((buttonState, index) => (
          <ToggleButton
            key={index}
            onText={1}
            offText={0}
            on={buttonState}
            // onToggle={this.handleToggleButtonContent.bind(this, index)}
            onToggle={() => this.handleToggleButtonContent(index)}
          />
        ))}
      </div>
    );
  }

  // handleToggleButtonContent(index) {
  //   this.setState(({ buttonStates }) => ({
  //     buttonStates: buttonStates.map((buttonState, idx) =>
  //       idx === index ? !buttonState : buttonState
  //     ),
  //   }));
  // }

  handleToggleButtonContent = (index) => {
    this.setState(({ buttonStates }) => ({
      buttonStates: buttonStates.map((buttonState, idx) =>
        idx === index ? !buttonState : buttonState
      ),
    }));
  };
}
