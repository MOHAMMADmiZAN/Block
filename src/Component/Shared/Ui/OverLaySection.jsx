import React from 'react';
import SignupCss from "../../Ui/SignUp/css/style.module.css";
import {Box, Container} from "@mui/material";

function OverLaySection({children,isOpen}) {
    return (
        <Box className={SignupCss.containerFluid} style={{display: isOpen ? 'block' : 'none'}}>
            <Container maxWidth={`xl`} sx={{height: '100vh', position: 'relative'}}>
                {children}
            </Container>

        </Box>
    );
}

export default OverLaySection;