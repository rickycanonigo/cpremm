import React from 'react';
import { connect } from 'react-redux';

import { Button } from 'reactstrap';

import {
  GetList,
} from '../../actions/helpers/displayAction';

import {
  SET_RECORDS,
  SET_SEARCHED_RECORDS,
} from './../../actions/types';

import RecordTable from './RecordTable';
import RecordModal from './RecordModal';
import RecordAddModal from './RecordAddModal';
import CommentBox from '../helpers/CommentBox';

import FileUpload from '../FileUpload';

class Record extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      modal: false,
      addModal: false,
      modalType: "",
      addModalType: "",
      office: JSON.parse(localStorage.getItem('doh-user-off'))._id,
      role  : JSON.parse(localStorage.getItem('doh-user-role'))._id,
      isMaster: (JSON.parse(localStorage.getItem('doh-user-role')).name == "Master")?true:false
    }

    this.toggleModal = this.toggleModal.bind(this); 
    this.toggleAddModal = this.toggleAddModal.bind(this); 

    props.GetList("record/get", SET_RECORDS, 1, 10, ((!this.state.isMaster)?{officeID: this.state.office}:null));
  }

  
  toggleModal (type) {
    this.setState({
      modal: !this.state.modal,
      modalType: type,
    });
  }

  toggleAddModal (type) {
    this.setState({
      addModal: !this.state.addModal,
      addModalType: type,
    });
  }

  render () {
    return (

      <div className="row justify-content-center">
        <div className="col-md-12">
          <div className="custom-cards-container">
            <div className="custom-cards rounded-container box-shadow-container">
              <RecordModal 
                toggle={() => {
                  this.toggleModal("update");
                }} modal={this.state.modal} modalType={this.state.modalType}
                toggleAdd={() => { this.toggleAddModal("update") }}
                isMaster={this.state.isMaster}
              />
              <RecordAddModal 
                  toggle={this.toggleAddModal} modal={this.state.addModal} 
                  modalType={this.state.addModalType} 
                  togglePrintable={() => {
                    this.toggleModal("update");
                  }}
                  Proceed={() => {
                    this.toggleModal("add");
                  }}
                  ProceedUpdate={() => {
                    this.toggleModal();
                    this.toggleModal("add");
                  }}
              />

              {/* <FileUpload /> */}

              <RecordTable
                toggleModal={() => {
                  this.toggleAddModal("add")
                }}
                title = {"Records"}
                filter = {((!this.state.isMaster)?{officeID: this.state.office}:{})}
                reducers = {{ get: SET_RECORDS, search: SET_SEARCHED_RECORDS }}
                toggle={ () => {
                  this.toggleModal("update")
                }}
                isMaster={this.state.isMaster}
              />              
            </div>
          </div>
        </div>

        <div className="col-md-12">
            <CommentBox page="Record"/>
        </div>

      </div>
    );
  }

}



const mapStateToProps = (state) => ({
  record: state.record,
})

export default connect(mapStateToProps, {
  GetList,
})(Record);
