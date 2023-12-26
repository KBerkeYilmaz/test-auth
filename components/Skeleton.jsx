"use client";

import * as React from "react";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Skeleton from "@mui/material/Skeleton";

import { useEffect, useState } from "react";

// ... (Other imports remain the same)

function Media({ post, loading }) {
  // Media component now expects a post object and a loading state

  return (
    <Card sx={{ maxWidth: 345, m: 2 }}>
      <CardHeader
        avatar={
          loading ? (
            <Skeleton animation="wave" variant="circular" width={40} height={40} />
          ) : (
            <Avatar alt={post.title} src={post.image} />
          )
        }
        action={
          loading ? null : (
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          )
        }
        title={loading ? <Skeleton animation="wave" height={10} width="80%" style={{ marginBottom: 6 }} /> : post.title}
        subheader={loading ? <Skeleton animation="wave" height={10} width="40%" /> : "Published recently"}
      />
      {/* {loading ? (
        <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
      ) : (
        <CardMedia component="img" height="140" image={post.image} alt={post.title} />
      )} */}

      <CardContent>
        {loading ? (
          <React.Fragment>
            <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
            <Skeleton animation="wave" height={10} width="80%" />
          </React.Fragment>
        ) : (
          <Typography variant="body2" color="text.secondary" component="p">
            {post.article}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}

Media.propTypes = {
  post: PropTypes.object,
  loading: PropTypes.bool,
};

export default function LoadingState({ fetchUrl }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await fetch(fetchUrl);
        const data = await response.json();
        setPosts(data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, [fetchUrl]);

  return (
    <div className="w-full min-h-screen h-fit grid lg:grid-cols-3 lg:mt-20 lg:mb-20 lg:px-[67px]">
      {/* {loading ? (
        <Media loading={true}/>
      ) : (
        posts.map(post => <Media key={post._id} post={post} loading={false} />)
      )} */}

      { posts.map(post => loading? (
        <Media loading={true}/>
      ) : (<Media key={post._id} post={post} loading={false} />))}
    </div>
  );
}
