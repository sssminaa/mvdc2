import React from 'react';
import './TopStatusBar.css'

const items = [
    {label : "총 발전량" , value: 8781.29 , unit: "kW"},
    {label : "총 부하" , value: 8781.29 , unit: "kW"},
    {label : "충전량" , value: 8781.29 , unit: "kW"},
    {label : "온도" , value: 25 , unit: "℃"},
    {label : "습도" , value: 50 , unit: "%"},
    {label : "일사량" , value: 8781.29 , unit: "W/㎡"}
]

const TopStatusBar = () => {
    return (
        <div className='status-bar'>
            {items.map((it)=>(
                <div className="status-item" key={it.label}>
                    <span className='label'>{it.label}</span>
                    <span className='value'>{it.value}</span>
                    <span className='unit'>{it.unit}</span>
                </div>
                )
            )}
        </div>
    );
};

export default TopStatusBar;
