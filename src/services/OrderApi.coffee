angular.module("speedy.api")

  .service "orderApi", (Restangular, ApiService) ->

    new class OrderApi extends ApiService

      get: ->
        Restangular.one("admin").one("companies", @company.id).one("stores", @store.id).one("orders").getList()

      show: (order) ->
        Restangular.one("admin").one("companies", @company.id).one("stores", @store.id).one("orders", order.id).get()

      getStatusCount: ->
        Restangular.one("admin").one("companies", @company.id).one("stores", @store.id).one("orders/status_count").getList()

      getStatuses: ->
        Restangular.one("admin").one("companies", @company.id).one("stores", @store.id).one("orders/statuses").getList()

      create: (order) ->
        _order = {
          cart_id: order.cart.id
          payment_method_id: order.paymentMethod.id
          order_type_id: order.orderType.id
          note: order.note || null
          change: order.change || null
        }

        _order.costumer_id = if order.costumer and order.costumer.id then order.costumer.id else null
        _order.address_id =  if order.address  and order.address.id  then order.address.id  else null

        Restangular.one("admin").one("companies", @company.id).one("stores", @store.id).post("orders", order: _order)

      update: (order) ->
        Restangular.one("admin").one("companies", @company.id).one("stores", @store.id).one("orders", order.id).patch(order: order)