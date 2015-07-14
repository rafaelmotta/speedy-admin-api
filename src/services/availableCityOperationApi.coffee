angular.module("speedy.api")

  .factory "availableCityOperationApi", (ApiService, Restangular) ->

    new class AvailableCityOperationApi extends ApiService

      get: (state) ->
        Restangular.one("admin").one("companies", @company.id).one("stores", @store.id).one("available_city_operations", state.id).get()




