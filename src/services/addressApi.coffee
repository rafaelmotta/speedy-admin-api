angular.module("speedy.api")

  .service "addressApi", (Restangular, ApiService) ->

    new class addressApi extends ApiService

      get: ->
        Restangular.one("admin").one("companies", @company.id).one("stores", @store.id).one("addresses").get()

      update: (address) ->
        Restangular.one("admin").one("companies", @company.id).one("stores", @store.id).one("addresses", address.id).patch(address: address)