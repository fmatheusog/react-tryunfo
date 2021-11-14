import { React, Component } from 'react';
import Form from './components/Form';
import Card from './components/Card';
import Deck from './components/Deck';

import './styles/App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'Normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      errors: 0,
      deck: [],
      searchByName: '',
      searchByRarity: 'todas',
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.onDeleteButtonClick = this.onDeleteButtonClick.bind(this);
    this.handleValidation = this.handleValidation.bind(this);
    this.handleHasTrunfo = this.handleHasTrunfo.bind(this);
    this.clearForm = this.clearForm.bind(this);
  }

  handleValidation = () => {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;
    const attrSum = Number(cardAttr1)
      + Number(cardAttr2)
      + Number(cardAttr3);
    const attrLimit = 90;
    const attrMaxLimit = 210;
    const inputValidation = [cardName, cardDescription, cardImage]
      .every((input) => input.length > 0) ? 0 : 1;
    const attrValidation = [cardAttr1, cardAttr2, cardAttr3]
      .every((attr) => attr >= 0 && attr <= attrLimit) ? 0 : 1;
    const totalAttrValidation = attrSum <= attrMaxLimit ? 0 : 1;

    const errors = inputValidation + attrValidation + totalAttrValidation;

    if (errors > 0) {
      this.setState({
        isSaveButtonDisabled: true,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: false,
      });
    }
  }

  clearForm= () => {
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'Normal',
      cardTrunfo: false,
    });
  }

  handleHasTrunfo = () => {
    const { deck } = this.state;
    const result = deck.some((card) => card.cardTrunfo === true);

    if (result === true) {
      this.setState({
        hasTrunfo: true,
      });
    } else {
      this.setState({
        hasTrunfo: false,
      });
    }
  }

  onInputChange = (ev) => {
    const value = ev.target.type === 'checkbox' ? ev.target.checked : ev.target.value;

    this.setState({
      [ev.target.name]: value,
    }, () => this.handleValidation());
  }

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;

    const newCard = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };

    this.setState((prevState) => ({
      deck: [...prevState.deck, newCard],
      isSaveButtonDisabled: true,
    }), () => {
      this.clearForm();
      this.handleHasTrunfo();
    });
  }

  onDeleteButtonClick = (ev) => {
    const { deck } = this.state;
    const newDeck = deck.filter((card) => card.cardName !== ev.target.name);

    this.setState({
      deck: newDeck,
    }, () => this.handleHasTrunfo());
  }

  render() {
    const { deck, searchByName, searchByRarity } = this.state;
    return (
      <div className="app">
        <div className="registration-preview">
          <div className="registration-form">
            <h1>Adicionar nova carta</h1>
            <Form
              { ...this.state }
              onInputChange={ this.onInputChange }
              onSaveButtonClick={ this.onSaveButtonClick }
            />
          </div>
          <div className="card-preview">
            <h1>Card Preview</h1>
            <Card { ...this.state } />
          </div>
        </div>
        <div className="card-deck">
          <aside className="filters">
            <h3>Filtro(s):</h3>
            <input
              type="text"
              name="searchByName"
              data-testid="name-filter"
              id="searchByName"
              placeholder="Pesquise cartas pelo nome"
              onChange={ this.onInputChange }
            />
            <select
              data-testid="rare-filter"
              name="searchByRarity"
              id="searchByRarity"
              onChange={ this.onInputChange }
            >
              <option value="todas">Todas</option>
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito raro</option>
            </select>
          </aside>
          <div className="deck-content">
            <h1>Todas as cartas</h1>
            <Deck
              deck={ deck }
              onDeleteButtonClick={ this.onDeleteButtonClick }
              searchByName={ searchByName }
              searchByRarity={ searchByRarity }
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
