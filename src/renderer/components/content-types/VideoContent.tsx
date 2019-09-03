import React from 'react'

import * as Hyperfile from '../../hyperfile'
import { ContentProps } from '../Content'
import ContentTypes from '../../ContentTypes'
import { useDocument } from '../../Hooks'
import './VideoContent.css'

export interface VideoDoc {
  hyperfileUrl: Hyperfile.HyperfileUrl
}

export default function VideoContent({ hypermergeUrl }: ContentProps) {
  const [doc] = useDocument<VideoDoc>(hypermergeUrl)

  if (!doc) {
    return null
  }
  if (!doc.hyperfileUrl) {
    return null
  }

  return (
    <div className="VideoContent">
      <video controls src={doc.hyperfileUrl} />
    </div>
  )
}

VideoContent.minWidth = 15
VideoContent.minHeight = 12
VideoContent.defaultWidth = 18

interface Attrs {
  hyperfileUrl: string
}

const supportsMimeType = (mimeType) => !!mimeType.match('video/')

ContentTypes.register({
  type: 'video',
  name: 'Video',
  icon: 'video',
  contexts: {
    workspace: VideoContent,
    board: VideoContent,
  },
  supportsMimeType,
})
