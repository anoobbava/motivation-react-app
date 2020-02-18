import React, { Component } from 'react';

import QuoteText from '../../components/QuoteText/QuoteText';
import QuoteAuthor from '../../components/QuoteAuthor/QuoteAuthor';

export default class Quote extends Component {
  render() {
    return (
      <div>
        <QuoteText quoteText={'Be yourself; everyone else is already taken'} />
        <QuoteAuthor quoteAuthor={'Oscar Wilde'} />
      </div>
    )
  }
}
