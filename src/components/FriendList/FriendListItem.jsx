import PropTypes from 'prop-types';
import css from './FriendList.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  const statusDotClass = isOnline
    ? css.friendStatusDotOnline
    : css.friendStatusDotOffline;

  return (
    <li className={css.friendListItem}>
      <span className={`${css.friendStatusDot} ${statusDotClass}`}></span>
      <img className={css.friendAvatar} src={avatar} alt={name} />
      <span className={css.friendName}>{name}</span>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
