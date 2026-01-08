// Override the carousel initialization for alternate style
$(document).ready(function () {
  // Find all carousels with the alternate style
  $('.collection-slider[data-alt-carousel="true"]').each(function () {
    var $this = $(this);
    var $productList = $this.find('.product-list');

    // Only initialize if not already initialized
    if (!$productList.hasClass('owl-loaded')) {
      var productsPerRow = parseInt($productList.data('products-per-row'));

      // Override the carousel options
      var carouselOptions = {
        margin: 0,
        loop: true,
        autoWidth: false,
        items: productsPerRow,
        center: false,
        nav: false,
        dots: false,
        responsive: {
          0: {
            items: productsPerRow < 4 ? 1 : 2
          },
          480: {
            items: Math.min(2, productsPerRow - 2)
          },
          767: {
            items: productsPerRow - 1
          },
          1000: {
            items: productsPerRow
          }
        }
      };

      // Initialize the carousel with our custom options
      $productList.owlCarousel(carouselOptions);
    }
  });
});
