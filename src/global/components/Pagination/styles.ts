import styled from "styled-components";
import { Box } from "@mui/material";

export const Pagination = styled(Box)`
  display: flex;
  justify-content: flex-end;
  margin: 20px 45px 20px 0;
  height: 5rem;
  display: flex;
  @media (max-width: 768px) {
    height: 10rem;
  }
`;

export const Button = styled.button`
  height: 2rem;
  width: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--blue-darksky);
  color: var(--light);
  margin: 0 0.5rem;
  border-radius: var(--border-r);
  transition: background-color 0.2s;
  cursor: pointer;
`;
export const ContainerButtonPrev = styled(Box)`
  display: flex;
  align-items: center;
  height: 2rem;
  width: 2rem;
  border-radius: 10px;
  background-color: var(--blue-darksky);
  color: var(--light);
  border-radius: 10px;
  margin: 0 10px;

  span {
    margin: 0;
  }
`;

export const ContainerButtonNext = styled(Box)`
  display: flex;
  align-items: center;
  height: 2rem;
  width: 2rem;
  border-radius: 10px;
  background-color: var(--blue-darksky);
  color: var(--light);
  border-radius: 10px;
  margin: 0 10px;

  span {
    margin: 0;
  }

  svg {
    margin-right: 2px;
  }
`;
