import React, {useState} from "react";
import AppLayout from "../layouts/AppLayout";
import {Button} from "semantic-ui-react";

export default function Options() {


  const defaultSettings = [
    {
      'id': 1,
      'description': 'Allow Daily Archive',
      'status': 0
    },
    {
      'id': 2,
      'description': 'Allow Auto Email',
      'status': 1
    },
    {
      'id': 3,
      'description': 'Deactivate App',
      'status': 1
    },
    {
      'id': 11,
      'description': 'Allow Account Deletion',
      'status': 0
    },

  ]

  const [settings, setSettings] = useState(defaultSettings)

  const handleChange = (e) => {
    const currentState = [...settings]
    const id = parseInt(e.target.name)
    let objIndex = currentState.findIndex(item => item.id === id)
    let inverseValue = 1 === parseInt(e.target.value) ? 0 : 1
    currentState[objIndex].status = inverseValue
    setSettings(currentState)
  }


  const handleSubmit = event => {
    event.preventDefault()
    console.log(settings)
  }

  const settingRows = settings.map(setting => <SettingRow
    key={setting.id}
    id={setting.id}
    description={setting.description}
    status={setting.status}
    onChangeHandler={handleChange}/>
  )

  return (
    <AppLayout title="Options">
      <div className="row">
        <div className="col-6 offset-3">
          <form onSubmit={handleSubmit}>
            <table className="table table-borderless">
              <tbody>
                {settingRows}
              </tbody>
            </table>
            <div className="float-right">
              <Button primary size="small">Save Settings</Button>
            </div>
          </form>
        </div>
      </div>
    </AppLayout>
  )
}

const SettingRow = ({id, description, status, onChangeHandler}) => {
  return (
    <tr>
      <td>{description}</td>
      <td><input type="checkbox" name={id} value={status} checked={status} onChange={onChangeHandler} /></td>
    </tr>
  )
}