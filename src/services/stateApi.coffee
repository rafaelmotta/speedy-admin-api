angular.module("speedy.api")

  .factory "stateApi", (Restangular) ->

    new class stateApi

      get: ->
        Restangular.one("states").getList()

