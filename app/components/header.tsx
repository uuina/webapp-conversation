import type { FC } from 'react'
import React from 'react'
import {
  Bars3Icon,
  PencilSquareIcon,
} from '@heroicons/react/24/solid'
import AppIcon from '@/app/components/base/app-icon'
export interface IHeaderProps {
  title: string
  isMobile?: boolean
  onShowSideBar?: () => void
  onCreateNewChat?: () => void
}
const Header: FC<IHeaderProps> = ({
  title,
  isMobile,
  onShowSideBar,
  onCreateNewChat,
}) => {
  return (
    <header className="flex h-14 shrink-0 items-center justify-between border-b border-gray-200/80 bg-white/95 px-3 backdrop-blur-sm tablet:px-5">
      <button
        type="button"
        aria-label="打开会话列表"
        className={`flex size-9 items-center justify-center rounded-lg text-gray-600 transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 ${isMobile ? '' : 'invisible'}`}
        onClick={() => onShowSideBar?.()}
      >
        <Bars3Icon className="size-5" />
      </button>
      <div className="flex min-w-0 items-center gap-2.5">
        <span className="flex size-7 items-center justify-center overflow-hidden rounded-lg bg-gray-900 text-white">
          <AppIcon size="small" />
        </span>
        <div className="truncate text-sm font-semibold text-gray-900">{title}</div>
      </div>
      <button
        type="button"
        aria-label="新建对话"
        className={`flex size-9 items-center justify-center rounded-lg text-gray-600 transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 ${isMobile ? '' : 'invisible'}`}
        onClick={() => onCreateNewChat?.()}
      >
        <PencilSquareIcon className="size-5" />
      </button>
    </header>
  )
}

export default React.memo(Header)
