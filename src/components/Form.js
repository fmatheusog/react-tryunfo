import { React, Component } from 'react';
import '../styles/Form.css';

class Form extends Component {
  render() {
    return (
      <form>
        <label htmlFor="nameInput">
          Nome da carta:
          <input
            type="text"
            data-testid="name-input"
            name="nameInput"
            id="nameInput"
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
            value="teste"
          />
        </label>

        <label htmlFor="attr1Input">
          Atributo 1:
          <input
            data-testid="attr1-input"
            type="number"
            name="attr1Input"
            id="attr1Input"
          />
        </label>

        <label htmlFor="attr2Input">
          Atributo 2:
          <input
            data-testid="attr2-input"
            type="number"
            name="attr2Input"
            id="attr2Input"
          />
        </label>

        <label htmlFor="attr3Input">
          Atributo 3:
          <input
            data-testid="attr3-input"
            type="number"
            name="attr3Input"
            id="attr3Input"
          />
        </label>

        <label htmlFor="imageInput">
          Imagem:
          <input
            data-testid="image-input"
            type="text"
            name="imageInput"
            id="imageInput"
          />
        </label>

        <label htmlFor="rareInput">
          Raridade:
          <select
            data-testid="rare-input"
            name="rareInput"
            id="rareInput"
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>

        <label htmlFor="trunfoInput">
          Super trunfo:
          <input
            data-testid="trunfo-input"
            type="checkbox"
            name="trunfoInput"
            id="trunfoInput"
          />
        </label>

        <button
          data-testid="save-button"
          id="saveButton"
          type="submit"
        >
          Salvar
        </button>
      </form>
    );
  }
}

export default Form;
