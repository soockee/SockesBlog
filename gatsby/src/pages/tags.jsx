import React from 'react';
import { graphql } from 'gatsby'
import PropTypes from 'prop-types';
import { Layout, Container } from 'layouts';
import { Header, TagsBlock } from 'components';

const Tags = ({ data }) => {
  const tagquery  = data.tags.group;
  let tags = [];
  tagquery.forEach( (t) => {
    tags.push(t.tag);
  })

  // Maybe add implementation to size each tag by its count
  // tags.forEach((t) => {
  //   console.log(t);
  // });
  // data.tags.group.forEach( (e) => {
  //   console.log(e.totalCount)
  // });

  return (
    <Layout>
      <Header title="Tags Page"></Header>
      <Container>
        <TagsBlock list={tags} />
      </Container>
    </Layout>
  );
};

export default Tags;

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tags: PropTypes.array,
  }),
};

export const query = graphql`
  {
    tags: allMarkdownRemark {
      group(field: frontmatter___tags) {
        tag: fieldValue
        totalCount
      }
    }
  }
`