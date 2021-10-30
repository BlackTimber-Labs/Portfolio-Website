// Project Pop-up

// Google Search Landing Page
$('#google_project').on('click', () => {
    $('.project_google_landing_page').show();
    $('.project_google_cross_one').show();
    $('.project_google_cross_two').show();
});
$('.project_google_cross_one').on('mouseover', () => {
    $('.project_google_cross_one').addClass('project_google_cross_one_hover');
    $('.project_google_cross_two').addClass('project_google_cross_two_hover');
});
$('.project_google_cross_two').on('mouseover', () => {
    $('.project_google_cross_one').addClass('project_google_cross_one_hover');
    $('.project_google_cross_two').addClass('project_google_cross_two_hover');
});
$(document).mouseover(e => {
    if ((!$('.project_google_cross_one').is(e.target) // if the target of the click isn't the container...
        && $('.project_google_cross_one').has(e.target).length === 0)
        && (!$('.project_google_cross_two').is(e.target)
            && $('.project_google_cross_two').has(e.target).length === 0)) // ... nor a descendant of the container
    {
        $('.project_google_cross_one').removeClass('project_google_cross_one_hover');
        $('.project_google_cross_two').removeClass('project_google_cross_two_hover');
    }
});
$('.project_google_cross_one').on('click', () => {
    $('.project_google_landing_page').hide();
    $('.project_google_cross_one').hide();
    $('.project_google_cross_two').hide();
});
$('.project_google_cross_two').on('click', () => {
    $('.project_google_landing_page').hide();
    $('.project_google_cross_one').hide();
    $('.project_google_cross_two').hide();
});

// Ideation 2020 Website
$('#ideation_project').on('click', () => {
    $('.project_ideation').show();
    $('.project_ideation_cross_one').show();
    $('.project_ideation_cross_two').show();
});
$('.project_ideation_cross_one').on('mouseover', () => {
    $('.project_ideation_cross_one').addClass('project_ideation_cross_one_hover');
    $('.project_ideation_cross_two').addClass('project_ideation_cross_two_hover');
});
$('.project_ideation_cross_two').on('mouseover', () => {
    $('.project_ideation_cross_one').addClass('project_ideation_cross_one_hover');
    $('.project_ideation_cross_two').addClass('project_ideation_cross_two_hover');
});
$(document).mouseover(e => {
    if ((!$('.project_ideation_cross_one').is(e.target) // if the target of the click isn't the container...
        && $('.project_ideation_cross_one').has(e.target).length === 0)
        && (!$('.project_ideation_cross_two').is(e.target)
            && $('.project_ideation_cross_two').has(e.target).length === 0)) // ... nor a descendant of the container
    {
        $('.project_ideation_cross_one').removeClass('project_ideation_cross_one_hover');
        $('.project_ideation_cross_two').removeClass('project_ideation_cross_two_hover');
    }
});
$('.project_ideation_cross_one').on('click', () => {
    $('.project_ideation').hide();
    $('.project_ideation_cross_one').hide();
    $('.project_ideation_cross_two').hide();
});
$('.project_ideation_cross_two').on('click', () => {
    $('.project_ideation').hide();
    $('.project_ideation_cross_one').hide();
    $('.project_ideation_cross_two').hide();
});

//gist Social Media Website
$('#gist_project').on('click', () => {
    $('.project_gist').show();
    $('.project_gist_cross_one').show();
    $('.project_gist_cross_two').show();
});
$('.project_gist_cross_one').on('mouseover', () => {
    $('.project_gist_cross_one').addClass('project_gist_cross_one_hover');
    $('.project_gist_cross_two').addClass('project_gist_cross_two_hover');
});
$('.project_gist_cross_two').on('mouseover', () => {
    $('.project_gist_cross_one').addClass('project_gist_cross_one_hover');
    $('.project_gist_cross_two').addClass('project_gist_cross_two_hover');
});
$(document).mouseover(e => {
    if ((!$('.project_gist_cross_one').is(e.target) // if the target of the click isn't the container...
        && $('.project_gist_cross_one').has(e.target).length === 0)
        && (!$('.project_gist_cross_two').is(e.target)
            && $('.project_gist_cross_two').has(e.target).length === 0)) // ... nor a descendant of the container
    {
        $('.project_gist_cross_one').removeClass('project_gist_cross_one_hover');
        $('.project_gist_cross_two').removeClass('project_gist_cross_two_hover');
    }
});
$('.project_gist_cross_one').on('click', () => {
    $('.project_gist').hide();
    $('.project_gist_cross_one').hide();
    $('.project_gist_cross_two').hide();
});
$('.project_gist_cross_two').on('click', () => {
    $('.project_gist').hide();
    $('.project_gist_cross_one').hide();
    $('.project_gist_cross_two').hide();
});

