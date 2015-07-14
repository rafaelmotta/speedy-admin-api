angular.module("speedy.api")

  .factory "cityOperationApi", (Restangular, ApiService) ->

    new class CityOperationApi extends ApiService

      get: () ->
        Restangular.one("admin").one("companies", @company.id).one("stores", @store.id).one("city_operations").get()

      create: (cityOperation) ->
        Restangular.one("admin").one("companies", @company.id).one("stores", @store.id).one("city_operations", cityOperation.id).put()

      destroy: (cityOperation) ->
        Restangular.one("admin").one("companies", @company.id).one("stores", @store.id).one("city_operations", cityOperation.id).remove()


