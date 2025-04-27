import React from 'react'

function Footer() {
    const date = new Date();
    const year = date.getFullYear();
  return (
    <> 
        <div class="wave-container wave">
            <p>© {year}, Developed & Designed with ❤️ by <a className='Prince-Kaushal' target='_Prince' href='https://github.com/Prince9670'>Prince Kaushal</a></p>
        </div>
    </>
  )
}

export default Footer