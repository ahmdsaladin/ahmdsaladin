#!/bin/bash

# CVE-2025-55182
# CVE-2025-66478

if [ -z "$1" ]; then
    echo -e "Usage: $0 <url>"
    exit 1
fi

DOMAIN="$1"
PAYLOAD=$(printf '\x01\x02')

HEADERS=(
    "-H" "Next-Action: x"
    "-H" "X-Nextjs-Request-Id: b5dce965"
    "-H" "Next-Router-State-Tree: %5B%22%22%2C%7B%22children%22%3A%5B%22__PAGE__%22%2C%7B%7D%2Cnull%2Cnull%5D%7D%2Cnull%2Cnull%2Ctrue%5D"
    "-H" "Content-Type: multipart/form-data; boundary=----WebKitFormBoundaryx8jO2oVc6SWP3Sad"
)

RESPONSE=$(curl -s -i -s -X POST "${HEADERS[@]}" \
     --data-binary $'------WebKitFormBoundaryx8jO2oVc6SWP3Sad\r\nContent-Disposition: form-data; name="1_n"\r\n\r\n["$K1"]\r\n------WebKitFormBoundaryx8jO2oVc6SWP3Sad\r\nContent-Disposition: form-data; name="0_"\r\n\r\n'"$PAYLOAD"$'\r\n------WebKitFormBoundaryx8jO2oVc6SWP3Sad--\r\n' \
    "$DOMAIN")

STATUS_CODE=$(echo "$RESPONSE" | head -n 1 | awk '{print $2}')
if [[ "$STATUS_CODE" == "500" ]] && echo "$RESPONSE" | grep -q 'E{"digest":"2971658870"}'; then
    echo -e "\n\033[31m[!] RESULT: VULNERABLE\033[0m" # Red color
else 
    echo -e "\n\033[32m[+] RESULT: NOT VULNERABLE\033[0m" # Green color
    echo -e "\nHTTP Status: $STATUS_CODE"
fi
