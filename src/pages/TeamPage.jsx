import { HeaderButton } from '../components/button/HeaderButton';
import { Header } from '../components/header/Header';
import { HeaderContentTeam } from '../components/headerContentTeam/HeaderContentTeam';
import { UserList } from '../components/userList/UserList';
import { Container } from '../components/container/Container';

export function TeamPage() {
    return (
        <Container>
            <Header page="Team">
                <>
                    <HeaderContentTeam />
                    <HeaderButton title="Выход" />
                </>
            </Header>
            <UserList />
        </Container>
    );
}
