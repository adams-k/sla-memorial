import { sponsorsMap } from "../assets/Data.jsx"

const Sponsors = () => {
    const link = sponsorsMap.map(([name, url]) => (
        <div className="text-center text-pretty"><a href={url} rel="external nofollow noopener" target="_blank" className="underline hover:text-secondary"><p>{name}</p></a></div>
    ))

    return (
        <section className="lg:mb-0 xs:mb-20">
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
                <div className="flex flex-row mx-auto justify-between lg:w-[50vw] xs:w-[90vw] xs:gap-10 lg:gap-0">
                    <a href="https://www.ringersroostpa.com/" rel="external nofollow noopener" target="_blank" className="hover:brightness-50"><img src="/ringers.png" className="w-32"/></a>
                    <a href="https://www.facebook.com/heckenbergers/" rel="external nofollow noopener" target="_blank" className="hover:brightness-50"><img src="/heckenbergers.jpg" className="w-32"/></a>
                    <h3><a href="https://www.facebook.com/adamssalads/" rel="external nofollow noopener" target="_blank" className="underline hover:text-secondary">Adams'<br></br>Salads</a></h3>
                    <a href="https://www.allentownfarmersmarket.com/" rel="external nofollow noopener" target="_blank" className="hover:brightness-50"><img src="/farmersmarket.webp" className="w-32"/></a>
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