import React from 'react';

const quoteAuthor = (props) => {

  const quoteAuthorStyle = {
    'fontSize': '20px',
    'textAlign': 'center',
    'padding': '20px'
  }
  return (
    <div style={quoteAuthorStyle}>
      <p>{props.quoteAuthor}</p>
    </div>
  )
}

export default quoteAuthor;
