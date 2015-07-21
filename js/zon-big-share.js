(function( $, win, doc ) {
    'use strict';

    // remove any query string or fragment identifier
    var url = win.location.href.split(/[?#]/)[0];
    var campaignCode = {
        wt_zmc: null,
        utm_medium: 'sm',
        utm_source: null,
        utm_campaign: 'ref',
        utm_content: 'zeitde_dskshare_link_x',
        t: doc.title
    };

    var bigButtonStyles = "<style>.tb-newShareBox{margin: 40px 0;width:100%;}" +
      ".tb-newShareBox a, .tb-newShareBox a:hover{text-decoration: none; border-bottom: none;}" +
      ".tb-newShareButton{height: 22px;width: 170px;display: inline-block;color: #FFF;line-height: 1.1;font-size: 15px;font-weight: normal;font-family: 'Arial', 'Verdana', sans;-webkit-border-radius: 3px;-moz-border-radius: 3px;border-radius: 3px;letter-spacing: 0.05em;}" +
      ".tb-facebook{background: #3b5998 url('http://live0.zeit.de/infografik/bigshare/fb-icon.png') no-repeat scroll 0 1px;margin-right: 25px;padding: 10px 0 5px 40px;}" +
      ".tb-twitter{background: #55acee url('http://live0.zeit.de/infografik/bigshare/twitter-icon.png') no-repeat scroll 7px 3px;padding: 10px 0 5px 50px;}</style>";

    function shareUrl(url) {
        win.open(url, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');
    }

    function addBigShareButtons() {
        var oldShareBox = $('.show_smk'),
            articleBody = $('.article-body'),
            newShareBox;

        if (!oldShareBox.length || !articleBody.length) {
            return;
        }

        newShareBox = '<div class="tb-newShareBox">';
        newShareBox += '<a href="#facebook-share" id="facebook-share"><div class="tb-newShareButton tb-facebook">Auf Facebook teilen</div></a>';
        newShareBox += '<a href="#twitter-share" id="twitter-share"><div class="tb-newShareButton tb-twitter">Twittern</div></a>';
        newShareBox += '</div>'; // close tb-newShareBox
        oldShareBox.css('display', 'none');
        oldShareBox.before(bigButtonStyles, newShareBox);
        oldShareBox.remove(); // kill old social box

        $('#facebook-share').on('click', function() {
            if (wt) {
                wt.sendinfo({ linkId: 'stationaer.articlebottom.1.1.social.facebook|https://www.facebook.com/sharer/sharer.php?u=' + url });
            }

            campaignCode.wt_zmc = 'sm.ext.zonaudev.facebook.ref.zeitde.dskshare.link.x';
            campaignCode.utm_source = 'facebook_zonaudev_ext';

            shareUrl('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent( url + '?' + $.param(campaignCode) ));
        });

        $('#twitter-share').on('click', function(){
            if (wt) {
                wt.sendinfo({ linkId: 'stationaer.articlebottom.1.2.social.twitter|https://twitter.com/intent/tweet?url=' + url });
            }

            campaignCode.wt_zmc = 'sm.ext.zonaudev.twitter.ref.zeitde.dskshare.link.x';
            campaignCode.utm_source = 'twitter_zonaudev_ext';

            shareUrl('https://twitter.com/intent/tweet?url=' + encodeURIComponent( url + '?' + $.param(campaignCode) ));
        });
    }

    // short form for $( document ).ready(function() {});
    $( addBigShareButtons );

}( jQuery, window, document ));

