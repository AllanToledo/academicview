import React from "react";
import { Card, CardText, CardTitle, Button, CardBody } from "reactstrap";

function MaterialCard(props: any) {

    const obs = props.obs;
    const date = props.date;
    const url = props.url;

    return (
        <div className="col-12 col-md-3 my-1">
            <Card>
                <CardBody className="h-100 d-flex flex-column justify-content-between">
                    <CardTitle className="font-weight-bold">
                        Observações
                </CardTitle>
                    <CardText className="lead">
                        {obs}
                    </CardText>
                    <p className="lead disabled w-100 text-right">
                        Postado {date}
                    </p>
                    <Button className="green border-0" block onClick={() => window.open(url)}>
                        Visualizar material
                </Button>
                </CardBody>
            </Card>
        </div>
    );
}

export default MaterialCard;