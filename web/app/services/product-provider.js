

define(['plugins/http', 'utils/strings', 'utils/links'],
    function (http, strings, links) {
        var ProductProvider = function() {
        };

        ProductProvider.prototype.getProducts = function() {
            var url = strings.format(links.getProducts)
            return http.get( url, { format: 'json' });
        }

        return ProductProvider;
    });
