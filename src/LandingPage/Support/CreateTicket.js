import React from 'react';
import { useState } from "react";


function CreateTicket() {

       const [openSection, setOpenSection] = useState(null); // store active section id

    const toggleSection = (sectionId) => {
        setOpenSection(openSection === sectionId ? null : sectionId);
    };
    return (
        <>
            < div className='container mt-5'>
                <div className='row'>
                    <div className="col-9 content ">
                        {/* Left Column */}
                        <summary onClick={() => toggleSection("accountOpening")} className="accordion fs-5">
                            <i class="fa fa-plus-circle mx-4" aria-hidden="true"></i> Account Opening
                            <i class="fa fa-caret-down " aria-hidden="true"></i>
                        </summary>
                      {/* Toggle render */}
                        {openSection === "accountOpening" &&  (
                            <ul className='CreateTicket-anchor'>
                                <li><a href="#">Resident Individual</a></li>
                                <li><a href="#">Non Resident India(NRI)</a></li>
                                <li><a href="#">Minor</a></li>
                                 <li><a href="#">Company, Partnership HUF, and LLP</a></li>
                                  <li><a href="#">Glossary</a></li>
                            </ul>
                        )}
                        <summary  onClick={() => toggleSection("zerodhaAccount")} className="accordion fs-5">
                            <i className="fa fa-user-circle mx-4"></i> Your Zerodha Account
                            <i class="fa fa-caret-down" aria-hidden="true"></i>
                        </summary>
                        {openSection === "zerodhaAccount" &&  (
                            <ul className='CreateTicket-anchor'>
                                <li><a href="#">Your profile</a></li>
                                <li><a href="#">Account modification</a></li>
                                <li><a href="#">Client Master Report (CMR) and Depository Participant (DP)</a></li>
                                <li><a href="#">Nomination</a></li>
                                 <li><a href="#">Transfer and conversion of securities</a></li>

                            </ul>
                        )}
                        <summary onClick={() => toggleSection("kite")} className="accordion fs-5">
                           <i class="fa fa-arrow-circle-o-left mx-4" aria-hidden="true"></i> Kite
                           <i class="fa fa-caret-down" aria-hidden="true"></i>
                        </summary>
                        {openSection === "kite" && (
                            <ul className='CreateTicket-anchor'> 
                                <li><a href="#">IPOs</a></li>
                                <li><a href="#">Trading F&Q</a></li>
                                <li><a href="#">Margin Trading Facility (MTF) and Margins</a></li>
                                 <li><a href="#">Charts and Orders</a></li>
                                 <li><a href="#">Alerts and Nudges</a></li>
                                  <li><a href="#">General</a></li>
                            </ul>
                        )}
                        <summary  onClick={() => toggleSection("Funds")} className="accordion fs-5">
                            <i class="fa fa-inr mx-4" aria-hidden="true"></i> Funds
                            <i class="fa fa-caret-down" aria-hidden="true"></i>
                        </summary>
                        {openSection === "Funds" && (
                            <ul className='CreateTicket-anchor'>
                                <li><a href="#">Add money</a></li>
                                <li><a href="#">Withdraw money</a></li>
                                <li><a href="#">Add Bank Accounts</a></li>
                                <li><a href="#">eMandates</a></li>
                            </ul>
                        )}
                        <summary   onClick={() => toggleSection("Funds")} className="accordion fs-5">
                            <i className="fa fa-cog mx-4"></i> Console
                            <i class="fa fa-caret-down" aria-hidden="true"></i>
                        </summary>
                        {openSection === "Console" && (
                            <ul className='CreateTicket-anchor'>
                                <li><a href="#">Portfolio</a></li>
                                <li><a href="#">Corporate Action</a></li>
                                <li><a href="#">Funds Statement</a></li>
                                <li><a href="#">Reports</a></li>
                                <li><a href="#">Profile</a></li>
                                <li><a href="#">Segments</a></li>
                            </ul>
                        )}
                        <summary   onClick={() => toggleSection("Coin")} className="accordion fs-5">
                           <i class="fa fa-circle-o-notch mx-4" aria-hidden="true"></i> Coin
                           <i class="fa fa-caret-down " aria-hidden="true"></i>
                        </summary>
                       {openSection === "Coin" && (
                            <ul className='CreateTicket-anchor'>
                                <li><a href="#">Mutual Funds</a></li>
                                <li><a href="#">National Pension Scheme NPS</a></li>
                                <li><a href="#">Fixed Deposits</a></li>
                                <li><a href="#">Payments and Orders</a></li>
                                <li><a href="#">General</a></li>
                            </ul>
                        )}
                    </div>

                    {/* Right Column */}
                    <div className="col-3">
                        <div className="notice">
                            <ul>
                                <li><a href="#">
                                Exclusion of F&O contracts on 8 securities from August 29, 2025
                            </a></li>
                            <li><a href="#">
                                Revision in expiry day of Index and Stock derivatives contracts
                            </a></li>
                            </ul>
                            
                        </div>

                        <div className="quick-links ">
                            <p className='fs-5'> Quick links</p>
                            <a href="#">1. Track account opening</a><br/>
                            <a href="#">2. Track segment activation</a><br/>
                            <a href="#">3. Intraday margins</a><br/>
                            <a href="#">4. Kite user manual</a><br/>
                        </div>
                    </div>
                </div>
            </div>
        
    </>
  );
}

export default CreateTicket;