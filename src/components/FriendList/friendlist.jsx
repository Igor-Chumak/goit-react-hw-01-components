import PropTypes from 'prop-types';

export FriendList({friends, children}) => {
    return (
        <ul className="friend-list">
            {children}
        </ul>
    )
}

FriendList.propTypes = {
    friends: PropTypes.array,
}

