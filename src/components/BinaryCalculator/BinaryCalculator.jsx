import { Component, useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import { oneOfType, arrayOf, number, bool } from 'prop-types';
import { ToggleButton } from '@/components';

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export class _BinaryCalculator extends Component {
  static propTypes = {
    /** 렌더링 할 버튼 갯수 */
    numberOfButtons: oneOfType([number, arrayOf(bool)]).isRequired,
  };

  state = {
    buttonStates: [],
  };

  render() {
    const { buttonStates } = this.state;

    return (
      <Container>
        <Heading>계산된 바이너리 값: {this.calcurateBinarySum()}</Heading>
        <ButtonGroup>
          {buttonStates.map((buttonState, index) => (
            <ToggleButton
              key={index}
              onText={1}
              offText={0}
              on={buttonState}
              onToggle={this.handleToggleButtonState.bind(this, index)}
            />
          ))}
        </ButtonGroup>
      </Container>
    );
  }

  componentDidMount() {
    this.#updateButtonStates();
  }

  componentDidUpdate({ numberOfButtons }) {
    if (numberOfButtons !== this.props.numberOfButtons) {
      this.#updateButtonStates();
    }
  }

  #updateButtonStates() {
    let { numberOfButtons } = this.props;
    let isNumberType = typeof numberOfButtons === 'number';

    if (isNumberType) {
      this.setState({
        buttonStates: Array(numberOfButtons).fill(false),
      });
    } else {
      this.setState({
        buttonStates: numberOfButtons,
      });
    }
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

export function BinaryCalculator({ numberOfButtons }) {
  const [buttonStates, setButtonStates] = useState([]);

  useEffect(() => {
    console.log('changed `numberOfButtons`');
    let isNumberType = typeof numberOfButtons === 'number';
    if (isNumberType) {
      setButtonStates(Array(numberOfButtons).fill(false));
    } else {
      setButtonStates(numberOfButtons);
    }
  }, [numberOfButtons]);

  const handleToggleButtonState = (index) => {
    setButtonStates((prevButtonState) =>
      prevButtonState.map((buttonState, i) =>
        index === i ? !buttonState : buttonState
      )
    );
  };

  const calcurateBinarySum = () => {
    return buttonStates.reduce(
      (sum, buttonState, index) =>
        sum + (buttonState ? 1 : 0) * 2 ** (buttonStates.length - index - 1),
      0
    );
  };

  return (
    <Container>
      <Heading>계산된 바이너리 값: {calcurateBinarySum()}</Heading>
      <ButtonGroup>
        {buttonStates.map((buttonState, index) => (
          <ToggleButton
            key={index}
            onText={1}
            offText={0}
            on={buttonState}
            onToggle={() => handleToggleButtonState(index)}
          />
        ))}
      </ButtonGroup>
    </Container>
  );
}

BinaryCalculator.propTypes = {
  /** 렌더링 할 버튼 갯수 */
  numberOfButtons: oneOfType([number, arrayOf(bool)]).isRequired,
};

/* -------------------------------------------------------------------------- */
/* Styled Components                                                          */
/* -------------------------------------------------------------------------- */

const Container = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  gap: 12px;
`;

const Heading = styled.h2`
  margin: 0;
  color: ${({ theme: { color } }) => color.primary[500]};
`;
const ButtonGroup = styled.div`
  display: flex;
  gap: 2px;
`;
