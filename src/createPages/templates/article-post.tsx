import React, { FunctionComponent } from "react";
import { graphql } from "gatsby";
import { FluidObject } from "gatsby-image";
import { ArticlePost } from "../../components/articles";
import { SEO } from "../../components/seo";
interface QueryData {
  markdownRemark: {
    html: string;
    frontmatter: {
      title: string;
      tags: string[];
      img: {
        childImageSharp: { fluid: FluidObject };
      };
      imgAlt: string;
      publishedDate: string;
      description: string;
    };
  };
}

export const pageQuery = graphql`
  query ArticlePostByID($id: String!, $tag: [String!]) {
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      fields {
        slug
      }
      frontmatter {
        title
        description
        tags
        img {
          childImageSharp {
            fluid(maxWidth: 2400, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        imgAlt
        publishedDate
      }
    }
    allMarkdownRemark(
      limit: 3
      sort: { fields: [frontmatter___publishedDate], order: DESC }
      filter: { frontmatter: { tags: { in: $tag } }, id: { ne: $id } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            description
            tags
            img {
              childImageSharp {
                fluid(maxWidth: 370, maxHeight: 220, quality: 90) {
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

interface ArticlePage {
  data: QueryData;
}

export const ArticlePage: FunctionComponent<ArticlePage> = ({ data }) => {
  const {
    markdownRemark: {
      html,
      frontmatter: {
        title,
        tags,
        imgAlt,
        description,
        img: {
          childImageSharp: { fluid: img },
        },
        publishedDate,
      },
    },
  } = data;

  return (
    <>
      <SEO title={title} image={img.src} description={description} />
      <ArticlePost
        title={title}
        tags={tags}
        img={img}
        imgAlt={imgAlt}
        publishedDate={new Date(publishedDate)}
      >
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </ArticlePost>
    </>
  );
};

export default ArticlePage;
