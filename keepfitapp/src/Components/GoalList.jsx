import React, { Component } from "react"
import axios from 'axios';
import Modal from './Modal';

class GoalList extends Component {
    state = {
      title: "",
      goal_description: "",
      goal_completed: false
        }
      
  async componentDidMount() {
    try {
      const res = await fetch('http://localhost:8000/api/keepfits/');
      const KeepFitList = await res.json();
      console.log(KeepFitList)
      this.setState({
        title: KeepFitList[0].title,
        goal_description: KeepFitList[1].goal_description,
        goal_completed: false
      });
    } catch (e) {
      console.log(e);
    }
    console.log(this.state.title)
    }

      //map out array 
    toggle = () => {
      this.setState({ modal: !this.state.modal });
    };  
    
    handleSubmit = item => {
      this.toggle();
      if (item.id) {
        axios 
        .put(`https://localhost:8000/keepfits/${item.id}/`, item)
        return;
      }
      axios
      .post('http://localhost:8000/api/keepfits/', item)
    };

    createItem = () => {
      const item = {title: '', description: '', completed: false};
      this.setState({ activeItem: item, moda: !this.state.modal });
    };

    displayCompleted = status => {
      if (status) {
        return this.setState({ goal_completed: true });
      }
      return this.setState({ goal_completed: false });
      };
    
    renderTabList = () => {
      return (
        <div className='my-5 tab-list'>
          <button
          onClick={() => this.displayCompleted(true)}
          className={this.state.goal_completed ? 'active' : ''}
          >
            Complete
          </button>

          <button 
          onClick={() => this.displayCompleted(false)}
          className={this.state.goal_completed ? '' : 'active'}
          >
            Incomplete
          </button>
        </div>
      );
    };

    // renderItems = () => {
    //   const { goal_completed } = this.state;
    //   const newItems = this.state.KeepFitList.filter(
    //     item => item.completed === goal_completed
    //   ); 
    //   return newItems.map(item => (
    //     <li 
    //     key={item.id}
    //     className="list-group-item d-flex justify-content-between align-items-center"
    //     >
    //     <span 
    //         className={`todo-title mr-2 ${
    //           this.state.goal_completed ? "completed-todo" : ""
    //         }`}
    //         title={item.goal_description}
    //         >
    //           {item.title}
    //         </span>
    //     </li>
    //   ))
    // };

    render() {
      return (
        <main className="content">
        <div className="row">
          <div className="col-md-6 col-sm-10 mx-auto p-0">
            <div className="card p-3">
              <ul className="list-group list-group-flush">
              {/* {this.renderItems()} */}
              <li>{this.state.title}</li>

              </ul>
            </div>
          </div>
        </div>
        {this.state.modal ? (
          <Modal
          activeItem={this.state.activeItem}
          toggle={this.toggle}
          onSave={this.handleSubmit}
          />
        ): null} 
      
      </main>
      )
    }
  }


  
export default GoalList;