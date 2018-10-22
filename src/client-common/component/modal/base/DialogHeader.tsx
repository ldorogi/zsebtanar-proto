import * as React from 'react'
import { CloseButton } from '../../general/CloseButton'

interface DialogHeaderProps {
  onClose?: () => void
  children?: React.ReactNode
}

export function DialogHeader({onClose, children}: DialogHeaderProps) {
  return (
    <div className="modal-header">
<<<<<<< HEAD
      <h5 className="modal-title">{children}</h5>
      {onClose && <CloseButton onClick={onClose}/>}
||||||| constructed merge base
      <h5 className="modal-title">{props.children}</h5>
      <DialogClose onClose={props.onClose} />
=======
      <h5 className="modal-title">{children}</h5>
      <CloseButton onClick={onClose}/>
>>>>>>> zsebtanar-proto-356 Visszajelzés belépési kísérlet után
    </div>
  )
}
