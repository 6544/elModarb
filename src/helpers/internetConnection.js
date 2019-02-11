import { NetInfo,ConnectionType } from "react-native";
import React,{ Component } from "react";
export default class InternetConnection extends Component{
state={connected:null};
//connectionType=new ConnectionType()
componentDidMount(){
    this.checkConnection();
    NetInfo.addEventListener('connectionChange',this.handleConnectivityChange);
}
 
async checkConnection(){
    const connectionInfo=await NetInfo.getConnectionInfo();
    debugger;
    if(connectionInfo.type!="none"){
       return true;
    }
    else{
return false;
    }
}
handleConnectivityChange(connectionInfo){
    if(connectionInfo.type!=ConnectionType.none || connectionInfo.type!=ConnectionType.unknown){
    return true;    
    }
    else{
        return false;
    }
  //  console.log(this.state.connected);
}

}