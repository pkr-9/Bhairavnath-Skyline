// src/components/contact/ContactMap.tsx

// import React from "react";

export default function ContactMap() {
  // Replace this iframe with your actual Google Maps embed code
  const mapEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.118991384089!2d73.9200808153439!3d18.56811247259064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c13106513e9d%3A0x28681e815a43a0f!2sGiga%20Space%20IT%20Park!5e0!3m2!1sen!2sin!4v1678886500000!5m2!1sen!2sin";

  return (
    // REF: Added `bg-white`, prefixed `bg-gray-950`
    <section className="bg-white dark:bg-gray-950">
      <div className="container mx-auto px-6 pb-20 md:pb-28">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2
            // REF: Added `text-gray-900`, prefixed `text-white`
            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white"
          >
            Visit Our Headquarters
          </h2>
          <p
            // REF: Added `text-gray-600`, prefixed `text-gray-400`
            className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400"
          >
            We are located in the heart of the GIGA SPACE IT Park, Pune.
          </p>
        </div>

        <div
          // REF: Added `border-gray-200`, prefixed `border-gray-800`
          className="h-[450px] overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800"
        >
          <iframe
            src={mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            // REF: Moved map filters to the `dark:` variant
            className="dark:grayscale dark:invert dark:brightness(0.9)"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
