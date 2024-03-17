import React from 'react';
import {Order} from "./Order";

const Orders = () => {
    const orders = JSON.parse(localStorage.getItem("order"));
    return (
        <div>
            {orders && orders.map(order =>
                <Order key={order.code} order={order}/>
            )

            }
        </div>
    )
};

export {Orders};