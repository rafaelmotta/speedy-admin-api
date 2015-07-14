angular.module("speedy.api")

  .factory "trackApi", (Restangular, ApiService) ->

    new class trackApi extends ApiService

      get: ->
        Restangular.one("admin").one("companies", @company.id).one("stores", @store.id).one("tracks").get()

      update: (tracks) ->
        Restangular.one("admin").one("companies", @company.id).one("stores", @store.id).one("tracks", tracks.id).patch(track: tracks)



