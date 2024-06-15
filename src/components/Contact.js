import React from 'react';

const Contact = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-6">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">Our Address</h3>
            <p>Street Address, City, State, ZIP Code</p>
          </div>
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <p>+234-000-000-0000</p>
            <p>+234-000-000-0000</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p>info@sway.com</p>
          </div>
        </div>
        <form className="mt-6 max-w-lg mx-auto">
          <input type="text" className="w-full p-2 mb-4 border border-gray-300 rounded-md" placeholder="Name" />
          <input type="email" className="w-full p-2 mb-4 border border-gray-300 rounded-md" placeholder="Email" />
          <textarea className="w-full p-2 mb-4 border border-gray-300 rounded-md" rows="4" placeholder="Message"></textarea>
          <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded-md">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
