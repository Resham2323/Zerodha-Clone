import React from 'react';

function PriceHero() {
    return (
        <div className='container mt-5 mb-5 p-4' >
            <div className='row p-5'>
                <div className='row text-center mb-4'>
                    <h1 className='fs-3 text -enter'>Charges</h1>
                    <p className='text-muted text-center fs-5'>List of all charges and taxes</p>
                </div>
                <div className='row p-5 mt-5'>
                    <div className='col-4 p-4'>
                        <img src='media/pricingEquity.svg' />
                        <h1 className='fs-3 text-center'>Free equity delivery</h1>
                        < p className='text-muted text-centerfs-6'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
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
            <div className='row'>
                <table>
                    <tr>
                        <th>	</th>
                        <th>Equity delivery</th>
                        <th>Equity intraday</th>
                        <th>F&O - Futures</th>
                        <th>F&O - Options</th>
                    </tr>
                    <tr>
                        <td>Brokerage</td>
                        <td>Zero Brokerage</td>
                        <td>0.03% or Rs. 20/executed order whichever is lower</td>
                        <td>0.03% or Rs. 20/executed order whichever is lower</td>
                        <td>Flat Rs. 20 per executed order</td>
                    </tr>
                    <tr>
                        <td>STT/CTT	</td>
                        <td>0.1% on buy & sell</td>
                        <td>0.025% on the sell side</td>
                        <td>0.02% on the sell side</td>
                        <td>
                            0.125% of the intrinsic value on options that are bought and exercised
                            0.1% on sell side (on premium)</td>
                    </tr>
                    <tr>
                        <td>Brokerage</td>
                        <td>Zero Brokerage</td>
                        <td>0.03% or Rs. 20/executed order whichever is lower</td>
                        <td>0.03% or Rs. 20/executed order whichever is lower</td>
                        <td>Flat Rs. 20 per executed order</td>
                    </tr>
                    <tr>
                        <td>Brokerage</td>
                        <td>Zero Brokerage</td>
                        <td>0.03% or Rs. 20/executed order whichever is lower</td>
                        <td>0.03% or Rs. 20/executed order whichever is lower</td>
                        <td>Flat Rs. 20 per executed order</td>
                    </tr>
                    <tr>
                        <td>Brokerage</td>
                        <td>Zero Brokerage</td>
                        <td>0.03% or Rs. 20/executed order whichever is lower</td>
                        <td>0.03% or Rs. 20/executed order whichever is lower</td>
                        <td>Flat Rs. 20 per executed order</td>
                    </tr>
                </table>
            </div>
        </div>

    );
}

export default PriceHero;