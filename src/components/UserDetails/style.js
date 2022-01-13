import styled from "styled-components";

export const UserDetailsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #00000090;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: 9999;
`;

export const UserDetails = styled.div`
  display: flex;
  align-items: center;
  padding: 1.5rem;
  background: #303030;
  border-radius: 20px;
  gap: 1.5rem;
  box-shadow: 0 0 10px 2px #00000040;
  z-index: 99999;
`;

export const UserImage = styled.img`
  width: 100%;
`;

export const UserInfo = styled.div``;
