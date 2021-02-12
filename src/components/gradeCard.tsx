import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";

function GradeCard(props: any) {

    const classe = props.classe;
    const grade = props.grade;
    var finalGrade: number = 0;


    return (
        <div className="col-12 col-md-3 my-1">
            <Card className="h-100">
                <CardBody className="h-100 d-flex flex-column justify-content-between">
                    <CardTitle className="lead">
                        {classe}
                    </CardTitle>

                    <div>
                        <table className="table table-sm table-borderless table-hover text-center table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">B</th>
                                    <th scope="col">N</th>
                                    <th scope="col">F</th>
                                    <th scope="col">C</th>
                                    <th scope="col">M</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    grade.map((object: any, index: number) => {
                                        let media = ((object.grade * 0.8) + object.concept);
                                        if (index < 2) {
                                            finalGrade += media * 0.2;
                                        } else {
                                            finalGrade += media * 0.3;
                                        }

                                        return <tr key={index} style={media < 6 ? object.grade === null ? {} : { backgroundColor: "#ef5350", color: "#fafafa" } : {}}>
                                            <th scope="row" className="rounded-left border-0">{index + 1}</th>
                                            <td>{object.grade === null ? "-" : object.grade}</td>
                                            <td>{object.missedClasses === null ? "-" : object.missedClasses}</td>
                                            <td>{object.concept === null ? "-" : object.concept}</td>
                                            <td className="rounded-right border-0">{object.grade !== null && object.concept !== null ? (media).toFixed(1) : "-"}</td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                        <p className="lead">Média atual: {finalGrade.toFixed(1)}</p>
                    </div>
                </CardBody>
            </Card>
        </div >
    );
}

export default GradeCard;