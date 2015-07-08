var facebookButton = "<a href='javascript:fbshareCurrentPage();'><div class='tb-newShareButton tb-facebook'>Auf Facebook teilen</div></a>";
var twitterButton = "<a href='javascript:twitterShareCurrentPage();'><div class='tb-newShareButton tb-twitter'>Twittern</div></a>";
var cleanSocialLink = function (linkString) {
	if (linkString.indexOf("%3Fwt_zmc") === -1) {
		return linkString
	} else {
		var deleteFrom = linkString.indexOf("%3Fwt_zmc")
		var toDelete = linkString.slice(deleteFrom, linkString.length)
		newLinkString = linkString.replace(toDelete, '')
		return newLinkString
	}
};

var theSocialLink = cleanSocialLink(escape(window.location.href));

var fbshareCurrentPage = function () {
  window.open("https://www.facebook.com/sharer/sharer.php?u=" +
    theSocialLink +
    "?wt_zmc=sm.ext.zonaudev.facebook.ref.zeitde.dskshare.link.x%26utm_medium=sm%26utm_source=facebook_zonaudev_ext%26utm_campaign=ref%26utm_content=zeitde_dskshare_link_x%26t=" +
    document.title,
    "",
    "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600"
  );
};

var twitterShareCurrentPage = function () {
  window.open("https://twitter.com/intent/tweet?url=" +
    theSocialLink +
    "?wt_zmc=sm.ext.zonaudev.twitter.ref.zeitde.dskshare.link.x%26utm_medium=sm%26utm_source=twitter_zonaudev_ext%26utm_campaign=ref%26utm_content=zeitde_dskshare_link_x",
    "",
    "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600"
  );
};

var bigButtonStyles = "<style>.tb-newShareBox{margin: 40px 0;width:100%;}" +
  ".tb-newShareBox a, .tb-newShareBox a:hover{text-decoration: none; border-bottom: none;}" +
  ".tb-newShareButton{height: 22px;width: 170px;display: inline-block;color: #FFF;line-height: 1.1;font-size: 15px;font-weight: normal;font-family: 'Arial', 'Verdana', sans;-webkit-border-radius: 3px;-moz-border-radius: 3px;border-radius: 3px;letter-spacing: 0.05em;}" +
  ".tb-facebook{background: #3b5998 url('http://live0.zeit.de/infografik/bigshare/fb-icon.png') no-repeat scroll 0 1px;margin-right: 25px;padding: 10px 0 5px 40px;}" +
  ".tb-twitter{background: #55acee url('http://live0.zeit.de/infografik/bigshare/twitter-icon.png') no-repeat scroll 7px 3px;padding: 10px 0 5px 50px;}</style>";


jQuery( document ).ready(function() {
	if(jQuery(".article-body").length > 0){
		jQuery(".article-body").append(
		  "<div class='tb-newShareBox'></div>",
		  bigButtonStyles
		);

		jQuery(".tb-newShareBox").append(
		  facebookButton,
		  twitterButton
		);

		if(jQuery(".show_smk").length > 0){
			jQuery(".show_smk").remove();
		};
	}		
});