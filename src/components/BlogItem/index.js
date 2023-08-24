// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogItems} = props
  const {id, author, avatarUrl, imageUrl, title, topic} = blogItems
  return (
    <Link className="link" to={`/blogs/${id}`}>
      <div className="blog-item-container">
        <img className="img" src={imageUrl} alt={author} />
        <div className="part2">
          <p className="topic">{topic}</p>
          <h1 className="title">{title}</h1>
          <div className="author-block">
            <img className="avatar" src={avatarUrl} alt={author} />
            <p className="author">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
