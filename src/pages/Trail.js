import React from 'react'
import NavPage from '../common/nav-page'
import ParseMD from '../utils/parse-md'
import raw from 'raw.macro'
import DemoGrid from '../examples/components/DemoGrid'
import Demo from '../examples/components/Demo'
import examples from '../examples/components/examples-renderprops'

const content = raw('./md/Trail.md')

export default function UseSpringPage({path}) {
  return (
    <NavPage currentPath={path}>
      <ParseMD contents={content} />
      <DemoGrid padding={0}>
        {examples
          .filter(data => data.tags.includes('trails'))
          .map(data => (
            <Demo key={data.name} {...data} import={import('../examples/demos/' + data.name)} />
          ))}
      </DemoGrid>
    </NavPage>
  )
}
