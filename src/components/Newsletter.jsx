import React, { useState } from "react";
import { MdClose } from "react-icons/md";

const PopUp = () => {
  // create state `open` with default as false
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* click of button toggles `open` value therefore visibility */}
      <button onClick={() => setOpen(!open)} type="button" className="btn btn-primary hover:underline me-4 md:me-6" data-toggle="modal" data-target="Newsletter">
        Newsletter
      </button>
      {/* If open is true show your <div /> */}
      {open && (
        <div className="modal fade" id="Newsletter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="absolute w-[95%] h-72 lg:w-[30%] lg:h-64 rounded-xl shadow-2xl border-2 border-solid border-gray-300 m-0 z-40 float-right right-2 bottom-20 lg:bottom-16">
                <button onClick={() => setOpen(!open)} type="button" className="absolute right-0 mr-2 mt-2 text-2xl z-50" data-toggle="modal" data-target="Newsletter">
                    <MdClose/>
                </button>
                <iframe src="https://embeds.beehiiv.com/09a7a14e-bfc2-4249-9288-2358856f8d26" alt="Embed to sign up for newsletter. Takes input of email." 
                    className="h-full w-full rounded-lg"></iframe>
            </div>
        </div>
      )}
    </>
  );
};

export default PopUp;