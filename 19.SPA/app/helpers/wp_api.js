const NAME = "malvestida",
  DOMAIN = `https://www.${NAME}.com`,
  SITE = `${DOMAIN}/wp-json`,
  API_WP = `${SITE}/wp/v2`,
  PER_PAGE = 9,
  POSTS = `${API_WP}/posts?_embed`,
  POST = `${API_WP}/posts`,
  SEARCH = `${API_WP}/search?_embed&search=`;

let page = 1;

export default {
  NAME,
  DOMAIN,
  SITE,
  API_WP,
  POSTS,
  POST,
  SEARCH,
  page,
};
