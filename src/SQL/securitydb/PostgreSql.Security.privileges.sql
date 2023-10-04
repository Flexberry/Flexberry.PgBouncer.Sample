--liquibase formatted sql
--changeset flexberryuser:2023-10-03-13:00-security-privileges

-- revoke default permissions:
REVOKE ALL ON ALL TABLES IN SCHEMA public FROM PUBLIC;
REVOKE ALL ON SCHEMA public FROM PUBLIC;

-- grant securityuser readwrite:
GRANT USAGE ON SCHEMA public TO securityuser;
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO securityuser;
