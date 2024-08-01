// lib/fetchBlogPage.ts
import directus from './directus';
import { readItems } from '@directus/sdk';

export interface BlogPage {
  title: string;
  headline: string;
  background: string;
}

export default async function getBlogPage(): Promise<BlogPage | null> {
  try {
    console.log('Fetching blog page data...');
    const response = await directus.request(
      readItems('pages_blog', {
        fields: ['title', 'headline', 'background'],
        limit: 1, // assuming there's only one item in the collection
      })
    );

    console.log('API Response for blog page:', JSON.stringify(response, null, 2));

    if (!response || !response.length) {
      console.log('No blog page data found');
      return null;
    }

    return response[0] as BlogPage;
  } catch (error) {
    console.error('Error fetching blog page data:', error);
    return null;
  }
}