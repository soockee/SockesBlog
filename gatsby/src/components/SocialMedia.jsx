import React,  { useState } from 'react';
import PropTypes from 'prop-types';
import { SocialIcon } from 'react-social-icons';
import styled from '@emotion/styled';
import theme from '../../config/theme';


const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: start;
`;
const SocialMedia = ({instagramURL, githubURL,socialIconStyle,}) => {
    var socialIconStyleAssign = Object.assign({},socialIconStyle.display);
    const [hoverInsta, setHoverInsta] = useState(false);
    const [hoverGithub, setHoverGithub] = useState(false);
    return (
        <Wrapper>
            <SocialIcon url={instagramURL} style={socialIconStyleAssign}
                onMouseOver={() => {
                    setHoverInsta(true);
                }}
                onMouseOut={() => {
                    setHoverInsta(false);
                }}
                bgColor={!hoverInsta  ? theme.colors.white.base : theme.colors.black.base }
            />
            <SocialIcon url={githubURL} style={socialIconStyleAssign}
                    onMouseOver={() => {
                        setHoverGithub(true);
                    }}
                    onMouseOut={() => {
                        setHoverGithub(false);
                    }}
                    bgColor={!hoverGithub ? theme.colors.white.base : theme.colors.black.base }
            />
        </Wrapper>
    );
};

SocialMedia.propTypes = {
    instagramURL: PropTypes.string,
    githubURL: PropTypes.string,
    stackoverflowURL: PropTypes.string,
    socialIconStyle: PropTypes.string,
};
SocialMedia.defaultProps = {
    instagramURL: "https://www.instagram.com/sockeod/",
    githubURL: "https://github.com/Soockee",
    stackoverflowURL: "https://stackoverflow.com/users/7383590/socke",
    socialIconStyle: "{(display: flex)}",

};


export default SocialMedia;