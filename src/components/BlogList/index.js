// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import BlogItem from '../BlogItem/index'

class BlogList extends Component {
  state = {blogsList: [], isLoading: true}

  componentDidMount() {
    this.getBlogData()
  }

  getBlogData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    console.log(data)
    const updatedData = data.map(each => ({
      id: each.id,
      author: each.author,
      avatarUrl: each.avatar_url,
      imageUrl: each.image_url,
      title: each.title,
      topic: each.topic,
    }))
    this.setState({blogsList: updatedData, isLoading: false})
  }

  render() {
    const {blogsList} = this.state
    const {isLoading} = this.state
    return (
      <div>
        <ul>
          {isLoading ? (
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          ) : (
            blogsList.map(each => <BlogItem blogItems={each} key={each.id} />)
          )}
        </ul>
      </div>
    )
  }
}

export default BlogList
