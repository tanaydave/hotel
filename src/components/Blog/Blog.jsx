import React from 'react'
import './blog.scss'
import { BsArrowRightShort } from 'react-icons/bs'
import blog_img from '../../assets/blog_img.jpg'

const blogs = [
  {
    id: 1,
    postImage: blog_img,
    title: 'Lorem ipsum dolor sit amet.',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Delectus iure rem, architecto aliquid mollitia omnis.'

  },
  {
    id: 2,
    postImage: blog_img,
    title: 'Lorem ipsum dolor sit amet.',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Delectus iure rem, architecto aliquid mollitia omnis.'

  },
  {

    id: 3,
    postImage: blog_img,
    title: 'Lorem ipsum dolor sit amet.',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Delectus iure rem, architecto aliquid mollitia omnis.'
  }
]
const Blog = () => {
  return (
    <section className="blog container section">
      <div className="secContainer">
        <div className="secIntro">
          <h2 className="secTitle">
            Blogs
          </h2>
          <p>
            Travel to the most beautiful places ever seen by human eyes
          </p>
        </div>
        <div className="mainContainer grid">
          {blogs.map((blog)=>{
            return(
              <div className="singlePost grid">
            <div className="imgDiv">
              <img src={blog.postImage} alt="image" />
            </div>
            <div className="postDetails">
              <h3>
                {blog.title}

              </h3>
              <p>{blog.desc}</p>

            </div>
            <a href="$" className="flex">
              
              Read More
              <BsArrowRightShort className="icon" />
            </a>
          </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Blog