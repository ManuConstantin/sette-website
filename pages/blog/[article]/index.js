import React from 'react'
import BlogArticle from '../../../components/blog/article/BlogArticle'
import HeroPageTitle from '../../../components/titles/HeroPageTitle'

const Article = () => {
  return (
    <>
        <HeroPageTitle 
          title='Articol blog'
        />
        <BlogArticle />
    </>
  )
}

export default Article