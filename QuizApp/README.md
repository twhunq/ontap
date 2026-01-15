# Quiz Triết Học Mác - Lênin

Hệ thống bài tập trắc nghiệm Triết học Mác - Lênin

## 🚀 Deploy lên Vercel

### Cách 1: Deploy qua Vercel CLI

```bash
# Bước 1: Cài đặt Vercel CLI
npm install -g vercel

# Bước 2: Di chuyển vào thư mục dự án
cd "c:\Users\trant\Downloads\Test Triết\QuizApp"

# Bước 3: Login vào Vercel
vercel login

# Bước 4: Deploy
vercel
```

### Cách 2: Deploy qua Vercel Dashboard

1. Truy cập https://vercel.com
2. Click "Add New" → "Project"
3. Upload thư mục QuizApp hoặc connect với Git
4. Click "Deploy"

## 📁 Cấu Trúc Dự Án

```
QuizApp/
├── index.html          # Trang chủ
├── quiz1.html          # Bài 1
├── quiz2.html          # Bài 2
├── home.css            # CSS trang chủ
├── home.js             # JS trang chủ
├── style.css           # CSS quiz
├── quiz1.js            # JS bài 1
├── quiz2.js            # JS bài 2
├── quiz2-data.js       # Data bài 2
└── vercel.json         # Cấu hình Vercel
```

## 🔧 Khắc Phục Lỗi

Nếu gặp lỗi khi deploy, xem file hướng dẫn chi tiết trong thư mục artifacts.
