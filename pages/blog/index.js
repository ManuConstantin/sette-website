import React from 'react'
import BlogVersionOne from '../../components/blog/BlogVersionOne'
import HeroPageTitle from '../../components/titles/HeroPageTitle'

const Blog = () => {
  return (
    <>
        <HeroPageTitle 
          title='Blog'
          description='Descopera ultimele noutati din domeniu.'
        />
        <BlogVersionOne />
    </>
  )
}

export default Blog