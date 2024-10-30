export default async function Page({
  params
}: {
  params: Promise<{ gameList: string }>
}) {
  const { gameList } = await params

  return (
    <div>
      <h1>Hello {gameList} </h1>
    </div>
  )
}
