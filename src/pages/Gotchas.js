import React from 'react'
import NavPage from '../common/nav-page'
import ParseMD from '../utils/parse-md'
import raw from 'raw.macro'

const content = raw('./md/Gotchas.md')

export default function GotchasPage({path}) {
  return (
    <NavPage currentPath={path}>
      <ParseMD contents={content} />
    </NavPage>
  )
}
