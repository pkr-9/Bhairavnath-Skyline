// src/components/contact/ContactDetailsAndForm.tsx

// import React from "react";
import { useForm } from "react-hook-form";
import { Mail, Phone, Building } from "lucide-react";

// Contact Info Component (Left Side)
const ContactInfo = () => (
  <div className="lg:pr-12">
    <h2
      // REF: Added `text-gray-900`, prefixed `text-white`
      className="text-3xl font-bold text-gray-900 dark:text-white"
    >
      Contact Details
    </h2>
    <p
      // REF: Added `text-gray-600`, prefixed `text-gray-400`
      className="mt-4 text-lg text-gray-600 leading-relaxed dark:text-gray-400"
    >
      Reach out to us directly through our primary office, or send us an email
      using the form.
    </p>
    <ul className="mt-10 space-y-6">
      <li className="flex gap-4">
        <div className="flex-none pt-1">
          <Phone
            // REF: Updated icon color
            className="h-6 w-6 text-blue-600 dark:text-blue-400"
          />
        </div>
        <div>
          <h3
            // REF: Added `text-gray-900`, prefixed `text-white`
            className="text-lg font-semibold text-gray-900 dark:text-white"
          >
            Phone
          </h3>
          <p
            // REF: Added `text-gray-700`, prefixed `text-gray-400`
            className="text-gray-700 dark:text-gray-400"
          >
            +91 123 456 7890
          </p>
        </div>
      </li>
      <li className="flex gap-4">
        <div className="flex-none pt-1">
          <Mail
            // REF: Updated icon color
            className="h-6 w-6 text-blue-600 dark:text-blue-400"
          />
        </div>
        <div>
          <h3
            // REF: Added `text-gray-900`, prefixed `text-white`
            className="text-lg font-semibold text-gray-900 dark:text-white"
          >
            Email
          </h3>
          <p
            // REF: Added `text-gray-700`, prefixed `text-gray-400`
            className="text-gray-700 dark:text-gray-400"
          >
            info@bhairavnath.com
          </p>
          <p
            // REF: Added `text-gray-700`, prefixed `text-gray-400`
            className="text-gray-700 dark:text-gray-400"
          >
            tenders@bhairavnath.com
          </p>
        </div>
      </li>
      <li className="flex gap-4">
        <div className="flex-none pt-1">
          <Building
            // REF: Updated icon color
            className="h-6 w-6 text-blue-600 dark:text-blue-400"
          />
        </div>
        <div>
          <h3
            // REF: Added `text-gray-900`, prefixed `text-white`
            className="text-lg font-semibold text-gray-900 dark:text-white"
          >
            Headquarters
          </h3>
          <p
            // REF: Added `text-gray-700`, prefixed `text-gray-400`
            className="text-gray-700 dark:text-gray-400"
          >
            GIGA SPACE IT PARK, 123 Skyline Tower
          </p>
          <p
            // REF: Added `text-gray-700`, prefixed `text-gray-400`
            className="text-gray-700 dark:text-gray-400"
          >
            Pune, Maharashtra, 411014
          </p>
        </div>
      </li>
    </ul>
  </div>
);

