import React, { Component } from 'react';
import './Style/Content.scss';
import '../../Compoents/style.scss'
import IMG from '../assets/image/bg1.jpg'

class Content extends Component {
    render() {
        return (
            <div className='content'>
                <div className='container'>
                    <div className='content-body-1'>
                        <h3 className='txt-second'>Wellcome</h3>
                        <button className='btn-primary'>Sign in</button>
                        <br/>
                        <button className='btn'>Create Account</button>
                    </div>
                    <div className='content-body-2'>
                        <h3 className='txt-second'>Popular Department</h3>
                            <ul>
                                <li>
                                    <div className='content-img' style={{backgroundImage: "url(" + IMG + ")",backgroundSize:'cover',height:100+'px',width:150+'px'}}>
                                        <p className='contet-title'>Web Dev</p>
                                    </div>
                                </li>
                                <li>
                                    <div className='content-img' style={{backgroundImage: "url(" + IMG + ")",backgroundSize:'cover',height:100+'px',width:150+'px'}}>
                                        <p className='contet-title'>Web Dev</p>
                                    </div>
                                </li>
                                <li>
                                    <div className='content-img' style={{backgroundImage: "url(" + IMG + ")",backgroundSize:'cover',height:100+'px',width:150+'px'}}>
                                        <p className='contet-title'>Web Dev</p>
                                    </div>
                                </li>
                                <li>
                                    <div className='content-img' style={{backgroundImage: "url(" + IMG + ")",backgroundSize:'cover',height:100+'px',width:150+'px'}}>
                                        <p className='contet-title'>Web Dev</p>
                                    </div>
                                </li>
                                <li>
                                    <div className='content-img' style={{backgroundImage: "url(" + IMG + ")",backgroundSize:'cover',height:100+'px',width:150+'px'}}>
                                        <p className='contet-title'>Web Dev</p>
                                    </div>
                                </li>
                                <li>
                                    <div className='content-img' style={{backgroundImage: "url(" + IMG + ")",backgroundSize:'cover',height:100+'px',width:150+'px'}}>
                                        <p className='contet-title'>Web Dev</p>
                                    </div>
                                </li>
                            </ul>
                    </div>
                    <div className='content-body-3'>
                        <h3 className='txt-second'>CLothing</h3>
                        <div className='content-img' style={{backgroundImage: "url(" + IMG + ")",backgroundSize:'cover',height:300+'px',width:250+'px'}}>
                        </div>
                        <button className='btn-green'>Shop Clothing</button>
                    </div>
                    <div className='content-body-4'>
                        <h3 className='txt-second'>Deals</h3>
                        <div className='content-img' style={{backgroundImage: "url(" + IMG + ")",backgroundSize:'cover',height:270+'px',width:250+'px'}}>
                        </div>
                        <h4>Rp. 15.111.111</h4>
                        <button className='btn-green'>Shop Deals</button>
                    </div>
                </div>
                <div className='go-top'>
                    <a className='txt-white' href="">
                        <div>
                        GO TOP
                        </div>
                    </a>
                </div>
            </div>
        );
    }
}

export default Content;