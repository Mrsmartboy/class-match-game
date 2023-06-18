import './index.css'

const MatchGameItem = props => {
  const {eachData, onThumbnailAction} = props
  const {thumbnailUrl, id} = eachData

  const onClickThumbnailItem = () => {
    onThumbnailAction(id)
  }
  return (
    <li className="thumbnail-item-container">
      <button
        type="button"
        className="thumbnail-btn"
        onClick={onClickThumbnailItem}
      >
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-img" />
      </button>
    </li>
  )
}

export default MatchGameItem
