import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import { Header } from 'components';
import { Layout } from 'layouts';
import Profil from "../../static/logo/Profil.jpg"


const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InformationText = styled.div`
position: relative;
top: 50%;
transform: translateY(+10%);
transform: translateX(+10%);
`;
const User = props => (
  <Wrapper>
    <img src={Profil} width={256} height={256} alt="Profilbild"/>
    <InformationText>
      <h2 className="AboutName">Simon Stockhause</h2>
      <ul>
        <li>Bachelorstudent an der Technischen Hochschule Mittelhessen</li>
        <li>Aktuelle Projekte rund um...</li>
        <ul>
          <li>Cloudcomputing</li>
          <li>Observability von (verteilten) Computersystemen</li>
          <li>Computer Vision</li>
        </ul>
      </ul>
    </InformationText>
  </Wrapper>
)

export default () => {
  return (
    <Layout>
      <Helmet title={'About Page'} />
      <Header title="About Page"></Header>
      <User/ >
    </Layout>
  )
}

//export default About;


//<Header title="About Page">Hi! I bims der Simon</Header>