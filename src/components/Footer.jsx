import PopUp from "./Newsletter";
import React from 'react';

const Footer = () => {
    return (
        <footer class="fixed bottom-0 left-0 z-20 w-full lg:flex pl-3 lg:items-center lg:justify-between lg:p-5 bg-gray-200 lg:h-[4em]">
            <span class="text-sm text-black sm:text-center"> Scott Adams Sr. Memorial Fund
            </span>
            <ul class="lg:flex lg:flex-wrap lg:mt-3 text-sm font-medium text-black mt-0 pb-3">
                <li>
                    <a href="https://www.facebook.com/groups/1250145466332451/" target="_blank" rel="noopener noreferrer" class="hover:underline me-4 md:me-6">Facebook</a>
                </li>
                <li>
                    <a href="/about" class="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="/contact" class="hover:underline me-4 md:me-6">Contact</a>
                </li>
                <li>
                    <PopUp />
                </li>
                <li>
                    <a href="/terms" class="hover:underline me-4 md:me-6">Terms & Conditions</a>
                </li>
                <li>
                    <a href="/privacy" class="hover:underline">Privacy Policy</a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer