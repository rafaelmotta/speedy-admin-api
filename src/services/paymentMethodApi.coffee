angular.module("speedy.api")

  .factory "paymentMethodApi", (Restangular, ApiService) ->

    new class paymentMethodApi extends ApiService

      get: ->
        Restangular.one("admin").one("companies", @company.id).one("stores", @store.id).one("payment_methods").get()

      create: (aPaymentMethod) ->
        Restangular.one("admin").one("companies", @company.id).one("stores", @store.id).one("payment_methods", aPaymentMethod.id).put()

      destroy: (paymentMethod) ->
        Restangular.one("admin").one("companies", @company.id).one("stores", @store.id).one("payment_methods", paymentMethod.id).remove()
