import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Dispatch, SetStateAction } from 'react';

interface SelectorPropsI {
    country: string;
    setCountry: Dispatch<SetStateAction<string>>;
}

export default function BasicSelect(props: SelectorPropsI) {

    const { country, setCountry } = props;

    const handleChange = (event: SelectChangeEvent) => {
        setCountry(event.target.value as string);
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="country-select-label">Pa&iacute;s</InputLabel>
                <Select
                    defaultValue="ar"
                    labelId="country-select-label"
                    id="country-select"
                    value={country}
                    label="Pa&iacute;s"
                    onChange={handleChange}
                >
                    <MenuItem value={'ar'}>Argentina</MenuItem>
                    <MenuItem value={'fr'}>Francia</MenuItem>
                    <MenuItem value={'br'}>Brasil</MenuItem>
                    <MenuItem value={'us'}>Estados Unidos</MenuItem>
                    <MenuItem value={'jp'}>Jap&oacute;n</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}