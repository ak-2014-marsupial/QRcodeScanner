import React from 'react';

const InputTypeRange = ({data,setData}) => {
    return (
        <div style={{margin:"0.3em"}}>
            <input type={"range"} min={"-50"} max={"50"} step={"10"} value={data}
                   onChange={(e) => setData(e.target.value)}
                   list={"values"}
            />
            <datalist id={"values"} style={{color:"var(--text-primary)"}} >
                <option value={"-50"} label={"-50%"} ></option>
                <option value={"0"} label={"0"} ></option>
                <option value={"50"} label={"+50%"}></option>
            </datalist>
        </div>
    );
};

export {InputTypeRange};