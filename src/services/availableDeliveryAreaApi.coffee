angular.module("speedy.api")

  .factory "availableDeliveryAreaApi", (ApiService, Restangular) ->

    new class AvailableDeliveryAreaApi extends ApiService

      get: (city) ->
        Restangular.one("admin").one("companies", @company.id).one("stores", @store.id).one("city_operations", city.id).one("available_delivery_areas").getList()




