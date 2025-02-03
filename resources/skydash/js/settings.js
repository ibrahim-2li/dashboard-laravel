(function($) {
  'use strict';
  $(function() {
    // Set default theme if no theme is saved in localStorage
    const savedSidebarTheme = localStorage.getItem('sidebarTheme') || 'sidebar-dark'; // Default to 'sidebar-dark'
    const savedNavbarTheme = localStorage.getItem('navbarTheme') || 'navbar-dark'; // Default to 'navbar-dark'

    // Debugging: Log the saved theme values
    console.log('Saved Sidebar Theme:', savedSidebarTheme);
    console.log('Saved Navbar Theme:', savedNavbarTheme);

    // Apply saved or default sidebar theme
    $("body").removeClass("sidebar-light sidebar-dark").addClass(savedSidebarTheme);
    $("#" + savedSidebarTheme).addClass("selected");

    // Apply saved or default navbar theme
    $(".navbar").removeClass("navbar-danger navbar-success navbar-warning navbar-dark navbar-light navbar-primary navbar-info navbar-pink")
                .addClass(savedNavbarTheme);
    $(".tiles").removeClass("selected");
    $("#" + savedNavbarTheme).addClass("selected");

    $(".nav-settings").on("click", function() {
      $("#right-sidebar").toggleClass("open");
    });

    $(".settings-close").on("click", function() {
      $("#right-sidebar,#theme-settings").removeClass("open");
    });

    $("#settings-trigger").on("click", function() {
      $("#theme-settings").toggleClass("open");
    });

    // Background constants
    var navbar_classes = "navbar-danger navbar-success navbar-warning navbar-dark navbar-light navbar-primary navbar-info navbar-pink";
    var sidebar_classes = "sidebar-light sidebar-dark";
    var $body = $("body");

    // Sidebar themes
    $("#sidebar-light-theme").on("click", function() {
      $body.removeClass(sidebar_classes);
      $body.addClass("sidebar-light");
      $(".sidebar-bg-options").removeClass("selected");
      $(this).addClass("selected");
      // Save the selected theme in localStorage
      localStorage.setItem('sidebarTheme', 'sidebar-light');
      console.log('Sidebar Theme Set: sidebar-light');
    });

    $("#sidebar-dark-theme").on("click", function() {
      $body.removeClass(sidebar_classes);
      $body.addClass("sidebar-dark");
      $(".sidebar-bg-options").removeClass("selected");
      $(this).addClass("selected");
      // Save the selected theme in localStorage
      localStorage.setItem('sidebarTheme', 'sidebar-dark');
      console.log('Sidebar Theme Set: sidebar-dark');
    });

    // Navbar themes
    $(".tiles.primary").on("click", function() {
      $(".navbar").removeClass(navbar_classes);
      $(".navbar").addClass("navbar-primary");
      $(".tiles").removeClass("selected");
      $(this).addClass("selected");
      // Save the selected theme in localStorage
      localStorage.setItem('navbarTheme', 'navbar-primary');
      console.log('Navbar Theme Set: navbar-primary');
    });

    $(".tiles.success").on("click", function() {
      $(".navbar").removeClass(navbar_classes);
      $(".navbar").addClass("navbar-success");
      $(".tiles").removeClass("selected");
      $(this).addClass("selected");
      // Save the selected theme in localStorage
      localStorage.setItem('navbarTheme', 'navbar-success');
      console.log('Navbar Theme Set: navbar-success');
    });

    $(".tiles.warning").on("click", function() {
      $(".navbar").removeClass(navbar_classes);
      $(".navbar").addClass("navbar-warning");
      $(".tiles").removeClass("selected");
      $(this).addClass("selected");
      // Save the selected theme in localStorage
      localStorage.setItem('navbarTheme', 'navbar-warning');
      console.log('Navbar Theme Set: navbar-warning');
    });

    $(".tiles.danger").on("click", function() {
      $(".navbar").removeClass(navbar_classes);
      $(".navbar").addClass("navbar-danger");
      $(".tiles").removeClass("selected");
      $(this).addClass("selected");
      // Save the selected theme in localStorage
      localStorage.setItem('navbarTheme', 'navbar-danger');
      console.log('Navbar Theme Set: navbar-danger');
    });

    $(".tiles.light").on("click", function() {
      $(".navbar").removeClass(navbar_classes);
      $(".navbar").addClass("navbar-light");
      $(".tiles").removeClass("selected");
      $(this).addClass("selected");
      // Save the selected theme in localStorage
      localStorage.setItem('navbarTheme', 'navbar-light');
      console.log('Navbar Theme Set: navbar-light');
    });

    $(".tiles.info").on("click", function() {
      $(".navbar").removeClass(navbar_classes);
      $(".navbar").addClass("navbar-info");
      $(".tiles").removeClass("selected");
      $(this).addClass("selected");
      // Save the selected theme in localStorage
      localStorage.setItem('navbarTheme', 'navbar-info');
      console.log('Navbar Theme Set: navbar-info');
    });

    $(".tiles.dark").on("click", function() {
      $(".navbar").removeClass(navbar_classes);
      $(".navbar").addClass("navbar-dark");
      $(".tiles").removeClass("selected");
      $(this).addClass("selected");
      // Save the selected theme in localStorage
      localStorage.setItem('navbarTheme', 'navbar-dark');
      console.log('Navbar Theme Set: navbar-dark');
    });

    $(".tiles.default").on("click", function() {
      $(".navbar").removeClass(navbar_classes);
      $(".tiles").removeClass("selected");
      $(this).addClass("selected");
      // Save the selected theme in localStorage
      localStorage.setItem('navbarTheme', 'navbar-default');
      console.log('Navbar Theme Set: navbar-default');
    });
  });
})(jQuery);
