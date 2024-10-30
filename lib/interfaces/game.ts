export type Genre = {
  id: number
  name: string
  slug: string
}

export type ShortScreenshot = {
  id: number
  image: string
}
export type Game = {
  slug: string
  name: string
  released: string
  background_image: string
  rating: number
  rating_top: number
  metacritic: number
  id: number
  saturated_color: string
  dominant_color: string
  short_screenshots: ShortScreenshot[]
  platform: string
  genres: Genre[]
}

export const game: Game[] = [
  {
    slug: 'star-wars-battlefront-ii-2',
    name: 'Star Wars: Battlefront II (2005)',
    released: '2005-10-30',
    background_image:
      'https://media.rawg.io/media/games/662/6625a20ca1d13699ee7c191b20a02408.jpg',
    rating: 4.22,
    rating_top: 4,
    metacritic: 78,
    id: 13886,
    saturated_color: '0f0f0f',
    dominant_color: '0f0f0f',
    platform: 'psp',
    short_screenshots: [
      {
        id: -1,
        image:
          'https://media.rawg.io/media/games/662/6625a20ca1d13699ee7c191b20a02408.jpg'
      },
      {
        id: 119768,
        image:
          'https://media.rawg.io/media/screenshots/331/331498527090104a46dc68a6c6db4865.jpg'
      },
      {
        id: 119769,
        image:
          'https://media.rawg.io/media/screenshots/2c7/2c7f43ad4dacd435c78f7dc9567cf57d.jpg'
      },
      {
        id: 119770,
        image:
          'https://media.rawg.io/media/screenshots/2d6/2d6e67e5aba87707cb6f334b3d4cfab8.jpg'
      },
      {
        id: 119771,
        image:
          'https://media.rawg.io/media/screenshots/97f/97f58602fe4660a8619ae0eb3f19456f.jpg'
      },
      {
        id: 119772,
        image:
          'https://media.rawg.io/media/screenshots/c36/c363a48b5b7ffae7a3403a3789914642.jpg'
      },
      {
        id: 119773,
        image:
          'https://media.rawg.io/media/screenshots/f37/f37f5b5535b1dc438813894bf6e4da76.jpg'
      }
    ],
    genres: [
      {
        id: 2,
        name: 'Shooter',
        slug: 'shooter'
      },
      {
        id: 4,
        name: 'Action',
        slug: 'action'
      }
    ]
  }
]
