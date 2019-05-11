import React, { Component } from 'react';
import './style/Footer.scss'

class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <div className='container'>
                    <div className='footer-body-1 txt-white'>
                        <h4>About</h4>
                        <a className='clear txt-white' href="">Lorem</a>
                        <a className='clear txt-white' href="">Lorem</a>
                        <a className='txt-white' href="">Lorem</a>
                    </div>
                    <div className='footer-body-2'>
                        <h4 className='txt-white'>Jobs</h4>
                        <a className='clear txt-white' href="">Lorem</a>
                        <a className='clear txt-white' href="">Lorem</a>
                        <a className='txt-white' href="">Lorem</a>
                    </div>
                    <div className='footer-body-3'>
                        <h4 className='txt-white'>Payment Product</h4>
                        <a className='clear txt-white' href="">Lorem</a>
                        <a className='clear txt-white' href="">Lorem</a>
                        <a className='txt-white' href="">Lorem</a>
                    </div>
                    <div className='footer-body-4'>
                        <h4 className='txt-white'>Help</h4>
                        <a className='clear txt-white' href="">Lorem</a>
                        <a className='clear txt-white' href="">Lorem</a>
                        <a className='txt-white' href="">Lorem</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;