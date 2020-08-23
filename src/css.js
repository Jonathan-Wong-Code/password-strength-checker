import styled from "styled-components";

export const StrengthMeter = styled.div`
  height: 2rem;
  width: 90%;
  border: 3px solid hsl(261, 88%, 57%);
  border-radius: 1rem;
  margin: 0 auto;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    height: 100%;
    background-color: hsl(261, 88%, 67%);
    border-radius: 1rem;
    width: ${({ strength = 0 }) => 1 * strength}%;
    transition: width 200ms;
  }
`;

export const Input = styled.input`
  width: 90%;
  padding: 0.25rem 0.75rem;
  background-color: hsl(261, 88%, 25%);
  color: white;
  border: 1px solid hsl(261, 88%, 57%);
  margin-top: 1rem;
  outline: none;
  text-align: center;
  border-radius: 0.3rem;

  &:focus {
    border: 1px solid hsl(261, 88%, 70%);
  }
`;

export const Reasons = styled.div`
  & > * {
    margin-top: 0.5rem;
    color: 1px solid hsl(261, 88%, 80%);
  }
`;
