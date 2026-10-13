// vite.config.js 예시
import { defineConfig } from 'vite'
import react from '@vitejs/react-plugin'

export default defineConfig({
  plugins: [react()],
  base: '/mini-todo/', // 👈 본인의 GitHub 저장소(Repository) 이름을 적어주세요!
})
