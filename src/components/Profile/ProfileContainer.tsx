import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {ProfileType, getUserProfile} from '../../redux/profile-reducer';
import {AppRootStateType} from '../../redux/redux-store';
import {Redirect, RouteComponentProps, withRouter} from 'react-router-dom';


class ProfileContainer extends React.Component<ProfilePropsType> {

    componentDidMount() {
        let userID = this.props.match.params.userID
        if (!userID) userID = '2'
        this.props.getUserProfile(userID)
    }

    render() {
        if (!this.props.isAuth) return <Redirect to ={'/login'}/>

        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        );
    }
}

type mapStateToPropsType = {
    profile: ProfileType | null,
    isAuth: boolean
}
type mapDispatchToPropsType = {
    getUserProfile:(userID: string) => void
}

type PathParamsType = {
    userID: string
}

type ProfilePropsType = RouteComponentProps<PathParamsType> & mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})

const WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent)