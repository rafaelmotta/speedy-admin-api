angular.module("speedy.api")

  .factory "storeApi", (Restangular, ApiService) ->

    new class StoreApi extends ApiService

      get: (store) ->
        Restangular.one("admin").one("companies", @company.id).one("stores", @store.id).get()

      update: (store) ->
        Restangular.one("admin").one("companies", @company.id).one("stores", @store.id).patch(store: store)

