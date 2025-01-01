import fetch from 'node-fetch';

const GITHUB_API_URL = 'https://api.github.com';

export class GitHubUserActivity {
  constructor(username) {
    this.username = username;
  }

  async fetchActivity() {
    const response = await fetch(
      `${GITHUB_API_URL}/users/${this.username}/events`
    );
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('User not found. Please check the username.');
      } else {
        throw new Error(`Error fetching data: ${response.status}`);
      }
    }

    return await response.json();
  }

  async displayActivity() {
    const events = await this.fetchActivity();
    if (events.length === 0) {
      console.log('No recent activity found.');
      return;
    }
    events.forEach((event) => {
      let action;
      switch (event.type) {
        case 'PushEvent':
          const commitCount = event.payload.commits.length;
          action = `Pushed ${commitCount} commit(s) to ${event.repo.name}`;
          break;
        case 'IssuesEvent':
          action = `${
            event.payload.action.charAt(0).toUpperCase() +
            event.payload.action.slice(1)
          } an issue in ${event.repo.name}`;
          break;
        case 'WatchEvent':
          action = `Starred ${event.repo.name}`;
          break;
        case 'ForkEvent':
          action = `Forked ${event.repo.name}`;
          break;
        case 'CreateEvent':
          action = `Created ${event.payload.ref_type} in ${event.repo.name}`;
          break;
        default:
          action = `${event.type.replace('Event', '')} in ${event.repo.name}`;
          break;
      }
      console.log(`- ${action}`);
    });
  }
}
