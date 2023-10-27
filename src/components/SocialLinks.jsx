import React from 'react';
import { useSelector } from 'react-redux';
import { selectData } from '../pages/homeSlice';
import styled from 'styled-components';
// Data
import { Blog } from '../data';
// Icons
import { Icon } from '@iconify/react';

const StyledSocialLinks = styled.div`
  a {
    margin: 0 1rem;
  }
`;

export default function SocialLinks() {
  const { blog, html_url } = useSelector(selectData);
  const inUrl = `https://www.linkedin.com/in/momanio`;
  const FbUrl = `https://www.facebook.com/oamomani`;

  return (
    <StyledSocialLinks>
      <a
        href={inUrl}
        aria-label='Check out my Linkedin profile.'
        className='link-icons'
        target='_blank'
        rel='noopener noreferrer'
      >
        <Icon icon='icomoon-free:linkedin' />
      </a>
      <a
        href={html_url}
        aria-label='Check out my GitHub profile.'
        className='link-icons'
        target='_blank'
        rel='noopener noreferrer'
      >
        <Icon icon='icomoon-free:github' />
      </a>
      <a
        href={FbUrl}
        aria-label='Check out my Facebook profile.'
        className='link-icons'
        target='_blank'
        rel='noopener noreferrer'
      >
        <Icon icon='icomoon-free:facebook' />
      </a>
      {blog && (
        <a href={blog} aria-label='External link' className='link-icons'>
          {Blog}
        </a>
      )}
    </StyledSocialLinks>
  );
}
