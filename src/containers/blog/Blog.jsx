import React from 'react'
import { Article } from '../../components'
import { blog01, blog02, blog03, blog04, blog05 } from './import'
import './blog.css'

const Blog = () => {
  return (
    <div className='gpt3__blog section__padding'>
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>A lot is happening, <br />
We are blogging about it.</h1>
      </div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container_groupA'>
          <Article imgUrl={blog01} date='Feb 01, 2023' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' description=''/>
        </div>
        <div className='gpt3__blog-container_groupB'>
          <Article imgUrl={blog02} date='Feb 01, 2023' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' description=''/>
          <Article imgUrl={blog03} date='Feb 01, 2023' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' description=''/>
          <Article imgUrl={blog04} date='Feb 01, 2023' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' description=''/>
          <Article imgUrl={blog05} date='Feb 01, 2023' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' description=''/>
        </div>
      </div>
    </div>
  )
}

export default Blog
