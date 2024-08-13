import { forwardRef, isValidElement } from "react";
import { Slide } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";

export const LoginDialogTransition = forwardRef(function LoginDialogTransition(props: TransitionProps, ref) {
    if (!props.children) {
        return null;
    }

    if (isValidElement(props.children)) {
        return (
            <Slide direction="down" ref={ref} {...props}>
                {props.children}
            </Slide>
        );
    }
});
