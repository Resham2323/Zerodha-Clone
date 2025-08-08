import React from 'react';
import RightSec from './RightSec';
import LeftSec from './LeftSec';
import Universe from './Universe';
import ProductHero from './productHero';

function ProductPage() {
  return (
    <>
      <ProductHero />
      <LeftSec
        imageUrl='media/kite.png'
        productName='Kite'
        productDescription='Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.' 
        tryDemo='' 
        learnMore=''
        googlePlay=''
        appStore='' />

        <RightSec 
        imageUrl='media/console.png' 
        productName='Console' 
        productDescription='The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.' 
        learnMore=''/>

        <LeftSec
        imageUrl='media/coin.png'
        productName='Coin'
        productDescription='Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.' 
        tryDemo='' 
        learnMore=''
        googlePlay=''
        appStore='' />

        <RightSec 
        imageUrl='media/kiteconnect.png' 
        productName='Kite Connect API' 
        productDescription='Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase.' 
        learnMore=''/>

        <LeftSec
        imageUrl='media/varsity.png'
        productName='Varsity mobile'
        productDescription='An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.' 
        tryDemo='' 
        learnMore=''
        googlePlay=''
        appStore='' />
  
  <p className='fs-4 text-center mt-5 mb-5'>Want to know more about our technology stack? Check out the Zerodha.tech blog.</p>
      <Universe />
    </>
  );
}

export default ProductPage;