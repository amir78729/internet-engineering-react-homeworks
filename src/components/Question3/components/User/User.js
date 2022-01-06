/* eslint-disable react/jsx-no-target-blank */
import s from './User.module.css';
import PropTypes from 'prop-types';

export const User = ({ phone, email, name, website }) => {
    return (
        <div className={`${s.UserContainer} ${s.UserRow}`}>
            <p>{name}</p>
            <p>{phone}</p>
            <p>{email}</p>
            <a href={website} target="_blank">
                {website}
            </a>
        </div>
    );
};
User.propTypes = {
    name: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,
    website: PropTypes.string
};
User.defaultProps = {
    name: 'Amirhossein',
    phone: '09129334535',
    email: 'amirhosseinalibakhshi@gmail.com',
    website: 'https://amir78729.github.io'
};
