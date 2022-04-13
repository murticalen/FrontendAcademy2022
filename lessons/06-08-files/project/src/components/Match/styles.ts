import styled from "styled-components";

export const MatchContainer = styled.div<{isWorlcCupFinal?: boolean}>` //
    border: 2px solid ${props => props.isWorlcCupFinal ? 'green' : 'tomato'};
    padding: 30px;
`