/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 控えめで洗練されたカラーパレット
        primary: {
          50: '#F0F7FF',
          100: '#E6F0F9',
          200: '#CCE0F0',
          300: '#99C1E0',
          400: '#6699CC', // メインカラー（落ち着いたブルー）
          500: '#4477AA',
          600: '#336699',
        },
        secondary: {
          50: '#F9F7F4',
          100: '#F2EFE9',
          200: '#E5DFD3',
          300: '#D8CFBD',
          400: '#C0B5A0', // アクセントカラー（ベージュ）
          500: '#A89B80',
        },
        neutral: {
          50: '#F9F9F9',
          100: '#F2F2F2',
          200: '#E6E6E6',
          300: '#D9D9D9',
          400: '#CCCCCC',
          500: '#999999',
          600: '#666666',
          700: '#444444',
          800: '#333333',
        },
      },
      fontFamily: {
        // 日本語フォント
        sans: [
          '"Noto Sans JP"',
          'sans-serif',
        ],
        // 見出し用フォント
        heading: [
          '"Noto Serif JP"',
          'serif',
        ],
      },
      fontSize: {
        // フォントサイズの拡大
        'base': '1rem',     // 16px
        'lg': '1.125rem',   // 18px
        'xl': '1.25rem',    // 20px
        '2xl': '1.5rem',    // 24px
        '3xl': '1.875rem',  // 30px
        '4xl': '2.25rem',   // 36px
        '5xl': '3rem',      // 48px
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        'card': '0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.03)',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
      },
    },
  },
  plugins: [],
}
