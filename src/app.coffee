angular.module("speedy.api", ['Restangular'])
  .config (RestangularProvider) ->
    RestangularProvider.setBaseUrl("http://speedy.com.br")


# angular.module("speedy.api", [])

#  .provider("api", ->
#     configuration = {
#       baseUrl: "http://speedy.com.br"
#     }

#     return {
#       setKey: (url) ->
#         configuration.baseUrl = (url)

#       $get: ->
#         return {

#         }
#     }
#   )
