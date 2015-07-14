angular.module("speedy.api")

  .factory "ShoppingListAddonService", (ApiService, Restangular) ->

    class ShoppingListAddonService extends ApiService

      update: (shoppingList, shoppingListAddon) ->
        Restangular.one("stores", @store.id).one("shopping_lists/#{ shoppingList.id }/shopping_list_addons/#{ shoppingListAddon.id }").patch(shopping_list_addon: shoppingListAddon)

