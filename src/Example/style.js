import styled from "styled-components";
export const ExampleWrapper = styled.div`
    width: 500px;
    height: auto;
    border: 1px solid #e5e5e5;
    border-radius: 5px;
    padding:8px 10px;
    margin: 10px auto;
    .list{
        width: 100%;
        max-height: 100px;
        overflow: auto;
        .list-item{
            width: 100%;
            height: auto;
            padding: 4px 0px;
            border-radius: 8px;
            margin: 4px 0px;
            border: 1px solid #cacaca;
            display: flex;
            justify-content: center;
            align-items:center
        }
    }
    
    .btn{
        padding: 5px 50px;
    }
`;