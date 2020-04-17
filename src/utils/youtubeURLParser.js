const { URL } = require('url');

/**

 * Parse a string as a potential YouTube resource URL.

 * @param {string} url

 * @returns {{video: ?string, channel: ?string, playlist: ?string}}

 */

exports.parseURL = (url) => {
  const parsed = new URL(url);

  switch (parsed.hostname) {
    case 'www.youtube.com':
    case 'youtube.com':
    case 'm.youtube.com':
    case 'music.youtube.com': {
      const idRegex = /^[a-zA-Z0-9-_]+$/;

      if (parsed.pathname === '/watch') {
        if (!idRegex.test(parsed.searchParams.get('v'))) return {};

        // if (parsed.searchParams.has('list')) {
        //   return {
        //     type: 'playlist',
        //     id: parsed.searchParams.get('list')
        //   };
        // }

        return {
          type: 'video',
          id: parsed.searchParams.get('v')
        };
      } else if (parsed.pathname === '/playlist') {
        if (!idRegex.test(parsed.searchParams.get('list'))) return {};

        return {
          type: 'playlist',
          id: parsed.searchParams.get('list')
        };
      }

      return {};
    }

    case 'youtu.be':

      return { video: /^\/[a-zA-Z0-9-_]+$/.test(parsed.pathname) ? parsed.pathname.slice(1) : null };

    default:

      return {};
  }
};
