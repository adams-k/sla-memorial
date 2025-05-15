const Home = () => {
    return (
        <section className="lg:mb-0 xs:mb-32">
            <div className="flex justify-center mx-auto">
                <img src="/image0.jpeg" className="brightness-50 h-[25vh] lg:h-[25em] w-[100vw]"
                alt="A top down view of the event, including the cornhole boards, prizes table, and a crowd of others."/>
                <img src="/logo.png" className="absolute translate-y-[0%] lg:translate-y-[15%]" 
                alt="Logo for the fund, displaying a palm tree on an island at sunset and underneath it says Scott Adams Sr
                Memorial Fund."/>
            </div>
            <div className="flex flex-row justify-between align-middle gap-5 w-[75vw] lg:w-[45vw] mx-auto xs:mt-32 lg:mt-24 text-center text-balance">
                <div>
                    <h2>100+</h2>
                    <p>Participants every year</p>
                </div>
                <div>
                    <h2>150+</h2>
                    <p>Thousand dollars donated towards cancer treatment and research</p>
                </div>
                <div>
                    <h2>15+</h2>
                    <p>Years of Tournaments</p>
                </div>
            </div>
            <div className="text-center w-[75vw] mx-auto mb-4 align-bottom">
                <h1>Help us honor Scott L. Adams Sr.</h1>
                <p>
                    100% of all donations go to <a href="https://www.stjude.org/" aria-label="Link to St. Jude's Website" rel="external nofollow noopener" target="_blank" className="underline hover:text-primary text-[100%]">St Jude Children's Research Hospital.</a> For
                    more information, check out our About Us section or Contact Us!
                </p>
                <p>Federal Tax Identification Number (EIN): 99-3907270</p>
            </div>
            <div className="flex flex-row justify-between gap-10 w-[75vw] lg:w-[40%] mx-auto">
                <a href="/about" aria-label="Link to About Page">
                    <button type="button" className="py-3 px-5 text-sm font-bold text-center text-black rounded-lg sm:w-fit focus:ring-4 focus:outline-none bg-secondary hover:bg-primary focus:ring-primary-800">About Us</button>
                </a>
                <a href="https://www.paypal.com/ncp/payment/BBKH6STRCT75Y" rel="external nofollow noopener" target="_blank" aria-label="Link to PayPal Donation">
                    <button type="button" className="py-3 px-5 text-sm font-bold text-center text-black rounded-lg sm:w-fit focus:ring-4 focus:outline-none bg-secondary hover:bg-primary focus:ring-primary-800">Donate on PayPal</button>
                </a>
                <a href="/contact" aria-label="Link to Contact Page">
                    <button type="button" className="py-3 px-5 text-sm font-bold text-center text-black rounded-lg sm:w-fit focus:ring-4 focus:outline-none bg-secondary hover:bg-primary focus:ring-primary-800">Contact Us</button>
                </a>
            </div>
            
        </section>
    )
}

export default Home;
