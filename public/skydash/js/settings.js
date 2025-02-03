(function($) {
    'use strict';
    $(function() {
      // Cache the body element and theme settings
      var $body = $("body");
      var navbar_classes = "navbar-danger navbar-success navbar-warning navbar-dark navbar-primary navbar-primary navbar-info navbar-pink";
      var sidebar_classes = "sidebar-light sidebar-dark";

      // Function to apply the saved theme
      function applySavedTheme() {
        // Apply saved sidebar theme
        var savedSidebarTheme = localStorage.getItem('sidebarTheme');
        if (savedSidebarTheme) {
          $body.removeClass(sidebar_classes).addClass(savedSidebarTheme);
        }

        // Apply saved navbar theme
        var savedNavbarTheme = localStorage.getItem('navbarTheme');
        if (savedNavbarTheme) {
          $(".navbar").removeClass(navbar_classes).addClass(savedNavbarTheme);
        }

        // Mark the selected theme options as selected
        $(".sidebar-bg-options, .tiles").removeClass("selected");
        if (savedSidebarTheme) {
          $(`#sidebar-${savedSidebarTheme}-theme`).addClass("selected");
        }
        if (savedNavbarTheme) {
          $(`.tiles[data-theme="${savedNavbarTheme}"]`).addClass("selected");
        }
      }

      // Apply the saved theme on page load
      applySavedTheme();

      // Sidebar theme toggling
      $("#sidebar-light-theme").on("click", function() {
        $body.removeClass(sidebar_classes).addClass("sidebar-light");
        $(".sidebar-bg-options").removeClass("selected");
        $(this).addClass("selected");
        localStorage.setItem('sidebarTheme', 'sidebar-light'); // Save sidebar theme preference
      });

      $("#sidebar-dark-theme").on("click", function() {
        $body.removeClass(sidebar_classes).addClass("sidebar-dark");
        $(".sidebar-bg-options").removeClass("selected");
        $(this).addClass("selected");
        localStorage.setItem('sidebarTheme', 'sidebar-dark'); // Save sidebar theme preference
      });

      // Navbar theme toggling
      $(".tiles").on("click", function() {
        var theme = $(this).data("theme"); // Get the theme from the data-theme attribute
        $(".navbar").removeClass(navbar_classes).addClass(theme);
        $(".tiles").removeClass("selected");
        $(this).addClass("selected");
        localStorage.setItem('navbarTheme', theme); // Save navbar theme preference
      });

      // Settings sidebar toggling
      $(".nav-settings").on("click", function() {
        $("#right-sidebar").toggleClass("open");
      });

      $(".settings-close").on("click", function() {
        $("#right-sidebar,#theme-settings").removeClass("open");
      });

      $("#settings-trigger").on("click", function() {
        $("#theme-settings").toggleClass("open");
      });
    });
  })(jQuery);
