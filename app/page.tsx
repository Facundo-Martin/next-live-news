import { categories } from "../constants";
import { fetchNews } from "../lib/fetchNews";

export default async function Homepage() {
  // fetch news data
  const news: NewsResponse = await fetchNews(categories.join(","));
  return <div>Homepage</div>;
}
