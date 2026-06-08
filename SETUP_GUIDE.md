# 🚗 Car Wash Management System - Setup Guide

A professional car wash booking and management system built with **Laravel** (backend) and **React** (frontend).

---

## ✨ Features

✅ **Beautiful Landing Page** - Showcase your business with a modern hero section  
✅ **User Authentication** - Secure login system for staff  
✅ **Dashboard** - Real-time statistics and quick actions  
✅ **Booking Management** - Create, view, and manage car wash bookings  
✅ **Status Tracking** - Monitor booking progress (Waiting, Washing, Done)  
✅ **Responsive Design** - Works perfectly on desktop, tablet, and mobile  
✅ **Professional UI** - Modern gradients, animations, and smooth interactions  
✅ **API Integration** - RESTful backend API with MySQL database  

---

## 🚀 Quick Start

### Prerequisites
- **PHP** 8.1+ with Laravel 11
- **Node.js** 16+ with npm
- **MySQL** 8.0+
- **Composer** (PHP dependency manager)

### Backend Setup (Laravel)

1. **Navigate to project root:**
   ```bash
   cd c:\Users\Administrator\carwash
   ```

2. **Start Laravel development server:**
   ```bash
   php artisan serve --host=127.0.0.1 --port=8000
   ```

   The backend will be available at: `http://127.0.0.1:8000`

3. **Verify database migration:**
   ```bash
   php artisan migrate --force
   ```
   All tables should be created: `users`, `bookings`, `sessions`, `cache`, `jobs`

### Frontend Setup (React + Vite)

1. **Open a new terminal and navigate to frontend:**
   ```bash
   cd c:\Users\Administrator\carwash\frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

   The frontend will be available at: `http://localhost:5174`

4. **Open in browser and enjoy!** 🎉

---

## 🔐 Demo Credentials

**Email:** `admin@carwash.com`  
**Password:** `123456`

> 💡 Demo credentials are hardcoded for quick testing. Replace with proper authentication in production.

---

## 📁 Project Structure

```
carwash/
├── app/                    # Laravel application code
│   ├── Http/Controllers/   # API controllers
│   └── Models/             # Database models (User, Booking)
├── config/                 # Configuration files
├── database/
│   ├── migrations/         # Database migrations
│   └── factories/          # Model factories for testing
├── routes/
│   └── api.php            # API endpoints
├── frontend/              # React application
│   ├── src/
│   │   ├── pages/        # Page components
│   │   ├── components/   # Reusable components
│   │   └── styles/       # Global CSS
│   └── package.json
└── public/               # Served static files
```

---

## 🔌 API Endpoints

All endpoints are prefixed with `/api`

### Bookings
- **GET** `/api/bookings` - Fetch all bookings
- **POST** `/api/bookings` - Create new booking

**Booking Data Structure:**
```json
{
  "customer_name": "John Doe",
  "vehicle_number": "ABC-1234",
  "package_type": "Premium Wash",
  "price": 450
}
```

---

## 🎨 Design System

### Colors
- **Primary Orange:** `#ff7a00` → `#ff5400` (gradient)
- **Success Green:** `#28a745`
- **Warning Yellow:** `#ffc107`
- **Info Blue:** `#17a2b8`
- **Background:** `#fff7f0` (light cream)

### Components
- **Buttons** - Primary, Secondary, Outline styles with hover effects
- **Cards** - Stat cards, feature cards, booking cards with shadows
- **Badges** - Status indicators with color coding
- **Forms** - Input fields with focus states and validation styles
- **Toast Notifications** - Success/error messages with animations

---

## 📱 Pages Overview

### 1. Landing Page (`/`)
- Hero section with CTA buttons
- Features showcase with icons
- Call-to-action section
- Responsive layout

### 2. Login Page (`/login`)
- Modern split-layout design
- Email and password form
- Error handling
- Demo credentials display

### 3. Dashboard (`/dashboard`)
- 4 stats cards showing:
  - Total Bookings
  - Waiting (pending)
  - Washing (in progress)
  - Completed
- Quick action buttons

### 4. Bookings (`/bookings`)
- Status filter showing counts
- Booking cards with:
  - Customer name & vehicle
  - Package and price
  - Status badge with icon
  - Edit/Delete buttons

### 5. Add Booking (`/add-booking`)
- Form to create new bookings
- Dropdown for package selection
- Loading spinner on submit
- Toast notifications for success/error

---

## 🛠️ Troubleshooting

### Frontend shows blank page
1. Check browser console for errors (F12)
2. Verify backend is running on port 8000
3. Clear browser cache: `Ctrl+Shift+Delete`
4. Restart frontend: Stop and run `npm run dev` again

### Cannot connect to backend
1. Verify Laravel server is running: `php artisan serve`
2. Check CORS config in `config/cors.php`
3. Ensure MySQL is running and database is configured

### Database errors
1. Check `.env` file has correct database credentials:
   ```
   DB_CONNECTION=mysql
   DB_HOST=127.0.0.1
   DB_DATABASE=carwash
   DB_USERNAME=root
   DB_PASSWORD=
   ```
2. Run migrations: `php artisan migrate --force`

---

## 📦 Building for Production

### Frontend Build
```bash
cd frontend
npm run build
```
Creates optimized build in `frontend/dist/`

### Backend Deployment
- Update `.env` with production database credentials
- Set `APP_ENV=production`
- Set `APP_DEBUG=false`
- Run `php artisan config:cache`

---

## 📝 Notes

- **Session Storage:** Configured to use MySQL database (not file-based)
- **CORS:** Enabled for all origins (`*`) - restrict in production
- **Authentication:** Uses simple hardcoded demo credentials
- **Database:** SQLite fallback removed, MySQL is primary

---

## 🤝 Support

For issues or questions, check:
1. Laravel documentation: https://laravel.com/docs
2. React documentation: https://react.dev
3. Vite documentation: https://vitejs.dev

---

## 📄 License

Built with ❤️ for professional car wash businesses.

---

**Happy Booking! 🚗✨**