const Thanks = () => {
    return (
        <section className="h-[90vh]">
        <div class="py-8 lg:py-16 px-4 mx-auto my-auto max-w-screen-md flex flex-col items-center">
            <h1>Thank you for contacting us!</h1>
            <p class="mb-8 lg:mb-16 font-light text-center text-black sm:text-xl">
                Be on the lookout for an email from <u>scottadamssrmemorialfund@gmail.com</u>! We will get back to you within a few days.
            </p>
            <a href="/">
                <button type="button" className="py-3 px-5 text-sm font-bold text-center text-black rounded-lg sm:w-fit focus:ring-4 focus:outline-none bg-secondary hover:bg-primary focus:ring-primary-800">Back to Home</button>
            </a>
        </div>
      </section>
    )
}

export default Thanks;