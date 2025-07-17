import React from 'react';

const Contact = () => {
  return (
    <>
      <section id="Contact" className="max-h-screen bg-base-100 flex items-center justify-center px-4 my-12">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="fade-up-scroll bg-base-200 rounded-box p-6 shadow-md">
            <h1 className="text-4xl md:text-5xl font-bold text-base-content">
              Get in touch
            </h1>
            <p className="text-lg mt-2 text-base-content/70">
              Fill in the form to start a conversation
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-4">
                <span className="text-2xl">
                  📍
                </span>
                <p className="font-semibold text-base-content">
                  Acme Inc, Street, State,<br />Postal Code
                </p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl">
                  📞
                </span>
                <p className="font-semibold text-base-content">
                  +44 1234567890
                </p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl">
                  ✉️
                </span>
                <p className="font-semibold text-base-content">
                  info@acme.org
                </p>
              </div>
            </div>
          </div>
          <form className="fade-up-scroll bg-base-200 rounded-box p-6 shadow-md flex flex-col gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="input input-bordered w-full"
            />
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full"
            />
            <input
              type="tel"
              placeholder="Telephone Number"
              className="input input-bordered w-full"
            />
            <textarea
              className="textarea textarea-bordered w-full h-32"
              placeholder="Your Message"
            ></textarea>
            <button type="submit" className="btn btn-primary w-full md:w-40">
              Submit
            </button>
          </form>

        </div>
      </section>
    </>
  );
};

export default Contact;