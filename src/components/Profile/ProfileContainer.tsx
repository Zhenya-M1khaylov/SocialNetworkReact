import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {ProfileType, setUserProfile} from '../../redux/profile-reducer';
import {AppRootStateType} from '../../redux/redux-store';
import {RouteComponentProps, withRouter} from 'react-router-dom';


class ProfileContainer extends React.Component<ProfilePropsType> {

    componentDidMount() {
        let userID = this.props.match.params.userID
        if (!userID) userID = '2'
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userID)
            .then((response) => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        );
    }
}

type mapStateToPropsType = {
    profile: ProfileType | null
}
type mapDispatchToPropsType = {
    setUserProfile:(profile:ProfileType) => void
}

type PathParamsType = {
    userID:string
}

type ProfilePropsType = RouteComponentProps<PathParamsType> & mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => ({
    profile: state.profilePage.profile
})

const WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent)