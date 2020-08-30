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
        <li>Bachelorabschluss an der Technischen Hochschule Mittelhessen</li>
          <ul><li>Abschlussarbeit: "Generierung und Ordnung von Events <br></br>in verteilten Systemen mit asynchroner Kommunikation"</li></ul>
        <li>Masterstudent an der Technischen Hochschule Mittelhessen</li>
        <li>Das mach ich ab und zu...</li>
        <ul>
          <li>Cloudcomputing</li>
          <li>Infrastructure as Code</li>
          <li>Observability von (verteilten) Computersystemen</li>
          <li>Computer Vision</li>
          <li>Unreal Engine </li>
          <li>Gaming</li>
          <li>Okinawa Goju Ryu Karate / Jiu Jitsu / Hapkido</li>
          <li>Bass / Gitarre</li>
          
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