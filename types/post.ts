interface PostImage {
  data: {
    id: string;
    attributes: {
      name: string;
      url: string;
    };
  };
}

interface PostCategory {
  id: string;
  attributes: {
    slug: string;
    title: string;
  };
}

interface PostCategories {
  data: PostCategory[];
}

interface PostAuthor {
  data: {
    id: string;
    attributes: {
      name: string;
      bio: string;
    };
  };
}

interface PostAttributes {
  slug: string;
  title: string;
  content: string;
  publishedAt: string;
  categories: PostCategories;
  author: PostAuthor;
  image: PostImage;
}

export interface Post {
  id: string;
  attributes: PostAttributes;
}
