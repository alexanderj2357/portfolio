import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import {withRouter} from 'next/router';

class PortfolioItem extends React.Component {
  render() {
    return (
      <BaseLayout>
        <h1>PortfolioItem</h1>
        <h2>{this.props.router.query.title}</h2>
      </BaseLayout>
    );
  }
}

export default withRouter(PortfolioItem);