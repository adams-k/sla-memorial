import { Link } from "react-scroll";
import { RxDoubleArrowDown } from "react-icons/rx";
import image4 from "/image4.jpeg";

const About = () => {
    return (
        <body>
            <div className="bg-banner">

            </div>
            <section id="top">
                <div class="flex items-center justify-center py-8 lg:py-16 mx-auto w-[75vw]">
                    <div className="flex items-center justify-between gap-10">
                        <div className="float-left border p-5 border-solid border-gray-400 shadow-xl rounded-lg bg-secondary">
                            <h2 className="mb-0 text-nowrap">In Loving Memory of</h2>
                            <h1 className=" text-nowrap">Scott L. Adams Sr.</h1>
                            <p className="text-pretty">
                                Our commemorative cornhole tournament takes place every summer in the name of Scott Adams Sr. 
                                Scott loved helping to host this tournament, and more importantly, he loved that all proceeds from the event are donated to his favorite charity, St. Jude Children's Research Hospital.</p>
                            <p>
                                For the last 15 years, Scott, his loving wife JoAnne, their family have hosted a tournament as part of the Joe Muhl Memorial Foundation. Starting as a bowling tournament, the
                                last 4 years we have transitioned to a Cornhole Tournament, totaling $159,871 donated across the 15 years. After Scott's passed last summer, we hosted our last tournament as part of the
                                Joe Muhl Memorial Foundation, raising $15,035, our highest total yet.
                            </p>
                            
                            <div className="flex items-center justify-between text-pretty about-links">
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
                            <img src="./src/assets/about.jpg" className="rounded-lg border-solid border-2 border-gray-800 float-right"></img>
                        </div>
                    </div>
                </div>
            </section>
            <section id="tournament">
                <div>
                    <h1>Cornhole Tournament</h1>
                    <div id="custom-controls-gallery" class="relative w-full" data-carousel="slide">
                    
                        <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
                
                            <div class="hidden duration-700 ease-in-out" data-carousel-item>
                                <img src={image4} class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt=""/>
                            </div>
                            
                            <div class="hidden duration-700 ease-in-out" data-carousel-item="active">
                                <img src="./src/assets/image5.jpeg" class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt=""/>
                            </div>
                           
                            <div class="hidden duration-700 ease-in-out" data-carousel-item>
                                <img src="./src/assets/image6.jpeg" class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt=""/>
                            </div>
                            
                            <div class="hidden duration-700 ease-in-out" data-carousel-item>
                                <img src="./src/assets/image4.jpeg" class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt=""/>
                            </div>
                            
                            <div class="hidden duration-700 ease-in-out" data-carousel-item>
                                <img src="./src/assets/image4.jpeg" class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt=""/>
                            </div>
                        </div>
                        <div class="flex justify-center items-center pt-4">
                            <button type="button" class="flex justify-center items-center me-4 h-full cursor-pointer group focus:outline-none" data-carousel-prev>
                                <span class="text-gray-400 hover:text-gray-900 dark:hover:text-white group-focus:text-gray-900 dark:group-focus:text-white">
                                    <svg class="rtl:rotate-180 w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
                                    </svg>
                                    <span class="sr-only">Previous</span>
                                </span>
                            </button>
                            <button type="button" class="flex justify-center items-center h-full cursor-pointer group focus:outline-none" data-carousel-next>
                                <span class="text-gray-400 hover:text-gray-900 dark:hover:text-white group-focus:text-gray-900 dark:group-focus:text-white">
                                    <svg class="rtl:rotate-180 w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                    </svg>
                                    <span class="sr-only">Next</span>
                                </span>
                            </button>
                        </div>
                    </div>


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