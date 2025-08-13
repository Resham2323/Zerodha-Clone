import React from 'react';

function LeftSec({imageUrl, productName, productDescription, tryDemo, learnMore, googlePlay, appStore}) {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 offset-1'>
                    <img src={imageUrl}/>
                </div>

                <div className='col-5 mt-5'>
                    <h1 className='fs-4 mb-4'>{productName}</h1>
                    <p className='fs-6'>{productDescription}</p>
                    <div className='mb-3'>
                    <a href={tryDemo}>Try Demo  <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                    <a href={learnMore} style={{marginLeft:"50px"}}>Learn More  <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                    </div>
                    <div>
                    <a href={googlePlay}><img src='media/googlePlayBadge.svg'/></a>
                    <a href={appStore}  style={{marginLeft:"50px"}}><img src='media/appstoreBadge.svg'/></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default LeftSec;