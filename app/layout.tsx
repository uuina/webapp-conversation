import { getLocaleOnServer } from '@/i18n/server'

import './styles/globals.css'
import './styles/markdown.scss'

export const metadata = {
  title: 'AI 助手',
  description: '简洁、智能的 AI 对话助手',
}

export const viewport = {
  themeColor: '#ffffff',
  userScalable: true,
}

const LocaleLayout = async ({
  children,
}: {
  children: React.ReactNode
}) => {
  const locale = await getLocaleOnServer()
  return (
    <html lang={locale ?? 'zh'} className="h-full bg-background">
      <body className="h-full font-sans antialiased">
        <div className="h-dvh min-w-[300px] overflow-hidden">
          {children}
        </div>
      </body>
    </html>
  )
}

export default LocaleLayout
