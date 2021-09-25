import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    errorMsg: '',
    firstNameError: '',
    lastNameError: false,
  }

  onChangeFirst = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeLast = event => {
    this.setState({lastName: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()
    this.onBlurFirstName()
    this.onBlurLastName()
  }

  onClickSubmit = () => {
    const {firstName, lastName} = this.state
    if (firstName !== '' && lastName !== '') {
      this.setState(prevState => ({
        success: !prevState.success,
      }))
    }
  }

  onClickAnother = () => {
    this.setState(prevState => ({
      success: !prevState.success,
    }))
  }

  onBlurFirstName = () => {
    let error = false
    const {firstName} = this.state
    if (firstName === '') {
      error = true
      this.setState({errorMsg: 'Required', firstNameError: error})
    } else {
      error = false
      this.setState({firstNameError: error})
    }
  }

  onBlurLastName = () => {
    let error = false
    const {lastName} = this.state
    if (lastName === '') {
      error = true
      this.setState({errorMsg: 'Required', lastNameError: error})
    } else {
      error = false
      this.setState({lastNameError: error})
    }
  }

  renderForm = () => {
    const {
      errorMsg,
      firstName,
      lastName,
      firstNameError,
      lastNameError,
    } = this.state

    return (
      <form onSubmit={this.onSubmitForm}>
        <div className="input-container">
          <label className="label" htmlFor="first">
            FIRST NAME
          </label>
          <br />
          <input
            type="text"
            id="first"
            placeholder="First name"
            className="input"
            onChange={this.onChangeFirst}
            value={firstName}
            onBlur={this.onBlurFirstName}
          />
          {firstNameError ? <p>{errorMsg}</p> : ''}
        </div>
        <div className="input-container">
          <label className="label" htmlFor="last">
            LAST NAME
          </label>
          <br />
          <input
            type="text"
            id="last"
            placeholder="Last name"
            className="input"
            onChange={this.onChangeLast}
            value={lastName}
            onBlur={this.onBlurLastName}
          />
          {lastNameError ? <p>{errorMsg}</p> : ''}
        </div>
        <div className="b-c">
          <button type="submit" className="button" onClick={this.onClickSubmit}>
            Submit
          </button>
        </div>
      </form>
    )
  }

  renderSuccess = () => (
    <div className="success-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="image"
      />
      <p className="para">Submitted Successfully</p>

      <div className="b-c">
        <button type="submit" className="button" onClick={this.onClickAnother}>
          Submit Another Response
        </button>
      </div>
    </div>
  )

  render() {
    const {success} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">Registration</h1>
        <div className="inner-container">
          {success ? this.renderSuccess() : this.renderForm()}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
