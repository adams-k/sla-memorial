const Footer = () => {
    return (
        <footer class="fixed bottom-0 left-0 z-20 w-full p-0 shadow-2xl border-solid rounded-xl border-black md:flex md:items-center md:justify-between md:p-5 bg-gray-50">
            <span class="text-sm text-black sm:text-center"> Scott Adams Sr. Memorial Fund
            </span>
            <ul class="flex flex-wrap mt-3 text-sm font-medium text-black sm:mt-0 sm:pb-3">
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