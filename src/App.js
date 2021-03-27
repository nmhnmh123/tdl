import logo from './logo.svg';
import './App.css';
import { Button } from 'reactstrap';
import React, { Component } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import ReactDOM from 'react-dom';
import { Badge, Alert } from 'reactstrap';

class App extends Component {
  onclick = () => {
    toast.success("test");

  }
  render() {
    return (
      <div className="">

        <div>
          <Badge color="primary">Primary</Badge>
          <Badge color="secondary">Secondary</Badge>
          <Badge color="success">Success</Badge>
          <Badge color="danger">Danger</Badge>
          <Badge color="warning">Warning</Badge>
          <Badge color="info">Info</Badge>
          <Badge color="light">Light</Badge>
          <Badge color="dark">Dark</Badge>
        </div>

        <Toaster
          position="top-right"
          reverseOrder={false}
          toastOptions={{
            //Define default options
            className: '',
            style: {
              margin: '40px',
              background: '#00e676',
              color: 'white',
              zIndex: 1,
            },
            duration: 5000,
            // Default options for specific types
            success: {
              duration: 3000,
              // theme: {
              //     primary: 'yellow',
              //     secondary: 'yellow',
              // },
              style: {
                margin: '100px',
                background: '#00e676',
                color: 'white',
                zIndex: 1,
              },
            },
            error: {
              duration: 3000,
              style: {
                margin: '100px',
                background: 'red',
                color: 'white',
                zIndex: 1,
              },
            },
          }} />
      </div>

    );
  }
}

export default App;

