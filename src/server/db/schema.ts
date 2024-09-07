
// import { pgTable, varchar, text, integer, timestamp, boolean, primaryKey,uuid } from 'drizzle-orm/pg-core';
// import { relations } from 'drizzle-orm';

// // Tabel Pengguna (Users)
// export const users = pgTable('users', {
//   id: varchar('id', { length: 36 }).primaryKey(),
//   email: varchar('email', { length: 255 }).notNull().unique(),
//   username: varchar('username', { length: 255 }).notNull().unique(),
//   passwordHash: varchar('password_hash', { length: 255 }).notNull(),
//   createdAt: timestamp('created_at').defaultNow().notNull(),
//   updatedAt: timestamp('updated_at').defaultNow().notNull(),
// });


// // Tabel Tempat (Places)
// export const places = pgTable('places', {
//   id: uuid('id').defaultRandom().primaryKey(), 
//   // id: varchar('id', { length: 36 }).primaryKey(),
//   name: varchar('name', { length: 255 }).notNull(),
//   imageUrl: varchar('image_url', { length: 255 }),
//   description: text('description').notNull(),  // Short description for cards
//   content: text('content'),  // Optional longer description for detailed views
//   location: varchar('location', { length: 255 }).notNull(),
//   priceLevel: integer('price_level').notNull(), // Changed to integer for price level 1-3
//   priceRangeLower: integer('price_range_lower').notNull(),
//   priceRangeUpper: integer('price_range_upper').notNull(),
//   totalLikes: integer('total_likes').default(0).notNull(),
//   totalDislikes: integer('total_dislikes').default(0).notNull(),
//   createdAt: timestamp('created_at').defaultNow().notNull(),
//   updatedAt: timestamp('updated_at').defaultNow().notNull(),
// });

// // Tabel Kategori (Categories)
// export const categories = pgTable('categories', {
//   id: varchar('id', { length: 36 }).primaryKey(),
//   name: varchar('name', { length: 255 }).notNull().unique(),
//   description: text('description').notNull(),
// });

// // Tabel Relasi Tempat-Kategori (PlaceCategories)
// export const placeCategories = pgTable('placeCategories', {
//   placeId: varchar('place_id', { length: 36 }).notNull().references(() => places.id),
//   categoryId: varchar('category_id', { length: 36 }).notNull().references(() => categories.id),
// }, (table) => {
//   return {
//     primaryKey: primaryKey({ columns: [table.placeId, table.categoryId] }),
//   };
// });

// // Tabel Ulasan (Reviews)
// export const reviews = pgTable('reviews', {
//   id: uuid('id').defaultRandom().primaryKey(),
//   placeId: varchar('place_id', { length: 36 }).notNull().references(() => places.id, { onDelete: 'cascade' }),
//   userId: varchar('user_id', { length: 36 }).references(() => users.id, { onDelete: 'cascade' }),
//   content: text('content').notNull(),
//   like: boolean('like').notNull(),
//   imageUrl: varchar('image_url', { length: 255 }),
//   isAnonymous: boolean('is_anonymous').default(false).notNull(),
//   createdAt: timestamp('created_at').defaultNow().notNull(),
//   updatedAt: timestamp('updated_at').defaultNow().notNull(),
// });

// // Tabel Bookmark (Bookmarks)
// export const bookmarks = pgTable('bookmarks', {
//   userId: varchar('user_id', { length: 36 }).notNull().references(() => users.id, { onDelete: 'cascade' }),
//   placeId: uuid('place_id').notNull().references(() => places.id, { onDelete: 'cascade' }),
//   // placeId: varchar('place_id', { length: 36 }).notNull().references(() => places.id, { onDelete: 'cascade' }),
// }, (table) => {
//   return {
//     primaryKey: primaryKey({ columns: [table.userId, table.placeId] }),
//   };
// });

// // Relasi untuk tabel Users
// export const usersRelations = relations(users, ({ many }) => ({
//   reviews: many(reviews),
//   bookmarks: many(bookmarks),
// }));

// // Relasi untuk tabel Places
// export const placesRelations = relations(places, ({ many }) => ({
//   reviews: many(reviews),
//   categories: many(placeCategories),
//   bookmarks: many(bookmarks),
// }));

// // Relasi untuk tabel Categories
// export const categoriesRelations = relations(categories, ({ many }) => ({
//   places: many(placeCategories),
// }));

// // Relasi untuk tabel PlaceCategories
// export const placeCategoriesRelations = relations(placeCategories, ({ one }) => ({
//   place: one(places, {
//     fields: [placeCategories.placeId],
//     references: [places.id],
//   }),
//   category: one(categories, {
//     fields: [placeCategories.categoryId],
//     references: [categories.id],
//   }),
// }));

