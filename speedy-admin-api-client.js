angular.module("speedy.api", ['Restangular']).config(function(RestangularProvider) {
  return RestangularProvider.setBaseUrl("http://speedy.com.br");
});

var slice = [].slice;

angular.module("speedy.api").factory("ApiService", function($rootScope, $q, constants, Upload) {
  var ApiService;
  return ApiService = (function() {
    function ApiService(params) {
      this.company = $rootScope.currentCompany;
      this.store = $rootScope.currentStore;
      this;
    }

    ApiService.prototype.requestWithImage = function(params) {
      return $q(function(resolve, reject) {
        var fields, i, k, len, ref;
        fields = {};
        ref = params.extraKeys;
        for (i = 0, len = ref.length; i < len; i++) {
          k = ref[i];
          fields[params.key + "[" + k + "]"] = params.data[k];
        }
        return Upload.upload({
          url: constants.baseUrl + "/" + params.url,
          method: params.method,
          file: params.data[params.imgKeys[0]][0],
          fileFormDataName: params.key + "[" + params.imgKeys[0] + "]",
          fields: fields
        }).success((function(_this) {
          return function(data) {
            return resolve(data);
          };
        })(this)).error((function(_this) {
          return function() {
            var args;
            args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            return reject(args);
          };
        })(this));
      });
    };

    return ApiService;

  })();
});

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

angular.module("speedy.api").factory("availableOrderTypeApi", function(Restangular, ApiService) {
  var AvailableOrderTypeApi;
  return new (AvailableOrderTypeApi = (function(superClass) {
    extend(AvailableOrderTypeApi, superClass);

    function AvailableOrderTypeApi() {
      return AvailableOrderTypeApi.__super__.constructor.apply(this, arguments);
    }

    AvailableOrderTypeApi.prototype.get = function() {
      return Restangular.one("admin").one("companies", this.company.id).one("stores", this.store.id).one("available_order_types").get();
    };

    return AvailableOrderTypeApi;

  })(ApiService));
});

angular.module("speedy.api").factory("DeviseApi", function($rootScope) {
  var DeviseService;
  return DeviseService = (function() {
    function DeviseService(params) {
      this.employeeDeviseBaseUrl = "admin/employee/sessions";
    }

    return DeviseService;

  })();
});

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

angular.module("speedy.api").service("orderApi", function(Restangular, ApiService) {
  var OrderApi;
  return new (OrderApi = (function(superClass) {
    extend(OrderApi, superClass);

    function OrderApi() {
      return OrderApi.__super__.constructor.apply(this, arguments);
    }

    OrderApi.prototype.get = function() {
      return Restangular.one("admin").one("companies", this.company.id).one("stores", this.store.id).one("orders").getList();
    };

    OrderApi.prototype.show = function(order) {
      return Restangular.one("admin").one("companies", this.company.id).one("stores", this.store.id).one("orders", order.id).get();
    };

    OrderApi.prototype.getStatusCount = function() {
      return Restangular.one("admin").one("companies", this.company.id).one("stores", this.store.id).one("orders/status_count").getList();
    };

    OrderApi.prototype.getStatuses = function() {
      return Restangular.one("admin").one("companies", this.company.id).one("stores", this.store.id).one("orders/statuses").getList();
    };

    OrderApi.prototype.create = function(order) {
      var _order;
      _order = {
        cart_id: order.cart.id,
        payment_method_id: order.paymentMethod.id,
        order_type_id: order.orderType.id,
        note: order.note || null,
        change: order.change || null
      };
      _order.costumer_id = order.costumer && order.costumer.id ? order.costumer.id : null;
      _order.address_id = order.address && order.address.id ? order.address.id : null;
      return Restangular.one("admin").one("companies", this.company.id).one("stores", this.store.id).post("orders", {
        order: _order
      });
    };

    OrderApi.prototype.update = function(order) {
      return Restangular.one("admin").one("companies", this.company.id).one("stores", this.store.id).one("orders", order.id).patch({
        order: order
      });
    };

    return OrderApi;

  })(ApiService));
});

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

angular.module("speedy.api").factory("ShoppingListAddonService", function(ApiService, Restangular) {
  var ShoppingListAddonService;
  return ShoppingListAddonService = (function(superClass) {
    extend(ShoppingListAddonService, superClass);

    function ShoppingListAddonService() {
      return ShoppingListAddonService.__super__.constructor.apply(this, arguments);
    }

    ShoppingListAddonService.prototype.update = function(shoppingList, shoppingListAddon) {
      return Restangular.one("stores", this.store.id).one("shopping_lists/" + shoppingList.id + "/shopping_list_addons/" + shoppingListAddon.id).patch({
        shopping_list_addon: shoppingListAddon
      });
    };

    return ShoppingListAddonService;

  })(ApiService);
});

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

angular.module("speedy.api").service("addressApi", function(Restangular, ApiService) {
  var addressApi;
  return new (addressApi = (function(superClass) {
    extend(addressApi, superClass);

    function addressApi() {
      return addressApi.__super__.constructor.apply(this, arguments);
    }

    addressApi.prototype.get = function() {
      return Restangular.one("admin").one("companies", this.company.id).one("stores", this.store.id).one("addresses").get();
    };

    addressApi.prototype.update = function(address) {
      return Restangular.one("admin").one("companies", this.company.id).one("stores", this.store.id).one("addresses", address.id).patch({
        address: address
      });
    };

    return addressApi;

  })(ApiService));
});

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

angular.module("speedy.api").factory("availableCityOperationApi", function(ApiService, Restangular) {
  var AvailableCityOperationApi;
  return new (AvailableCityOperationApi = (function(superClass) {
    extend(AvailableCityOperationApi, superClass);

    function AvailableCityOperationApi() {
      return AvailableCityOperationApi.__super__.constructor.apply(this, arguments);
    }

    AvailableCityOperationApi.prototype.get = function(state) {
      return Restangular.one("admin").one("companies", this.company.id).one("stores", this.store.id).one("available_city_operations", state.id).get();
    };

    return AvailableCityOperationApi;

  })(ApiService));
});

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

angular.module("speedy.api").factory("availableDeliveryAreaApi", function(ApiService, Restangular) {
  var AvailableDeliveryAreaApi;
  return new (AvailableDeliveryAreaApi = (function(superClass) {
    extend(AvailableDeliveryAreaApi, superClass);

    function AvailableDeliveryAreaApi() {
      return AvailableDeliveryAreaApi.__super__.constructor.apply(this, arguments);
    }

    AvailableDeliveryAreaApi.prototype.get = function(city) {
      return Restangular.one("admin").one("companies", this.company.id).one("stores", this.store.id).one("city_operations", city.id).one("available_delivery_areas").getList();
    };

    return AvailableDeliveryAreaApi;

  })(ApiService));
});

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

angular.module("speedy.api").factory("availablePaymentMethodApi", function(Restangular, ApiService) {
  var AvailablePaymentMethodApi;
  return new (AvailablePaymentMethodApi = (function(superClass) {
    extend(AvailablePaymentMethodApi, superClass);

    function AvailablePaymentMethodApi() {
      return AvailablePaymentMethodApi.__super__.constructor.apply(this, arguments);
    }

    AvailablePaymentMethodApi.prototype.get = function() {
      return Restangular.one("admin").one("companies", this.company.id).one("stores", this.store.id).one("available_payment_methods").get();
    };

    return AvailablePaymentMethodApi;

  })(ApiService));
});

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

angular.module("speedy.api").factory("businessHourApi", function(Restangular, ApiService) {
  var businessHourApi;
  return new (businessHourApi = (function(superClass) {
    extend(businessHourApi, superClass);

    function businessHourApi() {
      return businessHourApi.__super__.constructor.apply(this, arguments);
    }

    businessHourApi.prototype.get = function() {
      return Restangular.one("admin").one("companies", this.company.id).one("stores", this.store.id).one("business_hours").get();
    };

    businessHourApi.prototype.create = function(businessHour) {
      return Restangular.one("admin").one("companies", this.company.id).one("stores", this.store.id).post("business_hours", {
        business_hour: businessHour
      });
    };

    businessHourApi.prototype.update = function(businessHour) {
      return Restangular.one("admin").one("companies", this.company.id).one("stores", this.store.id).one("business_hours", businessHour.id).patch({
        business_hour: businessHour
      });
    };

    businessHourApi.prototype.destroy = function(businessHour) {
      return Restangular.one("admin").one("companies", this.company.id).one("stores", this.store.id).one("business_hours", businessHour.id).remove();
    };

    return businessHourApi;

  })(ApiService));
});

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

