import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/common/Header';
import { logout } from '../../lib/api/auth';

const HeadereContainer = () => {
    const { user } = useSelector(({ user }) => ({ user: user.user }))
    const dispatch = useDispatch()
    const onLogout = () => {
        dispatch(logout())
    }
    return (
        <Header user={user} onLogout={onLogout} />
    );
};

export default HeadereContainer;