import React, {useState, useRef} from 'react'
import { Link } from 'gatsby'
// import { HashLink as Link } from 'react-router-hash-link';
// import Layout from "../components/layout"
// import SEO from "../components/seo"
import { FullPage, Slide } from 'react-full-page';
import Typist from 'react-typist';
import '../styles/styles.css';
import Button  from '../components/button'
import Title  from '../components/title'
import { slide as Menu } from 'react-burger-menu'
import Menuitems from '../components/menu-items'


export default class FullPageExample extends React.Component {
  render() {
    return (
      <FullPage>
    <Menu right>
      <Menuitems></Menuitems>
    </Menu>
        {/* slide 1 */}
        <Slide className="color purple">
          <div className="center">
            <Typist>
              <Title>Hi, we're Amplitude Media</Title>
            <Typist.Backspace count={25} delay={120} />
              <Title>we build websites and brands</Title>
            <Typist.Backspace count={28} delay={120} />
              <Title>want to be friends?</Title>
              </Typist>
                <div className="downArrow bounce bounce-delay">
                  <Link to='/#page2'>
                  <img className="change-my-color" width="40" height="40" alt="" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiBoZWlnaHQ9IjMycHgiIGlkPSLQodC70L7QuV8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIGQ9Ik0yNC4yODUsMTEuMjg0TDE2LDE5LjU3MWwtOC4yODUtOC4yODhjLTAuMzk1LTAuMzk1LTEuMDM0LTAuMzk1LTEuNDI5LDAgIGMtMC4zOTQsMC4zOTUtMC4zOTQsMS4wMzUsMCwxLjQzbDguOTk5LDkuMDAybDAsMGwwLDBjMC4zOTQsMC4zOTUsMS4wMzQsMC4zOTUsMS40MjgsMGw4Ljk5OS05LjAwMiAgYzAuMzk0LTAuMzk1LDAuMzk0LTEuMDM2LDAtMS40MzFDMjUuMzE5LDEwLjg4OSwyNC42NzksMTAuODg5LDI0LjI4NSwxMS4yODR6IiBmaWxsPSIjMTIxMzEzIiBpZD0iRXhwYW5kX01vcmUiLz48Zy8+PGcvPjxnLz48Zy8+PGcvPjxnLz48L3N2Zz4="/>
                  </Link>
                </div>
          </div>
        </Slide>

        {/* slide 2 */}
        <Slide className="color orange" id='#page2'>
          <div>
          <svg  className="change-my-color" width="600" height="600"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 62.17 222.43"><title>exclamation-point_1</title><g id="Layer_2" data-name="Layer 2"><g id="exclamation" ><path cx="50%" cy="50%" className="cls-1 exclamation-home" d="M32.78,206.05a16.39,16.39,0,1,1-16.39-16.39A16.38,16.38,0,0,1,32.78,206.05ZM24,7c-28.77,68.2-22.24,165-15.64,170,5.2,3.6,17.63,1.72,17.39-.24.5-2.66,2-92.79,36.38-173.22C63.65-.1,35.59-3.38,24,7Z"/><rect/></g></g></svg>
            <Title>Another slide content</Title>
          </div>
        </Slide>

        {/* slide 3 */}
        <Slide className="color blue">
          <div className="center">
            <Title>Another slide content</Title>
            <p>pick a card, any card</p>
            <div className="btn-container">
            <Button href="contact/index.html" className="btn-clear">
             <a> Past (portfolio)</a>
            </Button>
            <Button href="contact/index.html" className="btn-clear ">
            <a> Future (services)</a>
            </Button>
            </div>
          </div>
        </Slide>
      </FullPage>
    );
  }
};
