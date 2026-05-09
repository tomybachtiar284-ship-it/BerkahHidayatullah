import { useEffect } from 'react';

type SEOProps = {
  title: string;
  description: string;
  image?: string;
  url?: string;
};

export default function SEO({ title, description, image, url }: SEOProps) {
  useEffect(() => {
    // 1. Update Document Title
    document.title = title;
    
    // Helper function to update or create meta tags
    const updateMetaTag = (selector: string, attribute: string, value: string, content: string) => {
      let tag = document.querySelector(`meta[${attribute}="${value}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attribute, value);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    // 2. Update Basic Meta Description
    updateMetaTag('meta[name="description"]', 'name', 'description', description);

    // 3. Update Open Graph (OG) Tags for WhatsApp & Facebook
    updateMetaTag('meta[property="og:title"]', 'property', 'og:title', title);
    updateMetaTag('meta[property="og:description"]', 'property', 'og:description', description);
    
    if (image) {
      updateMetaTag('meta[property="og:image"]', 'property', 'og:image', image);
      updateMetaTag('meta[property="twitter:image"]', 'property', 'twitter:image', image);
    }
    
    if (url) {
      const fullUrl = `https://cvberkahhidayatullah.com${url}`;
      updateMetaTag('meta[property="og:url"]', 'property', 'og:url', fullUrl);
      updateMetaTag('meta[property="twitter:url"]', 'property', 'twitter:url', fullUrl);
    }

    // Update Twitter Cards
    updateMetaTag('meta[property="twitter:title"]', 'property', 'twitter:title', title);
    updateMetaTag('meta[property="twitter:description"]', 'property', 'twitter:description', description);

  }, [title, description, image, url]);

  return null;
}
