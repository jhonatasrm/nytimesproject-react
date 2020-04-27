import { Grid } from '@material-ui/core';
import React, { Component, Fragment } from '../../../node_modules/react';
import { articlesScience, articlesTechnology } from '../../services/api';
import Header from '../../components/Header';
import CardArticle from './CardArticle';

export default class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsScience: [],
      newsTechnology: [],
    };
  }

  componentDidMount() {
    document.title = 'News';
    this.loadScience();
    this.loadTechnology();
  }

  loadScience = () => {
    articlesScience
      .then((data) => {
        this.setState({ newsScience: data.results });
      })
      .catch((error) => {
        console.log('Error in load Science articles ', error);
      });
  };

  loadTechnology = () => {
    articlesTechnology
      .then((data) => {
        this.setState({ newsTechnology: data.results });
      })
      .catch((error) => {
        console.log('Error in load Technology articles ', error);
      });
  };

  render() {
    const { newsScience, newsTechnology } = this.state;

    return (
      <Fragment>
        <Header />
        <Grid container style={{ marginTop: 60 }}>
          {newsScience.map((article) => (
            <Grid
              key={article.created_date}
              item
              xs={12}
              sm={6}
              md={4}
              xl={3}
              style={{ display: 'flex', alignItems: 'stretch' }}
            >
              <CardArticle
                image={article.multimedia[0].url}
                caption={article.multimedia[0].caption}
                title={article.title}
                author={article.byline}
                description={article.abstract}
                url={article.url}
                category="Science"
              />
            </Grid>
          ))}
          {newsTechnology.map((article) => (
            <Grid
              key={article.created_date}
              item
              xs={12}
              sm={6}
              md={4}
              xl={3}
              style={{ display: 'flex', alignItems: 'stretch' }}
            >
              <CardArticle
                image={article.multimedia[0].url}
                caption={article.multimedia[0].caption}
                title={article.title}
                author={article.byline}
                description={article.abstract}
                url={article.url}
                category="Technology"
              />
            </Grid>
          ))}
        </Grid>
      </Fragment>
    );
  }
}
