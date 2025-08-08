import React from 'react';
import {Link} from 'react-router-dom';

function AbtHero() {
    return (
        <div className='container mt-5 mb-5 p-4' >
            <div className='row mt-5 p-5'>
                <div className='row Abt-hero fs-3 mt-5 mb-5 border-bottom text-center'>
                    <p>We pioneered the discount broking model in India.<br />
                        Now, we are breaking ground with our technology.</p>
                </div>
                <div className=' row abtInfo text-muted'>
                    <div className='col-5  offset-1  mx-5'>
                        <p>We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.</p>
                        <p>Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.</p>
                        <p>Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.</p>
                    </div>

                    <div className='col-5'>
                        <p>In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.</p>
                        <p>Rainmatter, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.</p>
                        <p>And yet, we are always up to something new every day. Catch up on the latest updates on our blog or see what the media is saying about us or learn more about our business and product philosophies.</p>
                    </div>
                </div>

           
            <div className='row mt-5 p-5'>
                <p className='fs-3 text-center'>People</p>
                <div className='col-5 align-center'>
                    <img src ='media/resham.jpg' className='align-center'
                    style={{borderRadius:"100%", width:"60%", height:"65%", objectFit:"cover"}}/>
                    <p></p>
                    <h5 className='mx-5 px-2'>Resham parveen</h5>
                    <p className='text-muted mx-5 px-5'>Founder</p>
                </div>
                
                 <div className='col-7 mt-5'>
                                    
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                    <p>Playing basketball is his zen.</p>
                    <p> Connect on<Link to={"/"}> Homepage </Link>/<Link> TradingQnA</Link> /<Link>Twitter</Link></p>
                 </div>
            </div>
             </div>
        </div>
    );
}

export default AbtHero;