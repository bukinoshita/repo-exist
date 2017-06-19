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

## License

MIT © [Bu Kinoshita](https://bukinoshita.io)
