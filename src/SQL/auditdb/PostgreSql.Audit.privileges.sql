--liquibase formatted sql
--changeset flexberryuser:2023-10-03-13:00-audit-privileges

-- revoke default permissions:
REVOKE ALL ON ALL TABLES IN SCHEMA public FROM PUBLIC;
REVOKE ALL ON SCHEMA public FROM PUBLIC;

-- grant audituser readwrite:
GRANT USAGE ON SCHEMA public TO audituser;
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO audituser;