angular.module("speedy.api").factory("cartApi", function(Restangular, ApiService) {
  var CartApi;
  return new (CartApi = (function(superClass) {
    extend(CartApi, superClass);

    function CartApi() {
      return CartApi.__super__.constructor.apply(this, arguments);
    }

    CartApi.prototype["new"] = function() {
      return Restangular.one("companies", this.company.id).one("stores", this.store.id).one("carts/new").get();
    };

    CartApi.prototype.show = function(cart) {
      return Restangular.one("companies", this.company.id).one("stores", this.store.id).one("carts", cart.id).get();
    };

    return CartApi;

  })(ApiService));
});

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

angular.module("speedy.api").factory("cartItemApi", function(Restangular, ApiService) {
  var CartItemApi;
  return new (CartItemApi = (function(superClass) {
    extend(CartItemApi, superClass);

    function CartItemApi() {
      return CartItemApi.__super__.constructor.apply(this, arguments);
    }

    CartItemApi.prototype.create = function(cart, cartItem) {
      return Restangular.one("companies", this.company.id).one("stores", this.store.id).one("carts", cart.id).post("cart_items", {
        cart_item: cartItem
      });
    };

    CartItemApi.prototype.update = function(cart, cartItem) {
      return Restangular.one("companies", this.company.id).one("stores", this.store.id).one("carts", cart.id).one("cart_items", cartItem.id).patch({
        cart_item: cartItem
      });
    };

    CartItemApi.prototype.remove = function(cart, cartItem) {
      return Restangular.one("companies", this.company.id).one("stores", this.store.id).one("carts", cart.id).one("cart_items", cartItem.id).remove();
    };

    return CartItemApi;

  })(ApiService));
});

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

angular.module("speedy.api").factory("cityOperationApi", function(Restangular, ApiService) {
  var CityOperationApi;
  return new (CityOperationApi = (function(superClass) {
    extend(CityOperationApi, superClass);

    function CityOperationApi() {
      return CityOperationApi.__super__.constructor.apply(this, arguments);
    }

    CityOperationApi.prototype.get = function() {
      return Restangular.one("admin").one("companies", this.company.id).one("stores", this.store.id).one("city_operations").get();
    };

    CityOperationApi.prototype.create = function(cityOperation) {
      return Restangular.one("admin").one("companies", this.company.id).one("stores", this.store.id).one("city_operations", cityOperation.id).put();
    };

    CityOperationApi.prototype.destroy = function(cityOperation) {
      return Restangular.one("admin").one("companies", this.company.id).one("stores", this.store.id).one("city_operations", cityOperation.id).remove();
    };

    return CityOperationApi;

  })(ApiService));
});

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

angular.module("speedy.api").factory("costumerApi", function(Restangular, ApiService) {
  var costumerApi;
  return new (costumerApi = (function(superClass) {
    extend(costumerApi, superClass);

    function costumerApi() {
      return costumerApi.__super__.constructor.apply(this, arguments);
    }

    costumerApi.prototype.get = function(search, queryParams) {
      if (search == null) {
        search = {};
      }
      if (queryParams == null) {
        queryParams = "?";
      }
      _.each(search, function(v, k) {
        return queryParams += k + "=" + v + "&";
      });
      queryParams = queryParams.substring(0, queryParams.length - 1);
      return Restangular.one("admin/costumers" + queryParams).get();
    };

    return costumerApi;

  })(ApiService));
});

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

angular.module("speedy.api").factory("deliveryAreaApi", function(ApiService, Restangular) {
  var DeliveryAreaApi;
  return new (DeliveryAreaApi = (function(superClass) {
    extend(DeliveryAreaApi, superClass);

    function DeliveryAreaApi() {
      return DeliveryAreaApi.__super__.constructor.apply(this, arguments);
    }

    DeliveryAreaApi.prototype.get = function() {
      return Restangular.one("admin").one("companies", this.company.id).one("stores", this.store.id).one("delivery_areas").getList();
    };

    DeliveryAreaApi.prototype.create = function(cityOperation, deliveryArea) {
      return Restangular.one("admin").one("companies", this.company.id).one("stores", this.store.id).one("city_operations", cityOperation.id).post("delivery_areas", {
        delivery_area: deliveryArea
      });
    };

    DeliveryAreaApi.prototype.update = function(cityOperation, deliveryArea) {
      return Restangular.one("admin").one("companies", this.company.id).one("stores", this.store.id).one("city_operations", cityOperation.id).one("delivery_areas", deliveryArea.id).patch({
        delivery_area: deliveryArea
      });
    };

    DeliveryAreaApi.prototype.destroy = function(cityOperation, deliveryArea) {
      return Restangular.one("admin").one("companies", this.company.id).one("stores", this.store.id).one("city_operations", cityOperation.id).one("delivery_areas", deliveryArea.id).remove();
    };

    return DeliveryAreaApi;

  })(ApiService));
});

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

angular.module("speedy.api").factory("employeeApi", function(ApiService, Restangular) {
  var EmployeeApi;
  return new (EmployeeApi = (function(superClass) {
    extend(EmployeeApi, superClass);

    function EmployeeApi() {
      return EmployeeApi.__super__.constructor.apply(this, arguments);
    }

    EmployeeApi.prototype.get = function(params) {
      if (params == null) {
        params = {};
      }
      return this.createQueryParams(params).then((function(_this) {
        return function(queryParams) {
          return Restangular.one("admin").one("companies", _this.company.id).one("stores", _this.store.id).one("employees" + queryParams).get();
        };
      })(this));
    };

    EmployeeApi.prototype.getRoles = function() {
      return Restangular.one("admin").one("companies", this.company.id).one("stores", this.store.id).one("employees").one("roles").get();
    };

    EmployeeApi.prototype.create = function(data) {
      return Restangular.one("admin").one("companies", this.company.id).one("stores", this.store.id).post("employees", {
        employee: data
      });
    };

    return EmployeeApi;

  })(ApiService));
});

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

angular.module("speedy.api").service("meApi", function(Restangular, ApiService) {
  var MeApi;
  return new (MeApi = (function(superClass) {
    extend(MeApi, superClass);

    function MeApi() {
      return MeApi.__super__.constructor.apply(this, arguments);
    }

    MeApi.prototype.get = function(data) {
      return Restangular.one("admin").one("companies", this.company.id).one("me").get();
    };

    MeApi.prototype.update = function(data) {
      if (angular.isArray(data.avatar) && data.avatar[0]) {
        return this.requestWithImage({
          url: "admin/companies/" + this.company.id + "/me",
          method: "PATCH",
          data: data,
          key: "employee",
          imgKeys: ["avatar"],
          extraKeys: ["name", "phone", "cellphone", "birth_date"]
        });
      } else {
        return Restangular.one("admin").one("companies", this.company.id).one("me").patch({
          employee: data
        });
      }
    };

    return MeApi;

  })(ApiService));
});

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

angular.module("speedy.api").factory("menuApi", function(Restangular, ApiService) {
  var menuApi;
  return new (menuApi = (function(superClass) {
    extend(menuApi, superClass);

    function menuApi() {
      return menuApi.__super__.constructor.apply(this, arguments);
    }

    menuApi.prototype.get = function(params) {
      var queryParams;
      if (params == null) {
        params = {};
      }
      queryParams = params.hideCategories ? {
        hide_categories: true
      } : {};
      return Restangular.one("companies", this.company.id).one("stores", this.store.id).one("menu").get(queryParams);
    };

    return menuApi;

  })(ApiService));
});

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

angular.module("speedy.api").factory("messageApi", function(Restangular, ApiService) {
  var messageApi;
  return new (messageApi = (function(superClass) {
    extend(messageApi, superClass);

    function messageApi() {
      return messageApi.__super__.constructor.apply(this, arguments);
    }

    messageApi.prototype.get = function() {
      return Restangular.one("admin").one("companies", this.company.id).one("stores", this.store.id).one("messages").get();
    };

    messageApi.prototype.update = function(messages) {
      return Restangular.one("admin").one("companies", this.company.id).one("stores", this.store.id).one("messages", messages.id).patch({
        message: messages
      });
    };

    return messageApi;

  })(ApiService));
});

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

angular.module("speedy.api").factory("orderTypeApi", function(Restangular, ApiService) {
  var orderTypeApi;
  return new (orderTypeApi = (function(superClass) {
    extend(orderTypeApi, superClass);

    function orderTypeApi() {
      return orderTypeApi.__super__.constructor.apply(this, arguments);
    }

    orderTypeApi.prototype.get = function(params) {
      if (params == null) {
        params = {};
      }
      return this.createQueryParams(params).then((function(_this) {
        return function(queryParams) {
          return Restangular.one("admin").one("companies", _this.company.id).one("stores", _this.store.id).one("order_types" + queryParams).get();
        };
      })(this));
    };

    orderTypeApi.prototype.create = function(availableOrderType) {
      return Restangular.one("admin").one("companies", this.company.id).one("stores", this.store.id).one("order_types", availableOrderType.id).put();
    };

    orderTypeApi.prototype.destroy = function(orderType) {
      return Restangular.one("admin").one("companies", this.company.id).one("stores", this.store.id).one("order_types", orderType.id).remove();
    };

    return orderTypeApi;

  })(ApiService));
});

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

