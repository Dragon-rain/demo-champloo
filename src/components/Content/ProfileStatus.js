import React from "react";
import Class from './ProfileStatus.module.css'

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateMode = () => {
        console.log(this)
        this.setState({
            editMode: true
        })
    }

    deActivateMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateUserStatus(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate (prevProps, prevState ) {
        if(prevProps.status!==this.props.status){
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        debugger
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateMode}>{this.props.status || 'no status'}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} onBlur={this.deActivateMode} autoFocus={true} value={this.props.status}></input>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus