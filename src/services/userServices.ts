// import { supabaseClient } from "~/server/supabaseClient";

// export async function fetchUsers() {
//   try {
//     const { data, error } = await supabaseClient.from('users').select('*');
//     if (error) {
//       throw new Error(`Error fetching users: ${error.message}`);
//     }
//     return error;
//   } catch (err) {
//     const error = err as Error; // Type assertion
//     console.error('An unexpected error occurred:', error.message);
//     throw error; // Re-throw error if needed
//   }
// }
