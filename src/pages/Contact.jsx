const Contact = () => {
    return (
        <section class="bg-gray-300 h-[85vh]">
        <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-black">Contact Us</h2>
            <p class="mb-8 lg:mb-16 font-light text-center text-black sm:text-xl">Looking to become a sponsor? Have any questions about the event or the website? Feel free to contact us at <u>scottadamssrmemorialfund@gmail.com</u> or send us a message below and we will get back to you!</p>
            <form method="POST" action="https://api.web3forms.com/submit "class="space-y-8">
            <input type="hidden" name="access_key" value="8dac073f-676f-4d3e-8543-d25853304812"/>
                <div>
                    <label for="email" class="block mb-2 text-sm font-medium text-black">Your email</label>
                    <input type="email" id="email" name="email" class="rounded-lg block w-full p-2.5 text-sm border bg-gray-400 border-black placeholder-black text-black focus:ring-primary-500 focus:border-primary-500 shadow-sm-light" placeholder="example@gmail.com" required/>
                </div>
                <div>
                    <label for="subject" class="block mb-2 text-sm font-medium text-baby">Subject</label>
                    <input type="text" id="subject" name="subject" class="block p-3 w-full text-sm rounded-lg border bg-gray-400 border-black placeholder-black text-black focus:ring-primary-500 focus:border-primary-500 shadow-sm-light" placeholder="Let us know how we can help you" required/>
                </div>
                <div class="sm:col-span-2">
                    <label for="message" class="block mb-2 text-sm font-medium text-black">Your message</label>
                    <textarea id="message" rows="6" name="message" class="block p-2.5 w-full text-sm rounded-lg shadow-sm border bg-gray-400 border-black placeholder-black text-black focus:ring-primary-500 focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                </div>
                <input type="hidden" name="redirect" value="https://scottadamssrmemorialfund.org/thanks"/>
                <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-black rounded-lg sm:w-fit focus:ring-4 focus:outline-none bg-secondary hover:bg-primary-700 focus:ring-primary-800">Send message</button>
            </form>
        </div>
      </section>
    )
}

export default Contact