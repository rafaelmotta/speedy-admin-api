angular.module("speedy.api")

  .factory "shoppingListsApi", (Restangular, ApiService) ->

    class ShoppingListsApi extends ApiService


      # #
      # #
      # findAll: ->
      #   Restangular.one("stores", @store.id).one("shopping_lists").get()

      # #
      # #
      # find: () ->
      #   Restangular.one("stores", @store.id).one("shopping_lists/find").get(queryParams)

      # #
      # #
      # findOne: (shoppingList) ->
      #   Restangular.one("stores", @store.id).one("shopping_lists/#{ shoppingList.id }").get()

      # #
      # #
      # create: (shoppingList) ->
      #   Restangular.one("stores", @store.id).post("shopping_lists", shopping_list: shoppingList)

      # #
      # #
      # update: (shoppingList) ->
      #   Restangular.one("stores", @store.id).patch("shopping_lists", shopping_list: shoppingList)

      # #
      # #
      # destroy: (shoppingList) ->
      #   Restangular.one("stores", @store.id).one("shopping_lists/#{ shoppingList.id }").remove()
