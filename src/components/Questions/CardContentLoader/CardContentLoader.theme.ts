import styled from 'styled-components'

export const CardContentLoaderStyles = styled.div`
  display: flex;
  width: 35rem;
  flex-direction: column;
  height: 22.4rem;
  box-shadow: 0px 2px 6px 1px rgba(0, 22, 99, 0.12);
  border-radius: 2rem;
  padding: 2rem;
  margin: 0 1.5rem 1.5rem 0;

  @media (max-width: 460px) {
    width: 100%;
  }
`
