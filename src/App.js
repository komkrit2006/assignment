import React from 'react'
import './App.css'
import { 
  Assignment1,
  Assignment2,
  Assignment3,
  Assignment4,
  Assignment5
} from './components'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.state.dataAssignment1 = [
      'text1',
      'text2',
      'text3'
    ]
    this.state.dataAssignment2 = [
      {
        command: 'ข้อมูลชุดที่1',
        fname: 'fname2',
        lname: 'lname2',
        age: 25
      },
      {
        command: 'ข้อมูลชุดที่2',
        fname: 'fname1',
        lname: 'lname1',
        age: 15
      },
      {
        command: 'ข้อมูลชุดที่3',
        fname: 'fname3',
        lname: 'lname3',
        age: 45
      }
    ]
    this.state.dataAssignment3of1 = [
      {
        id: 1,
        fname: 'fname1'
      },
      {
        id: 2,
        fname: 'fname2'
      },
      {
        id: 3,
        fname: 'fname3'
      }
    ]
    this.state.dataAssignment3of2 = [
      {
        id: 1,
        lname: 'lname1'
      },
      {
        id: 2,
        lname: 'lname2'
      },
      {
        id: 3,
        lname: 'lname3'
      }
    ]
    this.state.dataAssignment4 = [
      {
        command: 'ข้อมูลชุดที่1',
        fname: 'fname2',
        lname: 'lname2',
        age: 25
      },
      {
        command: 'ข้อมูลชุดที่2',
        fname: 'fname1',
        lname: 'lname1',
        age: 15
      },
      {
        command: 'ข้อมูลชุดที่3',
        fname: 'fname3',
        lname: 'lname3',
        age: 45
      }
    ]
    this.state.dataAssignment5 = [
      {
        command: 'ข้อมูลชุดที่1',
        fname: 'fname2',
        lname: 'lname2',
        age: 25
      },
      {
        command: 'ข้อมูลชุดที่2',
        fname: 'fname1',
        lname: 'lname1',
        age: 15
      },
      {
        command: 'ข้อมูลชุดที่3',
        fname: 'fname3',
        lname: 'lname3',
        age: 45
      }
    ]
    this.state.answer = false
  }

  handleAssignment1 = () => {
    alert('assignment1')
  }

  handleAssignment2 = () => {
    alert('assignment2')
  }

  handleAssignment3 = () => {
    alert('assignment3')
  }

  handleAssignment4 = () => {
    alert('assignment4')
  }

  handleAssignment5 = () => {
    alert('assignment5')
  }

  render() {
    const { 
      dataAssignment1,
      dataAssignment2,
      dataAssignment3of1,
      dataAssignment3of2,
      dataAssignment4,
      dataAssignment5,
      answer
    } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <h1>Asssignment</h1>
        </header>
        <div>
          <Assignment1 data={dataAssignment1} onClick={this.handleAssignment1}/>
          <Assignment2 data={dataAssignment2} onClick={this.handleAssignment2}/>
          <Assignment3 data1={dataAssignment3of1} data2={dataAssignment3of2} onClick={this.handleAssignment3}/>
          <Assignment4 data={dataAssignment4} onClick={this.handleAssignment4}/>
          <Assignment5 data={dataAssignment5} answer={answer} onClick={this.handleAssignment5}/>
        </div>
      </div>
    )
  }
}

export default App;
