export default function Pagination({ countries, changePage, page }) {
  const pageNumber = Math.ceil(countries / 12)

  return (
    <div className='flex justify-center space-x-1'>
      <button
        title='previous'
        type='button'
        className={`inline-flex items-center justify-center w-8 h-8 py-0 bg-slate-300 rounded-md border-2 border-transparent ${
          page !== 1 && 'hover:border-yellow'
        } `}
        disabled={page === 1 && 'disabled'}
        onClick={() => changePage(prevState => ({ ...prevState, page: page - 1 }))}
      >
        <img src='./img/previousPage.svg' alt='left' />
      </button>
      <div
        type='button'
        title='Page 1'
        className='inline-flex items-center justify-center w-8 h-8 text-sm font-semibold bg-slate-300 rounded '
      >
        {page}
      </div>
      <button
        title='next'
        type='button'
        className={`inline-flex items-center justify-center w-8 h-8 py-0 bg-slate-300 rounded-md border-2 border-transparent ${
          page !== pageNumber && 'hover:border-yellow'
        } `}
        disabled={page === pageNumber && 'disabled'}
        onClick={() => changePage(prevState => ({ ...prevState, page: page + 1 }))}
      >
        <img src='./img/nextPage.svg' alt='rigth' />
      </button>
    </div>
  )
}
