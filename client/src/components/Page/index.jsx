// Page
import React from 'react'
import { Component } from 'react'
import './style.css'
// import * as ku from '../../lib/ke-utils';

class Page extends Component {
  render () {
    return (
      <div>
        <h1>Typography</h1>
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>
        <h1>Colors</h1>
        <h2>Green Gradient Background</h2>
        <div id='gradient-green' className='gradient-green'>

        </div>
        <div id='gradient-green' className='gradient-green'>
          <h3 className='font-light'>Light on Gradient Green</h3>
        </div>
        <div id='gradient-green' className='gradient-green'>
          <h3 className='dark-font'>Dark on Gradient Green</h3>
        </div>
      </div>
    )
  }
}


export default Page;
