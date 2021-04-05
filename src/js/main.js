import $ from '../local_modules/jquery/dist/jquery.min'

$(document).ready(() => {
    $(`.header__switcher`).click(() => {
        $(`.header__ul`).slideToggle(`0.5s`, function () {
            $(`.header__ul`).toggleClass(`header__ul_active`)
        })
    })
})
