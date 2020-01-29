import React, {Component} from 'react';
import Header from "./Header";
import "./Main.scss"
import PhoneContent from "./Pages/PhonePages";
import SearchPage from "./Pages/SearhPages";



class Main extends Component {
    state = {
        searchActive:false
    };

    addSearch=()=>{
             this.setState({
              searchActive:!this.state.searchActive
        })
};

    render() {
        return (
            <div className="main d-flex flex-column">
                <Header  />
                {this.state.searchActive  ? <SearchPage addSearch={this.addSearch} />:<PhoneContent addSearch={this.addSearch} />  }


            </div>
        );
    }
}

export default Main;

