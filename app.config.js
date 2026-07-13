const githubPagesBaseUrl = process.env.GITHUB_PAGES_BASE_URL;

module.exports = ({ config }) => ({
  ...config,
  experiments: {
    ...config.experiments,
    ...(githubPagesBaseUrl ? { baseUrl: githubPagesBaseUrl } : {}),
  },
});
