import { z } from 'zod';
import { createTRPCRouter, protectedProcedure, publicProcedure } from '~/server/api/trpc';
import { db } from '~/server/db/db';
import { reviews } from '~/server/db/schema';
import { eq } from 'drizzle-orm';

export const reviewsRouter = createTRPCRouter({
  // Create Review
  createReview: protectedProcedure
    .input(z.object({
      placeId: z.string(),
      userId: z.string(),
      content: z.string(),
      like: z.boolean(),
      imageUrl: z.string().optional(),
      isAnonymous: z.boolean().default(false),
    }))
    .mutation(async ({ input }) => {
      const newReview = await db.insert(reviews).values(input).returning();
      return newReview;
    }),

  // Get Reviews for Place
  getReviewsForPlace: publicProcedure
    .input(z.string())
    .query(async ({ input }) => {
      const placeReviews = await db.select().from(reviews).where(eq(reviews.placeId, input));
      return placeReviews;
    }),
});
