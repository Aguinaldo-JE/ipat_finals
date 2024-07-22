import axios from "axios";
import React, { useEffect, useState } from "react";

const ItemForm = ({ item, onSuccess }) => {
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [placeOfBirth, setPlaceOfBirth] = useState('');
    const [sex, setSex] = useState('');
    const [civilStatus, setCivilStatus] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [bloodType, setBloodType] = useState('');
    const [citizenship, setCitizenship] = useState('');
    const [residentialAddress, setResidentialAddress] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [gsisIdNo, setGsisIdNo] = useState('');
    const [pagibigIdNo, setPagibigIdNo] = useState('');
    const [philhealthNo, setPhilhealthNo] = useState('');
    const [sssNo, setSssNo] = useState('');
    const [tinNo, setTinNo] = useState('');
    const [fathersName, setFathersName] = useState('');
    const [mothersName, setMothersName] = useState('');

    useEffect (() => {
        if (item) {
            setFirstName(item.firstName);
            setMiddleName(item.middleName);
            setLastName(item.lastName);
            setEmail(item.email);
            setPhone(item.phone);
            setDateOfBirth(item.dateOfBirth);
            setPlaceOfBirth(item.placeOfBirth);
            setSex(item.sex);
            setCivilStatus(item.civilStatus);
            setHeight(item.height);
            setWeight(item.weight);
            setBloodType(item.bloodType);
            setCitizenship(item.citizenship);
            setResidentialAddress(item.residentialAddress);
            setZipCode(item.zipCode);
            setGsisIdNo(item.gsisIdNo);
            setPagibigIdNo(item.pagibigIdNo);
            setPhilhealthNo(item.philhealthNo);
            setSssNo(item.sssNo);
            setTinNo(item.tinNo);
            setFathersName(item.fathersName);
            setMothersName(item.mothersName);
        }
    }, [item]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const data = { firstName, middleName, lastName, phone, email, dateOfBirth, placeOfBirth, sex, civilStatus, height, weight, bloodType, citizenship, residentialAddress, zipCode, gsisIdNo, pagibigIdNo, philhealthNo, sssNo, tinNo, fathersName, mothersName };
        try {
             if (item){
                await 
                axios.put(`http://localhost:8000/api/items/${item.id}/`, data);
             } else {
                await 
                axios.post('http://localhost:8000/api/items/', data);
             }
             onSuccess();
            } catch (error) {
               console.error('There was an error submitting the form!', error);
            }
        };

        return (
            <form onSubmit={handleSubmit}>
                <div>
                    <label>First Name:</label>
                    <input type="text" 
                    value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div>
                    <label>Middle Name:</label>
                    <input type="text" 
                    value={middleName} onChange={(e) => setMiddleName(e.target.value)} />
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type="text" 
                    value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </div>
                <div>
                    <label>Mobile No.:</label>
                    <input type="text" 
                    value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
                <div>
                    <label>Email Address:</label>
                    <input type="text" 
                    value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label>Date Of Birth:</label>
                    <input type="text" 
                    value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} />
                </div>
                <div>
                    <label>Place Of Birth:</label>
                    <input type="text" 
                    value={placeOfBirth} onChange={(e) => setPlaceOfBirth(e.target.value)} />
                </div>
                <div>
                    <label>Sex:</label>
                    <input type="text" 
                    value={sex} onChange={(e) => setSex(e.target.value)} />
                </div>
                <div>
                    <label>Civil Status:</label>
                    <input type="text" 
                    value={civilStatus} onChange={(e) => setCivilStatus(e.target.value)} />
                </div>
                <div>
                    <label>Height:</label>
                    <input type="text" 
                    value={height} onChange={(e) => setHeight(e.target.value)} />
                </div>
                <div>
                    <label>Weight:</label>
                    <input type="text" 
                    value={weight} onChange={(e) => setWeight(e.target.value)} />
                </div>
                <div>
                    <label>Blood Type:</label>
                    <input type="text" 
                    value={bloodType} onChange={(e) => setBloodType(e.target.value)} />
                </div>
                <div>
                    <label>Citizenship:</label>
                    <input type="text" 
                    value={citizenship} onChange={(e) => setCitizenship(e.target.value)} />
                </div>
                <div>
                    <label>Residential Address:</label>
                    <input type="text" 
                    value={residentialAddress} onChange={(e) => setResidentialAddress(e.target.value)} />
                </div>
                <div>
                    <label>Zip Code:</label>
                    <input type="text" 
                    value={zipCode} onChange={(e) => setZipCode(e.target.value)} />
                </div>
                <div>
                    <label> GSIS ID No.</label>
                    <input type="text" 
                    value={gsisIdNo} onChange={(e) => setGsisIdNo(e.target.value)} />
                </div>
                <div>
                    <label> PAG IBIG No.</label>
                    <input type="text" 
                    value={pagibigIdNo} onChange={(e) => setPagibigIdNo(e.target.value)} />
                </div>
                <div>
                    <label> Philhealth No.</label>
                    <input type="text" 
                    value={philhealthNo} onChange={(e) => setPhilhealthNo(e.target.value)} />
                </div>
                <div>
                    <label> SSS No.</label>
                    <input type="text" 
                    value={sssNo} onChange={(e) => setSssNo(e.target.value)} />
                </div>
                <div>
                    <label> TIN No.</label>
                    <input type="text" 
                    value={tinNo} onChange={(e) => setTinNo(e.target.value)} />
                </div>
                <div>
                    <label> Father's Name:</label>
                    <input type="text" 
                    value={fathersName} onChange={(e) => setFathersName(e.target.value)} />
                </div>
                <div>
                    <label> Mother's Name:</label>
                    <input type="text" 
                    value={mothersName} onChange={(e) => setMothersName(e.target.value)} />
                </div>
                <button type="submit">Submit</button>
            </form>
        );
};
export default ItemForm;