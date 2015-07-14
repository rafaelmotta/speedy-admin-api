angular.module("speedy.api")

  .factory "menuApi", (Restangular, ApiService) ->

    new class menuApi extends ApiService

      get: (params = {}) ->
        queryParams = if params.hideCategories then { hide_categories: true } else { }

        Restangular.one("companies", @company.id).one("stores", @store.id).one("menu").get(queryParams)




