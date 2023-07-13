import React, {useEffect, useState} from 'react';
import content from '../components/styles/content.css';


const PackCard = () => {
    return (
        <div className="pack_card">
            <div className="banner">
                <span className="banner_tag">most popular</span>
            </div>
            <div className="pack_name">PLATINUM</div>

            <p className="description">Infectious Diseases</p>

            <div className="lists">
                <div className="list">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Masa Perlindungan: Seumur Hidup</span>
                </div>
                <div className="list">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Santunan Meninggal Dunia <b> 0,69 ETH</b></span>
                </div>
                <div className="list">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Dapat NFT Platinum</span>
                </div>
                <div className="list">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Full support</span>
                </div>
                <div className="list">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Validasi: All Region</span>
                </div>
            </div>

            <div className="bottom">
                <div className="price_container">
                    <span className="devise"></span>
                    <span className="price">0.08 ETH</span>
                    <span className="date">/month</span>
                </div>
                <a  className="btn" href="#">Buy Insurance</a>
            </div>
        </div>
    );
};

export default PackCard;