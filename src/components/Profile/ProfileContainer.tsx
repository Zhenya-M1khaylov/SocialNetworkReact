import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {ProfileType, getUserProfile, getStatus, updateStatus} from '../../redux/profile-reducer';
import {AppRootStateType} from '../../redux/redux-store';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';


class ProfileContainer extends React.Component<ProfilePropsType> {

    componentDidMount() {
        let userID = this.props.match.params.userID
        if (!userID) {
            userID = '2'
        }

        this.props.getUserProfile(userID)
        this.props.getStatus(userID)
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
            </div>
        );
    }
}


type mapStateToPropsType = {
    profile: ProfileType | null
    status:string
}
type mapDispatchToPropsType = {
    getUserProfile:(userID: string) => void
    getStatus: (userID: string) => void
    updateStatus: (newStatus:string) => void
}

type PathParamsType = {
    userID: string
}

type ProfilePropsType = RouteComponentProps<PathParamsType> & mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)

