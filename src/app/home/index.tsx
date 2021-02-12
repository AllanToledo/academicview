import React, { useEffect, useState, useRef } from "react";
import { styles } from "./styles";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import menuIcon from "../../content/menu.svg";
import { CardBody, CardTitle, Card, DropdownItem, DropdownMenu, UncontrolledDropdown, DropdownToggle, Button } from "reactstrap";
import Grade from "../grade";
import Switch from "../switch";


function Home() {

    const navigate = useNavigate();

    var isReduxVoid = useRef(false);
    const data = useSelector((state: any) => {
        var reduxData = state.grade;
        if (reduxData.hasOwnProperty('data')) {
            return reduxData.data;
        } else {
            isReduxVoid.current = true;
            return {};
        }
    });

    var name = useRef("");
    var [formatedName, setFormatedName] = useState("");

    const initialize = () => {
        name.current = data.name;
        setFormatedName(formatName(name.current));
    }

    useEffect(() => {
        if (isReduxVoid.current) {
            navigate("/", { replace: true });
        } else {
            initialize()
        }
    }, [])

    return isReduxVoid.current ? <div /> : (
        <div className={"container-fluid"} style={styles.container}>
            <div className="row mt-5">
                <div className="col d-flex justify-content-between">
                    <p className="h3 font-weight-bold">
                        {formatedName}
                    </p>
                    <UncontrolledDropdown>
                        <DropdownToggle caret={false} className="clean border-0">
                            <img src={menuIcon} alt="" width="30rem" height="30rem" />
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem header>Academic View</DropdownItem>
                            <DropdownItem onClick={() => navigate("/", { replace: true })}>
                                Desconectar
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>

                </div>
            </div>
            <Switch
                data={data}
            />
        </div >
    );
}


function formatName(name: string) {
    var fullName = name.split(' ');
    var firstName = fullName[0];
    var lastName = fullName[fullName.length - 1];
    return firstName + " " + lastName;
}
export default Home;