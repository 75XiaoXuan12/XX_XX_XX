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
  else if (shExpMatch(host, '*.google*.*') ||
    dnsDomainIs(host, 'google.com') ||
    dnsDomainIs(host, 'reddit.com') ||
    dnsDomainIs(host, 'facebook.com') ||
    dnsDomainIs(host, 'instagram.com') ||
    dnsDomainIs(host, 'pinternet.com') ||
    dnsDomainIs(host, 'snapchat.com') ||
    dnsDomainIs(host, 'twitter.com') ||
    dnsDomainIs(host, 'youtube.com') ||
    dnsDomainIs(host, 'goo.gl') ||
    dnsDomainIs(host, 'dropbox.com') ||
    dnsDomainIs(host, 'droppages.com') ||
    dnsDomainIs(host, 'github.com') ||
    dnsDomainIs(host, 'gist.github.com') ||
    dnsDomainIs(host, 'sublimetext.com') ||
    dnsDomainIs(host, 'android.com') ||
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
