import {API_KEY, PAGE_SIZE} from "../../constants";

export const loadNews = async (state) => {
  const { sources, page, q } = state;
  let url = `https://newsapi.org/v2/top-headlines?apiKey=${API_KEY}&language=en&pageSize=${PAGE_SIZE}&page=${page}`;

  if (sources && sources.length) {
    url += `&sources=${sources.join(',')}`;
  }
  if (q) {
    url += `&q=${q}`;
  }

  const response = await fetch(encodeURI(url));

  return await response.json();
};
