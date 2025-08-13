import React from 'react';

function Footer() {
    return (
        <footer>
        <div className='container border-top p-5' >
            <div className='row footer-anchor mb-5 mt-5'>
                <div className='col-4 mb-5 '>
                    <a class="navbar-brand" href="#">
                        <img
                            src="media/logo.svg"
                            style={{ width: "45%" }}
                            alt='Logo' 
                             className='ml-5'/>
                           
                    </a>
                    <p>© 2010 - 2025, Zerodha Broking Ltd.<br/> All rights reserved.</p>
                    <div className='icons mt-4'>
                    <i class="fa fa-youtube-play fa-1x fs-4 mx-2" aria-hidden="true" ></i>
                    <i class="fa fa-whatsapp fa-1x fs-4 mx-2" aria-hidden="true" ></i>
                    <i class="fa fa-telegram fa-1x fs-4 mx-2" aria-hidden="true"></i>
                    <i class="fa fa-facebook-official fa-1x fs-4 mx-2" aria-hidden="true"></i><br/><hr/>
                    <i class="fa fa-instagram fa-1x fs-4 mx-2" aria-hidden="true"></i>
                    <i class="fa fa-linkedin fa-1x fs-4 mx-2" aria-hidden="true"></i>
                    </div>
                </div>
                <div className='col anchors'>
                    <p >Account</p>
                    <a href='#'>Minor demat account</a><br />
                    <a href='#'>NRI demat account</a><br />
                    <a href='#'>Commodity </a><br />
                    <a href='#'>Dematerialisation</a><br />
                    <a href='#'>Fund transfer</a><br />
                    <a href='#'>MTF</a><br />
                    <a href='#'>Referral program</a><br />
                </div>
                <div className='col anchors'>
                    <p >Contact us</p>
                    <a href='#' >Support portal</a><br />
                    <a href='#' >How to file a complaint?</a><br />
                    <a href='#' >Status of your complaints</a><br />
                    <a href='#' >Bulletin</a><br />
                    <a href='#' >Circular</a><br />
                    <a href='#' >Z-Connect blogSupport</a><br />
                    <a href='#' >Downloads</a><br />

                </div>
                <div className='col anchors'>
                    <p >Company</p>
                    <a href='#'>About</a><br/>
                    <a href='#'>Philosophy</a><br />
                    <a href='#'>Press & media</a><br />
                    <a href='#'>Careers</a><br />
                    <a href='#'> Zerodha Cares (CSR)</a><br />
                    <a href='#'>Zerodha.tech</a><br />
                    <a href='#'>Open source</a><br />
                </div>
                <div className='col anchors'>
                    <p>Quick links</p>
                    <a href='#'>Upcoming IPOs</a><br />
                    <a href='#'>Brokerage charges</a><br />
                    <a href='#'>Market holidays</a><br />
                    <a href='#'>Economic calendar</a><br />
                    <a href='#'>Calculators</a><br />
                    <a href='#'> Markets </a> <br />                 
                    <a href='#'>Sectors</a><br />
                </div>
            </div>
            <div className='row footer-para text-muted'>
                <p>
                    Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to <a href='#'>complaints@zerodha.com</a>, for DP related to <a href='#'>dp@zerodha.com</a>. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF
                </p>
                <p>
                    Procedure to file a complaint on <a href='#'>SEBI SCORES</a>: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances
                </p>
                <p><a href='#'>Smart Online Dispute Resolution | Grievances Redressal Mechanism</a></p>
                <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>
                <p>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>
                <p>India's largest broker based on networth as per NSE. <a href='#'>NSE broker factsheet </a></p>
                <p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services,<a href='#'> please create a ticket here.</a></p>
            </div>
            <ul className='footer-ul text-muted'>
                <a href='#'>NSE </a>
                <a href='#'>BSE </a>
                <a href='#'>MCX </a>
                <a href='#'>Terms & conditions</a>
                <a href='#'>Policies & procedures</a>
                <a href='#'>Privacy policy</a>
                <a href='#' >Disclosure </a>
                <a href='#' > For investor's attention </a>
                <a href='#' >Investor charter</a>
              
              </ul> 
        </div>
   </footer>
    );
}

export default Footer;