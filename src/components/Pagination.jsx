export default function Pagination({ countries, changePage, page }) {
  const pageNumber = Math.ceil(countries / 12)
  return (
    <>
      {
        // pageNumber - page !== 0 &&
        <div className='flex justify-center space-x-1'>
          <button
            title='previous'
            type='button'
            className={`inline-flex items-center justify-center w-8 h-8 py-0 bg-slate-300 dark:bg-gray-light  rounded-md border-2 border-transparent ${
              page !== 1 && 'hover:border-yellow'
            } `}
            disabled={page === 1 && 'disabled'}
            onClick={() => changePage({ page: page - 1 })}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth='2'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='text-gray dark:text-white'
            >
              <polyline points='15 18 9 12 15 6' />
            </svg>
          </button>
          <div
            type='button'
            title='Page 1'
            className='inline-flex items-center justify-center w-8 h-8 text-sm font-semibold bg-slate-300 dark:bg-gray-light dark:text-white rounded '
          >
            {page}
          </div>
          <button
            title='next'
            type='button'
            className={`inline-flex items-center justify-center w-8 h-8 py-0 bg-slate-300  dark:bg-gray-light rounded-md border-2 border-transparent ${
              page !== pageNumber && 'hover:border-yellow'
            } `}
            disabled={page === pageNumber && 'disabled'}
            onClick={() => changePage({ page: page + 1 })}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth='2'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='text-gray dark:text-white'
            >
              <polyline points='9 18 15 12 9 6' />
            </svg>
          </button>
        </div>
      }
    </>
  )
}
