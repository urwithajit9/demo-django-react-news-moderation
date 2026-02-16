# 📰 Django + React News Moderation Demo

A full-stack demo application demonstrating REST API integration between a Django backend and a React frontend using Axios.

**Tech Stack**

* Backend: Django 5 + Django REST Framework
* Frontend: React (bootstrapped with Create React App)
* HTTP Client: Axios
* Database: SQLite (development)

> ⚠️ This is a demo / learning project intended to demonstrate frontend–backend integration patterns.

---

# 📂 Project Structure

```
axios-tutorial/
│
├── megaprojectfeedback/        # Django backend
│   ├── newsfeedback/
│   │   ├── models.py
│   │   ├── serializers.py
│   │   ├── views.py
│   │   └── urls.py
│   ├── manage.py
│   ├── db.sqlite3
│   └── requirements.txt
│
└── react-axios-example/        # React frontend
    ├── src/
    │   ├── components/
    │   ├── api.js
    │   ├── utils.js
    │   └── App.jsx
    ├── public/
    ├── package.json
    └── build/
```

---

# 🏗 Backend Overview (Django + DRF)

The backend exposes RESTful APIs using `ModelViewSet` and `DefaultRouter`.

## 📌 Models

### 1️⃣ News

* `title` – Article title
* `news_url` – Source link
* `publication_date` – Date published
* `source_name` – News source
* `content` – Article content

### 2️⃣ NewsFeedback

* `title`
* `publication_date`
* `source_name`
* `feedback`
* `ismegaproject`
* `contentstatus`

> Feedback entries are stored independently (denormalized by design for demo simplicity).

---

## 🌐 API Endpoints

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

# ▶ Running the Backend

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

### 4️⃣ Apply migrations

```bash
python manage.py migrate
```

### 5️⃣ Start server

```bash
python manage.py runserver
```

Backend runs at:

```
http://127.0.0.1:8000/
```

---

# 🎨 Frontend Overview (React + Axios)

The frontend:

* Fetches news articles from backend
* Displays them as interactive cards
* Calculates days since publication
* Formats source names
* Opens article reader modal
* Allows Approve / Report actions
* Submits feedback to backend

---

## 🔑 Key Files

* `api.js` – Axios configuration & API calls
* `NewsCard.jsx` – Individual article card
* `NewsList.jsx` – List renderer
* `Feedback.jsx` – Feedback modal
* `Reader.jsx` – Article content modal
* `utils.js` – Helper functions

---

# ▶ Running the Frontend

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

Frontend runs at:

```
http://localhost:3000/
```

---

# 🔄 Application Flow

1. React sends:

```
GET /api/news/
```

2. Backend returns JSON.
3. News rendered as cards.
4. User clicks Approve / Report.
5. React sends:

```
POST /api/newsfeedback/
```

6. Backend stores feedback in database.

---

# 🧠 Demo Features

* RESTful CRUD APIs
* ModelViewSet architecture
* Axios-based API consumption
* React functional components + hooks
* Modal-based UI interactions
* Client-side utilities
* SQLite-backed persistence
* Monorepo structure

---

# ⚙️ Development Notes

* CORS must be enabled in Django for frontend access.
* No authentication (intentionally omitted for simplicity).
* SQLite used for development only.
* Feedback model intentionally denormalized.

---

# 🚀 Suggested Improvements

* Add JWT authentication
* Convert feedback to ForeignKey relationship
* Add pagination & search
* Switch to PostgreSQL
* Add Docker support
* Add production-ready settings
* Add automated tests

---

# 🎯 Learning Objectives

This project demonstrates:

* Full-stack debugging workflow
* React–Django integration
* RESTful API design
* State management in React
* Clean monorepo organization

---

# 📜 License

Educational / Demo Use.


