import React from 'react';

const quoteText = (props) => {

  const quoteTextStyle = {
    'fontSize': '35px',
    'textAlign': 'center',
    'padding': '100px',
    'color': 'white'
  }
  return (
    <div style={quoteTextStyle}>
      <p>{props.quoteText}</p>
    </div>
  )
}

export default quoteText;