import styled from 'styled-components';


export const Main = styled.div`
margin: 0;
padding: 0;
`;

export const Clock = styled.div`
background: lightblue;
padding: 10px 10px;
margin-top: 130px;
font-size: 2.8rem;
color: palevioletred;
@media screen and (min-width: 350px) and (max-width: 768px) {
    margin-top: 150px;
}
`;

export const Button = styled.div`
    background: #EAEAEA;
    padding: 16px 32px;
    cursor: pointer;
    border-radius: 14px;
`;

export const Buttons = styled.div`
    color: #F8A729;
    display: flex;
    gap: 16px;
    margin-top: 20px;
`;

export const Container = styled.div`
width: 100%;
display: grid;
box-sizing: border-box;
justify-content: center;
`;