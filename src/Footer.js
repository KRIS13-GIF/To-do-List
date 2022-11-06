import React from 'react'
const today = new Date();

const footerStyle = {
  textAlign: 'center'
}

const Footer = ({ length }) => {
  return (
    <footer>

      <p>Copyright &copy; {today.getFullYear()}</p><br></br>
      <p style={footerStyle}>{length} {length === 1 ? 'item' : 'items'}</p>
    </footer>
  )
}

export default Footer
