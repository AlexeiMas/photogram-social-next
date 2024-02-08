import { unstable_noStore as noStore } from 'next/cache';
import prisma from '@/lib/prisma';

export async function fetchPosts() {
  //equivalent to a fetch method with option - cache: no-store
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

export async function fetchPostById(id: string) {
  noStore();

  try {
    // await new Promise((resolve) => setTimeout(resolve, 10000)); // manual delay loading

    const data = await prisma.post.findUnique({
      where: {
        id,
      },
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
    });

    return data;
  } catch (e) {
    console.error('Database Error:', e);
    throw new Error('Failed to fetch post');
  }
}

export async function fetchPostByUsername(username: string, postId?: string) {
  noStore();

  try {
    const data = await prisma.post.findMany({
      where: {
        user: {
          username,
        },
        NOT: {
          id: postId,
        },
      },
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
    throw new Error('Failed to fetch post');
  }
}

export async function fetchProfile(username: string) {
  noStore();

  try {
    const data = await prisma.user.findUnique({
      where: {
        username,
      },
      include: {
        posts: {
          orderBy: {
            createdAt: 'desc',
          },
        },
        saved: {
          orderBy: {
            createdAt: 'desc',
          },
        },
        followedBy: {
          include: {
            follower: {
              include: {
                following: true,
                followedBy: true,
              },
            },
          },
        },
        following: {
          include: {
            following: {
              include: {
                following: true,
                followedBy: true,
              },
            },
          },
        },
      },
    });

    return data;
  } catch (e) {
    console.error('Database Error:', e);
    throw new Error('Failed to fetch profile');
  }
}

export async function fetchSavedPostsByUsername(username: string) {
  noStore();

  try {
    const data = await prisma.savedPost.findMany({
      where: {
        user: {
          username,
        },
      },
      include: {
        post: {
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
        },
      },
    });

    return data;
  } catch (e) {
    console.error('Database Error:', e);
    throw new Error('Failed to fetch saved posts');
  }
}
