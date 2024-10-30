import { Skeleton } from '@/components/ui/skeleton'

export default function Loading() {
  return (
    <div className='flex flex-1 flex-col gap-4 p-4 pt-0'>
      <h1 className='font-semibold'>
        <Skeleton className='h-[20px] w-24 bg-muted' />
      </h1>
      <div className='grid auto-rows-min gap-5 md:grid-cols-3'>
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            className='grid grid-cols-1 sm:w-1/2 md:w-1/2 lg:w-full transition-all duration-300 rounded-lg'
            key={i}>
            <div className='grid gap-4 col-start-1 col-end-3 row-start-1 h-[260px] rounded-lg'>
              <Skeleton className='h-full w-full bg-muted' />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
