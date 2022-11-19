import { Container, Grid, Paper, Typography } from "@mui/material";
import { NextPage } from "next";
import { getPosts } from "../../api";
import { Footer } from "../../components/footer";
import { NavBar } from "../../components/navbar";
import { PostCard } from "../../components/post-card";
import Meta from "../../helpers/Meta";
import { Post } from "../../types/post";

interface BlogProps {
  posts: Post[];
}

const Blog: NextPage<BlogProps> = ({ posts }) => {
  return (
    <>
      <Meta
        title="Blog | Syrian Open Source"
        description="Learn development with great articles.
          Articles on Software Development, JavaScript, TypeScript, React, Next.js, and more.."
      />
      <NavBar />
      <Container sx={{ marignTop: "1rem" }}>
        <Grid container marginTop={{ md: "2rem", xs: "0" }} padding="1rem">
          <Grid item md={9} xs={12}>
            <Paper sx={{ paddingX: "1rem", marginTop: "1rem" }}>
              <Typography variant="h2" fontWeight="700">
                Learn development with great articles.
              </Typography>
              <Typography variant="h4" paddingY="1rem" color="primary.A100">
                Articles on Software Development, JavaScript, TypeScript, React,
                Next.js, and more..
              </Typography>
            </Paper>
            {/* <Paper sx={{ padding: "1rem" }}>
                <TextField
                  placeholder="Search..."
                  value={searchString}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setSearchString(e.target.value)
                  }
                  InputProps={{
                    startAdornment: (
                      <Search style={{ fontSize: 30, marginRight: 8 }} />
                    ),
                    sx: { fontSize: { md: 20, xs: 18 }, borderRadius: "12px" },
                  }}
                />
              </Paper> */}
          </Grid>
        </Grid>

        {/* <Paper sx={{ paddingX: "2rem", paddingY: "1rem" }}>
            <Typography>Search blog by topics</Typography>
            <Grid container spacing={1} marginY="1rem" alignItems="baseline">
              <Chip
                onClick={() => {
                  setTags([]);
                  setIsAllTag(true);
                }}
                label="All Posts"
                color={isAllTag ? "primary" : "default"}
                sx={{
                  paddingX: { md: "1rem", xs: "0.3rem" },
                  paddingY: { md: "1.8rem", xs: "1.4rem" },
                  fontSize: { md: "1rem", xs: "0.9rem" },
                  fontWeight: "600",
                  transition: "ease-out 0.1s",
                  ":hover": {
                    outline: "2px",
                    outlineStyle: "solid",
                  },
                }}
              />
              {tagFilters.map((tag: Tag, index: number) => (
                <Grid item key={index}>
                  <Chip
                    label={tag}
                    color={tags.includes(tag) ? "primary" : "default"}
                    onClick={() => {
                      if (!tags.includes(tag)) {
                        setTags([...tags, tag]);
                      } else {
                        const selectedTags = [...tags].filter(
                          (selectedTag: Tag) => selectedTag !== tag
                        );
                        setTags(selectedTags);
                      }
                    }}
                    sx={{
                      paddingX: { md: "1rem", xs: "0.3rem" },
                      paddingY: { md: "1.8rem", xs: "1.4rem" },
                      fontSize: { md: "1rem", xs: "0.9rem" },
                      fontWeight: "600",
                      transition: "ease-out 0.1s",
                      ":hover": {
                        outline: "2px",
                        outlineStyle: "solid",
                      },
                    }}
                  />
                </Grid>
              ))}
            </Grid>
          </Paper> */}
        <Paper sx={{ paddingX: "2rem", paddingY: "1rem" }}>
          <Typography variant="h3" fontWeight="600" paddingBottom="1rem">
            Articles
          </Typography>
          <Grid container spacing={2}>
            {posts.map((post) => (
              <Grid item key={post.id} md={4}>
                <PostCard post={post} />
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Container>
      <Footer />
    </>
  );
};

export async function getServerSideProps({ params }: any) {
  const posts = await getPosts();
  return {
    props: {
      posts: posts || null,
    },
  };
}

export default Blog;
