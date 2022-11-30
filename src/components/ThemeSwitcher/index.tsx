import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

import * as Toggle from '@radix-ui/react-toggle'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { Button } from 'components/Button'
import Tooltip from 'components/Tooltip'

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()
  const isDark = resolvedTheme === 'dark'

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <Tooltip content={`${isDark ? 'Light' : 'Dark'}`}>
      <Toggle.Root asChild>
        <Button onClick={() => setTheme(isDark ? 'light' : 'dark')}>
          {!mounted ? (
            <span className="h-[15px] w-[15px]"></span>
          ) : isDark ? (
            <SunIcon />
          ) : (
            <MoonIcon />
          )}
        </Button>
      </Toggle.Root>
    </Tooltip>
  )
}

export default ThemeSwitcher
