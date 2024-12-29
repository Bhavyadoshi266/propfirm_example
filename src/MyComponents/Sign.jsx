import React from 'react';
import loginimg from './Images/loginimg.png';
import logo from './Images/logo.png';
import { Outlet, Link } from "react-router-dom";

const Sign = () => {
    return (
        <>
            <div className="loginpage d-flex flex-column flex-md-row">

                <div className="col-md-6 d-flex align-items-center">
                    <img src={loginimg} alt="Login" className="image_login" />
                </div>

                <div className="col-md-6">
                    <div className="left_container">
                        <div className="logo">
                            <img src={logo} alt="Logo" />
                        </div>

                        <form action="" className="login_form">
                            <div className="welcome_text">
                                <p className="m-0">Welcome Back</p>
                                <span>Welcome back! Please enter your details</span>
                            </div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6">
                                        <label htmlFor="name" className="login_lable">Name</label>
                                        <div className="input-icon">
                                            <i class="fa-solid fa-user"></i>
                                            <input
                                                type="text"
                                                placeholder="Enter your name"
                                                className="login_input"
                                                id="name"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <label htmlFor="username" className="login_lable">Username</label>
                                        <div className="input-icon">
                                            <i class="fa-solid fa-user"></i>
                                            <input
                                                type="text"
                                                placeholder="Enter your username"
                                                className="login_input"
                                                id="username"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <label htmlFor="email" className="login_lable">
                                            Email Address
                                        </label>
                                    </div>
                                    <div className="col-12">
                                        <div className="input-icon">
                                            <i className="fas fa-envelope"></i>
                                            <input
                                                type="email"
                                                placeholder="Enter email address"
                                                className="login_input"
                                                id="email"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <label htmlFor="password" className="login_lable">
                                            Password
                                        </label>
                                    </div>
                                    <div className="col-12">
                                        <div className="input-icon">
                                            <i className="fas fa-lock"></i>
                                            <input
                                                type="password"
                                                placeholder="Enter password"
                                                className="login_input"
                                                id="password"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-12 form_bottom_text">
                                        <p className="m-0">
                                            <input type="checkbox" /> Remember for 30 days
                                        </p>
                                        <p className="m-0">Forgot password?</p>
                                    </div>
                                </div>

                                <button type="submit" className="login_btn">
                                    Create Account
                                </button>

                                <div className="signin">
                                    <p>Already have an account? <Link className="login_link" to="/">Log in</Link></p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    );
};

export default Sign;
