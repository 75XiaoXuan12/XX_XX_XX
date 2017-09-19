function FindProxyForURL(url, host) {
  var autoproxy = 'PROXY 54.223.174.122:9292';
  var defaultproxy = 'DIRECT';
  if (isPlainHostName(host) ||
    host.indexOf('127.') == 0 ||
    host.indexOf('192.168.') == 0 ||
    host.indexOf('10.') == 0 ||
    shExpMatch(host, 'localhost.*'))
  {
    return 'DIRECT';
  }
  else if (
    //google
    shExpMatch(host, '*.google*.*') ||
    shExpMatch(host, 'google*.*') ||
    dnsDomainIs(host, 'google.com') ||
    dnsDomainIs(host, 'gstatic.com') ||
    //social
    dnsDomainIs(host, 'facebook.com') ||
    dnsDomainIs(host, 'pinterest.com') ||
    dnsDomainIs(host, 'reddit.com') ||
    dnsDomainIs(host, 'instagram.com') ||
    dnsDomainIs(host, 'snapchat.com') ||
    //youtube
    dnsDomainIs(host, 'youtube.com') ||
    dnsDomainIs(host, 'ggpht.com') ||
    dnsDomainIs(host, 'ytimg.com') ||
    //tools
    dnsDomainIs(host, 'dropbox.com') ||
    dnsDomainIs(host, 'droppages.com') ||
    dnsDomainIs(host, 'goo.gl') ||
    dnsDomainIs(host, 'sublimetext.com') ||
    dnsDomainIs(host, 'chrome.com') ||
    dnsDomainIs(host, 'chromium.org'))
  {
    return autoproxy;
  }
  else
  {
    return 'DIRECT';
  }
}
