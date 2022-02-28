import { Component } from "react";
import lib from "./lib.js"

class Table extends Component {
    constructor(){
        super();
        this.state = {
            library: lib().Library,
        }
    }
    render(){
        return(
            <div className="Table">
                <table>
                    <thead>
                        <th>Folder</th>
                        <th>Name</th>
                        <th>Pronouns</th>
                        <th>Description</th>
                        <th>URL</th>
                    </thead>
                    {this.state.library.map((val, key) => {
                        return(
                            <>
                            {val.characters.map((v2, k2) => {
                                return(
                                    <tr>
                                        <td>{val.header}</td>
                                        <td>{v2.name}</td>
                                        <td>{v2.pronouns}</td>
                                        <td>{v2.description}</td>
                                        <td>{v2.url}</td>
                                    </tr>
                                )
                            })}
                            </>
                        );
                    })}
                    </table>
            </div>
        )
    }
}

export default Table;