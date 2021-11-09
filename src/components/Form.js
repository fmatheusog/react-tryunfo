import { React, Component } from 'react';
import '../styles/Form.css';

import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form>
        <label htmlFor="cardName">
          Nome da carta:
          <input
            type="text"
            data-testid="name-input"
            name="cardName"
            id="cardName"
            onChange={ onInputChange }
            value={ cardName }
          />
        </label>

        <label htmlFor="cardDescription">
          Descrição:
          <textarea
            data-testid="description-input"
            name="cardDescription"
            id="cardDescription"
            cols="30"
            rows="10"
            onChange={ onInputChange }
            value={ cardDescription }
          />
        </label>

        <label htmlFor="cardAttr1">
          Atributo 1:
          <input
            data-testid="attr1-input"
            type="number"
            name="cardAttr1"
            id="cardAttr1"
            onChange={ onInputChange }
            value={ cardAttr1 }
          />
        </label>

        <label htmlFor="cardAttr2">
          Atributo 2:
          <input
            data-testid="attr2-input"
            type="number"
            name="cardAttr2"
            id="cardAttr2"
            onChange={ onInputChange }
            value={ cardAttr2 }
          />
        </label>

        <label htmlFor="cardAttr3">
          Atributo 3:
          <input
            data-testid="attr3-input"
            type="number"
            name="cardAttr3"
            id="cardAttr3"
            onChange={ onInputChange }
            value={ cardAttr3 }
          />
        </label>

        <label htmlFor="cardImage">
          Imagem:
          <input
            data-testid="image-input"
            type="text"
            name="cardImage"
            id="cardImage"
            onChange={ onInputChange }
            value={ cardImage }
          />
        </label>

        <label htmlFor="cardRare">
          Raridade:
          <select
            data-testid="rare-input"
            name="cardRare"
            id="cardRare"
            onChange={ onInputChange }
            value={ cardRare }
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>

        {hasTrunfo ? 'Você já tem um Super Trunfo em seu baralho' : (
          <label htmlFor="cardTrunfo">
            Super trunfo:
            <input
              checked={ cardTrunfo }
              data-testid="trunfo-input"
              type="checkbox"
              name="cardTrunfo"
              id="cardTrunfo"
              onChange={ onInputChange }
            />
          </label>
        )}
        <div className="save">
          <button
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            id="saveButton"
            type="submit"
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </div>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
