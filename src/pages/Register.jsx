import { AtomTitle } from "../components/atoms/AtomTitle";
import { RegisterForm } from "../components/molecules/RegisterForm"
import { useRegister } from "../store/Register";

export const Register = () => {
    const { user,register } = useRegister();
    const handleFormSubmit = (data) => {
        console.log(data);
        register(data)
    };
    return (
        <>
            <AtomTitle text="Signup"/>
            <RegisterForm onSubmit={handleFormSubmit} />
        </>
    )
}
