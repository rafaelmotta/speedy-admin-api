angular.module("speedy.api")

  .factory "businessHourApi", (Restangular, ApiService) ->

    new class businessHourApi extends ApiService

      get: ->
        Restangular.one("admin").one("companies", @company.id).one("stores", @store.id).one("business_hours").get()

      create: (businessHour) ->
        Restangular.one("admin").one("companies", @company.id).one("stores", @store.id).post("business_hours", business_hour: businessHour)

      update: (businessHour) ->
        Restangular.one("admin").one("companies", @company.id).one("stores", @store.id).one("business_hours", businessHour.id).patch(business_hour: businessHour)

      destroy: (businessHour) ->
        Restangular.one("admin").one("companies", @company.id).one("stores", @store.id).one("business_hours", businessHour.id).remove()



