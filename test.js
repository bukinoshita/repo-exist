'use strict'

import test from 'ava'
import repoExist from './'

test('checks if github repo exist', async t => {
  t.true(await repoExist({ owner: 'bukinoshita', repo: 'goot' }))
})

test('reject if github repo does not exist', async t => {
  t.falsy(await repoExist({ owner: 'bukinoshita', repo: 'goot-v2' }))
})

test('rejects when owner or repo is missing', async t => {
  await t.throws(repoExist())
})
