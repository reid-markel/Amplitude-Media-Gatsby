import React from 'react'
import '../styles/hamburger.css';

class Menuitems extends React.Component {
    render() {
return (
    <>
<a id="home" className="menu-item" href="/">Home</a>
<br />
<br />
<a id="about" className="menu-item" href="/about">About</a>
<br />
<br />
<a id="blog" className="menu-item" href="/contact">Blog</a>
<br />
<br />
<a id="portfolio" className="menu-item" href="/contact">Portfolio</a>
<br />
<br />
<a id="projects" className="menu-item" href="/contact">Projects</a>
<br />
<br />
<a id="services" className="menu-item" href="/contact">Services</a>
<br />
<br />
<a id="contact" className="menu-item" href="/contact">Contact</a>

    </>
)
}}



export default Menuitems