import React, { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { styles } from "./styles";
import axios, { AxiosResponse } from "axios";
import { CardBody, CardText, Card, CardTitle, Modal, ModalBody, Progress } from "reactstrap";
import { addData } from "../../data/actions";
import { useNavigate } from "react-router";

function Login(props: any) {

    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState(<div />);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    var anyType: any;
    const userInput = useRef(anyType);
    const passwordInput = useRef(anyType);

    const handleClick = async (event: any) => {
        event.preventDefault();

        setModalContent(handleModalContent(1));
        setShowModal(true);

        let login = userInput.current.value;
        let password = passwordInput.current.value;
        let error = false;

        const response: any = await axios.post('https://qacademic-api.herokuapp.com/students', {
            login,
            password
        }).catch(() => {
            setShowModal(false);
            alert("Houver um erro, verifique o usuário e senha, e tente novamente.");
            error = true;
        });

        if (!error) {
            if (response.status === 200 && response.data.hasOwnProperty('grades')) {
                setModalContent(handleModalContent(2, response.data.name.split(' ')[0]));
                setTimeout(() => {
                    dispatch(addData(response.data));
                    navigate("/home", { replace: true });
                    setShowModal(false);
                }, 2000);
            } else {
                setShowModal(false);
                alert("Houver um erro, verifique o usuário e senha, e tente novamente.");
            }
        }
    }

    const handleModalContent = (stage: number, name = "") => {
        switch (stage) {
            case 1:
                return <ModalBody className={"py-5"}>
                    <p className={"lead w-100 text-center"}>
                        Buscando informações...
                    </p>
                    <p className={"lead w-100 text-center"} style={{ fontSize: "0.7rem" }}>
                        Este processo pode demorar alguns segundos.
                    </p>
                    <Progress animated color="success" value="100" />
                </ModalBody>;
            case 2:
                return <ModalBody className={"py-5"}>
                    <p className="lead w-100 text-center font-weight-bolder">
                        Bem vindo, {name}
                    </p>
                </ModalBody>;
            default:
                return <div />;
        }
    }

    return (
        <div className="container-fluid" style={styles.container}>
            <div className="row h-100 justify-content-center">
                <div className="col-12 col-md-4 d-flex flex-column justify-content-between">
                    <div />
                    <div>
                        <p className="h1 text-center font-weight-bold">
                            Academic View
                            </p>
                        <p className="text-center lead">
                            Bem vindo <br />
                                Utilize as suas credenciais do <br /> Q-Academico para entrar
                            </p>
                        <p className="text-center lead my-0" style={{ fontSize: "0.8rem" }}>
                            Uso restrito ao alunos do campus Primavera Do Leste
                            </p>
                        <form>
                            <input type="user" ref={userInput} placeholder="Usuário" className="my-2 form-control border-0" />
                            <input type="password" ref={passwordInput} placeholder="Senha" className="my-2 form-control border-0" />
                            <button type="submit" className="btn green btn-block my-2 shadow-sm" onClick={handleClick}>
                                <p className="lead m-0">Entrar</p>
                            </button>
                        </form>
                        <p className="mb-4 lead text-muted text-center" style={{ fontSize: "1rem" }}>
                            Nós não armazenamos nenhuma<br /> informação sua ;)
                            </p>
                    </div>
                    <p className="mt-3 text-center lead" style={{ fontSize: "0.8rem" }}>Desenvolvido por <br /> Allan Toledo e Deivid Reinke</p>
                </div>
            </div>
            <Modal isOpen={showModal}>
                {modalContent}
            </Modal>
        </div>
    );
}

export default Login;