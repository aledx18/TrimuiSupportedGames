'use server'

import { eq } from 'drizzle-orm'
import { db } from '../index'
import { brands, games, genres, platformGames, platforms } from '../schema'

export async function selectBrandsWithSlug(slug: string) {
  const e = await db
    .select()
    .from(brands)
    .where(eq(brands.slug, slug))
    .leftJoin(platforms, eq(platforms.brandId, brands.id))

  // Agrupa los resultados para devolver la estructura deseada
  const brandData = e.reduce((acc: any, row: any) => {
    const { id: brandId, name: brandName, slug: brandSlug } = row.brands

    const platform = row.platforms

    // Si aún no existe la marca en el acumulador, la crea
    if (!acc.id) {
      acc.id = brandId
      acc.name = brandName
      acc.slug = brandSlug
      acc.platforms = []
    }

    // Si existe una plataforma asociada, la agrega al array de plataformas
    if (platform && platform.id) {
      acc.platforms.push({
        id: platform.id,
        name: platform.name,
        slug: platform.slug,
        games_count: platform.games_count,
        image_background: platform.image_background,
        image: platform.image,
        year_start: platform.year_start
      })
    }

    return acc
  }, {})

  return brandData
}

export async function selectBrands() {
  return await db.select().from(brands)
}

export async function selectGenres() {
  return await db.select().from(genres)
}
export async function selectPlatformWithGames(platformId: number) {
  const results = await db
    .select()
    .from(platforms)
    .where(eq(platforms.id, platformId))
    .leftJoin(platformGames, eq(platformGames.platformId, platforms.id))
    .leftJoin(games, eq(platformGames.gameId, games.id))

  if (results.length === 0) {
    return null // Retorna null si no se encontró la plataforma con el ID dado
  }

  // Estructura los datos en el formato deseado
  const platform = {
    id: results[0].platforms.id,
    name: results[0].platforms.name,
    slug: results[0].platforms.slug,
    games: results
      .filter((result) => result.games?.id) // Filtra solo los registros con juegos válidos
      .map((result) => ({
        id: result?.games?.id,
        name: result.games?.name,
        slug: result.games?.slug,
        released: result.games?.released,
        background_image: result.games?.background_image,
        rating: result.games?.rating
        // Agrega otros campos que quieras incluir de los juegos
      }))
  }

  return platform
}

export async function selectGames() {
  return await db.select().from(games)
}
