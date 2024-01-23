import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

   

    emailjs
      .sendForm(
        "service_u0qo7k9",
        "template_8odw0e8",
        form.current,
        "Pznp8220NptEBxwlx"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Sent!');
          form.current.reset();
          console.log("message sent");

        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section className="bg-green-100">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-black-900 ">
          Contact Us
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-900  sm:text-xl">
          Got a technical issue? Want to send feedback? Need details about our
          Business plan? Let us know.
        </p>
        <p>✉️ rashmiiyengar1002@gmail.com</p>
        <form ref={form} action="#" className="space-y-8" onSubmit={sendEmail}>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your Name
            </label>
            <input
              type="name"
              id="name"
              name="to_name"
              className="shadow-sm bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 text-gray-900 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Name"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900  "
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              name="to_email"
              className="shadow-sm bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Andy@gmail.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Subject
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 "
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Your message
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              className="block w-full p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            type="submit"
            className=" m-4 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
