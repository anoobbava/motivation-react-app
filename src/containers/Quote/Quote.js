import React, { Component } from 'react';

import QuoteText from '../../components/QuoteText/QuoteText';
import QuoteAuthor from '../../components/QuoteAuthor/QuoteAuthor';

export default class Quote extends Component {

  state = {
    isLoading: false,
    quoteText: 'Be yourself; everyone else is already taken',
    quoteAuthor: 'Oscar Wilde',
    error: ''
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
