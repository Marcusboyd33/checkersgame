import styled from "styled-components";

export const StyledCell = styled.div`
    width: auto;
    background: rgb(${props => props.color});
    border: solid 3px grey;
`;