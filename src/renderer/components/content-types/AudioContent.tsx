import React from 'react'

import * as Hyperfile from '../../hyperfile'
import { ContentProps } from '../Content'
import ContentTypes from '../../ContentTypes'
import { useDocument } from '../../Hooks'
import './AudioContent.css'

export interface AudioDoc {
  hyperfileUrl: Hyperfile.HyperfileUrl
}

export default function AudioContent({ hypermergeUrl }: ContentProps) {
  const [doc] = useDocument<AudioDoc>(hypermergeUrl)

  if (!doc) {
    return null
  }
  if (!doc.hyperfileUrl) {
    return null
  }

  return (
    <div className="AudioContent">
      <audio controls src={doc.hyperfileUrl} />
    </div>
  )
}

AudioContent.minWidth = 15
AudioContent.minHeight = 4
AudioContent.maxHeight = 6
AudioContent.defaultWidth = 18
AudioContent.defaultHeight = 4

interface Attrs {
  hyperfileUrl: string
}

const supportsMimeType = (mimeType) => !!mimeType.match('audio/')

ContentTypes.register({
  type: 'audio',
  name: 'Audio',
  icon: 'audio',
  contexts: {
    workspace: AudioContent,
    board: AudioContent,
  },
  supportsMimeType,
})
