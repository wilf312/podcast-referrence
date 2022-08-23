for VAL in `cat ./shell/url.txt`
  do
    echo $VAL;


curl=`cat <<EOS
curl 'https://anchor.fm/s/319a2820/podcast/rss' \
  -H 'authority: anchor.fm' \
  -H 'accept: */*' \
  -H 'accept-language: en-US,en;q=0.9,ja;q=0.8,ko;q=0.7' \
  -H 'range: bytes=0-' \
  -H 'referer: https://podcasts.apple.com/' \
  -H 'sec-ch-ua: "Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "macOS"' \
  -H 'sec-fetch-dest: audio' \
  -H 'sec-fetch-mode: no-cors' \
  -H 'sec-fetch-site: cross-site' \
  -H 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36' \
  --compressed
EOS`
${curl}
    # curl '$VAL' \
    #   -H 'authority: anchor.fm' \
    #   -H 'accept: */*' \
    #   -H 'accept-language: en-US,en;q=0.9,ja;q=0.8,ko;q=0.7' \
    #   -H 'range: bytes=0-' \
    #   -H 'referer: https://podcasts.apple.com/' \
    #   -H 'sec-ch-ua: "Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"' \
    #   -H 'sec-ch-ua-mobile: ?0' \
    #   -H 'sec-ch-ua-platform: "macOS"' \
    #   -H 'sec-fetch-dest: audio' \
    #   -H 'sec-fetch-mode: no-cors' \
    #   -H 'sec-fetch-site: cross-site' \
    #   -H 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36' \
    #   --compressed >> `$VAL.xml`
  done