//Soundlogy Project
$('#soundlogy_project').on('click', () => {
    $('.project_soundlogy').show();
    $('.project_soundlogy_cross_one').show();
    $('.project_soundlogy_cross_two').show();
});
$('.project_soundlogy_cross_one').on('mouseover', () => {
    $('.project_soundlogy_cross_one').addClass('project_soundlogy_cross_one_hover');
    $('.project_soundlogy_cross_two').addClass('project_soundlogy_cross_two_hover');
});
$('.project_soundlogy_cross_two').on('mouseover', () => {
    $('.project_soundlogy_cross_one').addClass('project_soundlogy_cross_one_hover');
    $('.project_soundlogy_cross_two').addClass('project_soundlogy_cross_two_hover');
});
$(document).mouseover(e => {
    if ((!$('.project_soundlogy_cross_one').is(e.target) // if the target of the click isn't the container...
        && $('.project_soundlogy_cross_one').has(e.target).length === 0)
        && (!$('.project_soundlogy_cross_two').is(e.target)
            && $('.project_soundlogy_cross_two').has(e.target).length === 0)) // ... nor a descendant of the container
    {
        $('.project_soundlogy_cross_one').removeClass('project_soundlogy_cross_one_hover');
        $('.project_soundlogy_cross_two').removeClass('project_soundlogy_cross_two_hover');
    }
});
$('.project_soundlogy_cross_one').on('click', () => {
    $('.project_soundlogy').hide();
    $('.project_soundlogy_cross_one').hide();
    $('.project_soundlogy_cross_two').hide();
});
$('.project_soundlogy_cross_two').on('click', () => {
    $('.project_soundlogy').hide();
    $('.project_soundlogy_cross_one').hide();
    $('.project_soundlogy_cross_two').hide();
});

//Netflix Clone
$('#netflix_project').on('click', () => {
    $('.project_netflix_clone').show();
    $('.project_netflix_cross_one').show();
    $('.project_netflix_cross_two').show();
});
$('.project_netflix_cross_one').on('mouseover', () => {
    $('.project_netflix_cross_one').addClass('project_netflix_cross_one_hover');
    $('.project_netflix_cross_two').addClass('project_netflix_cross_two_hover');
});
$('.project_netflix_cross_two').on('mouseover', () => {
    $('.project_netflix_cross_one').addClass('project_netflix_cross_one_hover');
    $('.project_netflix_cross_two').addClass('project_netflix_cross_two_hover');
});
$(document).mouseover(e => {
    if ((!$('.project_netflix_cross_one').is(e.target) // if the target of the click isn't the container...
        && $('.project_netflix_cross_one').has(e.target).length === 0)
        && (!$('.project_netflix_cross_two').is(e.target)
            && $('.project_netflix_cross_two').has(e.target).length === 0)) // ... nor a descendant of the container
    {
        $('.project_netflix_cross_one').removeClass('project_netflix_cross_one_hover');
        $('.project_netflix_cross_two').removeClass('project_netflix_cross_two_hover');
    }
});
$('.project_netflix_cross_one').on('click', () => {
    $('.project_netflix_clone').hide();
    $('.project_netflix_cross_one').hide();
    $('.project_netflix_cross_two').hide();
});
$('.project_netflix_cross_two').on('click', () => {
    $('.project_netflix_clone').hide();
    $('.project_netflix_cross_one').hide();
    $('.project_netflix_cross_two').hide();
});

//IternXpo 2021 Website
$('#internxpo_project').on('click', () => {
    $('.project_internxpo').show();
    $('.project_internxpo_cross_one').show();
    $('.project_internxpo_cross_two').show();
});
$('.project_internxpo_cross_one').on('mouseover', () => {
    $('.project_internxpo_cross_one').addClass('project_internxpo_cross_one_hover');
    $('.project_internxpo_cross_two').addClass('project_internxpo_cross_two_hover');
});
$('.project_internxpo_cross_two').on('mouseover', () => {
    $('.project_internxpo_cross_one').addClass('project_internxpo_cross_one_hover');
    $('.project_internxpo_cross_two').addClass('project_internxpo_cross_two_hover');
});
$(document).mouseover(e => {
    if ((!$('.project_internxpo_cross_one').is(e.target) // if the target of the click isn't the container...
        && $('.project_internxpo_cross_one').has(e.target).length === 0)
        && (!$('.project_internxpo_cross_two').is(e.target)
            && $('.project_internxpo_cross_two').has(e.target).length === 0)) // ... nor a descendant of the container
    {
        $('.project_internxpo_cross_one').removeClass('project_internxpo_cross_one_hover');
        $('.project_internxpo_cross_two').removeClass('project_internxpo_cross_two_hover');
    }
});
$('.project_internxpo_cross_one').on('click', () => {
    $('.project_internxpo').hide();
    $('.project_internxpo_cross_one').hide();
    $('.project_internxpo_cross_two').hide();
});
$('.project_internxpo_cross_two').on('click', () => {
    $('.project_internxpo').hide();
    $('.project_internxpo_cross_one').hide();
    $('.project_internxpo_cross_two').hide();
});

