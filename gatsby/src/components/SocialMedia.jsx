import React from 'react';
import PropTypes from 'prop-types';
import { SocialIcon } from 'react-social-icons';


const SocialMedia = ({instagramURL, githubURL, stackoverflowURL}) =>{
    <div className="post-social">
		<SocialIcon url={instagramURL} />
        <SocialIcon url={githubURL} />
        <SocialIcon url={stackoverflowURL} />
	</div>
}

SocialMedia.propTypes = {
    instagramURL: PropTypes.string,
    githubURL: PropTypes.string,
    stackoverflowURL: PropTypes.string,
};
SocialMedia.defaultProps = {
    instagramURL: "https://www.instagram.com/sockeod/",
    githubURL: "https://github.com/Soockee",
    stackoverflowURL: "https://stackoverflow.com/users/7383590/socke",
};

export default SocialMedia;