export type Platform = {
  id: number
  name: string
  slug: string
  games_count: number
  image_background: string
  image: null
  year_start: number
  year_end: null
}
export type Brand = {
  id: number
  name: string
  slug: string
  platforms: Platform[]
}
export type Brands = {
  id: number
  name: string
  slug: string
}

// export const gamingBrands: Brands[] = [
//   {
//     id: 2,
//     name: 'PlayStation',
//     slug: 'playstation',
//     platforms: [
//       {
//         id: 27,
//         name: 'PlayStation',
//         slug: 'playstation1',
//         games_count: 1675,
//         image_background:
//           'https://res.cloudinary.com/dpbhmwmwm/image/upload/v1729793001/psx_qsrxll.png',
//         image: null,
//         year_start: 1995,
//         year_end: null
//       },
//       {
//         id: 17,
//         name: 'PSP',
//         slug: 'psp',
//         games_count: 1372,
//         image_background:
//           'https://res.cloudinary.com/dpbhmwmwm/image/upload/v1729790353/psp_cs04lf_c_crop_h_1000_xnbr9p.png',
//         image: null,
//         year_start: 2005,
//         year_end: null
//       }
//     ]
//   },
//   {
//     id: 7,
//     name: 'Nintendo',
//     slug: 'nintendo',
//     platforms: [
//       {
//         id: 9,
//         name: 'Nintendo DS',
//         slug: 'nintendo-ds',
//         games_count: 2484,
//         image_background:
//           'https://res.cloudinary.com/dpbhmwmwm/image/upload/v1729808845/nds_fxxwkf.png',
//         image: null,
//         year_start: 2004,
//         year_end: null
//       },
//       {
//         id: 83,
//         name: 'Nintendo 64',
//         slug: 'nintendo-64',
//         games_count: 363,
//         image_background:
//           'https://res.cloudinary.com/dpbhmwmwm/image/upload/v1729792492/N64_Logo_Black_u6j14d.png',
//         image: null,
//         year_start: 1996,
//         year_end: null
//       },
//       {
//         id: 24,
//         name: 'Game Boy Advance',
//         slug: 'game-boy-advance',
//         games_count: 954,
//         image_background:
//           'https://res.cloudinary.com/dpbhmwmwm/image/upload/v1729793247/gba_ul3qym.png',
//         image: null,
//         year_start: 2001,
//         year_end: null
//       },
//       {
//         id: 43,
//         name: 'Game Boy Color',
//         slug: 'game-boy-color',
//         games_count: 419,
//         image_background:
//           'https://res.cloudinary.com/dpbhmwmwm/image/upload/v1729792987/color_uci8uh.png',
//         image: null,
//         year_start: 1998,
//         year_end: null
//       },
//       {
//         id: 26,
//         name: 'Game Boy',
//         slug: 'game-boy',
//         games_count: 612,
//         image_background:
//           'https://res.cloudinary.com/dpbhmwmwm/image/upload/v1729793908/gb_fvomkx.png',
//         image: null,
//         year_start: 1989,
//         year_end: null
//       },
//       {
//         id: 79,
//         name: 'SNES',
//         slug: 'snes',
//         games_count: 970,
//         image_background:
//           'https://res.cloudinary.com/dpbhmwmwm/image/upload/v1729793920/snes_qz80kb.png',
//         image: null,
//         year_start: 1990,
//         year_end: null
//       },
//       {
//         id: 49,
//         name: 'NES',
//         slug: 'nes',
//         games_count: 995,
//         image_background:
//           'https://res.cloudinary.com/dpbhmwmwm/image/upload/v1729793909/nes_e5rd0r.png',
//         image: null,
//         year_start: 1983,
//         year_end: null
//       }
//     ]
//   },
//   {
//     id: 9,
//     name: 'Atari',
//     slug: 'atari',
//     platforms: [
//       {
//         id: 28,
//         name: 'Atari 7800',
//         slug: 'atari-7800',
//         games_count: 64,
//         image_background:
//           'https://res.cloudinary.com/dpbhmwmwm/image/upload/v1729809162/atari7800_ehow3w.png',
//         image: null,
//         year_start: 1986,
//         year_end: null
//       },
//       {
//         id: 31,
//         name: 'Atari 5200',
//         slug: 'atari-5200',
//         games_count: 64,
//         image_background:
//           'https://res.cloudinary.com/dpbhmwmwm/image/upload/v1729809159/atari5200_nckgwn.png',
//         image: null,
//         year_start: 1982,
//         year_end: null
//       },
//       {
//         id: 23,
//         name: 'Atari 2600',
//         slug: 'atari-2600',
//         games_count: 294,
//         image_background:
//           'https://res.cloudinary.com/dpbhmwmwm/image/upload/v1729809043/atari2000_wsy4st.png',
//         image: null,
//         year_start: 1977,
//         year_end: null
//       },
//       {
//         id: 22,
//         name: 'Atari Flashback',
//         slug: 'atari-flashback',
//         games_count: 30,
//         image_background:
//           'https://media.rawg.io/media/screenshots/2aa/2aa07f58491e14b0183333f8956bc802.jpg',
//         image: null,
//         year_start: 2004,
//         year_end: null
//       },
//       {
//         id: 25,
//         name: 'Atari 8-bit',
//         slug: 'atari-8-bit',
//         games_count: 308,
//         image_background:
//           'https://media.rawg.io/media/screenshots/038/0385a47d3a43b218204268af5361a19e.jpg',
//         image: null,
//         year_start: 1979,
//         year_end: null
//       },
//       {
//         id: 34,
//         name: 'Atari ST',
//         slug: 'atari-st',
//         games_count: 836,
//         image_background:
//           'https://media.rawg.io/media/games/637/637d7dc2f44d0f6ddd3ee2c0b1366962.jpg',
//         image: null,
//         year_start: 1985,
//         year_end: null
//       },
//       {
//         id: 46,
//         name: 'Atari Lynx',
//         slug: 'atari-lynx',
//         games_count: 57,
//         image_background:
//           'https://media.rawg.io/media/screenshots/d71/d71b68d3f6b1810bc9d64d7aea746d30.jpg',
//         image: null,
//         year_start: 1989,
//         year_end: null
//       },
//       {
//         id: 50,
//         name: 'Atari XEGS',
//         slug: 'atari-xegs',
//         games_count: 22,
//         image_background:
//           'https://media.rawg.io/media/screenshots/769/7691726d70c23c029903df08858df001.jpg',
//         image: null,
//         year_start: 1987,
//         year_end: null
//       },
//       {
//         id: 112,
//         name: 'Jaguar',
//         slug: 'jaguar',
//         games_count: 39,
//         image_background:
//           'https://media.rawg.io/media/screenshots/241/24188738ed8141b03c767e6bbba28401.jpg',
//         image: null,
//         year_start: 1993,
//         year_end: null
//       }
//     ]
//   },
//   {
//     id: 10,
//     name: 'Commodore / Amiga',
//     slug: 'commodore-amiga',
//     platforms: [
//       {
//         id: 166,
//         name: 'Commodore / Amiga',
//         slug: 'commodore-amiga',
//         games_count: 2081,
//         image_background:
//           'https://media.rawg.io/media/games/b21/b21555abc69d04d9b5d7663d478ca81e.jpg',
//         image: null,
//         year_start: 1982,
//         year_end: null
//       }
//     ]
//   },
//   {
//     id: 11,
//     name: 'SEGA',
//     slug: 'sega',
//     platforms: [
//       {
//         id: 167,
//         name: 'Genesis',
//         slug: 'genesis',
//         games_count: 839,
//         image_background:
//           'https://media.rawg.io/media/games/b43/b43e17890809393784c90116434ee7f3.jpg',
//         image: null,
//         year_start: 1989,
//         year_end: null
//       },
//       {
//         id: 107,
//         name: 'SEGA Saturn',
//         slug: 'sega-saturn',
//         games_count: 370,
//         image_background:
//           'https://media.rawg.io/media/screenshots/862/862f0a3da04a5e2d5146b35e75e0d85b.jpg',
//         image: null,
//         year_start: 1995,
//         year_end: null
//       },
//       {
//         id: 119,
//         name: 'SEGA CD',
//         slug: 'sega-cd',
//         games_count: 163,
//         image_background:
//           'https://media.rawg.io/media/screenshots/9a0/9a01b32ce1a3e0576018a2580e32cf26.jpg',
//         image: null,
//         year_start: 1992,
//         year_end: null
//       },
//       {
//         id: 117,
//         name: 'SEGA 32X',
//         slug: 'sega-32x',
//         games_count: 46,
//         image_background:
//           'https://res.cloudinary.com/dpbhmwmwm/image/upload/v1729809260/sega32x_m3z0qb.png',
//         image: null,
//         year_start: 1994,
//         year_end: null
//       },
//       {
//         id: 74,
//         name: 'SEGA Master System',
//         slug: 'sega-master-system',
//         games_count: 231,
//         image_background:
//           'https://media.rawg.io/media/games/a9a/a9a2472f862b041d2980103ddbb61c91.jpg',
//         image: null,
//         year_start: 1986,
//         year_end: null
//       },
//       {
//         id: 106,
//         name: 'Dreamcast',
//         slug: 'dreamcast',
//         games_count: 364,
//         image_background:
//           'https://res.cloudinary.com/dpbhmwmwm/image/upload/v1729793237/dream_fbgk6r.png',
//         image: null,
//         year_start: 1999,
//         year_end: null
//       },
//       {
//         id: 77,
//         name: 'Game Gear',
//         slug: 'game-gear',
//         games_count: 224,
//         image_background:
//           'https://media.rawg.io/media/games/32d/32d851318b042aba3df62e52d868d599.jpg',
//         image: null,
//         year_start: 1991,
//         year_end: null
//       }
//     ]
//   },
//   {
//     id: 13,
//     name: 'Neo Geo',
//     slug: 'neo-geo',
//     platforms: [
//       {
//         id: 12,
//         name: 'Neo Geo',
//         slug: 'neogeo',
//         games_count: 123,
//         image_background:
//           'https://media.rawg.io/media/screenshots/4cc/4ccee6c3e367f4dd94d19d4857dfc1c9.jpeg',
//         image: null,
//         year_start: 1990,
//         year_end: null
//       }
//     ]
//   }
// ]
