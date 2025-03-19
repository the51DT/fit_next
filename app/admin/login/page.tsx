import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Stack } from '@mui/material';

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
                <TextField fullWidth label="ID" id="fullWidth" />
                <TextField fullWidth label="PassWord" id="fullWidth" />
                <Stack spacing={2} direction="row">
                    <Button variant="contained">로그인</Button>
                    <Button variant="outlined">가입</Button>
                </Stack>
            </Box>
            
        </Box>
    );
};