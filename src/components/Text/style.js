import styled from "styled-components";

export const Text = styled.div`
  font-size: ${({ size }) => size};
  font-weight: ${({ bold }) => (bold ? "700" : "400")};
  opacity: ${({ isLabel }) => (isLabel ? "50%" : "100%")};
  padding-top: ${({ isLabel }) => (isLabel ? "5px" : "0")}; ;
`;
