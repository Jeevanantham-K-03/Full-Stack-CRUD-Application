import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';


export default function SelectForm({ label, options, name, value, onChange, onBlur, error, helperText }) {
  return (
    <Box
      sx={{ '& .MuiTextField-root': { width: '100%' } }}
    >
      <div>
        <TextField
          id="outlined-select-currency"
          select
          label={label}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          onError={error}
          helperText={helperText}
        >
          {options.map((option) => (
            <MenuItem key={option.id} value={option.id}>
              {option.name}
            </MenuItem>
          ))}
        </TextField>
        <FormHelperText error>{helperText}</FormHelperText>
      </div>
    </Box>
  );
}
