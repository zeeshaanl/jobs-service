$(document).ready(() => {
    $('#postJobs').on('submit', e => {
        e.preventDefault();
        $('.c-job-field__submit').prop('disabled', true);
        $('.loader').removeClass('hidden');
        $.post(
            "/postJobs",
            $('#postJobs').serialize()
        ).done(() => {
            console.log('form submitted!');
            $('.loader').addClass('hidden');
            $('.c-job-field__submit').prop('disabled', false);
            $('input, textarea').val('');
            $('.c-feedback').html('Job added succesfully')
        }).fail((xhr, textStatus, errorThrown) => {
            console.log(xhr);
            $('.c-feedback').html(`Error adding job: ${xhr.responseText}`)
        })
    });
});