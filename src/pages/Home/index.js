import React, { Component } from 'react';
import { articlesScience, articlesTechnology } from '../../services/api';
import Header from '../../components/Header';
import CardHome from './CardHome';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsScience: 0,
      newsTechnology: 0,
      isLoading: true,
    };
  }

  componentDidMount() {
    document.title = 'Home';
    this.loadScience();
    this.loadTechnology();
  }

  loadScience = async () => {
    await articlesScience.then((data) => {
      this.setState({ newsScience: data.num_results, isLoading: false });
    });
  };

  loadTechnology = async () => {
    await articlesTechnology.then((data) => {
      this.setState({ newsTechnology: data.num_results });
    });
  };

  render() {
    const { isLoading, newsScience, newsTechnology } = this.state;
    return (
      <>
        <Header />
        <CardHome
          totalScience={newsScience}
          totalTechnology={newsTechnology}
          isLoading={isLoading}
        />
      </>
    );
  }
}
