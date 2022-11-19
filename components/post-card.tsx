import { styled, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import Moment from "react-moment";
import { Post } from "../types/post";

const Post = styled("div")(({ theme }) => ({
  cursor: "pointer",
  borderRadius: "12px",
  ":hover": {
    "& div": {
      outline: "2px",
      outlineStyle: "solid",
    },
  },
}));

const ImageCard = styled("div")(({ theme }) => ({
  border: "4px solid transparent",
  borderRadius: "12px",
  transition: "ease-out 0.2s",
  height: "450px",
  [theme.breakpoints.down("md")]: {
    height: "350px",
  },
}));

interface PostCardProps {
  post: Post;
}

export const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <Link href={`/blog/${post.attributes.slug}`}>
      <Post>
        <ImageCard>
          <img
            src={`http://localhost:1337${post.attributes.image.data.attributes.url}`}
            alt={post.attributes.image.data.attributes.name}
            height="100%"
            width="100%"
            style={{ objectFit: "cover", borderRadius: "8px" }}
          />
        </ImageCard>

        <Typography
          color="primary.A100"
          variant="h4"
          fontWeight="700"
          paddingTop="1rem"
        >
          <Moment format="MMM Do YYYY">{post.attributes.publishedAt}</Moment>
        </Typography>
        <Typography
          variant="h3"
          fontWeight="600"
          paddingY="1rem"
          color="primary"
        >
          {post.attributes.title}
        </Typography>
      </Post>
    </Link>
  );
};
