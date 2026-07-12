# VaultPay Financial Core

A secure B2B invoice management and payment portal built for corporate billing workflows. VaultPay enables administrators to create and manage invoices while clients can securely access invoices, make payments, and download PDF receipts.

## 🚀 Features

### Authentication & Authorization
- JWT-based authentication
- Secure cookie-based sessions
- Role-based access control (RBAC)
- Admin and Client dashboards
- Protected routes

### Admin Features
- Create invoices
- Manage client invoices
- View invoice details
- Track payment status

### Client Features
- Secure client login
- View assigned invoices
- Invoice details page
- Download invoice PDF receipts
- Payment-ready workflow

### Invoice Management
- Invoice creation
- Invoice items management
- Subtotal, tax, and total calculation
- Invoice status tracking
- PDF invoice generation

---

## 🛠️ Tech Stack

### Frontend
- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Lucide React
- React Hot Toast

### Backend
- Next.js API Routes
- MongoDB
- Mongoose
- JWT Authentication
- Jose JWT library

### Payments
- Stripe Checkout Integration

### Deployment
- Vercel
- MongoDB Atlas

---

## 📁 Project Structure

```
vaultpay-financial-core
│
├── app
│   ├── admin
│   ├── client
│   ├── api
│   └── login
│
├── components
│   ├── layout
│   ├── ui
│   └── invoices
│
├── lib
│   ├── auth.ts
│   └── mongodb.ts
│
├── models
│   ├── User.ts
│   └── Invoice.ts
│
├── utils
│
├── public
│
└── package.json
```

---


## 👥 User Roles

### Admin
Can:
- Create invoices
- Manage billing records
- Monitor payments

### Client
Can:
- View personal invoices
- Download receipts
- Complete payments

---

## 📌 Future Improvements

- Email invoice notifications
- Automated payment reminders
- Advanced analytics dashboard
- Invoice search and filtering
- Complete Stripe webhook automation
- Audit logs

---

## 👨‍💻 Developer

Built as a production-focused B2B SaaS invoice management platform using modern full-stack technologies.
