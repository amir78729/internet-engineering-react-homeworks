import { User } from '../User/User';
import s from './UserList.module.css';
import s2 from './../User/User.module.css';
import { useEffect, useState } from 'react';
import { Button } from '../../../other/Button/Button';
import axios from 'axios';
import loadingIcon from '../../../../assets/loading.gif';

const API_CALL_URL = 'https://jsonplaceholder.typicode.com/users';

export const UserList = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const getData = () => {
        setUsers([]);
        setIsLoading(true);
        axios.get(API_CALL_URL).then((res) => {
            setUsers(res.data);
            setIsLoading(false);
        });
    };
    useEffect(getData, []);
    return (
        <div className={s.Container}>
            {isLoading && <img src={loadingIcon} alt="loading-icon" className={s.LoadingIcon} />}
            {!isLoading && (
                <>
                    <Button title="GET AGAIN!" onClick={() => getData()} />
                    <header>
                        <div className={s2.UserContainer}>
                            <p>name</p>
                            <p>phone</p>
                            <p>email</p>
                            <p>website</p>
                        </div>
                    </header>
                </>
            )}

            <div className={s.UserList}>
                {users?.map((data) => (
                    <User
                        key={data?.website}
                        name={data?.name || '-'}
                        email={data?.email || '-'}
                        website={data?.website || '-'}
                        phone={data?.phone || '-'}
                    />
                ))}
            </div>
        </div>
    );
};
