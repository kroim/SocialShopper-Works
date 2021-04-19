import React, { Component } from 'react';
import { Link } from "react-router-dom";
class Plan extends Component {
	constructor(props) {
        super(props);
        this.state = {
            is_best: true
        }
    }
    render() {
	    const { is_best } = this.state;
        return (
            <div className={is_best?"plan-container featured":"plan-container"}>
                { is_best? <span className="featured">Best Choice</span> : null }
                <div className="content">
                    <span className="plan-category">Virtual Private Servers (VPS)</span>
                    <span className="plan-name">VPS S SSD</span>
                    <div className="previous-price-row"></div>
                    <div className="price-wrapper">
                        <span className="price">$6.99</span>
                        <span className="monthly">/ month</span></div>
                    <div className="special-promotions-row"></div>
                    <div className="specs-container">
                        <div className="spec">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.95 15.88"
                                 className="plan-checkmark">
                                <path fill="none" stroke="#feb600" stroke-linecap="square" stroke-width="3.5"
                                      d="M19.47 2.47l-11.68 11-5.32-5"></path>
                            </svg>
                            <div className="spec-info">
                                <span className="title ">4 vCPU Cores</span>
                                <span className="subtitle"></span>
                            </div>
                        </div>
                        <div className="spec">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.95 15.88"
                                 className="plan-checkmark">
                                <path fill="none" stroke="#feb600" stroke-linecap="square" stroke-width="3.5"
                                      d="M19.47 2.47l-11.68 11-5.32-5"></path>
                            </svg>
                            <div className="spec-info">
                                <span className="title ">8 GB RAM</span>
                                <span className="subtitle "></span>
                            </div>
                        </div>
                        <div className="spec">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.95 15.88"
                                 className="plan-checkmark">
                                <path fill="none" stroke="#feb600" stroke-linecap="square" stroke-width="3.5"
                                      d="M19.47 2.47l-11.68 11-5.32-5"></path>
                            </svg>
                            <div className="spec-info"><span
                                className="title ">200 GB SSD</span> <span
                                className="subtitle "></span></div>
                        </div>
                        <div className="spec">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.95 15.88"
                                 className="plan-checkmark">
                                <path fill="none" stroke="#feb600" stroke-linecap="square" stroke-width="3.5"
                                      d="M19.47 2.47l-11.68 11-5.32-5"></path>
                            </svg>
                            <div className="spec-info"><span className="title ">200 Mbit/s Port</span>
                                <span className="subtitle "></span></div>
                        </div>
                        <div className="spec">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.95 15.88"
                                 className="plan-checkmark">
                                <path fill="none" stroke="#feb600" stroke-linecap="square" stroke-width="3.5"
                                      d="M19.47 2.47l-11.68 11-5.32-5"></path>
                            </svg>
                            <div className="spec-info"><span
                                className="title ">1 Snapshot</span> <span
                                className="subtitle "></span></div>
                        </div>
                    </div>
                    <div className="cta-container">
                        <a href="en/vps/vps-s-ssd/" className="primary product-cta notranslate">Select</a>
                    </div>
                </div>
                { is_best? <div className="spacer"></div> : null }
            </div>
        );
    }
}

export default Plan;