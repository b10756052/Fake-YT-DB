# Fake-YouTube

由 MongoDB、Express、React、Node.js 所構成的**MERN project**。(有RWD)

**簡介：**
- Server端
  - 註冊功能 (Bcrypt加密、存入MongoDB Atlas的使用者表單)   
  - 登入功能 (產生JWT、搭配Passport來保護Sever端的API)
  - 收藏功能 (對DB的影片收藏表單CRUD)    
- Client端
  - 用Axios對後端API發送Request
    (註冊、登入、對DB的影片收藏表單CRUD)
  - 用Fetch對YT API發送Request
    (在首頁顯示YT台灣地區的發燒影片)
    (搜索則為透過API從YT抓搜尋結果回來顯示)
