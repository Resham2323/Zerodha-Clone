import React from 'react';

function Stats() {
    return ( 
         <div className = "container mt-5 mb-5">
           <div className = "row">
                <div className='col-6'>
                <h1 className='fs-2 pb-5'>Trust with confidence</h1>

                <h2 className='fs-4'>Customer-first always</h2>
                <p className='text-muted'>That's why 1.3+ crore customers trust zerodha with ₹3.5 lakh crores worth of equity investment</p>

                <h2 className='fs-4'>No spam and gimmicks</h2>
                <p className='text-muted'>No gimmiks, spam, "gamification",or anoying push notifications.<br></br>
                Hoght quality apps that you see your pace, the way you like.</p>

                <h2 className='fs-4'>The Zerodha universe</h2>
                 <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offered you tailored services specific to your needs.</p>

                <h2 className='fs-4'>Do better with money</h2>
                 <p className='text-muted mb-5'>With initiatives like Nudge and Kill switch, we don,t just facilitate, transactions, but actively help you do better with your money.</p>

                </div>  
                <div className='col-6'>
                    <img src="media/ecosystem.png" alt='Stats' style={{width:"80%"}}/>
                    <div className='text-center'>
                    <a href='' className='mx-4' style={{textDecoration:"none"}}>Explore our product<i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                    <a href='' className='mx-4' style={{textDecoration:"none"}}>Try kite demo<i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
         </div>         
     );
}

export default Stats;