// src/components/layout/SEO.tsx

import { useEffect } from "react";

interface SEOProps {
  title: string;
  description?: string;
}

export default function SEO({ title, description }: SEOProps) {
  useEffect(() => {
    // Update Title
    document.title = `${title} | Bhairavnath Skyline`;

    // Update Meta Description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        description ||
          "Bhairavnath Skyline - Nation Building Infrastructure & Real Estate Development."
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content =
        description ||
        "Bhairavnath Skyline - Nation Building Infrastructure & Real Estate Development.";
      document.head.appendChild(meta);
    }
  }, [title, description]);

  return null;
}
