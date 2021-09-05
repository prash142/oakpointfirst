import React, { FunctionComponent } from "react";
import { graphql } from "gatsby";
import { FluidObject } from "gatsby-image";
import { Layout } from "../../components/layout";
import { PostSnippet } from "../../types";
import { CardList } from "../../components/cardsList";
import { SEO } from "../../components/seo";

const main_image = "images/pexels-kaique-rocha-379964.jpg"
const main_subtitle = "We got you covered!!!"
const company_name = "Oakstone Trading Limited"

export const pageQuery = graphql`
  {
    featuredPosts: allMarkdownRemark(
      limit: 6
      sort: { fields: [frontmatter___publishedDate], order: DESC }
      filter: { frontmatter: { template: { eq: "article-post" } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            tags
            title
            imgAlt
            description
            publishedDate
            img {
              childImageSharp {
                fluid(maxWidth: 2400, quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`;

interface Post {
  node: {
    id: string;
    fields: {
      slug: string;
    };
    frontmatter: {
      tags: string[];
      title: string;
      imgAlt: string;
      description: string;
      publishedDate: string;
      img: { childImageSharp: { fluid: FluidObject } };
    };
  };
}

interface QueryData {
  featuredPosts: {
    edges: Post[];
  };
}

interface Home {
  data: QueryData;
}

export const TopImageComponent: FunctionComponent = () => {
  return (
    <div>
        <img className="h-144 w-full object-cover rounded" src={main_image}></img>
    </div>
  );
};


const Home: FunctionComponent<Home> = ({ data }) => {
  const mapPostData = ({ node }: { node: Post["node"] }) => ({
    title: node.frontmatter.title,
    summary: node.frontmatter.description,
    href: node.fields.slug,
    img: node.frontmatter.img.childImageSharp.fluid,
    imgAlt: node.frontmatter.imgAlt,
    tags: node.frontmatter.tags,
    publishedDate: new Date(node.frontmatter.publishedDate),
  });
  const featuredPostData: PostSnippet[] = data.featuredPosts.edges.map(
    mapPostData
  );
  return (
    <>
      <SEO title="Home" image="/logo.png"/>
      <Layout>
        <h1 className="text-4xl text-center my-3">{company_name}</h1>
        <br/>
        <TopImageComponent />
        <h4 className="text-4xl text-center my-3">{main_subtitle}</h4>
        <CardList featurePosts={featuredPostData} />
      </Layout>
    </>
  );
};

export default Home;
