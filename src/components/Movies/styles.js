import styled, { css } from 'styled-components';

export const Section = styled.section``;

export const Title = styled.h2`
  text-align: left;
  color: white;
  margin-left: 20px;
`;

export const PosterContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-y: hidden;
  overflow-x: scroll;
  padding: 20px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Poster = styled.img`
  width: 100%;
  max-height: 100px;
  object-fit: contain;
  margin-right: 10px;
  transition: transform 450ms;
  &:hover {
    transform: scale(1.08);
    opacity: 1;
  }
  &::before {
    background-color: red;
  }
  ${(props) =>
    props.isLarge &&
    css`
      max-height: 250px;
    `};
`;
