import Box from 'components/Box'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { useTheme } from 'next-themes'

import * as S from './styles'
import { useEffect, useState } from 'react'

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <Box
      css={{
        padding: '$4'
      }}
    >
      <S.Toggle
        defaultPressed={theme === 'dark'}
        onPressedChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      >
        {theme === 'light' ? <MoonIcon /> : <SunIcon />}
      </S.Toggle>
    </Box>
  )
}

export default ThemeSwitcher
