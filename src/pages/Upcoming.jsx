const Upcoming = () => {
    return (
        <section>
            <div className="flex">
                <div>
                    <img src="/image7.jpeg" className="brightness-50 h-[25vh] lg:h-[25em] w-[100vw] mb-10" alt="A view of people playing cornhole."/>
                    <h1>Upcoming Events</h1>
                    <h4 className="text-center mx-auto w-[75%]">
                        Our next event will be Saturday, June 7th, 2025 at Ringer's Roost in Allentown. The first tier of the bracket will begin at 9:30 a.m.
                    </h4>
                </div>
            </div>
            <div className="flex py-8 lg:py-16 mx-auto w-[90vw] lg:w-[75vw] mb-32 lg:mb-5">
                <div class="relative overflow-x-auto mx-auto shadow-md rounded-lg bg-white">
                    <h2>Registration</h2>
                    <p className="text-center mx-auto w-[75%] mb-4">Registration is currently open! Please contact us via email if you are interested in signing up!</p>
                    <div>
                        <table class="w-full text-sm text-left rtl:text-right bg-gray-300 text-gray-500 mx-auto rounded-lg">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        Date
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Start Time
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Location
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Entry Fee
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Available Spots
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Registrants
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white border-b hover:bg-gray-50">
                                    <td className="px-6 py-4">
                                    06/07/2025
                                    </td>
                                    <td className="px-6 py-4">
                                    9:30 AM
                                    </td>
                                    <td className="px-6 py-4">
                                        Ringer's Roost
                                    </td>
                                    <td className="px-6 py-4">
                                        <span>$20/person</span>
                                        <p>$40/team</p>
                                    </td>
                                    <td className="px-6 py-4">
                                        N/A
                                    </td>
                                    <td className="px-6 py-4">
                                        N/A
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Upcoming;