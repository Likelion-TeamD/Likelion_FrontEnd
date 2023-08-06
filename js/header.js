$(document).ready(function () {
    // Find all navigation links
    const navLinks = $('.nav-item a');

    // Add click event listener to each link
    navLinks.on('click', function (e) {
        e.preventDefault();

        // Remove active class from all links
        navLinks.removeClass('active');

        // Add active class to clicked link
        $(this).addClass('active');
    });

    // Add active class to first link on page load
    $('.nav-item:first-child a').addClass('active');
});
