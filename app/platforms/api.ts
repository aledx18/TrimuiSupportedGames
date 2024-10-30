import { Brands, gamingBrands } from '@/lib/interfaces/brand'

// Utility function to simulate API delay
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export const api = {
  list: async (): Promise<Brands[]> => {
    // Simulate API delay
    await sleep(750)

    return gamingBrands
  },

  fetch: async (slug: Brands['slug']): Promise<Brands> => {
    // Simulate API delay
    await sleep(905)

    // Find the restaurant with the matching ID
    const Brands = gamingBrands.find((e) => e.slug === slug)

    // Throw an error if the restaurant is not found
    if (!Brands) {
      throw new Error(`Brand with slug "${slug}" not found`)
    }

    return Brands
  }
}
