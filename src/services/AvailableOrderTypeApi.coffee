angular.module("speedy.api")

  .factory "availableOrderTypeApi", (Restangular, ApiService) ->

    new class AvailableOrderTypeApi extends ApiService

      get: () ->
        Restangular.one("admin").one("companies", @company.id).one("stores", @store.id).one("available_order_types").get()




