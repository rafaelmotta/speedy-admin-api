angular.module("speedy.api")

  .factory "costumerApi", (Restangular, ApiService) ->

    new class costumerApi extends ApiService

      #
      #
      get: (search = {}, queryParams = "?") ->
        _.each(search, (v, k) -> queryParams += "#{ k }=#{ v }&" )
        queryParams = queryParams.substring(0, queryParams.length - 1)

        Restangular.one("admin/costumers#{ queryParams }").get()

      # #
      # #
      # findOne: (costumer) ->
      #   Restangular.one("stores", @store.id).one("costumers/#{ costumer.id }").get()

      # #
      # #
      # #
      # create: (costumer) ->
      #   Restangular.one("stores", @store.id).post("costumers", costumer)

      # #
      # #
      # #
      # update: (costumer) ->
      #   Restangular.one("stores", @store.id).one("costumers/#{ costumer.id }").patch(costumer)


      # #
      # #
      # destroy: (costumer) ->
      #   Restangular.one("stores", @store.id).one("costumers/#{ costumer.id }").remove()




