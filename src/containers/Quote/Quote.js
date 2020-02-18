import React, { Component } from 'react';

import QuoteText from '../../components/QuoteText/QuoteText';
import QuoteAuthor from '../../components/QuoteAuthor/QuoteAuthor';

export default class Quote extends Component {

  state = {
    isLoading: true,
    quoteText: '',
    quoteAuthor: '',
    error: ''
  }

  componentDidMount() {
    fetch('https://favqs.com/api/qotd')
      .then(response => response.json())
      .then((data) => {
        this.setState({
          quoteAuthor: data.quote.author,
          quoteText: data.quote.body,
          isLoading: false
        });
      })
      .catch(console.log);
  }

  render() {
    const { quoteAuthor, quoteText, isLoading } = this.state;
    return (
      <div>
        {
          isLoading ?
            <div> Loading the data</div>
            : <div>  <QuoteText quoteText={quoteText} />
              <QuoteAuthor quoteAuthor={quoteAuthor} /> </div>
        }
      </div>
    )
  }
}
