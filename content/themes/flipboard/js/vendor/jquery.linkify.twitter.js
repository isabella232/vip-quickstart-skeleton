// Twitter plugin for jQuery.fn.linkify() 1.0 - MIT/GPL Licensed
jQuery.extend(jQuery.fn.linkify.plugins,{twitterUser:{re:/(^|["'(]|&lt;|\s)@([a-z0-9_-]+)((?:[:?]|\.+)?(?:\s|$)|&gt;|[)"',])/gi,tmpl:'$1<a href="http://www.twitter.com/$2">@$2</a>$3'},twitterHashtag:{re:/(^|["'(]|&lt;|\s)(#.+?)((?:[:?]|\.+)?(?:\s|$)|&gt;|[)"',])/gi,tmpl:function(d,b,a,c){return b+'<a href="http://www.twitter.com/search?q='+encodeURIComponent(a)+'">'+a+'</a>'+c}}});