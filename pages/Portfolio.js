import React from 'react';
import axios from 'axios';
import BasePage from '../components/BasePage';
import BaseLayout from '../components/layouts/BaseLayout';
import {withRouter} from 'next/router';

class Portfolio extends React.Component {
  static async getInitialProps({ query }) {
    const portfolioId = query.id;
    let portfolio = {};

    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${portfolioId}`);
      portfolio = response.data;
    } catch(err) {
      console.error(err);
    }

    return {portfolio};
  }

  render() {
    const {portfolio} = this.props;

    return (
      <BaseLayout {...this.props.auth}>
        <BasePage className="portfolio-page">
          <h1>{portfolio.title}</h1>
          <p>BODY: {portfolio.body}</p>
          <p>ID: {portfolio.id}</p>
        </BasePage>
      </BaseLayout>
    )
  }
}

export default withRouter(Portfolio);