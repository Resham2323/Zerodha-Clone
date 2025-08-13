import React from 'react';

function Watchlist() {
    return ( 
        <div className='watchlist-container'>
            <div className='search-container'>
                <input type='text' id='search' name='search' placeholder='Search eg: Infy, BSE, nifty but weekly, gold mcx' className='search'/>
                <span className='counts'>9/50</span>
            </div>
            <ul className='li'></ul>
        </div>
     );
}

export default Watchlist;