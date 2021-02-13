jQuery(function () {
    $('.imgclass')
        .addClass('red-border')
        .addClass('size');
    $('img').each(function (i) {
        this.alt = 'Это изображение[' + i + '] c id' + this.id;
    });
    $('div')
        .addClass('my-class')
        .find('img')
        .addClass('red-border')
        .addBack()
        .addClass('opaque');
})
