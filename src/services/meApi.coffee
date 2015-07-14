angular.module("speedy.api")

  .service "meApi", (Restangular, ApiService) ->

    new class MeApi extends ApiService

      get: (data) ->
        Restangular.one("admin").one("companies", @company.id).one("me").get()

      update: (data) ->
        if angular.isArray(data.avatar) and data.avatar[0]
          @requestWithImage(url: "admin/companies/#{ @company.id }/me", method: "PATCH", data: data, key: "employee", imgKeys: ["avatar"], extraKeys: ["name", "phone", "cellphone", "birth_date"])
        else
          Restangular.one("admin").one("companies", @company.id).one("me").patch(employee: data)



