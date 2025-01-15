const Footer = () => {
    return (
        <footer class="fixed bottom-0 left-0 z-20 w-full p-0 shadow md:flex md:items-center md:justify-between md:p-5 bg-black/80 border-black/80 h-[8vh]">
            <span class="text-sm text-white sm:text-center"> Scott Adams Sr. Memorial Fund
            </span>
            <ul class="flex flex-wrap mt-3 text-sm font-medium text-white sm:mt-0">
                <li>
                    <a href="https://www.facebook.com/groups/1250145466332451/" class="hover:underline me-4 md:me-6">Facebook</a>
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