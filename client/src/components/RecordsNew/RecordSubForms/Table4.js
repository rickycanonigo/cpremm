import React from 'react';
import { connect } from 'react-redux';
import { 
  Card,
  CardHeader,
  CardBody,
} from 'reactstrap';

import { FaPlus, FaTimes } from 'react-icons/fa';
import LabelInput from '../../helpers/LabelInput';
import {
  GetDate,
} from '../../../actions/helpers/dateAction';

import {
  SetValue,
  GetList,
  ArrangeName,
  GetSafe,
} from '../../../actions/helpers/displayAction';

import {
  SET_RECORD_VALUE_NEW,
} from '../../../actions/types';


class Table4 extends React.Component {
  
  constructor (props) {
    super(props);

    this.state = {
      route: "",
    }
  }


  render () {
    var { record } = this.props.recordNew;

    var os = {
      name: this.props.GetSafe(()=>{return record.devices.desktop.specs.sWare.os.name}, ""),
      isLicensed: this.props.GetSafe(()=>{return record.devices.desktop.specs.sWare.os.isLicensed}, ""),
    }

    var msOffice = {
      name: this.props.GetSafe(()=>{return record.devices.desktop.specs.sWare.msOffice.name}, ""),
      isLicensed: this.props.GetSafe(()=>{return record.devices.desktop.specs.sWare.msOffice.isLicensed}, ""),        
    }
    
    var antiVirus = {
      name: this.props.GetSafe(()=>{return record.devices.desktop.specs.sWare.antiVirus.name}, ""),
      isLicensed: this.props.GetSafe(()=>{return record.devices.desktop.specs.sWare.antiVirus.isLicensed}, ""),  
    }

    return (
      <div id="record-add-form-4" className="entry-form">
        <Card>
          <CardHeader tag="h4">Computer Software Operating System & Application</CardHeader>
          <CardBody>
            <div className="form-content">
              <div className="row">
                
                <div className="col-md-4">
                  <Card>
                    <CardHeader tag="h6">Operating System</CardHeader>
                    <CardBody>
                      <div className="row">
                        <div className="col-md-12">
                          <LabelInput
                            label={"Name"} value={os.name} type="text" req={1}
                            onChange={(e) => {
                              this.props.SetValue(e, SET_RECORD_VALUE_NEW);
                            }} prop={"devices.desktop.specs.sWare.os.name"} case={1}
                          />
                          <LabelInput
                            label={"License"} value={os.isLicensed} type="select" req={1}
                            options={[{text: "TRUE", value: 1}, {text: "FALSE", value: 0}]}
                            onChange={(e) => {
                              this.props.SetValue(e, SET_RECORD_VALUE_NEW);
                            }} prop={"devices.desktop.specs.sWare.os.isLicensed"} case={1}
                          />
                        </div>
                      </div>

                    </CardBody>
                  </Card>  
                </div>

                <div className="col-md-4">
                  <Card>
                    <CardHeader tag="h6">MS Office</CardHeader>
                    <CardBody>
                      <div className="row">
                        <div className="col-md-12">
                          <LabelInput
                            label={"Name"} value={msOffice.name} type="text" req={1}
                            onChange={(e) => {
                              this.props.SetValue(e, SET_RECORD_VALUE_NEW);
                            }} prop={"devices.desktop.specs.sWare.msOffice.name"} case={1}
                          />
                          <LabelInput
                            label={"License"} value={msOffice.isLicensed} type="select" req={1}
                            options={[{text: "TRUE", value: 1}, {text: "FALSE", value: 0}]}
                            onChange={(e) => {
                              this.props.SetValue(e, SET_RECORD_VALUE_NEW);
                            }} prop={"devices.desktop.specs.sWare.msOffice.isLicensed"} case={1}
                          />
                        </div>
                      </div>

                    </CardBody>
                  </Card>  
                </div>

                <div className="col-md-4">
                  <Card>
                    <CardHeader tag="h6">Anti Virus</CardHeader>
                    <CardBody>
                      <div className="row">
                        <div className="col-md-12">
                          <LabelInput
                            label={"Name"} value={antiVirus.name} type="text" req={1}
                            onChange={(e) => {
                              this.props.SetValue(e, SET_RECORD_VALUE_NEW);
                            }} prop={"devices.desktop.specs.sWare.antiVirus.name"} case={1}
                          />
                          <LabelInput
                            label={"License"} value={antiVirus.isLicensed} type="select" req={1}
                            options={[{text: "TRUE", value: 1}, {text: "FALSE", value: 0}]}
                            onChange={(e) => {
                              this.props.SetValue(e, SET_RECORD_VALUE_NEW);
                            }} prop={"devices.desktop.specs.sWare.antiVirus.isLicensed"} case={1}
                          />
                        </div>
                      </div>

                    </CardBody>
                  </Card>  
                </div>

              </div>
            </div>

          </CardBody>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  recordNew: state.recordNew
});

export default connect(mapStateToProps, {
  GetDate,
  SetValue,
  GetList,
  ArrangeName,
  GetSafe,
})(Table4);
