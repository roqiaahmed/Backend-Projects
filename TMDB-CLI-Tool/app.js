#!/usr/bin/env node

import { program } from 'commander';
import 'dotenv/config.js';

const movies = [];
program
  .version('1.0.0')
  .description('My Node CLI')
  .option('-n, --type <string>', 'add type')
  .action((options) => {
    let type = options.type;
    switch (type) {
      case 'playing':
        type = 'now_playing';
        break;
      case 'popular':
        type = 'popular';
        break;
      case 'top':
        type = 'top_rated';
        break;
      case 'upcoming':
        type = 'upcoming';
        break;
      default:
        type = 'now_playing';
        break;
    }

    const url = `https://api.themoviedb.org/3/movie/${type}?language=en-US&page=1`;
    const option = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: process.env.TMDB_TOKN,
      },
    };

    fetch(url, option)
      .then((res) => res.json())
      .then((json) => {
        json.results.forEach((movie) => {
          movies.push({
            title: movie.title,
          });
        });
        console.log(movies);
      })
      .catch((err) => console.error(err));
  });
program.parse();
