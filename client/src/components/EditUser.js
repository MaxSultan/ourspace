import React from 'react';
import { Form, Header, } from "semantic-ui-react";
import axios from 'axios';
import { InputFile } from 'semantic-ui-react-input-file'
import AuthProvider, { AuthConsumer } from '../providers/AuthProvider';

class EditUser extends React.Component {
  
  defaultValues = { name: "", image: "", nickname: "", };
  state = { ...this.defaultValues, };

  handleSubmit = (e) => {
    const { authenticated, setUser, } = this.props.auth;
    e.preventDefault();
    const product = { ...this.state, };
    axios.post(`/api/auth/edit`, {...this.state})
    .then( res => {
        setUser(res.data)
    })
    .catch(err => console.log(err))
    this.setState({ ...this.defaultValues, });
  }

  handleChange = (e) => {
    const { target: { name, value, } } = e;
    this.setState({ [name]: value, });
  }

  handleUpload = (e) => {
    console.log(e)
  }

  render() {
  
    return (
      <div>
        <Header as="h1">Edit your Profile</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input
              label="Name"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
            <Form.Input
              label="Nickname"
              name="nickname"
              placeholder="Nickname"
              value={this.state.nickname}
              onChange={this.handleChange}
            />
          </Form.Group>
            <Form.Group widths="equal">
            {/* <Form.Input
              label="Image"
              name="image"
              placeholder="Image"
              value={this.state.image}
              onChange={this.handleChange}
            />  */}
              <InputFile
              label="Image"
              name="image"
              placeholder="Image"
              value={this.state.image}
              // button={{ ...buttonProps }}
              input={{
                id: 'input-control-id',
                onChange: this.handleUpload
              }}
            />
          </Form.Group>
          <Form.Button color="blue">Submit</Form.Button>
        </Form>
      </div>
    )
  }
}


export default class ConnectedEditUser extends React.Component {
  render() {
    return (
      <AuthConsumer >
        {auth => <EditUser {...this.props} auth={auth} setUser={auth.setUser}/>}
      </AuthConsumer>
    )
  }
}
