import React from 'react';
import BasePage from '../components/BasePage';
import BaseLayout from '../components/layouts/BaseLayout';

class Blog extends React.Component {
  render() {
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage className="blog-page">
          <h1>Blog</h1>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default Blog;