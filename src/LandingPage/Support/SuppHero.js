import React from 'react';

function SuppHero() {
    return (
        < div className='container mt-5 mb-5'>
            <div className='row'>
                <div class="d-flex mb-4 ">
                    <h1 className='fs-1 w-100'>Support Portal</h1>
                    <button className='flex-shrink-1 btn btn-primary my-ticket' >My tickets</button>
                </div>

                <div className='input-group mb-3'>
                    <i class="fa fa-search" aria-hidden="true" style={{ marginLeft: "16px", position: "absolute", marginTop: "20px" }}></i>
                    <input type="text" placeholder="Eg: How do I open my account, How do I activate F&O..." className='SupportHero  mb-3' />
                </div>

            </div>
        </div>
    );
}

export default SuppHero
    ;   