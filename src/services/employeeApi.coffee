angular.module("speedy.api")

  .factory "employeeApi", (ApiService, Restangular) ->

    new class EmployeeApi extends ApiService

      get: (params = {}) ->
        @createQueryParams(params).then( (queryParams) =>
          Restangular.one("admin").one("companies", @company.id).one("stores", @store.id).one("employees#{ queryParams }").get()
        )

      getRoles: ->
        Restangular.one("admin").one("companies", @company.id).one("stores", @store.id).one("employees").one("roles").get()

      # show: (data) ->
      #   Restangular.one("stores", @store.id).one("employees", employee.id).get()

      create: (data) ->
        Restangular.one("admin").one("companies", @company.id).one("stores", @store.id).post("employees", employee: data)

      #   Restangular.one("stores", @store.id).post("employees", employee: data)

      # update: (data) ->
      #   Restangular.one("stores", @store.id).one("employees", employee.id).patch(employee: data)

      # destroy: (data) ->
      #   Restangular.one("stores", @store.id).one("employees", employee.id).remove()
