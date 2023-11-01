import React from "react";
import {Button} from "semantic-ui-react";

export default function ModalForm({modalId, title, onSubmitHandler, children}) {
  return (
    <div className="modal fade" id={modalId} tabIndex="-1" aria-labelledby="exampleModalLabel"
         aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">{title}</h1>
          </div>
          <div className="modal-body">
            <form onSubmit={onSubmitHandler}>
              <div className="modal-body">
                {children}
              </div>
              <div className="modal-footer">
                <Button secondary size='small' data-bs-dismiss="modal" type="button">Close <i
                  className="bi bi-x"></i></Button>
                <Button size='small' primary>Save changes</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}