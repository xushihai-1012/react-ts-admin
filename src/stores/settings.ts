import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { getItem, setItem, removeItem } from "@/utils/storage";

import { StorageEnum, ThemeColorPresets, ThemeLayout, ThemeMode } from "@/types/enum";

// interface settingsState {
//   colorPrimary: string
//   setColorPrimary: (color: string) => void
//   collapsed: boolean
//   setCollapsed: (collapsed: boolean) => void
// }

// const useSettingsStore = create<settingsState>()(
//   persist(
//     (set) => ({
//       colorPrimary: '#1DA57A',
//       setColorPrimary: (color) => set({ colorPrimary: color }),
//       collapsed: true,
//       setCollapsed: (collapsed) => set({ collapsed: collapsed }),
//     }),
//     {
//       name: 'app-settings',
//       partialize: (state) =>
//         Object.fromEntries(
//           Object.entries(state).filter(([key]) => [key].includes(key)),
//         ),
//     },
//   ),
// )

type SettingsType = {
  themeColorPresets: ThemeColorPresets;
  themeMode: ThemeMode;
  themeLayout: ThemeLayout;
  themeStretch: boolean;
  breadCrumb: boolean;
  multiTab: boolean;
};

type SettingStore = {
  settings: SettingsType;
  // 使用 actions 命名空间来存放所有的 action
  actions: {
    setSettings: (settings: SettingsType) => void;
    clearSettings: () => void;
  };
};

const useSettingsStore = create<SettingStore>((set) => ({
  settings: getItem<SettingsType>(StorageEnum.Settings) || {
    themeColorPresets: ThemeColorPresets.Default,
    themeMode: ThemeMode.Light,
    themeLayout: ThemeLayout.Vertical,
    themeStretch: false,
    breadCrumb: true,
    multiTab: true,
  },
  actions: {
    setSettings: (settings) => {
      set({ settings })
      setItem(StorageEnum.Settings, settings)
    },
    clearSettings() {
      removeItem(StorageEnum.Settings)
    }
  }
}))

export default useSettingsStore
