import React from 'react';
import styled from 'styled-components'

function Title({name,title}) {
    return (
        <div className="row">
            <titleBig className="col-10 mx-auto my-2 text-center text-title">
                    <h1 className="text-capitalize font-weight-bold titleBig">
                        {name} <strong className="text-blue">{title}</strong>
                    </h1>
            </titleBig>
        </div>
    );
}

export default Title;

const titleBig = styled.div`
.titleBig{
    font-family=Abril+Fatface;
}
`