import { Link } from "react-scroll";
import { RxDoubleArrowDown } from "react-icons/rx";
import { TECarousel, TECarouselItem } from "tw-elements-react";

const About = () => {
    return (
        <body>
            <section id="top">
                <div className="lg:flex items-center justify-center py-8 lg:py-16 mx-auto w-[75vw] mb-10">
                    <div className="lg:flex lg:flex-nowrap items-center justify-between gap-10">
                        <div className="lg:float-left lg:p-10 p-0 w-[75vw] xs:text-center lg:text-left lg:w-full">
                            <h2 className="mb-0 text-nowrap">In Loving Memory of</h2>
                            <h1 className="text-nowrap">Scott L. Adams Sr.</h1>
                            <p className="text-pretty mb-2">
                                Our commemorative cornhole tournament takes place every summer in the name of Scott Adams Sr. 
                                Scott loved helping to host this tournament, and more importantly, he loved that all proceeds from the event are donated to his favorite charity, St. Jude Children's Research Hospital.</p>
                            <p className="text-pretty mb-2">
                                For the last 15 years, Scott, his loving wife JoAnne, and their family have hosted a tournament as part of the Joe Muhl Memorial Foundation. Starting as a bowling tournament, the
                                last 4 years we have transitioned to a Cornhole Tournament, totaling $159,871 donated across the 15 years. After Scott's passing last summer, we hosted our last tournament as part of the
                                Joe Muhl Memorial Foundation, raising $15,035, our highest total yet.
                            </p>
                            <p className="text-pretty mb-2">
                                The Scott Adams Sr. Memorial Fund is a Non-Profit that is 501-C-3 Certified. All donations are 100% tax deductible. <br></br>
                                Federal Tax Identification Number (EIN): 99-3907270
                            </p>
                            
                            <div className="lg:flex lg:flex-wrap items-center justify-between text-pretty about-links mt-4">
                                <div className="flex justify-center items-center mb-2">
                                    <Link to="tournament" spy={true} smooth={true} offset={-150} duration={500} className="underline hover:cursor-pointer hover:text-secondary text-nowrap">
                                        <div className="flex justify-center items-center">
                                        More about the Tournament <RxDoubleArrowDown />
                                        </div>
                                    </Link>
                                </div>
                                <div className="flex justify-center items-center mb-2">
                                    <Link to="scott" spy={true} smooth={true} offset={-150} duration={500} className="underline hover:cursor-pointer hover:text-secondary text-nowrap">
                                        <div className="flex justify-center items-center">
                                        More about Scott <RxDoubleArrowDown />
                                        </div>
                                    </Link>
                                </div>
                                <div className="flex justify-center items-center mb-2">
                                <Link to="board" spy={true} smooth={true} offset={-150} duration={500} className="underline hover:cursor-pointer hover:text-secondary text-nowrap">
                                        <div className="flex justify-center items-center">
                                            Board Members <RxDoubleArrowDown />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img src="/about.jpg" alt="Scott giving a thumbs up while holding a miller lite" 
                            className="rounded-lg float-right xs:mb-24 lg:mb-0"></img>
                        </div>
                    </div>
                </div>
            </section>
            <section id="tournament">
                <div className="lg:flex items-center justify-center py-8 lg:py-16 mx-auto w-[75vw] mb-10">
                    <div className="lg:flex lg:flex-nowrap items-center justify-between gap-10">
                        <div>
                            <TECarousel ride="carousel">
                                <div className="relative overflow-hidden after:clear-both after:block after:content-[''] rounded-lg shadow-lg xs:w-80 lg:w-96 h-auto -translate-x-[5%] mb-5">
                                    <TECarouselItem itemID={1} className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none">
                                        <img src="/image4.jpeg" className="block w-full" 
                                        alt="View of the tournament setup, with crowd of people, cornhole boards, and the hot dog station."/>
                                    </TECarouselItem>
                                    <TECarouselItem itemID={2} className="relative float-left hidden -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none">
                                        <img src="/image5.jpeg" className="block w-full" 
                                        alt="A side view of the crowd at the tournament, along with the prizes table."/>
                                    </TECarouselItem>
                                    <TECarouselItem itemID={3} className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none">
                                        <img src="/image6.jpeg" className="block w-full" 
                                        alt="A view of the players competing at cornhole."/>
                                    </TECarouselItem>
                                </div>
                            </TECarousel>
                        </div>
                        <div className="lg:float-left lg:p-10 p-0 w-[75vw] xs:text-center lg:text-left lg:w-full">
                            <h1>Cornhole Tournament</h1>
                            <p className="text-pretty mb-2">
                                This upcoming June will be the 5th year of us hosting a Cornhole Tournament, the first as the Scott Adams Sr. Memorial Fund. It is hosted at 
                                <a href="https://www.ringersroostpa.com/" rel="external nofollow noopener" target="_blank" className="hover:text-secondary"> <u>Ringer's Roost,</u> </a>
                                one of Scott's favorite places to go and socialize. We are very thankful for Ringer's allowing us to use their location for the tournament.</p>
                            <p className="text-pretty mb-2">
                                In 2010, Scott and JoAnne started a bowling tournament as an extension of the Joe Muhl Memorial Foundation. They would run this tournament for 11 years at the St. Francis Society in Allentown as well, donating proceeds to
                                the American Cancer Society for the first three years and then transitioning to St. Jude Children's Research Hospital. Due to COVID-19 restrictions, the decision was made to change from bowling to cornhole in 2021. In the 15 years combined, we have raised
                                over $150,000 for cancer treatment and research.
                            </p>
                            <p className="text-pretty mb-2">
                                In addition to the tournament, there is also a Chinese Auction with over a hundred prizes!
                            </p>
                            <p>
                                For more information about the tournament, upcoming events and registration, please go to the <a href="/upcoming" className="underline hover:text-secondary">Upcoming Events Page.</a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="scott">
                <div className="lg:flex items-center justify-center py-8 lg:py-16 mx-auto w-[75vw] mb-10">
                    <div className="lg:flex lg:flex-nowrap items-center justify-between gap-10">
                        <div className="lg:float-left lg:p-10 p-0 w-[75vw] xs:text-center lg:text-left lg:w-full">
                            <h1>Scott L. Adams Sr.</h1>
                            <p className="text-pretty mb-2">
                                Scott L. Adams Sr. was born on July 10th, 1957 to Anita and the late Raymond F.L. Adams III. He was married to JoAnne Adams for 46 years and they had two sons together, Scott Jr. and Michael. 
                                He would work for the City of Allentown as a Mechanic for over 20 years before retiring. In 1992, JoAnne and him opened Adams' Salads in the Allentown Fairgrounds Market. It is still open today, owned by
                                his youngest son, Michael.
                            </p>
                            <p className="text-pretty mb-2">
                                Scott loved hanging out with his friends and family, and enjoying a Miller Lite while doing so. He could always be found making his rounds to various social clubs around the Lehigh Valley, like the Hogan's or East Allen Fire Co.
                                He was very well known and gained the name "Mr. Miller Lite of the Lehigh Valley." Scott also loved the beach, often vacationing on islands or his favorite beach, Wildwood.
                            </p>
                            <p className="text-pretty mb-2">
                                Scott unfortunately passed away at the age of 66 on June 12th, 2024. He was surrounded by his loving family while at the Lehigh Valley Hospital. We all miss him very much and will continue to honor him
                                with this Memorial Fund.
                            </p>
                        </div>
                        <TECarousel ride="carousel">
                            <div className="relative overflow-hidden after:clear-both after:block after:content-[''] rounded-lg shadow-lg xs:w-80 lg:w-96 xs:h-80 lg:h-96 -translate-x-[5%]">
                            <TECarouselItem itemID={1} className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none">
                                <img src="/poppop1.jpeg" className="block w-full" 
                                alt="A picture of Scott holding his hands up at the beach."/>
                            </TECarouselItem>
                            <TECarouselItem itemID={2} className="relative float-left hidden -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none object-center">
                                <img src="/poppop2.jpeg" className="block w-full" 
                                alt="A picture of Scott, with his wife Joanne and 2 of his grandchildren at the beach."/>
                            </TECarouselItem>
                            <TECarouselItem itemID={3} className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none">
                                <img src="/poppop3.jpeg" className="block w-full" 
                                alt="A picture of Scott and his wife Joanne leaning over the boardwalk railing at the beach."/>
                            </TECarouselItem>
                            </div>
                        </TECarousel>
                    </div>
                </div>
            </section>
            <section id="board">
                <div className="pb-32 pt-16">
                    <h1 className="lg:mb-10">Board Members</h1>
                    <div className="lg:flex items-center justify-between gap-2 lg:gap-10 w-[90vw] mx-auto mb-10">
                        <div>
                            <img src="/mommom.jpeg" className="rounded-full h-48 mb-3 lg:ml-[0%] xs:ml-[25%]" alt="A headshot of Joanne Adams"/>
                            <div className="text-center mb-10">
                                <p className="mb-0">JoAnne Adams</p>
                                <p className="mb-0">Wife</p>
                                <p className="mb-0">President</p>
                            </div>
                        </div>
                        <div>
                            <img src="/dad.jpg" className="rounded-full h-48 w-48 mb-3 lg:ml-[0%] xs:ml-[25%]" alt="A headshot of Scott Adams Jr."/>
                            <div className="text-center mb-10">
                                <p className="mb-0">Scott Adams Jr.</p>
                                <p className="mb-0">Son</p>
                                <p className="mb-0">Vice-President</p>
                            </div>
                        </div>
                        <div>
                            <img src="/mikey.JPG" className="rounded-full h-48 w-48 mb-3 lg:ml-[0%] xs:ml-[25%]" alt="A headshot of Mike Adams"/>
                            <div className="text-center mb-10">
                                <p className="mb-0">Mike Adams</p>
                                <p className="mb-0">Son</p>
                                <p className="mb-0">Board Member</p>
                            </div>
                        </div>
                        <div>
                            <img src="/scotty.jpeg" className="rounded-full h-48 w-48 mb-3 lg:ml-[0%] xs:ml-[25%]" alt="A headshot of Scott Adams III"/>
                            <div className="text-center mb-10">
                                <p className="mb-0">Scott Adams III</p>
                                <p className="mb-0">Grandson</p>
                                <p className="mb-0">Treasurer</p>
                            </div>
                        </div>
                        <div>
                            <img src="/kyle.jpeg" className="rounded-full h-48 w-48 mb-3 lg:ml-[0%] xs:ml-[25%]" alt="A headshot of Kyle Adams"/>
                            <div className="text-center mb-10">
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