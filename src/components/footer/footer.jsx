import React from "react"
import './footer.css'

const Footer = (props) => {
    const description = props.description
    return  <p>{description}</p>
};

export default Footer