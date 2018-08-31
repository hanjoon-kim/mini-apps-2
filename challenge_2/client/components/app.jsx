import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prices = {}
    };

    this.getPrices = this.getPrices.bind(this);
  }

  componentDidMount() {
    this.getPrices();
  }

  getPrices() {
    axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => {
        let prices = response.data;
        this.setState({ prices });
      })
      .catch(error => {
        console.log(error);
      })
  }

  render() {
    console.log('is this working');
    return(
        <div>

        </div>
    );

  }
}



export default App;