import { unstable_noStore as noStore } from 'next/cache';
import prisma from '@/lib/prisma';

export async function fetchPosts() {
  noStore();

  try {
    const data = await prisma.post.findMany({
      include: {
        comments: {
          include: {
            user: true,
          },
          orderBy: {
            createdAt: 'desc',
          },
        },
        likes: {
          include: {
            user: true,
          },
        },
        savedBy: true,
        user: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
    return data;
  } catch (e) {
    console.error('Database Error:', e);
    throw new Error('Failed to fetch posts');
  }
}
