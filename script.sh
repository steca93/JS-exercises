#!/bin/bash
result="$(curl -X GET "https://dctars.corp.adobe.com:3366/accounts?locked=true" -H "accept: application/json" -k)"
echo ${result}