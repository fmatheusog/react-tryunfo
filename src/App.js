import { React, Component } from 'react';
import Form from './components/Form';
import Card from './components/Card';

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
    const { deck } = this.state;
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
          </aside>
          <div className="deck-content">
            <h1>Todas as cartas</h1>
            <div className="cards">
              { deck.map((card) => (
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
                    onClick={ this.onDeleteButtonClick }
                  >
                    Excluir
                  </button>
                </div>)) }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
