import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface settingsState {
  colorPrimary: string
  setColorPrimary: (color: string) => void
}

const useSettingsStore = create<settingsState>()(
  persist(
    (set) => ({
      colorPrimary: '#1DA57A',
      setColorPrimary: (color) => set({ colorPrimary: color }),
    }),
    {
      name: 'app-settings',
      partialize: (state) =>
        Object.fromEntries(
          Object.entries(state).filter(([key]) => {
            console.log([key], key)
            ;['colorPrimary'].includes(key)
          }),
        ),
    },
  ),
)

export default useSettingsStore
