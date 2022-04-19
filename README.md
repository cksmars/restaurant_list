# Restaurant_list
![Index page about Restaurant List](https://github.com/cksmars/restaurant_list/blob/main/restaurant_list2.png)

## 介紹
此專案提供餐廳的資訊，包含餐廳地址、評分、描述等

## 功能列表
- 瀏覽所有餐廳
- 查看餐廳詳細資訊，如:餐廳類別、地址、電話、描述
- 可用餐廳名稱或餐廳類別搜尋餐廳
- 點選餐廳地址可跳至 Google 地圖
- 新增餐廳
- 編輯餐廳內容
- 刪除餐廳


# 使用方式
1. 請先確認有安裝node.js 與 npm
2. 將此專案 clone 到本地
```
git clone https://github.com/cksmars/restaurant_list
```
3. 透過終端機進入專案資料夾，執行以下指令安裝專案使用套件：
```
npm install
```
4. 建立一個 .env 文件，並設定環境變數：
```
MONGODB_URI=<your connection string>
```
5. 新增種子資料，看到done表示新增完成
```
npm run seed
```
6. 執行啟動伺服器：
```
npm run start
```
7. 若終端機出現此行訊息代表伺服器順利運行，請打開瀏覽器進入以下網址<http://localhost:3000>
```
Express is listening on http://localhost:3000
mongodb connected
```
8. 若欲停止使用，請按：
```
ctrl + c
```

# 開發工具
- Node.js 16.14.2
- Express 4.16.4
- Express-Handlebars 4.0.2
- Bootstrap 4.3.1
- Font-awesome 5.8.1
- MongoDB
- mongoose 5.9.17

# 作者
- Alpha Camp - project design.
- cksmars - project develop.