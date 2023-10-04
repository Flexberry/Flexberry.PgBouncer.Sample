﻿--liquibase formatted sql
--changeset flexberryuser:2023-10-03-13:00-audit

CREATE TABLE Audit (
		primaryKey UUID NOT NULL,
		UserName VARCHAR(1024) NULL,
		UserLogin VARCHAR(1024) NULL,
		OperationId UUID NULL,
		OperationTags VARCHAR(255) NULL,
		ObjectType VARCHAR(1024) NULL,
		ObjectPrimaryKey VARCHAR(38) NULL,
		OperationTime TIMESTAMP(3) NOT NULL,
		OperationType VARCHAR(255) NOT NULL,
		ExecutionStatus VARCHAR(10) NOT NULL,
		Source VARCHAR(255) NULL,
		SerializedFields JSONB NULL,
		HeadAuditEntity UUID NULL,
		PRIMARY KEY (primaryKey));

	ALTER TABLE Audit ADD CONSTRAINT FK2b809dfb762a4e9db0096d2b1fe889ae FOREIGN KEY (HeadAuditEntity) REFERENCES Audit;
	CREATE INDEX Indexa91db9c259624f959230d031bc90415c on Audit (HeadAuditEntity);
	CREATE INDEX Indexa91db9c259624f959230d031bc90416c on Audit (OperationTime);
	CLUSTER Audit USING Indexa91db9c259624f959230d031bc90416c;
