import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import SuperComponent from '../components/SuperComponent';

class Index extends SuperComponent {
  constructor(props) {
    super(props);

    this.state = {
      title: 'I am index page'
    }

    Console.log('constructor');
  }

  componentDidMount() {
    Console.log('componentDidMount');
  }

  componentDidUpdate() {
    Console.log('componentDidUpdate');
  }

  componentWillMount() {
    Console.log('componentWillMount');
  }

  updateTitle() {
    this.setState({title: 'Updated title'});
  }

  render() {
    const { title } = this.state;
    return (
      <BaseLayout>
        <h1 className='fromPage'> I am Index Page from Class Component </h1>
        <h2> {title} </h2>
        <button onClick={ () => this.updateTitle() } > Change title </button>
        <h1>Index</h1>
      </BaseLayout>
    );
  }
}

export default Index;
