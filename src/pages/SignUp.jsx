import { ModalRegister } from '../components/modal/Modal';
import { SignUpContainer } from '../components/signUpContainer/SignUpContainer';
import { Login } from '../components/login/Login';
import { Registration } from '../components/register/Register';
import { useState } from 'react';
import { ModalButtons } from '../components/modalButtons/ModalButtons';

export function SignUp() {
    const [login, setLogin] = useState(false);
    const [register, setRegister] = useState(false);

    return (
        <SignUpContainer>
            <ModalRegister>
                {!login && !register && (
                   <ModalButtons setLogin={setLogin} setRegister={setRegister} />
                )}
                {login && (
                    <Login setLogin={setLogin} setRegister={setRegister} />
                )}
                {register && (
                    <Registration
                        setLogin={setLogin}
                        setRegister={setRegister}
                    />
                )}
            </ModalRegister>
        </SignUpContainer>
    );
}
