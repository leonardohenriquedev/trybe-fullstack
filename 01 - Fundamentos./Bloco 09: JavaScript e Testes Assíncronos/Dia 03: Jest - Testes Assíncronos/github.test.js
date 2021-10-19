// githubApi.test.js

const fetch = require('node-fetch');

const getRepos = (url) => (
  fetch(url)
  .then((response) => response.json())
  .then((data) => data.map((repo) => repo.name))
);

// implemente seus testes aqui

describe("Testa a função getRepos", () => {
  it("Testa se existe os repositorios esperados", async() => {
    const repoList = await getRepos('https://api.github.com/orgs/tryber/repos');

    expect(repoList).toContain('sd-01-week4-5-project-todo-list');

    expect(repoList).toContain('sd-01-week4-5-project-meme-generator');

  });

})
