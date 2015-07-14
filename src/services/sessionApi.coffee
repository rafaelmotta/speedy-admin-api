angular.module("speedy.api")

  .factory "sessionApi", (Restangular, DeviseApi) ->

    new class sessionApi extends DeviseApi

      #
      # Realiza autenticação do cliente usando o email e senha
      # @param data - { Object } - Contem o email e senha do cliente
      signinWithEmail: (data) ->
        Restangular.service("#{ @employeeDeviseBaseUrl }/sign_in").post(employee: data)