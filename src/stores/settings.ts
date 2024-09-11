import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface settingsState {
  colorPrimary: string
  setColorPrimary: (color: string) => void
  collapsed: boolean
  setCollapsed: (collapsed: boolean) => void
}

const useSettingsStore = create<settingsState>()(
  persist(
    (set) => ({
      colorPrimary: '#1DA57A',
      setColorPrimary: (color) => set({ colorPrimary: color }),
      collapsed: true,
      setCollapsed: (collapsed) => set({ collapsed: collapsed }),
    }),
    {
      name: 'app-settings',
      partialize: (state) =>
        Object.fromEntries(
          Object.entries(state).filter(([key]) => [key].includes(key)),
        ),
    },
  ),
)

export default useSettingsStore
