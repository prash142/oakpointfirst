import React, { FunctionComponent } from "react";
import Image from "gatsby-image";
import { PostSnippet } from "../../types";

export interface CardList {
  featurePosts: PostSnippet[];
}

export const CardPost: FunctionComponent<PostSnippet> = ({
  title,
  summary,
  href,
  img,
  imgAlt,
  tags,
}) => {
  return (
    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
      <div className="flex-shrink-0">
        <a href={href}>
          <Image
            fluid={img}
            alt={imgAlt || title}
            className="h-48 w-full object-cover"
          />
        </a>
      </div>
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          {/* <a href={href} className="block"> */}
          <a href="/aboutus" className="block" >
            <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
              {title}
            </h3>
            <p className="mt-3 text-base leading-6 text-gray-500">{summary}</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export const CardList: FunctionComponent<CardList> = ({
  featurePosts,
}) => {
  const [...otherFeature] = featurePosts;
  return (
    <div className="relative py-6">
      <div className="relative max-w-7xl mx-auto">
        <div className="mt-3 grid gap-5 xl:gap-10 max-w-lg mx-auto grid-cols-1 md:grid-cols-3 md:max-w-none">
          {otherFeature.map((featurePost, index) => (
            <CardPost {...featurePost} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
