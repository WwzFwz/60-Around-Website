// import { initTRPC } from '@trpc/server';
// import superjson from 'superjson';
// import { createContext } from '~/server/context'; // Make sure this path is correct

// const t = initTRPC.context<typeof createContext>().create({
//   transformer: superjson,
// });

// // Define your tRPC router here
// export const appRouter = t.router({
//   // Define your procedures here, for example:
//   getUserById: t.procedure.input((id: string) => id).query(({ input }) => {
//     // Implementation of the procedure
//     return { id: input, name: 'User' };
//   }),
// });

// // Export the type of the router
// export type AppRouter = typeof appRouter;


