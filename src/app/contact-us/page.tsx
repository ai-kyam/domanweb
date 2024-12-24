import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-6 md:p-10 w-full max-w-4xl">
        {/* Header */}
        <h1 className="text-3xl md:text-5xl font-bold text-center text-blue-600 mb-8">
          Contact Us
        </h1>

        {/* Contact Information Section */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Reach Out to Us
          </h2>
          <ul className="space-y-4 text-gray-700">
            <li>
              <span className="font-medium text-gray-800">Email:</span>{" "}
              <a
                href="mailto:doman@aikyam.live"
                className="text-blue-600 hover:underline"
              >
                doman@aikyam.live
              </a>
            </li>
            <li>
              <span className="font-medium text-gray-800">Phone:</span>{" "}
              <a href="tel:+1234567890" className="text-blue-600 hover:underline">
                +91 8240127549
              </a>
            </li>
            <li>
              <span className="font-medium text-gray-800">Address:</span>{" "}
              915,first floor dhanush plash near gopalan arch mysore road, opp.Indian oil ,above SBI Bank ideal homes, Rajarajeshwari nagar 560098, Bengaluru, Karnataka 560098, India

            </li>
          </ul>
        </div>

       
      </div>
    </div>
  );
};

export default ContactUs;
