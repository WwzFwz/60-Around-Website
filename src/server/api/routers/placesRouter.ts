// import { z } from 'zod';
// import { createTRPCRouter, publicProcedure} from '~/server/api/trpc';
// import { db } from '~/server/db/db';
// import { places, placeCategories,categories } from '~/server/db/schema';
// import { eq } from 'drizzle-orm';

// interface Place {
//   id: string;
//   name: string;
//   imageUrl: string | null;
//   description: string;
//   location: string;
//   priceLevel: string | null;
//   priceRangeLower: number;
//   priceRangeUpper: number;
//   totalLikes: number;
//   totalDislikes: number;
//   createdAt: Date;
//   updatedAt: Date;
// }

// interface Category {
//   name: string;
// }

// interface PlaceWithCategories {
//   place: Place;
//   categories: string[];
// }

// export const placesRouter = createTRPCRouter({
//   // Get Place by ID
//   // getPlaceById: publicProcedure
//   //   .input(z.string())
//   //   .query(async ({ input }) => {
//   //     const place = await db.select().from(places).where(eq(places.id, input)).first();
//   //     return place;
//   //   }),

//   // getPlacesByCategory: publicProcedure
//   //   .input(z.string())
//   //   .query(async ({ input }) => {
//   //     const categoryPlaces = await db
//   //       .select()
//   //       .from(places)
//   //       .innerJoin(placeCategories, eq(placeCategories.categoryId, input))
//   //       .where(eq(places.id, placeCategories.placeId));
//   //     return categoryPlaces;
//   //   }),

//       getPlacesByCategory: publicProcedure
//       .input(z.string())  // Accept the category name as input
//       .query(async ({ input }) => {
//         const categoryPlaces = await db
//           .select({
//             id: places.id,
//             name: places.name,
//             imageUrl: places.imageUrl,
//             description: places.description,
//             location: places.location,
//             priceLevel: places.priceLevel,
//             priceRangeLower: places.priceRangeLower,
//             priceRangeUpper: places.priceRangeUpper,
//             totalLikes: places.totalLikes,
//             totalDislikes: places.totalDislikes,
//             createdAt: places.createdAt,
//             updatedAt: places.updatedAt,
//           })
//           .from(places)
//           .innerJoin(placeCategories, eq(placeCategories.placeId, places.id))
//           .innerJoin(categories, eq(categories.id, placeCategories.categoryId))
//           .where(eq(categories.name, input))  // Filter by the specific category name
//           .groupBy(places.id);
    
//         return categoryPlaces;
//       }),
  

// });
