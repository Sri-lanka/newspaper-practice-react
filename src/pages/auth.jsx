import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Paper } from '@mui/material';
import { UserService } from '../service/userService';



export default function Auth({children}) {

    
    return (
        <div className="flex items-center justify-center h-screen">
            {children}
        </div>
    );
};
