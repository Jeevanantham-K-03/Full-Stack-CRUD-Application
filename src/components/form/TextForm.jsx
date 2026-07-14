import TextField from '@mui/material/TextField';

export default function TextForm({label,name,value,onChange,onBlur,error,helperText}) {
  return (
    <>
      <TextField 
      id="outlined-basic" 
      sx={{width:'100%'}}
      label={label} 
      variant="outlined"
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      onError={error}
      helperText={helperText}
       />
    </>
  );
}
