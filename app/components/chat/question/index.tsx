'use client'
import type { FC } from 'react'
import React from 'react'
import type { IChatItem } from '../type'
import StreamdownMarkdown from '@/app/components/base/streamdown-markdown'
import ImageGallery from '@/app/components/base/image-gallery'

type IQuestionProps = Pick<IChatItem, 'id' | 'content' | 'useCurrentUserAvatar'> & {
  imgSrcs?: string[]
}

const Question: FC<IQuestionProps> = ({ id, content, useCurrentUserAvatar, imgSrcs }) => {
  const userName = ''
  return (
    <article className="flex items-start justify-end gap-3" key={id}>
      <div className="max-w-[85%] rounded-[22px] bg-gray-100 px-4 py-2.5 text-sm leading-6 text-gray-900 tablet:max-w-[75%]">
        {imgSrcs && imgSrcs.length > 0 && (
          <div className="mb-2 overflow-hidden rounded-xl">
            <ImageGallery srcs={imgSrcs} />
          </div>
        )}
        <StreamdownMarkdown content={content} />
      </div>
      {useCurrentUserAvatar && (
        <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-gray-800 text-sm font-medium text-white">
          {userName?.[0].toLocaleUpperCase()}
        </div>
      )}
    </article>
  )
}

export default React.memo(Question)
