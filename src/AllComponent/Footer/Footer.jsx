
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa";
import { FaCcApplePay } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
                <nav className="grid grid-flow-col gap-4">
                    <a className="link link-hover">About us</a>
                    <Link className="link link-hover" to="/contact">Contact Us</Link>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <div className="grid grid-flow-col gap-4">
                        <a
                            href="https://twitter.com/yourprofile"
                            target="_blank"
                            rel="noopener noreferrer"

                        >
                            <FaSquareXTwitter className="w-12 h-8" />
                        </a>

                        <a
                            href="https://www.youtube.com/@gollachut2491"
                            target="_blank"
                            rel="noopener noreferrer"

                        >
                            <FaYoutube className="w-12 h-8" />
                        </a>

                        <a
                            href="https://www.facebook.com/yourpage"
                            target="_blank"
                            rel="noopener noreferrer"

                        >
                            <FaFacebook className="w-12 h-8" />
                        </a>
                    </div>
                </nav>
                <div className="flex gap-10">
                    <a href="https://bd.visa.com/" target="_blank" rel="noopener noreferrer">
                        <FaCcVisa className="text-3xl font-bold"></FaCcVisa>
                    </a>
                    <a href="https://www.paypal.com/bd/home" target="_blank" rel="noopener noreferrer">

                        <FaCcPaypal className="text-3xl font-bold"></FaCcPaypal>
                    </a>
                    <a href="https://www.ipay.com.bd/" target="_blank" rel="noopener noreferrer">

                        <FaCcApplePay className="text-3xl font-bold"></FaCcApplePay>
                    </a>
                </div>
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;