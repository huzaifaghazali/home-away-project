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