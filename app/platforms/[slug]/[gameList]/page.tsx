import { selectPlatformWithGames } from '@/db/queries/select'

export default async function Page({
  params
}: {
  params: Promise<{ gameList: string }>
}) {
  const { gameList } = await params

  const plat = await selectPlatformWithGames(15)
  console.log('plat : ', plat)

  return (
    <div>
      <h1>Hello {gameList} </h1>
    </div>
  )
}
