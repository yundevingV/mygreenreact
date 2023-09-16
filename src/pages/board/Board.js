import React, { useEffect } from 'react';
import BoradItem from '../../components/BoardItem';

export default function Board(){

    useEffect(() => {        
        axios
            .get(`https://iotvase.azurewebsites.net/green/diary/:id`, {
                params: {
                    id : id,
                },
                headers: {
                    Authorization: token,
                }
            })
            .then((response) => {
                

            })
            .catch((error) => {

            });
    }, [page]);

    return(
        <>
            <BoradItem />
        </>

    )
}