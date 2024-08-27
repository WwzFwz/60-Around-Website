import { createTRPCRouter } from '~/server/api/trpc';
import { placesRouter } from './placesRouter';
import { reviewsRouter } from './reviewsRouter';
import { bookmarksRouter } from './bookmarksRouter';
// import { usersRouter } from './usersRouter';

export const appRouter = createTRPCRouter({
  places: placesRouter,
  reviews: reviewsRouter,
  bookmarks: bookmarksRouter,
//   users: usersRouter,
});
