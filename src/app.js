angular.module('customer').factory('customer-formatting-service-async',[
    'customer-service',
    function(customerService){
        function getFormattedCustomerInfo(customerId){
            return customerService.getCustomerById(customerId)
            .then(function(customer){
                return customer.firstName + ' ' + customer.lastName + ' Total Sales: $' + customer.totalSales;
            })
            .catch(function(e){
                return {error:e};
            });
        }
        return {getFormattedCustomerInfo:getFormattedCustomerInfo};
    }
]);