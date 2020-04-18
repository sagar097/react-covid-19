import React, { Component } from 'react';
import { Cards, Charts, CountryPicker } from './components';
import {Fab} from '@material-ui/core';
import {GitHub as GitHub} from '@material-ui/icons';
import styles from './App.module.css';
import { fetchData } from './api';
import coronaImage from './images/corona-image.png';

class App extends Component {
  state = {
    data: {},
    country: '',
    error: ''
  }

  async componentDidMount() {


    const fetchedData = await fetchData();
    if (fetchedData) {
      this.setState({ data: fetchedData });
    } else {
      this.setState({ error: 'Something went wrong !' });
    }
  }

  handleCountryChange = async (country) => {

    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });

  }

  render() {
    const { data, country, error } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} src={coronaImage} />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Charts data={data} country={country} />
        {error ? error : null}
        <Fab
          variant="extended"
          size="small"
          color='inherit'
          aria-label="add"
          className={styles.fabIcon}
          href='https://github.com/sagar097'
        >
          <GitHub  />
          Developer@Sagar Pawar
        </Fab>
      </div>
    );
  }
}

export default App;