//EntreSpace Website
$('#entrespace_project').on('click', () => {
    $('.project_entrespace').show();
    $('.project_entrespace_cross_one').show();
    $('.project_entrespace_cross_two').show();
});
$('.project_entrespace_cross_one').on('mouseover', () => {
    $('.project_entrespace_cross_one').addClass('project_entrespace_cross_one_hover');
    $('.project_entrespace_cross_two').addClass('project_entrespace_cross_two_hover');
});
$('.project_entrespace_cross_two').on('mouseover', () => {
    $('.project_entrespace_cross_one').addClass('project_entrespace_cross_one_hover');
    $('.project_entrespace_cross_two').addClass('project_entrespace_cross_two_hover');
});
$(document).mouseover(e => {
    if ((!$('.project_entrespace_cross_one').is(e.target) // if the target of the click isn't the container...
        && $('.project_entrespace_cross_one').has(e.target).length === 0)
        && (!$('.project_entrespace_cross_two').is(e.target)
            && $('.project_entrespace_cross_two').has(e.target).length === 0)) // ... nor a descendant of the container
    {
        $('.project_entrespace_cross_one').removeClass('project_entrespace_cross_one_hover');
        $('.project_entrespace_cross_two').removeClass('project_entrespace_cross_two_hover');
    }
});
$('.project_entrespace_cross_one').on('click', () => {
    $('.project_entrespace').hide();
    $('.project_entrespace_cross_one').hide();
    $('.project_entrespace_cross_two').hide();
});
$('.project_entrespace_cross_two').on('click', () => {
    $('.project_entrespace').hide();
    $('.project_entrespace_cross_one').hide();
    $('.project_entrespace_cross_two').hide();
});

//Aaradhya Services Website
$('#aaradhya_services_project').on('click', () => {
    $('.project_aaradhya_services').show();
    $('.project_aaradhya_services_cross_one').show();
    $('.project_aaradhya_services_cross_two').show();
});
$('.project_aaradhya_services_cross_one').on('mouseover', () => {
    $('.project_aaradhya_services_cross_one').addClass('project_aaradhya_services_cross_one_hover');
    $('.project_aaradhya_services_cross_two').addClass('project_aaradhya_services_cross_two_hover');
});
$('.project_aaradhya_services_cross_two').on('mouseover', () => {
    $('.project_aaradhya_services_cross_one').addClass('project_aaradhya_services_cross_one_hover');
    $('.project_aaradhya_services_cross_two').addClass('project_aaradhya_services_cross_two_hover');
});
$(document).mouseover(e => {
    if ((!$('.project_aaradhya_services_cross_one').is(e.target) // if the target of the click isn't the container...
        && $('.project_aaradhya_services_cross_one').has(e.target).length === 0)
        && (!$('.project_aaradhya_services_cross_two').is(e.target)
            && $('.project_aaradhya_services_cross_two').has(e.target).length === 0)) // ... nor a descendant of the container
    {
        $('.project_aaradhya_services_cross_one').removeClass('project_aaradhya_services_cross_one_hover');
        $('.project_aaradhya_services_cross_two').removeClass('project_aaradhya_services_cross_two_hover');
    }
});
$('.project_aaradhya_services_cross_one').on('click', () => {
    $('.project_aaradhya_services').hide();
    $('.project_aaradhya_services_cross_one').hide();
    $('.project_aaradhya_services_cross_two').hide();
});
$('.project_aaradhya_services_cross_two').on('click', () => {
    $('.project_aaradhya_services').hide();
    $('.project_aaradhya_services_cross_one').hide();
    $('.project_aaradhya_services_cross_two').hide();
});

// CLose Pop-up on pressing Esc Key
$(document).on('keydown', function (event) {
    if (event.key == "Escape") {
        $('.project_google_landing_page').hide();
        $('.project_google_cross_one').hide();
        $('.project_google_cross_two').hide();
        $('.project_ideation').hide();
        $('.project_ideation_cross_one').hide();
        $('.project_ideation_cross_two').hide();
        $('.project_gist').hide();
        $('.project_gist_cross_one').hide();
        $('.project_gist_cross_two').hide();
        $('.project_soundlogy').hide();
        $('.project_soundlogy_cross_one').hide();
        $('.project_soundlogy_cross_two').hide();
        $('.project_netflix_clone').hide();
        $('.project_netflix_cross_one').hide();
        $('.project_netflix_cross_two').hide();
        $('.project_internxpo').hide();
        $('.project_internxpo_cross_one').hide();
        $('.project_internxpo_cross_two').hide();
        $('.project_entrespace').hide();
        $('.project_entrespace_cross_one').hide();
        $('.project_entrespace_cross_two').hide();
        $('.project_aaradhya_services').hide();
        $('.project_aaradhya_services_cross_one').hide();
        $('.project_aaradhya_services_cross_two').hide();
    }
});
