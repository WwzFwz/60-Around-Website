// // src/server/api/trpc.ts
// import { initTRPC } from "@trpc/server";
// import { type NextRequest } from "next/server";
// import { db } from "../db/db";

// // export const createContext = ({ req }: { req: NextRequest }) => {
// //   // Tambahkan logika context di sini
// //   return {
// //     req,
// //     // tambahkan properti lain jika diperlukan
// //   };
// // };


// export const createTRPCContext = async (opts: { headers: Headers }) => {

//   return {
//     db,
//     ...opts,
//   };
// };
// // Gunakan Awaited<ReturnType<...>> untuk menentukan tipe context
// type Context = Awaited<ReturnType<typeof createTRPCContext>>;

// const t = initTRPC.context<Context>().create();

// export const appRouter = t.router({
//   // Tambahkan prosedur dan router di sini
// });


import { initTRPC } from "@trpc/server";
import SuperJSON from "superjson";
import { type NextRequest } from "next/server";

const t = initTRPC.create({
  transformer: SuperJSON, // Pastikan SuperJSON digunakan di sini
});

export const createContext = ({ req }: { req: NextRequest }) => {
  return {
    req,
    // Tambahkan properti lain jika diperlukan
  };
};



// Inisialisasi tRPC

// Membuat router sederhana
export const createTRPCRouter = t.router;

export const protectedProcedure = t.procedure;


export const publicProcedure = t.procedure;

