export default function Skeleton() {
  return (
    <div className='flex flex-col rounded-lg animate-pulse bg-slate-300 md:flex-row md:h-80 py-6'>
      <div className='md:w-1/2 h-80 md:h-full p-4'>
        <div className='w-full h-full bg-slate-400 rounded-lg'></div>
      </div>
      <div className='flex items-center md:flex-row w-full'>
        <div className='px-4 w-1/2 '>
          <div className='my-4 h-6 rounded-lg bg-slate-400'></div>
          <div className='my-4 h-6 rounded-lg bg-slate-400'></div>
          <div className='my-4 h-6 rounded-lg bg-slate-400'></div>
        </div>
        <div className='px-4 w-1/2 '>
          <div className='my-4 h-6 rounded-lg bg-slate-400'></div>
          <div className='my-4 h-6 rounded-lg bg-slate-400'></div>
          <div className='my-4 h-6 rounded-lg bg-slate-400'></div>
        </div>
      </div>
    </div>
  )
}
