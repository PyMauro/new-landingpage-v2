export const allProjectsQuery = `
  *[_type == "project"] | order(_createdAt desc) {
    _id,
    title,
    slug,
    summary,
    "category": category->{
      title,
      slug
    },
    "coverImage": coverImage.asset->url
  }
`;

export const projectBySlugQuery = `
  *[_type == "project" && slug.current == $slug][0]{
    _id,
    title,
    summary,
    year,
    client,
    link,
    featured,
    content,
    "category": category->{
      title,
      slug
    },
    "coverImage": coverImage.asset->url,
    "gallery": gallery[]{
      ...,
      _type == "image" => {
        "url": asset->url
      },
      _type == "file" => {
        "url": asset->url,
        caption
      }
    }
  }
`;

export const allCategoriesQuery = `
  *[_type == "workCategory"] | order(title asc) {
    _id,
    title,
    slug,
    description
  }
`;

export const projectsByCategoryQuery = `
  *[_type == "project" && category->slug.current == $slug] | order(_createdAt desc) {
    _id,
    title,
    slug,
    summary,
    "coverImage": coverImage.asset->url
  }
`;
