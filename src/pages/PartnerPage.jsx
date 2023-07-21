import { Header } from '../components/header/Header';
import { HeaderPartner } from '../components/headerPartner/HeaderPartner';
import { ContentPartner } from '../components/contentPartner/ContentPartnet';
import { Container } from '../components/container/Container';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export function PartnerPage() {
    const userId = useParams().id;

    const [avatar, setAvatar] = useState('');
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    useEffect(() => {
        const getUserById = async () => {
            const response = await fetch(
                `https://reqres.in/api/users/${userId}`,
            );
            const data = await response.json();


            setAvatar(data.data.avatar);
            setName(data.data.first_name);
            setLastName(data.data.last_name);
            setEmail(data.data.email);
            setPhone('+7 (954) 333-44-55');
        };

        getUserById();
    }, [userId]);



    return (
        <Container>
            <Header page="Partner">
                <>
                    <HeaderPartner
                        name={name}
                        lastName={lastName}
                        avatar={avatar}
                    />
                </>
            </Header>
            <ContentPartner email={email} phone={phone} />
        </Container>
    );
}
