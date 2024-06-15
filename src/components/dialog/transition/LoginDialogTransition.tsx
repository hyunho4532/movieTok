import React from "react";
import { Slide } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";

export const LoginDialogTransition = React.forwardRef(function LoginDialogTransition(props: TransitionProps, ref) {

    return (
        <Slide direction="down" ref={ref} {...props}>
            {props.children}
        </Slide>
    );
});