// Contact Form Component (Right Side)
const ContactForm = () => {
  type ContactFormData = {
    name: string;
    email: string;
    subject: string;
    message: string;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    console.log("Contact Form Data:", data);
    alert("Message sent successfully! (Check console)");
  };

  return (
    // REF: Added `bg-gray-50` and `border-gray-200`
    // REF: Prefixed dark styles
    <div
      className="rounded-2xl bg-gray-50 border border-gray-200 p-8 lg:p-12
                    dark:bg-gray-900 dark:border-gray-800"
    >
      <h2
        // REF: Added `text-gray-900`, prefixed `text-white`
        className="text-3xl font-bold text-gray-900 dark:text-white"
      >
        Send us a Message
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            // REF: Added `text-gray-900`, prefixed `text-white`
            className="block text-sm font-semibold text-gray-900 dark:text-white"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            {...register("name", { required: true })}
            // REF: Updated input styles for light/dark
            className="mt-2.5 block w-full rounded-lg border-0 bg-white py-2.5 px-4 
                       text-gray-900 ring-1 ring-inset ring-gray-300 
                       focus:ring-2 focus:ring-inset focus:ring-blue-500
                       dark:bg-white/5 dark:text-white dark:ring-white/10"
          />
          {errors.name && (
            <span
              // REF: Updated error color
              className="text-red-500 text-sm mt-1 dark:text-red-400"
            >
              Name is required
            </span>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            // REF: Added `text-gray-900`, prefixed `text-white`
            className="block text-sm font-semibold text-gray-900 dark:text-white"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register("email", { required: true })}
            // REF: Updated input styles for light/dark
            className="mt-2.5 block w-full rounded-lg border-0 bg-white py-2.5 px-4 
                       text-gray-900 ring-1 ring-inset ring-gray-300 
                       focus:ring-2 focus:ring-inset focus:ring-blue-500
                       dark:bg-white/5 dark:text-white dark:ring-white/10"
          />
          {errors.email && (
            <span
              // REF: Updated error color
              className="text-red-500 text-sm mt-1 dark:text-red-400"
            >
              Email is required
            </span>
          )}
        </div>

        {/* Subject */}
        <div>
          <label
            htmlFor="subject"
            // REF: Added `text-gray-900`, prefixed `text-white`
            className="block text-sm font-semibold text-gray-900 dark:text-white"
          >
            Subject
          </label>
          <select
            id="subject"
            {...register("subject", { required: true })}
            // REF: Updated select styles for light/dark
            // NOTE: You'll need to style the <option> elements too,
            // but for that you often need a custom select component.
            // This styles the select box itself.
            className="mt-2.5 block w-full rounded-lg border-0 bg-white py-2.5 px-4 
                       text-gray-900 ring-1 ring-inset ring-gray-300 
                       focus:ring-2 focus:ring-inset focus:ring-blue-500
                       dark:bg-white/5 dark:text-white dark:ring-white/10"
          >
            <option value="" disabled selected>
              Select an inquiry type...
            </option>
            <option value="project-inquiry">Project Inquiry</option>
            <option value="tender-submission">Tender Submission</option>
            <option value="career-question">Career Question</option>
            <option value="general">General Question</option>
          </select>
          {errors.subject && (
            <span
              // REF: Updated error color
              className="text-red-500 text-sm mt-1 dark:text-red-400"
            >
              Please select a subject
            </span>
          )}
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            // REF: Added `text-gray-900`, prefixed `text-white`
            className="block text-sm font-semibold text-gray-900 dark:text-white"
          >
            Message
          </label>
          <textarea
            id="message"
            {...register("message", { required: true })}
            rows={4}
            // REF: Updated textarea styles for light/dark
            className="mt-2.5 block w-full rounded-lg border-0 bg-white py-2.5 px-4 
                       text-gray-900 ring-1 ring-inset ring-gray-300 
                       focus:ring-2 focus:ring-inset focus:ring-blue-500
                       dark:bg-white/5 dark:text-white dark:ring-white/10"
          />
          {errors.message && (
            <span
              // REF: Updated error color
              className="text-red-500 text-sm mt-1 dark:text-red-400"
            >
              Message is required
            </span>
          )}
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            // REF: This primary button style works well on both themes
            className="w-full rounded-lg bg-blue-600 px-8 py-3 text-base 
                       font-semibold text-white shadow-lg shadow-blue-600/20 
                       transition-all duration-300 hover:bg-blue-500 
                       hover:shadow-blue-500/30"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

// Main component that combines them
export default function ContactDetailsAndForm() {
  return (
    // REF: Added `bg-gray-50`, prefixed `bg-gray-950`
    <section className="bg-white py-20 md:py-28 dark:bg-gray-950">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
