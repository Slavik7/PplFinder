import styled from "styled-components";

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 500px;
  height: calc(100vh - 270px);
  margin-block-start: 30px;
  overflow-y: auto;
`;

export const User = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.5rem;
  gap: 16px;
  border-radius: 20px;
  &:hover {
    background-color: #ffffff08;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-height: 128px;
  gap: 2px;
  overflow: hidden;
`;

export const UserPicture = styled.img`
  border-radius: 45%;
`;

export const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const IconButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 0.2s ease-in-out;
`;
