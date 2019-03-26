function musiccontrolfun(musicsrc) {
    var audio = $('audio'); var player = $('audio')[0]; var musiccontrolBtn = $('#musiccontrol'); audio.on('play', function () { $('#musiccontrol i').addClass('fa-spin'); });
    audio.on('pause', function () { $('#musiccontrol i').removeClass('fa-spin'); });
    musiccontrolBtn.on('click', function () { if (player.paused) { player.play(); } else { player.pause(); } });
    audio.attr('src', musicsrc);
}