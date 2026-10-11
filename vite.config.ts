import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

// GitHub Pages 주소가 /my-sns/ 로 시작하므로 거기에 맞춘다
const base = '/my-sns/'

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [
    react(),
    VitePWA({
      // 새로 배포하면 저절로 새 버전으로 바뀐다
      registerType: 'autoUpdate',
      manifest: {
        name: '빵지순례',
        short_name: '빵지순례',
        description: '동네 빵집을 순례하며 남기는 사진 기록',
        lang: 'ko',
        display: 'standalone',
        // docs/요구사항.md 디자인 규칙의 cream
        theme_color: '#f8f0e3',
        background_color: '#f8f0e3',
        start_url: base,
        scope: base,
        icons: [
          { src: 'pwa-192x192.png', sizes: '192x192', type: 'image/png' },
          { src: 'pwa-512x512.png', sizes: '512x512', type: 'image/png' },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
      workbox: {
        // 빌드된 앱 파일만 저장한다
        // runtimeCaching 을 두지 않으므로 Supabase 요청과 게시물 사진은 저장하지 않는다
        globPatterns: ['**/*.{js,css,html,svg,png}'],
      },
    }),
  ],
})
