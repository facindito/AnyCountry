export default function Pagination({ countries, itemPerPage, setPage, page }) {
  const pageNumber = Math.ceil(countries / itemPerPage)

  return (
    <div className='flex justify-center space-x-1'>
      <button
        title='previous'
        type='button'
        onClick={() => setPage(prev => (prev > 1 ? prev - 1 : prev))}
        className='inline-flex items-center justify-center w-8 h-8 py-0 bg-slate-300 rounded-md border-2 border-transparent hover:border-yellow '
      >
        <img src='./img/previousPage.svg' alt='left' />
      </button>
      <button
        type='button'
        title='Page 1'
        className='inline-flex items-center justify-center w-8 h-8 text-sm font-semibold bg-slate-300 rounded border-2 border-transparent hover:border-yellow '
      >
        {page}
      </button>
      <button
        title='next'
        type='button'
        onClick={() => setPage(prev => (prev < pageNumber ? prev + 1 : prev))}
        className='inline-flex items-center justify-center w-8 h-8 py-0 bg-slate-300 rounded-md border-2 border-transparent hover:border-yellow'
      >
        <img src='./img/nextPage.svg' alt='rigth' />
      </button>
    </div>
  )
}
