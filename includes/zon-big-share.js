if (typeof jQuery !== 'undefined') {
	
	var $jqry = jQuery.noConflict();

	// all jQuery-Code using $jqry
	
}
var addBigShareButtons = function() {
	var facebookButton = "<a href='#facebook-share' id='facebook-share'><div class='tb-newShareButton tb-facebook'>Auf Facebook teilen</div></a>";
	var twitterButton = "<a href='#twitter-share' id='twitter-share'><div class='tb-newShareButton tb-twitter'>Twittern</div></a>";
	var cleanSocialLink = function (linkString) {
		if (linkString.indexOf("%3Fwt_zmc") === -1) {
			return linkString
		} else {
			var deleteFrom = linkString.indexOf("%3Fwt_zmc")
			var toDelete = linkString.slice(deleteFrom, linkString.length)
			newLinkString = linkString.replace(toDelete, '')
			return newLinkString
		}
	}
	var theSocialLink = cleanSocialLink(escape(window.location.href));

	var fbshareCurrentPage = function () {
	  window.open("https://www.facebook.com/sharer/sharer.php?u=" +
	    theSocialLink +
	    "?wt_zmc=sm.ext.zonaudev.facebook.ref.zeitde.dskshare.link.x%26utm_medium=sm%26utm_source=facebook_zonaudev_ext%26utm_campaign=ref%26utm_content=zeitde_dskshare_link_x%26t=" +
	    document.title,
	    "",
	    "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600"
	  );
	}

	var twitterShareCurrentPage = function () {
	  window.open("https://twitter.com/intent/tweet?url=" +
	    theSocialLink +
	    "?wt_zmc=sm.ext.zonaudev.twitter.ref.zeitde.dskshare.link.x%26utm_medium=sm%26utm_source=twitter_zonaudev_ext%26utm_campaign=ref%26utm_content=zeitde_dskshare_link_x",
	    "",
	    "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600"
	  );
	}


	var fbshareCurrentPage = function(){
		window.open("https://www.facebook.com/sharer/sharer.php?u="+escape(window.location.href)+"?wt_zmc=sm.ext.zonaudev.facebook.ref.zeitde.dskshare.link.x%26utm_medium=sm%26utm_source=facebook_zonaudev_ext%26utm_campaign=ref%26utm_content=zeitde_dskshare_link_x%26t="+document.title, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');
	};
	
	$jqry ( ".show_smk" ).css( "display" , "none");
	$newShareBox = '<div class="tb-newShareBox">';
	$newShareBox += facebookButton;
	$newShareBox += twitterButton;
	$newShareBox += '</div>'; // close tb-newShareBox					
	$jqry( $newShareBox ).insertBefore( ".show_smk" );
	$jqry ( ".show_smk" ).remove();  // kill old social box
	

	$jqry("#facebook-share").on("click", function(){
		wt.sendinfo({linkId: "stationaer.articlebottom.1.1.social.facebook|https://www.facebook.com/sharer/sharer.php?u=" + theSocialLink });
		fbshareCurrentPage();
	});

	$jqry("#twitter-share").on("click", function(){
		wt.sendinfo({linkId: "stationaer.articlebottom.1.2.social.twitter|https://twitter.com/intent/tweet?url=" + theSocialLink });
		twitterShareCurrentPage();
	});
}

$jqry( document ).ready( function() {
	if($jqry(".show_smk").length > 0){
		addBigShareButtons();
	} else {
		console.log("there is no share bar to replace")
		return;
	};
});