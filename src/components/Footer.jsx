import PopUp from "./Newsletter";
import React from 'react';

const Footer = () => {
    return (
        <footer class="fixed bottom-0 left-0 z-20 w-full lg:flex pl-3 lg:items-center lg:justify-between lg:p-5 lg:h-[4em] bg-fifth">
            <span class="text-sm text-black sm:text-center"> Scott Adams Sr. Memorial Fund
            </span>
            <ul class="lg:flex lg:flex-wrap lg:mt-3 text-sm font-medium text-black mt-0 pb-3">
                <li>
                    <a href="https://www.paypal.com/ncp/payment/BBKH6STRCT75Y" rel="external nofollow noopener" target="_blank" class="hover:underline me-4 md:me-6" 
                    aria-label="Link to Donate Page">Donate</a>
                </li>
                <li>
                    <a href="https://www.facebook.com/groups/1250145466332451/" target="_blank" rel="noopener noreferrer" class="hover:underline me-4 md:me-6"
                    aria-label="Link to Facebook">Facebook</a>
                </li>
                <li>
                    <a href="/about" class="hover:underline me-4 md:me-6" aria-label="Link to About Page">About</a>
                </li>
                <li>
                    <a href="/contact" class="hover:underline me-4 md:me-6" aria-label="Link to Contact Page">Contact</a>
                </li>
                <li>
                    <PopUp />
                </li>
                <li>
                    <a href="/terms" class="hover:underline me-4 md:me-6" aria-label="Link to Terms and Conditions Page">Terms & Conditions</a>
                </li>
                <li>
                    <a href="/privacy" class="hover:underline" aria-label="Link to Privacy Policy Page">Privacy Policy</a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer;