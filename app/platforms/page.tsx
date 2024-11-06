import Link from 'next/link'
import { Brands } from '@/lib/interfaces/brand'
import { selectBrands } from '@/db/queries/select'
// import { createGame } from '@/db/queries/insert'

export default async function Page() {
  const r: Brands[] = await selectBrands()

  //   const g = await createGame({
  //     slug: 'star-wars-battlefront-ii-2',
  //     name: 'Star Wars: Battlefront II (2005)',
  //     released: '2005-10-30',
  //     background_image:
  //       'https://media.rawg.io/media/games/662/6625a20ca1d13699ee7c191b20a02408.jpg',
  //     rating: 4.22,
  //     rating_top: 4,
  //     metacritic: 78,
  //     saturated_color: '0f0f0f',
  //     dominant_color: '0f0f0f',
  //     platform: 'psp',
  //     short_screenshots: [
  //       {
  //         image:
  //           'https://media.rawg.io/media/games/662/6625a20ca1d13699ee7c191b20a02408.jpg'
  //       },
  //       {
  //         image:
  //           'https://media.rawg.io/media/screenshots/331/331498527090104a46dc68a6c6db4865.jpg'
  //       },
  //       {
  //         image:
  //           'https://media.rawg.io/media/screenshots/2c7/2c7f43ad4dacd435c78f7dc9567cf57d.jpg'
  //       },
  //       {
  //         image:
  //           'https://media.rawg.io/media/screenshots/2d6/2d6e67e5aba87707cb6f334b3d4cfab8.jpg'
  //       },
  //       {
  //         image:
  //           'https://media.rawg.io/media/screenshots/97f/97f58602fe4660a8619ae0eb3f19456f.jpg'
  //       },
  //       {
  //         image:
  //           'https://media.rawg.io/media/screenshots/c36/c363a48b5b7ffae7a3403a3789914642.jpg'
  //       },
  //       {
  //         image:
  //           'https://media.rawg.io/media/screenshots/f37/f37f5b5535b1dc438813894bf6e4da76.jpg'
  //       }
  //     ],
  //     genres: [
  //       { name: 'Shooter', slug: 'shooter' },
  //       { name: 'Action', slug: 'action' }
  //     ]
  //   })

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
