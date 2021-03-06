import React from 'react';
import {Switch, Route} from 'react-router-dom';
import { ContatoScreen } from '../pages/contato';
import { CursosScreen } from '../pages/cursos';

export class Rotas extends React.Component{
    render(){
        return(
            <Switch>
                <Route path="/cursos" component={CursosScreen}/>
                <Route path="/contato" component={ContatoScreen}/>
                <Route path="*" component={CursosScreen}/>
            </Switch>
        );
    }
}