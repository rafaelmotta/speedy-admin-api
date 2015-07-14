angular.module("speedy.api")

  .factory "deliveryAreaApi", (ApiService, Restangular) ->

    new class DeliveryAreaApi extends ApiService

      get: ->
        Restangular.one("admin").one("companies", @company.id).one("stores", @store.id).one("delivery_areas").getList()

      create: (cityOperation, deliveryArea) ->
        Restangular.one("admin").one("companies", @company.id).one("stores", @store.id).one("city_operations", cityOperation.id).post("delivery_areas", delivery_area: deliveryArea)

      update: (cityOperation, deliveryArea) ->
        Restangular.one("admin").one("companies", @company.id).one("stores", @store.id).one("city_operations", cityOperation.id).one("delivery_areas", deliveryArea.id).patch(delivery_area: deliveryArea)

      destroy: (cityOperation, deliveryArea) ->
        Restangular.one("admin").one("companies", @company.id).one("stores", @store.id).one("city_operations", cityOperation.id).one("delivery_areas", deliveryArea.id).remove()
