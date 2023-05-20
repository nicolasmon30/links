import { AtomTitle } from "../components/atoms/AtomTitle";
import { LoginForm } from "../components/molecules/LoginForm"
import { useNavigate } from "react-router-dom";
import { useLogin } from "../store/Login";


export const Login = () => {
    const { userLog, login } = useLogin()
    const navigate = useNavigate();
    const handleFormSubmit = async (data) => {   
        await login(data)
        if(userLog){
            navigate("/mylinks");
        }
    };
    return (
        <>
            <AtomTitle text="Login" />
            <LoginForm onSubmit={handleFormSubmit} />
        </>
    )
}
