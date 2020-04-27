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
      isLoadingScience: true,
      isLoadingTechnology: true,
    };
  }

  componentDidMount() {
    document.title = 'Home';
    this.loadScience();
    this.loadTechnology();
  }

  loadScience = () => {
    articlesScience
      .then((data) => {
        this.setState({
          newsScience: data.num_results,
          isLoadingScience: false,
        });
      })
      .catch((error) => {
        console.log('Error in load Science articles ', error);
        this.setState({ isLoadingScience: false });
      });
  };

  loadTechnology = () => {
    articlesTechnology
      .then((data) => {
        this.setState({
          newsTechnology: data.num_results,
          isLoadingTechnology: false,
        });
      })
      .catch((error) => {
        console.log('Error in load Technology articles ', error);
        this.setState({ isLoadingTechnology: false });
      });
  };

  render() {
    const {
      isLoadingScience,
      isLoadingTechnology,
      newsScience,
      newsTechnology,
    } = this.state;
    return (
      <>
        <Header />
        <CardHome
          totalScience={newsScience}
          totalTechnology={newsTechnology}
          isLoadingScience={isLoadingScience}
          isLoadingTechnology={isLoadingTechnology}
        />
      </>
    );
  }
}
