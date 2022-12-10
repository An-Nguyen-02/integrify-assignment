import * as React from 'react';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { Typography } from '@mui/material';

export default function SearchBox({ searchChange }) {
  return (
    <Box sx={{
      backgroundColor: 'rgb(204, 204, 255)',
      padding: '16px',
      display: 'flex',
      justifyContent: 'space-between'
    }}>
      <Typography variant="h4" color="">
        Country
      </Typography>
      <TextField
        id="input-with-icon-textfield"
        label="Search by country name"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        variant="standard"
        onChange = {searchChange}
        sx = {{
          align: 'right'
        }}
        
      />
    </Box>
  );
}