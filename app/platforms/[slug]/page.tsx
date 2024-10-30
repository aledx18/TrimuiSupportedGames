import Link from 'next/link'
import { api } from '../api'

export default async function Page({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const res = await api.fetch(slug)

  return (
    <div className='flex flex-1 flex-col gap-4 p-4 pt-0'>
      <h1 className='font-semibold'>{res.name}</h1>

      <div className='grid auto-rows-min gap-5 md:grid-cols-3'>
        {res.platforms.map((platform) => (
          <Link
            href={`/platforms/${res.slug}/${platform.slug}`}
            className='grid grid-cols-1 sm:w-1/2 md:w-1/2 lg:w-full transition-all duration-300 border rounded-lg'
            key={platform.id}>
            <div className='relative p-3 col-start-1 row-start-1 flex flex-col-reverse transition-all duration-300 rounded-lg bg-gradient-to-t from-[#0c0a09]/100 via-black/50 hover:via-black/0'>
              <div className='flex justify-between items-center'>
                <h2 className='text-lg font-bold text-secondary-foreground'>
                  {platform.name}
                </h2>
                <p className='text-sm'>{platform.games_count} games</p>
              </div>

              <div className='flex gap-1'>
                <p className='text-sm font-semibold'>({platform.year_start})</p>
              </div>
            </div>
            <div
              className='grid gap-4 col-start-1 col-end-3 row-start-1 h-[260px] bg-cover bg-center rounded-lg transition-all duration-300'
              style={{ backgroundImage: `url(${platform.image_background})` }}
            />
          </Link>
        ))}
      </div>
    </div>
  )
}
