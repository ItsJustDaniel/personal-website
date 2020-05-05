const ArticleData = async () => {
  const response = await fetch("/api/blog");
  const json = await response.json();
  return json;
};

export default ArticleData;
