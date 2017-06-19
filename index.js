'use strict'

const ghGot = require('gh-got')

module.exports = ({ owner, repo } = {}) => {
  if (!(typeof owner === 'string' && typeof repo === 'string')) {
    return Promise.reject(new Error('Owner and Repo are required'))
  }

  return ghGot(`repos/${owner}/${repo}`, {
    headers: {
      'user-agent': 'https://github.com/bukinoshita/repo-exist'
    }
  })
  .then(() => true)
  .catch(() => false)
}
