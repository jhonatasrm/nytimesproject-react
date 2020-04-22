const apiKey = 'GLFaugbVyCdsj61jzn9wJkllgZhVeXRy';

export const articlesScience = fetch(
  `https://api.nytimes.com/svc/topstories/v2/science.json?&api-key=${apiKey}`,
).then((response) => response.json());
export const articlesTechnology = fetch(
  `https:api.nytimes.com/svc/topstories/v2/technology.json?&api-key=${apiKey}`,
).then((response) => response.json());
