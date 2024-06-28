import emailjs from "emailjs-com";
import React, { useRef, useState } from "react";
import { Helmet } from "react-helmet";

const EmailSent = () => {
  return (
    <div className="flex justify-center items-center z-20 fixed inset-0 top-[450px] left-[50%] text-xl">
      <div className="h-8 w-auto bg-green-500 px-3 inset-0 relative left-[-50%]">
        Your message has been sent!
      </div>
    </div>
  );
};

const SendEmail = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gwrkpqr",
        "template_lqby9mf",
        form.current,
        "2wUls391byVjGM2ob"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [visible, setVisibility] = useState(false);

  return (
    <>
      <Helmet>
        <title>Send Mail - Your Name</title>
        <meta
          name="description"
          content="Send an email to Aklesh Dahal with your name, subject, and message."
        />
      </Helmet>
      <div className="px-4 max-w-[100vw]" id="mail" data-aos="fade-up">
        <div className="justify-center flex group text-black transition duration-300 rounded-lg">
          <div className="w-40 rounded-lg bg-purple-400 py-1  text-3xl">
            Send Mail
          </div>
        </div>
        <div className="flex bg-[#9CC0E7] rounded-md space-y-10 text-xl my-4">
          <div className="flex flex-1 flex-col space-y-1">
            <form
              ref={form}
              onSubmit={sendEmail}
              className={
                "text-2xl font-extralight text-white flex flex-col mx-2 px-2 py-5 h-auto"
              }
            >
              <label for = 'name'>Name</label>
              <input
                id = "name"
                value={name}
                type="text"
                name="name"
                className="h-[30px] bg-transparent border-x-0 border-black focus:outline-none text-lg"
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
              <span className="mt-2 mb-3 h-[2px] bg-white mr-1"></span>
              <label for = 'subject'>Subject</label>
              <input
                onChange={(event) => {
                  setSubject(event.target.value);
                }}
                id='subject'
                value={subject}
                type="text"
                name="subject"
                className="h-[30px] bg-transparent focus:outline-none text-lg"
              />
              <span className="mt-2 mb-3 h-[2px] bg-white mr-1"></span>
              <label>Message</label>
              <textarea
                value={message}
                onChange={(event) => {
                  setMessage(event.target.value);
                }}
                name="message"
                className="my-5 rounded-md text-black h-[150px] border-0 w-[80%] self-center text-lg"
              />
              <input
                type="submit"
                value="Send"
                className="bg-white text-black md:w-[10%] h-10 px-1 rounded-md cursor-pointer mb-10 inline-block self-center font-bold"
                onClick={() => {
                  setMessage("");
                  setSubject("");
                  setName("");
                  setVisibility(true);
                  setTimeout(() => {
                    setVisibility(false);
                  }, 5000);
                }}
              />
            </form>
          </div>
        </div>
      </div>
      {visible ? <EmailSent /> : <div></div>}
    </>
  );
};

export default SendEmail;
