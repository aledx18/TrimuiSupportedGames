import Link from 'next/link'
import { Brands } from '@/lib/interfaces/brand'
import { selectBrands } from '@/db/queries/select'

export default async function Page() {
  const r: Brands[] = await selectBrands()

  return (
    <div className='flex flex-1 flex-col gap-4 p-4 pt-0'>
      <h1 className='font-semibold'>All Platforms</h1>
      <div className='grid auto-rows-min gap-5 md:grid-cols-3'>
        {r.map((platform) => (
          <Link
            href={`platforms/${platform.slug}`}
            className='grid grid-cols-1 sm:w-1/2 md:w-1/2 lg:w-full transition-all duration-300 border rounded-lg'
            key={platform.id}>
            <div className='relative p-3 col-start-1 row-start-1 flex flex-col-reverse transition-all duration-300 rounded-lg'>
              <div className='flex justify-between items-center'>
                <h2 className='text-lg font-bold text-secondary-foreground'>
                  {platform.name}
                </h2>
                {/* <p className='text-sm'>{platform.games_count} games</p> */}
              </div>

              <div className='flex gap-1'>
                {/* <p className='text-sm font-semibold'>({platform.year_start})</p> */}
              </div>
            </div>
            {/* <div
              className='grid gap-4 col-start-1 col-end-3 row-start-1 h-[260px] bg-cover bg-center rounded-lg transition-all duration-300'
              style={{ backgroundImage: `url(${platform.image_background})` }}
            /> */}
          </Link>
        ))}
      </div>
    </div>
  )
}
