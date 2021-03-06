import React from 'react';
import BasePage from '../components/BasePage';
import BaseLayout from '../components/layouts/BaseLayout';

class Resume extends React.Component {
  render() {
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage className="resume-page">
          <h1>Resume</h1>
        </BasePage>
      </BaseLayout>
    )
  }
}

export default Resume;