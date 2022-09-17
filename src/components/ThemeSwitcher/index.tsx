import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

import * as Toggle from '@radix-ui/react-toggle'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()
  const isDark = resolvedTheme === 'dark'

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <Toggle.Root
      className="bg-mauve-3 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-md hover:bg-mauve-4"
      onPressedChange={() => setTheme(isDark ? 'light' : 'dark')}
    >
      {mounted && (isDark ? <SunIcon /> : <MoonIcon />)}
    </Toggle.Root>
  )
}

export default ThemeSwitcher
