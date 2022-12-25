import styled from 'styled-components';

export const Container = styled.div`
  overflow: hidden;
  svg {
    font-size: 1.6rem;
  }

  svg:nth-child(even) {
    color: hsl(344, 51%, 35%);
  }
  svg:nth-child(odd) {
    color: hsl(98, 30%, 21%);
  }
`