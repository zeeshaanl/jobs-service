#!/usr/bin/env bash
scp dist/jobs-service.zip root@138.68.110.30:/root
echo "File uploaded"
ssh root@138.68.110.30 'bash -s' << EOF
    unzip -o jobs-service.zip -d jobs-service
    rm -rf jobs-service.zip
    pm2 reload
EOF