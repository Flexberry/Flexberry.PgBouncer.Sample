CREATE USER flexberryuser WITH password 'jhv';
CREATE USER securityuser WITH password '123';
CREATE USER audituser WITH password '123';
CREATE USER appuser WITH password '123';
--todo: securityuser + audituser + appuser -> grant permissions on tables, not databases

CREATE DATABASE securitydb;
GRANT ALL privileges ON DATABASE securitydb TO flexberryuser;
GRANT ALL privileges ON DATABASE securitydb TO securityuser;

CREATE DATABASE auditdb;
GRANT ALL privileges ON DATABASE auditdb TO flexberryuser;
GRANT ALL privileges ON DATABASE auditdb TO audituser;

CREATE DATABASE appdb;
GRANT ALL privileges ON DATABASE appdb TO flexberryuser;
GRANT ALL privileges ON DATABASE appdb TO appuser;
