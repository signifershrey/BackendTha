
## Redis

Redis is an open source, advanced key-value store and 
an apt solution for building highperformance, scalable web applications.

## Redis Advantage

1. Redis holds its database entirely in the memory,using the disk only for persistence.
2. Exceptionally fast − Redis is very fast and can perform about 110000 SETs per second, about 81000 GETs per second.
3. Operations are atomic − All Redis operations are atomic, which ensures that if two clients concurrently access, Redis server will receive the updated value.
4. Supports rich data types − Redis natively supports most of the datatypes that developers already know such as list, set, sorted set, and hashes.

  
## Installation on Ubuntu or WSL


```bash
  sudo apt install redis-server
  sudo service redis-server start
  redis-cli
```
This will open a redis-prompt
```
redis 127.0.0.1:6379>
```
##Data Types

Redis supports 5 types of data types

 - [DataTypes](https://www.tutorialspoint.com/redis/redis_data_types.htm)

Strings ,   Hashes  ,Lists ,Sets ,Sorted Sets 


Some Basic Commands 

- SET `key` `val`
- GET `key`
- TTL `key`
- DEL `key`
- EXISTS `key`
- FLUSHALL
- EXPIRE `key` `time` (seconds)

---

Using `Arrays` in redis 

- LPUSH arr val
- RPUSH arr val
- LRANGE arr start stop
- LPOP arr
- RPOP arr

---

`sets` - avoids duplicates 

- adding to a set - `SADD name value`
- get all values of a set - `SMEMBERS setName`

---

`Objects` - can have nested properties

- adding a value - `HSET key field val`
- getting a value - `HGET key field`
- get all values - `HGETALL key`
- delete something - `HDEL key field`
- if exists or not - `HEXISTS key field`

## Postgres SQL

### Setup 

1. Follow this [blog](https://kontext.tech/column/sql-databases/616/install-postgresql-on-wsl) to setup _postgres_ on **wsl**
2. To start postgres server - `sudo service postgresql start`
3. enter postgres prompt - `sudo -u postgres psql`




#Redis resources:

-Beginner/intermediate : https://www.tutorialspoint.com/redis/index.htm

-advance: https://redis.io/documentation
