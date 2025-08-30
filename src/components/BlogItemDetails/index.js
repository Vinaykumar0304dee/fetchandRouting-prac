// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogItemDetails extends Component {
  state = {blogDetails: {}, isLoading: true}

  componentDidMount() {
    this.getBlogdetails()
  }

  getBlogdetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()

    this.setState({blogDetails: data, isLoading: false})
  }

  renderBlogDetails = () => {
    const {blogDetails} = this.state
    const {title, image_url, avatar_url, author, content} = blogDetails
    return (
      <div className="blog-details">
        <h1 className="blog-title">{title}</h1>
        <div className="blogdetail-avatar-container">
          <img className="blog-details-avatar" src={avatar_url} alt="avatar" />{' '}
          <h1 className="blog-author">{author}</h1>
        </div>
        <img className="item-img" src={image_url} alt={title} />
        <p className="blog-content">{content}</p>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div>
        (
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          this.renderBlogDetails()
        )}
        )
      </div>
    )
  }
}
export default BlogItemDetails
