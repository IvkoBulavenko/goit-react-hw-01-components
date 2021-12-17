import PropTypes from 'prop-types';

import { Item, Online, Offline, Avatar, Name } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <Item>
        {isOnline ? <Online /> : <Offline />}
        <Avatar src={avatar} alt={name} width="48" />
        <Name>{name}</Name>
      </Item>
    </>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
};