import React from 'react';
import axios from 'axios';
import BaseLayout from '../components/layouts/BaseLayout';
import SuperComponent from '../components/SuperComponent';

class Index extends SuperComponent {
  static async getInitialProps() {
    let userData = {};

    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
      userData = response.data;
    } catch(err) {
      console.error(err);
    }

    return {initialData: [1,2,3,4,5], userData};
  }
  
  constructor(props) {
    super(props);

    this.state = {
      title: 'I am index page'
    }

    console.log('constructor');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillMount() {
    console.log('componentWillMount');
  }

  updateTitle() {
    this.setState({title: 'Updated title'});
  }

  render() {
    const { title } = this.state;
    const { userData, initialData } = this.props;

    return (
      <BaseLayout>
        <h1 className='fromPage'> I am Index Page from Class Component </h1>
        <h2> {title} </h2>
        <h2> {userData.title} </h2>
        <h2> {initialData} </h2>
        <button onClick={ () => this.updateTitle() } > Change title </button>
        <h1>Index</h1>
      </BaseLayout>
    );
  }
}

export default Index;