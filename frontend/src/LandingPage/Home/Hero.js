import React from 'react';

function Hero() {
    return ( 
      <div className = "container p-5 text-center mb-5">
        <div className = "row">
            <img src="media/homeHero.png" alt='HeroPage' className='mb-4 hero offset-1'/>
            <h1 className='mt-3'>invest in everything</h1>
            <p>Online platform to invest in stocks, derivates, mutual funds, and more</p>
            <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%", margin:"0 auto"}}>Signup now</button>
        </div>
      </div>
     );
}

export default Hero;