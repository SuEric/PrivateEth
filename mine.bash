geth --etherbase $1 --mine --unlock $1 --datadir ./Blockchain --networkid 1999 --nodiscover console 2>>"mineAcc"$1".log"
