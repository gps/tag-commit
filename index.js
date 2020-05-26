const core = require("@actions/core");
const github = require("@actions/github");
const env = process.env;

async function createTag(octokit, owner, repo, tagName, sha) {
  await octokit.request({
    method: "POST",
    url: `https://api.github.com/repos/${owner}/${repo}/git/refs`,
    headers: {
      "content-type": "application/json"
    },
    data: JSON.stringify({
      ref: `refs/tags/${tagName}`,
      sha: sha,
    }),
  });
}

async function run() {
  const token = core.getInput("GH_TOKEN");
  const octokit = new github.GitHub(token);
  const tagName = core.getInput("TAG_NAME");
  const owner = env.GITHUB_REPOSITORY.split("/")[0];
  const repo = env.GITHUB_REPOSITORY.split("/")[1];
  const sha= env.GITHUB_SHA

  createTag(octokit, owner, repo, tagName, sha);
}

run();
