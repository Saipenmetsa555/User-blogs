// Write your JS code here
import Loader from 'react-loader-spinner'
import {Component} from 'react'
import './index.css'

class BlogItemDetails extends Component {
  state = {blogsData: {}, isLoading: true}

  componentDidMount() {
    this.getBlogsData()
  }

  getBlogsData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    console.log(data)
    const updatedDataItems = {
      title: data.title,
      imageUrl: data.image_url,
      content: data.content,
      avatarUrl: data.avatar_url,
      author: data.author,
    }
    this.setState({blogsData: updatedDataItems, isLoading: false})
  }

  addingItems = () => {
    const {blogsData} = this.state
    const {title, content, author, imageUrl, avatarUrl, id} = blogsData
    return (
      <div className="container">
        <h1 className="text">{title}</h1>
        <div className="author-details-block">
          <img className="author-image" src={avatarUrl} alt={author} />
          <p className="author-name">{author}</p>
        </div>

        <div className="bottom">
          <img src={imageUrl} className="images" alt={`author${id}`} />
          <p className="content">{content}</p>
        </div>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" width={50} height={50} />
        ) : (
          this.addingItems()
        )}
      </div>
    )
  }
}

export default BlogItemDetails
