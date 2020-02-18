import React, { Component } from 'react';
import axios from 'axios';

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
    axios.get(`https://favqs.com/api/qotd`)
      .then(res => {
        this.setState({
          quoteAuthor: res.data.quote.author,
          quoteText: res.data.quote.body,
          isLoading: false
        });
      })
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
