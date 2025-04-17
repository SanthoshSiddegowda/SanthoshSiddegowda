import { useContentHead, useRoute, useRuntimeConfig, unref, watch, useHead } from '#imports';

/**
 * Enhanced version of useContentHead specifically for article pages
 * Ensures proper social media preview metadata for article content
 */
export const useArticleHead = (_content) => {
  const content = unref(_content);
  const route = useRoute();
  const config = useRuntimeConfig();

  const refreshHead = (data = content) => {
    if (!route.path || !data) {
      return;
    }

    // First apply standard content head processing
    useContentHead(data, route);

    // Then enhance with article-specific metadata
    const head = {};
    head.meta = [];

    // Set article-specific Open Graph type
    head.meta.push({
      property: 'og:type',
      content: 'article'
    });

    // Add article author metadata if available
    if (data.author?.name) {
      head.meta.push({
        property: 'article:author',
        content: data.author.name
      });
    }

    // Add article published date
    if (data.date) {
      head.meta.push({
        property: 'article:published_time',
        content: new Date(data.date).toISOString()
      });
    }

    // Ensure article cover image is properly set for social media
    if (data.cover && head.meta.filter((m) => m.property === 'og:image').length === 0) {
      const host = config.public.content.host;
      const coverUrl = data.cover;
      
      head.meta.push({
        property: 'og:image',
        content: coverUrl
      });
      
      // Add Twitter card image
      head.meta.push({
        name: 'twitter:image',
        content: coverUrl
      });
    }

    // Apply the enhanced head
    useHead(head);
  };

  watch(() => unref(_content), refreshHead, { immediate: true });
};