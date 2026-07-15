import React from 'react'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import {
  ChatBubbleOvalLeftEllipsisIcon,
  PencilSquareIcon,
} from '@heroicons/react/24/outline'
import { ChatBubbleOvalLeftEllipsisIcon as ChatBubbleOvalLeftEllipsisSolidIcon } from '@heroicons/react/24/solid'
import Button from '@/app/components/base/button'
// import Card from './card'
import type { ConversationItem } from '@/types/app'

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

const MAX_CONVERSATION_LENTH = 20

export interface ISidebarProps {
  copyRight: string
  currentId: string
  onCurrentIdChange: (id: string) => void
  list: ConversationItem[]
}

const Sidebar: FC<ISidebarProps> = ({
  copyRight,
  currentId,
  onCurrentIdChange,
  list,
}) => {
  const { t } = useTranslation()
  return (
    <aside
      aria-label="会话列表"
      className="flex h-dvh w-[280px] shrink-0 flex-col overflow-hidden border-r border-gray-200 bg-gray-50"
    >
      {list.length < MAX_CONVERSATION_LENTH && (
        <div className="shrink-0 p-3">
          <Button
            onClick={() => { onCurrentIdChange('-1') }}
            className="group !h-10 w-full shrink-0 !justify-start !rounded-xl !border-gray-300 !bg-white !px-3 !text-sm !font-medium !text-gray-800 shadow-sm hover:!bg-gray-100"
          >
            <PencilSquareIcon className="mr-3 size-5" /> {t('app.chat.newChat')}
          </Button>
        </div>
      )}

      <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-3 py-2">
        {list.map((item) => {
          const isCurrent = item.id === currentId
          const ItemIcon
            = isCurrent ? ChatBubbleOvalLeftEllipsisSolidIcon : ChatBubbleOvalLeftEllipsisIcon
          return (
            <div
              onClick={() => onCurrentIdChange(item.id)}
              key={item.id}
              className={classNames(
                isCurrent
                  ? 'bg-gray-200 text-gray-950'
                  : 'text-gray-700 hover:bg-gray-100 hover:text-gray-950',
                'group flex min-h-10 items-center rounded-lg px-3 py-2 text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400',
              )}
            >
              <ItemIcon
                className={classNames(
                  isCurrent
                    ? 'text-gray-900'
                    : 'text-gray-500 group-hover:text-gray-700',
                  'mr-3 size-4 flex-shrink-0',
                )}
                aria-hidden="true"
              />
              <span className="truncate">{item.name}</span>
            </div>
          )
        })}
      </nav>
      {/* <a className="flex flex-shrink-0 p-4" href="https://langgenius.ai/" target="_blank">
        <Card><div className="flex flex-row items-center"><ChatBubbleOvalLeftEllipsisSolidIcon className="text-primary-600 h-6 w-6 mr-2" /><span>LangGenius</span></div></Card>
      </a> */}
      <div className="shrink-0 border-t border-gray-200 px-4 py-4">
        <div className="truncate text-xs font-normal text-gray-500">© {copyRight} {(new Date()).getFullYear()}</div>
      </div>
    </aside>
  )
}

export default React.memo(Sidebar)
