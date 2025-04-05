# 🏡 Home Away

**Home Away** is a full-stack Airbnb clone built with [Next.js](https://nextjs.org/), offering users the ability to search for homes, make bookings, leave reviews, and more. The application includes features such as secure authentication, responsive UI, integrated payments, location mapping, and modern UI components.

---

## 🚀 Features

- 🔐 Authentication & Authorization (via Clerk)
- 🏘️ Browse homes by location, availability, and filters
- 📅 Book properties and view reservations
- 💬 Leave and view reviews on properties
- 💸 Stripe integration for secure payments
- 🌍 Interactive map using Leaflet and React-Leaflet
- 🎨 Responsive design with Tailwind CSS and Radix UI
- 🧠 State management with Zustand
- 📦 Fully type-safe using TypeScript and Zod
- 📊 Data visualization with Recharts

---

## Picture

  ![homea_1](https://github.com/user-attachments/assets/ad8b3a79-bfef-4785-849d-06ab79763b7d)

  ![home_2](https://github.com/user-attachments/assets/f6099ba5-6dac-4eaf-80b6-56da8377c3de)

  ![home_3](https://github.com/user-attachments/assets/6f7bfa09-a2de-47ea-9101-aa38beec1500)

  ![home_4](https://github.com/user-attachments/assets/3c5e3160-40c0-4ca3-ad19-0a61884f02c2)
  
  ![home_5](https://github.com/user-attachments/assets/0993edf3-f6fb-4aa9-91c7-7286b330392b)

## 🛠️ Tech Stack

### Frontend:
- [Next.js 14](https://nextjs.org/)
- [React 18](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Clerk](https://clerk.com/) for auth
- [Stripe](https://stripe.com/) for payments
- [Leaflet](https://leafletjs.com/) + [React-Leaflet](https://react-leaflet.js.org/) for maps
- [Recharts](https://recharts.org/) for data visualization

### Backend:
- [Prisma ORM](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/) (or your preferred database)
- [Supabase](https://supabase.com/) for optional backend services

---

## Environment variable

### Clerk Authentication
- NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
- CLERK_SECRET_KEY=
- NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=
- NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=

### Supabase
- SUPABASE_URL=
- SUPABASE_KEY=

### Stripe
- STRIPE_SECRET_KEY=
- NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=

### Database
- DATABASE_URL=
- DIRECT_URL=

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/huzaifaghazali/home-away-project.git
cd home-away-project

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Fill in the required variables in .env.local

# Push Prisma schema to your database
npx prisma db push

# Run the development server
npm run dev
```
## Project Structure
```bash
/home-away
├── app/               # App router pages and layouts
│   ├── api/           # API routes
│   ├── (auth)/        # Authentication routes
│   ├── (main)/        # Main application routes
│   └── ...
├── components/        # Reusable components
│   ├── ui/            # UI components
│   └── ...
├── lib/               # Utility functions and shared logic
├── prisma/            # Database schema and migrations
├── public/            # Static assets
└── ...
```