angular.module("speedy.api").factory("pauseApi", function(Restangular, ApiService) {
  var PauseApi;
  return new (PauseApi = (function(superClass) {
    extend(PauseApi, superClass);

    function PauseApi() {
      return PauseApi.__super__.constructor.apply(this, arguments);
    }

    PauseApi.prototype.create = function(data) {
      return Restangular.one("admin").one("companies", this.company.id).one("stores", this.store.id).post("pauses", {
        pause: data
      });
    };

    PauseApi.prototype.destroy = function(data) {
      return Restangular.one("admin").one("companies", this.company.id).one("stores", this.store.id).one("pauses", data.id).remove();
    };

    return PauseApi;

  })(ApiService));
});

angular.module("speedy.api").factory("pauseReasonsApi", function(ApiService, Restangular) {
  var PauseReasonsApi;
  return new (PauseReasonsApi = (function() {
    function PauseReasonsApi() {}

    PauseReasonsApi.prototype.get = function() {
      return Restangular.one("admin/pause_reasons").get();
    };

    return PauseReasonsApi;

  })());
});

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

angular.module("speedy.api").factory("paymentMethodApi", function(Restangular, ApiService) {
  var paymentMethodApi;
  return new (paymentMethodApi = (function(superClass) {
    extend(paymentMethodApi, superClass);

    function paymentMethodApi() {
      return paymentMethodApi.__super__.constructor.apply(this, arguments);
    }

    paymentMethodApi.prototype.get = function() {
      return Restangular.one("admin").one("companies", this.company.id).one("stores", this.store.id).one("payment_methods").get();
    };

    paymentMethodApi.prototype.create = function(aPaymentMethod) {
      return Restangular.one("admin").one("companies", this.company.id).one("stores", this.store.id).one("payment_methods", aPaymentMethod.id).put();
    };

    paymentMethodApi.prototype.destroy = function(paymentMethod) {
      return Restangular.one("admin").one("companies", this.company.id).one("stores", this.store.id).one("payment_methods", paymentMethod.id).remove();
    };

    return paymentMethodApi;

  })(ApiService));
});

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

angular.module("speedy.api").factory("productCategoryApi", function(ApiService, Restangular) {
  var productCategoryApi;
  return new (productCategoryApi = (function(superClass) {
    extend(productCategoryApi, superClass);

    function productCategoryApi() {
      return productCategoryApi.__super__.constructor.apply(this, arguments);
    }

    productCategoryApi.prototype.get = function() {
      return Restangular.one("admin").one("companies", this.company.id).one("stores", this.store.id).one("product_categories").get();
    };

    productCategoryApi.prototype.show = function(category) {
      return Restangular.one("admin").one("companies", this.company.id).one("stores", this.store.id).one("product_categories", category.id).get();
    };

    return productCategoryApi;

  })(ApiService));
});

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

angular.module("speedy.api").factory("sessionApi", function(Restangular, DeviseApi) {
  var sessionApi;
  return new (sessionApi = (function(superClass) {
    extend(sessionApi, superClass);

    function sessionApi() {
      return sessionApi.__super__.constructor.apply(this, arguments);
    }

    sessionApi.prototype.signinWithEmail = function(data) {
      return Restangular.service(this.employeeDeviseBaseUrl + "/sign_in").post({
        employee: data
      });
    };

    return sessionApi;

  })(DeviseApi));
});

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

angular.module("speedy.api").factory("shoppingListsApi", function(Restangular, ApiService) {
  var ShoppingListsApi;
  return ShoppingListsApi = (function(superClass) {
    extend(ShoppingListsApi, superClass);

    function ShoppingListsApi() {
      return ShoppingListsApi.__super__.constructor.apply(this, arguments);
    }

    return ShoppingListsApi;

  })(ApiService);
});

angular.module("speedy.api").factory("stateApi", function(Restangular) {
  var stateApi;
  return new (stateApi = (function() {
    function stateApi() {}

    stateApi.prototype.get = function() {
      return Restangular.one("states").getList();
    };

    return stateApi;

  })());
});

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

