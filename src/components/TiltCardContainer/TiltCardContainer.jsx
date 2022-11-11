import './TiltCardContainer.css';

import axios from 'axios';
import { Component } from 'react';
import { TiltCard } from 'components';

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
      return (
        <div role="alert" className="tiltCardContainer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            style={{ margin: 'auto', background: '#fff', display: 'block' }}
            width="200px"
            height="200px"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"
          >
            <title>로딩 중....</title>
            <circle cx={80} cy={50} r={5} fill="#eab145">
              <animate
                attributeName="cx"
                values="80;50"
                keyTimes="0;1"
                dur="1s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="cy"
                values="50;80"
                keyTimes="0;1"
                dur="1s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="fill"
                values="#eab145;#fad96d"
                keyTimes="0;1"
                dur="1s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx={50} cy={80} r={5} fill="#fad96d">
              <animate
                attributeName="cx"
                values="50;20"
                keyTimes="0;1"
                dur="1s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="cy"
                values="80;50.00000000000001"
                keyTimes="0;1"
                dur="1s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="fill"
                values="#fad96d;#959795"
                keyTimes="0;1"
                dur="1s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx={20} cy="50.00000000000001" r={5} fill="#959795">
              <animate
                attributeName="cx"
                values="20;49.99999999999999"
                keyTimes="0;1"
                dur="1s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="cy"
                values="50.00000000000001;20"
                keyTimes="0;1"
                dur="1s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="fill"
                values="#959795;#4a6985"
                keyTimes="0;1"
                dur="1s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="49.99999999999999" cy={20} r={5} fill="#4a6985">
              <animate
                attributeName="cx"
                values="49.99999999999999;80"
                keyTimes="0;1"
                dur="1s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="cy"
                values="20;49.99999999999999"
                keyTimes="0;1"
                dur="1s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="fill"
                values="#4a6985;#eab145"
                keyTimes="0;1"
                dur="1s"
                repeatCount="indefinite"
              />
            </circle>
          </svg>
        </div>
      );
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
