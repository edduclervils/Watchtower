import { Link } from "react-router-dom";


export function NavBar(){

    return <>
    <table>
        <tbody>
            <tr>
                <td><Link to="/">Home</Link></td>
                <td><Link to="/addhero">Add a Hero</Link></td>
            </tr>
        </tbody>
    </table>
    </>
}
