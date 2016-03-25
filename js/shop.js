/* jslint browser: true*/
/*global $*/

// https://github.com/jasonmoo/t.js
(function(){function c(a){this.t=a}function l(a,b){for(var e=b.split(".");e.length;){if(!(e[0]in a))return!1;a=a[e.shift()]}return a}function d(a,b){return a.replace(h,function(e,a,i,f,c,h,k,m){var f=l(b,f),j="",g;if(!f)return"!"==i?d(c,b):k?d(m,b):"";if(!i)return d(h,b);if("@"==i){e=b._key;a=b._val;for(g in f)f.hasOwnProperty(g)&&(b._key=g,b._val=f[g],j+=d(c,b));b._key=e;b._val=a;return j}}).replace(k,function(a,c,d){return(a=l(b,d))||0===a?"%"==c?(new Option(a)).innerHTML.replace(/"/g,"&quot;"):
a:""})}var h=/\{\{(([@!]?)(.+?))\}\}(([\s\S]+?)(\{\{:\1\}\}([\s\S]+?))?)\{\{\/\1\}\}/g,k=/\{\{([=%])(.+?)\}\}/g;c.prototype.render=function(a){return d(this.t,a)};window.t=c})();
// end of 't';

Number.prototype.to_$ = function () {
  return "$" + parseFloat( this ).toFixed(2);
};
String.prototype.strip$ = function () {
  return this.split("$")[1];
};

var app = {

  shipping : 99.00,
  products : [
      {
        "name" : "All Around Longboard",
        "price" : "45.50",
        "img" : "shopimages/Blank-All-Around-Longboard.png",
        "desc" : "Item Number D005"
      },
      {
        "name" : "Crossroad Downhill Longboard",
        "price" : "43.95",
        "img" : "shopimages/Blank-Crossroad-Downhill-Longboard.png",
        "desc" : "Item Number D009"
      },
      {
        "name" : "Funboard Longboard",
        "price" : "44.50",
        "img" : "shopimages/Blank-Funboard-Longboard.png",
        "desc" : "Item Number D017"
      },
      {
        "name" : "Rocket Bomber Longboard",
        "img" : "shopimages/Blank-Rocket-Bomber.png",
        "price" : "48.50",
        "desc" : "Item Number D023"
      },
        
      {
        "name" : "Grizzly Gen-5 180mm Trucks",
        "price" : "34.50",
        "img" : "shopimages/Bear-Grizzly-Gen-5-180mm-Longboard-Truck-_242491.png",
        "desc" : "Item Number T039"
      },
      {
        "name" : "Caliber White Gold 184mm Trucks",
        "price" : "32.95",
        "img" : "shopimages/Caliber-White-Gold-184mm-Longboard-Truck-_233363.png",
        "desc" : "Item Number T112"
      },
      {
        "name" : "Paris Silver 180mm Trucks",
        "price" : "35.95",
        "img" : "shopimages/Paris-180mm-Silver-Longboard-Truck-_217341.png",
        "desc" : "Item Number T1000"
      },
      {
        "name" : "Sector 9 Gullwing Reverse 184mm Trucks",
        "img" : "shopimages/Sector-9-Gullwing-Reverse-10--Skateboard-Truck-_257596.png",
        "price" : "32.50",
        "desc" : "Item Number T1025"
      },
      {
        "name" : "Andale Swiss Bearings",
        "price" : "19.95",
        "img" : "shopimages/Andale-Swiss-Bearings-_251919.png",
        "desc" : "Item Number B021"
      },
      {
        "name" : "Bones Reds Bearings",
        "price" : "22.50",
        "img" : "shopimages/Bones-Reds-Skateboard-Bearings-_072579.png",
        "desc" : "Item Number B054"
      },
      {
        "name" : "Primitive High Precision Bearings",
        "price" : "23.50",
        "img" : "shopimages/Primitive-High-Precision-Skateboard-Bearings-_264006.png",
        "desc" : "Item Number B068"
      },
      {
        "name" : "Shake Junt Low Riders Bearings",
        "img" : "shopimages/Shake-Junt-Low-Riders-ABEC-3-Skateboard-Bearings-_217484.png",
        "price" : "20.95",
        "desc" : "Item Number B079"
      },
        
              {
        "name" : "Blood Orange Morgan Pro 65mm Wheels",
        "price" : "36.95",
        "img" : "shopimages/Blood-Orange-Morgan-Pro-65mm-82a-Longboard-Wheels-_234942.png",
        "desc" : "Item Number W165"
      },
      {
        "name" : "Gold Coast Shred Boots 70mm Wheels",
        "price" : "33.95",
        "img" : "shopimages/Gold-Coast-Shred-Boots-70mm-Longboard-Wheels-_237106.png",
        "desc" : "Item Number W187"
      },
      {
        "name" : "Hawgs Mini Monsters 70mm Wheels",
        "price" : "29.50",
        "img" : "shopimages/Hawgs-Mini-Monsters-70mm-82a-Longboard-Wheels-_253406.png",
        "desc" : "Item Number W195"
      },
      {
        "name" : "Mercer 75mm Wheels",
        "img" : "shopimages/Mercer-75mm-78a-Black-Longboard-Wheels-_253666.png",
        "price" : "33.95",
        "desc" : "Item Number W207"
      },
              {
        "name" : "Grizzly MSA Red Stamp Grip Tape",
        "price" : "14.95",
        "img" : "shopimages/Grizzly-Griptape-MSA-Stamp-Red-Grip-Tape-_219208.png",
        "desc" : "Item Number G008"
      },
      {
        "name" : "Mob x Star Wars Grip Tape",
        "price" : "13.50",
        "img" : "shopimages/Mob-x-Star-Wars-Poster-Grip-Tape-_257082.png",
        "desc" : "Item Number G047"
      },
      {
        "name" : "Primitive P Rod Eagle Grip Tape",
        "price" : "15.95",
        "img" : "shopimages/Primitive-P-Rod-Eagle-Grip-Tape-_260558.png",
        "desc" : "Item Number G052"
      },
      {
        "name" : "Spitfire Spaceburn Grip Tape",
        "img" : "shopimages/Spitfire-Spaceburn-Grip-Tape-_250099.png",
        "price" : "14.50",
        "desc" : "Item Number G074"
      }
    ],
    
    

  removeProduct: function () {
    "use strict";

    var item = $(this).closest(".shopping-cart--list-item");

    item.addClass("closing");
    window.setTimeout( function () {
      item.remove();
      app.updateTotals();
    }, 500); // Timeout for css animation
  },

  addProduct: function () {
    "use strict";

    var qtyCtr = $(this).prev(".product-qty"),
        quantity = parseInt(qtyCtr.html(), 10) + 1;

    app.updateProductSubtotal(this, quantity);
  },

  subtractProduct: function () {
    "use strict";

    var qtyCtr = $(this).next(".product-qty"),
        num = parseInt(qtyCtr.html(), 10) - 1,
        quantity = num <= 0 ? 0 : num;

    app.updateProductSubtotal(this, quantity);
  },

  updateProductSubtotal: function (context, quantity) {
    "use strict";

    var ctr = $(context).closest(".product-modifiers"),
        productQtyCtr = ctr.find(".product-qty"),
        productPrice = parseFloat(ctr.data("product-price")),
        subtotalCtr = ctr.find(".product-total-price"),
        subtotalPrice = quantity * productPrice;

    productQtyCtr.html(quantity);
    subtotalCtr.html( subtotalPrice.to_$() );

    app.updateTotals();
  },

  updateTotals: function () {
    "use strict";

    var products = $(".shopping-cart--list-item"),
        subtotal = 0,
        shipping;

    for (var i = 0; i < products.length; i += 1) {
      subtotal += parseFloat( $(products[i]).find(".product-total-price").html().strip$() );
    }

    shipping = (subtotal > 0 && subtotal < (100 / 1.06)) ? app.shipping : 0;

    $("#subtotalCtr").find(".cart-totals-value").html( subtotal.to_$() );
    $("#taxesCtr").find(".cart-totals-value").html( (subtotal * 0.06).to_$() );
    $("#totalCtr").find(".cart-totals-value").html( (subtotal * 1.06 + shipping).to_$() );
    $("#shippingCtr").find(".cart-totals-value").html( shipping.to_$() );
  },

  attachEvents: function () {
    "use strict";

    $(".product-remove").on("click", app.removeProduct);
    $(".product-plus").on("click", app.addProduct);
    $(".product-subtract").on("click", app.subtractProduct);
  },

  setProductImages: function () {
    "use strict";

    var images = $(".product-image"),
        ctr,
        img;

    for (var i = 0; i < images.length; i += 1) {
      ctr = $(images[i]),
      img = ctr.find(".product-image--img");

      ctr.css("background-image", "url(" + img.attr("src") + ")");
      img.remove();
    }
  },

  renderTemplates: function () {
    "use strict";

    var products = app.products,
        content = [],
        template = new t( $("#shopping-cart--list-item-template").html() );

    for (var i = 0; i < products.length; i += 1) {
      content[i] = template.render(products[i]);
    }

    $("#shopping-cart--list").html(content.join(""));
  }

};

app.renderTemplates();
app.setProductImages();
app.attachEvents();