// // Relasi untuk tabel Reviews
// export const reviewsRelations = relations(reviews, ({ one }) => ({
//   user: one(users, {
//     fields: [reviews.userId],
//     references: [users.id],
//   }),
//   place: one(places, {
//     fields: [reviews.placeId],
//     references: [places.id],
//   }),
// }));

// // Relasi untuk tabel Bookmarks
// export const bookmarksRelations = relations(bookmarks, ({ one }) => ({
//   user: one(users, {
//     fields: [bookmarks.userId],
//     references: [users.id],
//   }),
//   place: one(places, {
//     fields: [bookmarks.placeId],
//     references: [places.id],
//   }),
// }));


import { pgTable, varchar, text, integer, timestamp, boolean, primaryKey, uuid } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

// Tabel Pengguna (Users)
export const users = pgTable('users', {
  id: uuid('id').defaultRandom().primaryKey(), // Changed to UUID
  email: varchar('email', { length: 255 }).notNull().unique(),
  username: varchar('username', { length: 255 }).notNull().unique(),
  passwordHash: varchar('password_hash', { length: 255 }).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// Tabel Tempat (Places)
export const places = pgTable('places', {
  id: uuid('id').defaultRandom().primaryKey(), 
  name: varchar('name', { length: 255 }).notNull(),
  imageUrl: varchar('image_url', { length: 255 }),
  description: text('description').notNull(),  // Short description for cards
  content: text('content'),  // Optional longer description for detailed views
  location: varchar('location', { length: 255 }).notNull(),
  priceLevel: integer('price_level').notNull(), // Integer for price level 1-3
  priceRangeLower: integer('price_range_lower').notNull(),
  priceRangeUpper: integer('price_range_upper').notNull(),
  totalLikes: integer('total_likes').default(0).notNull(),
  totalDislikes: integer('total_dislikes').default(0).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// Tabel Kategori (Categories)
export const categories = pgTable('categories', {
  id: uuid('id').defaultRandom().primaryKey(), // Changed to UUID
  name: varchar('name', { length: 255 }).notNull().unique(),
  description: text('description').notNull(),
});

// Tabel Relasi Tempat-Kategori (PlaceCategories)
export const placeCategories = pgTable('placeCategories', {
  placeId: uuid('place_id').notNull().references(() => places.id), // Changed to UUID
  categoryId: uuid('category_id').notNull().references(() => categories.id), // Changed to UUID
}, (table) => {
  return {
    primaryKey: primaryKey({ columns: [table.placeId, table.categoryId] }),
  };
});

// Tabel Ulasan (Reviews)
export const reviews = pgTable('reviews', {
  id: uuid('id').defaultRandom().primaryKey(),
  placeId: uuid('place_id').notNull().references(() => places.id, { onDelete: 'cascade' }), // Changed to UUID
  userId: uuid('user_id').references(() => users.id, { onDelete: 'cascade' }), // Changed to UUID
  content: text('content').notNull(),
  like: boolean('like').notNull(),
  imageUrl: varchar('image_url', { length: 255 }),
  isAnonymous: boolean('is_anonymous').default(false).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// Tabel Bookmark (Bookmarks)
export const bookmarks = pgTable('bookmarks', {
  userId: uuid('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }), // Changed to UUID
  placeId: uuid('place_id').notNull().references(() => places.id, { onDelete: 'cascade' }), // Changed to UUID
}, (table) => {
  return {
    primaryKey: primaryKey({ columns: [table.userId, table.placeId] }),
  };
});

// Relasi untuk tabel Users
export const usersRelations = relations(users, ({ many }) => ({
  reviews: many(reviews),
  bookmarks: many(bookmarks),
}));

// Relasi untuk tabel Places
export const placesRelations = relations(places, ({ many }) => ({
  reviews: many(reviews),
  categories: many(placeCategories),
  bookmarks: many(bookmarks),
}));

// Relasi untuk tabel Categories
export const categoriesRelations = relations(categories, ({ many }) => ({
  places: many(placeCategories),
}));

// Relasi untuk tabel PlaceCategories
export const placeCategoriesRelations = relations(placeCategories, ({ one }) => ({
  place: one(places, {
    fields: [placeCategories.placeId],
    references: [places.id],
  }),
  category: one(categories, {
    fields: [placeCategories.categoryId],
    references: [categories.id],
  }),
}));

// Relasi untuk tabel Reviews
export const reviewsRelations = relations(reviews, ({ one }) => ({
  user: one(users, {
    fields: [reviews.userId],
    references: [users.id],
  }),
  place: one(places, {
    fields: [reviews.placeId],
    references: [places.id],
  }),
}));

// Relasi untuk tabel Bookmarks
export const bookmarksRelations = relations(bookmarks, ({ one }) => ({
  user: one(users, {
    fields: [bookmarks.userId],
    references: [users.id],
  }),
  place: one(places, {
    fields: [bookmarks.placeId],
    references: [places.id],
  }),
}));
