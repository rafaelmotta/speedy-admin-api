angular.module("speedy.api")

  .factory "pauseReasonsApi", (ApiService, Restangular) ->

    new class PauseReasonsApi

      get: ->
        Restangular.one("admin/pause_reasons").get()




