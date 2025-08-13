import React from 'react';

function PriceHero() {
    return (
        <div className='container mt-5 ' >
            <div className='row p-5'>
                <div className='row text-center'>
                    <h1 className='fs-3 text -enter '>Charges</h1>
                    <p className='text-muted text-center fs-5'>List of all charges and taxes</p>
                </div>
                <div className='row mt-5'>
                    <div className='col-4 p-4'>
                        <img src='media/pricingEquity.svg' />
                        <h1 className='fs-3 text-center'>Free equity delivery</h1>
                        < p className='text-muted text-center fs-6'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                    </div>

                    <div className='col-4 p-4'>
                        <img src='media/intradayTrades.svg' />
                        <h1 className='fs-3 text-center'>Intraday and F&O trades</h1>
                        < p className='text-muted text-center fs-6'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                    </div>


                    <div className='col-4 p-4'>
                        <img src='media/pricingMF.svg' />
                        <h1 className='fs-3 text-center'>Free direct MF</h1>
                        < p className='text-muted text-center fs-6'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                    </div>
                </div>
            </div>

          
           
        </div>

    );
}

export default PriceHero;