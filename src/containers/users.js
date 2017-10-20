import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux'

class Users extends Component {
    constructor(props){
        super(props);
        console.log(props)
    }
  render(){
    return <div>{this.props.list.map((item, i)=><div onClick={()=>this.props.selectBook(item)} key={i}><div>title:{item.title}</div><div>pages:{item.pages}</div></div>)}</div>
  }
       
}

function mapStateToProps(state){
        return {
            list:state.list
        };
    }
    
function mapDispatchToProps(dispatch){
    return bindActionCreators({selectBook:selectBook}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)
