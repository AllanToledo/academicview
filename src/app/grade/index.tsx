import React, { useState, useRef } from "react";
import { styles } from "./styles";
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import GradeCard from "../../components/gradeCard";

function Grade(props: any) {


    const grade = props.grade;

    var years: any = useRef(Object.entries(grade).reverse());
    const [selectedYear, setSelectedYear] = useState(years.current[0][0]);
    var schoolReport: any = useRef(grade[selectedYear]);

    const handleSelectYear = (year: string) => {
        schoolReport.current = grade[year];
        setSelectedYear(year);
    }


    return (
        <div>
            <UncontrolledDropdown>
                <DropdownToggle caret className="green border-0 my-1">
                    {selectedYear}
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem header>Anos</DropdownItem>
                    <DropdownItem divider />
                    {years.current.map((year: any, index: number) =>
                        <DropdownItem key={index}
                            onClick={() => handleSelectYear(year[0])}>
                            {year[0]}
                        </DropdownItem>
                    )}
                </DropdownMenu>
            </UncontrolledDropdown>
            <div className="row">
                {
                    Object.entries(schoolReport.current).map((object: any, index: number) =>
                        <GradeCard key={index} classe={object[0]} grade={object[1]} />
                    )
                }
            </div>
        </div>
    );
}

export default Grade;