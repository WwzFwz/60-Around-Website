import { z } from 'zod';
import { createTRPCRouter,  publicProcedure } from '~/server/api/trpc';
import { db } from '~/server/db';
import { reviews,places} from '~/server/db/schema';
import { eq } from 'drizzle-orm';
import { sql } from 'drizzle-orm';

export const reviewsRouter = createTRPCRouter({
  // Create Review
  createReview: publicProcedure
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
    getReviewsByPlaceId: publicProcedure
    .input(
      z.object({
        placeId: z.string(),
      })
    )
    .query(async ({ input }) => {
      const reviewsData = await db
        .select()
        .from(reviews)
        .where(eq(reviews.placeId, input.placeId));

      return reviewsData;
    }),
    addReview: publicProcedure
    .input(
      z.object({
        placeId: z.string(), // The ID of the place being reviewed
        content: z.string(), // Review content
        isPositive: z.boolean(), // Whether the review is positive or negative
        imageUrl: z.string().optional(), // Optional image for the review
        isAnonymous: z.boolean().optional().default(true), // Indicates if the review is anonymous
      })
    )
    .mutation(async ({ input }) => {
      // Insert the review data into the reviews table
      const review = await db.insert(reviews).values({
        placeId: input.placeId,
        content: input.content,
        like: input.isPositive, // Assuming "like" corresponds to isPositive
        isAnonymous: input.isAnonymous, // Whether the review is anonymous
        imageUrl: input.imageUrl || null, // If there's an image, otherwise null
      });
  
      // Optionally, update the total likes/dislikes in the places table
      if (input.isPositive) {
        await db
          .update(places)
          .set({
            totalLikes: sql`totalLikes + 1`,
          })
          .where(eq(places.id, input.placeId));
      } else {
        await db
          .update(places)
          .set({
            totalDislikes: sql`totalDislikes + 1`,
          })
          .where(eq(places.id, input.placeId));
      }
  
      return review;
    }),
  
});
