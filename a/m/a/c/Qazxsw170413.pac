function FindProxyForURL(url, host) {
    var autoproxy = 'PROXY fs.hapac.altamob.com:9292';

    var defaultproxy = 'DIRECT';
    if (isPlainHostName(host) ||
        host.indexOf('127.') == 0 ||
        host.indexOf('192.168.') == 0 ||
        host.indexOf('10.') == 0 ||
        shExpMatch(host, 'localhost.*')) 
    {
        return 'DIRECT';
    } 
    else if (shExpMatch(host, '*.google*.*') ||
        dnsDomainIs(host, '.google.com') ||
        dnsDomainIs(host, '.applift.com') ||
        dnsDomainIs(host, '.awsstatic.com') ||
        dnsDomainIs(host, '.facebook.com') ||
        dnsDomainIs(host, '.softlayer.com') ||
        dnsDomainIs(host, '.ibm.com') ||
        dnsDomainIs(host, '.softlayer.net') ||
        dnsDomainIs(host, '.edgecastcdn.net') ||
        dnsDomainIs(host, '.sourceforge.net') ||
        dnsDomainIs(host, '.sf.net') ||
        dnsDomainIs(host, '.ggpht.com') ||
        dnsDomainIs(host, '.voluum.com') ||
        dnsDomainIs(host, '.metamarkets.com') ||
        dnsDomainIs(host, '.indianvisaonline.gov.in') ||
        dnsDomainIs(host, '.gmail.com') ||
        dnsDomainIs(host, '.astrill.com') ||
        dnsDomainIs(host, '.digitalocean.com') ||
        dnsDomainIs(host, '.tableau.com') ||
        dnsDomainIs(host, '.webtype.com') ||
        dnsDomainIs(host, '.tableausoftware.com') ||
        dnsDomainIs(host, '.admob.com') ||
        dnsDomainIs(host, '.appnext.com') ||
        dnsDomainIs(host, '.googlesyndication.com') ||
        dnsDomainIs(host, '.godaddy.com') ||
        dnsDomainIs(host, '.whatsthestatuskuo.com') ||
        dnsDomainIs(host, '.eyewearguides.co') ||
        dnsDomainIs(host, '.moolahmedia.com') ||
        dnsDomainIs(host, 'go4mumbai.com') ||
        dnsDomainIs(host, '.digitalelement.com') ||
	dnsDomainIs(host, '.goo.gl') ||
        dnsDomainIs(host, '.googleapis.com') ||
        dnsDomainIs(host, '.gstatic.com') ||
        dnsDomainIs(host, 'accounts.youtube.com') ||
        dnsDomainIs(host, '.mega.nz') ||
        dnsDomainIs(host, '.mvnrepository.com') ||
        dnsDomainIs(host, '.html5rocks.com') ||
        dnsDomainIs(host, '.vimeo.com') ||
        dnsDomainIs(host, '.box.com') ||
        dnsDomainIs(host, '.twimg.com') ||
        dnsDomainIs(host, '.twitter.com') ||
        dnsDomainIs(host, '.youappi.com') ||
        dnsDomainIs(host, '.apkpure.com') ||
        dnsDomainIs(host, '.jeasyui.com') ||
        dnsDomainIs(host, '.fian.my.id') ||
        dnsDomainIs(host, 'developer.android.com') ||
        dnsDomainIs(host, '.flurry.com') ||
        dnsDomainIs(host, '.evus.gov') ||
        dnsDomainIs(host, '.chinadigitaltimes.net') ||
        dnsDomainIs(host, '.playstation.com') ||
        dnsDomainIs(host, '.cloudflare.com') ||
        dnsDomainIs(host, '.nodejs.org') ||
        dnsDomainIs(host, '.npmjs.com') ||
        dnsDomainIs(host, '.shadowsocks.org') ||
        dnsDomainIs(host, '.fb.me') ||
        dnsDomainIs(host, '.appspot.com') ||
        dnsDomainIs(host, '.fbcdn.net') ||
        dnsDomainIs(host, '.applovin.com') ||
        dnsDomainIs(host, '.appsflyer.com') ||
        dnsDomainIs(host, '.adjust.com') ||
        dnsDomainIs(host, '.adsbridge.com') ||
        dnsDomainIs(host, '.webrtc.org') ||
        dnsDomainIs(host, '.expressvpn.com') ||
        dnsDomainIs(host, '.shopify.com') ||
        dnsDomainIs(host, 'source.android.com') ||
        dnsDomainIs(host, '.instagram.com') ||
        dnsDomainIs(host, 'datastax.github.io') ||
        dnsDomainIs(host, '.cloudfront.net') ||
        dnsDomainIs(host, 'aws.amazon.com') ||
        dnsDomainIs(host, '.amazonaws.com') ||
        dnsDomainIs(host, 'onedrive.live.com') ||
        dnsDomainIs(host, '.amazonwebservices.com'))  
    {    
    return autoproxy;
    } 
    else 
    {
        return 'DIRECT';
    }
}
