import React from 'react'
import BookImage from './BookImage'
import BookName from './BookName'
import BookPrice from './BookPrice'
import BookAuthor from './BookAuthor'

  
function Book() {
    return (
        <div className='book'>
            <BookImage />
            <div className='info-body'> 
                <p className='info-name'>Kitabin adi:</p>
                <BookName />
            </div>
            <div>
                <p className='info-name'>Kitabin Qiymeti:</p>
                <BookPrice />
            </div>
            <div>
                <p className='info-name'>Kitabin Yazicisi:</p>
                <BookAuthor />
            </div>
        </div>
    )
}
export default Book