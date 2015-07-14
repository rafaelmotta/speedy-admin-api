angular.module("speedy.api")

  .factory "cartApi", (Restangular, ApiService) ->

    new class CartApi extends ApiService

      new: ->
        Restangular.one("companies", @company.id).one("stores", @store.id).one("carts/new").get()

      show: (cart) ->
        Restangular.one("companies", @company.id).one("stores", @store.id).one("carts", cart.id).get()