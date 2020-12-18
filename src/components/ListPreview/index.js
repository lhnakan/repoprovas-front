import React from 'react';
import { useHistory } from 'react-router-dom';

import { Box } from './ListStyled';

export default function ListPreview({ element, index, option }) {
    const history = useHistory();
    
    function defineRoute() {
        option === 'subjects' 
            ? history.push(`/subject/${element.id}`)
            : history.push(`/professor/${element.id}`)
    }

    if(option === 'all'){    
        return(
            <a  href={element.link} target="_blank" key={`${element.link}${index}`}>
                <Box option={option}>
                    <p>{element.name}</p>
                    <span>{element.subject}</span>
                    <span>{element.type}</span>
                    <span>{element.professor}</span>
                </Box>
            </a>
        );

    } else if(option === 'subjects') {
        return(
            <Box option={option} onClick={defineRoute}>
                <p>{element.name}</p>
                <p>{element.term}º termo</p>
            </Box>
        );
    } else {
        return(
            <Box option={option} onClick={defineRoute}>
                <p>{element.name}</p>
            </Box>
        );
    }
}