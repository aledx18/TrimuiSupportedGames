'use server'

import { db } from '../index'
import { brands, platforms } from '../schema'

// Función para insertar un `brand` con sus `platforms`
export async function createBrandWithPlatforms(brandData: any) {
  const { name, slug, platforms: platformList } = brandData

  // Inserta el brand en la tabla `brands` sin el ID
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
