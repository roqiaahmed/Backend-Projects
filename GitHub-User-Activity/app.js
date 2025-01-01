import { GitHubUserActivity } from './GitHubUserActivity.js';
if (process.argv.length >= 2) {
  const username = process.argv[2];

  const user = new GitHubUserActivity(username);
  await user.displayActivity();
} else {
  console.log('Please provide a username');
}
