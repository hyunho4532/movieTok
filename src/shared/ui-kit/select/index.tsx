import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { CustomSelectProps } from "./props/CustomSelectProps";

export function CustomSelect(props: CustomSelectProps) {

    const isChange = (event: any) => {
        props.setData(event.target.value);
    }

    return (
        <RadioGroup value={props.data} onChange={isChange}>
            {props.select.map((value) => (
                <FormControlLabel value={value} control={<Radio />} label={value} />
            ))}
        </RadioGroup>
    )
}