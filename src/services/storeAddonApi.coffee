angular.module("speedy.api")

  .factory "storeAddonApi", (Restangular, ApiService) ->

    new class storeAddonApi extends ApiService

      show: (storeAddon) ->
        Restangular.one("admin").one("companies", @company.id).one("stores", @store.id).one("store_addons", storeAddon.id).get()

      update: (storeAddon) ->
        Restangular.one("admin").one("companies", @company.id).one("stores", @store.id).one("store_addons", storeAddon.id).patch(store_addon: storeAddon)

      destroy: (storeAddon) ->
        Restangular.one("admin").one("companies", @company.id).one("stores", @store.id).one("store_addons", storeAddon.id).remove()

