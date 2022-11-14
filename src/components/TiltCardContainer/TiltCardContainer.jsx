import './TiltCardContainer.css';

import axios from 'axios';
import { Component } from 'react';
import { TiltCard, Spinner } from 'components';

/* -------------------------------------------------------------------------- */

export class TiltCardContainer extends Component {
  state = {
    loading: true,
    error: null,
    cards: [],
  };

  handleRemoveCard = (id) => {
    this.setState({
      ...this.state,
      cards: this.state.cards.filter((card) => card.id !== id),
    });
  };

  render() {
    const { loading, error, cards } = this.state;

    if (loading) {
      return <Spinner message="틸트 카드 데이터 로딩 중입니다..." />;
    }

    if (error) {
      return (
        <div role="alert" className="tiltCardContainer">
          {error.message}
        </div>
      );
    }

    return (
      <div className="tiltCardContainer" lang="en">
        <div className="tiltCardContainer__buttonGroup">
          {cards.map(({ id, text }) => (
            <button
              key={id}
              type="button"
              className="tiltCardContainer__button"
              onClick={() => this.handleRemoveCard(id)}
            >
              {text} 제거
            </button>
          ))}
        </div>
        <ul className="tiltCardContainer__list">
          {cards.map((card) => (
            <li key={card.id}>
              <TiltCard
                card={card}
                options={{ 'max-glare': 0.2, perspective: 600 }}
              >
                {card.text}
              </TiltCard>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  componentDidMount() {
    setTimeout(this.fetchCards.bind(this), 1200);
  }

  async fetchCards() {
    try {
      const {
        data: { cards },
      } = await axios.get('/api/v1/tiltcard');
      this.setState({ cards });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ loading: false });
    }
  }
}
