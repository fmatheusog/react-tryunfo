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
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form>
        <label htmlFor="nameInput">
          Nome da carta:
          <input
            type="text"
            data-testid="name-input"
            name="nameInput"
            id="nameInput"
            onChange={ onInputChange }
            value={ cardName }
          />
        </label>

        <label htmlFor="descriptionInput">
          Descrição:
          <textarea
            data-testid="description-input"
            name="descriptionInput"
            id="descriptionInput"
            cols="30"
            rows="10"
            onChange={ onInputChange }
            value={ cardDescription }
          />
        </label>

        <label htmlFor="attr1Input">
          Atributo 1:
          <input
            data-testid="attr1-input"
            type="number"
            name="attr1Input"
            id="attr1Input"
            onChange={ onInputChange }
            value={ cardAttr1 }
          />
        </label>

        <label htmlFor="attr2Input">
          Atributo 2:
          <input
            data-testid="attr2-input"
            type="number"
            name="attr2Input"
            id="attr2Input"
            onChange={ onInputChange }
            value={ cardAttr2 }
          />
        </label>

        <label htmlFor="attr3Input">
          Atributo 3:
          <input
            data-testid="attr3-input"
            type="number"
            name="attr3Input"
            id="attr3Input"
            onChange={ onInputChange }
            value={ cardAttr3 }
          />
        </label>

        <label htmlFor="imageInput">
          Imagem:
          <input
            data-testid="image-input"
            type="text"
            name="imageInput"
            id="imageInput"
            onChange={ onInputChange }
            value={ cardImage }
          />
        </label>

        <label htmlFor="rareInput">
          Raridade:
          <select
            data-testid="rare-input"
            name="rareInput"
            id="rareInput"
            onChange={ onInputChange }
            value={ cardRare }
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>

        <label htmlFor="trunfoInput">
          Super trunfo:
          <input
            checked={ cardTrunfo }
            data-testid="trunfo-input"
            type="checkbox"
            name="trunfoInput"
            id="trunfoInput"
            onChange={ onInputChange }
          />
        </label>

        <button
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          id="saveButton"
          type="submit"
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
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
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
