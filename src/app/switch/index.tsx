import React, { useState } from "react";
import { styles } from "./styles";
import Grade from "../grade";
import Material from "../material";

function Switch(props: any) {

    const grades = props.data.grades;
    const material = props.data.classMaterial;

    const [selectedTab, setSelectedTab] = useState("grade");

    const getContent = () => {
        switch (selectedTab) {
            case "grade":
                return <Grade grade={grades} />;
            case "material":
                return <Material material={material} />;
            default:
                break;
        }
    }

    return (
        <div>
            <div className="row mt-2">
                <div className="col d-flex">
                    <p className={`font-weight-bold mr-3 ${selectedTab === "grade" ? "" : "disabled"}`}
                        onClick={() => setSelectedTab("grade")}>
                        Boletim
                    </p>
                    <p className={`font-weight-bold mr-3 ${selectedTab === "material" ? "" : "disabled"}`}
                        onClick={() => setSelectedTab("material")}>
                        Material
                    </p>
                </div>
            </div>
            {getContent()}
        </div>
    );
}

export default Switch;