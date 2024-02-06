# GYMPlus Website

- An all-encompassing fitness platform offering gym information, diverse courses, and expert coaches. Explore personalized workout plans,
  engage in real-time chat support, and seamlessly purchase courses. Elevate your fitness journey with insightful articles and a vibrant community.
- 一個全面的健身平台，提供健身房資訊、多樣化課程和專業教練。探索個人化的運動計畫，即時聯繫客服，輕鬆購買課程。透過深入的文章和充滿活力的社群，提升使用者的健身之旅。

## Project Packages 專案套件

- **Vue 3.0 + Vite**: Fast development setup with Vue 3 and Vite.
- **Vue Router**: Handle navigation in the application.
- **Pinia**: State management for the Vue application.
- **Bootstrap 5**: Responsive CSS framework for styling.
- **VeeValidate**: Form validation for user inputs.
- **AOS/SweetAlert2**: Provide animations and alert dialogs.
- **localStorage**: Local storage for storing cart and customer messages.

## 資料夾配置

src/
|-- assets/
| |-- images/
| |-- scss/
|-- components/
|-- views/
|-- router/
|-- store/
|-- App.vue
|-- main.js

- **assets**: Store images and SCSS files.
- **components**: Small components (names should be in uppercase).
- **views**: Main pages (names should end with "View").
- **router**: Vue Router configuration.
- **store**: Pinia store for state management.
- **App.vue**: Entry component.
- **main.js**: Entry script.

## Getting Started 專案執行

1. Clone the repository:

   ```bash
   git clone https://github.com/ashkuan/GYMPlus.git

   ```

2. Install dependencies:

   ```bash
   git clone https://github.com/ashkuan/GYMPlus.git

   ```

3. Run the development server:

   ```bash
   npm run dev

   ```

4. Open your browser and visit:

   ```bash

   ```

## branch 命名

`feature/ 開發者 頁面`

## commit

`feat: 做了什麼事情`

👉 commit 類型：

- `feat` - 新增/修改功能
- `fix` - 修正
- `docs` - 修改/新增文件
- `style` - 修改程式碼格式或風格，不影響原有運作，例如 ESLin
- `refactor` - 重構 or 優化，不屬於 bug 也不屬於新增功能等
- `test` - 增加測試功能 (when adding missing tests)
- `chore` - 增加或修改第三方套件(輔助工具)等 (maintain)
