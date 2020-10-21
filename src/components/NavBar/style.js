import styled from 'styled-components';

export const Nav = styled.nav`
  width: 100%;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  z-index: 9;
  object-fit: contain;
  height: 40px;
  background-color: ${(props) => (props.dark ? '#111' : 'transparent')};
  transition-timing-function: ease-in;
  transition: all 0.6s;

  & span {
    color: white;
  }
`;
