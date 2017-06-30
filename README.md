# repo-exist [![Build Status](https://travis-ci.org/bukinoshita/repo-exist.svg?branch=master)](https://travis-ci.org/bukinoshita/repo-exist)

> Checks if GitHub repository exist


## Install

```
$ npm install --save repo-exist
```


## Usage
```js
const repoExist = require('repo-exist')

repoExist({ owner: 'bukinoshita', repo: 'repo-exist' })
//=> true

repoExist({ owner: 'bukinoshita', repo: 'not-a-repo' })
//=> false
```


## API

### repoExist({ owner, repo })

Returns a `promise`.

#### owner

Type: `string`<br>
Required

#### repo

Type: `string`<br>
Required


## Related

- [git-synced](https://github.com/bukinoshita/git-synced) — 🎐 Keep a fork up to date
- [repo-exist](https://github.com/bukinoshita/repo-exist) — Checks if GitHub repository exist
- [gopn](https://github.com/bukinoshita/gopn) — Open GitHub repositories
- [is-github-repo](https://github.com/bukinoshita/is-github-repo) — Checks if string is a git repository
- [git-url-prettify](https://github.com/bukinoshita/git-url-prettify) — Prettify git url
- [git-url-uglify](https://github.com/bukinoshita/git-url-uglify) — Uglify git url
- [del-git-index](https://github.com/bukinoshita/del-git-index) — Safely delete index.lock of the current project

## License

MIT © [Bu Kinoshita](https://bukinoshita.io)
