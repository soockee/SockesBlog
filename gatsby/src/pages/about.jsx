import React from 'react';
import Helmet from 'react-helmet';


import { Header, Profil } from 'components';
import { Layout } from 'layouts';


const About = () => {
  return (
    <Layout>
      <Helmet title={'About Page'} />
      <Header title="About Page" ></Header>
      <Profil/>
    </Layout>
  );
};

export default About;


