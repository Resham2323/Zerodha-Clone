import React from 'react';

function RightSec({ imageUrl, productName, productDescription, learnMore}) {
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-5 mt-5'>
                    <h1 className='fs-4 mb-4'>{productName}</h1>
                    <p className='fs-6'>{productDescription}</p>
                        <a href={learnMore} style={{ marginLeft: "50px" }}>Learn More  <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                </div>
                <div className='col-6 offset-1'>
                    <img src={imageUrl} />
                </div>
            </div>
        </div>
    );
}

export default RightSec;