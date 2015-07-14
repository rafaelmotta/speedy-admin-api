angular.module("speedy.api")

  .factory "storeProductApi", (Restangular, ApiService) ->

    new class storeProductApi extends ApiService

      show: (storeProduct) ->
        Restangular.one("admin").one("companies", @company.id).one("stores", @store.id).one("store_products", storeProduct.id).get()

      update: (storeProduct) ->
        Restangular.one("admin").one("companies", @company.id).one("stores", @store.id).one("store_products", storeProduct.id).patch(store_product: storeProduct)

      destroy: (storeProduct) ->
        Restangular.one("admin").one("companies", @company.id).one("stores", @store.id).one("store_products", storeProduct.id).remove()

