angular.module("speedy.api")

  .factory "DeviseApi", ($rootScope) ->

    class DeviseService

      constructor: (params) ->
        @employeeDeviseBaseUrl = "admin/employee/sessions"