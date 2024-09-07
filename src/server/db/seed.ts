// import { db } from './db';
// import { categories, places} from './schema';



// // Insert Categories
// async function insertCategories() {
//   const categoriesData = [
//     { id: '1', name: 'Foodies', description: 'Places to enjoy great food and beverages.' },
//     { id: '2', name: 'Sport_and_Health', description: 'Fitness centers, parks, and health-oriented places.' },
//     { id: '3', name: 'Study', description: 'Ideal places to study or work.' },
//     { id: '4', name: 'Household', description: 'Stores for household needs.' },
//     { id: '5', name: 'Entertainment', description: 'Fun and leisure activities.' },
//   ];

//   for (const category of categoriesData) {
//     await db.insert(categories).values(category);
//   }
// }

// // Insert Places
// async function insertPlaces() {
//   const placesData = [
//     {
//       name: 'Cafe Ganesha',
//       imageUrl: 'https://cbcbfvvlzsalhunyonzv.supabase.co/storage/v1/object/public/placePict/Place2-1.png',
//       description: 'A cozy cafe near ITB with great coffee and a perfect atmosphere for studying.',
//       content: 'This is one of the most peaceful places to enjoy coffee while working.',
//       location: 'Jalan Ganesha No. 10, Bandung',
//       priceLevel: 2,
//       priceRangeLower: 25000,
//       priceRangeUpper: 50000,
//       totalLikes: 120,
//       totalDislikes: 5,
//     },
//     {
//       name: 'Taman Sari Park',
//       imageUrl: 'https://cbcbfvvlzsalhunyonzv.supabase.co/storage/v1/object/public/placePict/Place2-1.png',
//       description: 'A beautiful park perfect for a morning jog or an evening walk.',
//       content: 'With jogging tracks and a lake, it\'s the perfect place for fitness enthusiasts.',
//       location: 'Jalan Taman Sari, Bandung',
//       priceLevel: 1,
//       priceRangeLower: 0,
//       priceRangeUpper: 0,
//       totalLikes: 85,
//       totalDislikes: 2,
//     },
//     // Tambahkan lebih banyak tempat sesuai kebutuhan Anda
//   ];

//   for (const place of placesData) {
//     await db.insert(places).values(place);
//   }
// }

// // Populate Database
// async function populateDatabase() {
//   try {
//     await insertCategories();  // Masukkan kategori
//     await insertPlaces();  // Masukkan tempat
//     console.log('Places and categories inserted successfully.');
//   } catch (error) {
//     console.error('Error inserting data:', error);
//   }
// }

// async function run() {
//     await populateDatabase();
//   }
  
//   run().catch(console.error);



//   // {
//   //   "name": "Pandora Escape Room",
//   //   "imageUrl": "https://cbcbfvvlzsalhunyonzv.supabase.co/storage/v1/object/public/placePict/Place2-1.png",
//   //   "description": "Experience the thrill of solving puzzles and escaping from locked rooms at Pandora Escape Room.",
//   //   "content": "Pandora Escape Room offers an immersive escape game experience where participants must work together to solve challenging puzzles and uncover hidden clues. Each room has a unique theme and storyline, designed to test your logic, teamwork, and problem-solving skills. Whether you're looking for a fun activity with friends or a team-building exercise, Pandora Escape Room delivers an unforgettable adventure. Be prepared for twists and turns as you race against the clock to escape!",
//   //   "location": "Jl. Setiabudi No. 45, Bandung",
//   //   "priceLevel": 3,
//   //   "priceRangeLower": 100000,
//   //   "priceRangeUpper": 150000,
//   //   "totalLikes": 300,
//   //   "totalDislikes": 10
//   // }
  

//   // {
//   //   "name": "Dot Games Board Game Cafe",
//   //   "imageUrl": "https://cbcbfvvlzsalhunyonzv.supabase.co/storage/v1/object/public/placePict/Place2-1.png",
//   //   "description": "A cozy board game cafe with a wide variety of games and a great place to hang out with friends.",
//   //   "content": "Dot Games Board Game Cafe is the perfect spot for board game enthusiasts, offering a wide selection of classic and modern board games. Whether you're a casual player or a board game aficionado, Dot Games has something for everyone. The cafe provides a relaxing environment where you can enjoy delicious food and beverages while engaging in friendly competition. The staff is knowledgeable about the games and always ready to recommend something fun. It's an ideal venue for group gatherings, game nights, or simply unwinding with your favorite game after a long day.",
//   //   "location": "Jl. Riau No. 18, Bandung",
//   //   "priceLevel": 2,
//   //   "priceRangeLower": 50000,
//   //   "priceRangeUpper": 100000,
//   //   "totalLikes": 250,
//   //   "totalDislikes": 5
//   // }
  