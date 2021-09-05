import React, { FunctionComponent } from "react";
import { Layout } from "../components/layout";
import Image from "gatsby-image";
import { FluidObject } from "gatsby-image";
import { PostSnippet } from "../types";
import { CardList } from "../components/cardsList";

const main_image = "images/pexels-kaique-rocha-379964.jpg"
const main_subtitle = "We got you covered!!!"
const company_name = "Oakstone Trading Limited"

export const TopImageComponent: FunctionComponent = () => {
  return (
    <div>
        <img className="h-144 w-full object-cover rounded" src={main_image}></img>
        <h4 className="text-4xl text-center my-3">{main_subtitle}</h4>
    </div>
  );
};

export const MainPage: FunctionComponent = () => {
  return (
    <Layout>
      <h1 className="text-4xl text-center my-3">{company_name}</h1>
      <br/>
      <TopImageComponent />
      <div className="flex justify-left">
        <div className="max-w-screen-lg">
          <div className="prose sm:prose-lg md:prose-xl text-gray-700">
            <p>
          Oakstone Trading is a start-up business dedicated to trading of precious and non-precious metals in
a manner that generates fair and equitable returns for present and future owners, and superior
value to our customers. We specialize in Gold, Copper Millberry (scrap) and HMS 1 & 2 (Ferrous
scrap).
        </p>
        <p>
Oakstone will be headquartered in the city of Dar es Salaam, Tanzania with business carried out
majorly in Tanzania, UAE, India and other countries of Africa. Gold and other metal trading has
experienced explosive growth over the past twenty years. Over the last couple of decades, the
market has seen the price of these metals making a steady upward growth, owing to massive
demand and development across multiple sectors.
</p>
<p>
With a solid experience in trading (export & import), international trading services and security
Oakstone maintains relationships with licensed Copper, HMS & Gold exporters and dealers, miners
and traders located throughout Africa and Asia to source and procure these metals directly from
local suppliers and miners.
</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MainPage;