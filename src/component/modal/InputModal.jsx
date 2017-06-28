import React from 'react'

export default (function InputModal(props) {
  let valueField

  const update = (e) => {
    if (e) e.preventDefault()
    props.onUpdate(valueField && valueField.value)
    props.close()
  }

  const getRef = inp => {
    if (inp){
      inp.value = props.value || ''
      valueField = inp
    }
  }

  return (
    <div className="modal-dialog" role="document">
      <form onSubmit={update}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{props.title}</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden={true} onClick={props.close}>&times;</span>
            </button>
          </div>

          <div className="modal-body">
            <div className="form-group">
              <label htmlFor="id-input-modal">{props.label || 'Value'}</label>
              <input
                id="id-input-modal"
                type="text"
                className="form-control"
                placeholder="Empty"
                ref={getRef}/>
            </div>
          </div>

          <div className="modal-footer text-center">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={props.close}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={update}
            >
              Update
            </button>
          </div>
        </div>
      </form>
    </div>
  )
})