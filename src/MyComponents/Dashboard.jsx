import React from 'react';
import logo from "./Images/logo.png";
import sidebar from "./Images/sidebar.png";
import home from "./Images/home (3).png";
import payout from "./Images/payout.png";
import leaderboard from "./Images/leaderboard.png";
import calender from "./Images/calender.png";
import aff from "./Images/aff.png";
import balanceinfo1 from "./Images/balanceinfo1.png";
import notification from "./Images/notification.png";
import setting from "./Images/setting.png";
import logout from "./Images/logout.png";
import darkmode from "./Images/darkmode.png";
import logoanalysis from "./Images/analysis.png";
import dot from "./Images/Dot.png";
import bell from "./Images/bell.png";


const Dashboard = () => {
    return (
        <>
            <div className="dashboard">
                <div className="row">
                    <div className="col-2">

                        <div className="menu">
                            <div className="logo">
                                <img src={logo} alt="" />
                            </div>
                            <div className="sidebar">
                                <img src={sidebar} alt="" />
                            </div>
                            <div className="menu_item">
                                <div className="navbar">
                                    <a href="#section1"><img src={home} alt="" width={'20px'} className='mx-2' />Home</a>
                                    <a href="#section2"><img src={payout} alt="" width={'20px'} className='mx-2' />Payout</a>
                                    <a href="#section3"><img src={leaderboard} alt="" width={'20px'} className='mx-2' />Leaderboard</a>
                                    <a href="#section4"><img src={calender} alt="" width={'20px'} className='mx-2' />Calendar</a>
                                    <a href="#section4"><img src={aff} alt="" width={'20px'} className='mx-2' />Affiliates</a>
                                </div>
                                <div className="nav_footer">
                                    <a href="#section1"><img src={setting} alt="" width={'20px'} className='mx-2' />Setting</a>
                                    <a href="#section2"><img src={darkmode} alt="" width={'20px'} className='mx-2' />Dark Mode</a>
                                    <a href="#section3"><img src={logout} alt="" width={'20px'} className='mx-2' />Logout</a>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="col-10">
                        <div className="header p-2">
                            <div className="col-2">
                                <div className="search">
                                    <div className="input-icon">
                                        <i class="fa-solid fa-magnifying-glass"></i>
                                        <input
                                            type="text"
                                            placeholder="Search..."
                                            className="login_input py-2"
                                            id="search"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-8 d-flex align-items-center justify-content-end">

                                <div className="notification">
                                    <img src={notification} alt="" />
                                </div>
                                <div className="balanceinfo">
                                    <img src={balanceinfo1} alt="" className='balanceinfo_img' />
                                    <p className='m-0 px-2'>Bhavya Doshi</p>
                                </div>

                            </div>

                        </div>

                        <div className="header_analysis d-flex align-items-center justify-content-between my-3">
                            <div className='d-flex align-items-center '>
                                <img src={logoanalysis} alt="" className='logo_analysis' width={"40px"} />
                                <p className='m-0 analysis_text_header'>Analytics</p>
                            </div>
                            <div className='d-flex align-items-center'>
                                <button className='mx-2 analysis_text'>Analytics</button>
                                <button className='mx-2 credentials_text'>Credentials</button>
                            </div>
                        </div>


                        <div className='col-3'>
                            <p className='m-0 text-white'>Account</p>
                            <div className="acc_details d-flex ">
                                <div className="col-2 d-flex align-items-center">
                                    <img src={balanceinfo1} alt="" className='balanceinfo_img' />
                                </div>
                                <div className="col-7">
                                    <p className='m-0 p-0 analysis_text_header fs-5'>MT5 1012963</p>
                                    <p className='m-0 text-secondary fs-6'>Create at: August 2, 2024</p>
                                </div>
                                <div className="col-3">
                                    <p className='m-0 disabled d-flex'><img src={dot} alt="" width={"6px"} className='mx-1' />Disabled</p>
                                </div>
                            </div>
                        </div>

                        <div className="alert_notifications d-flex justify-content-between align-items-center py-2 my-3">
                            <div className='d-flex justify-content-between align-items-center'>
                                <img src={bell} alt="" width={"20px"} className='m-2' />
                                <p className='px-2 m-0 fs-6 text-white '>Violation Alert! Maximum Loss Exceeded!</p>
                            </div>
                            <div className=''>
                                <button type='submit' className='btn_viewsnapshot'>View Snapshot</button>
                            </div>
                        </div>

                        <div className='trading_obj'>
                            <img src={aff} alt="" width={"32px"}/>
                            <p className='m-0 fs-6 text-white py-2'>Trading objectives</p>
                            <p className='m-0 text-secondary fs-6'>Please note: Hitting either the daily loss limit or the maximum loss limit will result in a permanent account breach.</p>
                        </div>
                    </div>


                </div>



            </div>
        </>
    )
}

export default Dashboard
