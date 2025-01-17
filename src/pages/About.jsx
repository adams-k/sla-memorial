import { Link } from "react-scroll";
import { RxDoubleArrowDown } from "react-icons/rx";
import { TECarousel, TECarouselItem } from "tw-elements-react";

const About = () => {
    return (
        <body>
            <section id="top" className="bg-gray-100">
                <div class="flex items-center justify-center py-8 lg:py-16 mx-auto w-[75vw] mb-10">
                    <div className="flex items-center justify-between gap-10">
                        <div className="float-left p-10 ">
                            <h2 className="mb-0 text-nowrap">In Loving Memory of</h2>
                            <h1 className=" text-nowrap">Scott L. Adams Sr.</h1>
                            <p className="text-pretty">
                                Our commemorative cornhole tournament takes place every summer in the name of Scott Adams Sr. 
                                Scott loved helping to host this tournament, and more importantly, he loved that all proceeds from the event are donated to his favorite charity, St. Jude Children's Research Hospital.</p>
                            <p>
                                For the last 15 years, Scott, his loving wife JoAnne, and their family have hosted a tournament as part of the Joe Muhl Memorial Foundation. Starting as a bowling tournament, the
                                last 4 years we have transitioned to a Cornhole Tournament, totaling $159,871 donated across the 15 years. After Scott's passing last summer, we hosted our last tournament as part of the
                                Joe Muhl Memorial Foundation, raising $15,035, our highest total yet.
                            </p>
                            <p>
                                The Scott Adams Sr. Memorial Fund is a Non-Profit that is 501-C-3 Certified. All donations are 100% tax deductible. <br></br>
                                Federal Tax Identification Number (EIN): 27-1488612
                            </p>
                            
                            <div className="flex items-center justify-between text-pretty about-links">
                                <div className="flex justify-center items-center">
                                    <Link to="tournament" spy={true} smooth={true} offset={-150} duration={500} className="underline hover:cursor-pointer hover:text-secondary text-nowrap">
                                        <div className="flex justify-center items-center">
                                        More about the Tournament <RxDoubleArrowDown />
                                        </div>
                                    </Link>
                                </div>
                                <div className="flex justify-center items-center">
                                    <Link to="scott" spy={true} smooth={true} offset={-150} duration={500} className="underline hover:cursor-pointer hover:text-secondary text-nowrap">
                                        <div className="flex justify-center items-center">
                                        More about Scott <RxDoubleArrowDown />
                                        </div>
                                    </Link>
                                </div>
                                <div className="flex justify-center items-center">
                                <Link to="board" spy={true} smooth={true} offset={-150} duration={500} className="underline hover:cursor-pointer hover:text-secondary text-nowrap">
                                        <div className="flex justify-center items-center">
                                            Board Members <RxDoubleArrowDown />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img src="/about.jpg" className="rounded-lg float-right"></img>
                        </div>
                    </div>
                </div>
            </section>
            <section id="tournament">
                <div>
                    <div className="flex items-center justify-between gap-10 w-[75vw] mx-auto mb-20 py-16">
                        <TECarousel ride="carousel">
                            <div className="relative overflow-hidden after:clear-both after:block after:content-[''] rounded-lg shadow-lg w-96 h-auto">
                            <TECarouselItem
                                itemID={1}
                                className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none">
                                <img src="/image4.jpeg" className="block w-full" alt="..."/>
                            </TECarouselItem>
                            <TECarouselItem itemID={2}
                                className="relative float-left hidden -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none">
                                <img src="/image5.jpeg" className="block w-full" alt="..."/>
                            </TECarouselItem>
                            <TECarouselItem itemID={3} className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none">
                                <img src="/image6.jpeg" className="block w-full" alt="..."/>
                            </TECarouselItem>
                            </div>
                        </TECarousel>
                        <div className="float-left p-10">
                            <h1>Cornhole Tournament</h1>
                            <p className="text-pretty">
                                This upcoming June will be the 5th year of us hosting a Cornhole Tournament, the first as the Scott Adams Sr. Memorial Fund. It is hosted at 
                                <a href="https://www.ringersroostpa.com/" rel="external nofollow noopener" target="_blank"> <u>Ringer's Roost,</u> </a>
                                one of Scott's favorite places to go and socialize. We are very thankful for Ringer's allowing us to use their location for the tournament.</p>
                            <p>
                                In 2009, Scott and JoAnne started a bowling tournament as an extension of the Joe Muhl Memorial Foundation. They would run this tournament for 11 years at the St. Francis Society in Allentown as well, donating proceeds to
                                the American Cancer Society and eventually transitioning to St. Jude Children's Research Hospital. Due to COVID-19 restrictions, the decision was made to change from bowling to cornhole in 2020. In the 15 years combined, we have raised
                                over $150,000 for cancer treatment and research.
                            </p>
                            <p>
                                For more information about the tournament, upcoming events and registration, please go to the <a href="/upcoming" className="underline">Upcoming Events Page.</a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="scott" className="bg-gray-100">
                <div>
                    <div className="flex items-center justify-between gap-10 w-[75vw] mx-auto mb-20 py-16">
                        <div className="float-left p-10">
                            <h1>Scott L. Adams Sr.</h1>
                            <p className="text-pretty">
                                Scott L. Adams Sr. was born on July 10th, 1957 to Anita and the late Raymond F.L. Adams III. He was married to JoAnne Adams for 46 years and they had two sons together, Scott Jr. and Michael. 
                                He would work for the City of Allentown as a Mechanic for over 20 years before retiring. In 1992, JoAnne and him opened Adams' Salads in the Allentown Fairgrounds Market. It is still open today, owned by
                                his youngest son, Michael.
                            </p>
                            <p>
                                Scott loved hanging out with his friends and family, and enjoying a Miller Lite while doing so. He could always be found making his rounds to various social clubs around the Lehigh Valley, like the Hogan's or East Allen Fire Co.
                                He was very well known and gained the name "Mr. Miller Lite of the Lehigh Valley." Scott also loved the beach, often vacationing on islands or his favorite beach, Wildwood.
                            </p>
                            <p>
                                Scott unfortunately passed away at the age of 66 on June 12th, 2024. He was surrounded by his loving family while at the Lehigh Valley Hospital. We all miss him very much and will continue to honor him
                                with this Memorial Fund.
                            </p>
                        </div>
                        <TECarousel ride="carousel">
                            <div className="relative overflow-hidden after:clear-both after:block after:content-[''] rounded-lg shadow-lg w-96 h-96">
                            <TECarouselItem itemID={1} className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none">
                                <img src="/poppop1.jpeg" className="block w-full" alt="..."/>
                            </TECarouselItem>
                            <TECarouselItem itemID={2} className="relative float-left hidden -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none object-center">
                                <img src="/poppop2.jpeg" className="block w-full" alt="..."/>
                            </TECarouselItem>
                            <TECarouselItem itemID={3} className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none">
                                <img src="/poppop3.jpeg" className="block w-full" alt="..."/>
                            </TECarouselItem>
                            </div>
                        </TECarousel>
                    </div>
                </div>
            </section>
            <section id="board">
                <div className="pb-32 pt-16">
                    <h1 className="mb-10">Board Members</h1>
                    <div className="flex items-center justify-between gap-10 w-[75vw] mx-auto mb-20 ">
                        <div>
                            <img src="/mommom.jpeg" className="rounded-full h-48 mb-3"/>
                            <div className="text-center">
                                <p className="mb-0">JoAnne Adams</p>
                                <p className="mb-0">Wife</p>
                                <p className="mb-0">President</p>
                            </div>
                        </div>
                        <div>
                            <img src="/dad.jpeg" className="rounded-full h-48 w-48 mb-3"/>
                            <div className="text-center">
                                <p className="mb-0">Scott Adams Jr.</p>
                                <p className="mb-0">Son</p>
                                <p className="mb-0">Vice-President</p>
                            </div>
                        </div>
                        <div>
                            <img src="/mikey.jpeg" className="rounded-full h-48 w-48 mb-3"/>
                            <div className="text-center">
                                <p className="mb-0">Mike Adams</p>
                                <p className="mb-0">Son</p>
                                <p className="mb-0">Board Member</p>
                            </div>
                        </div>
                        <div>
                            <img src="/scotty.jpeg" className="rounded-full h-48 w-48 mb-3"/>
                            <div className="text-center">
                                <p className="mb-0">Scott Adams III</p>
                                <p className="mb-0">Grandson</p>
                                <p className="mb-0">Treasurer</p>
                            </div>
                        </div>
                        <div>
                            <img src="/kyle.jpeg" className="rounded-full h-48 w-48 mb-3"/>
                            <div className="text-center">
                                <p className="mb-0">Kyle Adams</p>
                                <p className="mb-0">Grandson</p>
                                <p className="mb-0">IT Development Director</p>
                            </div>
                        </div>


                    </div>
                </div>
            </section>
        </body>
    )
}

export default About;