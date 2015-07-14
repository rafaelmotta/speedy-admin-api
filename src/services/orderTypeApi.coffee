angular.module("speedy.api")

  .factory "orderTypeApi", (Restangular, ApiService) ->

    new class orderTypeApi extends ApiService

      get: (params = {}) ->
        @createQueryParams(params).then( (queryParams) =>
          Restangular.one("admin").one("companies", @company.id).one("stores", @store.id).one("order_types#{ queryParams }").get()
        )

      create: (availableOrderType) ->
        Restangular.one("admin").one("companies", @company.id).one("stores", @store.id).one("order_types", availableOrderType.id).put()

      destroy: (orderType) ->
        Restangular.one("admin").one("companies", @company.id).one("stores", @store.id).one("order_types", orderType.id).remove()

