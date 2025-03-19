import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function LoginPage(){
    return (
        <Box component="section" sx={{
                display: 'flex', 
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                flexDirection: 'column',
            }}>
            <Box component="div" sx={{
                display: 'flex', 
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                width: '100%',
                maxWidth: '300px',
                gap: '10px',
            }}>
                <TextField fullWidth label="User ID" id="fullWidth" />
                <TextField fullWidth label="PassWord" id="fullWidth" />
            </Box>
            
        </Box>
    );
};