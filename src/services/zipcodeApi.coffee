angular.module("speedy.api")

  .factory "zipcodeApi", ($rootScope, Restangular) ->

    #
    get: (zipcode, number = null) ->
      Restangular.one("zipcode").get(zipcode: zipcode, number: number)