# Remove all the blockchain
./clearChain.bash

# Init the blockchain with a Genesis file
geth --identity "MyTestNetNode" --datadir ./Blockchain --networkid 1999 --nodiscover init $1

# Blockchain initialization completed
echo "New blockchain created!"
