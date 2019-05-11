import React, { Component } from 'react';
import './Style/Banner.scss'
import '../../Compoents/style.scss'
import BG from '../assets/image/bg1.jpg'

class Banner extends Component {
    render() {
        return (
            <div className='banner'>
                <div className="container">
                    <h1 className='txt-white'>
                        Header
                    </h1>
                    <p className='txt-second'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet reprehenderit nulla vitae eveniet voluptatem atque architecto, nobis ipsa nam cupiditate?
                    </p>
                </div>
            </div>
        );
    }
}

export default Banner;