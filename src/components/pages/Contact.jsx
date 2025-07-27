import React from 'react';
import EmailJS from '../../utils/EmailJS';

const Contact = () => {
  return (
    <>
      <section id="Contact" className="bg-base-100 bg-noise flex items-center justify-center px-4 py-24">
        <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/*the uhhhhhhhhhhh labels */}
          <div className="fade-up-scroll my-auto p-6">
            <h1 className="text-5xl md:text-7xl font-bold text-base-content">
              Let's Connect
            </h1>
            <p className="text-lg mt-2 text-base-content/70">
              Got a question or idea? Drop me a message below.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-4">
                <span className="text-2xl my-auto">
                  <i className="bi bi-geo-alt"></i>
                </span>
                <p className="font-semibold text-base-content my-auto">
                  Malolos, Bulacan, Philippines<br />3000
                </p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl my-auto">
                  <i className="bi bi-telephone-plus"></i>
                </span>
                <p className="font-semibold text-base-content my-auto">
                  +63 954 244 9232
                </p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl my-auto">
                  <i className="bi bi-envelope-paper"></i>
                </span>
                <p className="font-semibold text-base-content my-auto">
                  denver.delamasa@gmail.com
                </p>
              </div>
            </div>
          </div>
          {/*the form */}
          <EmailJS/>

        </div>
      </section>
    </>
  );
};

export default Contact;