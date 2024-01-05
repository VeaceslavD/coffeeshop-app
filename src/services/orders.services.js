export const orders =  JSON.parse(localStorage.getItem('orders') || '[]');

export const placeOrder = (order) => {
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders)); 
};

export const findOrderByUserId = (id) => {
    return orders.filter(item => item.userDetails.id === id);
};

export const getOrderById = (id) => {
    return orders.find(order => order.id === id);
};