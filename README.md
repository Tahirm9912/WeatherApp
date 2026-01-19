# 🌦️ Weather App (Express + EJS)

A simple weather application built using Node.js, Express, EJS, and Axios that fetches real-time weather data from the WeatherAPI based on a city name entered by the user.

🚀 Features

Search weather by city name
Displays:

  * Temperature
  * Weather condition
  * Location details
Server-side rendering using **EJS**
Uses **WeatherAPI** for real-time data
Simple and clean Express setup

🛠️ Tech Stack

* **Node.js**
* **Express.js**
* **EJS (Embedded JavaScript Templates)**
* **Axios**
* **Body-Parser**
* **WeatherAPI**

---

## 📂 Project Structure

```
project/
│
├── public/            # Static files (CSS, images, etc.)
├── views/
│   └── weather.ejs    # EJS template
├── index.js           # Main server file
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/weather-app.git
cd weather-app
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Set up environment variables (recommended)

Create a `.env` file:

```env
WEATHER_API_KEY=your_api_key_here
```

Update your code:

```js
import dotenv from "dotenv";
dotenv.config();
```

---

## ▶️ Run the application

```bash
node index.js
```

or (if using nodemon):

```bash
nodemon index.js
```

The server will start at:

```
http://localhost:3000
```

---

## 🧪 How It Works

1. User enters a city name in the form
2. Form sends a POST request to `/weather`
3. Server calls **WeatherAPI** using Axios
4. Weather data is passed to the EJS template
5. Weather details are rendered on the page

---

## 🧾 Example API Usage

```js
const url_api = `http://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=`;
const result = await axios.get(url_api + city);
```

---

## ❗ Error Handling

* Displays an error message if:

  * City is not found
  * API request fails
* Errors are passed to EJS as strings

---

## 🔐 Security Note

⚠️ **Do not expose your API key in public repositories.**
Always use environment variables (`.env`).

---

## 📌 Future Improvements

* Add forecast (3-day / 7-day)
* Add loading spinner
* Improve UI with CSS
* Client-side validation
* Deploy to Render / Vercel

## 👨‍💻 Author

Built by **[Your Name]**

---

If you want, I can:

* Make a **shorter README**
* Add **screenshots section**
* Write a **professional GitHub-style README**
* Customize it for **deployment**

Just tell me 👍
