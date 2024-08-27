import { z } from 'zod';
import { createTRPCRouter, publicProcedure} from '~/server/api/trpc';
import { db } from '~/server/db/db';
import { places, placeCategories } from '~/server/db/schema';
import { eq } from 'drizzle-orm';

export const placesRouter = createTRPCRouter({
  // Get Place by ID
  getPlaceById: publicProcedure
    .input(z.string())
    .query(async ({ input }) => {
      const place = await db.select().from(places).where(eq(places.id, input)).first();
      return place;
    }),

  // Get Places by Category
  getPlacesByCategory: publicProcedure
    .input(z.string())
    .query(async ({ input }) => {
      const categoryPlaces = await db
        .select()
        .from(places)
        .innerJoin(placeCategories, eq(placeCategories.categoryId, input))
        .where(eq(places.id, placeCategories.placeId));
      return categoryPlaces;
    }),

  // // Update Place     
  // updatePlace: protectedProcedure
  //   .input(z.object({
  //     placeId: z.string(),
  //     data: z.object({
  //       name: z.string().optional(),
  //       description: z.string().optional(),
  //       location: z.string().optional(),
  //       priceRangeLower: z.number().optional(),
  //       priceRangeUpper: z.number().optional(),
  //     }),
  //   }))
  //   .mutation(async ({ input }) => {
  //     const updatedPlace = await db.update(places).set(input.data).where(eq(places.id, input.placeId)).returning();
  //     return updatedPlace;
  //   }),

  // // Delete Place
  // deletePlace: protectedProcedure
  //   .input(z.string())
  //   .mutation(async ({ input }) => {
  //     await db.delete(places).where(eq(places.id, input));
  //     return { success: true };
  //   }),
});
