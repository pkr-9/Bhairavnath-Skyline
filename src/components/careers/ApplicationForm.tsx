// src/components/careers/ApplicationForm.tsx

// import React from "react";
import { useForm } from "react-hook-form";
import { User, Mail, Phone, Upload } from "lucide-react";

export default function ApplicationForm() {
  type FormValues = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    resume: FileList;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  // This function will be expanded to send data to your API
  const onSubmit = (data: FormValues) => {
    console.log("Form data:", data);
    alert("Application submitted successfully! (Check console)");
  };

  return (
    // REF: Added `bg-white`, prefixed `bg-gray-900` with `dark:`
    <section
      id="apply-form"
      className="bg-white py-20 md:py-28 dark:bg-gray-900"
    >
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            // REF: Added `text-gray-900`, prefixed `text-white`
            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white"
          >
            Apply Now
          </h2>
          <p
            // REF: Added `text-gray-600`, prefixed `text-gray-400`
            className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400"
          >
            Interested in a role? Fill out the form below or send your resume to
            careers@bhairavnath.com.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto mt-16 max-w-xl"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            {/* First Name */}
            <div>
              <label
                htmlFor="first-name"
                // REF: Added `text-gray-900`, prefixed `text-white`
                className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white"
              >
                First name
              </label>
              <div className="relative mt-2.5">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <User
                    // REF: Added `text-gray-400`, prefixed `text-gray-500`
                    className="h-5 w-5 text-gray-400 dark:text-gray-500"
                    aria-hidden="true"
                  />
                </div>
                <input
                  type="text"
                  id="first-name"
                  {...register("firstName", { required: true })}
                  // REF: Updated input styles for light/dark
                  className="block w-full rounded-lg border-0 bg-white py-2.5 pl-10 
                             text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
                             placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500
                             dark:bg-white/5 dark:text-white dark:ring-white/10 
                             dark:focus:ring-blue-500"
                />
              </div>
              {errors.firstName && (
                // REF: Updated error text color
                <span className="text-red-500 text-sm mt-1 dark:text-red-400">
                  First name is required
                </span>
              )}
            </div>

            {/* Last Name */}
            <div>
              <label
                htmlFor="last-name"
                // REF: Added `text-gray-900`, prefixed `text-white`
                className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white"
              >
                Last name
              </label>
              <div className="relative mt-2.5">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <User
                    // REF: Added `text-gray-400`, prefixed `text-gray-500`
                    className="h-5 w-5 text-gray-400 dark:text-gray-500"
                    aria-hidden="true"
                  />
                </div>
                <input
                  type="text"
                  id="last-name"
                  {...register("lastName", { required: true })}
                  // REF: Updated input styles for light/dark
                  className="block w-full rounded-lg border-0 bg-white py-2.5 pl-10 
                             text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
                             placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500
                             dark:bg-white/5 dark:text-white dark:ring-white/10 
                             dark:focus:ring-blue-500"
                />
              </div>
              {errors.lastName && (
                // REF: Updated error text color
                <span className="text-red-500 text-sm mt-1 dark:text-red-400">
                  Last name is required
                </span>
              )}
            </div>

            {/* Email */}
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                // REF: Added `text-gray-900`, prefixed `text-white`
                className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white"
              >
                Email
              </label>
              <div className="relative mt-2.5">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <Mail
                    // REF: Added `text-gray-400`, prefixed `text-gray-500`
                    className="h-5 w-5 text-gray-400 dark:text-gray-500"
                    aria-hidden="true"
                  />
                </div>
                <input
                  type="email"
                  id="email"
                  {...register("email", { required: true })}
                  // REF: Updated input styles for light/dark
                  className="block w-full rounded-lg border-0 bg-white py-2.5 pl-10 
                             text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
                             placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500
                             dark:bg-white/5 dark:text-white dark:ring-white/10 
                             dark:focus:ring-blue-500"
                />
              </div>
              {errors.email && (
                // REF: Updated error text color
                <span className="text-red-500 text-sm mt-1 dark:text-red-400">
                  Email is required
                </span>
              )}
            </div>

            {/* Phone */}
            <div className="sm:col-span-2">
              <label
                htmlFor="phone"
                // REF: Added `text-gray-900`, prefixed `text-white`
                className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white"
              >
                Phone number
              </label>
              <div className="relative mt-2.5">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <Phone
                    // REF: Added `text-gray-400`, prefixed `text-gray-500`
                    className="h-5 w-5 text-gray-400 dark:text-gray-500"
                    aria-hidden="true"
                  />
                </div>
                <input
                  type="tel"
                  id="phone"
                  {...register("phone", { required: true })}
                  // REF: Updated input styles for light/dark
                  className="block w-full rounded-lg border-0 bg-white py-2.5 pl-10 
                             text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
                             placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500
                             dark:bg-white/5 dark:text-white dark:ring-white/10 
                             dark:focus:ring-blue-500"
                />
              </div>
              {errors.phone && (
                // REF: Updated error text color
                <span className="text-red-500 text-sm mt-1 dark:text-red-400">
                  Phone is required
                </span>
              )}
            </div>

            {/* File Upload */}
            <div className="sm:col-span-2">
              <label
                htmlFor="resume"
                // REF: Added `text-gray-900`, prefixed `text-white`
                className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white"
              >
                Resume/CV
              </label>
              <div
                // REF: Added `border-gray-300`, prefixed `border-white/25`
                className="relative mt-2.5 flex justify-center rounded-lg border 
                              border-dashed border-gray-300 px-6 py-10
                              dark:border-white/25"
              >
                <div className="text-center">
                  <Upload
                    // REF: Added `text-gray-400`, prefixed `text-gray-500`
                    className="mx-auto h-12 w-12 text-gray-400 dark:text-gray-500"
                    aria-hidden="true"
                  />
                  <div
                    // REF: Added `text-gray-600`, prefixed `text-gray-400`
                    className="mt-4 flex text-sm leading-6 text-gray-600 dark:text-gray-400"
                  >
                    <label
                      htmlFor="resume"
                      // REF: Updated label styles for light/dark
                      className="relative cursor-pointer rounded-md font-semibold text-blue-600 
                                 focus-within:outline-none focus-within:ring-2 
                                 focus-within:ring-blue-500 focus-within:ring-offset-2 
                                 focus-within:ring-offset-white hover:text-blue-500
                                 dark:text-blue-400 dark:focus-within:ring-offset-gray-900 
                                 dark:hover:text-blue-300"
                    >
                      <span>Upload a file</span>
                      <input
                        id="resume"
                        {...register("resume", { required: true })}
                        type="file"
                        className="sr-only"
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-500">
                    PDF, DOCX up to 10MB
                  </p>
                </div>
              </div>
              {errors.resume && (
                // REF: Updated error text color
                <span className="text-red-500 text-sm mt-1 dark:text-red-400">
                  Resume is required
                </span>
              )}
            </div>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              // REF: This button style works well on both light and dark, no changes needed
              className="block w-full rounded-lg bg-blue-600 px-8 py-4 text-base 
                         font-semibold text-white shadow-lg shadow-blue-600/20 
                         transition-all duration-300 hover:bg-blue-500 
                         hover:shadow-blue-500/30"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
