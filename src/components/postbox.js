import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'

export default function PostBox() {
  const [title, setTitle] = useState();
  const [username, setUsername] = useState();
  const [content, setContent] = useState();

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = (event) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "title": title,
      "username": username,
      "content": content
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
      mode: 'no-cors'
    };
    fetch("https://serverless-api.peerapongsm.workers.dev/", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

    window.location.reload();
  }

  return (
    <>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '95%' },
        background: "moccasin"
      }}
      noValidate
      autoComplete="off"
    >
      <div id="user-title">
        <TextField id="title" label="Title" variant="outlined" value={title} fullWidth onChange={handleTitleChange}/>
        <div id="divider"/>
        <TextField id="username" label="Username" variant="outlined" value={username} onChange={handleUsernameChange}/>
      </div>
    </Box>
    <Box
    component="form"
    sx={{
      '& > :not(style)': { m: 1.5, width: '98%' },
      background: "moccasin"
    }}
    noValidate
    autoComplete="off"
    >
    <TextField
        id="content"
        label="Write something for the world!"
        multiline
        rows={3}
        value={content}
        onChange={handleContentChange}
        />
    </Box>
    <Button variant="contained" fullWidth onClick={handleSubmit} sx={{marginTop: 1.5}}>Post it!</Button>
    </>
  );
}
