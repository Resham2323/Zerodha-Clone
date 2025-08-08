import React from 'react';

function Universe() {
    return ( 
         <div className='container mt-5'>
       <div className='row text-center'>
        <h1 className='fs-4'>The Zerodha Universe</h1>
        <p>Extend your trading and investment experience even further with our partner platforms</p>
 
            <div className='col-3 p-4 ml-4  mt-2' style={{ marginLeft:"4rem"}}>
                <img src='media/smallcaseLogo.png' style={{height:"50",}}/>
                <p className='mt-2'style={{ marginRight:"2rem"}}>Our asset management venture that is creating simple and transparent index funds to help you save for your goal</p>
            </div>    
            <div className='col-1'> </div>
            <div className='col-3 p-4 mt-2'>
                <img src='media/sensibullLogo.svg' style={{height:"40px", marginRight:"4rem"}}/>
                <p className='mt-2'style={{ marginRight:"2rem"}}>Our asset management venture that is creating simple and transparent index funds to help you save for your goal</p>
            </div>
             <div className='col-1'> </div>
            <div className='col-3 p-4 mt-2'>
                <img src='media/zerodhaFundhouse.png'style={{height:"50px", marginRight:"4rem"}}/>
                <p className='mt-2' style={{ marginRight:"4rem"}}>Our asset management venture that is creating simple and transparent index funds to help you save for your goal</p>
            </div>
            {/* <div className='col-1'> </div> */}
            <div className='col-3 p-4  mt-3' >
                <img src='media/goldenpiLogo.png' style={{height:"50px", marginLeft:"4rem"}}/>
                <p className='mt-2' style={{ marginLeft:"4rem"}}>Our asset management venture that is creating simple and transparent index funds to help you save for your goal</p>
            </div>
            <div className='col-1'> </div>
            <div className='col-3 p-4 mt-3'>
                <img src='media/streakLogo.png'style={{height:"50px", marginLeft:"4rem"}}/>
                <p className='mt-2' style={{ marginLeft:"4rem"}}>Our asset management venture that is creating simple and transparent index funds to help you save for your goal</p>
            </div>
            <div className='col-1'> </div>
            <div className='col-3 p-4 mt-3'>
                <img src='media/dittoLogo.png' style={{height:"50px", marginLeft:"3rem"}}/>
                <p className='mt-2'style={{ marginLeft:"3rem"}}>Our asset management venture that is creating simple and transparent index funds to help you save for your goal</p>
            </div>

         <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%", margin:"0 auto"}}>Signup now for free</button>
        </div>
        </div>
     );
    }
export default Universe;