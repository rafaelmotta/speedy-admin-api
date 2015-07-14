angular.module("speedy.api")

  .factory "messageApi", (Restangular, ApiService) ->

    new class messageApi extends ApiService

      get: () ->
        Restangular.one("admin").one("companies", @company.id).one("stores", @store.id).one("messages").get()

      update: (messages) ->
        Restangular.one("admin").one("companies", @company.id).one("stores", @store.id).one("messages", messages.id).patch(message: messages)


