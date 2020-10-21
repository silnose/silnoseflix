import styled from 'styled-components';

export const Banner = styled.header`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${(props) => props.poster});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
  height: 500px;
  position: relative;
  object-fit: cover;
  margin-bottom: 40px;
`;

export const BannerDetailsContainer = styled.div`
  position: absolute;
  top: 20%;
  left: 30px;
  max-width: 80vw;
  max-height: 250px;
`;

export const Title = styled.h2`
  margin: 0;
  color: white;
  font-size: 3em;
  font-weight: 800;
`;

export const ButtonContainer = styled.div`
  padding-top: 1rem;
`;

export const Button = styled.button`
  cursor: pointer;
  outline: none;
  padding: 0.5rem 2rem;
  margin-right: 1rem;
  background-color: rgba(51, 51, 51, 0.5);
  color: white;
  border: 1px solid transparent;
  font-weight: 600;
  border-radius: 0.2vw;

  &:hover {
    background-color: #e6e6e6;
    color: #000;
    transition: all 0.2s;
  }
`;

export const Synopsis = styled.p`
  font-size: 1em;
  line-height: 1.3;
  padding-top: 1rem;
  color: white;
  max-width: 380px;
`;

export const FadeBottom = styled.div`
  height: 7.5em;
  background-image: linear-gradient(
    180deg,
    transparent,
    rgba(37, 37, 37, 0.61),
    #111
  );
  position: inherit;
  top: 77%;
`;
