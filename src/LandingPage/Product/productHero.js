import React from 'react';

function ProductHero() {
    return (  
       <div className='container mt-5 mb-5  border-bottom' >
       <div className='row text-center  mb-5'>
        <h1 className=' mt-5 fs-3'>Zerodha Products</h1>
        <p className='fs-4 '>Sleek, modern, and intuitive trading platforms</p>
        <p className=' mb-5'>Check out our<a href='/' className='mx-4' style={{textDecoration:"none"}}>investment offerings <i class="fa fa-arrow-right" aria-hidden="true"></i></a></p>
       </div>
        </div>
    );
}

export default ProductHero;