import React from 'react'
import Table from "react-bootstrap/Table";
import Email from "../assets/Email.svg"
import Location from "../assets/Location.svg"
import Phone from "../assets/Phone.svg"

const Person = ({ userInfo }) => {
    const { picture: { large }, name: { title, first, last }, email, cell, dob: { age }, state, country } = userInfo
    return (


        <Table Table
            style={{
                width: "400px",
                height: "400px",
                boxShadow:
                    "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
            }
            }
            className=" mx-auto rounded-3"
            striped
            bgcolor="f4a261"
            hover
        >
            <thead>
                <tr className=" justify-content-center">
                    <th style={{ width: "100px" }}>
                        <img className="rounded-circle" src={large} alt="person"></img>
                    </th>
                    <th className="justify-content-center align-items-center py-5">
                        <p className="d-block"></p>
                        {title}{first}{last}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <img src={Email} alt="email" style={{
                            width: "40px",
                            height: "40px",

                        }
                        } />
                    </td>
                    <td colSpan={2}>{email}</td>
                </tr>
                <tr>
                    <td>
                        <img src={Phone} alt="phone" style={{
                            width: "40px",
                            height: "40px",

                        }
                        } />
                    </td>
                    <td colSpan={2}>{cell}</td>
                </tr>
                <tr>
                    <td>
                        <img src={Location} alt="location" style={{
                            width: "40px",
                            height: "40px",

                        }
                        } />
                    </td>
                    <td colSpan={2}>{state} / {country}</td>
                </tr>
                <tr>
                    <td colSpan={2}>Age : {age}</td>
                </tr>
                <tr>
                    <td style={{ border: "none" }} colSpan={2}>
                        Register Date:{userInfo?.date.slice(0, 10)}
                    </td>
                </tr>
            </tbody>
        </Table>
    );
}

export default Person