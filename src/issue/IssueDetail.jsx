import React from 'react';
import { get, close, reopen } from '../Api';
//Importar css

class IssueDetail extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    componentDidMount(){
        this.loadIssue();
    }

    loadIssue(){
        const id = Number(this.props.match.params.issueId);
        console.log("Dentro de loadIssue. ID: " + id);
        const issue = get(id);
        this.setState({ issue });
    }

    onCerrar(){
        const { issue } = this.state;
        console.log("Dentro de onCerrar: " + issue.estado);
        close(issue.id);
        this.loadIssue();
    }

    onReabrir(){
        reopen(this.state.issue.id);
        this.loadIssue();
    }

    render(){
        const { issue } = this.state;
        return(
            <div className="issue-detail">
                <h1>{issue.titulo}</h1>
                <h2>{issue.estado}</h2>
                <h3>{issue.usuario}</h3>
                <h4>{issue.fecha}</h4>
                <h5>{issue.contenido}</h5>
                <h6>{issue.modificado}</h6>    
            </div>
        );
    }    
}

//export default withRouter(IssueDetail);