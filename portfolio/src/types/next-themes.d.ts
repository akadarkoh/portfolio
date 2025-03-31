declare module 'next-themes' {
    export interface ThemeProviderProps {
      children: React.ReactNode
      attribute?: string
      defaultTheme?: string
      enableSystem?: boolean
      disableTransitionOnChange?: boolean
    }
    
    export const ThemeProvider: React.ComponentType<ThemeProviderProps>
    export const useTheme: () => {
      theme: string
      setTheme: (theme: string) => void
      themes: string[]
    }
  }