angular.module("speedy.api").factory("storeAddonApi", function(Restangular, ApiService) {
  var storeAddonApi;
  return new (storeAddonApi = (function(superClass) {
    extend(storeAddonApi, superClass);

    function storeAddonApi() {
      return storeAddonApi.__super__.constructor.apply(this, arguments);
    }

    storeAddonApi.prototype.show = function(storeAddon) {
      return Restangular.one("admin").one("companies", this.company.id).one("stores", this.store.id).one("store_addons", storeAddon.id).get();
    };

    storeAddonApi.prototype.update = function(storeAddon) {
      return Restangular.one("admin").one("companies", this.company.id).one("stores", this.store.id).one("store_addons", storeAddon.id).patch({
        store_addon: storeAddon
      });
    };

    storeAddonApi.prototype.destroy = function(storeAddon) {
      return Restangular.one("admin").one("companies", this.company.id).one("stores", this.store.id).one("store_addons", storeAddon.id).remove();
    };

    return storeAddonApi;

  })(ApiService));
});

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

angular.module("speedy.api").factory("storeAddonCategoryApi", function(Restangular, ApiService) {
  var storeAddonCategoryApi;
  return new (storeAddonCategoryApi = (function(superClass) {
    extend(storeAddonCategoryApi, superClass);

    function storeAddonCategoryApi() {
      return storeAddonCategoryApi.__super__.constructor.apply(this, arguments);
    }

    storeAddonCategoryApi.prototype.get = function() {
      return Restangular.one("admin").one("companies", this.company.id).one("stores", this.store.id).one("addon_categories").get();
    };

    return storeAddonCategoryApi;

  })(ApiService));
});

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

angular.module("speedy.api").factory("storeApi", function(Restangular, ApiService) {
  var StoreApi;
  return new (StoreApi = (function(superClass) {
    extend(StoreApi, superClass);

    function StoreApi() {
      return StoreApi.__super__.constructor.apply(this, arguments);
    }

    StoreApi.prototype.get = function(store) {
      return Restangular.one("admin").one("companies", this.company.id).one("stores", this.store.id).get();
    };

    StoreApi.prototype.update = function(store) {
      return Restangular.one("admin").one("companies", this.company.id).one("stores", this.store.id).patch({
        store: store
      });
    };

    return StoreApi;

  })(ApiService));
});

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

angular.module("speedy.api").factory("storeProductApi", function(Restangular, ApiService) {
  var storeProductApi;
  return new (storeProductApi = (function(superClass) {
    extend(storeProductApi, superClass);

    function storeProductApi() {
      return storeProductApi.__super__.constructor.apply(this, arguments);
    }

    storeProductApi.prototype.show = function(storeProduct) {
      return Restangular.one("admin").one("companies", this.company.id).one("stores", this.store.id).one("store_products", storeProduct.id).get();
    };

    storeProductApi.prototype.update = function(storeProduct) {
      return Restangular.one("admin").one("companies", this.company.id).one("stores", this.store.id).one("store_products", storeProduct.id).patch({
        store_product: storeProduct
      });
    };

    storeProductApi.prototype.destroy = function(storeProduct) {
      return Restangular.one("admin").one("companies", this.company.id).one("stores", this.store.id).one("store_products", storeProduct.id).remove();
    };

    return storeProductApi;

  })(ApiService));
});

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

angular.module("speedy.api").factory("trackApi", function(Restangular, ApiService) {
  var trackApi;
  return new (trackApi = (function(superClass) {
    extend(trackApi, superClass);

    function trackApi() {
      return trackApi.__super__.constructor.apply(this, arguments);
    }

    trackApi.prototype.get = function() {
      return Restangular.one("admin").one("companies", this.company.id).one("stores", this.store.id).one("tracks").get();
    };

    trackApi.prototype.update = function(tracks) {
      return Restangular.one("admin").one("companies", this.company.id).one("stores", this.store.id).one("tracks", tracks.id).patch({
        track: tracks
      });
    };

    return trackApi;

  })(ApiService));
});

angular.module("speedy.api").factory("zipcodeApi", function($rootScope, Restangular) {
  return {
    get: function(zipcode, number) {
      if (number == null) {
        number = null;
      }
      return Restangular.one("zipcode").get({
        zipcode: zipcode,
        number: number
      });
    }
  };
});
