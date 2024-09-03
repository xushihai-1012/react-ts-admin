import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'
import AutoImport from 'unplugin-auto-import/vite'
import { visualizer } from 'rollup-plugin-visualizer'
import vitePluginCompression from 'vite-plugin-compression'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // 集成svg
    createSvgIconsPlugin({
      // 指定 SVG图标 保存的文件夹路径
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      // 指定 使用svg图标的格式
      symbolId: 'icon-[dir]-[name]',
    }),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],
      imports: ['react', 'react-router-dom'],
      //   dts: fileURLToPath(new URL('./auto-imports.d.ts', import.meta.url)),
      //   eslintrc: {
      //     enabled: true,
      // filepath: fileURLToPath(
      //   new URL('./.eslintrc-auto-import.json', import.meta.url),
      // ),
      // globalsPropValue: true,
      //   },
    }),
    visualizer({
      gzipSize: true,
      brotliSize: true,
      emitFile: false,
      filename: 'test.html', //分析图生成的文件名
      open: true, //如果存在本地服务端口，将在打包后自动展示
    }),
    // 打包文件压缩
    vitePluginCompression({
      threshold: 1024 * 10,
      ext: '.gz',
      deleteOriginFile: true,
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        javascriptEnabled: true,
        additionalData: '@import "./src/style/variable.scss";',
      },
    },
  },
  // 配置路径别名
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  //   配置代理
  //   server: {
  //     proxy: {
  //       '/api': {
  //         target: 'https://xxxxx.com',
  //         changeOrigin: true,
  //         rewrite: (path) => path.replace(/^\/api/, ''),
  //       },
  //     },
  //   },
  build: {
    sourcemap: true,
    outDir: 'reactTsAdmin',
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      output: {
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',
        assetFileNames: '[ext]/[name]-[hash].[ext]',
        manualChunks: {
          //   vue: ['vue', 'pinia', 'vue-router'],
          //   ant: ['ant-design-vue'],
        },
      },
    },
  },
})
