// src/server/trpc/routers/placeRouter.ts
import { z } from 'zod';
import { createTRPCRouter, publicProcedure } from '../trpc';
import { db } from '~/server/db';
import { places,placeCategories,categories } from '~/server/db/schema';
import { eq,desc } from 'drizzle-orm';

type PlaceWithCategories = {
  id: string;
  name: string;
  imageUrl: string | null;
  description: string;
  totalLikes: number;
  priceLevel: number;
  categories: string[];
};

export const placesRouter = createTRPCRouter({
  getPlacesByCategory: publicProcedure
    .input(
      z.object({
        categoryName: z.string(), // Menggunakan nama kategori sebagai input
      })
    )
    .query(async ({ input }) => {
      // Query untuk mendapatkan places berdasarkan nama kategori
      const placesByCategory = await db
        .select()
        .from(places)
        .innerJoin(placeCategories, eq(placeCategories.placeId, places.id))
        .innerJoin(categories, eq(categories.id, placeCategories.categoryId))
        .where(eq(categories.name, input.categoryName));
      return placesByCategory;
    }),
  getCategoriesByPlaceId: publicProcedure
    .input(
      z.object({
        placeId: z.string(), // Input berupa ID tempat
      })
    )
    .query(async ({ input }) => {
      // Query untuk mendapatkan kategori berdasarkan ID tempat
      const categoriesForPlace = await db
        .select({
          id: categories.id,
          name: categories.name,
        })
        .from(categories)
        .innerJoin(
          placeCategories,
          eq(placeCategories.categoryId, categories.id)
        )
        .where(eq(placeCategories.placeId, input.placeId));

      return categoriesForPlace;
    }),
    getPlaceById: publicProcedure
    .input(
      z.object({
        placeId: z.string().uuid(), // Menggunakan ID tempat sebagai input
      })
    )
    .query(async ({ input }) => {
      const place = await db
        .select()
        .from(places)
        .where(eq(places.id, input.placeId))
        .limit(1); // Ambil hanya satu tempat berdasarkan id
  
      // Jika tempat ditemukan, kembalikan data tempat
      if (place.length > 0) {
        return place[0];
      } else {
        throw new Error("Place not found");
      }
    }),
    getTotalLikesDislikes: publicProcedure
    .input(
      z.object({
        placeId: z.string(),
      })
    )
    .query(async ({ input }) => {
      const place = await db
        .select({
          totalLikes: places.totalLikes,
          totalDislikes: places.totalDislikes,
        })
        .from(places)
        .where(eq(places.id, input.placeId))
        .limit(1);
  
      return place[0];
    }),
  

});

