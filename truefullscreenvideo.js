$(document).ready(function() {
    var host = document.location.hostname;
    var fns = null;

    if (host.endsWith('primevideo.com')) {
        fns = primevideofn();
    } else if (host.endsWith('hotstar.com')) {
        fns = hotstarfn();
    } else if (host.endsWith('zee5.com')) {
        fns = zee5fn();
    } else if (host.endsWith('voot.com')) {
        fns = vootfn();
    }

    $(document).dblclick(function() {
        fns[0]();
    });
    $(document).mousewheel(function(event) {
        if (document.fullscreenElement != null) {
            var vids = $("video");
            if (vids.length) {
                vids.each(function() {
                    this.volume = this.volume - (event.deltaY / 200.0);
                });
            } else {
                vids.volume = vids.volume - (event.deltaY / 200.0);
            }
        }
    });
});

function primevideofn() {
    return [function() {
        if ($("video").length != 0) {
            $(".fullscreenButton").click();
        }
    }];
}

function hotstarfn() {
    return [function() {
        $(".vjs-fullscreen-control").click();
    }];
}

function zee5fn() {
    return [function() {
        $(".rightControls >div:last-child").click();
    }];
}

function vootfn() {
    return [function() {
        $(".playkit-control-fullscreen >button").click();
    }];
}
