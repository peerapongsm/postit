import React, { useState, useEffect }  from 'react';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const resp = await fetch(
        "https://serverless-api.peerapongsm.workers.dev/api/posts"
      );
      const postsResp = await resp.json();
      setPosts(JSON.parse(postsResp));
    };
    getPosts();
  }, []);

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    background: "moccasin"
  }));

  return (
          posts.map((post) => {
          return (
          <Item className="card">
            <Box>
              <Card variant="outlined">
                <CardContent>
                    <Typography variant="h5" component="div">
                      {post.title}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      u/{post.username}
                    </Typography>
                    <Typography variant="body2">
                      {post.content}
                    </Typography>
                  </CardContent>
              </Card>
            </Box>
          </Item>
        )
      })
  );
};

export default Posts;
