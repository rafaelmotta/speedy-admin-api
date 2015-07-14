angular.module("speedy.api")

  .factory "pauseApi", (Restangular, ApiService) ->

    new class PauseApi extends ApiService

      #
      # Pausa loja
      # @param data - { Object } - Objeto a ser salvo
      create: (data) ->
        Restangular.one("admin").one("companies", @company.id).one("stores", @store.id).post("pauses", pause: data)

      #
      # Despausa uma loja
      # @param data - { Object } - Objeto pause
      destroy: (data) ->
        Restangular.one("admin").one("companies", @company.id).one("stores", @store.id).one("pauses", data.id).remove()