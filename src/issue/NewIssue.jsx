import React from 'react';
import { addIssue } from '../Api';
import { Formik, Field } from 'formik';
import { FormGroup, Button } from 'react-bootstrap';

class NewIssue extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.onSubmit() = this.onSubmit.bind(this);
    }

    onSubmit(values, { setSubmitting }) {
        addIssue(values);
        setSubmitting(false);
        //this.props.onNewIssue();
        //this.props.history.push('/');
    }

    render() {

        const initialValues = {
            titulo: '', contenido: '', usuario: ''
        };

        return (
            <Formik initialValues={initialValues} onSubmit={this.onSubmit}>
                {({ isSubmitting }) => (
                    <Form as={FormikForm}>
                        <Form.Group as={row}>
                            <Form.Label column sm="2" lg="1">
                                Título
                            </Form.Label>
                            <Col sm="10" lg="11">
                                <Form.Control name="titulo" required as={Field} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={row}>
                            <Form.Label column sm="2" lg="1">
                                Contenido
                            </Form.Label>
                            <Col sm="10" lg="11">
                                <Form.Control name="contenido" component="textarea" rows="10" as={Field} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={row}>
                            <Form.Label column sm="2" lg="1">
                                Usuario
                            </Form.Label>
                            <Col sm="10" lg="11">
                                <Form.Control name="usuario" required as={Field} />
                            </Col>
                        </Form.Group>

                        <Button type="submit" disabled={isSubmitting}></Button>
                    </Form>
                )}

            </Formik>
        );
    }


}

//export default withRouter(NewIssue);
