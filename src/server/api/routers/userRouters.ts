// import { z } from 'zod';
// import { createTRPCRouter, publicProcedure } from '~/server/api/trpc';
// import { db } from '~/server/db/db';
// import { users } from '~/server/db/schema';
// import { eq } from 'drizzle-orm';

// export const usersRouter = createTRPCRouter({
//   // Get User by ID
//   getUserById: publicProcedure
//     .input(z.string())
//     .query(async ({ input }) => {
//       const user = await db.select().from(users).where(eq(users.id, input)).first();
//       return user;
//     }),
// });


