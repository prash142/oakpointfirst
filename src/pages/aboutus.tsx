import React, { FunctionComponent } from "react";
import { Layout } from "../components/layout";

export const AboutUs: FunctionComponent = () => {
  return (
    <Layout>
      <div>
          <h1 className="text-3xl sm:text-5xl text-left font-semibold mt-8 mb-2">
              About Us
          </h1>
      </div>
      <div className="flex justify-left">
        <div className="max-w-screen-lg">
          <div className="prose sm:prose-lg md:prose-xl text-gray-700">
            <p>
              Oakstone Trading Limited is a business headquartered in Dar es Salaam, Tanzania with business carried out in Tanzania, UAE, India, UK and other countries of Africa. 
            </p>
            <p>
              Oakstone Trading Limited is dedicated to trading of agro commodities, precious and non-precious metals in a manner that generates fair and equitable returns for the owners, and superior value to our customers. We specialize in Gold, Copper, Soya Beans, Cashew nuts (raw and processed), Pigeon Peas, Sesame Seeds, Ground nuts, Green Gram, Hass Avocado, Pineapple, Mango and more.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutUs;