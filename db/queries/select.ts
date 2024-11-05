'use server'

import { eq } from 'drizzle-orm'
import { db } from '../index'
import { brands, platforms } from '../schema'

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
