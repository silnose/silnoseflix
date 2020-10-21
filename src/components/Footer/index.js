import React from 'react';
import { FooterWrapper } from './styles';

const Footer = () => {
  return (
    <FooterWrapper>
      Made with ❤ by{' '}
      <a
        href='https://silnose.github.io/'
        target='_blank'
        rel='noopener noreferrer'>
        @silnose
      </a>{' '}
    </FooterWrapper>
  );
};

export default Footer;
