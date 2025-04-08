# 📊 IoT Sensor Dashboard
![Screenshot 2025-04-09 040539](https://github.com/user-attachments/assets/6e2a3f3f-ee33-40dc-850f-54ee6b9c1610)
![Screenshot 2025-04-09 040548](https://github.com/user-attachments/assets/bca3127c-6d22-497f-b53f-aadcd71eb576)


A simple React web app that shows real-time sensor data from [ThingSpeak](https://thingspeak.com/). It displays heart rate, humidity, temperature, gas sensor readings, and more using live charts.

---

## 🚀 Features

- Live data from ThingSpeak
- Line charts for each sensor
- Shows current sensor values
- Alerts if values cross safe limits

---

## 🔧 Setup (Step-by-Step)

### 1. Clone this project

```bash
https://github.com/pri-yanka3005/EDP.git
cd EDP

````

### 2. Install the Packages

```bash
npm install
```

### 3. Add Your ThingSpeak Info

Open `App.js` and update the following values:

```js
const channelId = "YOUR_CHANNEL_ID";
const apiKey = "YOUR_READ_API_KEY";
```

### 4. Start the App

```bash
npm start
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🌐 Example Channel (For Testing)

If you don’t have your own ThingSpeak channel yet, use this:

- **Channel ID:** `2890175`
- **API Key:** `RD42ETDDQXFXXNDS`

---

## 📦 Tech Used

- ⚛️ React
- 📈 Recharts
- 🌐 ThingSpeak API
