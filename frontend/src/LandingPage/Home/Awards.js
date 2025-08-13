import React from 'react';

function Award() {
    return ( 
         <div className = "container mt-5 mb-5">
           <div className = "row">
              <div className='col-6' >
                <img src="media\largestBroker.svg" alt='Award'/>
              </div>
              <div className='col-6 p-5'>
                <h1>Largest atock broker in India</h1>
                <p className='mb-5'>2+ million zerodha clients contribute to over 15% of all retail order volumes in india daily by trading and investing: </p>
                <div className = "row mt-5">
                    <div className='col-6' >
                        <ul className='mb-5'>
                            <li> <p>Future and Options</p></li>
                             <li><p>Commodity derivates</p></li>
                              <li><p>Currency derivates</p></li>
                        </ul>
                    </div>
                    <div className='col-6' >
                        <ul>
                            <li><p>Stocks and IPOs</p></li>
                             <li><p>Direct mutual funds</p></li>
                              <li><p>Bonds and Govt. Securities</p></li>
                        </ul>
                    </div>
                </div>
                       <img src='media/pressLogos.png ' alt='Press Logo' style={{width:"90%"}}/>
              </div>
           </div>
        </div>
     );
}

export default Award;