import React from 'react';
import { useState } from "react";


function EquityCalculator() {
    return (
        <div className='container ' style={{ fontSize: "small" }}>
            <table border="1" style={{ width: "100%", height:"500px" }} cellPadding="5">
                <thead>
                    <tr className='mb-5 border-bottom'>
                        <th> </th>
                        <th>Equity delivery</th>
                        <th>Equity intraday</th>
                        <th>F&O - Futures</th>
                        <th>F&O - Options</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Brokerage</td>
                        <td>Zero Brokerage</td>
                        <td>0.03% or Rs. 20/executed order whichever is lower</td>
                        <td>0.03% or Rs. 20/executed order whichever is lower</td>
                        <td>Flat Rs. 20 per executed order</td>
                    </tr>
                    <tr>
                        <td>STT/CTT</td>
                        <td>0.1% on buy & sell</td>
                        <td>0.025% on the sell side</td>
                        <td>0.025% on the sell side</td>
                        <td><ul>
                            <li>
                                0.125% of the intrinsic value on options that are bought and exercised
                            </li>
                            <li>0.1% on sell side (on premium)</li>
                        </ul></td>
                    </tr>
                    <tr>
                        <td>GST</td>
                        <td>18% on (brokerage + SEBI charges + transaction charges)	</td>
                        <td>18% on (brokerage + SEBI charges + transaction charges)	</td>
                        <td>18% on (brokerage + SEBI charges + transaction charges)	</td>
                        <td>18% on (brokerage + SEBI charges + transaction charges)	</td>
                    </tr>
                    <tr>
                        <td>SEBI charges</td>
                        <td>₹10 / crore</td>
                        <td>₹10 / crore</td>
                        <td>₹10 / crore</td>
                        <td>₹10 / crore</td>
                    </tr>
                     <tr>
                        <td>Transaction charges</td>
                        <td>NSE: 0.00297%<br/>
                            BSE: 0.00375%
                        </td>
                        <td>NSE: 0.00297%<br/>
                            BSE: 0.00375%
                        </td>
                        <td>NSE: 0.00173%<br/>BSE: 0</td>
                        <td>NSE: 0.03503% (on premium)<br/>BSE: 0.0325% (on premium)</td>
                    </tr>
                     <tr>
                        <td>Stamp charges</td>
                        <td>0.015% or ₹1500 / crore on buy side</td>
                        <td>0.003% or ₹300 / crore on buy side</td>
                         <td>0.002% or ₹200 / crore on buy side</td>
                          <td>0.003% or ₹300 / crore on buy side</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

function CurrencyCalculator() {
    return (
        <div className='' style={{ fontSize: "small" }}>
            <table border="1" cellPadding="5" style={{ width: "100%", height:"350px" }}>
                <thead>
                    <tr className='border-bottom my-5'>
                        <th ></th>
                        <th>Commodity futures</th>
                        <th>Commodity options</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Brokerage</td>
                        <td>0.03% or Rs. 20/executed order whichever is lower</td>
                        <td>₹ 20/executed order</td>
                    </tr>
                    <tr>
                        <td>STT/CTT</td>
                        <td>No STT</td>
                        <td>No STT</td>
                    </tr>
                    <tr>
                        <td>Transaction charges</td>
                        <td>NSE: 0.00297%<br/>
                            BSE: 0.00375%
                        </td>
                        <td>NSE: 0.00297%<br/>
                            BSE: 0.00375%
                        </td>
                        </tr>
                    <tr>
                        <td>GST</td>
                        <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                        <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                    </tr>
                    <tr>
                        <td>SEBI charges</td>
                        <td>₹10 / crore</td>
                        <td>₹10 / crore</td>
                    </tr>
                    <tr>
                        <td>Stamp charges</td>
                        <td>0.001% or ₹10 / crore on buy side</td>
                        <td>0.0001% or ₹10 / crore on buy side</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

function CommodityCalculator() {
    return (
        <div style={{ fontSize: "small" }}>
            <table border="1" cellPadding="5" style={{ width: "100%", height:"300px"}}>
                <thead>
                    <tr className='border-bottom my-5'>
                        <th ></th>
                        <th>Commodity futures</th>
                        <th>Commodity options</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Brokerage</td>
                        <td>0.03% or Rs. 20/executed order whichever is lower</td>
                        <td>₹ 20/executed order</td>
                    </tr>
                    <tr>
                        <td>STT/CTT</td>
                        <td>0.01% on sell side (Non-Agri)</td>
                        <td>	0.05% on sell side</td>
                    </tr>
                    <tr>
                        <td>Transaction charges</td>
                        <td>MCX: 0.0021%<br/>NSE: 0.0001%</td>
                        <td>MCX: 0.0418%<br/>NSE: 0.001%</td>
                    </tr>                    
                    <tr>
                        <td>GST</td>
                        <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                        <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                    </tr>
                    <tr>
                        <td>Stamp charges</td>
                        <td>0.002% or ₹200 / crore on buy side</td>
                        <td>0.003% or ₹300 / crore on buy side</td>
                    </tr>

                </tbody>
            </table>
        </div>
    );
}
export default function Brokerage() {

    const [selected, setSelected] = useState("equity");

    return (
        <div className='container p-5'>
            <div style={{ padding: "20px", fontFamily: "Arial" }}>

                {/* Option Selector */}
                <div style={{ marginBottom: "20px" }}>
                    <span
                        onClick={() => setSelected("equity")}
                        style={{
                            // background: selected === "equity" ? "#0f62fe" : "#ddd",
                            color: "black",
                            marginRight: "10px",
                            padding: "8px 16px",
                            borderBottom: selected === "equity" ? "2px solid blue" : "none",
                            cursor: "pointer",
                        }}
                    >
                        Equity
                    </span>
                    <span
                        onClick={() => setSelected("currency")}
                        style={{
                            //  background: selected === "futures" ? "#ddd" : "#ddd",
                            color: "black",
                            padding: "8px 16px",
                            borderBottom: selected === "currency" ? "2px solid blue" : "none",
                            cursor: "pointer",
                        }}
                    >
                        Currency
                    </span>
                    <span
                        onClick={() => setSelected("commodity")}
                        style={{
                            //  background: selected === "futures" ? "#ddd" : "#ddd",
                            color: "black",
                            padding: "8px 16px",
                            borderBottom: selected === "commodity" ? "2px solid blue" : "none",
                            cursor: "pointer",
                        }}
                    >
                        Comodity
                    </span>

                </div>

                {/* Conditional Rendering */}
                {selected === "equity" && <EquityCalculator />}
                {selected === "currency" && <CurrencyCalculator />}
                {selected === "commodity" && <CommodityCalculator />}
            </div>
            <p className='fs-4 text-center'><a href='#' style={{textDecoration:"none"}}>Calculate your costs upfront</a> using our brokerage calculator</p>
            <div className='container p-4'>
              <h1 className='fs-3 mt-4 mb-3'>Charges for account opening</h1>
            < table border="1" cellPadding="5" style={{ width: "100%", height:"200px"}}>
            <thead>
                <tr className='border-bottom my-5'>
                    <th>Type of account</th>
                    <th>Charges</th>
                </tr>
            </thead>
                
                <tr>
                    <td>Online account</td>
                    <td><span className='charges'>FREE</span></td>
                </tr>
                                <tr>
                    <td>Offline account</td>
                    <td><span className='charges'>FREE</span></td>
                </tr>
                                <tr>
                    <td>NRI account (offline only)</td>
                    <td>₹ 500</td>
                </tr>
                 <tr>
                    <td>Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
                    <td>₹ 500</td>
                </tr>
            </table>
            </div>
        </div>);
};
