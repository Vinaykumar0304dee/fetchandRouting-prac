// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogsItem} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = blogsItem

  return (
    <Link to={`/blogs/${id}`}>
      <div className="blogList-container">
        <img className="thumb-nail" src={imageUrl} alt="Thumb Nail" />
        <div className="content-container">
          <p className="topic">{topic}</p>
          <h1 className="title">{title}</h1>
          <div className="author-container">
            <img className="avatar" src={avatarUrl} alt="avatar" />{' '}
            <p className="author">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
