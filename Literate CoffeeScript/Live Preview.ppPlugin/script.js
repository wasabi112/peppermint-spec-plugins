// Generated by CoffeeScript 1.8.0
var LitcoffeeLivePreview,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

LitcoffeeLivePreview = (function(_super) {
  __extends(LitcoffeeLivePreview, _super);

  function LitcoffeeLivePreview() {
    return LitcoffeeLivePreview.__super__.constructor.apply(this, arguments);
  }

  LitcoffeeLivePreview.prototype.loadPreview = function(theme) {
    var html;
    if (theme == null) {
      theme = null;
    }
    if (theme != null) {
      this.theme = theme;
    }
    html = "<style>" + this["import"]("css/" + this.theme + ".css") + "</style>";
    html += this.converter.makeHtml($Document.info().content);
    return $Utility.load("CoffeeScript (Literate) ❯ Live Preview", html);
  };

  LitcoffeeLivePreview.prototype.init = function() {
    if (typeof Markdown === "undefined" || Markdown === null) {
      this["import"](this.path + "/markdown.js");
    }
    this.converter = new Markdown.Converter();
    if (this.theme == null) {
      return this.theme = "Cerulean";
    }
  };

  LitcoffeeLivePreview.prototype.run = function() {
    this.loadPreview();
    return this.on.documentChanged((function(_this) {
      return function() {
        return _this.loadPreview();
      };
    })(this));
  };

  LitcoffeeLivePreview.prototype.menu = function() {
    return {
      "Amelia": (function(_this) {
        return function() {
          return _this.loadPreview("Amelia");
        };
      })(this),
      "Blueish": (function(_this) {
        return function() {
          return _this.loadPreview("Blueish");
        };
      })(this),
      "Cerulean": (function(_this) {
        return function() {
          return _this.loadPreview("Cerulean");
        };
      })(this),
      "Easy Reader": (function(_this) {
        return function() {
          return _this.loadPreview("Easy Reader");
        };
      })(this),
      "Journal": (function(_this) {
        return function() {
          return _this.loadPreview("Journal");
        };
      })(this),
      "Simplex": (function(_this) {
        return function() {
          return _this.loadPreview("Spruce");
        };
      })(this),
      "Superhero": (function(_this) {
        return function() {
          return _this.loadPreview("Superhero");
        };
      })(this),
      "United": (function(_this) {
        return function() {
          return _this.loadPreview("United");
        };
      })(this)
    };
  };

  return LitcoffeeLivePreview;

})($Plugin);
