import React from "react";
import { Slide } from "@mui/material";
import { LoginDialogProps } from "./LoginDialogProps";

export const LoginDialogTransition = React.forwardRef(function LoginDialogTransition(props: LoginDialogProps, ref) {

    const { children, ...rest } = props;

    return (
        <Slide direction="down" ref={ref} {...rest}>
            {props.children}
        </Slide>
    );
});