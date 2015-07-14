angular.module("speedy.api")

  .factory "productCategoryApi", (ApiService, Restangular) ->

    new class productCategoryApi extends ApiService

      get: ->
        Restangular.one("admin").one("companies", @company.id).one("stores", @store.id).one("product_categories").get()

      show: (category) ->
        Restangular.one("admin").one("companies", @company.id).one("stores", @store.id).one("product_categories", category.id).get()


