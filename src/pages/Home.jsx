const Home = () => {
    return (
        <section>
            <div className="flex justify-center mx-auto">
                <img src="/image0.jpeg" className="brightness-50 h-[40vh] w-[100vw]"></img>
                <img src="/logo.png" className="absolute translate-y-[15%]"/>
            </div>
            <div className="flex flex-row justify-between gap-10 w-[50vw] mx-auto mt-32 mb-8 text-center text-balance">
                <div>
                    <h2 className="mb-0">100+</h2>
                    <p>Participants every year</p>
                </div>
                <div>
                    <h1 className="mb-0">150+</h1>
                    <p className="">Thousand dollars donated towards cancer treatment and research</p>
                </div>
                <div>
                    <h2 className="mb-0">15+</h2>
                    <p>Years of Tournaments</p>
                </div>
            </div>
            <div className="text-center">
                <h1>Help us to honor Scott L. Adams Sr.</h1>
                <p>
                    100% of all donations go to <a href="https://www.stjude.org/" rel="external nofollow noopener" target="_blank" className="underline">St Jude Children's Research Hospital.</a> For
                    more information, check out our About Us section or Contact Us!
                </p>
            </div>
            <div className="flex flex-row justify-between gap-10 w-[25%] mx-auto pb-24">
                <a href="/about">
                    <button type="button" className="py-3 px-5 text-sm font-bold text-center text-black rounded-lg sm:w-fit focus:ring-4 focus:outline-none bg-secondary hover:bg-primary focus:ring-primary-800">About Us</button>
                </a>
                <a href="/contact">
                    <button type="button" className="py-3 px-5 text-sm font-bold text-center text-black rounded-lg sm:w-fit focus:ring-4 focus:outline-none bg-secondary hover:bg-primary focus:ring-primary-800">Contact Us</button>
                </a>
            </div>
        </section>
    )
}

export default Home;
