
# 📰 Axios + Django REST Demo Application

A full-stack demo application built with:

* **Frontend:** React + Axios
* **Backend:** Django 5 + Django REST Framework
* **Database:** SQLite (development)

This project demonstrates REST API integration between a React frontend and a Django backend, including CRUD operations and structured feedback submission.

> ⚠️ This is a demo application intended for learning and experimentation.

---

# 📂 Project Structure

```
axios-tutorial/
│
├── react-axios-example/        # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── api.js
│   │   ├── utils.js
│   │   └── App.jsx
│   ├── public/
│   ├── package.json
│   └── build/
│
└── megaprojectfeedback/        # Django backend
    ├── newsfeedback/
    │   ├── models.py
    │   ├── serializers.py
    │   ├── views.py
    │   └── urls.py
    ├── manage.py
    ├── db.sqlite3
    └── requirements.txt
```

---

# 🏗 Backend Overview (Django + DRF)

The backend exposes RESTful endpoints using `ModelViewSet` and `DefaultRouter`.

## 🔹 Models

### News

* `title` – Article title
* `news_url` – Source link
* `publication_date` – Date published
* `source_name` – News source
* `content` – Article content

### NewsFeedback

* `title`
* `publication_date`
* `source_name`
* `feedback`
* `ismegaproject`
* `contentstatus`

Feedback entries are stored independently as part of the demo design.

---

## 🔹 API Endpoints

Base URL:

```
http://127.0.0.1:8000/api/
```

### News

| Method | Endpoint          |
| ------ | ----------------- |
| GET    | `/api/news/`      |
| POST   | `/api/news/`      |
| GET    | `/api/news/<id>/` |
| PUT    | `/api/news/<id>/` |
| PATCH  | `/api/news/<id>/` |
| DELETE | `/api/news/<id>/` |

### NewsFeedback

| Method | Endpoint                  |
| ------ | ------------------------- |
| GET    | `/api/newsfeedback/`      |
| POST   | `/api/newsfeedback/`      |
| GET    | `/api/newsfeedback/<id>/` |
| PUT    | `/api/newsfeedback/<id>/` |
| PATCH  | `/api/newsfeedback/<id>/` |
| DELETE | `/api/newsfeedback/<id>/` |

---

## ▶ Running Backend

### 1️⃣ Navigate to backend

```bash
cd megaprojectfeedback
```

### 2️⃣ Create virtual environment

```bash
python -m venv venv
source venv/bin/activate   # Linux / Mac
```

### 3️⃣ Install dependencies

```bash
pip install -r requirements.txt
```

### 4️⃣ Run migrations

```bash
python manage.py migrate
```

### 5️⃣ Start server

```bash
python manage.py runserver
```

Backend will run at:

```
http://127.0.0.1:8000/
```

---

# 🎨 Frontend Overview (React + Axios)

The frontend:

* Fetches news articles
* Displays them in cards
* Calculates days since publication
* Formats source name (title case)
* Allows users to:

  * Approve
  * Report
  * Submit feedback
* Displays content in modal reader

---

## 🔹 Key Files

* `api.js` – Axios configuration and API calls
* `NewsCard.jsx` – Individual article card
* `NewsList.jsx` – Renders list of articles
* `Feedback.jsx` – Feedback submission modal
* `Reader.jsx` – Article content modal
* `utils.js` – Helper functions

---

## ▶ Running Frontend

### 1️⃣ Navigate to frontend

```bash
cd react-axios-example
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Start development server

```bash
npm start
```

Frontend will run at:

```
http://localhost:3000/
```

---

# 🔄 How It Works

1. React calls:

```
GET /api/news/
```

2. News data is rendered in cards.
3. User clicks Approve or Report.
4. React sends:

```
POST /api/newsfeedback/
```

5. Feedback is stored in backend database.

---

# 🧠 Demo Features

* RESTful CRUD API
* React functional components + hooks
* Axios integration
* Modal-based UI
* Client-side utility functions
* Simple SQLite backend
* Monorepo-style structure

---

# ⚙️ Development Notes

* CORS must be enabled in Django for frontend communication.
* SQLite is used for simplicity.
* No authentication (demo purpose).
* Feedback model stores duplicate metadata intentionally (demo design).

---

# 🚀 Possible Improvements

* Add authentication (JWT)
* Normalize feedback to reference News via ForeignKey
* Add pagination
* Add search & filtering
* Switch to PostgreSQL
* Dockerize setup
* Add deployment config

---

# 📌 Purpose

This project demonstrates:

* Frontend–Backend integration
* Axios with Django REST Framework
* RESTful API design
* Full-stack debugging workflow
* Monorepo organization

---

# 📜 License

Demo / Educational use.

---

