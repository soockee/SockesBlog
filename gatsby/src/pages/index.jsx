import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from '@emotion/styled';
import Img from 'gatsby-image';
import { Header, PostList } from 'components';
import { Layout } from 'layouts';


const Wrapper = styled.article`
  margin-bottom: 2rem;
  position: relative;
  z-index: 100;
  border-radius: ${props => props.theme.borderRadius.default};
  box-shadow: ${props => props.theme.shadow.feature.small.default};
  transition: ${props => props.theme.transitions.boom.transition};
  height: 17rem;
  flex-basis: calc(99.9% * 1 / 3 - 2.5rem);
  max-width: calc(99.9% * 1 / 3 - 2.5rem);
  width: calc(99.9% * 1 / 3 - 2.5rem);

  &:hover {
    box-shadow: ${props => props.theme.shadow.feature.small.hover};
    transform: scale(1.04);
  }

  @media (max-width: 1000px) {
    flex-basis: calc(99.9% * 1 / 2 - 1rem);
    max-width: calc(99.9% * 1 / 2 - 1rem);
    width: calc(99.9% * 1 / 2 - 1rem);
    height: 18rem;
  }

  @media (max-width: 700px) {
    flex-basis: 100%;
    max-width: 100%;
    width: 100%;
    height: 15rem;
  }
`;
const PostWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 4rem 4rem 1rem 4rem;
  @media (max-width: 1000px) {
    margin: 4rem 2rem 1rem 2rem;
  }
  @media (max-width: 700px) {
    margin: 4rem 1rem 1rem 1rem;
  }
`;
const Index = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  return (
    <Layout>
      <Helmet title={'Sockes Blog'} />
      <Header title="Sockes Blog" cover={data.file.childImageSharp.fluid}></Header>

      <PostWrapper>
        {edges.map(({ node }) => {
          const { id, excerpt, frontmatter } = node;
          const { cover, path, title, date } = frontmatter;
          return (
            <PostList
              key={id}
              cover={cover.childImageSharp.fluid}
              path={path}
              title={title}
              date={date}
              excerpt={excerpt}
            />
          );
        })}
      </PostWrapper>
    </Layout>
  );
};

export default Index;

Index.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            excerpt: PropTypes.string,
            frontmatter: PropTypes.shape({
              cover: PropTypes.object.isRequired,
              path: PropTypes.string.isRequired,
              title: PropTypes.string.isRequired,
              date: PropTypes.string.isRequired,
              tags: PropTypes.array,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
};

export const query = graphql`
  {
    allMarkdownRemark(
      limit: 6
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 75)
          frontmatter {
            title
            path
            tags
            date(formatString: "MM.DD.YYYY")
            cover {
              childImageSharp {
                fluid(
                  maxWidth: 1000
                  quality: 90
                  traceSVG: { color: "#2B2B2F" }
                ) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
    file(relativePath: { eq: "main_background.png" }) {
      childImageSharp {
        fluid(
          maxWidth: 1920
          quality: 90
        ) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`;
