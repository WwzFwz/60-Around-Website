import { createTRPCRouter } from "~/server/api/trpc";
import { placesRouter } from "~/server/api/routers/placesRouter";
import { bookmarksRouter } from "~/server/api/routers/bookmarksRouter";
import { reviewsRouter } from "~/server/api/routers/reviewsRouter";
// import { userRouter } from "~/server/api/routers/userRouter";

// Define the context type
// interface Context {
//   session: {
//     user?: {
//       id: string;
//     };
//   } | null;
// }

// Create the main router for your server
export const appRouter = createTRPCRouter({
  places: placesRouter,
  bookmarks: bookmarksRouter,
  reviews: reviewsRouter,
//   users: userRouter,
});

// Export type definition of API
export type AppRouter = typeof appRouter;

