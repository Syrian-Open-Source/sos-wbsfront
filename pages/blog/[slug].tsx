/* eslint-disable react/no-children-prop */
import { ArrowBack } from "@mui/icons-material";
import { Box, Container, IconButton, Paper, Typography } from "@mui/material";
import hljs from "highlight.js";
import typescript from "highlight.js/lib/languages/typescript";
import "highlight.js/styles/vs2015.css";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import { getPostBySlug } from "../../api";
import { Footer } from "../../components/footer";
import { NavBar } from "../../components/navbar";
import Meta from "../../helpers/Meta";
import { Post } from "../../types/post";
hljs.registerLanguage("typescript", typescript);
interface PostProps {
  post: Post;
}

const Post: NextPage<PostProps> = ({ post }) => {
  const router = useRouter();
  useEffect(() => {
    hljs.highlightAll();
  }, []);
  return (
    <>
      <Meta />
      <NavBar />
      <Container
        maxWidth="md"
        sx={{ marginTop: "1rem", paddingBottom: "1rem" }}
      >
        <Box display="flex" alignItems="center" padding="1rem">
          <IconButton onClick={() => router.push("/blog")}>
            <ArrowBack color="primary" />
          </IconButton>
          <Typography variant="h4" fontWeight="600" marginX="0.5rem">
            Back to blog
          </Typography>
        </Box>
        <Paper sx={{ padding: "1rem" }}>
          <Typography variant="h3" fontWeight="600" paddingY="1rem">
            {post.attributes.title}
          </Typography>
          <Typography color="primary.A100" variant="h4" fontWeight="700">
            <Moment format="MMM Do YYYY">{post.attributes.publishedAt}</Moment>
          </Typography>
        </Paper>
        <Box height="450px" padding="1rem">
          <img
            src={`http://localhost:1337${post.attributes.image.data.attributes.url}`}
            alt={post.attributes.image.data.attributes.name}
            height="100%"
            width="100%"
            style={{ objectFit: "cover", borderRadius: "8px" }}
          />
        </Box>
        <Paper sx={{ paddingX: "1rem" }}>
          <ReactMarkdown children={post.attributes.content} />
        </Paper>
      </Container>
      <Footer />
    </>
  );
};

export async function getServerSideProps({ params }: any) {
  const post = await getPostBySlug(params.slug);
  if (!post) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      post: post || null,
    },
  };
}

export default Post;
