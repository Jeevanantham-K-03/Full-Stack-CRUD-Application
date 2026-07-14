import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormHelperText from '@mui/material/FormHelperText';

export default function DescriptionForm({label,row,name,value,onChange,onBlur,error,helperText}) {
  return (
    <Box
      sx={{ '& .MuiTextField-root': {width:'100%' } }}
    >
      <div>
        <TextField
          id="outlined-multiline-static"
          label={label}
          multiline
          rows={row}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          onError={error}
          helperText={helperText}
        />
      </div>
    </Box>
  );
}
