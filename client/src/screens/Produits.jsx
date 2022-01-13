import React from 'react'
import { Tokens } from '../Auth_Tokens/Tokens'
import { useHistory } from "react-router-dom";

export default function Produits() {
    let history = useHistory();

    if (Tokens.users[0].user1.user1AuthToken) {
        return (
            <div>
                hello
            </div>
        )
    }
    else {
        history.push("/nope");
        return
    }
}
