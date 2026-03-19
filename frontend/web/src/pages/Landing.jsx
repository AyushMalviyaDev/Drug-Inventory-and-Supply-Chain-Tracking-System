import { useState } from "react";
import {
  Pill,
  Boxes,
  LineChart,
  Building2,
  Menu,
  X,
  ShieldCheck,
} from "lucide-react";

export default function Landing() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white text-gray-800 font-[Inter]">

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full backdrop-blur-md bg-white/70 border-b z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          <h1 className="text-xl font-semibold text-green-600">
            PharmaLink
          </h1>

          <div className="hidden md:flex gap-8 text-sm">
            <a href="#" className="hover:text-green-600">Home</a>
            <a href="#" className="hover:text-green-600">About</a>
            <a href="#" className="hover:text-green-600">Blog</a>
            <a href="#" className="hover:text-green-600">Contact</a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="md:hidden bg-white border-t p-6 flex flex-col gap-4">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Blog</a>
            <a href="#">Contact</a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="pt-32 pb-20 px-6 text-center">
        <h1 className="text-5xl font-semibold tracking-tight mb-6">
          Smarter Drug Inventory
          <span className="text-green-600"> Management</span>
        </h1>

        <p className="max-w-2xl mx-auto text-gray-500 mb-8">
          PharmaLink helps pharmacies, hospitals, and distributors track
          medicine inventory, expiry dates, and orders in real time.
        </p>

        <button className="px-8 py-3 bg-green-600 text-white rounded-xl shadow-lg hover:shadow-green-300 transition">
          Get Started
        </button>

        {/* DASHBOARD MOCKUP */}
        <div className="mt-16 max-w-5xl mx-auto bg-white shadow-2xl rounded-2xl p-6 border">
          <div className="grid grid-cols-3 gap-4">

            <div className="bg-green-50 p-6 rounded-xl">
              <h3 className="text-sm text-gray-500">Inventory</h3>
              <p className="text-2xl font-semibold">3,240</p>
            </div>

            <div className="bg-green-50 p-6 rounded-xl">
              <h3 className="text-sm text-gray-500">Expiring Soon</h3>
              <p className="text-2xl font-semibold text-red-500">43</p>
            </div>

            <div className="bg-green-50 p-6 rounded-xl">
              <h3 className="text-sm text-gray-500">Orders</h3>
              <p className="text-2xl font-semibold">120</p>
            </div>

          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 bg-gray-50 px-6">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-3xl font-semibold mb-12">
            How PharmaLink Works
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <Card
              icon={<Boxes />}
              title="Add Inventory"
              text="Quickly add medicines and batches with expiry tracking."
            />

            <Card
              icon={<Pill />}
              title="Track Stock & Expiry"
              text="Get alerts when medicines are running low or expiring."
            />

            <Card
              icon={<ShieldCheck />}
              title="Manage Orders"
              text="Organize supplier orders and maintain stock easily."
            />

          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl text-center font-semibold mb-12">
            Powerful Features
          </h2>

          <div className="grid md:grid-cols-4 gap-8">

            <Feature
              icon={<Boxes />}
              title="Real-Time Inventory"
            />

            <Feature
              icon={<Pill />}
              title="Expiry Alerts"
            />

            <Feature
              icon={<LineChart />}
              title="Analytics Dashboard"
            />

            <Feature
              icon={<Building2 />}
              title="Multi Branch Management"
            />

          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-20 bg-gray-50 px-6">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-3xl font-semibold mb-12">
            Pricing Plans
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <Pricing
              title="Free"
              price="$0"
              features={["Basic inventory", "Expiry alerts"]}
            />

            <Pricing
              title="Pro"
              price="$29"
              highlight
              features={[
                "Advanced analytics",
                "Multi-branch",
                "Priority support",
              ]}
            />

            <Pricing
              title="Enterprise"
              price="Custom"
              features={[
                "Unlimited branches",
                "API access",
                "Dedicated support",
              ]}
            />

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-3xl font-semibold text-center mb-10">
            Frequently Asked Questions
          </h2>

          <FAQ
            q="Is PharmaLink suitable for hospitals?"
            a="Yes, PharmaLink supports pharmacies, hospitals, and distributors."
          />

          <FAQ
            q="Does PharmaLink track expiry dates?"
            a="Yes, automated alerts notify you before medicines expire."
          />

          <FAQ
            q="Can I manage multiple branches?"
            a="The Pro and Enterprise plans allow multi-branch inventory management."
          />

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-300 py-10 text-center">
        <p>© 2026 PharmaLink. All rights reserved.</p>
      </footer>
    </div>
  );
}

function Card({ icon, title, text }) {
  return (
    <div className="p-8 bg-white rounded-xl shadow hover:shadow-lg transition text-center">
      <div className="text-green-600 mb-4">{icon}</div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-gray-500 text-sm">{text}</p>
    </div>
  );
}

function Feature({ icon, title }) {
  return (
    <div className="bg-white border p-6 rounded-xl text-center shadow-sm">
      <div className="text-green-600 mb-3">{icon}</div>
      <p className="font-medium">{title}</p>
    </div>
  );
}

function Pricing({ title, price, features, highlight }) {
  return (
    <div
      className={`p-8 rounded-xl border ${
        highlight ? "border-green-600 shadow-xl" : "border-gray-200"
      }`}
    >
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-3xl mb-6">{price}</p>

      <ul className="space-y-2 text-gray-500 text-sm mb-6">
        {features.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>

      <button className="bg-green-600 text-white px-6 py-2 rounded-lg">
        Choose Plan
      </button>
    </div>
  );
}

function FAQ({ q, a }) {
  return (
    <div className="border-b py-4">
      <h4 className="font-medium">{q}</h4>
      <p className="text-gray-500 text-sm mt-2">{a}</p>
    </div>
  );
}