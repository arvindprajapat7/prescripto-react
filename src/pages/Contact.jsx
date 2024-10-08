import React from "react";
import { assets } from "../../public/assets";

const Contact = () => {
  return (
    <>
      <section className="py-10">
        <div className="container mx-auto">
          <h3 className="text-4xl text-center my-10">
            Contact <span className="text-primary font-bold">Us</span>
          </h3>
          <div className=" grid md:grid-cols-[2fr_3fr]">
            <div className="md:mr-8">
              <img src={assets.contactImage} alt="" className="w-full max-w-[300px] ml-auto" />
            </div>
            <div className="text-[16px] text-gray-800">
              <h4 className="text-2xl font-bold">Our OFFICE</h4>
              <p>
              54709 Willms Station 
              Suite 350, Washington, USA
              </p>
              <p className="my-4">
              Tel: (415) 555‑0132
              </p>
              <p>Email: greatstackdev@gmail.com</p>
              <h4 className="text-2xl font-bold mt-4">Careers at PRESCRIPTO</h4>
              <p>
                Learn more about our teams and job openings.
              </p>
              <button className="bg-primary px-8 py-2 mt-4 rounded-full text-white font-medium border border-primary hover:text-primary hover:bg-white transition-all duration-500 ">Contact Now</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
