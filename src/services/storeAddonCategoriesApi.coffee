angular.module("speedy.api")

  .factory "storeAddonCategoryApi", (Restangular, ApiService) ->

    new class storeAddonCategoryApi extends ApiService

      get: ->
        Restangular.one("admin").one("companies", @company.id).one("stores", @store.id).one("addon_categories").get()

