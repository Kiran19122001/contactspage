import './index.css'

const ContactItem = props => {
  const {contactDetails, getFavoriteContact,deleteSelectedContact} = props
  const {name, mobileNo, isFavorite, id} = contactDetails
 
  const onFavoriteCont = () => {
    getFavoriteContact(id)
    }
    
    const delteContact = () => {
        deleteSelectedContact(id)
    }

  const starImgUrl = isFavorite
    ? 'https://assets.ccbp.in/frontend/react-js/star-filled-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/star-outline-img.png'

  return (
    <li className="table-row">
      <div className="table-cell name-column">
        <p>{name}</p>
      </div>
      <hr className="separator" />
      <div className="table-cell mobile-no-column">
        <p className="mobile-no-value">{mobileNo}</p>
        <button
          type="button"
          className="favorite-icon-container"
          onClick={onFavoriteCont}
        >
          <img src={starImgUrl} className="favorite-icon" alt="star" />
              </button>
              <button type="button" className='delete-button' onClick={delteContact}>
                  <img src="https://icon-library.com/images/delete-icon-png/delete-icon-png-19.jpg"
                      alt=""  className='delete'/>
        </button>
      </div>
    </li>
  )
}

export default ContactItem
