import React from 'react'
// import Logo from '../src/Assets/Logo.png';
import { HiOutlineBars3 }  from "react-icons/hi2";
import {useState, useEffect} from "react";
import {BsPerson} from "react-icons/bs";


const Navbar = () => {

    //WALLET CONNECTION LOGIC
    const [walletAddress, setwalletAddress] = useState("");

    useEffect(() => {
        getCurrentWalletConnected();
        addWalletListener();
    });

    const connectWallet = async() => {
        if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
            try {
                // METAMASK IS INSTALLED
                const accounts = await window.ethereum.request({ method: "eth_requestAccounts"});
                setwalletAddress(accounts[0]);
            } catch(err) {
                console.error(err.message);
            }
        } else {
            // METAMASK IS NOT INSTALLED
            console.log("Please Install MetaMask");
        }
    }

    const getCurrentWalletConnected = async() => {
        if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
            try {
                // METAMASK IS INSTALLED
                const accounts = await window.ethereum.request({ method: "eth_accounts"});
                if (accounts.length > 0){
                    setwalletAddress(accounts[0]);
                    console.log(accounts[0]);
                } else {
                    console.log("Connect to MetaMask using the Connect Button")
                }
            } catch(err) {
                console.error(err.message);
            }
        } else {
            // METAMASK IS NOT INSTALLED
            console.log("Please Install MetaMask");
        }
    }

    const addWalletListener = async() => {
        if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
            window.ethereum.on("accountChanged", (accounts) => {
                setwalletAddress(accounts[0]);
                console.log(accounts[0]);
            });
        } else {
            // METAMASK IS NOT INSTALLED
            setwalletAddress("");
            console.log("Please Install MetaMask");
        }
    }


    const [setOpenMenu] = useState(false)

    return (
        <nav>
            <div className= "nav-logo-container">
                {/*<img src={Logo} alt="" />*/}
                <h2>
                    <span>O</span>pen
                    Insurance
                </h2>
            </div>

            <div className= "navbar-links-container" >
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Contact</a>
                <a href="">Subscription</a>
                <a href="">Claim</a>
                <a href="">
                    <BsPerson className="navbar-cart-icon"></BsPerson>
                </a>
                <button  className="primary-button" onClick={connectWallet}>
                    {walletAddress && walletAddress.length > 0 ? `Connected: ${walletAddress.substring(0, 6)}...${walletAddress.substring(38)}` : "Connect to Wallet"}
                </button>
            </div>

        </nav>
);
};


export default Navbar;