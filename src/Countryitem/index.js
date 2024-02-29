import React from "react";
import { CountryWrapper } from "./style";
import PropStyle from "prop-types";
const Country = (props) =>{
    const {country} = props
    const {name, flag, area, population} = country;
    return(
        <React.Fragment>
            <CountryWrapper>
                <div>
                    <img src={flag} alt="ảnh lỗi "/>
                    <h3 className="name-country">Name: {name}</h3>
                    <h3 className="info">Dân số: {area}</h3>
                    <h3 className="info">Diện tích: {population}</h3>
                </div>
            </CountryWrapper>
        </React.Fragment>
    )
}
Country.prototype={

}
export default Country;

