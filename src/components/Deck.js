import { React, Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class Deck extends Component {
  render() {
    const {
      deck,
      searchByName,
      onDeleteButtonClick,
    } = this.props;

    const useDeck = searchByName !== '' ? deck
      .filter((card) => card.cardName.includes(searchByName)) : deck;

    return (
      <div className="cards">
        {useDeck.map((card) => (
          <div
            key={ card.cardName }
            className="card"
          >
            <Card
              cardName={ card.cardName }
              cardImage={ card.cardImage }
              cardDescription={ card.cardDescription }
              cardAttr1={ card.cardAttr1 }
              cardAttr2={ card.cardAttr2 }
              cardAttr3={ card.cardAttr3 }
              cardRare={ card.cardRare }
              cardTrunfo={ card.cardTrunfo }
            />
            <button
              type="button"
              name={ card.cardName }
              data-testid="delete-button"
              onClick={ onDeleteButtonClick }
            >
              Excluir
            </button>
          </div>))}
      </div>
    );
  }
}

Deck.propTypes = {
  deck: PropTypes.arrayOf(PropTypes.object).isRequired,
  searchByName: PropTypes.string.isRequired,
  onDeleteButtonClick: PropTypes.func.isRequired,
};

export default Deck;
