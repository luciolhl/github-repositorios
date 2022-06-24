import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from './styles';
import api from '../../services/api';

export default function Repositorio(props){
    const { repositorio } = useParams();

    useEffect(() => {
        async function load(){
            const nomeRepo = repositorio;

            const [repositorioData, issuesData] = await Promise.all([
                api.get(`/repos/${nomeRepo}`),
                api.get(`/repos/${nomeRepo}/issues`),
            ]);

            console.log(repositorioData.data);
            console.log(issuesData.data);
        }

        load();
    }, []);

    return(
        <Container>

        </Container>
    )
}