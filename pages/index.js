import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import BoxWithStyledComponents from "../components/BoxWithStyledComponents.js";
import styled, { css } from "styled-components";

const FlexContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  flex-direction: ${({ $direction = "row" }) =>
    $direction === "row" ? "row" : "column"};
`;

export default function HomePage() {
  return (
    <div>
      <FlexContainer $direction="row">
        <BoxWithClassName />
        <BoxWithClassName isBlack />
        <BoxWithStyledComponents />
        <BoxWithStyledComponents $isBlack />
      </FlexContainer>
    </div>
  );
}
