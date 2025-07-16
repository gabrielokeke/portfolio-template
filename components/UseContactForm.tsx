"use client"

import { useState, ChangeEvent, FormEvent } from "react"

// Define the shape of the form data
interface FormData {
  username: string
  email: string
  text: string
}

// Define the shape of validation errors (optional strings per field)
interface FormErrors {
  username?: string
  email?: string
  text?: string
}

// Define the shape of the alert state
interface Alert {
  type: "success" | "danger" | ""
  message: string
  visible: boolean
}

// Custom hook to manage the contact form logic
export function useContactForm() {
  // Form input values state
  const [formData, setFormData] = useState<FormData>({
    username: "",
    email: "",
    text: "",
  })

  // Validation errors state
  const [errors, setErrors] = useState<FormErrors>({})

  // Alert message and visibility state
  const [alert, setAlert] = useState<Alert>({
    type: "",
    message: "",
    visible: false,
  })

  // Validate the form inputs and update errors state
  const validate = (): boolean => {
    const newErrors: FormErrors = {}

    // Check if username is empty
    if (!formData.username.trim()) {
      newErrors.username = "Please enter your name"
    }

    // Check if email is empty or invalid format
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your e-mail address"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email"
    }

    // Check if message is empty
    if (!formData.text.trim()) {
      newErrors.text = "Please enter a message"
    }

    // Update errors state
    setErrors(newErrors)

    // Return true if no errors, false if any exist
    return Object.keys(newErrors).length === 0
  }

  // Handle input field changes and update formData
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target

    // Update formData for the changed field
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error for that field if present
    setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  // Handle form submission event
  const handleSubmit = (e: FormEvent<HTMLFormElement>): boolean | void => {
    e.preventDefault() // Prevent page reload

    // Validate inputs, stop if invalid
    if (!validate()) return false

    // No API call — simulate successful submission

    // Show success alert
    setAlert({ type: "success", message: "Formulaire envoyé avec succès!", visible: true })

    // Reset form fields
    setFormData({ username: "", email: "", text: "" })

    // Clear validation errors
    setErrors({})

    // Hide alert after 5 seconds
    setTimeout(() => {
      setAlert({ type: "", message: "", visible: false })
    }, 5000)

    return true
  }

  // Expose state and handlers to be used in the component
  return {
    formData,
    errors,
    alert,
    handleChange,
    handleSubmit,
  }
}
