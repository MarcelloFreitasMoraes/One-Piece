import styled from "styled-components";
import { Box } from "@mui/material";

export const Heading = styled(Box)`
    margin: 2rem 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    h2:first-child {
        margin-right: 1rem;
    }
    @media (max-width: 768px) {
        justify-content: space-between;
    }
`