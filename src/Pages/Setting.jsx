import React, { useState, useEffect } from 'react';
import { Switch, TextField, Button, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff, AccountCircle, Lock, Email, Add } from '@mui/icons-material';
import { Avatar } from '@mui/material';

function Setting({darkMode,setDarkMode}) {
//   const [darkMode, setDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');
  const [showPassword, setShowPassword] = useState(false);

//   useEffect(() => {
//     document.documentElement.classList.toggle('dark', darkMode);
//     localStorage.setItem('theme', darkMode ? 'dark' : 'light');
//   }, [darkMode]);

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  return (
    <div className={`p-6 ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'} min-h-screen`}>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Account Settings</h1>
        <div className="flex items-center space-x-2">
          <span>Dark Mode</span>
          <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
        </div>
      </div>

      <div className="mt-8 max-w-3xl mx-auto">
        {/* Profile Picture Section */}
        <div className="flex items-center space-x-4">
          <Avatar src="/avatar.jpg" sx={{ width: 64, height: 64 }} />
          <div>
            <Button variant="contained" component="label">Upload New Picture<input hidden accept="image/*" type="file" /></Button>
            <Button variant="outlined" color="error" className="ml-4">Delete</Button>
          </div>
        </div>

        {/* Full Name Section */}
        <div className="grid grid-cols-2 gap-4 mt-6">
          <TextField label="First Name" variant="outlined" defaultValue="Bablu" fullWidth />
          <TextField label="Last Name" variant="outlined" defaultValue="Kumar" fullWidth />
        </div>

        {/* Contact Email Section */}
        <div className="mt-6">
          <TextField
            label="Email"
            variant="outlined"
            defaultValue="Bablu.Kumar@mail.com"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Email />
                </InputAdornment>
              ),
            }}
          />
          <Button variant="text" startIcon={<Add />} className="mt-2">Add another email</Button>
        </div>

        {/* Password Section */}
        <div className="mt-6 grid grid-cols-2 gap-4">
          <TextField
            label="Current Password"
            variant="outlined"
            type={showPassword ? 'text' : 'password'}
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Lock />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleClickShowPassword}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            label="New Password"
            variant="outlined"
            type={showPassword ? 'text' : 'password'}
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Lock />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleClickShowPassword}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </div>

        {/* Integrated Account Section */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Integrated Account</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 border rounded-lg bg-white shadow-md dark:bg-gray-700">
              <div className="flex items-center space-x-4">
                <img src="/google-analytics.png" alt="Google Analytics" className="w-10" />
                <div>
                  <p className="font-medium">Google Analytics</p>
                  <p className="text-sm text-gray-500 dark:text-gray-300">Navigate the Google Analytics interface and reports.</p>
                </div>
              </div>
              <span className="text-green-500 font-medium">Connected</span>
            </div>
            <div className="flex justify-between items-center p-4 border rounded-lg bg-white shadow-md dark:bg-gray-700">
              <div className="flex items-center space-x-4">
                <img src="/google-analytics.png" alt="Google Analytics" className="w-10" />
                <div>
                  <p className="font-medium">Google Analytics</p>
                  <p className="text-sm text-gray-500 dark:text-gray-300">Navigate the Google Analytics interface and reports.</p>
                </div>
              </div>
              <span className="text-green-500 font-medium">Connected</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Setting;
