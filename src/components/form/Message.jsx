import { Box, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';

export default function MyMessage({ messageText, messageColor, addIcon }) {
    return (
        <Box
            sx={{
                width: '100%',
                height: '30px',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                backgroundColor: messageColor,
                padding: '20px',
                marginBottom: '20px',
            }}
        >
            <IconButton>{addIcon}</IconButton>
            <Typography>{messageText}</Typography>
        </Box>
    );
}
