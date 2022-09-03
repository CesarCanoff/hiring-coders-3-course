import styled from 'styled-components';

interface ButtonColors {
  [key: string]: string;
}

const colors: ButtonColors = {
  success: 'green',
  alert: 'yellow',
  error: 'red'
}

interface DefaultButtonProps {
  color: string;
}

export const DefaultButton = styled.button<DefaultButtonProps>`
  border: none;
  background-color: ${(props) => colors[props.color]};
  color: #fff;
  border-radius: 20px;
  padding: 10px 30px;

  :hover { /* WOW, ISSO É MÁGICO */
    background-color: #000;
  }
`;