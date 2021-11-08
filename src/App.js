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
      cardTrunfo: '',
      isSaveButtonDisabled: true,
      errors: 0,
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.handleValidation = this.handleValidation.bind(this);
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
    console.log(errors);

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

  onInputChange = (ev) => {
    const value = ev.target.type === 'checkbox' ? ev.target.checked : ev.target.value;

    this.setState({
      [ev.target.name]: value,
    }, () => this.handleValidation());
  }

  render() {
    return (
      <div className="card-preview">
        <Form
          { ...this.state }
          onInputChange={ this.onInputChange }
        />
        <Card { ... this.state } />
      </div>
    );
  }
}

export default App;
