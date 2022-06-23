import React, { Component } from 'react';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }
    componentWillMount() {

        fetch(`/api/getUsers`).then((response) => {
            response.json().then(data => {
                this.setState({
                    users: data
                });
            });
        });

    }
    render() {

        return (
            <div className="App">
                <img src='/images/MERN-logo.png' />
                <h2>Dummy Data from Server</h2>
                <table>
                    <tr>
                        <th>Email</th>
                        <th>Username</th>
                        <th>Password</th>
                    </tr>
                    {this.state.users.map(((d, i) => {

                        return (
                            <tr key={i}>
                                <td>{d.email}</td>
                                <td>{d.username}</td>
                                <td>{d.password}</td>
                            </tr>

                        );
                    }))}
                </table>
            </div>

        );
    }
}

export default App;
