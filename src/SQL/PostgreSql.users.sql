CREATE USER flexberryuser WITH password 'jhv';
CREATE USER securityuser WITH password '123';
CREATE USER audituser WITH password '123';
CREATE USER appuser WITH password '123';

CREATE DATABASE securitydb;
GRANT ALL privileges ON DATABASE securitydb TO flexberryuser;
REVOKE CONNECT ON DATABASE securitydb FROM PUBLIC;
GRANT CONNECT ON DATABASE securitydb TO securityuser;

CREATE DATABASE auditdb;
GRANT ALL privileges ON DATABASE auditdb TO flexberryuser;
REVOKE CONNECT ON DATABASE auditdb FROM PUBLIC;
GRANT CONNECT ON DATABASE auditdb TO audituser;

CREATE DATABASE appdb;
GRANT ALL privileges ON DATABASE appdb TO flexberryuser;
REVOKE CONNECT ON DATABASE appdb FROM PUBLIC;
GRANT CONNECT ON DATABASE appdb TO appuser;

-- grant all to super admin:
GRANT ALL ON ALL TABLES IN SCHEMA public TO flexberryuser;
