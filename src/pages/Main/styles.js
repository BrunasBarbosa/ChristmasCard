import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  padding-top: 8rem;

  background: url(https://images.unsplash.com/photo-1605633561363-87dc6c83fd39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80);
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;

  animation: show 300ms 200ms backwards;

  @keyframes show {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;

export const Card = styled.main`
  margin: 0 auto;
  padding-top: 6rem;
  border-radius: .5rem;
  width: clamp(18rem, 14rem + 40vw, 24rem);
  height: 32rem;
  background: hsl(220, 20%, 94%);
  background-size: cover;
  animation: show 800ms 300ms backwards;

  div:nth-child(1),
  div:nth-child(3) {
    animation: show 800ms 600ms backwards;
  }

  > div:nth-child(2) {
    padding-top: 6rem;
    width: 100%;
    height: 16rem;

    background: hsl( 354, 97%, 28%);
  }

  h1 {
    text-align: center;
    font-size: 3.2rem;
    font-family: 'Emilys Candy', cursive;

    color: hsl(220, 10%, 94%);
    animation: show 800ms 800ms backwards;
  }
`;