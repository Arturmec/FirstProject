import styled from 'styled-components';

/** Estiliza a tag Title */
export const Title = styled.h1`
  font-size: 24px;
  /** Se a propriedade existir, retorna a cor vermelha, se não retorna a cor #7159c1 */
  color: ${props => (props.error ? 'red' : '#7159c1')};
  font-family: Arial, Helvetica, sans-serif;

  /** Estiliza a tag small */
  small {
    font-size: 14px;
    color: #333;
  }
`;
