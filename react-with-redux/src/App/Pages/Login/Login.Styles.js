import styled from '@emotion/styled';
import { H1 as H1O, H4 as H4O } from 'Atoms';

export const Wrapper = styled.section`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  width: 20rem;
  height: auto;
  margin: 5rem auto;
  padding: 2.5rem;
  border: solid 2px #2d572c;
  border-radius: 1rem;
  background-color: #77dd77bf;
  *:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

export const H1 = styled(H1O)`
  text-align: center;
`;

export const H4 = styled(H4O)`
  text-align: center;
`;
