import './index.css'

const Tabs = props => {
  const {eachTab, onTabAction, isActive} = props

  const onClickTab = () => {
    onTabAction(eachTab.tabId)
  }

  const classNameValue = isActive && 'tab-border'
  return (
    <li className="tab-item-container">
      <button
        className={`tab-btn ${classNameValue}`}
        type="button"
        onClick={onClickTab}
      >
        <h1 className="tab-head">{eachTab.displayText}</h1>
      </button>
    </li>
  )
}

export default Tabs
