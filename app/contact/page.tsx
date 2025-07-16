"use client"

import { useContactForm } from "@/components/UseContactForm"

export default function ContactPage() {
  const { formData, errors, alert, handleChange, handleSubmit } = useContactForm()

  return (
    <section className="pt-40 flex justify-center py-12 px-4 bg-black min-h-screen">
      <div className="w-full max-w-xl">
        <div className="rounded-lg shadow-lg border border-gray-200 bg-white">
          <header className="bg-amber-400 p-6 rounded-t-lg shadow-md">
            <h2 className="text-center text-2xl font-extrabold text-gray-900">
              Contact
            </h2>
          </header>

          <div className="p-6">
            {alert.visible && (
              <div
                className={`mb-6 rounded px-4 py-3 text-center font-semibold ${
                  alert.type === "success"
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
                role="alert"
              >
                {alert.message}
              </div>
            )}

            <form noValidate onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="username"
                  className="block mb-2 font-semibold text-gray-700"
                >
                  Name &amp; Surname
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className={`w-full rounded border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400 ${
                    errors.username ? "border-red-500" : "border-gray-300"
                  }`}
                  required
                />
                {errors.username && (
                  <p className="mt-1 text-sm text-red-600">{errors.username}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 font-semibold text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full rounded border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400 ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                  required
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="text"
                  className="block mb-2 font-semibold text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="text"
                  name="text"
                  rows={4}
                  value={formData.text}
                  onChange={handleChange}
                  className={`w-full rounded border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400 ${
                    errors.text ? "border-red-500" : "border-gray-300"
                  }`}
                  required
                />
                {errors.text && (
                  <p className="mt-1 text-sm text-red-600">{errors.text}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full rounded bg-amber-400 px-6 py-3 font-bold text-gray-900 transition hover:bg-amber-300"
              >
                Contact Jane
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
