import { donationData } from "../assets/Data";

const Past = () => {
    const rows = donationData.map(([year, type, participants, entry, auction, donated, total]) => (
        <tr class="bg-white border-b hover:bg-gray-50">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                {year}
            </th>
            <td class="px-6 py-4">
                {type}
            </td>
            <td class="px-6 py-4">
                {participants}
            </td>
            <td class="px-6 py-4">
                {entry}
            </td>
            <td class="px-6 py-4">
                {auction}
            </td>
            <td class="px-6 py-4">
                {donated}
            </td>
            <td class="px-6 py-4 font-bold">
                {total}
            </td>
        </tr>
        ))

    return (
        <section>
            <div className="flex mb-10">
                <div>
                    <img src="/image8.jpeg" className="brightness-50 h-[25vh] lg:h-[25em] w-[100vw] mb-10"
                    alt="A picture of the prizes table, displaying multiple baskets."/>
                    <h1>Past Events</h1>
                    <p className="text-center mx-auto lg:w-[50%]">
                        Since 2010, we have hosted 15 tournaments under the Joe Muhl Memorial Foundation. In those years, we have raised money from entry fees, 50/50 raffles, prize auctions, and gifts to the organization.
                        100% of proceeds are donated directly to charity. The table below describes all $159,871 raised so far!
                    </p>
                </div>
            </div>
            <div className="relative overflow-x-auto shadow-md rounded-lg bg-white w-[95%] mx-auto mb-32 lg:mb-3">
                <table className="w-full text-sm text-left rtl:text-right bg-gray-300 text-gray-500 mx-auto rounded-lg">
                <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white">
                    Total Donations
                    <p className="mt-1 text-sm font-normal text-gray-500">Check out a breakdown of how much we have donated, separated by year and organized by how the funds were raised.</p>
                    <p className="text-xs font-normal text-gray-500"> The "Other" row totals the amount raised by other branches of the Joe Muhl Memorial Foundation.</p>
                </caption>
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Year
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Tournament
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Participants
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Entry Fees
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Auction
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Donated
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Total Raised
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                    <tfoot>
                        <tr class="font-semibold text-gray-900">
                            <th scope="row" class="px-6 py-3 text-base">Total</th>
                            <td class="px-6 py-3"></td>
                            <td class="px-6 py-3">1,149</td>
                            <td class="px-6 py-3">$22,660</td>
                            <td class="px-6 py-3">$30,420</td>
                            <td class="px-6 py-3">$70,750</td>
                            <td class="px-6 py-3">$181,892</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </section>
    )
}

export default Past;