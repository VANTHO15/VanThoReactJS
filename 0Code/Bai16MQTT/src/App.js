import React, { Component } from 'react';

// npm install mqtt --save
import mqtt from 'mqtt' ;

var options = {
  port: 3333,
  host: "ngoinhaiot.com",
  username: "Vantho15",
  password: "3759DFCEFE834F17",
  useSSL: true,
  clientId: 'Tho2k'
}
//initialize the MQTT client
 var client = mqtt.connect("wss://ngoinhaiot.com", options);
 //setup the callbacks
 client.on('connect', function () {
  console.log('Connected');
 });

 // subscribe to topic 'Vantho15/led'
 client.subscribe('Vantho15/Led',()=>{console.log("thành công")});
 client.subscribe('Vantho15/Led1',()=>{console.log("thành công")});

 // publish message 'Hello' to topic 'Vantho15/Led'
 client.publish('Vantho15/Led','OFF');

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      data:null
    }
  }
  componentDidMount() {
    client.on('message', (topic, message)=>this.getData(topic, message));
  }

  getData  = (topic, message) =>
   {
     this.setState({data:message.toString()});
   }
  
  render() {
    return (
      <div>
        {this.state.data}
      </div>
    );
  }
}

export default App;