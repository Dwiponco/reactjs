import React, { Component } from 'react';
import './style/Header.scss'
import '../../Compoents/style.scss'

class Header extends Component {
    render() {
        return (
            <div className='header'>
                <div className='container clear'>
                    <div className='search-box'>
                        <select name="" id="">
                            <option value="1">All</option>
                            <option value="2">Informatika1</option>
                            <option value="3">Informatika2</option>
                            <option value="4">Informatika3</option>
                        </select>
                        <input className='search-text' type="text" placeholder='Search'/>
                        <a className='search-btn' href="">
                        <i class="fa fa-search"></i>
                        </a>
                    </div>
                    <nav className='navigasi'>
                        <ul className='navigasi-left'>
                            <li>
                                <select name="" id="">
                                    <option value="1">Department</option>
                                    <option value="2">Informatika1</option>
                                    <option value="3">Informatika2</option>
                                    <option value="4">Informatika3</option>
                                </select>
                            </li>
                            <li><a className='txt-white' href="">Account</a></li>
                            <li><a className='txt-white' href="">Deal</a></li>
                            <li><a className='txt-white' href="">Registry</a></li>
                            <li><a className='txt-white' href="">Sell</a></li>
                            <li><a className='txt-white' href="">Help</a></li>
                        </ul>
                        <div className='navigasi-right'>
                            <ul>
                                <select name="" id="">
                                    <option value="1">Sign In</option>
                                    <option value="2">Lorem</option>
                                    <option value="3">Lorem</option>
                                    <option value="4">Lorem</option>
                                </select>
                                <li><a className='txt-white' href="">Cart</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        );
    }
}

export default Header;