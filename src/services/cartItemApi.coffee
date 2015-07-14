angular.module("speedy.api")

  .factory "cartItemApi", (Restangular, ApiService) ->

    new class CartItemApi extends ApiService

      #
      # Adiciona produto no carrinho
      create: (cart, cartItem) ->
        Restangular.one("companies", @company.id).one("stores", @store.id).one("carts", cart.id).post("cart_items", cart_item: cartItem)

      #
      #
      update: (cart, cartItem) ->
        Restangular.one("companies", @company.id).one("stores", @store.id).one("carts", cart.id).one("cart_items", cartItem.id).patch(cart_item: cartItem)

      #
      # Remove um produto do carrinho
      remove: (cart, cartItem) ->
        Restangular.one("companies", @company.id).one("stores", @store.id).one("carts", cart.id).one("cart_items", cartItem.id).remove()