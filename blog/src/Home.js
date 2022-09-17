import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className='home'>
            <div className='home-contatiner'>
                <img className='home_image' src='https://images.idgesg.net/images/article/2017/09/firetvad2-100736366-orig.jpg' alt=''></img>

                <div className='home_row'>
                    <Product 
                        id="2323" 
                        title="제품01"
                        price={3000}
                        image="https://t1.daumcdn.net/cfile/blog/2265B63B5575250F01"
                        rating={5}    
                    />
                </div>

                <div className='home_row'>
                    <Product />
                    <Product />
                    <Product />
                </div>

                <div className='home_row'>
                    <Product />
                </div>


            </div>
        </div>
    );
}

export default Home;