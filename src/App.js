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
      isSaveButtonDisabled: false,
    };

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange = (ev) => {
    const value = ev.target.type === 'checkbox' ? ev.target.checked : ev.target.value;

    this.setState({
      [ev.target.name]: value,
    });
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
