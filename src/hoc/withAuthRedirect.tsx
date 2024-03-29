import React, {ComponentType} from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppRootStateType} from "../redux/redux-store";


type mapStateToPropsType = {
    isAuth:boolean
}

const mapStateToProps = (state:AppRootStateType):mapStateToPropsType => {
    return {
        isAuth:state.auth.isAuth
    }
}

export function withAuthRedirect <T>(Component: ComponentType<T>)  {

    function RedirectComponent(props: mapStateToPropsType) {
        const {isAuth, ...restProps} = props
        if (!isAuth) return <Redirect to={"/login"}/>
        return <Component {...restProps as T}/>
    }

    const ConnectedRedirectedComponent = connect(mapStateToProps)(RedirectComponent)

    return ConnectedRedirectedComponent
}