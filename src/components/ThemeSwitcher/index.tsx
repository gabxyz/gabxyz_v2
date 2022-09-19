import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

import * as Toggle from '@radix-ui/react-toggle'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import Button from 'components/Button'

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()
  const isDark = resolvedTheme === 'dark'

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <Button
      onPressedChange={() => setTheme(isDark ? 'light' : 'dark')}
      as={Toggle.Root}
      size="lg"
    >
      {mounted && (isDark ? <SunIcon /> : <MoonIcon />)}
    </Button>
  )
}

export default ThemeSwitcher
