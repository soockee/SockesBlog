import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';

const About = center => (
  <Layout>
    <Helmet title={'About Page'} />
    <Container center={center}>
      <h3>Hi! I bims der Simon =)</h3>
      <ul>
        <li>Student an der Technischen Hochschule Mittelhessen. </li>
        <li>Spiele in meiner Bude bisschen Bass und Gitarre. </li>
        <li>Dungeon Keeper sollte man mal ausprobieren!</li>
        <li>Sport ist ganz nett</li>
      </ul>
    </Container>
  </Layout>
);

export default About;

About.propTypes = {
  center: PropTypes.object,
};

//<Header title="About Page">Hi! I bims der Simon</Header>