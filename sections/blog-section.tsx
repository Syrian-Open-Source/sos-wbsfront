import { Box, Grid, Paper, Typography } from "@mui/material";
import { CustomLink } from "../components/custom-link";
import { PostCard } from "../components/post-card";
const posts = [
  {
    slug: "nextjs",
    title: "NextJS Code Blog",
    date: "November 13, 2021",
    image: "/images/img1.jpg",
  },
  {
    slug: "nodejs",
    title: "Node js Code Blog",
    date: "October 13, 2021",
    image: "/images/img2.jpg",
  },
  {
    slug: "React",
    title: "React Code Blog",
    date: "Dec 13, 2021",
    image: "/images/img3.jpg",
  },
];

// interface BlogSectionProps {
//   posts: any;
// }

export const BlogSection = () => {
  return (
    <Paper sx={{ padding: "2rem" }}>
      <Box marginBottom="1.2rem">
        <Box>
          <Typography variant="h2" fontWeight="500" paddingBottom="1rem">
            Blog recommendations
          </Typography>
        </Box>
        <Box marginLeft="-0.8rem">
          <CustomLink href="/blog" variant="h4" fontWeight="700">
            See the full blog
          </CustomLink>
        </Box>
      </Box>
      <Grid container spacing={2}>
        {posts.map((post: any) => (
          <Grid key={post.slug} item md={4}>
            <PostCard post={post} />
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};
