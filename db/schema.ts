import { sqliteTable as table } from 'drizzle-orm/sqlite-core'
import * as t from 'drizzle-orm/sqlite-core'

// Tabla 'genres'
export const genres = table('genres', {
  id: t.int().primaryKey({ autoIncrement: true }),
  name: t.text().notNull(),
  slug: t.text().notNull()
})

// Tabla 'short_screenshots'
export const shortScreenshots = table('short_screenshots', {
  id: t.int().primaryKey({ autoIncrement: true }),
  image: t.text().notNull()
})

// Tabla 'games'
export const games = table(
  'games',
  {
    id: t.int().primaryKey({ autoIncrement: true }),
    slug: t.text().notNull(),
    name: t.text().notNull(),
    released: t.text(), // Fecha como texto, puedes convertir a formato de fecha si lo prefieres
    background_image: t.text(),
    rating: t.int(),
    rating_top: t.int(),
    metacritic: t.int(),
    saturated_color: t.text(),
    dominant_color: t.text(),
    platform: t.text()
  },
  (table) => {
    return {
      slugIndex: t.uniqueIndex('slug_idx').on(table.slug)
    }
  }
)

// Tabla 'brands'
export const brands = table('brands', {
  id: t.int().primaryKey({ autoIncrement: true }),
  name: t.text().notNull(),
  slug: t.text().notNull()
})

// Tabla 'platforms'
export const platforms = table('platforms', {
  id: t.int().primaryKey({ autoIncrement: true }),
  name: t.text().notNull(),
  slug: t.text().notNull(),
  games_count: t.int().default(0), // Puede actualizarse mediante una función de conteo
  image_background: t.text(),
  image: t.text(),
  year_start: t.int(),
  brandId: t.int().references(() => brands.id) // Relación con 'brands'
})

// Tabla de relación muchos a muchos entre 'platforms' y 'games'
export const platformGames = table('platform_games', {
  platformId: t.int().references(() => platforms.id),
  gameId: t.int().references(() => games.id)
})
// Tabla de relación muchos a muchos entre 'games' y 'genres'
export const gameGenres = table('game_genres', {
  gameId: t.int().references(() => games.id),
  genreId: t.int().references(() => genres.id)
})

// Tabla de relación uno a muchos para 'games' y 'short_screenshots'
export const gameScreenshots = table('game_screenshots', {
  gameId: t.int().references(() => games.id),
  screenshotId: t.int().references(() => shortScreenshots.id)
})
