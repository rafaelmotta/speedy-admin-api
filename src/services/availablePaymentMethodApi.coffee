angular.module("speedy.api")

  .factory "availablePaymentMethodApi", (Restangular, ApiService) ->

    new class AvailablePaymentMethodApi extends ApiService

      get: ->
        Restangular.one("admin").one("companies", @company.id).one("stores", @store.id).one("available_payment_methods").get()

