import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  background: url(https://images.unsplash.com/photo-1512916206820-bd6d503c003e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80);
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;

`;

export const Box = styled.div`
  width: 10rem;
  height: 10rem;
  margin: 0 auto;
  padding-top: 18rem;
  
  position: relative;

  img {
    border-radius: 1.2rem;
    filter: brightness(.7);
  }

  a {
    font-family: 'Sail', cursive;
    font-size: 1.6rem;
    color: hsl(220, 10%, 94%);
    text-decoration: none;

    position: absolute;
    height: 4rem;
    width: 4rem;
    right: 4rem;
    bottom: -5rem;
  }
`;
