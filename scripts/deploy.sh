#!/usr/bin/env bash
scp dist/jobs-service.zip root@138.68.110.30:/root
echo "File uploaded"
ssh root@138.68.110.30 'bash -s' << EOF
    unzip -o jobs-service.zip -d jobs-service
    rm -rf jobs-service.zip
    . /root/.nvm/nvm.sh
    cd jobs-service
    npm run db:create jobi
    npm run db:migration:up
EOF

#If Postgres authentication problem - https://stackoverflow.com/questions/10845998/i-forgot-the-password-i-entered-during-postgres-installation