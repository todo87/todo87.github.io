mainApp.factory('get', function ($http) {
    var myService = {
        async: function (object) {
            // $http returns a promise, which has a then function, which also returns a promise
            var promise = $http.get('script/data/' + object).then(function (response) {
                // The then function here is an opportunity to modify the response
                console.log(response);
                // The return value gets picked up by the then in the controller.
                return response.data;
            });
            // Return the promise to the controller
            return promise;
        }
    };
    return myService;
});
