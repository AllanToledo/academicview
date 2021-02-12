import React, { useRef, useState, useEffect } from "react";
import { styles } from "./styles";
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import MaterialCard from "../../components/materialCard";

function Material(props: any) {

    const material = useRef(props.material);

    const years: any = useRef(Object.entries(material.current));
    const [selectedYear, setSelectedYear] = useState(years.current[0][0]);

    const classes: any = useRef(Object.entries(material.current[selectedYear]));
    const [selectedClass, setSelectedClass] = useState(classes.current[0][0]);

    const [materialContent, setMaterialContent] = useState(material.current[selectedYear][selectedClass]);

    const handleSelectYear = (year: string) => {
        classes.current = Object.entries(material.current[year]);
        setSelectedClass(classes.current[0][0]);
        setMaterialContent(material.current[year][classes.current[0][0]])
        setSelectedYear(year);

    }

    const handleSelectClass = (schoolClass: string) => {

        setSelectedClass(schoolClass);
        setMaterialContent(material.current[selectedYear][schoolClass])

    }

    /*
    console.log({
        material,
        years,
        selectedYear,
        classes,
        selectedClass,
        materialContent
    })
    */
    return (
        <div>
            <div className="row">
                <div className="col my-1">
                    <UncontrolledDropdown>
                        <DropdownToggle caret className="green border-0">
                            {selectedYear}
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem header>Periodo</DropdownItem>
                            <DropdownItem divider />
                            {years.current.map((year: any, index: number) =>
                                <DropdownItem key={index}
                                    onClick={() => handleSelectYear(year[0])}>
                                    {year[0]}
                                </DropdownItem>
                            )}
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </div>
                <div className="col my-1">
                    <UncontrolledDropdown className="w-100">
                        <DropdownToggle caret className="green border-0 w-100 text-truncate">
                            {selectedClass}
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem header>Materia</DropdownItem>
                            <DropdownItem divider />
                            {classes.current.map((schoolClass: any, index: number) =>
                                <DropdownItem key={index}
                                    onClick={() => handleSelectClass(schoolClass[0])}>
                                    {schoolClass[0]}
                                </DropdownItem>
                            )}
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </div>
            </div>
            <div className="row">
                {materialContent.map((obj: any, index: number) =>
                    <MaterialCard key={index} obs={obj.obs} url={obj.material} date={obj.publicationData} />
                )}
            </div>
        </div>
    );
}

export default Material;