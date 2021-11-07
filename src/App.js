import { React, Component } from 'react';
import Form from './components/Form';
import Card from './components/Card';

import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="card-preview">
        <Form />
        <Card />
      </div>
    );
  }
}

export default App;
