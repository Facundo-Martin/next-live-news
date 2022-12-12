import { categories } from "../constants";

export default async function Homepage() {
  // fetch news data
  const news: NewsResponse = await fetchNews(categories.join(","));
  return <div>Homepage</div>;
}
