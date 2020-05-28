// ---
// Post GraphQL Response

export type Post = {
  node: {
    id: number;
    frontmatter: PostFrontmatter;
    fields: { slug: string };
    excerpt: string;
  };
};

export type GraphQLResponse = {
  data: {
    allMarkdownRemark: {
      edges: Post[];
    };
  };
};

export type SingleGraphQLResponse = {
  data: {
    markdownRemark: {
      html: string;
      fields: { slug: string };
      frontmatter: PostFrontmatter;
    };
  };
};

type PostFrontmatter = {
  title: string;
  date: string;
  crosspost?: Crosspost;
};

type Crosspost = {
  site: string;
  url: string;
  hasPrefix: boolean;
};
