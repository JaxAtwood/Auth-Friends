import styled from "styled-components";

const Card = styled.div `
    border: hotpink solid 5px;
    background: white;
    width: 50%;
    margin: 0 auto;
    border-radius: 20px;
    font-size: 2rem;
    line-height: .5;
    margin-bottom: 20px;
`
const NewBuddy = styled.div `
    border: white solid 2px;
    display: flex;
    flex-direction: column;
    width: 30%;
    // padding-bottom: 30px;
    margin: 0 auto;
    font-size: 20px;
`

const CardButtons = styled.div `
    // border: solid red 2px;
    width: 30%;
    margin: 0 auto;
    padding: 10px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: stretch;
`
export { Card, NewBuddy, CardButtons };