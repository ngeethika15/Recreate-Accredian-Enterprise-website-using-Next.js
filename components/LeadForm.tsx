"use client";

import { useState } from "react";

export default function LeadForm() {
  const [formData, setFormData] = useState({ name: "", email: "", company: "", phone: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setMessage("Thank you! Our enterprise specialist will reach out shortly.");
        setFormData({ name: "", email: "", company: "", phone: "" });
      } else {
        setStatus("error");
        setMessage(data.error || "Failed to submit request.");
      }
    } catch {
      setStatus("error");
      setMessage("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <section id="lead-form" className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 sm:p-12 rounded-2xl border border-gray-100 shadow-sm">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Partner with Accredian</h2>
            <p className="text-gray-600 mt-2">Fill out the form below to receive a custom training program proposal.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Work Email *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                  placeholder="john@company.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Company Name *</label>
                <input
                  type="text"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                  placeholder="Acme Corp"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 rounded-lg transition-colors shadow-sm disabled:opacity-50"
            >
              {status === "loading" ? "Submitting..." : "Submit Inquiry"}
            </button>

            {message && (
              <p className={`text-center text-sm font-medium mt-4 ${status === "success" ? "text-green-600" : "text-red-600"}`}>
                {message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}