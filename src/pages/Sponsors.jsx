import { sponsorsMap } from "../assets/Data.jsx"

const Sponsors = () => {
    const link = sponsorsMap.map(([name, url]) => (
        <a href={url} rel="external nofollow noopener" target="_blank" className="underline hover:text-secondary">{name}</a>
    ))

    return (
        <section className="lg:mb-0 xs:mb-32">
            <div className="flex">
                <div>
                    <img src="/image1.jpeg" className="brightness-50 h-[25vh] lg:h-[25em] w-[100vw] mb-10"></img>
                    <h1>Thank You to Our Sponsors!</h1>
                </div>
            </div>
            <div className="text-center lg:w-[50vw] mx-auto">
                <p>
                    We are extremely grateful for every one of our sponsors, as this tournament would not be as big of a success without them. We offer our deepest appreciation for your support in making this memorial fund possible!
                </p>
            </div>
            <div className="xs:mb-5 lg:10">
                <h2 className="mb-5">Top Sponsors</h2>
                <div className="lg:flex lg:flex-row xs:grid xs:grid-cols-3 mx-auto justify-between lg:w-[75vw] xs:w-[90vw] xs:gap-5 lg:gap-0">
                    <a href="https://www.ringersroostpa.com/" rel="external nofollow noopener" target="_blank" className="hover:brightness-50" data-tooltip-target="tooltip-top" data-tooltip-placement="top" ><img src="/ringers.png" className="w-32 h-32"/></a>
                    <a href="https://www.facebook.com/heckenbergers/" rel="external nofollow noopener" target="_blank" className="hover:brightness-50"><img src="/heckenbergers.jpg" className="w-32 h-32"/></a>
                    <a href="https://www.facebook.com/adamssalads/" rel="external nofollow noopener" target="_blank" className="hover:brightness-50"><img src="/adamssalads.jpg" className="w-32 h-32"/></a>
                    <a href="https://bankobeverage.com/" rel="external nofollow noopener" target="_blank" className="hover:brightness-50"><img src="/banko.png" className="w-32 h-32"/></a>
                    <a href="https://www.facebook.com/p/Hogans-of-Allentown-PA-100063715533723/" rel="external nofollow noopener" target="_blank" className="hover:brightness-50"><img src="/hogans.jpg" className="w-32 h-32"/></a>
                    <a href="https://www.facebook.com/p/Cetronia-Fire-Company-Social-Club-100064243116123/" rel="external nofollow noopener" target="_blank" className="hover:brightness-50"><img src="/centronia.jpg" className="w-32 h-32"/></a>
                    <a href="https://www.facebook.com/p/Rosemont-Fire-Company-100063199991071/" rel="external nofollow noopener" target="_blank" className="hover:brightness-50"><img src="/rosemont.jpg" className="w-32 h-32"/></a>
                    <a href="https://www.llsgraphics.com/" rel="external nofollow noopener" target="_blank" className="hover:brightness-50"><img src="/lls-graphics.png" className="w-32 h-32"/></a>
                    <a href="https://www.renderimpact.com" rel="external nofollow noopener" target="_blank" className="hover:brightness-50"><img src="/render_impact.jpg" className="w-32 h-32"/></a>
                </div>
            </div>
            <div className="mb-5">
                <h3>All Sponsors</h3>
            </div>
            <div className="grid grid-cols-3 grid-flow-row gap-4 lg:w-[75vw] mx-auto text-center text-pretty">
                {link}
            </div>
            
        </section>
    )
}

export default Sponsors;