import { z } from 'zod';
import { createTRPCRouter,protectedProcedure} from '~/server/api/trpc';
import { db } from '~/server/db';
import { bookmarks } from '~/server/db/schema';
import { eq, and } from 'drizzle-orm';

export const bookmarksRouter = createTRPCRouter({
  // Bookmark Place
  bookmarkPlace: protectedProcedure
    .input(z.object({
      userId: z.string(),
      placeId: z.string(),
    }))
    .mutation(async ({ input }) => {
      const newBookmark = await db.insert(bookmarks).values(input).returning();
      return newBookmark;
    }),

  // Unbookmark Place
  unbookmarkPlace: protectedProcedure
    .input(z.object({
      userId: z.string(),
      placeId: z.string(),
    }))
    .mutation(async ({ input }) => {
      await db.delete(bookmarks).where(and(eq(bookmarks.userId, input.userId), eq(bookmarks.placeId, input.placeId)));
      return { success: true };
    }),

  // Get User Bookmarks
  getUserBookmarks: protectedProcedure
    .input(z.string())
    .query(async ({ input }) => {
      const userBookmarks = await db.select().from(bookmarks).where(eq(bookmarks.userId, input));
      return userBookmarks;
    }),
});
