'use server'

import { Brand } from '@/lib/interfaces/brand'
import { db } from '../index'
import {
  brands,
  gameGenres,
  games,
  genres,
  platformGames,
  platforms,
  shortScreenshots
} from '../schema'
import { Game } from '@/lib/interfaces/game'
import { eq, inArray } from 'drizzle-orm'

// Insert `brand` whit `platforms` associated
export async function createBrandWithPlatforms(brandData: Brand) {
  const { name, slug, platforms: platformList } = brandData

  const [brand] = await db
    .insert(brands)
    .values({
      name,
      slug
    })
    .returning() // Usa returning para obtener el ID generado del brand

  // Inserta cada `platform` asociada a la marca en la tabla `platforms`
  await Promise.all(
    platformList.map(async (platform: any) => {
      await db.insert(platforms).values({
        name: platform.name,
        slug: platform.slug,
        games_count: platform.games_count,
        image_background: platform.image_background,
        image: platform.image,
        year_start: platform.year_start,
        brandId: brand.id // Usa el ID generado del brand para establecer la relación
      })
    })
  )
}
// Insert 'games'
export async function createGame(gameData: Game) {
  // 1. Insertar datos del juego en la tabla `games`
  const [newGame] = await db
    .insert(games)
    .values({
      slug: gameData.slug,
      name: gameData.name,
      released: gameData.released,
      background_image: gameData.background_image,
      rating: gameData.rating,
      rating_top: gameData.rating_top,
      metacritic: gameData.metacritic,
      saturated_color: gameData.saturated_color,
      dominant_color: gameData.dominant_color,
      platform: gameData.platform
    })
    .returning()

  const gameId = newGame.id

  // 2. Insertar capturas de pantalla en la tabla `screenshots`
  if (gameData.short_screenshots.length > 0) {
    await db.insert(shortScreenshots).values(
      gameData.short_screenshots.map((screenshot) => ({
        gameId,
        image: screenshot.image
      }))
    )
  }
  // 3. Asociar géneros del juego en la tabla `gameGenres`
  if (gameData.genres.length > 0) {
    // Obtenemos los slugs de los géneros del juego
    const genreSlugs = gameData.genres.map((genre) => genre.slug)

    // Seleccionamos los géneros existentes en la base de datos que coincidan con los slugs del juego
    const genreRecords = await db
      .select()
      .from(genres)
      .where(inArray(genres.slug, genreSlugs))

    await db.insert(gameGenres).values(
      genreRecords.map((genreRecord) => ({
        gameId,
        genreId: genreRecord.id
      }))
    )
  }

  // Inserta en platformGames para plataformas relacionadas
  const [platformRecord] = await db
    .select({ id: platforms.id })
    .from(platforms)
    .where(eq(platforms.slug, gameData.platform))
    .limit(1)

  if (platformRecord) {
    await db.insert(platformGames).values({
      gameId,
      platformId: platformRecord.id
    })
  }

  return newGame
}
