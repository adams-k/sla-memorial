import { Link } from "react-scroll";
import { RxDoubleArrowDown } from "react-icons/rx";

const About = () => {
    return (
        <body>
            <section id="top">
                <div class="flex items-center justify-center py-8 lg:py-16 mx-auto w-[75vw]">
                    <div className="flex items-center justify-between gap-10">
                        <div className="float-left border p-5 border-solid border-gray-400 shadow-xl rounded-lg bg-secondary">
                            <h2 className="mb-0 text-nowrap">In Loving Memory of</h2>
                            <h1 className=" text-nowrap">Scott L. Adams Sr.</h1>
                            <p className="text-pretty">Our commemorative cornhole tournament takes place every summer in the name of Scott Adams Sr. 
                                Scott loved helping to host this tournament, as he spent his time grilling hot dogs for everyone who came to participate. 
                                All proceeds from the event are donated to his favorite charity, St. Jude Children's Research Hospital.</p>
                            <div className="flex items-center justify-between text-pretty">
                                <div className="flex justify-center items-center">
                                    <Link to="#tournament" smooth duration={500} className="underline">More about the Tournament</Link>
                                    <RxDoubleArrowDown />
                                </div>
                                <div className="flex justify-center items-center">
                                    <Link to="#scott" className="underline" smooth duration={500}>More about Scott</Link>
                                    <RxDoubleArrowDown />
                                </div>
                                <div className="flex justify-center items-center">
                                    <Link to="#board" className="underline" smooth duration={500}>Board Members</Link>
                                    <RxDoubleArrowDown />
                                </div>
                            </div>
                        </div>
                        <div>
                            <img src="/about.jpg" className="rounded-lg border-solid border-2 border-gray-800 float-right"></img>
                        </div>
                    </div>
                </div>
            </section>
            <section id="tournament">
                <div>
                    <h1>Cornhole Tournament</h1>
                </div>
            </section>
            <section id="scott">
                <div>
                    <h1>Scott L. Adams Sr.</h1>
                </div>
            </section>
            <section id="board">
                <div>
                    <h1>Board Members</h1>
                </div>
            </section>
        </body>
    )
}

export default About;