import React, {useState, useEffect} from "react";
import {v4 as uuidv4} from "uuid"
import { ExampleWrapper } from "./style";

const Example = () =>{
    const [listItem, setListItem] = useState([
        {
            id: uuidv4(),
            title:""
        }
    ]);
const handleAdd = () =>{
    setListItem([
        ...listItem,
        {
            id: uuidv4(),
            title:""
        }
    ])
};

useEffect(()=>{
    //scroll to the bottom of "#myDiv"
    const myList = document.getElementById("list");
    myList.scrollTop=myList.scrollHeight;
    },[listItem]);

    return(
        <React.Fragment>
            <ExampleWrapper>
                <div>
                    <div className="list" id="list">
                        {
                            listItem.map((item, index)=>{
                                return(
                                    <div className="list-item" > item {index + 1}</div>
                                )
                            })
                        }
                    </div>
                    <button className="btn" onClick={handleAdd}>Add</button>
                </div>
            </ExampleWrapper>
        </React.Fragment>
    )
}
export default Example;
