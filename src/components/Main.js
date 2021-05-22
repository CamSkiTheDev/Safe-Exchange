import { useEffect, useState } from "react";
import { Route, Switch} from "react-router-dom";
import Logs from "../pages/Logs";
import Show from "../pages/Show"

function Main(props) {
    return (
        <main>
            <Switch>
                <Route exact path="/">
                    <Logs />
                </Route>
                <Route path="/logs/:id" 
                    render={(rp) => (
                        <Show {...rp}
                        />
                )}
                />
            </Switch>
        </main>
    )
}

export default Main