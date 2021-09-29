import React, { Component } from 'react';
import { Button,
Modal, 
ModalHeader, 
ModalBody, 
ModalFooter, 
Form, 
FormGroup, 
Input, 
Label, } from 'reactstrap';



export default class CustomModal extends Component {
    constructor(props) {
      super(props);
      this.state = {
        activeItem: this.props.activeItem,
      };
    }
  
    handleChange = (e) => {
      let { name, value } = e.target;
  
      if (e.target.type === "checkbox") {
        value = e.target.checked;
      }
  
      const activeItem = { ...this.state.activeItem, [name]: value };
  
      this.setState({ activeItem });
    };
  
    render() {
      const { toggle, onSave } = this.props;
  
      return (
        <Modal isOpen={true} toggle={toggle}>
          <ModalHeader toggle={toggle}>Daily Goal</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="goal_list-title">Title</Label>
                <Input
                  type="text"
                  id="title"
                  name="title"
                  value={this.state.activeItem.title}
                  onChange={this.handleChange}
                  placeholder="What is your goal?"
                />
              </FormGroup>
              <FormGroup>
                <Label for="goal_description">Description</Label>
                <Input
                  type="text"
                  id="goal_description"
                  name="description"
                  value={this.state.activeItem.goal_description}
                  onChange={this.handleChange}
                  placeholder="Description of goal"
                />
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input
                    type="checkbox"
                    name="goal_completed"
                    checked={this.state.activeItem.goal_completed}
                    onChange={this.handleChange}
                  />
                  Crushed it! 
                </Label>
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="success"
              onClick={() => onSave(this.state.activeItem)}
            >
              Save
            </Button>
          </ModalFooter>
        </Modal>
      );
      }
    }

