import React from 'react'




const Header = (props) => {

// doing the style inside the component
const headerStyle={
    backgroundColor:'mediumblue',
    color: "#fff"

}
  return (
    <header style={headerStyle} >

        <h1>{props.title}</h1>
    </header>
  )
}

Header.defaultProps={
  title: "Default Title" // it will work when you do not have a props
}

export default Header
