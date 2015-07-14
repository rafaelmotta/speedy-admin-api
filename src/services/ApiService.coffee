angular.module("speedy.api")

  .factory "ApiService", ($rootScope, $q, constants, Upload) ->

    class ApiService

      constructor: (params) ->
        @company = $rootScope.currentCompany
        @store = $rootScope.currentStore
        @

      requestWithImage: (params) ->
        $q( (resolve, reject) ->
          fields = {}

          for k in params.extraKeys
            fields["#{ params.key }[#{k}]"] = params.data[k]

          Upload.upload(
            url: "#{ constants.baseUrl }/#{ params.url }"
            method: params.method
            file: params.data[params.imgKeys[0]][0]
            fileFormDataName: "#{ params.key }[#{ params.imgKeys[0] }]"
            fields: fields
          ).success( (data) =>
            resolve(data)
          ).error( (args...) =>
            reject(args)
          )
        )

