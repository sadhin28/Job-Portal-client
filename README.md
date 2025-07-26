# 🧑‍💼 CAREER-CODE: A Job Portal System

A comprehensive job portal platform designed to enable seamless interaction between job seekers and employers. The system provides full CRUD operations for managing job postings, secure authentication, and a streamlined job application process.

---

## 🌟 Project Purpose

The purpose of this project is to assess skills, creativity, and problem-solving abilities while providing an efficient recruitment and job application experience.

---

## 🔗 Live Link

🌐 [Visit Live Site](https://job-portal-72009.web.app/)

---

## 💡 Key Features

- ✅ **Responsive Design:** Fully responsive on mobile, tablet, and desktop.
- 🔐 **Authentication System:** Email/password login, Google login, account recovery, and protected routes.
- 🧰 **Job Management:** Add, update, delete, and view job postings.
- 🔍 **Job Search & Filters:** Search by title, filter by job type, experience level, and salary.
- 📝 **Job Applications:** Apply with detailed forms and manage applications.
- 🧑‍💼 **Employer Tools:** Review applications, update posts, manage applicants.
- ⚠️ **Error Handling:** User-friendly messages and loaders.
- 🛡️ **Session Management:** Secure sessions using JWT.

---

## 🖌️ Application Pages

### 🌐 Public Pages
- `/` - **Home Page:** Active job postings with routing to details.

### 🔒 Protected Pages
- `/jobs` – All jobs (search, filter, sort)
- `/jobs/details/:id` – Job details and apply form
- `/add-jobs` – Post a job (employer only)
- `/application/apply/:id` – Apply for a job
- `/application/me` – View applied jobs
- `/my-jobs` – Employer’s posted jobs
- `/my-jobs/:id` – Review applications
- `/jobs/update/:id` – Edit job posting

---

## 📂 Architecture Overview

- **🔝 Navbar:** Logo, links, user auth controls
- **📄 Footer:** Info, links, and socials
- **🧭 Dynamic Routing:** Routes powered by React Router

---

## 🛠️ Technologies Used

- 💻 **Frontend:** React.js, Tailwind CSS
- 🧪 **Backend:** Node.js, Express.js
- 🗂️ **Database:** MongoDB
- 🔐 **Authentication:** Firebase Auth, Google Auth
- ☁️ **Deployment:** [Platform Name]
- 🛠️ **Version Control:** Git & GitHub

---

## 🚀 Features Checklist

### 🔐 Authentication System
- Register/Login with email or Google
- Password recovery
- Route protection

### 🧾 Job Functionality
- CRUD for job posts
- Filter by type, experience, salary
- Sort by deadline

### 📝 Application Process
- Apply with dynamic forms
- Withdraw applications

### 🧑‍💼 Employer Tools
- Manage job posts
- Review applicants (Shortlist/Reject/Hire)

### 🔒 Security
- JWT-based auth
- API route protection
- Input validation/sanitization

---

## 🧹 Best Practices Followed

### 🧠 Code Quality
- Modular components
- Clean, DRY, well-commented code
- Consistent naming conventions

### ⚠️ Error Handling
- Frontend: Clear and useful error messages
- Backend: Proper status codes and structure
- Form validations and boundary testing

### 🔒 Security Practices
- JWT for session control
- Protected routes
- XSS/Injection prevention

### 📱 Responsive Design
- Mobile-first using Tailwind
- Grid layouts for scalability
- Accessible for all users

---

## 📁 Project Organization

- Logical folder separation (components, pages, services)
- Consistent Git commits
- Documented README with setup instructions

---

## ⚡ Performance Optimization

- Lazy loading for routes/components
- React Query for data caching
- Efficient rendering and state updates

---

## 🌍 Deployment

- Zero-runtime error live hosting
- CI/CD for auto updates
- Environment variables via `.env`

---

## ✅ Testing

- Manual flow testing
- Simulated error states

---

## 👨‍💻 Developed by

**Taosif Sadhin**

---

